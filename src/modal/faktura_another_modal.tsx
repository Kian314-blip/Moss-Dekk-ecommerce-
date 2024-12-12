import React, { use, useEffect, useRef, useState } from 'react';
import X_Cancel from "@/svg/X_cancel";
import ArrowDropUp from '@/svg/ArrowDropUp';
import ArrowDropDown_O from '@/svg/ArrowDropDown_O';
import Cheveron_Left from '@/svg/Cheveron_Left';
import Cheveron_Right from '@/svg/Cheveron_Right';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { useDispatch } from 'react-redux';
import LoadingComponent from "@/components/onLoad"

const backend_url = process.env.NEXT_PUBLIC_API_URL;

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  email: string;
  price: number;
  regNr: string;
  name: string;
  mobile: string;
  date: string;
  count: number;
  envprice: number;
  totalPrice: number
}

const Faktura_Another_Modal: React.FC<ModalProps> = ({ isOpen, onClose, email, price, regNr, name, mobile, date, count, envprice, totalPrice }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [iframeHeight, setIframeHeight] = useState(600); // Default height

  const [loading, setLoading] = useState(false);
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const modalRef = useRef<HTMLDivElement>(null);
  const adminModalRef = useRef<HTMLDivElement>(null);
  const paymentModalRef = useRef<HTMLDivElement>(null);
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Vipps/Kortbeating/debetaling");
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [day, setDay] = useState<string>("");
  const [orgNr, setOrgNr] = useState<string>("");
  const [paymentUrl, setPaymentUrl] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const serviceIds = useState<string>(",128,165")

  useEffect(() => {
    const handleIframeLoad = () => {
      // Check if the iframe content is accessible (same-origin)
      if (iframeRef.current && iframeRef.current.contentWindow) {
        try {
          const iframeDocument = iframeRef.current.contentDocument || iframeRef.current.contentWindow.document;

          // Example: Remove unnecessary div elements from the iframe's DOM
          const unnecessaryDivs = iframeDocument.querySelectorAll('.sc-kMribo');
          unnecessaryDivs.forEach(div => div.remove());

          // Adjust iframe height dynamically after removing elements
          const iframeContentHeight = iframeDocument.body.scrollHeight;
          setIframeHeight(iframeContentHeight); // Dynamically adjust height
        } catch (error) {
          console.log('Cannot access iframe content due to cross-origin restrictions.');
        }
      }
    };

    if (iframeRef.current) {
      iframeRef.current.onload = handleIframeLoad;
    }
  }, [paymentUrl]);

  const handleClickOutside = (event: MouseEvent) => {
    // Check if the click is outside both modals (main modal and admin modal)
    if (
      modalRef.current && !modalRef.current.contains(event.target as Node) &&
      adminModalRef.current && !adminModalRef.current.contains(event.target as Node) &&
      paymentModalRef.current && !paymentModalRef.current.contains(event.target as Node)
    ) {
      closeModal();
    }
  };

  const closeModal = () => {
    if (isAdminModalOpen) {
      setIsAdminModalOpen(false); // Only close the admin modal
    } else {
      onClose(); // Close the main modal
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    if (isOpen || isAdminModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
      window.addEventListener('click', handleClickOutside);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen, isAdminModalOpen]);

  if (!isOpen && !isAdminModalOpen) return null; // Render only when either modal is open


  const formatDateAndTime = (dateString: string) => {
    const [datePart, timePart] = dateString.split(" ");
    setDay(datePart);
    setTime(timePart);
  };

  // Hook to update day and time when `date` prop changes
  setTimeout(() => {
    formatDateAndTime(date)
  }, 3000); // Specify dependencies to avoid unnecessary re-renders

  const toggleDropdown = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpenDropdown((prev) => !prev);
  };

  const handleOptionClick = (option: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpenDropdown(false);

    if (option === "Admin") {
      setIsAdminModalOpen(true);
    } else {
      setSelectedOption(option);
    }
  };

  const validateAdminPassword = async () => {
    try {
      const formDataParams = new URLSearchParams();
      formDataParams.append('method', 'validateAdminPassword');
      formDataParams.append('password', password);

      const response = await axios.post(
        `${backend_url}/queryNewSite.php`,
        formDataParams,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );

      if (response.data == "success") {
        setErrorMessage("");
        setIsAdminModalOpen(false); // Close the admin modal
        setSelectedOption("Admin"); // Update the selection

      }
      if (response.data == "failed") {
        toast("Invalid password. Please try again.", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          type: "warning",
        });
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("An error occurred. Please try again later.");
    }
  };

  const handlePayment = async () => {
    try {
      const formDataParams = new URLSearchParams();
      formDataParams.append('method', 'tyreOrderWithoutLogin');
      formDataParams.append('locationID', '18');
      formDataParams.append('addressLocation', '');
      formDataParams.append('postcodeLocation', '');
      formDataParams.append('cityLocation', '');
      formDataParams.append('paymentDone', '0');
      if (selectedOption == "Admin") {
        formDataParams.append('orgNr', `921836686`);
        formDataParams.append('paymentMode', 'payAtShop');
      } else if (selectedOption == "Firmakunde/faktura") {
        formDataParams.append('orgNr', `${orgNr}`);
        formDataParams.append('paymentMode', 'orgNr');
      } else {
        formDataParams.append('paymentMode', 'payNow');
      }
      formDataParams.append('apiTyre', '1');
      formDataParams.append('tyreID', `${cartItems[0].id}`);
      // formDataParams.append('tyreID', `2999`);
      formDataParams.append('email', email);
      formDataParams.append('totalTime', `${null}`);
      formDataParams.append('workType', `newTyre`);

      formDataParams.append('price', `${price}`);
      formDataParams.append('regNr', `${regNr}`);
      formDataParams.append('name', `${name}`);
      formDataParams.append('mobile', `${mobile}`);
      formDataParams.append('date', `${day}`);
      formDataParams.append('time', `${time}`);
      formDataParams.append('serviceIDs', `${serviceIds}`);
      formDataParams.append('serviceCounts', `,${cartItems[0].purchaseAmount},${cartItems[0].purchaseAmount}`);
      formDataParams.append('tyres', `${cartItems[0].purchaseAmount}`);


      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/queryNewSite.php`,
        formDataParams,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );
      setPaymentUrl(response.data[2]);
      if (response.data[0] == "success") {
        window.location.href = `/order?RegNr=${regNr}&day=${day}&time=${time}&envprice=${envprice}&totalPrice=${totalPrice}`
      }
      else if (response.data[0] == "already ordered") {
        toast("This Reg Nr is already under process", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          type: "warning", // Changed to warning or error if more appropriate
        });
      }
      else if (response.data[0] == "no work") {
        toast("This work has not been assigned", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          type: "warning", // Changed to warning or error if more appropriate
        });
      }
      else if (response.data[0] == "no employee") {
        toast("No employee available at this time", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          type: "warning", // Changed to warning or error if more appropriate
        });
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again later.");
    }
  };
  const goToMainPage = () => {
    setLoading(true)
    window.location.href = "/"
  }

  if (!isOpen) return null;

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50" style={{zIndex:"15"}}>
          <div ref={modalRef} className="w-[838px] max-h-[100vh] overflow-y-auto hide-scrollbar flex flex-col h-[480px]">
            <div className="px-[30px] py-[31px] flex flex-row justify-between bg-[#18181B] items-center max-[590px]:p-[15px]">
              <p className="text-lg leading-7 font-medium text-[#73C018] max-[590px]:text-sm">Beataling Alternativ</p>
              <div onClick={closeModal} className='cursor-pointer'>
                <X_Cancel />
              </div>
            </div>
            <div className="pt-[63px] bg-[#1F1F1F] pl-[31px] pr-[21px] pb-[26px] gap-[72px] h-full flex flex-col justify-between">
              <div className="relative w-full flex flex-col gap-[20px] max-[610px]:items-center max-[610px]:gap-[10px]">
                <div className='flex flex-row gap-[31px] max-[610px]:flex-col max-[610px]:items-center max-[610px]:gap-[15px]'>
                  <div className='w-[200px]'>
                    <p className='text-lg leading-7 font-normal font-["Inter"] text-white'>Velg en betalings måte:</p>
                  </div>
                  <div className='flex'>
                    <div
                      className="h-[44px] w-[305px] flex items-center justify-center relative px-[16px] text-lg font-medium leading-7 text-white bg-[#18181B] rounded-[8px] border-[#73C018] border-[2px] cursor-pointer"
                      onClick={(e) => toggleDropdown(e)}
                    >
                      {selectedOption}
                      <div className='absolute right-[10px]'>
                        {isOpenDropdown ? <ArrowDropUp /> : <ArrowDropDown_O />}
                      </div>
                    </div>
                    {isOpenDropdown && (
                      <div className="absolute z-10 w-[305px] mt-[50px] border-[1px] border-[#818182] bg-[#18181B] rounded-[8px] shadow-lg pt-[12px] pb-[8px] gap-[2px]">
                        <div
                          className="cursor-pointer py-[3px] text-white hover:bg-[#73C018] hover:bg-[#1F1F1F] text-lg leading-7 font-normal font-['Inter'] text-center"
                          onClick={(e) => { handleOptionClick("Firmakunde/faktura", e) }}
                        >
                          Firmakunde/faktura
                        </div>
                        <div
                          className="cursor-pointer py-[3px] text-white hover:bg-[#73C018] hover:bg-[#1F1F1F] text-lg leading-7 font-normal font-['Inter'] text-center"
                          onClick={(e) => { handleOptionClick("Vipps/Kortbeating/debetaling", e) }}
                        >
                          Vipps/Kortbeating/debetaling
                        </div>
                        <div
                          className="cursor-pointer py-[3px] text-white hover:bg-[#73C018] hover:bg-[#1F1F1F] text-lg leading-7 font-normal font-['Inter'] text-center"
                          onClick={(e) => { handleOptionClick("Admin", e); }}
                        >
                          Admin
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {selectedOption === "Firmakunde/faktura" && (
                  <>
                    <div className='flex flex-row gap-[31px] max-[610px]:flex-col max-[610px]:items-center max-[610px]:gap-[15px]'>
                      <div className='w-[200px] max-[610px]:text-center'>
                        <p className='text-lg leading-7 font-normal font-["Inter"] text-white'>Organisation Nr:</p>
                      </div>
                      <div className='flex'>
                        <input
                          value={orgNr}
                          placeholder='Org Nr'
                          onChange={(e) => { setOrgNr(e.target.value) }}
                          className="modal-input h-[44px] focus:outline-none focus:ring-0 focus:border-[#73C018] w-[305px] flex items-center text-center justify-center px-[16px] text-lg font-medium leading-7 text-white bg-[#18181B] rounded-[8px] border-[#73C018] border-[2px]"
                        />
                      </div>
                    </div>
                    {/* <div className='flex flex-row gap-[31px] max-[610px]:flex-col max-[610px]:items-center max-[610px]:gap-[15px]'>
                      <div className='w-[200px] max-[610px]:text-center'>
                        <p className='text-lg leading-7 font-normal font-["Inter"]text-white'>Referance:</p>
                      </div>
                      <div className='flex'>
                        <input
                          placeholder='Referance'
                          className="modal-input h-[44px] focus:outline-none focus:ring-0 focus:border-[#73C018] w-[305px] flex items-center text-center justify-center px-[16px] text-lg font-medium leading-7 text-white bg-[#18181B] rounded-[8px] border-[#73C018] border-[2px]"
                        />
                      </div>
                    </div> */}
                  </>
                )}
              </div>
              <div className='flex flex-row justify-end gap-[9px]'>
                <div className='rounded-[8px] p-[10px] bg-[#E7E7E7] gap-[2px] flex flex-row items-center cursor-pointer' onClick={() => { goToMainPage() }}>
                  <Cheveron_Left />
                  <p className='text-lg leading-7 font-normal font-["Inter"] text-black'>Tilbake</p>
                </div>
                <div className='rounded-[8px] p-[10px] bg-[#73C018] gap-[2px] flex flex-row items-center cursor-pointer' onClick={handlePayment}>
                  <p className='text-lg leading-7 font-normal font-["Inter"] text-white'>Fortsett</p>
                  <Cheveron_Right />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {isAdminModalOpen && (
        <div className="fixed inset-0 z-19 flex justify-center items-center bg-black bg-opacity-50">
          <div ref={adminModalRef} className="bg-[#1F1F1F] p-6 rounded-md">
            <p>Enter Admin Password:</p>
            <input
              type="password"
              value={password}
              onChange={(e) => { setPassword(e.target.value); }}
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-0 focus:border-[#73C018] text-black"
            />
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            <div className="flex justify-end mt-4">
              <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={validateAdminPassword}>Submit</button>
              <button className="bg-red-500 text-white px-4 py-2 rounded ml-2" onClick={() => setIsAdminModalOpen(false)}>Close</button>
            </div>
          </div>
        </div>
      )}
      {paymentUrl && (
        <div className="fixed inset-0 z-19 flex justify-center items-center bg-black bg-opacity-50 w-full" style={{zIndex:'19'}}>
          <div ref={paymentModalRef} className="bg-white rounded-md max-[550px]:w-full flex iframe-height" style={{flexDirection:"column"}}>
            <div className='py-6 px-6 bg-[#2f2f2f] rounded-t-md max-[550px]:w-full max-[400px]:px-2'>
              <h3 className='text-white text-semi-bold text-xl'>Beataling </h3>
            </div>
            <div className='px-6 max-[400px]:px-1 overflow-y-scroll'>
              <iframe
                src={`${paymentUrl}?language=no&ui=inline&sdk=0.0.17`}
                frameBorder="0"
                scrolling="yes"
                allowTransparency={true}
                sandbox="allow-scripts allow-forms allow-same-origin allow-popups"
                className='w-[800px] max-[900px]:w-[500px] max-[550px]:w-full  overflow-scroll h-[1013px]'
              />

            </div>
            <div className="flex justify-end mt-4 pb-6 px-6 max-[400px]:px-2">
              <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={() => setPaymentUrl("")}>Close</button>
            </div>
          </div>
        </div>
      )}
      {loading && <LoadingComponent />}

    </>
  );
};

export default Faktura_Another_Modal;
