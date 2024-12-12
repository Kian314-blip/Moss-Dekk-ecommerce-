import React, { useState, useEffect } from 'react';
import logo_image from '../../public/image/autobutler.png';
import Image from 'next/image';
import Link from 'next/link';
import Report_logo from "../../public/image/report_logo.png";
import MenuPopup from '@/modal/menu_popup';

interface ResponsiveSidebarProps {
    isOpen: boolean;
    onClose: () => void;
    onOpenMenuPopup: () => void; // New prop to handle opening the menu popup
}

const ResponsiveSidebar: React.FC<ResponsiveSidebarProps> = ({ isOpen, onClose, onOpenMenuPopup }) => {

    const handleServiceClick = () => {
        onClose(); // Close the sidebar
        onOpenMenuPopup(); // Open the menu popup
    };

    if (!isOpen) return null;   // const [isHandlingClick, setIsHandlingClick] = useState(false);
    // const [isMenuPopupOpen, setIsMenuPopupOpen] = useState(false);

    // const handleToggleModal = (event: React.MouseEvent<HTMLDivElement>) => {
    //     event.stopPropagation(); // Prevent the event from bubbling up

    //     if (isHandlingClick) return; // Ignore if already handling

    //     setIsHandlingClick(true);
    //     setIsMenuPopupOpen(prev => {
    //         const newValue = !prev; // Toggle the state
    //         if (newValue) {
    //             onClose(); // Hide the sidebar when showing the menu popup
    //         }
    //         return newValue;
    //     });

    //     // Reset the flag after a short delay
    //     setTimeout(() => setIsHandlingClick(false), 200); // Adjust delay as needed
    // };

    // const handleCloseModal = () => {
    //     setIsMenuPopupOpen(false);
    // };

    // // Close the menu popup when the responsive bar becomes visible
    // useEffect(() => {
    //     if (isResponsiveBarVisible) {
    //         handleCloseModal();
    //     }
    // }, [isResponsiveBarVisible]);

    // if (!isOpen) return null; // Don't render if not open

    return (
        <div className="fixed inset-0 z-15 bg-black bg-opacity-50" onClick={onClose}>
            <div className="flex flex-col w-56 bg-white rounded-r-3xl overflow-hidden h-svh" onClick={(e) => e.stopPropagation()}>
                <div className="flex items-center justify-center h-20 shadow-md px-4">
                    <div className='w-32 header-logo flex justify-center items-center' style={{ height: "69.54px" }}>
                        <Link href='/'>
                            <Image alt="Moss Dekk logo" src={Report_logo} width={128} height={69.54} />
                        </Link>
                    </div>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
                        <i className="bx bx-x text-2xl"></i> {/* Close icon */}
                    </button>
                </div>
                <ul className="flex flex-col py-4">
                    <li>
                        <Link href="/" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-home"></i></span>
                            <span className="text-sm font-medium">Home</span>
                        </Link>
                    </li>
                    <li>
                        <div onClick={handleServiceClick} className="flex cursor-pointer flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-music"></i></span>
                            <span className="text-sm font-medium">Service</span>
                        </div>
                    </li>
                    <li>
                        <Link href="/products" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-drink"></i></span>
                            <span className="text-sm font-medium">Products</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/report" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-drink"></i></span>
                            <span className="text-sm font-medium">Report</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/aboutus" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-shopping-bag"></i></span>
                            <span className="text-sm font-medium">About Us</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/pricing" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-chat"></i></span>
                            <span className="text-sm font-medium">Prices</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-user"></i></span>
                            <span className="text-sm font-medium">Contact</span>
                        </Link>
                    </li>
                </ul>
            </div>
            {/* <MenuPopup isOpen={isMenuPopupOpen} onClose={handleCloseModal} /> */}
        </div>
    );
};

export default ResponsiveSidebar;
