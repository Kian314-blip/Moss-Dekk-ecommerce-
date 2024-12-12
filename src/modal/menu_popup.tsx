"use client";
import Cancel from '@/svg/Cancel';
import X_Cancel from '@/svg/X_cancel';
import React, { useEffect, useRef, useState } from 'react';
import ArrowDropUp from '@/svg/ArrowDropUp';
import ArrowDropDown_O from '@/svg/ArrowDropDown_O';
import Arrow_Right from '@/svg/Arrow_Right';
import Omlegg_modal from "./omlegg_modal";
import Reprasjon_modal from './reprasjon_modal';

const MenuPopup: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const [isDekkhotell, setIsDekkhotell] = useState(false);
    const [isNewCustomer, setIsNewCustomer] = useState<boolean | null>(null);
    const [isDekkHotellCustomer, setIsDekkHotellCustomer] = useState<boolean | null>(null);
    const [isKunde, setIsKunde] = useState(false);
    const [isNyKunde, setIsNyKunde] = useState(true);
    const [isOmlegg, setIsOmlegg] = useState(false);
    const [isReprasjon, setIsReprasjon] = useState(false);

    const [isHandlingClick, setIsHandlingClick] = useState<boolean>(false);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                handleCloseModal();
            }
        };

        if (isOpen) {
            window.addEventListener('keydown', handleKeyDown);
            window.addEventListener('click', handleClickOutside);
        }

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('click', handleClickOutside);
        };
    }, [isOpen]);

    const handleClickOutside = (event: MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
            handleCloseModal();
        }
    };

    const handleToggleModal = (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation(); // Prevent the event from bubbling up

        if (isHandlingClick) return; // Ignore if already handling

        setIsHandlingClick(true);
        setIsOmlegg(prev => !prev); // Toggle the state

        setTimeout(() => setIsHandlingClick(false), 200); // Reset the flag after a short delay
    };

    const handleReprasjonmodal = (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();

        if (isHandlingClick) return;

        setIsHandlingClick(true);
        setIsReprasjon(prev => !prev); // Toggle the state

        setTimeout(() => setIsHandlingClick(false), 200);
    };

    const handleCloseModal = () => {
        setIsOmlegg(false);
        setIsReprasjon(false);
        setIsNewCustomer(null); // Reset the isNewCustomer state
        setIsDekkHotellCustomer(null); // Reset the isDekkHotellCustomer state
        onClose(); // Close the modal
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 bg-white bg-opacity-30 flex justify-center items-center">
            <div ref={modalRef} className="bg-[#101010] rounded-3xl w-[90%] md:w-[891px] max-w-full max-[590px]:rounded-[8px] max-[590px]:w-[95%]">
                <div className="flex flex-row pt-[20px] pr-[39px] pb-[21px] pl-[10px] border-b-[2px] border-[#1F1D1D] items-center justify-between max-[590px]:p-[10px]">
                    <p className="text-xl leading-7 font-semi-bold text-[#73C018] ml-[10px] max-[590px]:text-base">Main Menu</p>
                    <div className='flex items-center gap-4'>
                        <button className="bg-none text-xl text-[#73C018] pr-[17px] pl-[10px] py-[6.5px] rounded border border-[#73C018] font-semi-bold max-[590px]:text-base">Sign up</button>
                        <div className='cursor-pointer' onClick={handleCloseModal}>
                            <X_Cancel />
                        </div>
                    </div>
                </div>
                <div className="max-h-[90vh] overflow-y-auto px-[58px] pb-[48px] pt-[20px] hide-scrollbar max-[590px]:p-[10px]">
                    <div className="flex flex-col space-y-[32px] w-full">

                        {/* Dekkhotell Section */}
                        <div className="flex flex-col w-full gap-1">
                            <div className='flex justify-between rounded-[8px] bg-[#1F1F1F] py-[8px] px-[16px] w-full items-center cursor-pointer' onClick={() => setIsDekkhotell(!isDekkhotell)}>
                                <p className="text-left text-lg leading-7 font-normal font-['Inter'] text-[#AAAAAA] max-[590px]:text-sm">
                                    BOOK TID FOR DEKKSKIFT
                                </p>
                                {isDekkhotell ? <ArrowDropUp /> : <ArrowDropDown_O />}
                            </div>
                            {isDekkhotell && (
                                <div className="px-4 pt-[14px] pb-[18px] rounded-[8px] bg-[#1F1F1F] transition-all duration-300">
                                    <p className='text-lg leading-7 font-medium text-white mb-[10px] max-[590px]:text-sm'>Er du dekkhotell Kunde?</p>
                                    <div className='flex flex-row gap-[26px]'>
                                        <label className="flex items-center mt-1">
                                            <input
                                                type="radio"
                                                checked={isNewCustomer === true}
                                                onChange={() => setIsNewCustomer(true)}
                                                className="hidden"
                                            />
                                            <span className={`w-[18px] h-[18px] inline-block mr-[6px] border-2 rounded-[4px] ${isNewCustomer === true ? 'bg-[#73C018] border-[#73C018]' : 'border-gray-300'} transition-colors`}>
                                                {isNewCustomer === true && <svg xmlns="http://www.w3.org/2000/svg" className="text-white" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M6 10.293l1.293-1.293 3 3 7-7L18.707 5 10 13.707l-4-4z" clipRule="evenodd" /></svg>}
                                            </span>
                                            <span className='text-lg leading-7 font-normal font-["Inter"] max-[590px]:text-sm'>Ja</span>
                                        </label>
                                        <label className="flex items-center mt-1">
                                            <input
                                                type="radio"
                                                checked={isNewCustomer === false}
                                                onChange={() => setIsNewCustomer(false)}
                                                className="hidden"
                                            />
                                            <span className={`w-[18px] h-[18px] inline-block mr-[6px] border-2 rounded-[4px] ${isNewCustomer === false ? 'bg-[#73C018] border-[#73C018]' : 'border-gray-300'} transition-colors`}>
                                                {isNewCustomer === false && <svg xmlns="http://www.w3.org/2000/svg" className="text-white" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M6 10.293l1.293-1.293 3 3 7-7L18.707 5 10 13.707l-4-4z" clipRule="evenodd" /></svg>}
                                            </span>
                                            <span className='text-lg leading-7 font-normal font-["Inter"] max-[590px]:text-sm'>Nei</span>
                                        </label>
                                    </div>

                                    {isNewCustomer === false && (
                                        <>
                                            <p className='text-lg leading-7 font-normal font-["Inter"] text-[#AAAAAA] mb-[10px] max-[590px]:text-sm'>Ønsker du å bli Dekkhotell Kunde?</p>
                                            <div className='flex flex-row gap-[26px]'>
                                                <label className="flex items-center mt-1">
                                                    <input
                                                        type="checkbox"
                                                        checked={isDekkHotellCustomer === true}
                                                        onChange={() => setIsDekkHotellCustomer(true)}
                                                        className="hidden"
                                                    />
                                                    <span className={`w-[18px] h-[18px] inline-block mr-[6px] border-2 rounded-[4px] ${isDekkHotellCustomer === true ? 'bg-[#73C018] border-[#73C018]' : 'border-gray-300'} transition-colors`}>
                                                        {isDekkHotellCustomer === true && <svg xmlns="http://www.w3.org/2000/svg" className="text-white" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M6 10.293l1.293-1.293 3 3 7-7L18.707 5 10 13.707l-4-4z" clipRule="evenodd" /></svg>}
                                                    </span>
                                                    <span className='text-lg leading-7 font-normal font-["Inter"] max-[590px]:text-sm'>Ja</span>
                                                </label>
                                                <label className="flex items-center mt-1">
                                                    <input
                                                        type="checkbox"
                                                        checked={isDekkHotellCustomer === false}
                                                        onChange={() => setIsDekkHotellCustomer(false)}
                                                        className="hidden"
                                                    />
                                                    <span className={`w-[18px] h-[18px] inline-block mr-[6px] border-2 rounded-[4px] ${isDekkHotellCustomer === false ? 'bg-[#73C018] border-[#73C018]' : 'border-gray-300'} transition-colors`}>
                                                        {isDekkHotellCustomer === false && <svg xmlns="http://www.w3.org/2000/svg" className="text-white" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M6 10.293l1.293-1.293 3 3 7-7L18.707 5 10 13.707l-4-4z" clipRule="evenodd" /></svg>}
                                                    </span>
                                                    <span className='text-lg leading-7 font-normal font-["Inter"] max-[590px]:text-sm'>Nei, ønsker kun dekkskift</span>
                                                </label>
                                            </div>
                                        </>
                                    )}
                                </div>
                            )}
                        </div>

                        {/* New Customer Section */}
                        <div className="flex flex-col w-full gap-1">
                            <div className='flex justify-between rounded-[8px] bg-[#1F1F1F] py-[8px] px-[16px] w-full items-center cursor-pointer' onClick={() => setIsKunde(!isKunde)}>
                                <p className="text-left text-lg leading-7 font-normal font-['Inter'] text-[#AAAAAA] max-[590px]:text-sm">
                                    NY KUNDE
                                </p>
                                {isKunde ? <ArrowDropUp /> : <ArrowDropDown_O />}
                            </div>
                            {isKunde && (
                                <div className="px-4 pt-[14px] pb-[18px] rounded-[8px] bg-[#1F1F1F] transition-all duration-300">
                                    <p className='text-lg leading-7 font-medium text-white mb-[10px] max-[590px]:text-sm'>Ny Kunde</p>
                                    <div className='flex flex-row gap-[26px]'>
                                        <label className="flex items-center mt-1">
                                            <input
                                                type="checkbox"
                                                checked={isNyKunde}
                                                onChange={() => setIsNyKunde(true)}
                                                className="hidden"
                                            />
                                            <span className={`w-[18px] h-[18px] inline-block mr-[6px] border-2 rounded-[4px] ${isNyKunde ? 'bg-[#73C018] border-[#73C018]' : 'border-gray-300'} transition-colors`}>
                                                {isNyKunde && <svg xmlns="http://www.w3.org/2000/svg" className="text-white" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M6 10.293l1.293-1.293 3 3 7-7L18.707 5 10 13.707l-4-4z" clipRule="evenodd" /></svg>}
                                            </span>
                                            <span className='text-lg leading-7 font-normal font-["Inter"] max-[590px]:text-sm'>Ja</span>
                                        </label>
                                        <label className="flex items-center mt-1">
                                            <input
                                                type="checkbox"
                                                checked={!isNyKunde}
                                                onChange={() => setIsNyKunde(false)}
                                                className="hidden"
                                            />
                                            <span className={`w-[18px] h-[18px] inline-block mr-[6px] border-2 rounded-[4px] ${!isNyKunde ? 'bg-[#73C018] border-[#73C018]' : 'border-gray-300'} transition-colors`}>
                                                {!isNyKunde && <svg xmlns="http://www.w3.org/2000/svg" className="text-white" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M6 10.293l1.293-1.293 3 3 7-7L18.707 5 10 13.707l-4-4z" clipRule="evenodd" /></svg>}
                                            </span>
                                            <span className='text-lg leading-7 font-normal font-["Inter"] max-[590px]:text-sm'>Nei</span>
                                        </label>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Omlegg Section */}
                        <div className="flex flex-col w-full gap-1">
                            <div className='flex justify-between rounded-[8px] bg-[#1F1F1F] py-[8px] px-[16px] w-full items-center cursor-pointer' onClick={handleToggleModal}>
                                <p className="text-left text-lg leading-7 font-normal font-['Inter'] text-[#AAAAAA] max-[590px]:text-sm">OMLEGG / AVBALANSERING</p>
                                <ArrowDropDown_O />
                            </div>
                            {isOmlegg && (
                                <Omlegg_modal isOpen={isOmlegg} onClose={handleCloseModal} />
                            )}
                        </div>

                        {/* Other Sections */}
                        <div className="flex flex-col w-full gap-1">
                            <div className='flex justify-between rounded-[8px] bg-[#1F1F1F] py-[8px] px-[16px] w-full items-center cursor-pointer' onClick={handleReprasjonmodal}>
                                <p className="text-left text-lg leading-7 font-normal font-['Inter'] text-[#AAAAAA] max-[590px]:text-sm">REPRASJON / PUNKTERING</p>
                                <ArrowDropDown_O />
                            </div>
                            {isReprasjon && (
                                <Reprasjon_modal isOpen={isReprasjon} onClose={handleCloseModal} />
                            )}
                        </div>
                        <div className="flex flex-col w-full gap-1">
                            <div className='flex justify-between rounded-[8px] bg-[#1F1F1F] py-[8px] px-[16px] w-full items-center cursor-pointer'>
                                <p className="text-left text-lg leading-7 font-normal font-['Inter'] text-[#AAAAAA] max-[590px]:text-sm">NYE DEKK</p>
                                <Arrow_Right />
                            </div>
                        </div>
                        <div className='w-full text-right'>
                            <a className='text-base leading-6 font-light font-["Inter"] text-[#AAAAAA] max-[590px]:text-sm'>Help?</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuPopup;
