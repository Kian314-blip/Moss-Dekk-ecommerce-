import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Partner from "@/components/Partner";
import GetInTouch from "@/components/GetInTouch";
import Main_Image from "@/components/Main_Image";
import Tyre_Info_first from "@/svg/Tyre_Infor_first";
import Tyre_Infor_second from "@/svg/Tyre_Infor_second";
import Tyre_Infor_third from "@/svg/Tyre_Infor_third";
import { SetStateAction, useEffect, useRef, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';
const inter = Inter({ subsets: ["latin"] });
import No_product from "../../public/image/Image_not_available.png"
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import { Product } from '../store/store';
import LoadingComponent from "@/components/onLoad";
import BackToTop from "@/components/backToTop";

const backend_url = process.env.NEXT_PUBLIC_API_URL

const ProductList: React.FC = ({ }) => {

  const defaultSeason = 'summer';
  const defaultWidth = '205';
  const defaultProfile = '55';
  const defaultDimension = '16';

  const [tyres, setTyres] = useState<any[]>([])
  const [loading, setLoading] = useState(false);
  const [budgetarray, setBudgetArray] = useState<any[]>([]);
  const [qualityarray, setQualityArray] = useState<any[]>([]);
  const [premiumarray, setPremiumArray] = useState<any[]>([]);
  const [selectedSpeed, setSelectedSpeed] = useState<string>('K');
  const [selectedLoad, setSelectedLoad] = useState<number>(50);
  const [selectedSeason, setSelectedSeason] = useState<string[]>([]);
  const [selectedTopSeason, setSelectedTopSeason] = useState<number>(0);
  const [preSelectedSpeed, setPreSelectedSpeed] = useState<string>('K');
  const [preSelectedLoad, setPreSelectedLoad] = useState<number>(50);
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>(['Winter', 'Summer', 'All-Season', 'Performance']);
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const [selectseason, setSelectSeason] = useState('');
  const [selectedWidth, setSelectedWidth] = useState('');
  const [selectedProfile, setSelectedProfile] = useState('');
  const [selectedDimension, setSelectedDimension] = useState('');
  const [isResetting, setIsResetting] = useState(false);
  const [clickedCategories, setClickedCategories] = useState<{ [key: string]: boolean }>({
    Budget: true,
    Quality: true,
    Premium: true,
  });
  const [clickedSeason, setClickedSeason] = useState<{ [key: string]: boolean }>({
    winter: false,
    summer: false,
  });
  const fetchTyres = async () => {
    setLoading(true); // Start loading
    const selectSeason = localStorage.getItem("selectSeason") || 'summer';
    const selectWidth = localStorage.getItem("selectedWidth") || '205';
    const selectProfile = localStorage.getItem("selectedProfile") || '55';
    const selectDimension = localStorage.getItem("selectedDimension") || '16  ';

    try {
      const formDataParams = new URLSearchParams();
      formDataParams.append('method', 'fetchFrontTyres');
      formDataParams.append('season', selectSeason);
      formDataParams.append('sizeOne', selectWidth);
      formDataParams.append('sizeTwo', selectProfile);
      formDataParams.append('sizeThree', selectDimension);

      const response = await axios.post(
        `${backend_url}/queryNewSite.php`,
        formDataParams,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );

      if (response.data[0] === "no entry") {
        setLoading(false); // Stop loading
        toast("Tires not found", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          type: "warning",
        });
        setTyres([]);
        setBudgetArray([]);
        setQualityArray([]);
        setPremiumArray([]);
        return;
      }

      console.log(response.data);

      const budgetArray = response.data[1] && response.data[1].length ? response.data[1] : [];
      const qualityArray = response.data[2] && response.data[2].length ? response.data[2] : [];
      const premiumArray = response.data[3] && response.data[3].length ? response.data[3] : [];

      // Helper function to round price
      const roundPrice = (tire: any) => ({
        ...tire,
        price: parseFloat(tire.price).toFixed(0), // Round price to 2 decimal places
        purchaseAmount: 4,
      });

      // Merge and round prices
      const merged = [
        ...budgetArray.map(roundPrice),
        ...qualityArray.map(roundPrice),
        ...premiumArray.map(roundPrice),
      ];

      setTyres(merged);
      setBudgetArray(budgetArray.map(roundPrice));
      setQualityArray(qualityArray.map(roundPrice));
      setPremiumArray(premiumArray.map(roundPrice));
      setLoading(false); // Stop loading
    } catch (error) {
      console.error(error);
    }
  };




  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  // Handle key press (specifically "Enter" and "Backspace")
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const filteredSuggestions = suggestions.filter((item) =>
        item.toLowerCase().includes(inputValue.toLowerCase())
      );

      if (filteredSuggestions.length > 0 && selectedValues.length < 2) { // Limit to 2 elements
        // Randomly select one of the filtered suggestions
        const randomSelection = filteredSuggestions[Math.floor(Math.random() * filteredSuggestions.length)];
        setSelectedValues([...selectedValues, randomSelection]); // Add to selected values array
        setInputValue(''); // Clear input after adding
      }
    }

    if (e.key === 'Backspace' && inputValue === '') {
      // Remove last element from selectedValues if input is empty
      setSelectedValues((prevValues) => prevValues.slice(0, prevValues.length - 1));
    }
  };
  const handleCategoryClick = (category: string) => {
    // Toggle the clicked status of the selected category
    setClickedCategories((prevState) => ({
      ...prevState,
      [category]: !prevState[category],
    }));
  };
  const goToDetailPage = (pID: number) => {
    window.location.href = `/pdetail?id=${pID}`
  }
  const productPurchasePage = async (id: number) => {
    window.location.href = `/cart`
  }
  const handleSeasonClick = (season: string) => {
    // Set the clicked season to the selected one, reset the other
    setClickedSeason({
      winter: season === 'winter',
      summer: season === 'summer',
    });
  };
  useEffect(() => {
    fetchTyres();
  }, [])


  function isSpeedGreaterOrEqual(selectedSpeed: string, tyreSpeed: string) {
    const speedValues = ["K", "L", "M", "N", "P", "Q", "R", "S", "T", "U", "H", "V", "W", "Y", "ZR"];
    return speedValues.indexOf(tyreSpeed) >= speedValues.indexOf(selectedSpeed);
  }
  useEffect(() => {
    // Check if the page has been reloaded by using a flag in localStorage
    const isPageReloaded = localStorage.getItem('isPageReloaded');

    // If it's not a reload, get data from localStorage and do not clear it
    if (!isPageReloaded) {
      const storedSeason = localStorage.getItem('selectSeason');
      const storedWidth = localStorage.getItem('selectedWidth');
      const storedProfile = localStorage.getItem('selectedProfile');
      const storedDimension = localStorage.getItem('selectedDimension');

      // Only set state if localStorage has values (from index page)
      if (storedSeason) setSelectSeason(storedSeason);
      if (storedWidth) setSelectedWidth(storedWidth);
      if (storedProfile) setSelectedProfile(storedProfile);
      if (storedDimension) setSelectedDimension(storedDimension);

      // Set the flag in localStorage to indicate that the page has been loaded once
      localStorage.setItem('isPageReloaded', 'true');
    } else {
      // If it's a reload, reset data to default values and clear localStorage
      setSelectSeason(defaultSeason);
      setSelectedWidth(defaultWidth);
      setSelectedProfile(defaultProfile);
      setSelectedDimension(defaultDimension);


      // Clear all stored data on page reload
      localStorage.setItem('selectSeason', defaultSeason);
      localStorage.setItem('selectedWidth', defaultWidth);
      localStorage.setItem('selectedProfile', defaultProfile);
      localStorage.setItem('selectedDimension', defaultDimension);
      localStorage.removeItem('isPageReloaded');  // Clear the reload flag as well
      setIsResetting(true);
    }
  }, []);  // This runs once when the page is loaded or reloaded
  const setResetAllValue = () => {
    const isPageReloaded = localStorage.getItem('isPageReloaded');

    // If it's not a reload, get data from localStorage and do not clear it
    if (!isPageReloaded) {
      const storedSeason = localStorage.getItem('selectSeason');
      const storedWidth = localStorage.getItem('selectedWidth');
      const storedProfile = localStorage.getItem('selectedProfile');
      const storedDimension = localStorage.getItem('selectedDimension');

      // Only set state if localStorage has values (from index page)
      if (storedSeason) setSelectSeason(storedSeason);
      if (storedWidth) setSelectedWidth(storedWidth);
      if (storedProfile) setSelectedProfile(storedProfile);
      if (storedDimension) setSelectedDimension(storedDimension);

      // Set the flag in localStorage to indicate that the page has been loaded once
      localStorage.setItem('isPageReloaded', 'true');
    } else {
      // If it's a reload, reset data to default values and clear localStorage
      setSelectSeason(defaultSeason);
      setSelectedWidth(defaultWidth);
      setSelectedProfile(defaultProfile);
      setSelectedDimension(defaultDimension);


      // Clear all stored data on page reload
      localStorage.setItem('selectSeason', defaultSeason);
      localStorage.setItem('selectedWidth', defaultWidth);
      localStorage.setItem('selectedProfile', defaultProfile);
      localStorage.setItem('selectedDimension', defaultDimension);
      localStorage.removeItem('isPageReloaded');  // Clear the reload flag as well
      setIsResetting(true);
    }
  }
  useEffect(() => {
    if (isResetting) {
      // Reload the page once programmatically to reflect the updated state
      window.location.reload();
    }
  }, [isResetting]);
  // Effect to save data to local storage when values change
  useEffect(() => {
    if (!isResetting && selectseason && selectseason !== defaultSeason) {
      localStorage.setItem('selectSeason', selectseason);
    }
  }, [selectseason, isResetting]);

  useEffect(() => {
    if (!isResetting && selectedWidth && selectedWidth !== defaultWidth) {
      localStorage.setItem('selectedWidth', selectedWidth);
    }
  }, [selectedWidth, isResetting]);

  useEffect(() => {
    if (!isResetting && selectedProfile && selectedProfile !== defaultProfile) {
      localStorage.setItem('selectedProfile', selectedProfile);
    }
  }, [selectedProfile, isResetting]);

  useEffect(() => {
    if (!isResetting && selectedDimension && selectedDimension !== defaultDimension) {
      localStorage.setItem('selectedDimension', selectedDimension);
    }
  }, [selectedDimension, isResetting]);
  // Handlers for user input
  const handleSeasonChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setSelectSeason(event.target.value);
  };

  const handleWidthChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setSelectedWidth(event.target.value);
  };

  const handleProfileChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setSelectedProfile(event.target.value);
  };

  const handleDimensionChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setSelectedDimension(event.target.value);
  };
  const generateOptions = (start: number, end: number, step: number = 1): JSX.Element[] => {
    const options = [];
    for (let i = start; i <= end; i += step) {
      options.push(
        <option key={i} value={i} className='text-black text-lg font-nomal font-["Inter"] leading-7 uppercase'>
          {i}
        </option>
      );
    }
    return options;
  };
  const router = useRouter();

  const dispatch = useDispatch();

  const handleAddToCart = (Product: Product) => {
    dispatch(addToCart(Product));  // Dispatch product to be added to the cart
  };
  if (isResetting) {
    return <div><LoadingComponent /></div>; // Or show a loading spinner
  }
  return (
    <div className="home-container flex flex-col">
      <Header />
      <main style={{ "width": '100%' }}>
        <div className="main-container flex flex-col justify-center w-[100%]">
          <Main_Image />
          <div className="products-pan flex flex-col pt-[55px] pr-[243px] pl-[240px] pb-[63px] w-full">
            <div className="products-pan-title flex flex-row pb-[39px]">
              <div className="ppt-main-title pr-[439px]">
                <p className="text-5xl leading-none font-medium text-[#73C018]">Shop</p>
              </div>
              <div className="ppt-cat-type flex flex-row gap-[8px]">
                {/* <div
                                    className={`ppt-cat-type-title p-[10px] border-b-[1px] cursor-pointer ${clickedSeason.winter ? 'border-[#73C018]' : 'border-transparent'} ${clickedSeason.winter ? 'text-[#73C018]' : 'text-white'}`}
                                    onClick={() => { handleSeasonClick('winter'); setSelectedTopSeason(1); }}
                                >
                                    <p className="text-2xl leading-8 font-semi-bold">Winter tires</p>
                                </div>

                                <div
                                    className={`ppt-cat-type-title p-[10px] cursor-pointer ${clickedSeason.summer ? 'text-[#73C018]' : 'text-white'} ${clickedSeason.summer ? 'border-b-[1px] border-[#73C018]' : 'border-b-[1px] border-transparent'}`}
                                    onClick={() => { handleSeasonClick('summer'); setSelectedTopSeason(2); }}
                                >
                                    <p className="text-2xl leading-8 font-semi-bold">Summer tires</p>
                                </div> */}
              </div>
            </div>
            <div className="main-product-pan flex flex-row gap-[37px]" id="product-pan">
              <div className=" flex flex-col main-ppp-pan">
                <div className="products-total-amount pb-[51px]">
                  <p className={`text-lg leading-7 font-normal font-['Inter'] text-white ${budgetarray.length == 0 ? "text-red" : "text-blue"}`}>Showing all {tyres.length} results</p>
                </div>
                {
                  budgetarray.length > 0 ? (budgetarray.some((tyre) => (
                    isSpeedGreaterOrEqual(selectedSpeed, tyre.speed) &&
                    tyre.load > selectedLoad &&
                    (
                      selectedTopSeason == 0 ||
                      (selectedTopSeason == 1 && tyre.season === 'winter') ||
                      (selectedTopSeason == 2 && tyre.season === 'summer')
                    ) &&
                    (
                      selectedSeason.length &&
                      (
                        (selectedSeason[0] && selectedSeason[0].toLowerCase() === tyre.season) ||
                        (selectedSeason[1] && (selectedSeason[0].toLowerCase() === tyre.season || selectedSeason[1].toLowerCase() === tyre.season))
                      ) ||
                      !selectedSeason.length
                    )
                  )) ? (
                    <>
                      <h1 className={`text-4xl text-[#73C018] text-center py-[10px] max-[1024px]:text-2xl ${clickedCategories.Budget ? "block" : "hidden"}`}>
                        Budget
                      </h1>

                      <div className={`pp-product-list flex flex-row flex-wrap grid grid-cols-3 gap-x-[38px] gap-y-[35px] justify-center ${clickedCategories.Budget ? "flex" : "hidden"}`}>
                        {budgetarray.map(tyre => (
                          isSpeedGreaterOrEqual(selectedSpeed, tyre.speed) &&
                            tyre.load > selectedLoad &&
                            (
                              selectedTopSeason == 0 ||
                              (selectedTopSeason == 1 && tyre.season === 'winter') ||
                              (selectedTopSeason == 2 && tyre.season === 'summer')
                            ) &&
                            (
                              selectedSeason.length &&
                              (
                                (selectedSeason[0] && selectedSeason[0].toLowerCase() === tyre.season) ||
                                (selectedSeason[1] && (selectedSeason[0].toLowerCase() === tyre.season || selectedSeason[1].toLowerCase() === tyre.season))
                              ) ||
                              !selectedSeason.length
                            )
                            ? (
                              <div className="pp-product-list-main-product-pan flex flex-col tyreResultContainer" key={`budget-${tyre.id}`}>
                                <div className="pp-product-list-mpp-image bg-[#F5F5F5] w-[331px] h-[312px] relative flex justify-center items-center">
                                  <div className="pp-product-list-mpp-image-outback absolute">
                                    {tyre.image.length === 0 ? (
                                      <div className="text-sm leading-5 font-normal font-['Inter'] text-black">No Product Image</div>
                                    ) : (
                                      tyre.image.length > 30 && tyre.size == null ? (
                                        <Image
                                          alt="Tire image of Moss Dekk AS"
                                          src={tyre.image === "" ? No_product : tyre.image}
                                          width={176.52}
                                          height={238}
                                        />
                                      ) : (
                                        <Image
                                          alt="Tire image of Moss Dekk AS"
                                          src={`${backend_url}/uploads/tyreImg/${tyre.image}`}
                                          width={176.52}
                                          height={238}
                                        />
                                      )
                                    )}

                                  </div>
                                </div>
                                <div className="pp-product-list-mpp-main-info w-[331px] h-[336px] bg-[#E4E4E4] flex flex-col py-[11.5px] px-[34px]">
                                  <div className="pp-product-list-mmp-recommend-item w-full h-[25px] mb-[19px] flex justify-center items-center">
                                    {tyre.recommended == 1 ?
                                      <div className="pp-product-list-mmp-recommend px-[10px] py-[2.5px] rounded-[4px] bg-[#73C018] drop-shadow-2xl">
                                        <p className="text-sm leading-5 font-normal font-['Inter'] text-white">Recommended</p>
                                      </div> : <div></div>
                                    }
                                  </div>
                                  <div className="pp-product-list-mmp-exact-info flex flex-col w-full h-[112px] items-center">
                                    <p className="text-lg leading-7 font-semi-bold text-black">{tyre.brand}</p>
                                    <p className="text-lg leading-7 font-semi-bold text-black line-clamp-1">{tyre.model}</p>
                                    {tyre.size == "" || tyre.size == null ?
                                      <p className="pp-product-list-mmp-figures text-lg leading-7 font-normal font-['Inter'] mt-[28px] text-black">
                                        {tyre.width}/{tyre.profile}-{tyre.inches} {tyre.load} {tyre.speed}
                                      </p>
                                      :
                                      <p className="pp-product-list-mmp-figures text-lg leading-7 font-normal font-['Inter'] mt-[28px] text-black">
                                        {tyre.size} {tyre.load} {tyre.speed}
                                      </p>
                                    }
                                  </div>
                                  <div className="pp-product-list-mmp-show-tyre-infor flex flex-row justify-center gap-[8px] mt-[19px]">
                                    <div className="pp-product-list-mmp-show-tyre-infor-detail flex flex-row gap-[2px]">
                                      <div className="pp-product-list-mmp-show-tyre-infor-detail-svg py-[3.99px] px-[4px] rounded-[2px] bg-white flex justify-center items-center">
                                        <Tyre_Info_first />
                                      </div>
                                      <div className="pp-product-list-mmp-show-tyre-infor-detail-figures py-[6px] px-[10.5px] rounded-[2px] flex justify-center items-center bg-[#B0B0B0]">
                                        <p className="uppercase text-sm leading-5 font-middle text-black">{tyre.fuel}</p>
                                      </div>
                                    </div>
                                    <div className="pp-product-list-mmp-show-tyre-infor-detail flex flex-row gap-[2px]">
                                      <div className="pp-product-list-mmp-show-tyre-infor-detail-svg py-[3.99px] px-[4px] rounded-[2px] bg-white flex justify-center items-center">
                                        <Tyre_Infor_second />
                                      </div>
                                      <div className="pp-product-list-mmp-show-tyre-infor-detail-figures py-[6px] px-[10.5px] rounded-[2px] flex justify-center items-center bg-[#B0B0B0]">
                                        <p className="uppercase text-sm leading-5 font-middle text-black">{tyre.grip}</p>
                                      </div>
                                    </div>
                                    <div className="pp-product-list-mmp-show-tyre-infor-detail flex flex-row gap-[2px]">
                                      <div className="pp-product-list-mmp-show-tyre-infor-detail-svg py-[3.99px] px-[4px] rounded-[2px] bg-white flex justify-center items-center">
                                        <Tyre_Infor_third />
                                      </div>
                                      <div className="pp-product-list-mmp-show-tyre-infor-detail-figures py-[6px] px-[10.5px] rounded-[2px] flex justify-center items-center bg-[#B0B0B0]">
                                        <p className="uppercase text-sm leading-5 font-middle text-black">{tyre.noise}</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="pp-product-list-mmp-price pt-[19px] flex flex-row justify-center">
                                    <p className="text-lg leading-7 font-normal font-['Inter'] text-black">Price: <span className="text-lg leading-7 font-semi-bold text-black">NOK {tyre.price}</span></p>
                                  </div>
                                  <div className="pp-product-list-mmp-btn-group flex flex-row justify-center gap-[8px] pt-[19px]">
                                    <div className="pp-product-list-mmp-buy-btn py-[8px] px-[27.5px] rounded-[4px] bg-[#73C018] cursor-pointer" onClick={() => {
                                      productPurchasePage(tyre.id);
                                      const productWithPurchaseAmount = {
                                        ...tyre,
                                        purchaseAmount: tyre.purchaseAmount || 4, // Default to 1 if not set
                                      };
                                      handleAddToCart(productWithPurchaseAmount)
                                    }}>
                                      <p className="text-base leading-6 font-normal font-['Inter'] uppercase text-white" >BUY</p>
                                    </div>
                                    <div className="pp-product-list-mmp-detail-btn py-[8px] px-[11.5px] rounded-[4px] bg-[#888888] cursor-pointer" onClick={() => { goToDetailPage(tyre.id) }}>
                                      <p className="text-base leading-6 font-normal font-['Inter'] uppercase text-white">DETAILS</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ) : <></>
                        ))}
                      </div>
                    </>
                  ) : null
                  ) : <></>}
                {/* <div className="pp-product-list flex flex-row flex-wrap grid grid-cols-3 gap-x-[38px] gap-y-[35px]">
                                    <div className="pp-product-list-main-product-pan flex flex-col">
                                        <div className="pp-product-list-mpp-image bg-[#F5F5F5] w-[331px] h-[312px] relative flex justify-center items-center">
                                            <div className="pp-product-list-mpp-image-outback absolute">
                                                <Image alt="Tire image of Moss Dekk AS" src={Tyre_22} width={176.52} height={238}></Image>
                                            </div>
                                        </div>
                                        <div className="pp-product-list-mpp-main-info w-[331px] h-[336px] bg-[#E4E4E4] flex flex-col py-[11.5px] px-[34px]">
                                            <div className="pp-product-list-mmp-recommend-item w-full h-[25px] mb-[19px] flex justify-center items-center">
                                                <div className="pp-product-list-mmp-recommend px-[10px] py-[2.5px] rounded-[4px] bg-[#73C018] drop-shadow-2xl">
                                                    <p className="text-sm leading-5 font-normal font-['Inter']">Recommended</p>
                                                </div>
                                            </div>
                                            <div className="pp-product-list-mmp-exact-info flex flex-col w-full h-[112px] items-center">
                                                <p className="text-lg leading-7 font-semi-bold text-black">Linglong</p>
                                                <p className="text-lg leading-7 font-semi-bold text-black">Sport Master</p>
                                                <p className="pp-product-list-mmp-figures text-lg leading-7 font-normal font-['Inter'] mt-[28px] text-black">205/55-16 91 V</p>
                                            </div>
                                            <div className="pp-product-list-mmp-show-tyre-infor flex flex-row justify-center gap-[8px] mt-[19px]">
                                                <div className="pp-product-list-mmp-show-tyre-infor-detail flex flex-row gap-[2px]">
                                                    <div className="pp-product-list-mmp-show-tyre-infor-detail-svg py-[3.99px] px-[4px] rounded-[2px] bg-white flex justify-center items-center">
                                                        <Tyre_Info_first />
                                                    </div>
                                                    <div className="pp-product-list-mmp-show-tyre-infor-detail-figures py-[6px] px-[10.5px] rounded-[2px] flex justify-center items-center bg-[#B0B0B0]">
                                                        <p className="uppercase text-sm leading-5 font-middle text-black">C</p>
                                                    </div>
                                                </div>
                                                <div className="pp-product-list-mmp-show-tyre-infor-detail flex flex-row gap-[2px]">
                                                    <div className="pp-product-list-mmp-show-tyre-infor-detail-svg py-[3.99px] px-[4px] rounded-[2px] bg-white flex justify-center items-center">
                                                        <Tyre_Infor_second />
                                                    </div>
                                                    <div className="pp-product-list-mmp-show-tyre-infor-detail-figures py-[6px] px-[10.5px] rounded-[2px] flex justify-center items-center bg-[#B0B0B0]">
                                                        <p className="uppercase text-sm leading-5 font-middle text-black">68</p>
                                                    </div>
                                                </div>
                                                <div className="pp-product-list-mmp-show-tyre-infor-detail flex flex-row gap-[2px]">
                                                    <div className="pp-product-list-mmp-show-tyre-infor-detail-svg py-[3.99px] px-[4px] rounded-[2px] bg-white flex justify-center items-center">
                                                        <Tyre_Infor_third />
                                                    </div>
                                                    <div className="pp-product-list-mmp-show-tyre-infor-detail-figures py-[6px] px-[10.5px] rounded-[2px] flex justify-center items-center bg-[#B0B0B0]">
                                                        <p className="uppercase text-sm leading-5 font-middle text-black">A</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="pp-product-list-mmp-price pt-[19px] flex flex-row justify-center">
                                                <p className="text-lg leading-7 font-normal font-['Inter'] text-black">Price: <span className="text-lg leading-7 font-semi-bold text-black">NOK 944</span></p>
                                            </div>
                                            <div className="pp-product-list-mmp-btn-group flex flex-row justify-center gap-[8px] pt-[19px]">
                                                <div className="pp-product-list-mmp-buy-btn py-[8px] px-[27.5px] rounded-[4px] bg-[#73C018]">
                                                    <p className="text-base leading-6 font-normal font-['Inter'] uppercase">BUY</p>
                                                </div>
                                                <div className="pp-product-list-mmp-detail-btn py-[8px] px-[11.5px] rounded-[4px] bg-[#888888]">
                                                    <p className="text-base leading-6 font-normal font-['Inter'] uppercase">DETAILS</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                {
                  qualityarray.length > 0 ? (qualityarray.some((tyre) => (
                    isSpeedGreaterOrEqual(selectedSpeed, tyre.speed) &&
                    tyre.load > selectedLoad &&
                    (
                      selectedTopSeason == 0 ||
                      (selectedTopSeason == 1 && tyre.season === 'winter') ||
                      (selectedTopSeason == 2 && tyre.season === 'summer')
                    ) &&
                    (
                      selectedSeason.length &&
                      (
                        (selectedSeason[0] && selectedSeason[0].toLowerCase() === tyre.season) ||
                        (selectedSeason[1] && (selectedSeason[0].toLowerCase() === tyre.season || selectedSeason[1].toLowerCase() === tyre.season))
                      ) ||
                      !selectedSeason.length
                    )
                  )) ? (
                    <>
                      <h1 className={`text-4xl text-[#73C018] text-center py-[10px] max-[1024px]:text-2xl ${clickedCategories.Quality ? "block" : "hidden"}`}>
                        Quality
                      </h1>

                      <div className={`pp-product-list flex flex-row flex-wrap grid grid-cols-3 gap-x-[38px] gap-y-[35px] justify-center ${clickedCategories.Quality ? "flex" : "hidden"}`}>
                        {qualityarray.map(tyre => (
                          isSpeedGreaterOrEqual(selectedSpeed, tyre.speed) &&
                            tyre.load > selectedLoad &&
                            (
                              selectedTopSeason == 0 ||
                              (selectedTopSeason == 1 && tyre.season === 'winter') ||
                              (selectedTopSeason == 2 && tyre.season === 'summer')
                            ) &&
                            (
                              selectedSeason.length &&
                              (
                                (selectedSeason[0] && selectedSeason[0].toLowerCase() === tyre.season) ||
                                (selectedSeason[1] && (selectedSeason[0].toLowerCase() === tyre.season || selectedSeason[1].toLowerCase() === tyre.season))
                              ) ||
                              !selectedSeason.length
                            )
                            ? (
                              <div className="pp-product-list-main-product-pan flex flex-col tyreResultContainer" key={`quality-${tyre.id}`}>
                                <div className="pp-product-list-mpp-image bg-[#F5F5F5] w-[331px] h-[312px] relative flex justify-center items-center">
                                  <div className="pp-product-list-mpp-image-outback absolute">
                                    {tyre.image.length === 0 ? (
                                      <div className="text-sm leading-5 font-normal font-['Inter'] text-black">No Product Image</div>
                                    ) : (
                                      tyre.image.length > 30 && tyre.size == null ? (
                                        <Image
                                          alt="Tire image of Moss Dekk AS"
                                          src={tyre.image === "" ? No_product : tyre.image}
                                          width={176.52}
                                          height={238}
                                        />
                                      ) : (
                                        <Image
                                          alt="Tire image of Moss Dekk AS"
                                          src={`${backend_url}/uploads/tyreImg/${tyre.image}`}
                                          width={176.52}
                                          height={238}
                                        />
                                      )
                                    )}

                                  </div>
                                </div>
                                <div className="pp-product-list-mpp-main-info w-[331px] h-[336px] bg-[#E4E4E4] flex flex-col py-[11.5px] px-[34px]">
                                  <div className="pp-product-list-mmp-recommend-item w-full h-[25px] mb-[19px] flex justify-center items-center">
                                    {tyre.recommended == 1 ?
                                      <div className="pp-product-list-mmp-recommend px-[10px] py-[2.5px] rounded-[4px] bg-[#73C018] drop-shadow-2xl">
                                        <p className="text-sm leading-5 font-normal font-['Inter'] text-white">Recommended</p>
                                      </div> : <div></div>
                                    }
                                  </div>
                                  <div className="pp-product-list-mmp-exact-info flex flex-col w-full h-[112px] items-center">
                                    <p className="text-lg leading-7 font-semi-bold text-black">{tyre.brand}</p>
                                    <p className="text-lg leading-7 font-semi-bold text-black line-clamp-1">{tyre.model}</p>
                                    {tyre.size == "" || tyre.size == null ?
                                      <p className="pp-product-list-mmp-figures text-lg leading-7 font-normal font-['Inter'] mt-[28px] text-black">
                                        {tyre.width}/{tyre.profile}-{tyre.inches} {tyre.load} {tyre.speed}
                                      </p>
                                      :
                                      <p className="pp-product-list-mmp-figures text-lg leading-7 font-normal font-['Inter'] mt-[28px] text-black">
                                        {tyre.size} {tyre.load} {tyre.speed}
                                      </p>
                                    }
                                  </div>
                                  <div className="pp-product-list-mmp-show-tyre-infor flex flex-row justify-center gap-[8px] mt-[19px]">
                                    <div className="pp-product-list-mmp-show-tyre-infor-detail flex flex-row gap-[2px]">
                                      <div className="pp-product-list-mmp-show-tyre-infor-detail-svg py-[3.99px] px-[4px] rounded-[2px] bg-white flex justify-center items-center">
                                        <Tyre_Info_first />
                                      </div>
                                      <div className="pp-product-list-mmp-show-tyre-infor-detail-figures py-[6px] px-[10.5px] rounded-[2px] flex justify-center items-center bg-[#B0B0B0]">
                                        <p className="uppercase text-sm leading-5 font-middle text-black">{tyre.fuel}</p>
                                      </div>
                                    </div>
                                    <div className="pp-product-list-mmp-show-tyre-infor-detail flex flex-row gap-[2px]">
                                      <div className="pp-product-list-mmp-show-tyre-infor-detail-svg py-[3.99px] px-[4px] rounded-[2px] bg-white flex justify-center items-center">
                                        <Tyre_Infor_second />
                                      </div>
                                      <div className="pp-product-list-mmp-show-tyre-infor-detail-figures py-[6px] px-[10.5px] rounded-[2px] flex justify-center items-center bg-[#B0B0B0]">
                                        <p className="uppercase text-sm leading-5 font-middle text-black">{tyre.grip}</p>
                                      </div>
                                    </div>
                                    <div className="pp-product-list-mmp-show-tyre-infor-detail flex flex-row gap-[2px]">
                                      <div className="pp-product-list-mmp-show-tyre-infor-detail-svg py-[3.99px] px-[4px] rounded-[2px] bg-white flex justify-center items-center">
                                        <Tyre_Infor_third />
                                      </div>
                                      <div className="pp-product-list-mmp-show-tyre-infor-detail-figures py-[6px] px-[10.5px] rounded-[2px] flex justify-center items-center bg-[#B0B0B0]">
                                        <p className="uppercase text-sm leading-5 font-middle text-black">{tyre.noise}</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="pp-product-list-mmp-price pt-[19px] flex flex-row justify-center">
                                    <p className="text-lg leading-7 font-normal font-['Inter'] text-black">Price: <span className="text-lg leading-7 font-semi-bold text-black">NOK {tyre.price}</span></p>
                                  </div>
                                  <div className="pp-product-list-mmp-btn-group flex flex-row justify-center gap-[8px] pt-[19px]">
                                    <div className="pp-product-list-mmp-buy-btn py-[8px] px-[27.5px] rounded-[4px] bg-[#73C018] cursor-pointer" onClick={() => {
                                      productPurchasePage(tyre.id);
                                      const productWithPurchaseAmount = {
                                        ...tyre,
                                        purchaseAmount: tyre.purchaseAmount || 4, // Default to 1 if not set
                                      };
                                      handleAddToCart(productWithPurchaseAmount)
                                    }}>
                                      <p className="text-base leading-6 font-normal font-['Inter'] uppercase text-white">BUY</p>
                                    </div>
                                    <div className="pp-product-list-mmp-detail-btn py-[8px] px-[11.5px] rounded-[4px] bg-[#888888] cursor-pointer" onClick={() => goToDetailPage(tyre.id)}>
                                      <p className="text-base leading-6 font-normal font-['Inter'] uppercase text-white">DETAILS</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ) : <></>
                        ))}
                      </div>
                    </>
                  ) : null
                  ) : <></>}
                {
                  premiumarray.length > 0 ? (premiumarray.some((tyre) => (
                    isSpeedGreaterOrEqual(selectedSpeed, tyre.speed) &&
                    tyre.load > selectedLoad &&
                    (
                      selectedTopSeason == 0 ||
                      (selectedTopSeason == 1 && tyre.season === 'winter') ||
                      (selectedTopSeason == 2 && tyre.season === 'summer')
                    ) &&
                    (
                      selectedSeason.length &&
                      (
                        (selectedSeason[0] && selectedSeason[0].toLowerCase() === tyre.season) ||
                        (selectedSeason[1] && (selectedSeason[0].toLowerCase() === tyre.season || selectedSeason[1].toLowerCase() === tyre.season))
                      ) ||
                      !selectedSeason.length
                    )
                  )) ? (
                    <>
                      <h1 className={`text-4xl text-[#73C018] text-center py-[10px] max-[1024px]:text-2xl ${clickedCategories.Premium ? "block" : "hidden"}`}>
                        Premium
                      </h1>

                      <div className={`pp-product-list flex flex-row flex-wrap grid grid-cols-3 gap-x-[38px] gap-y-[35px] justify-center ${clickedCategories.Premium ? "flex" : "hidden"}`}>
                        {premiumarray.map(tyre => (
                          isSpeedGreaterOrEqual(selectedSpeed, tyre.speed) &&
                            tyre.load > selectedLoad &&
                            (
                              selectedTopSeason == 0 ||
                              (selectedTopSeason == 1 && tyre.season === 'winter') ||
                              (selectedTopSeason == 2 && tyre.season === 'summer')
                            ) &&
                            (
                              selectedSeason.length &&
                              (
                                (selectedSeason[0] && selectedSeason[0].toLowerCase() === tyre.season) ||
                                (selectedSeason[1] && (selectedSeason[0].toLowerCase() === tyre.season || selectedSeason[1].toLowerCase() === tyre.season))
                              ) ||
                              !selectedSeason.length
                            )
                            ? (
                              <div className="pp-product-list-main-product-pan flex flex-col tyreResultContainer" key={`quality-${tyre.id}`}>
                                <div className="pp-product-list-mpp-image bg-[#F5F5F5] w-[331px] h-[312px] relative flex justify-center items-center">
                                  <div className="pp-product-list-mpp-image-outback absolute">
                                    {tyre.image.length === 0 ? (
                                      <div className="text-sm leading-5 font-normal font-['Inter'] text-black">No Product Image</div>
                                    ) : (
                                      tyre.image.length > 30 && tyre.size == null ? (
                                        <Image
                                          alt="Tire image of Moss Dekk AS"
                                          src={tyre.image === "" ? No_product : tyre.image}
                                          width={176.52}
                                          height={238}
                                        />
                                      ) : (
                                        <Image
                                          alt="Tire image of Moss Dekk AS"
                                          src={`${backend_url}/uploads/tyreImg/${tyre.image}`}
                                          width={176.52}
                                          height={238}
                                        />
                                      )
                                    )}

                                  </div>
                                </div>
                                <div className="pp-product-list-mpp-main-info w-[331px] h-[336px] bg-[#E4E4E4] flex flex-col py-[11.5px] px-[34px]">
                                  <div className="pp-product-list-mmp-recommend-item w-full h-[25px] mb-[19px] flex justify-center items-center">
                                    {tyre.recommended == 1 ?
                                      <div className="pp-product-list-mmp-recommend px-[10px] py-[2.5px] rounded-[4px] bg-[#73C018] drop-shadow-2xl">
                                        <p className="text-sm leading-5 font-normal font-['Inter'] text-white">Recommended</p>
                                      </div> : <div></div>
                                    }
                                  </div>
                                  <div className="pp-product-list-mmp-exact-info flex flex-col w-full h-[112px] items-center">
                                    <p className="text-lg leading-7 font-semi-bold text-black">{tyre.brand}</p>
                                    <p className="text-lg leading-7 font-semi-bold text-black line-clamp-1">{tyre.model}</p>
                                    {tyre.size == "" || tyre.size == null ?
                                      <p className="pp-product-list-mmp-figures text-lg leading-7 font-normal font-['Inter'] mt-[28px] text-black">
                                        {tyre.width}/{tyre.profile}-{tyre.inches} {tyre.load} {tyre.speed}
                                      </p>
                                      :
                                      <p className="pp-product-list-mmp-figures text-lg leading-7 font-normal font-['Inter'] mt-[28px] text-black">
                                        {tyre.size} {tyre.load} {tyre.speed}
                                      </p>
                                    }
                                  </div>
                                  <div className="pp-product-list-mmp-show-tyre-infor flex flex-row justify-center gap-[8px] mt-[19px]">
                                    <div className="pp-product-list-mmp-show-tyre-infor-detail flex flex-row gap-[2px]">
                                      <div className="pp-product-list-mmp-show-tyre-infor-detail-svg py-[3.99px] px-[4px] rounded-[2px] bg-white flex justify-center items-center">
                                        <Tyre_Info_first />
                                      </div>
                                      <div className="pp-product-list-mmp-show-tyre-infor-detail-figures py-[6px] px-[10.5px] rounded-[2px] flex justify-center items-center bg-[#B0B0B0]">
                                        <p className="uppercase text-sm leading-5 font-middle text-black">{tyre.fuel}</p>
                                      </div>
                                    </div>
                                    <div className="pp-product-list-mmp-show-tyre-infor-detail flex flex-row gap-[2px]">
                                      <div className="pp-product-list-mmp-show-tyre-infor-detail-svg py-[3.99px] px-[4px] rounded-[2px] bg-white flex justify-center items-center">
                                        <Tyre_Infor_second />
                                      </div>
                                      <div className="pp-product-list-mmp-show-tyre-infor-detail-figures py-[6px] px-[10.5px] rounded-[2px] flex justify-center items-center bg-[#B0B0B0]">
                                        <p className="uppercase text-sm leading-5 font-middle text-black">{tyre.grip}</p>
                                      </div>
                                    </div>
                                    <div className="pp-product-list-mmp-show-tyre-infor-detail flex flex-row gap-[2px]">
                                      <div className="pp-product-list-mmp-show-tyre-infor-detail-svg py-[3.99px] px-[4px] rounded-[2px] bg-white flex justify-center items-center">
                                        <Tyre_Infor_third />
                                      </div>
                                      <div className="pp-product-list-mmp-show-tyre-infor-detail-figures py-[6px] px-[10.5px] rounded-[2px] flex justify-center items-center bg-[#B0B0B0]">
                                        <p className="uppercase text-sm leading-5 font-middle text-black">{tyre.noise}</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="pp-product-list-mmp-price pt-[19px] flex flex-row justify-center">
                                    <p className="text-lg leading-7 font-normal font-['Inter'] text-black">Price: <span className="text-lg leading-7 font-semi-bold text-black">NOK {tyre.price}</span></p>
                                  </div>
                                  <div className="pp-product-list-mmp-btn-group flex flex-row justify-center gap-[8px] pt-[19px]">
                                    <div className="pp-product-list-mmp-buy-btn py-[8px] px-[27.5px] rounded-[4px] bg-[#73C018] cursor-pointer" onClick={() => {
                                      productPurchasePage(tyre.id);
                                      const productWithPurchaseAmount = {
                                        ...tyre,
                                        purchaseAmount: tyre.purchaseAmount || 4, // Default to 1 if not set
                                      };
                                      handleAddToCart(productWithPurchaseAmount)
                                    }}>
                                      <p className="text-base leading-6 font-normal font-['Inter'] uppercase text-white">BUY</p>
                                    </div>
                                    <div className="pp-product-list-mmp-detail-btn py-[8px] px-[11.5px] rounded-[4px] bg-[#888888] cursor-pointer" onClick={() => goToDetailPage(tyre.id)}>
                                      <p className="text-base leading-6 font-normal font-['Inter'] uppercase text-white">DETAILS</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ) : <></>
                        ))}
                      </div>
                    </>
                  ) : null
                  ) : <></>}
                <div className="pp-product-list flex flex-row flex-wrap grid grid-cols-3 gap-x-[38px] gap-y-[35px]">
                  <div className="pp-product-list-main-product-pan flex flex-col">
                    <div className="pp-product-list-mpp-main-info w-[331px]  bg-[#E4E4E4] flex flex-col py-[11.5px] px-[34px] !h-0 !m-0 !p-0">
                    </div>
                  </div>
                  <div className="pp-product-list-main-product-pan flex flex-col">
                    <div className="pp-product-list-mpp-main-info w-[331px]  bg-[#E4E4E4] flex flex-col py-[11.5px] px-[34px] !h-0 !m-0 !p-0">
                    </div>
                  </div><div className="pp-product-list-main-product-pan flex flex-col">
                    <div className="pp-product-list-mpp-main-info w-[331px]  bg-[#E4E4E4] flex flex-col py-[11.5px] px-[34px] !h-0 !m-0 !p-0">
                    </div>
                  </div>
                </div>


              </div>
              <div className="mpp-category-control-pan flex flex-col gap-[19px]">
                <div className="category-control-main-cat-info flex flex-col gap-[19px]">
                  <div className="main-cat-search-title">
                    <p className="text-2xl leading-8 font-semi-bold text-[#73C018]">Search Tires</p>
                  </div>
                  <div className="main-cat-select-cat flex flex-col gap-[7px]">
                    <div className="mcscat-title">
                      <p className="text-xl leading-7 font-normal font-['Inter'] text-[#73C018]">Kategorier</p>
                    </div>
                    <div className="mcscat-select-tag flex flex-row w-[333px] h-[44px] py-[5px] pl-[9px] gap-[7px] bg-[#F4F4F7] rounded-[4px]">
                      <div
                        className={`mcscat-select-tag-item rounded-[4px] py-[3px] px-[10px] cursor-pointer flex justify-center items-center ${clickedCategories.Budget ? 'bg-[#73C018] text-white' : 'bg-white text-black'
                          }`}
                        onClick={() => handleCategoryClick('Budget')}
                      >
                        <p className="text-lg leading-7 font-normal font-['Inter']">Budget</p>
                      </div>

                      <div
                        className={`mcscat-select-tag-item rounded-[4px] py-[3px] px-[10px] cursor-pointer flex justify-center items-center ${clickedCategories.Quality ? 'bg-[#73C018] text-white' : 'bg-white text-black'
                          }`}
                        onClick={() => handleCategoryClick('Quality')}
                      >
                        <p className="text-lg leading-7 font-normal font-['Inter']">Quality</p>
                      </div>

                      <div
                        className={`mcscat-select-tag-item rounded-[4px] py-[3px] px-[10px] cursor-pointer flex justify-center items-center ${clickedCategories.Premium ? 'bg-[#73C018] text-white' : 'bg-white text-black'
                          }`}
                        onClick={() => handleCategoryClick('Premium')}
                      >
                        <p className="text-lg leading-7 font-normal font-['Inter']">Premium</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="category-exact-cat-info flex flex-col gap-[16px]">
                  <div className="cat-info-item flex flex-col gap-[10px]">
                    <div className="cat-info-item-title">
                      <p className="text-xl leading-7 font-normal font-['Inter'] text-[#73C018]">Min Hastighet</p>
                    </div>
                    <div className="cat-info-input relative">
                      <select
                        onChange={(e) => { setPreSelectedSpeed(e.target.value) }}
                        className="h-[52px] block w-full pr-[13px] pl-[10px] py-[12px] border border-gray-300 shadow-sm focus:outline-none bg-[#EEF2F3] uppercase focus:border-0 focus:ring-0 rounded-[4px] text-black text-lg font-norml font-['Inter'] leading-7 appearance-none"
                      >
                        <option value="K" className='text-black text-lg font-nomal font-["Inter"] leading-7 uppercase' selected>K</option>
                        <option value="M" className='text-black text-lg font-nomal font-["Inter"] leading-7 uppercase'>M</option>
                        <option value="N" className='text-black text-lg font-nomal font-["Inter"] leading-7 uppercase'>N</option>
                        <option value="P" className='text-black text-lg font-nomal font-["Inter"] leading-7 uppercase'>P</option>
                        <option value="Q" className='text-black text-lg font-nomal font-["Inter"] leading-7 uppercase'>Q</option>
                        <option value="R" className='text-black text-lg font-nomal font-["Inter"] leading-7 uppercase'>R</option>
                        <option value="S" className='text-black text-lg font-nomal font-["Inter"] leading-7 uppercase'>S</option>
                        <option value="T" className='text-black text-lg font-nomal font-["Inter"] leading-7 uppercase'>T</option>
                        <option value="U" className='text-black text-lg font-nomal font-["Inter"] leading-7 uppercase'>U</option>
                        <option value="H" className='text-black text-lg font-nomal font-["Inter"] leading-7 uppercase'>H</option>
                        <option value="V" className='text-black text-lg font-nomal font-["Inter"] leading-7 uppercase'>V</option>
                        <option value="W" className='text-black text-lg font-nomal font-["Inter"] leading-7 uppercase'>W</option>
                        <option value="Y" className='text-black text-lg font-nomal font-["Inter"] leading-7 uppercase'>Y</option>
                        <option value="ZR" className='text-black text-lg font-nomal font-["Inter"] leading-7 uppercase'>ZR</option>
                      </select>
                    </div>
                  </div>
                  <div className="cat-info-item flex flex-col gap-[10px]">
                    <div className="cat-info-item-title">
                      <p className="text-xl leading-7 font-normal font-['Inter'] text-[#73C018]">Min Lasting</p>
                    </div>
                    <div className="cat-info-input relative">
                      <select
                        onChange={(e) => { setPreSelectedLoad(parseInt(e.target.value)) }}
                        className="h-[52px] block w-full pr-[13px] pl-[10px] py-[12px] border border-gray-300 shadow-sm focus:outline-none bg-[#EEF2F3] uppercase focus:border-0 focus:ring-0 rounded-[4px] text-black text-lg font-norml font-['Inter'] leading-7 appearance-none"
                      >
                        <option value="50" className='text-black text-lg font-nomal font-["Inter"] leading-7 uppercase'>50</option>
                        <option value="60" className='text-black text-lg font-nomal font-["Inter"] leading-7 uppercase'>60</option>
                        <option value="70" className='text-black text-lg font-nomal font-["Inter"] leading-7 uppercase'>70</option>
                        <option value="80" className='text-black text-lg font-nomal font-["Inter"] leading-7 uppercase'>80</option>
                        <option value="85" className='text-black text-lg font-nomal font-["Inter"] leading-7 uppercase'>85</option>
                        <option value="86" className='text-black text-lg font-nomal font-["Inter"] leading-7 uppercase'>86</option>
                        <option value="87" className='text-black text-lg font-nomal font-["Inter"] leading-7 uppercase'>87</option>
                        <option value="88" className='text-black text-lg font-nomal font-["Inter"] leading-7 uppercase'>88</option>
                        <option value="89" className='text-black text-lg font-nomal font-["Inter"] leading-7 uppercase'>89</option>
                        <option value="90" className='text-black text-lg font-nomal font-["Inter"] leading-7 uppercase'>90</option>
                        <option value="91" className='text-black text-lg font-nomal font-["Inter"] leading-7 uppercase'>91</option>
                        <option value="92" className='text-black text-lg font-nomal font-["Inter"] leading-7 uppercase'>92</option>
                        <option value="93" className='text-black text-lg font-nomal font-["Inter"] leading-7 uppercase'>93</option>
                        <option value="94" className='text-black text-lg font-nomal font-["Inter"] leading-7 uppercase'>94</option>
                        <option value="95" className='text-black text-lg font-nomal font-["Inter"] leading-7 uppercase'>95</option>
                        <option value="96" className='text-black text-lg font-nomal font-["Inter"] leading-7 uppercase'>96</option>
                        <option value="97" className='text-black text-lg font-nomal font-["Inter"] leading-7 uppercase'>97</option>
                        <option value="98" className='text-black text-lg font-nomal font-["Inter"] leading-7 uppercase'>98</option>
                        <option value="99" className='text-black text-lg font-nomal font-["Inter"] leading-7 uppercase'>99</option>
                        <option value="100" className='text-black text-lg font-nomal font-["Inter"] leading-7 uppercase'>100</option>
                        <option value="101" className='text-black text-lg font-nomal font-["Inter"] leading-7 uppercase'>101</option>
                        <option value="102" className='text-black text-lg font-nomal font-["Inter"] leading-7 uppercase'>102</option>
                        <option value="103" className='text-black text-lg font-nomal font-["Inter"] leading-7 uppercase'>103</option>
                        <option value="104" className='text-black text-lg font-nomal font-["Inter"] leading-7 uppercase'>104</option>
                        <option value="105" className='text-black text-lg font-nomal font-["Inter"] leading-7 uppercase'>105</option>
                        <option value="106" className='text-black text-lg font-nomal font-["Inter"] leading-7 uppercase'>106</option>
                        <option value="107" className='text-black text-lg font-nomal font-["Inter"] leading-7 uppercase'>107</option>
                        <option value="108" className='text-black text-lg font-nomal font-["Inter"] leading-7 uppercase'>108</option>
                        <option value="109" className='text-black text-lg font-nomal font-["Inter"] leading-7 uppercase'>109</option>
                        <option value="110" className='text-black text-lg font-nomal font-["Inter"] leading-7 uppercase'>110</option>
                        <option value="111" className='text-black text-lg font-nomal font-["Inter"] leading-7 uppercase'>111</option>
                        <option value="112" className='text-black text-lg font-nomal font-["Inter"] leading-7 uppercase'>112</option>
                        <option value="113" className='text-black text-lg font-nomal font-["Inter"] leading-7 uppercase'>113</option>
                        <option value="114" className='text-black text-lg font-nomal font-["Inter"] leading-7 uppercase'>114</option>
                        <option value="115" className='text-black text-lg font-nomal font-["Inter"] leading-7 uppercase'>115</option>
                        <option value="116" className='text-black text-lg font-nomal font-["Inter"] leading-7 uppercase'>116</option>
                        <option value="117" className='text-black text-lg font-nomal font-["Inter"] leading-7 uppercase'>117</option>
                        <option value="118" className='text-black text-lg font-nomal font-["Inter"] leading-7 uppercase'>118</option>
                        <option value="119" className='text-black text-lg font-nomal font-["Inter"] leading-7 uppercase'>119</option>
                        <option value="120" className='text-black text-lg font-nomal font-["Inter"] leading-7 uppercase'>120</option>
                      </select>
                    </div>
                  </div>
                  <div className="cat-info-item flex flex-col gap-[10px]">
                    <div className="cat-info-item-title">
                      <p className="text-xl leading-7 font-normal font-['Inter'] text-[#73C018]">Type</p>
                    </div>
                    <div className="cat-info-input relative">
                      <select
                        className="h-[52px] block w-full pr-[13px] pl-[10px] py-[12px] border border-gray-300 shadow-sm focus:outline-none bg-[#EEF2F3] focus:border-0 focus:ring-0 rounded-[4px] text-black text-lg font-norml font-['Inter'] leading-7 appearance-none"
                        onChange={handleSeasonChange}
                        value={selectseason || ''}
                      >
                        <option value="summer" className='text-black text-lg font-nomal font-["Inter"] leading-7'>Summer</option>
                        <option value="winter" className='text-black text-lg font-nomal font-["Inter"] leading-7'>Winter</option>
                        <option value="winter-spike" className='text-black text-lg font-nomal font-["Inter"] leading-7'>Winter Spike</option>

                      </select>
                    </div>
                  </div>
                  <div className="cat-info-item flex flex-col gap-[10px]">
                    <div className="cat-info-item-title">
                      <p className="text-xl leading-7 font-normal font-['Inter'] text-[#73C018]">Width</p>
                    </div>
                    <div className="cat-info-input relative">
                      <select
                        onChange={handleWidthChange}
                        value={selectedWidth || ''}
                        className="h-[52px] block w-full pr-[13px] pl-[10px] py-[12px] border border-gray-300 shadow-sm focus:outline-none bg-[#EEF2F3] uppercase focus:border-0 focus:ring-0 rounded-[4px] text-black text-lg font-norml font-['Inter'] leading-7 appearance-none"
                      >
                        {generateOptions(145, 355, 10)}

                      </select>
                    </div>
                  </div>
                  <div className="cat-info-item flex flex-col gap-[10px]">
                    <div className="cat-info-item-title">
                      <p className="text-xl leading-7 font-normal font-['Inter'] text-[#73C018]">Profile</p>
                    </div>
                    <div className="cat-info-input relative">
                      <select
                        onChange={handleProfileChange}
                        value={selectedProfile || ''}
                        className="h-[52px] block w-full pr-[13px] pl-[10px] py-[12px] border border-gray-300 shadow-sm focus:outline-none bg-[#EEF2F3] uppercase focus:border-0 focus:ring-0 rounded-[4px] text-black text-lg font-norml font-['Inter'] leading-7 appearance-none"
                      >
                        {generateOptions(30, 90, 5)}

                      </select>
                    </div>
                  </div>
                  <div className="cat-info-item flex flex-col gap-[10px]">
                    <div className="cat-info-item-title">
                      <p className="text-xl leading-7 font-normal font-['Inter'] text-[#73C018]">Dimension</p>
                    </div>
                    <div className="cat-info-input relative">
                      <select
                        onChange={handleDimensionChange}
                        value={selectedDimension || ''}
                        className="h-[52px] block w-full pr-[13px] pl-[10px] py-[12px] border border-gray-300 shadow-sm focus:outline-none bg-[#EEF2F3] uppercase focus:border-0 focus:ring-0 rounded-[4px] text-black text-lg font-norml font-['Inter'] leading-7 appearance-none"
                      >
                        {generateOptions(13, 27)}

                      </select>
                    </div>
                  </div>
                  {/* <div className="cat-info-item flex flex-col gap-[10px]">
                                        <div className="cat-info-item-title">
                                            <p className="text-xl leading-7 font-normal font-['Inter'] text-[#73C018]">Type</p>
                                        </div>

                                        <div className="relative w-full h-[52px] flex items-center max-[1537px]:h-[44px]">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center gap-2 h-full overflow-x-auto">
                                                {selectedValues.map((value, index) => (
                                                    <div key={index} className="flex items-center bg-gray-100 rounded px-2 py-1 mr-1">
                                                        <button
                                                            className="text-red-500 hover:text-red-700"
                                                            onClick={() => {
                                                                setSelectedValues(selectedValues.filter((_, i) => i !== index));
                                                            }}
                                                        >
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="20"
                                                                height="20"
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                            >
                                                                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#73C018" />
                                                                <path d="M15 9L9 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                                <path d="M9 9L15 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                        </button>
                                                        <p className="ml-2 text-black">{value}</p>
                                                    </div>
                                                ))}
                                            </div>

                                            <input
                                                id="typeSelector"
                                                type="text"
                                                value={inputValue}
                                                onChange={handleInputChange}
                                                onKeyDown={handleKeyPress} // Use onKeyDown for backspace detection
                                                className="pr-3 py-2 w-full text-black focus:border-none focus:ring-0 focus:outline-none h-full rounded-[4px]" // Padding adjusted to avoid overlapping with selected values
                                            // placeholder="Type and press Enter"
                                            />
                                        </div>


                                    </div> */}
                  <div className="cat-info-btn-group flex flex-row gap-[4px]">
                    <div className="py-[12px] px-[107px] rounded-[4px] bg-[#73C018] cat-info-search-btn cursor-pointer" onClick={() => { setSelectedLoad(preSelectedLoad); setSelectedSpeed(preSelectedSpeed); setSelectedSeason(selectedValues); fetchTyres() }}>
                      <p className="text-xl leading-7 font-normal font-['Inter'] text-white">Search</p>
                    </div>
                    <div className="cat-info-reset-btn py-[14px] px-[13px] rounded-[4px] bg-white cursor-pointer" onClick={() => { setSelectedLoad(50); setSelectedSpeed('K'); setSelectSeason("summer"); setSelectedWidth("205"); setSelectedProfile("55"); setSelectedDimension("16"); fetchTyres(); setResetAllValue() }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M1 4V10H7" stroke="#6D6D6D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M3.51 14.9999C4.15839 16.8403 5.38734 18.4201 7.01166 19.5013C8.63598 20.5825 10.5677 21.1065 12.5157 20.9944C14.4637 20.8823 16.3226 20.1401 17.8121 18.8797C19.3017 17.6193 20.3413 15.9089 20.7742 14.0063C21.2072 12.1037 21.0101 10.1119 20.2126 8.33105C19.4152 6.55019 18.0605 5.07674 16.3528 4.13271C14.6451 3.18868 12.6769 2.82521 10.7447 3.09707C8.81245 3.36892 7.02091 4.26137 5.64 5.63995L1 9.99995" stroke="#6D6D6D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Partner />
          <GetInTouch />
          <Footer />
          <ToastContainer />
        </div>
      </main>
      {loading && <LoadingComponent />}
      <BackToTop />

    </div>
  );
}
export default ProductList;
