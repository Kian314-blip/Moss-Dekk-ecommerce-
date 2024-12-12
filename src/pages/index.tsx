import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
const inter = Inter({ subsets: ["latin"] });
import Partner from '../components/Partner';
import GetInTouch from '../components/GetInTouch';
import Footer from "../components/Footer"
import React, { ChangeEvent, useEffect, useState, useRef } from 'react';
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


import background_image from "../../public/image/Backgroun_image(tire).png"
import responsive_tire_image from "../../public/image/responsive_tire_image.png"
import tires_guide_image from "../../public/image/Tires guide 1.png"
import Hjulksift from "../svg/Hjulksift";
import Dekkmlegg from "../svg/Dekkmlegg";
import Avbalansering from "../svg/Avbalansering"
import Reperasjon from "../svg/Reperasjon"
import Dekkhotell from "../svg/Dekkhotell"
import Tiresize from "../svg/Tiresize"
import Desiredtire from "../svg/Desiredtire"
import Numbertire from '../svg/Numbertire';
import Selecttime from '../svg/Selecttime';
import Paymethod from '../svg/Union';
import Union from '../svg/Paymethod';
import Human from "../../public/image/human.png"
import Tpms from "../../public/image/Tpms.png"

import Nh220 from "../../public/image/Nh220.png"
import Nuts from "../../public/image/Nuts.png"
import Rings from "../../public/image/Rings.png"
import Felg from "../../public/image/Felg.png"
import Ellipse from "../../public/image/Ellipse 11.png"
import Comma from '../svg/comma';
import Star from '../svg/Star';
import Left_arrow from '../svg/Left_arrow';
import Right_arrow from '../svg/Right_arrow';

import Link from "next/link";
import Reg_Num_Modal from "@/modal/reg_num_modal";
import Welcome_Modal from "@/modal/welcome_modal";
import Welcome_Modal_Dark from "@/modal/welcome_modal_dark";
import Welcome_Modal_Case from "@/modal/welcome_modal_case";
import Menu_Popup from "@/modal/menu_popup";
import Omlegg_modal from "@/modal/omlegg_modal";
import Customer_Registration_modal from "@/modal/customer_registration_modal";
import Tire_Balancing_modal_another from "@/modal/tire_balancing_modal_another";
import Tire_Balancing_modal from "@/modal/tire_balancing_modal";
import Faktura_Modal from "@/modal/faktura_modal";
import Debetaling_modal from "@/modal/debetaling_modal";
import Faktura_Another_Modal from "@/modal/faktura_another_modal";
import Popup_Modal from "@/modal/popup_modal";
import axios from "axios";
import X_Cancel from "@/svg/X_cancel";
import Cancel from "@/svg/Cancel";
import { HtmlContext } from "next/dist/server/future/route-modules/app-page/vendored/contexts/entrypoints";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingComponent from "@/components/onLoad"
import BackToTop from "@/components/backToTop";
const backend_url = process.env.NEXT_PUBLIC_API_URL
export default function Home() {
    const [loading, setLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isHandlingClick, setIsHandlingClick] = useState<boolean>(false);
    const [isMenuPopup, setIsMenuPopup] = useState(false);
    const [reviews, setReviews] = useState<any[]>([{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [secondIndex, setSecondIndex] = useState(0);
    const scrollRef = useRef<HTMLDivElement>(null);
    const secondScrollRef = useRef<HTMLDivElement>(null);
    const [showPopup, setShowPopup] = useState(false);
    const [selectseason, setSelectSeason] = useState<string | null>(() => {
        const storedSeason = localStorage.getItem('selectSeason');
        return storedSeason ? storedSeason : 'summer'; // Default to 'summer'
    });
    
    const [selectedWidth, setSelectedWidth] = useState<string | null>(() => {
        const storedWidth = localStorage.getItem('selectedWidth');
        return storedWidth ? storedWidth : '205'; // Default to '205'
    });
    
    const [selectedProfile, setSelectedProfile] = useState<string | null>(() => {
        const storedProfile = localStorage.getItem('selectedProfile');
        return storedProfile ? storedProfile : '55'; // Default to '55'
    });
    
    const [selectedDimension, setSelectedDimension] = useState<string | null>(() => {
        const storedDimension = localStorage.getItem('selectedDimension');
        return storedDimension ? storedDimension : '16'; // Default to '16'
    });
    
        useEffect(() => {
            const storedSeason = localStorage.getItem('selectSeason');
            const storedWidth = localStorage.getItem('selectedWidth');
            const storedProfile = localStorage.getItem('selectedProfile');
            const storedDimension = localStorage.getItem('selectedDimension');
        
            if (storedSeason) setSelectSeason(storedSeason);
            if (storedWidth) setSelectedWidth(storedWidth);
            if (storedProfile) setSelectedProfile(storedProfile);
            if (storedDimension) setSelectedDimension(storedDimension);
        }, []);
        useEffect(() => {
            if (selectseason) localStorage.setItem('selectSeason', selectseason);
        }, [selectseason]);

        useEffect(() => {
            if (selectedWidth) localStorage.setItem('selectedWidth', selectedWidth);
        }, [selectedWidth]);

        useEffect(() => {
            if (selectedProfile) localStorage.setItem('selectedProfile', selectedProfile);
        }, [selectedProfile]);

        useEffect(() => {
            if (selectedDimension) localStorage.setItem('selectedDimension', selectedDimension);
        }, [selectedDimension]);

        const handleSeasonChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
            setSelectSeason(event.target.value);
        }
        const handleWidthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
            setSelectedWidth(event.target.value);
        };

        const handleProfileChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
            setSelectedProfile(event.target.value);
        };

        const handleDimensionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
            setSelectedDimension(event.target.value);
        };
    const handleToggleModal = (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
        ``
        if (isHandlingClick) return;

        setIsHandlingClick(true);
        setIsMenuPopup(prev => {
            const newValue = !prev;
            return newValue;
        });
        setTimeout(() => setIsHandlingClick(false), 200);
    };
    const handleCloseModal = () => {
        setIsMenuPopup(false)
    };

    const handleButtonClick: React.MouseEventHandler<HTMLDivElement> = () => {
        setShowPopup(!showPopup);
    };
    const handleOutsideClick = () => {
        setShowPopup(false);
    };


    const scrollTo = (index: number, ref: React.RefObject<HTMLDivElement>) => {
        if (ref.current) {
            const scrollAmount = ref.current.scrollWidth / 3;
            ref.current.scrollTo({
                left: scrollAmount * index,
                behavior: 'smooth',
            });
        }
    };
    secondIndex
    const handleDotClick = (index: number) => {
        setCurrentIndex(index);
        scrollTo(index, scrollRef);
    };

    const handleSecondDotClick = (index: number) => {
        setSecondIndex(index);
        scrollTo(index, secondScrollRef);
    };

    const generateOptions = (start: number, end: number, step: number = 1): JSX.Element[] => {
        const options = [];
        for (let i = start; i <= end; i += step) {
            options.push(
                <option key={i} value={i} className='text-black text-lg font-medium leading-7 text-start'>
                    {i}
                </option>
            );
        }
        return options;
    };
    const [tyres, setTyres] = useState<any[]>([])
    const goToProductPage = async () => {
        setLoading(true);
        const selectSeason = localStorage.getItem("selectSeason") || '';
        const selectWidth = localStorage.getItem("selectedWidth") || '';
        const selectProfile = localStorage.getItem("selectedProfile") || '';
        const selectDimension = localStorage.getItem("selectedDimension") || '';
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
            if (
                (response.data[1] && response.data[1].length > 0) ||
                (response.data[2] && response.data[2].length > 0) ||
                (response.data[3] && response.data[3].length > 0)
            ) {
                window.location.href = "/products";
                setLoading(false)
            }else if(response.data[0]=="no entry"){
                toast("Tires not found", {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    type: "warning", // Changed to warning or error if more appropriate
                });
                setLoading(false)

            }
             else {
                toast("Tires not found", {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    type: "warning", // Changed to warning or error if more appropriate
                });
                setLoading(false)

            }
            

        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await axios.get<any[]>('https://api.apify.com/v2/datasets/2cG9DNsKjQJdMySfE/items?token=apify_api_5J3BU4R3hbY7dpBgawZ7O7qITakyJ51Pr7Kz');
                setReviews(response.data);
            } catch (error) {
                console.error('Error fetching reviews:', error);
            }
        };

        fetchReviews();
    }, []);
    useEffect(() => {
        const handleScroll = () => {
            if (scrollRef.current) {
                const scrollAmount = scrollRef.current.scrollWidth / 3;
                const newIndex = Math.round(scrollRef.current.scrollLeft / scrollAmount);
                setCurrentIndex(newIndex);
            }
        };

        const scrollElement = scrollRef.current;
        scrollElement?.addEventListener('scroll', handleScroll);

        return () => {
            scrollElement?.removeEventListener('scroll', handleScroll);
        };
    }, []);
    useEffect(() => {
        const handleSecondScroll = () => {
            if (secondScrollRef.current) {
                const scrollAmount = secondScrollRef.current.scrollWidth / 3;
                const newIndex = Math.round(secondScrollRef.current.scrollLeft / scrollAmount);
                setSecondIndex(newIndex);
            }
        };

        const secondScrollElement = secondScrollRef.current;
        secondScrollElement?.addEventListener('scroll', handleSecondScroll);

        return () => {
            secondScrollElement?.removeEventListener('scroll', handleSecondScroll);
        };
    }, []);

    return (
        <div className='home-container justify-around'>
            <Header />
            <main style={{ width: "100%" }}>
                <div className='main-container'>
                    <div className='w-full relative'>
                        <div className='relative w-full h-[801px] top-[0px] right-[0px] responsive-tire-image'>
                            <Image alt="Tire image" src={background_image} className='w-full h-full' style={{ zIndex: -10 }} />
                            <Image alt="Tire image for the responsive" src={responsive_tire_image} className='w-full h-full responsive-rti-image' style={{ zIndex: -10 }} />
                            <div className='background-gradient'></div>
                        </div>
                        <div className='absolute top-0 flex flex-col pt-[321px] pl-[208px] z-10 responsive-image-text-content'>
                            <h1 className="w-[608px] text-white text-6xl font-semi-bold leading-[60px] z-10 responsive-itc-ad">Norway&apos;s first fully automated tire sales</h1>
                            <div className="w-[493px] text-[#73c018] text-lg font-medium leading-7 pt-[28px] pb-[44px] pl-[4px] z-10 responsive-itc-text">Order – Pay – Exchange with a few simple keystrokes.</div>
                            <div className="py-[18.5px] w-[277px] bg-[#73c018] rounded-sm justify-center items-center inline-flex z-10 responsive-itc-button cursor-pointer" onClick={handleToggleModal}>
                                <div className="text-center text-white text-lg font-semi-bold leading-7 z-10">SERVICE</div>
                            </div>
                        </div>
                    </div>
                    <div className='tire-finder-pan pl-[208px] flex flex-row bg-[#101010]'>
                        <div className='tfp-main-content flex flex-col  pt-[57px] pb-[31px] relative'>
                            <div className="w-[348px] text-white text-4xl font-semi-bold leading-10 tmc-header">QUICK TIRE FINDER</div>
                            <div className="w-[451px] h-[43px] pt-[15px] pb-[17px] text-[#aaaaaa] text-lg font-normal font-['Inter'] leading-7 tmc-text">Want to find the perfect fitment for your car wheels? </div>
                            <div className='flex flex-col pb-[17px] tire-style-input responsive-tire-style-input'>
                                <div className="text-white text-xl font-normal font-['Inter'] leading-7 mb-[5px] tsi-header">Sesong</div>
                                <div className='flex flex-row relative'>
                                    <div className="tsi-input-header w-[81px] h-16 px-8 py-2.5 bg-[#d6d6d6] rounded-tl-lg rounded-bl-lg flex-col justify-center items-start gap-2.5 inline-flex">
                                        <div className="text-center text-black text-lg font-semibold font-['Inter'] leading-7">1.</div>
                                    </div>
                                    <div className="w-[445px] absolute left-[75px] tsi-input-tag">
                                        <select
                                            className="h-[64px] block w-full px-[18px] py-[11px] border border-gray-300 shadow-sm focus:outline-none focus:ring-0 focus:border-0 rounded-lg rounded-br-lg text-black text-lg font-medium leading-7 appearance-none"
                                            onChange={handleSeasonChange}
                                            value={selectseason || ''}
                                        >
                                            <option value="summer" className='text-black text-lg font-medium leading-7'>Sommerdekk</option>
                                            <option value="winter" className='text-black text-lg font-medium leading-7'>Vinterdekk - piggfrie</option>
                                            <option value="winterStudded" className='text-black text-lg font-medium leading-7'>Vinterdekk - piggdekk</option>
                                        </select>

                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col pb-[17px] tire-style-input'>
                                <div className="text-white text-xl font-normal font-['Inter'] leading-7 mb-[5px] tsi-header">Width</div>
                                <div className='flex flex-row relative'>
                                    <div className="tsi-input-header w-[81px] h-16 px-8 py-2.5 bg-[#d6d6d6] rounded-tl-lg rounded-bl-lg flex-col justify-center items-start gap-2.5 inline-flex">
                                        <div className="text-center text-black text-lg font-semibold font-['Inter'] leading-7">2.</div>
                                    </div>
                                    <div className="w-[445px] absolute left-[75px] tsi-input-tag">
                                        <select
                                            className="h-[64px] block w-full px-[18px] py-[11px] border border-gray-300 shadow-sm focus:outline-none focus:ring-0 focus:border-0 rounded-lg rounded-br-lg text-black text-lg font-medium leading-7 appearance-none"
                                            onChange={handleWidthChange}
                                            value={selectedWidth || ''}
                                        >
                                            {generateOptions(145, 355, 10)}
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* Profile Select */}
                            <div className='flex flex-col pb-[17px] tire-style-input'>
                                <div className="text-white text-xl font-normal font-['Inter'] leading-7 mb-[5px] tsi-header">Profile</div>
                                <div className='flex flex-row relative'>
                                    <div className="tsi-input-header w-[81px] h-16 px-8 py-2.5 bg-[#d6d6d6] rounded-tl-lg rounded-bl-lg flex-col justify-center items-start gap-2.5 inline-flex">
                                        <div className="text-center text-black text-lg font-semibold font-['Inter'] leading-7">3.</div>
                                    </div>
                                    <div className="w-[445px] absolute left-[75px] tsi-input-tag">
                                        <select
                                            className="h-[64px] block w-full px-[18px] py-[11px] border border-gray-300 shadow-sm focus:outline-none focus:ring-0 focus:border-0 rounded-lg rounded-br-lg text-black text-lg font-medium leading-7 appearance-none"
                                            onChange={handleProfileChange}
                                            value={selectedProfile || ''}
                                        >
                                            {generateOptions(30, 90, 5)}
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* Dimension Select */}
                            <div className='flex flex-col pb-[17px] tire-style-input'>
                                <div className="text-white text-xl font-normal font-['Inter'] leading-7 mb-[5px] tsi-header">Dimension</div>
                                <div className='flex flex-row relative'>
                                    <div className="tsi-input-header w-[81px] h-16 px-8 py-2.5 bg-[#d6d6d6] rounded-tl-lg rounded-bl-lg flex-col justify-center items-start gap-2.5 inline-flex">
                                        <div className="text-center text-black text-lg font-semibold font-['Inter'] leading-7">4.</div>
                                    </div>
                                    <div className="w-[445px] absolute left-[75px] tsi-input-tag">
                                        <select
                                            className="h-[64px] block w-full px-[18px] py-[11px] border border-gray-300 shadow-sm focus:outline-none focus:ring-0 focus:border-0 rounded-lg rounded-br-lg text-black text-lg font-medium leading-7 appearance-none"
                                            onChange={handleDimensionChange}
                                            value={selectedDimension || ''}
                                        >
                                            {generateOptions(13, 27)}
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-row justify-between w-[518.62px] tsi-footer'>
                                <div className="cursor-pointer text-center text-white text-xs font-normal font-['Inter'] underline leading-7" onClick={handleButtonClick}>Help with ordering?</div>
                                <div className="tsi-footer-go-btn cursor-pointer w-[163px] h-[65px] p-2.5 bg-[#73c018] rounded-sm justify-center items-center gap-2.5 inline-flex" onClick={goToProductPage}>
                                    <div className="text-center text-white text-lg font-semibold font-['Inter'] leading-7">GO</div><ToastContainer />
                                </div>

                                {showPopup && (
                                    <div
                                        className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-[100]"
                                        onClick={handleOutsideClick} // Handle clicks on the backdrop
                                    >
                                        <div
                                            className="bg-white p-6 flex flex-col items-center relative rounded shadow-lg w-[600px]"
                                            onClick={(e) => e.stopPropagation()} // Prevent clicks inside the modal from closing it
                                        >
                                            <div onClick={handleButtonClick} className="absolute right-[15px] top-[10px]">
                                                <Cancel />
                                            </div>
                                            <h2 className="text-lg font-bold text-black">Popup Modal</h2>
                                            <p className="text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nibh ipsum, tempor vitae sem vel, consectetur facilisis risus. Donec sodales ex ex, ac tempor massa viverra eu.
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className='flex flex-col pt-[152px] w-full pr-[190px] tire-size-guide-pan'>
                            <div className='flex flex-row justify-between tsg-text-pan'>
                                <div className='flex flex-col tsgtp-pan'>
                                    <div className="w-[263px] ml-[35.4px] pb-[11px] text-white text-4xl font-semibold font-['Inter'] leading-10 tsg-title">Tire Size Guide</div>
                                    <div className="w-[717px] h-[84px] ml-[37.4px] text-white text-lg font-normal font-['Inter'] leading-7 tsg-text">Once you have determined it’s time to buy tires, you’ll need to know what size tires are correct for your vehicle. Depending on what you drive, you may be interested in how to find the right tire for your</div>
                                </div>
                                <Link href={"/guide"} className="w-[151px] h-[65px] p-2.5 bg-[#3a6113] rounded-lg justify-center items-center gap-2.5 inline-flex tsg-help-btn">
                                    <div className="text-center text-white text-lg font-semibold font-['Inter'] leading-7">GET HELP</div>
                                </Link>
                            </div>
                            <div className='pt-[59px] ml-[29.4px] tsg-image'>
                                <Image alt="Guide image for the Tire information" className="w-[956px] h-[364px]" src={tires_guide_image} />
                            </div>
                        </div>
                    </div>
                    <div className='service-pan flex flex-col items-center pt-[67px] pb-[113px]'>
                        <div className="w-[223px] text-white text-3xl font-semibold font-['Inter'] leading-9 service-title">OUR SERVICES</div>
                        <div className="text-white text-lg font-normal font-['Inter'] leading-7 pb-[57px] pt-[24px] service-text">Premium long lasting performance for your car</div>
                        <div className='relative flex flex-row w-full justify-between pl-[304px] pr-[276px] service-item y-scrollbar-hide' ref={scrollRef}>
                            {/* Service 1 */}
                            <div className='flex flex-col justify-center items-center z-10 service-item-tag'>
                                <div className="sit-tag w-[84px] h-[84px] bg-[#f6f6f6] flex flex-row justify-center items-center rounded-full">
                                    <Hjulksift />
                                </div>
                                <div className="pt-[10px] text-[#73c018] text-lg font-semibold font-['Inter'] leading-7">Hjulskift</div>
                            </div>

                            {/* Service 2 */}
                            <div className='flex flex-col justify-center items-center z-10 service-item-tag'>
                                <div className="sit-tag w-[84px] h-[84px] bg-[#f6f6f6] flex flex-row justify-center items-center rounded-full">
                                    <Dekkmlegg />
                                </div>
                                <div className="pt-[10px] text-[#73c018] text-lg font-semibold font-['Inter'] leading-7">Dekkomlegg</div>
                            </div>

                            {/* Service 3 */}
                            <div className='flex flex-col justify-center items-center z-10 service-item-tag'>
                                <div className="sit-tag w-[84px] h-[84px] bg-[#f6f6f6] flex flex-row justify-center items-center rounded-full">
                                    <Avbalansering />
                                </div>
                                <div className="pt-[10px] text-[#73c018] text-lg font-semibold font-['Inter'] leading-7">Avbalansering</div>
                            </div>

                            {/* Service 4 */}
                            <div className='flex flex-col justify-center items-center z-10 service-item-tag'>
                                <div className="sit-tag w-[84px] h-[84px] bg-[#f6f6f6] flex flex-row justify-center items-center rounded-full">
                                    <Reperasjon />
                                </div>
                                <div className="pt-[10px] text-[#73c018] text-lg font-semibold font-['Inter'] leading-7">Reperasjon av dekk</div>
                            </div>

                            {/* Service 5 */}
                            <div className='flex flex-col justify-center items-center z-10 service-item-tag'>
                                <div className="sit-tag w-[84px] h-[84px] bg-[#f6f6f6] flex flex-row justify-center items-center rounded-full">
                                    <Dekkhotell />
                                </div>
                                <div className="pt-[10px] text-[#73c018] text-lg font-semibold font-['Inter'] leading-7">Dekkhotell</div>
                            </div>

                            <div className="w-[65%] left-[371px] top-[41px] h-[0px] z-0 border border-[#aaaaaa] absolute service-cross-bar"></div>
                        </div>

                        <div className="h-[11px] pt-[21.84px] justify-center items-center gap-[13px] inline-flex service-pan-slide-item">
                            <div
                                className={`w-[11px] h-[11px] rounded-full cursor-pointer ${currentIndex === 0 ? 'bg-[#73c018]' : 'bg-white'}`}
                                onClick={() => handleDotClick(0)}
                            ></div>
                            <div
                                className={`w-[11px] h-[11px] rounded-full cursor-pointer ${currentIndex === 1 ? 'bg-[#73c018]' : 'bg-white'}`}
                                onClick={() => handleDotClick(1)}
                            ></div>
                            <div
                                className={`w-[11px] h-[11px] rounded-full cursor-pointer ${currentIndex === 2 ? 'bg-[#73c018]' : 'bg-white'}`}
                                onClick={() => handleDotClick(2)}
                            ></div>
                        </div>
                    </div>
                    <div className='bg-[#101010] flex flex-col pt-[126px] pl-[108px] pb-[32px] relative tire-change-pan'>
                        <div className="w-[467px] text-white text-4xl font-semibold font-['Inter'] leading-10 tcp-title">Our routines for tire changes</div>
                        <div className="w-[752px] pt-[57px] pb-[15px] text-white text-lg font-normal font-['Inter'] leading-7 tcp-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nibh ipsum, tempor vitae sem vel, consectetur facilisis risus. Donec sodales ex ex, ac tempor massa viverra eu.</div>
                        <div className='responsive-tire-change-human'>
                            <Image alt="Tire changer man image" className="w-[613px] h-[877px]" src={Human} />
                        </div>
                        <div className="w-[750px] h-7 mt-[56px] relative flex flex row tire-change-pan-list-first">
                            <div className="w-2.5 h-2.5 left-0 top-[11px] mt-[5px] bg-[#73c018] rounded-full tcpl-item"></div>
                            <div className="w-[732px] h-14 left-[18px] pl-[8px] text-white text-lg font-normal font-['Inter'] leading-7 tcpl-text-small">We lift the car on approved lifting tables.<br /></div>
                        </div>
                        <div className="w-[750px] h-7 mt-[16px] flex flex row tire-change-pan-list">
                            <div className="w-2.5 h-2.5 left-0 top-[11px] mt-[5px] bg-[#73c018] rounded-full tcpl-item"></div>
                            <div className="w-[732px] h-14 left-[18px] top-0 pl-[8px] text-white text-lg font-normal font-['Inter'] leading-7 tcpl-text-small">The wheel bolts are pulled out with a nut puller (normal pipe)<br /></div>
                        </div>
                        <div className="w-[750px] h-7 mt-[16px] flex flex row tire-change-pan-list">
                            <div className="w-2.5 h-2.5 left-0 top-[11px] mt-[5px] bg-[#73c018] rounded-full tcpl-item"></div>
                            <div className="w-[732px] h-14 left-[18px] top-0 pl-[8px] text-white text-lg font-normal font-['Inter'] leading-7 tcpl-text-small">The wheels are taken off and then put back on when they are ready.<br /></div>
                        </div>
                        <div className="w-[750px] h-14 mt-[16px] flex flex row tire-change-pan-list-big  ">
                            <div className="w-2.5 h-2.5 left-0 top-[11px] mt-[5px] bg-[#73c018] rounded-full tcpl-item"></div>
                            <div className="w-[732px] h-14 left-[18px] top-0 pl-[8px] text-white text-lg font-normal font-['Inter'] leading-7 tcpl-text-big">The wheels are taken off and then put back on when they are ready.(in some cases the tire must be beaten with a rubber hammer).<br /></div>
                        </div>
                        <div className="w-[750px] h-14 mt-[16px] flex flex row tire-change-pan-list-large">
                            <div className="w-2.5 h-2.5 left-0 top-[11px] mt-[5px] bg-[#73c018] rounded-full tcpl-item"></div>
                            <div className="w-[732px] h-14 left-[18px] top-0 pl-[8px] text-white text-lg font-normal font-['Inter'] leading-7 tcpl-text-large">the wheel bolts are put back using a nut driver and torque wrench.(correct torque according to the car, we use Koken torque pipes and calibrated torque wrenches).<br /></div>
                        </div>
                        <div className=" h-7 mt-[16px] flex flex row tire-change-pan-list-big especially-tcplb">
                            <div className="w-2.5 h-2.5 left-0 top-[11px] mt-[5px] bg-[#73c018] rounded-full tcpl-item"></div>
                            <div className="h-14 left-[18px] top-0 pl-[8px] text-white text-lg font-normal font-['Inter'] leading-7 tcpl-text-big">the air pressure is checked and topped up to the correct pressure according to the car.<br /></div>
                        </div>
                        <div className="w-[750px] h-14 mt-[16px] flex flex row tire-change-pan-list-big">
                            <div className="w-2.5 h-2.5 left-0 top-[11px] mt-[5px] bg-[#73c018] rounded-full tcpl-item"></div>
                            <div className="w-[732px] h-14 left-[18px] top-0 pl-[8px] text-white text-lg font-normal font-['Inter'] leading-7 tcpl-text-big">Remember to re-tighten the bolts after 60km or visit us and we will re-tighten them at no charge.<br /></div>
                        </div>
                        <div className='absolute bottom-0 right-[184px] tire-change-human'>
                            <Image alt="Tire changer man image" className="w-[613px] h-[877px]" src={Human} />
                        </div>
                    </div>
                    <div className='it-service-pan flex flex-col items-center pt-[91px] grow pb-[29px]'>
                        <div className="w-[228px] text-white text-3xl font-semibold font-['Inter'] leading-9 it-service-title">HOW IT WORK?</div>
                        <div className="text-white pt-[7px] text-lg font-normal font-['Inter'] leading-7 it-service-text">Simple process with 6 steps</div>
                        <div className='flex flex-row pl-[190px] pr-[195px] pt-[56px] relative it-service-pan-list y-scrollbar-hide' ref={secondScrollRef}>
                            <div className="h-[197px] pr-[60px] flex-col justify-start items-start gap-6 inline-flex z-10 ispl-item">
                                <div className="justify-start items-start gap-2.5 inline-flex ispl-item-number">
                                    <div className="w-14 h-14 bg-[#f6f6f6] rounded-full flex align-center items-center justify-center text-[#6d6d6d] text-3xl font-semi-bold">1</div>
                                </div>
                                <div className="flex-col justify-start items-start gap-2 flex ispl-content">
                                    <Tiresize />
                                    <div className="h-20 flex-col justify-start items-start gap-2.5 flex ispl-content-main">
                                        <div className="w-[187px] text-white text-sm font-semibold font-['Inter'] leading-tight isplcm-tit-first">Choose The Right Tire Size</div>
                                        <div className="w-[181px] text-[#d1d1d1] text-sm font-normal font-['Inter'] leading-tight isplcm-text-first">Tempor vitae sem vel, consectetur facilisis risus.</div>
                                    </div>
                                </div>
                            </div>
                            <div className="h-[197px] pr-[60px] flex-col justify-start items-start gap-6 inline-flex z-10 ispl-item">
                                <div className="justify-start items-start gap-2.5 inline-flex ispl-item-number">
                                    <div className="w-14 h-14 bg-[#f6f6f6] rounded-full flex align-center items-center justify-center text-[#6d6d6d] text-3xl font-semi-bold">2</div>
                                </div>
                                <div className="flex-col justify-start items-start gap-2 flex ispl-content">
                                    <Desiredtire />
                                    <div className="h-20 flex-col justify-start items-start gap-2.5 flex ispl-content-main">
                                        <div className="w-[187px] text-white text-sm font-semibold font-['Inter'] leading-tight isplcm-tit-second">Choose Your Desired Tire</div>
                                        <div className="w-[181px] text-[#d1d1d1] text-sm font-normal font-['Inter'] leading-tight isplcm-text-second">budgetdekk, kvalitetsdekk eller premiumdekk</div>
                                    </div>
                                </div>
                            </div>
                            <div className="h-[197px] pr-[60px] flex-col justify-start items-start gap-6 inline-flex z-10 ispl-item">
                                <div className="justify-start items-start gap-2.5 inline-flex ispl-item-number">
                                    <div className="w-14 h-14 bg-[#f6f6f6] rounded-full flex align-center items-center justify-center text-[#6d6d6d] text-3xl font-semi-bold">3</div>
                                </div>
                                <div className="flex-col justify-start items-start gap-2 flex ispl-content">
                                    <Numbertire />
                                    <div className="h-20 flex-col justify-start items-start gap-2.5 flex ispl-content-main">
                                        <div className="w-[187px] text-white text-sm font-semibold font-['Inter'] leading-tight isplcm-tit-third">Fill In The Info And Select The Number Of Tires</div>
                                        <div className="w-[181px] text-[#d1d1d1] text-sm font-normal font-['Inter'] leading-tight isplcm-text-third">Tempor vitae sem vel, consectetur facilisis risus.</div>
                                    </div>
                                </div>
                            </div>
                            <div className="h-[197px] pr-[60px] flex-col justify-start items-start gap-6 inline-flex z-10 ispl-item">
                                <div className="justify-start items-start gap-2.5 inline-flex ispl-item-number">
                                    <div className="w-14 h-14 bg-[#f6f6f6] rounded-full flex align-center items-center justify-center text-[#6d6d6d] text-3xl font-semi-bold">4</div>
                                </div>
                                <div className="flex-col justify-start items-start gap-2 flex ispl-content">
                                    <Selecttime />
                                    <div className="h-20 flex-col justify-start items-start gap-2.5 flex ispl-content-main">
                                        <div className="w-[187px] text-white text-sm font-semibold font-['Inter'] leading-tight isplcm-tit-fourth">Select Time And Date</div>
                                        <div className="w-[181px] text-[#d1d1d1] text-sm font-normal font-['Inter'] leading-tight isplcm-text-fourth">Tempor vitae sem vel, consectetur facilisis risus.</div>
                                    </div>
                                </div>
                            </div>
                            <div className="h-[197px] pr-[60px] flex-col justify-start items-start gap-6 inline-flex z-10 ispl-item">
                                <div className="justify-start items-start gap-2.5 inline-flex ispl-item-number">
                                    <div className="w-14 h-14 bg-[#f6f6f6] rounded-full flex align-center items-center justify-center text-[#6d6d6d] text-3xl font-semi-bold">5</div>
                                </div>
                                <div className="flex-col justify-start items-start gap-2 flex ispl-content">
                                    <Paymethod />
                                    <div className="h-20 flex-col justify-start items-start gap-2.5 flex ispl-content-main">
                                        <div className="w-[187px] text-white text-sm font-semibold font-['Inter'] leading-tight isplcm-tit-fifth">Choose Payment Method</div>
                                        <div className="w-[181px] text-[#d1d1d1] text-sm font-normal font-['Inter'] leading-tight isplcm-text-fifth">Tempor vitae sem vel, consectetur facilisis risus.</div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-col justify-start items-start gap-6 inline-flex z-10 ispl-item" style={{ "paddingRight": '0' }}>
                                <div className="justify-start items-start gap-2.5 inline-flex ispl-item-number">
                                    <div className="w-14 h-14 bg-[#f6f6f6] rounded-full flex align-center items-center justify-center text-[#6d6d6d] text-3xl font-semi-bold">6</div>
                                </div>
                                <div className="flex-col justify-start items-start gap-2 flex ispl-content">
                                    <Union />
                                    <div className="h-20 flex-col justify-start items-start gap-2.5 flex ispl-content-main">
                                        <div className="w-[273px] text-white text-sm font-semibold font-['Inter'] leading-tight isplcm-tit-sixth">Meet With Us At Skredderveien 5,1537 Moss At The Appointed Time.</div>
                                        <div className="w-[233 px] text-[#d1d1d1] text-sm font-normal font-['Inter'] leading-tight isplcm-text-sixth">Tempor vitae sem vel, consectetur facilisis risus.</div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[63%] top-[84px] left-[241px] z-0 h-[0px] border border-[#aaaaaa] absolute it-service-cross-bar"></div>
                        </div>
                        <div className="h-[11px] pt-[21.84px] justify-center items-center gap-[13px] inline-flex service-pan-slide-item it-service-pan-slide-item">
                            <div
                                className={`w-[11px] h-[11px] rounded-full cursor-pointer ${secondIndex === 0 ? 'bg-[#73c018]' : 'bg-white'}`}
                                onClick={() => handleSecondDotClick(0)}
                            ></div>
                            <div
                                className={`w-[11px] h-[11px] rounded-full cursor-pointer ${secondIndex === 1 ? 'bg-[#73c018]' : 'bg-white'}`}
                                onClick={() => handleSecondDotClick(1)}
                            ></div>
                            <div
                                className={`w-[11px] h-[11px] rounded-full cursor-pointer ${secondIndex === 2 ? 'bg-[#73c018]' : 'bg-white'}`}
                                onClick={() => handleSecondDotClick(2)}
                            ></div>
                        </div>
                    </div>
                    <div className='passenger-tire bg-[#151515] pt-[8px] pb-[53px] flex flex-col items-center justify-center'>
                        <div className="w-[full] text-white text-3xl font-semibold font-['Inter'] leading-9 passenger-tire-title">BEST SELLING PASSENGER TIRES</div>
                        <div className="w-[full] text-white text-3xl font-semibold font-['Inter'] leading-9 responsive-passenger-tire-title">Popular Products</div>
                        <div className="w-[full] pt-[21px] pb-[50px] text-center text-white text-base font-normal font-['Inter'] leading-normal passenger-tire-text">Don’t hold off for too long. Inventory and pricing changes daily.</div>
                        <div className="w-[full] pt-[21px] pb-[50px] text-center text-white text-base font-normal font-['Inter'] leading-normal responsive-passenger-tire-text">Nb: our online prices only apply to the procedure mentioned above. Customer reception is not available for online customers.</div>
                        <div className='passenger-tire-list w-[100%] overflow-hidden gap-[32px] flex flex-row px-[208px]'>
                            <div className=" flex-col justify-start items-start inline-flex">
                                <div className="justify-start items-start gap-2.5 relative inline-flex">
                                    <div className="w-[303px] h-[303px] bg-[#e3e3e3] flex justify-center items-center">
                                        <div className="grow shrink basis-0 self-stretch justify-center items-center flex">
                                            <Image alt="Product image related to the Car" className="" src={Tpms} />
                                        </div>
                                    </div>

                                </div>
                                <div className="w-[303px] h-[248px] px-[18px] py-12 bg-white flex-col justify-start items-start gap-2.5 flex">
                                    <div className="flex-col justify-start items-center gap-6 flex">
                                        <div className="w-[263px] text-center"><span className="text-black text-lg font-semibold font-['Inter'] leading-7">TPMS – TIRE PRESSURE SENSORS<br /></span><span className="text-[#73c018] text-3xl font-semibold font-['Inter'] leading-9">$1,890 – $2,335</span></div>
                                        <div className="self-stretch grow shrink basis-0 p-2.5 bg-[#73c018] rounded justify-center items-center gap-2.5 inline-flex">
                                            <div className="text-white text-base font-normal font-['Inter'] leading-normal">DETAILS</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-col justify-start items-start inline-flex">
                                <div className="justify-start items-start gap-2.5 relative inline-flex">
                                    <div className="w-[303px] h-[303px] bg-[#e3e3e3] flex justify-center items-center">
                                        <div className="grow shrink basis-0 self-stretch justify-center items-center flex">
                                            <Image alt="Product image related to the Car" className="" src={Nh220} />
                                        </div>
                                    </div>

                                </div>
                                <div className="w-[303px] h-[248px] px-[18px] py-12 bg-white flex-col justify-start items-start gap-2.5 flex">
                                    <div className="flex-col justify-start items-center gap-6 flex">
                                        <div className="w-[263px] text-center"><span className="text-black text-lg font-semibold font-['Inter'] leading-7">ENGINE PISTON NH220<br />-<br /></span><span className="text-[#73c018] text-3xl font-semibold font-['Inter'] leading-9">$1,890 – $2,335</span></div>
                                        <div className="self-stretch grow shrink basis-0 p-2.5 bg-[#73c018] rounded justify-center items-center gap-2.5 inline-flex">
                                            <div className="text-white text-base font-normal font-['Inter'] leading-normal">DETAILS</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-col justify-start items-start inline-flex">
                                <div className="justify-start items-start gap-2.5 relative inline-flex">
                                    <div className="w-[303px] h-[303px] bg-[#e3e3e3] flex justify-center items-center">
                                        <div className="grow shrink basis-0 self-stretch justify-center items-center flex">
                                            <Image alt="Product image related to the Car" className="" src={Nuts} />
                                        </div>
                                    </div>

                                </div>
                                <div className="w-[303px] h-[248px] px-[18px] py-12 bg-white flex-col justify-start items-start gap-2.5 flex">
                                    <div className="flex-col justify-start items-center gap-6 flex">
                                        <div className="w-[263px] text-center"><span className="text-black text-lg font-semibold font-['Inter'] leading-7">WHEEL BOLTS/NUTS<br />-<br /></span><span className="text-[#73c018] text-3xl font-semibold font-['Inter'] leading-9">$1,890 – $2,335</span></div>
                                        <div className="self-stretch grow shrink basis-0 p-2.5 bg-[#73c018] rounded justify-center items-center gap-2.5 inline-flex">
                                            <div className="text-white text-base font-normal font-['Inter'] leading-normal">DETAILS</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-col justify-start items-start inline-flex">
                                <div className="justify-start items-start gap-2.5 relative inline-flex">
                                    <div className="w-[303px] h-[303px] bg-[#e3e3e3] flex justify-center items-center">
                                        <div className="grow shrink basis-0 self-stretch justify-center items-center flex">
                                            <Image alt="Product image related to the Car" className="" src={Rings} />
                                        </div>
                                    </div>

                                </div>
                                <div className="w-[303px] h-[248px] px-[18px] py-12 bg-white flex-col justify-start items-start gap-2.5 flex">
                                    <div className="flex-col justify-start items-center gap-6 flex">
                                        <div className="w-[263px] text-center"><span className="text-black text-lg font-semibold font-['Inter'] leading-7">CENTER RINGS<br />-<br /></span><span className="text-[#73c018] text-3xl font-semibold font-['Inter'] leading-9">$1,890 – $2,335</span></div>
                                        <div className="self-stretch grow shrink basis-0 p-2.5 bg-[#73c018] rounded justify-center items-center gap-2.5 inline-flex">
                                            <div className="text-white text-base font-normal font-['Inter'] leading-normal">DETAILS</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-col justify-start items-start inline-flex">
                                <div className="justify-start items-start gap-2.5 relative inline-flex">
                                    <div className="w-[303px] h-[303px] bg-[#e3e3e3] flex justify-center items-center">
                                        <div className="grow shrink basis-0 self-stretch justify-center items-center flex">
                                            <Image alt="Product image related to the Car" className="" src={Felg} />
                                        </div>
                                    </div>

                                </div>
                                <div className="w-[303px] h-[248px] px-[18px] py-12 bg-white flex-col justify-start items-start gap-2.5 flex">
                                    <div className="flex-col justify-start items-center gap-6 flex">
                                        <div className="w-[263px] text-center"><span className="text-black text-lg font-semibold font-['Inter'] leading-7">Felg<br />-<br /></span><span className="text-[#73c018] text-3xl font-semibold font-['Inter'] leading-9">$1,890 – $2,335</span></div>
                                        <div className="self-stretch grow shrink basis-0 p-2.5 bg-[#73c018] rounded justify-center items-center gap-2.5 inline-flex">
                                            <div className="text-white text-base font-normal font-['Inter'] leading-normal">DETAILS</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" flex-col justify-start items-start inline-flex">
                                <div className="justify-start items-start gap-2.5 relative inline-flex">
                                    <div className="w-[303px] h-[303px] bg-[#e3e3e3] flex justify-center items-center">
                                        <div className="grow shrink basis-0 self-stretch justify-center items-center flex">
                                            <Image alt="Product image related to the Car" className="" src={Tpms} />
                                        </div>
                                    </div>

                                </div>
                                <div className="w-[303px] h-[248px] px-[18px] py-12 bg-white flex-col justify-start items-start gap-2.5 flex">
                                    <div className="flex-col justify-start items-center gap-6 flex">
                                        <div className="w-[263px] text-center"><span className="text-black text-lg font-semibold font-['Inter'] leading-7">TPMS – TIRE PRESSURE SENSORS<br /></span><span className="text-[#73c018] text-3xl font-semibold font-['Inter'] leading-9">$1,890 – $2,335</span></div>
                                        <div className="self-stretch grow shrink basis-0 p-2.5 bg-[#73c018] rounded justify-center items-center gap-2.5 inline-flex">
                                            <div className="text-white text-base font-normal font-['Inter'] leading-normal">DETAILS</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-col justify-start items-start inline-flex">
                                <div className="justify-start items-start gap-2.5 relative inline-flex">
                                    <div className="w-[303px] h-[303px] bg-[#e3e3e3] flex justify-center items-center">
                                        <div className="grow shrink basis-0 self-stretch justify-center items-center flex">
                                            <Image alt="Product image related to the Car" className="" src={Nh220} />
                                        </div>
                                    </div>

                                </div>
                                <div className="w-[303px] h-[248px] px-[18px] py-12 bg-white flex-col justify-start items-start gap-2.5 flex">
                                    <div className="flex-col justify-start items-center gap-6 flex">
                                        <div className="w-[263px] text-center"><span className="text-black text-lg font-semibold font-['Inter'] leading-7">ENGINE PISTON NH220<br />-<br /></span><span className="text-[#73c018] text-3xl font-semibold font-['Inter'] leading-9">$1,890 – $2,335</span></div>
                                        <div className="self-stretch grow shrink basis-0 p-2.5 bg-[#73c018] rounded justify-center items-center gap-2.5 inline-flex">
                                            <div className="text-white text-base font-normal font-['Inter'] leading-normal">DETAILS</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-col justify-start items-start inline-flex">
                                <div className="justify-start items-start gap-2.5 relative inline-flex">
                                    <div className="w-[303px] h-[303px] bg-[#e3e3e3] flex justify-center items-center">
                                        <div className="grow shrink basis-0 self-stretch justify-center items-center flex">
                                            <Image alt="Product image related to the Car" className="" src={Nuts} />
                                        </div>
                                    </div>

                                </div>
                                <div className="w-[303px] h-[248px] px-[18px] py-12 bg-white flex-col justify-start items-start gap-2.5 flex">
                                    <div className="flex-col justify-start items-center gap-6 flex">
                                        <div className="w-[263px] text-center"><span className="text-black text-lg font-semibold font-['Inter'] leading-7">WHEEL BOLTS/NUTS<br />-<br /></span><span className="text-[#73c018] text-3xl font-semibold font-['Inter'] leading-9">$1,890 – $2,335</span></div>
                                        <div className="self-stretch grow shrink basis-0 p-2.5 bg-[#73c018] rounded justify-center items-center gap-2.5 inline-flex">
                                            <div className="text-white text-base font-normal font-['Inter'] leading-normal">DETAILS</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-col justify-start items-start inline-flex">
                                <div className="justify-start items-start gap-2.5 relative inline-flex">
                                    <div className="w-[303px] h-[303px] bg-[#e3e3e3] flex justify-center items-center">
                                        <div className="grow shrink basis-0 self-stretch justify-center items-center flex">
                                            <Image alt="Product image related to the Car" className="" src={Rings} />
                                        </div>
                                    </div>

                                </div>
                                <div className="w-[303px] h-[248px] px-[18px] py-12 bg-white flex-col justify-start items-start gap-2.5 flex">
                                    <div className="flex-col justify-start items-center gap-6 flex">
                                        <div className="w-[263px] text-center"><span className="text-black text-lg font-semibold font-['Inter'] leading-7">CENTER RINGS<br />-<br /></span><span className="text-[#73c018] text-3xl font-semibold font-['Inter'] leading-9">$1,890 – $2,335</span></div>
                                        <div className="self-stretch grow shrink basis-0 p-2.5 bg-[#73c018] rounded justify-center items-center gap-2.5 inline-flex">
                                            <div className="text-white text-base font-normal font-['Inter'] leading-normal">DETAILS</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-col justify-start items-start inline-flex">
                                <div className="justify-start items-start gap-2.5 relative inline-flex">
                                    <div className="w-[303px] h-[303px] bg-[#e3e3e3] flex justify-center items-center">
                                        <div className="grow shrink basis-0 self-stretch justify-center items-center flex">
                                            <Image alt="Product image related to the Car" className="" src={Felg} />
                                        </div>
                                    </div>

                                </div>
                                <div className="w-[303px] h-[248px] px-[18px] py-12 bg-white flex-col justify-start items-start gap-2.5 flex">
                                    <div className="flex-col justify-start items-center gap-6 flex">
                                        <div className="w-[263px] text-center"><span className="text-black text-lg font-semibold font-['Inter'] leading-7">Felg<br />-<br /></span><span className="text-[#73c018] text-3xl font-semibold font-['Inter'] leading-9">$1,890 – $2,335</span></div>
                                        <div className="self-stretch grow shrink basis-0 p-2.5 bg-[#73c018] rounded justify-center items-center gap-2.5 inline-flex">
                                            <div className="text-white text-base font-normal font-['Inter'] leading-normal">DETAILS</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="h-[11px] pt-[21.84px] justify-center items-center gap-[13px] inline-flex passenger-tire-item">
                            <div className="w-[11px] h-[11px] bg-[#73c018] rounded-full"></div>
                            <div className="w-[11px] h-[11px] bg-white rounded-full"></div>
                            <div className="w-[11px] h-[11px] bg-white rounded-full"></div>
                        </div>
                    </div>
                    <div className='testimonials-pan flex flex-col pt-[39px] justify-center items-center pb-[42px] pl-[155px] pr-[164px]'>
                        <div className="w-[221px] text-white text-4xl font-semibold font-['Inter'] leading-10 testimonials-pan-title">Testimonials</div>
                        <div className="w-[532px] pt-[14px] text-center text-white text-base font-normal font-['Inter'] testimonials-pan-text leading-normal">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </div>
                        <div className='testimonials-pan-list gap-[40px] relative flex flex-row justify-center items-center mt-[40px] w-[1504px]'>
                            <div className='tetp-left-arrow absolute left-[-53px]'>
                                <Left_arrow />
                            </div>
                            <div className='tetp-right-arrow absolute right-[-53px]'>
                                <Right_arrow />
                            </div>

                            {
                                reviews.length && reviews.map((review: any, i) => (
                                    i < 2 && <div key={`review-${i}`} className="w-[732px] h-[315px] px-[21px] py-[58px] bg-white rounded-[10px] flex-col justify-start items-start gap-2.5 inline-flex testimonials-pan-list-item">
                                        <div className="justify-start items-start gap-[23px] inline-flex tpli-content">
                                            <div className="w-[199px] h-[199px] relative tplic-info">
                                                <Image alt="reviewer-avatar" width={199} height={199} className="w-[199px] h-[199px] left-0 top-0 absolute rounded-full" src={review.reviewerPhotoUrl ? review.reviewerPhotoUrl : Ellipse} />
                                                <div className="w-11 h-11 left-[4.23px] top-[7.62px] absolute">
                                                    <div className="w-11 h-11 left-0 top-0 absolute bg-[#d6d6d6] rounded-full border-2 border-white tplic-info-tick-back"></div>
                                                    <div className="w-[22.86px] h-[20.32px] left-[11.01px] top-[11.86px] absolute tplic-info-tick">
                                                        <div className="w-[22.86px] h-[20.32px] left-0 top-0 absolute">
                                                            <Comma />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex-col justify-start items-start gap-[22px] inline-flex">
                                                <div className="justify-start items-center gap-1.5 inline-flex">
                                                    <div className="text-[#73c018] text-xl font-normal font-['Inter'] leading-7">{review.stars}</div>
                                                    <div className="justify-start items-start gap-[9px] flex">
                                                        <div className="w-[15px] h-[15px] justify-center items-center flex"><Star /></div>
                                                        <div className="w-[15px] h-[15px] justify-center items-center flex"><Star /></div>
                                                        <div className="w-[15px] h-[15px] justify-center items-center flex"><Star /></div>
                                                        <div className="w-[15px] h-[15px] justify-center items-center flex"><Star /></div>
                                                        <div className="w-[15px] h-[15px] justify-center items-start gap-[0px] flex"><Star /></div>
                                                    </div>
                                                </div>
                                                <div className="flex-col justify-start items-start flex tpli-recommend-content">
                                                    <div className="w-[428px] h-[78px] overflow-hidden text-black text-base font-normal font-['Inter'] leading-normal tplirc-text line-clamp-3">{review.textTranslated}</div>
                                                    <div className="flex-col justify-start items-start flex">
                                                        <div className="text-black text-xl font-semibold font-['Inter'] leading-7">{review.name}</div>
                                                        <div className="text-black text-base font-normal font-['Inter'] leading-normal">{review.title}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                            {/* <div className="w-[732px] h-[315px] px-[21px] py-[58px] bg-white rounded-[10px] flex-col justify-start items-start gap-2.5 inline-flex testimonials-pan-list-item">
                                <div className="justify-start items-start gap-[23px] inline-flex tpli-content">
                                    <div className="w-[199px] h-[199px] relative tplic-info">
                                        <Image alt="" className="w-[199px] h-[199px] left-0 top-0 absolute rounded-full" src={Ellipse} />
                                        <div className="w-11 h-11 left-[4.23px] top-[7.62px] absolute">
                                            <div className="w-11 h-11 left-0 top-0 absolute bg-[#d6d6d6] rounded-full border-2 border-white tplic-info-tick-back"></div>
                                            <div className="w-[22.86px] h-[20.32px] left-[11.01px] top-[11.86px] absolute tplic-info-tick">
                                                <div className="w-[22.86px] h-[20.32px] left-0 top-0 absolute">
                                                    <Comma />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-col justify-start items-start gap-[22px] inline-flex">
                                        <div className="justify-start items-center gap-1.5 inline-flex">
                                            <div className="text-[#73c018] text-xl font-normal font-['Inter'] leading-7">4.7</div>
                                            <div className="justify-start items-start gap-[9px] flex">
                                                <div className="w-[15px] h-[15px] justify-center items-center flex"><Star /></div>
                                                <div className="w-[15px] h-[15px] justify-center items-center flex"><Star /></div>
                                                <div className="w-[15px] h-[15px] justify-center items-center flex"><Star /></div>
                                                <div className="w-[15px] h-[15px] justify-center items-center flex"><Star /></div>
                                                <div className="w-[15px] h-[15px] justify-center items-start gap-[0px] flex"><Star /></div>
                                            </div>
                                        </div>
                                        <div className="flex-col justify-start items-start flex tpli-recommend-content">
                                            <div className="w-[428px] h-[79px] text-black text-base font-normal font-['Inter'] leading-normal tplirc-text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
                                            <div className="flex-col justify-start items-start flex">
                                                <div className="text-black text-xl font-semibold font-['Inter'] leading-7">Ronald Richards</div>
                                                <div className="text-black text-base font-normal font-['Inter'] leading-normal">President of Guitar</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[732px] h-[315px] px-[21px] py-[58px] bg-white rounded-[10px] flex-col justify-start items-start gap-2.5 inline-flex testimonials-pan-list-item">
                                <div className="justify-start items-start gap-[23px] inline-flex tpli-content">
                                    <div className="w-[199px] h-[199px] relative tplic-info">
                                        <Image alt="" className="w-[199px] h-[199px] left-0 top-0 absolute rounded-full" src={Ellipse} />
                                        <div className="w-11 h-11 left-[4.23px] top-[7.62px] absolute">
                                            <div className="w-11 h-11 left-0 top-0 absolute bg-[#d6d6d6] rounded-full border-2 border-white tplic-info-tick-back"></div>
                                            <div className="w-[22.86px] h-[20.32px] left-[11.01px] top-[11.86px] absolute tplic-info-tick">
                                                <div className="w-[22.86px] h-[20.32px] left-0 top-0 absolute">
                                                    <Comma />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-col justify-start items-start gap-[22px] inline-flex">
                                        <div className="justify-start items-center gap-1.5 inline-flex">
                                            <div className="text-[#73c018] text-xl font-normal font-['Inter'] leading-7">4.7</div>
                                            <div className="justify-start items-start gap-[9px] flex">
                                                <div className="w-[15px] h-[15px] justify-center items-center flex"><Star /></div>
                                                <div className="w-[15px] h-[15px] justify-center items-center flex"><Star /></div>
                                                <div className="w-[15px] h-[15px] justify-center items-center flex"><Star /></div>
                                                <div className="w-[15px] h-[15px] justify-center items-center flex"><Star /></div>
                                                <div className="w-[15px] h-[15px] justify-center items-start gap-[0px] flex"><Star /></div>
                                            </div>
                                        </div>
                                        <div className="flex-col justify-start items-start flex tpli-recommend-content">
                                            <div className="w-[428px] h-[79px] text-black text-base font-normal font-['Inter'] leading-normal tplirc-text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
                                            <div className="flex-col justify-start items-start flex">
                                                <div className="text-black text-xl font-semibold font-['Inter'] leading-7">Ronald Richards</div>
                                                <div className="text-black text-base font-normal font-['Inter'] leading-normal">President of Guitar</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}

                        </div>
                        <div className="h-[11px] pt-[20px] justify-center items-center gap-[13px] inline-flex testimonials">
                            <div className="w-[11px] h-[11px] bg-[#73c018] rounded-full"></div>
                            <div className="w-[11px] h-[11px] bg-white rounded-full"></div>
                            <div className="w-[11px] h-[11px] bg-white rounded-full"></div>
                        </div>
                    </div>
                    <Partner />
                    <GetInTouch />
                    <Footer />
                </div>
                {/* <Reg_Num_Modal isOpen={isModalOpen} onClose={closeModal}/> */}
                {/* <Welcome_Modal isOpen={isModalOpen} onClose={closeModal} /> */}
                {/* <Welcome_Modal_Dark isOpen={isModalOpen} onClose={closeModal} /> */}
                {/* <Welcome_Modal_Case isOpen={isModalOpen} onClose={closeModal} /> */}
                <Menu_Popup isOpen={isMenuPopup} onClose={handleCloseModal} />
                {/* <Omlegg_modal isOpen={isModalOpen} onClose={closeModal} /> */}
                {/* <Tire_Balancing_modal isOpen={isModalOpen} onClose={closeModal} /> */}
                {/* <Customer_Registration_modal isOpen={isModalOpen} onClose={closeModal} /> */}
                {/* <Tire_Balancing_modal_another isOpen={isModalOpen} onClose={closeModal} /> */}
                {/* <Faktura_Modal isOpen={isModalOpen} onClose={closeModal} /> */}
                {/* <Debetaling_modal isOpen={isModalOpen} onClose={closeModal} /> */}
                {/* <Faktura_Another_Modal isOpen={isModalOpen} onClose={closeModal} /> */}
                {/* <Popup_Modal isOpen={isModalOpen} onClose={closeModal} /> */}
                {loading && <LoadingComponent />}
                <BackToTop/>
            </main>
        </div>
    );
}
