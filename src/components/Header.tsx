'use client'
import React from 'react';
import logo_image from '../../public/image/autobutler.png'
import SearchIcon from '../svg/SerachIcon'
import ShoppingCart from '../svg/ShoppingCart';
import CountryUS from '../svg/CountryUS';
import ArrowDropDown from '../svg/ArrowDropDown';
import Menu from '../svg/Menu';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Responsive_Sidebar from './Responsive_Sidebar';
import MenuPopup from '@/modal/menu_popup';
import CountryNO from '@/svg/CountryNO';
import ResponsiveSidebar from './Responsive_Sidebar';
export default function Header() {
    const [isToggleSidebar, setIsToggleSidebar] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [languageOpen, setLanguageOpen] = useState(false);
    const [isResponsiveBarVisible, setIsResponsiveBarVisible] = useState(false);
    const [language, setLanguage] = useState('English');
    const [flag, setFlag] = useState(<CountryUS />); // Default flag for English
    const [isHandlingClick, setIsHandlingClick] = useState<boolean>(false);
    const [isMenuPopup, setIsMenuPopup] = useState(false);
    const [isSearchVisible, setIsSearchVisible] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isMenuPopupOpen, setIsMenuPopupOpen] = useState(false);

    const toggleSidebar = () => {
        // Close the MenuPopup if it's open
        if (isMenuPopup) {
            setIsMenuPopup(false);
        }
        // Toggle the sidebar
        setIsOpen((prev) => !prev);
    };
    // const handleSidebarClose = () => {
    //     setIsSidebarOpen(false);
    // };

    const handleToggleModal = (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation(); // Prevent the event from bubbling up

        if (isHandlingClick) return; // Ignore if already handling

        setIsHandlingClick(true);
        setIsMenuPopupOpen(prev => {
            const newValue = !prev; // Toggle the state
            return newValue;
        });

        // Reset the flag after a short delay
        setTimeout(() => setIsHandlingClick(false), 200); // Adjust delay as needed
    };
    const handleCloseModal = () => {
        setIsMenuPopup(false)
    };
    const toCartPage = () => {
        window.location.href = "/cart"
    };


    const toggleSearchBar = () => {
        setIsSearchVisible((prev) => !prev);
    };


    const toggleDropdown = () => {
        setIsOpen((prev) => !prev);
    };
    const languageDropdown = () => {
        setLanguageOpen((prev) => !prev);

    }
    const handleLanguageChange = (lang: string, flagComponent: JSX.Element) => {
        setLanguage(lang);
        setFlag(flagComponent);
        setIsOpen(false); // Close dropdown after selection
    };
    // const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleSidebarClose = () => {
        setIsSidebarOpen(false);
    };

    const handleOpenMenuPopup = () => {
        setIsMenuPopupOpen(true);
    };

    const handleCloseMenuPopup = () => {
        setIsMenuPopupOpen(false);
    };
    return (
        <header className="flex flex-row pl-[200px] pr-[200px] responsive-header w-full justify-between" style={{zIndex:"15"}}>
            <div className='py-3 flex flex-row header-content w-full justify-between'>
                <div className='w-32 header-logo' style={{ "height": "69.54px" }}>
                    <Link href='/'>
                        <Image alt="Moss Dekk logo" src={logo_image} width={128} height={69.54} />

                    </Link>
                </div>
                <div className='flex flex-row pl-[130px] pr-[130px] items-center header-nav-item'>
                    <Link className='text-white text-lg font-semi-bold leading-7 pr-[56px] nav-item-tag' href='/'>Home</Link>
                    <div className='text-white text-lg font-semi-bold leading-7 pr-[56px] nav-item-tag cursor-pointer' onClick={handleToggleModal}>Service</div>
                    <Link className='text-white text-lg font-semi-bold leading-7 pr-[56px] nav-item-tag' href='/products'>Products</Link>
                    <Link className='text-white text-lg font-semi-bold leading-7 pr-[56px] nav-item-tag' href='/report'>Report</Link>
                    <Link className='text-white text-lg font-semi-bold leading-7 pr-[56px] nav-item-tag' href='/aboutus'>About Us</Link>
                    <Link className='text-white text-lg font-semi-bold leading-7 pr-[56px] nav-item-tag' href='/pricing'>Prices</Link>
                    <Link className='text-white text-lg font-semi-bold leading-7' href='/contact'>Contact</Link>
                </div>
                <div className='flex flex-row items-center'>
                    <div className='flex flex-row responsive-language' onClick={languageDropdown}>
                        <div className='mr-[5px] w-[20px] h-[20px] nor-fl'>
                            {flag}  
                            
                        </div>
                        <div className='text-white text-sm mr-[5px]'>
                            {language}
                        </div>
                        <div className='mt-[-2px]'>
                            <ArrowDropDown />
                        </div>
                        {languageOpen && (
                            <div className="absolute top-[25px] z-10 mt-1 w-32 bg-white rounded-md shadow-lg">
                                <div className="py-1" role="menu" aria-orientation="vertical">
                                    <div
                                        className='flex flex-row items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer'
                                        onClick={() => handleLanguageChange('English', <CountryUS />)}
                                    >
                                        <div className='mr-[5px] w-[20px] h-[20px]'>
                                            <CountryUS />
                                        </div>
                                        English
                                    </div>
                                    <div
                                        className='flex flex-row items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer'
                                        onClick={() => handleLanguageChange('Norwegian', <CountryNO />)}
                                    >
                                        <div className='mr-[5px] w-[20px] h-[20px] nor-fl'>
                                            <CountryNO />
                                        </div>
                                        Norwegian
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className='mr-[13px] header-search-icon w-[24px] h-[24px] relative'>
                        <div onClick={toggleSearchBar} className='cursor-pointer'>
                            <SearchIcon />
                        </div>
                        {/* <SearchIcon width="24px" height="24px" /> */}
                        <div className={`absolute right-[30px] top-[-15px] mt-2 transition-all duration-300 ease-in-out ${isSearchVisible ? 'block' : 'hidden'}`}>
                            <input
                                className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                                type="search"
                                name="search"
                                placeholder="Search"
                            />
                            <button
                                type="submit"
                                className="absolute right-0 top-0 mt-[12px] mr-4"
                            >
                                <svg
                                    className="text-gray-600 h-4 w-4 fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 56.966 56.966"
                                >
                                    <path
                                        d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className='mr-[21px] relative header-shopping-cart w-[24px] h-[24px] cursor-pointer' onClick={() => toCartPage()}>
                        <ShoppingCart />
                        {/* <ShoppingCart width="24px" height="24px" /> */}
                        {/* <div className='absolute rounded-full bg-[#e21632] w-[16px] h-[16px] flex items-center justify-center top-[-3px] right-[-6px]'><span className='text-white text-xs font-medium leading-none'>2</span></div> */}
                    </div>
                    <div className='pr-[18px] text-white text-lg font-semi-bold leading-7 header-username'>
                        Hanh BV
                    </div>
                    <div className='flex flex-row select-language cursor-pointer relative' onClick={languageDropdown}>
                        <div className='mr-[5px] w-[20px] h-[20px] nor-fl'>
                            {flag}
                        </div>
                        <div className='text-white text-sm mr-[5px]'>
                            {language}
                        </div>
                        <div className='mt-[-2px]'>
                            <ArrowDropDown />
                        </div>
                        {languageOpen && (
                            <div className="absolute top-[25px] z-10 mt-1 w-32 bg-white rounded-md shadow-lg">
                                <div className="py-1" role="menu" aria-orientation="vertical">
                                    <div
                                        className='flex flex-row items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer'
                                        onClick={() => handleLanguageChange('English', <CountryUS />)}
                                    >
                                        <div className='mr-[5px] w-[20px] h-[20px]'>
                                            <CountryUS />
                                        </div>
                                        English
                                    </div>
                                    <div
                                        className='flex flex-row items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer'
                                        onClick={() => handleLanguageChange('Norwegian', <CountryNO />)}
                                    >
                                        <div className='mr-[5px] w-[20px] h-[20px] nor-fl'>
                                            <CountryNO />
                                        </div>
                                        Norwegian
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className='show-nav-bar' onClick={() => setIsSidebarOpen(true)}>
                        <Menu />
                    </div>
                </div>
            </div>
            <ResponsiveSidebar
                isOpen={isSidebarOpen}
                onClose={handleSidebarClose}
                onOpenMenuPopup={handleOpenMenuPopup} // Pass the handler
            />
            <MenuPopup
                isOpen={isMenuPopupOpen}
                onClose={handleCloseMenuPopup}
            />
        </header>
    );
};



