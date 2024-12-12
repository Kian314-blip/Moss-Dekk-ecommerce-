import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Partner from "@/components/Partner";
import GetInTouch from "@/components/GetInTouch";
import Main_Image from "@/components/Main_Image";
import { ChangeEvent, SetStateAction, useState } from "react";
import { useEffect } from 'react';
import 'swiper/swiper-bundle.css';
import Calendar from "@/components/calendar";
import axios from "axios";
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Faktura_Modal from "@/modal/faktura_modal";
import { Console } from "console";
import { tree } from "next/dist/build/templates/app-page";
import Faktura_Another_Modal from "@/modal/faktura_another_modal";
const inter = Inter({ subsets: ["latin"] });
import LoadingComponent from "@/components/onLoad"
import BackToTop from "@/components/backToTop";

const backend_url = process.env.NEXT_PUBLIC_API_URL

export default function Pricing() {
  const [loading, setLoading] = useState(false);
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const [dateTime, setDateTime] = useState<string>('');
  const [prices, setPrices] = useState<any>({ price128: '', price165: '' });
  const [balancePrice, setBalancePrice] = useState<any>(0);
  const [count, setCount] = useState<number>(1); // Default count is 1
  const [taxPrice, setTaxPrice] = useState<number>(0);
  const [isVisible, setIsVisible] = useState(false);
  const [location, setLocation] = useState<string>("none");
  const [totalProductPrice, setTotalProductPrice] = useState<number>(0);
  const [firstProductPrice, setFirstProductPrice] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [enviromenttax, setEnviromentTax] = useState<number>(0);
  const [balancing, setBalancing] = useState<number>(0);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);
  const [regNr, setRegNr] = useState('');
  const [navn, setNavn] = useState('');
  const [mobilNr, setMobilNr] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isValid, setIsValid] = useState<boolean>(true);
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    if (!/\S+@\S+\.\S+/.test(value)) {
      setEmailError('Please enter a valid email address.');
    } else {
      setEmailError('');
    }
  };
  const handleDateTimeSelected = (dateTime: string) => {
    setDateTime(dateTime);
  };
  const handleRegChange = async (value: string) => {
    setRegNr(value);
    setLoading(true);
    // if (value.length <= 7) {
    //   if (value.length === 7) {
    //     const isValidInput = /^[a-zA-Z]{2}[0-9]{5}$/.test(value);
    //     setIsValid(isValidInput);
    //     setRegNr(value);
    //     if (isValid) {
    try {
      const formDataParams = new URLSearchParams();
      formDataParams.append('method', 'checkedRegNr');
      formDataParams.append('modal', "1");
      formDataParams.append('regNr', regNr);
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/queryNewSite.php`,
        formDataParams,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );
      if (response.data.result == "success") {
        setEmail(response.data.email);
        setNavn(response.data.name);
        setMobilNr(response.data.mobile);
        setLocation(response.data.location);
        setLoading(false);
        localStorage.setItem("regNr",regNr);
      }
      else {
        toast("Please enter correct RegNr", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          type: "warning",
        });
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
    }
  }
  //   } else {
  //     setIsValid(true); 
  //   }
  // }
  // };
  const handlesubmit = async (e: React.FormEvent) => {

    e.preventDefault();
    e.stopPropagation();
    if (!emailError && isValid == true && email && regNr && navn && dateTime && mobilNr && location == "moss") {

      setPaymentModalOpen(prev => !prev);

    } else {
      toast("Please enter correct information", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        type: "warning", // Changed to warning or error if more appropriate
      });
    }

  }
  const toggleCalendar = () => {
    setIsModalOpen(prev => !prev)
  };
  const getServices = async (value: string) => {
    if (value === "none") {
      setIsVisible(false);
      return;
    } else {
      setIsVisible(true);
    }
    try {
      const formDataParams = new URLSearchParams();
      formDataParams.append('method', 'getServices');
      formDataParams.append('type', 'dekk');
      formDataParams.append('workType', 'New Tyre');
      formDataParams.append('locationID', '18');

      const response = await axios.post(
        `${backend_url}/queryNewSite.php`,
        formDataParams,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );

      if (response.data && response.data[1]) {
        const serviceData = response.data[1];
        const price128Match = serviceData.match(/<span id="price128">(\d+)<\/span>/);
        const price165Match = serviceData.match(/<span id="price165">(\d+)<\/span>/);
        const price128 = price128Match ? parseInt(price128Match[1], 10) : 0;
        const price165 = price165Match ? parseInt(price165Match[1], 10) : 0;
        setBalancePrice(price128);
        setTaxPrice(price165)
        setIsVisible(true);
      } else {
        console.error('Services field is missing or invalid in the API response');
      }
    } catch (error) {
      console.error('Error fetching services:', error);
    }
  };
  const selectCount = (value: string) => {
    setCount(parseInt(value, 10));
    localStorage.setItem("stockCount", value.toString());
  };
  const calculateTotalPurchaseAmount = (items: { purchaseAmount: number }[]) => {
    return items.reduce((total, item) => total + item.purchaseAmount, 0);
  };
  const calculateTotalPrice = (items: { price: string | number, purchaseAmount: number }[]) => {
    return items.reduce((total, item) => {
      const price = typeof item.price === "string" ? parseFloat(item.price) : item.price;
      return total + (price * item.purchaseAmount);
    }, 0);
  };
  useEffect(() => {
    const totalPurchaseAmount = calculateTotalPurchaseAmount(cartItems);
    const totalPrice = calculateTotalPrice(cartItems);
    setTotalCount(totalPurchaseAmount);
    const calculatedEnviromentTax = totalPurchaseAmount * taxPrice;
    const calculatedBalancing = totalPurchaseAmount * balancePrice;
    setEnviromentTax(calculatedEnviromentTax);
    setBalancing(calculatedBalancing);
    let finalPrice = totalPrice;
    if (location !== "none") {
      finalPrice += calculatedEnviromentTax + calculatedBalancing;
    }
    setTotalProductPrice(finalPrice);
    localStorage.setItem("totalprice", finalPrice.toString());
  }, [cartItems, taxPrice, balancePrice, location]);
  const handleCloseModal = () => {
    setPaymentModalOpen(false)
  }
  const generateOptions = (totalCount: number): JSX.Element[] => {
    const options = [];
    for (let i = 1; i <= totalCount; i++) {
      options.push(
        <option key={i} value={i} className='text-black text-sm text-lg font-normal font-["Inter"] leading-5'>
          {i}
        </option>
      );
    }
    return options;
  };
  return (
    <div className="home-container flex flex-col">
      <Header />
      <main style={{ "width": '100%' }}>
        <div className="main-container flex flex-col justify-center w-[100%]">
          <Main_Image />
          <div className="checkout-pan flex flex-col bg-white pt-[66px] pb-[84px] pl-[306px] pr-[255px] max-[1650px]:px-[80px] max-[1650px]:pt-[44px] max-[1650px]:pb-[45px] max-[1650px]:items-center max-[772px]:px-[16px] max-[772px]:pt-[24px] max-[772px]:pb-[26px]">
            <div className="flex flex-col">
              <div className="checkout-pan-title">
                <p className="text-4xl leading-10 font-semi-bold text-black max-[1024px]:text-2xl">Kjøp dekk</p>
              </div>
              <div className="pt-[20px] max-[1024px]:pt-[26px] max-[772px]:pt-[9px]">
                <p className="text-lg leading-7 font-normal font-['Inter'] text-[#6D6D6D]">Fill in all fields below and select a service (optional)</p>
              </div>
              <div className="pt-[29px] max-[772px]:pt-[13px]">
                <p className="text-xl leading-7 font-semi-bold text-black max-[1024px]:text-lg">Pris: <span className="text-4xl leading-10 font-semi-bold text-[#73C018] max-[1024px]:text-2xl">Nok {totalProductPrice}</span></p>
              </div>
              <div className="gap-[14px] flex flex-col pt-[26px] max-[772px]:pt-[14px]">
                <div className="flex flex-row">
                  <p className="w-[90px] text-lg leading-7 font-normal font-['Inter'] text-[#6D6D6D]">Reg Nr:</p>
                  <p className="text-lg leading-7 font-normal font-['Inter'] text-[#E21632]">*</p>
                </div>
                <input
                  className="w-[633px] py-[14px] px-[10px] border-[#AAAAAA] border-[2px] text-black outline-none text-lg leading-7 font-normal font-['Inter'] max-[1024px]:w-[478px] max-[772px]:w-[343px] focus:outline-none focus:ring-0 focus:border-[#73C018]"
                  value={regNr}
                  pattern="[a-zA-Z]{2}[0-9]{5}$" type="text"/* maxLength={7}*/
                  onBlur={(e) => handleRegChange(e.target.value)}
                  onChange={(e) => setRegNr(e.target.value)}
                >

                </input>
              </div>
              <div className="gap-[14px] flex flex-col pt-[14px] max-[772px]:pt-[14px]">
                <div className="flex flex-row">
                  <p className="w-[90px] text-lg leading-7 font-normal font-['Inter'] text-[#6D6D6D]">Navn:</p>
                  <p className="text-lg leading-7 font-normal font-['Inter'] text-[#E21632]">*</p>
                </div>
                <input
                  value={navn}
                  onChange={(e) => setNavn(e.target.value)}
                  className="w-[633px] py-[14px] px-[10px] border-[#AAAAAA] border-[2px] text-black outline-none text-lg leading-7 font-normal font-['Inter'] max-[1024px]:w-[478px] max-[772px]:w-[343px] focus:outline-none focus:ring-0 focus:border-[#73C018]"
                >
                </input>
              </div>
              <div className="gap-[14px] flex flex-col pt-[14px] max-[772px]:pt-[14px]">
                <div className="flex flex-row">
                  <p className="w-[90px] text-lg leading-7 font-normal font-['Inter'] text-[#6D6D6D]">Mobil nr:</p>
                  <p className="text-lg leading-7 font-normal font-['Inter'] text-[#E21632]">*</p>
                </div>
                <input
                  className="w-[633px] py-[14px] px-[10px] border-[#AAAAAA] border-[2px] text-black outline-none text-lg leading-7 font-normal font-['Inter'] max-[1024px]:w-[478px] max-[772px]:w-[343px] focus:outline-none focus:ring-0 focus:border-[#73C018]"
                  value={mobilNr}
                  onChange={(e) => setMobilNr(e.target.value)}
                >
                </input>
              </div>
              <div className="gap-[14px] flex flex-col pt-[14px] max-[772px]:pt-[14px] max-[772px]:pt-[14px]">
                <div className="flex flex-row">
                  <p className="w-[90px] text-lg leading-7 font-normal font-['Inter'] text-[#6D6D6D]">Email</p>
                  <p className="text-lg leading-7 font-normal font-['Inter'] text-[#E21632]">*</p>
                </div>
                <input
                  className="w-[633px] py-[14px] px-[10px] border-[#AAAAAA] border-[2px] text-black outline-none text-lg leading-7 font-normal font-['Inter'] max-[1024px]:w-[478px] max-[772px]:w-[343px] focus:outline-none focus:ring-0 focus:border-[#73C018]"
                  onChange={handleEmailChange}
                  value={email}
                ></input>
              </div>
              <div className="pt-[14px] flex flex-col gap-[2px]">
                <div className="flex flex-row">
                  <p className="w-[58px] text-sm leading-5 font-normal font-['Inter'] text-[#6D6D6D]">Location</p>
                  <p className="text-lg leading-7 font-normal font-['Inter'] text-[#E21632]">*</p>
                </div>
                <div className="relative w-[392px] max-[772px]:w-[343px]">
                  <select
                    onClick={(e) => {
                      const target = e.target as HTMLSelectElement;
                      getServices(target.value);
                      setLocation(target.value);
                    }}
                    className="h-[56px] block w-[392px] px-[10px] py-[18px] text-black text-sm text-lg font-normal font-['Inter'] leading-5 rounded-none border-[#AAAAAA] border-[2px] focus:outline-none focus:ring-0 focus:border-[#73C018] max-[772px]:w-[343px]"
                    style={{ outline: "#73C018" }}
                  >
                    <option value="none" selected className="text-black text-sm text-lg font-normal font-['Inter'] leading-5">Select a location</option>
                    <option value="moss" className="text-black text-sm text-lg font-normal font-['Inter'] leading-5">Moss Dekk AS</option>
                  </select>

                </div>

              </div>

              {isVisible ? (
                <div className="pt-[18px] flex flex-col gap-[16px] w-[1104px] max-[1230px]:w-[714px] max-[772px]:pt-[24px] max-[772px]:w-[343px] max-[772px]:gap-[10px]">
                  <div className="w-full pl-[170px] pr-[157px] flex flex-row max-[1230px]:pr-[16px] max-[772px]:pl-[6px] max-[772px]:pr-[13px]">
                    <p className="text-base leading-6 font-medium mr-[375px] text-black max-[1230px]:mr-[271px] max-[772px]:mr-[137px] max-[772px]:text-sm">Services</p>
                    <p className="text-base leading-6 font-medium mr-[200px] text-black max-[1230px]:mr-[72px] max-[772px]:mr-[37px] max-[772px]:text-sm">Quantity</p>
                    <p className="text-base leading-6 font-medium text-black max-[772px]:text-sm">Total</p>
                  </div>
                  <div className="flex flex-row py-[15px] pl-[40px] pr-[140px] bg-[#F7F7F7] rounded-[4px] max-[772px]:pl-[6px] max-[772px]:pr-[11px]">
                    <div className="flex flex-col gap-[4px] w-[526px] max-[1230px]:w-[438px] max-[772px]:w-[183px]">
                      <div className="flex flex-row gap-[41px] max-[772px]:gap-[0px] max-[772px]:items-center">
                        <label className="flex items-center max-[772px]:mr-[11px]">
                          <input type="radio" name="option" value="no" className="form-radio h-[24px] w-[24px] text-[#73C018] focus:ring-[#73C018] focus:outline-[#73C018] appearance-none" disabled />
                        </label>
                        <p className="text-lg text-[#787881] leading-7 font-medium w-[29px] max-[772px]:mr-[5px] max-[772px]:text-xs max-[772px]:w-[19px]">Nei</p>
                        <p className="text-lg text-[#787881] leading-7 font-medium w-[393px] whitespace-nowrap overflow-hidden text-ellipsis max-[1230px]:w-[309px] max-[772px]:text-xs">VERKSTED MATRIELL</p>
                      </div>
                      <div className="flex flex-row gap-[41px] max-[772px]:gap-[0px] max-[772px]:items-center">
                        <label className="flex items-center max-[772px]:mr-[11px]">
                          <input type="radio" name="option" value="yes" className="form-radio h-[24px] w-[24px] text-[#73C018] focus:ring-[#73C018] focus:outline-[#73C018]" checked disabled />
                        </label>
                        <p className="text-lg text-[#787881] leading-7 font-medium w-[29px] max-[772px]:mr-[5px] max-[772px]:text-xs max-[772px]:w-[19px]">Ja </p>
                        <p className="text-lg text-[#787881] leading-7 font-medium  max-[772px]:text-xs">23&quot;</p>
                      </div>
                    </div>
                    <div className="relative w-[62px] pl-[40px] flex items-center  max-[772px]:pl-[12px]">

                      <select
                        className="h-[34px] block w-[62px] rounded-[4px] pr-[30px] py-[5px] text-black text-sm text-base font-normal font-['Inter'] leading-6 border-[#AAAAAA] border-[2px] focus:outline-none focus:ring-0 focus:border-[#73C018]"
                        style={{ outline: "#73C018" }}
                        value={totalCount}
                        disabled
                      >
                        {generateOptions(totalCount)}
                        {/* <option value="1" className="text-black text-sm text-lg font-normal font-['Inter'] leading-5">1</option> */}
                      </select>

                    </div>
                    <div className="pl-[253px] flex items-center max-[1230px]:pl-[105px]  max-[772px]:pl-[40px]">
                      <p className="text-lg text-[#787881] leading-7 font-medium  max-[772px]:text-base">{balancing}</p>
                    </div>
                  </div>
                  <div className="flex flex-row py-[15px] pl-[40px] pr-[140px] bg-[#F7F7F7] rounded-[4px] max-[772px]:pl-[6px] max-[772px]:pr-[11px]">
                    <div className="flex flex-col gap-[4px] w-[526px] max-[1230px]:w-[438px] max-[772px]:w-[183px]">
                      <div className="flex flex-row gap-[41px] max-[772px]:gap-[0px] max-[772px]:items-center">
                        <label className="flex items-center max-[772px]:mr-[11px]">
                          <input type="radio" name="option1" value="no" className="form-radio h-[24px] w-[24px] text-[#73C018] focus:ring-[#73C018] focus:outline-[#73C018] appearance-none" disabled />
                        </label>
                        <p className="text-lg text-[#787881] leading-7 font-medium w-[29px] max-[772px]:mr-[5px] max-[772px]:text-xs max-[772px]:w-[19px]">Nei</p>
                        <p className="text-lg text-[#787881] leading-7 font-medium w-[393px] whitespace-nowrap overflow-hidden text-ellipsis max-[1230px]:w-[309px] max-[772px]:text-xs">KUN AVBALANSERING 1 STK DEKK PÅ BIL 13-</p>
                      </div>
                      <div className="flex flex-row gap-[41px] max-[772px]:gap-[0px] max-[772px]:items-center">
                        <label className="flex items-center max-[772px]:mr-[11px]">
                          <input type="radio" name="option1" value="yes" className="form-radio h-[24px] w-[24px] text-[#73C018] focus:ring-[#73C018] focus:outline-[#73C018]" checked disabled />
                        </label>
                        <p className="text-lg text-[#787881] leading-7 font-medium w-[29px] max-[772px]:mr-[5px] max-[772px]:text-xs max-[772px]:w-[19px]">Ja </p>
                        <p className="text-lg text-[#787881] leading-7 font-medium  max-[772px]:text-xs">23&quot;</p>
                      </div>
                    </div>
                    <div className="relative w-[62px] pl-[40px] flex items-center  max-[772px]:pl-[12px]">

                      <select
                        className="h-[34px] block w-[62px] rounded-[4px] pr-[30px] py-[5px] text-black text-sm text-base font-normal font-['Inter'] leading-6 border-[#AAAAAA] border-[2px] focus:outline-none focus:ring-0 focus:border-[#73C018]"
                        style={{ outline: "#73C018" }}
                        value={totalCount}
                        disabled
                      >
                        {generateOptions(totalCount)}

                      </select>
                    </div>
                    <div className="pl-[253px] flex items-center max-[1230px]:pl-[105px]  max-[772px]:pl-[40px]">
                      <p className="text-lg text-[#787881] leading-7 font-medium  max-[772px]:text-base">{enviromenttax}</p>
                    </div>
                  </div>
                </div>
              ) : (<></>)}

              <div className="pt-[36px] max-[1024px]:pt-[29px] max-[772px]:w-[345px] max-[772px]:pt-[19px]">
                <p className="text-lg leading-7 font-normal text-black font-['Inter'] max-[1024px]:text-sm ">Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.</p>
              </div>
              <div className="pt-[20px] flex flex-col gap-[18px] max-[1024px]:pt-[5px]">
                <div className="">
                  <p className="text-4xl leading-10 font-semi-bold text-black max-[1024px]:text-2xl  max-[772px]:text-lg">Select time and date</p>
                </div>
                <div onClick={toggleCalendar}>
                  <input
                    className="h-[56px] block w-[392px] px-[10px] py-[18px] text-black text-sm text-lg font-normal font-['Inter'] leading-5 rounded-none border-[#AAAAAA] border-[2px] focus:outline-none focus:ring-0 focus:border-[#73C018] max-[772px]:w-[343px]"
                    value={dateTime} onChange={(e) => { setDateTime(e.target.value); }}
                  >
                  </input>
                </div>
                {isModalOpen && (
                  <div className="w-[599px] text-black shadow max-[772px]:shadow-none max-[772px]:w-[334px]">
                    <Calendar onDateTimeSelected={handleDateTimeSelected} closeCalendar={toggleCalendar} />
                  </div>
                )}
              </div>
              <div className="pt-[19px] max-[1024px]:pt-[15px]">
                <div className="bg-[#EF4225] py-[11.86px] px-[10px] w-[145.89px]  max-[1024px]:w-[118px] cursor-pointer text-white" onClick={handlesubmit}>
                  <p className="text-lg leading-7 font-semi-bold  max-[1024px]:text-sm">PLACE ORDER</p>
                </div>
              </div>
            </div>
          </div>
          <ToastContainer />
          <Partner />
          <GetInTouch />
          <Footer />
        </div>
      </main>
      <Faktura_Another_Modal isOpen={paymentModalOpen} onClose={handleCloseModal} email={email} price={totalProductPrice} regNr={regNr} name={navn} mobile={mobilNr} date={dateTime} count={totalCount} envprice={taxPrice} totalPrice={totalProductPrice} />
      {loading && <LoadingComponent />}
      <BackToTop />

    </div>

  );
}

