"use client";
import Image from "next/image";
import Calendar from '@/components/calendar';
import External_link_Mod from '@/svg/External_Link_Mod';
import React, { useEffect, useRef, useState } from 'react';
import Black_Calendar from '@/components/Black_calendar';
import Back_Image from "../../public/image/back_image.png";
import Product from "../../public/image/product_detail.png";
import ArrowDropDown_O from "@/svg/ArrowDropDown_O";
import X_Cancel from "@/svg/X_cancel";
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const Omlegg_modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const [showCalendar, setShowCalendar] = useState(false);
    const [isCalendarOpen, setIsCalendarOpen] = useState<boolean>(false);
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
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
    }, [isOpen, onClose]);

    const handleClickOutside = (event: MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
            onClose();

        }
    };
    const handleJaClick = () => {
        setShowCalendar(true); // Show the calendar when "Ja" is clicked

    };

    const handleInputClick = () => {
        setShowCalendar(prev => !prev); // Toggle calendar visibility

    }; 
    const handleCalendarClick = (event: React.MouseEvent) => {
        event.stopPropagation(); // Prevent closing the modal when clicking on the calendar
    };
    const [dateTime, setDateTime] = useState<string>('');

    const handleDateTimeSelected = (dateTime: string) => {
      setDateTime(dateTime);
    };
    const toggleCalendar = () => {
        setShowCalendar(!showCalendar);
      };
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex justify-center items-center">
            <div ref={modalRef} className="w-[891px] max-h-[95vh] overflow-y-auto hide-scrollbar flex flex-col">
                <div className='flex justify-between rounded-[8px] bg-[#1F1F1F] py-[8px] px-[16px] w-[775px] items-center mb-[4px] max-[790px]:w-full'>
                    <p className="text-left text-lg leading-7 font-normal font-['Inter'] text-[#AAAAAA] max-[590px]:text-sm">OMLEGG / AVBALANSERING</p>
                    <ArrowDropDown_O />
                </div>
                <div className="flex flex-col w-full rounded-[8px] bg-[#2D2B2B]">
                    <div className="flex flex-col pt-[8px] pr-[39px] pb-[2.5px] pl-[20px] border-b-[2px] border-[#1F1D1D] max-[590px]:p-[10px] gap-[11.5px] bg-[#282525] rounded-t-[8px]">
                        <div className="flex flex-row justify-between items-center">
                            <p className="text-xl leading-7 font-semi-bold text-[#73C018] max-[590px]:text-base">Tire Balancing</p>
                            <div className='flex items-center gap-4'>
                                <button className="bg-none text-xl text-[#73C018] pr-[17px] pl-[10px] py-[6.5px] rounded border border-[#73C018] font-semi-bold max-[590px]:text-base">Sign up</button>
                                <div onClick={onClose}>
                                    <X_Cancel />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row">
                            <p className="text-base leading-6 font-normal font-['Inter'] text-[#F04D23] max-[590px]:text-xs">*</p>
                            <p className="text-base leading-6 font-normal font-['Inter'] text-white max-[590px]:text-xs">Vennligst full ut alle feltene nedenfor, og velg en tjeneste (valgfri)</p>
                        </div>
                    </div>
                    <div className="flex flex-col pt-[15px] pl-[20px] pr-[39px] pb-[51px] max-[756px]:px-[8px] max-[590px]:pb-[25px]">
                        <div className="flex flex-col gap-[16px] pb-[34px] border-b-[2px] border-[#18181B]  max-[590px]:gap-[8px]  max-[590px]:pb-[16px]">
                            <div className="gap-[4px] flex flex-col">
                                <p className="w-[90px] text-lg leading-7 font-normal font-['Inter'] text-[#787881] max-[590px]:text-sm">Reg Nr:</p>
                                <input
                                    className="w-[633px] py-[8px] px-[16px] border-none text-white outline-none text-lg leading-7 bg-[#18181B] font-normal font-['Inter'] rounded-[8px] focus:outline-none focus:ring-0 w-full max-[590px]:text-sm"
                                    type="text"
                                />
                            </div>
                            <div className="gap-[4px] flex flex-col">
                                <p className="w-[90px] text-lg leading-7 font-normal font-['Inter'] text-[#787881] max-[590px]:text-sm">Name:</p>
                                <input
                                    className="w-[633px] py-[8px] px-[16px] border-none text-white outline-none text-lg leading-7 bg-[#18181B] font-normal font-['Inter'] rounded-[8px] focus:outline-none focus:ring-0 w-full max-[590px]:text-sm"
                                    type="text"
                                />
                            </div>
                            <div className="gap-[4px] flex flex-col">
                                <p className="w-[90px] text-lg leading-7 font-normal font-['Inter'] text-[#787881] max-[590px]:text-sm">Mobile</p>
                                <input
                                    className="w-[633px] py-[8px] px-[16px] border-none text-white outline-none text-lg leading-7 bg-[#18181B] font-normal font-['Inter'] rounded-[8px] focus:outline-none focus:ring-0 w-full max-[590px]:text-sm"
                                    type="text"
                                />
                            </div>
                            <div className="gap-[4px] flex flex-col">
                                <p className="w-[90px] text-lg leading-7 font-normal font-['Inter'] text-[#787881] max-[590px]:text-sm">Email</p>
                                <input
                                    className="w-[633px] py-[8px] px-[16px] border-none text-white outline-none text-lg leading-7 bg-[#18181B] font-normal font-['Inter'] rounded-[8px] focus:outline-none focus:ring-0 w-full max-[590px]:text-sm"
                                    type="text"
                                />
                            </div>
                            <div className="gap-[4px] flex flex-col">
                                <p className="w-[90px] text-lg leading-7 font-normal font-['Inter'] text-[#787881] max-[590px]:text-sm">Location</p>
                                <select
                                    className="h-[44px] block w-[274px] px-[16px] py-[8px] text-white text-lg font-medium leading-7 bg-[#18181B] rounded-[8px] border-[#73C018] border-[2px] focus:outline-none focus:ring-0 focus:border-[#73C018] max-[772px]:w-[343px]  max-[590px]:text-sm max-[590px]:w-[]"
                                    style={{ outline: "#73C018" }}
                                >
                                    <option value="usa" className="text-black text-sm text-lg font-normal font-['Inter'] leading-5  max-[590px]:text-sm">Moss dekk AS</option>
                                    <option value="canada" className="text-black text-sm text-lg font-normal font-['Inter'] leading-5  max-[590px]:text-sm">Canada</option>
                                    <option value="uk" className="text-black text-sm text-lg font-normal font-['Inter'] leading-5 max-[590px]:text-sm">UK</option>
                                    <option value="australia" className="text-black text-sm text-lg font-normal font-['Inter'] leading-5 max-[590px]:text-sm">Australia</option>
                                    <option value="germany" className="text-black text-sm text-lg font-normal font-['Inter'] leading-5 max-[590px]:text-sm">Germany</option>
                                </select>
                            </div>
                        </div>
                        <div className="pt-[26px] flex flex-col gap-[16px] pb-[25px] border-b-[3px] border-[#18181B]  max-[590px]:pb-[12px]  max-[590px]:pt-[13px]">
                            <div className="w-full flex flex-row justify-between pl-[190px] pr-[161px] max-[700px]:px-[80px] max-[450px]:px-[40px]">
                                <p className="text-base leading-6 font-medium text-white">Services</p>
                                <p className="text-base leading-6 font-medium text-white">Quantity</p>
                                <p className="text-base leading-6 font-medium text-white">Total</p>
                            </div>
                            <div className="flex flex-row py-[15px] pl-[47px] pr-[47px] bg-[#18181B] rounded-[4px] max-[700px]:pl-[10px] max-[500px]:pl-[6px] max-[500px]:pr-[11px]">
                                <div className="flex flex-col gap-[4px] w-[526px] max-[1230px]:w-[438px] max-[500px]:w-[183px]  max-[700px]:w-[60%]  max-[414px]:w-[40%]">
                                    <div className="flex flex-row gap-[41px] max-[500px]:gap-[0px] max-[500px]:items-center">
                                        <label className="flex items-center max-[500px]:mr-[11px]">
                                            <input type="radio" name="option" value="no" className="form-radio h-[24px] w-[24px] text-[#73C018] focus:ring-[#73C018] focus:outline-[#73C018] appearance-none bg-[#18181B]" checked />
                                        </label>
                                        <p className="text-lg text-[#787881] leading-7 font-medium w-[29px] max-[500px]:mr-[5px] max-[500px]:text-xs max-[500px]:w-[19px]">Nei</p>
                                        <p className="text-lg text-[#787881] leading-7 font-medium w-[393px] whitespace-nowrap overflow-hidden text-ellipsis max-[1230px]:w-[309px] max-[500px]:text-xs">VERKSTED MATRIELL</p>
                                    </div>
                                    <div className="flex flex-row gap-[41px] max-[500px]:gap-[0px] max-[500px]:items-center">
                                        <label className="flex items-center max-[500px]:mr-[11px]">
                                            <input type="radio" name="option" value="yes" className="form-radio h-[24px] w-[24px] text-[#73C018] focus:ring-[#73C018] focus:outline-[#73C018]" />
                                        </label>
                                        <p className="text-lg text-[#787881] leading-7 font-medium w-[29px] max-[500px]:mr-[5px] max-[500px]:text-xs max-[500px]:w-[19px]">Ja </p>
                                        <p className="text-lg text-[#787881] leading-7 font-medium  max-[500px]:text-xs">23&quot;</p>
                                    </div>
                                </div>
                                <div className="relative w-[62px] pl-[40px] flex items-center">

                                    <select
                                        className="h-[34px] block min-w-[62px] rounded-[4px] px-[10px] py-[5px] text-black text-sm text-base font-normal font-['Inter'] text-[#787881] leading-6 border-[#787881] bg-[#18181B] border-[1px] focus:outline-none focus:ring-0 focus:border-[#787881]"
                                        style={{ outline: "#73C018", color: "#787881" }}
                                    >
                                        <option value="1" className="text-black text-sm text-lg font-normal font-['Inter'] leading-5">1</option>
                                        <option value="2" className="text-black text-sm text-lg font-normal font-['Inter'] leading-5">2</option>
                                        <option value="3" className="text-black text-sm text-lg font-normal font-['Inter'] leading-5">3</option>
                                        <option value="4" className="text-black text-sm text-lg font-normal font-['Inter'] leading-5">4</option>
                                        <option value="5" className="text-black text-sm text-lg font-normal font-['Inter'] leading-5">5</option>
                                    </select>
                                    {/* <div className="pointer-events-none absolute inset-y-0 right-[11px] flex items-center pl-3">
                                        <svg
                                            className="w-5 h-5 text-gray-700"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 12a1 1 0 0 1-.707-.293l-4-4a1 1 0 1 1 1.414-1.414L10 9.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4A1 1 0 0 1 10 12z"
                                            />
                                        </svg>
                                    </div> */}
                                </div>
                                <div className="pl-[77px] flex items-center">
                                    <p className="text-lg text-[#787881] leading-7 font-medium  max-[500px]:text-base">1996</p>
                                </div>
                            </div>
                            <div className="flex flex-row py-[15px] pl-[47px] pr-[47px] bg-[#18181B]  max-[700px]:pl-[10px] rounded-[4px] max-[500px]:pl-[6px] max-[500px]:pr-[11px]">
                                <div className="flex flex-col gap-[4px] w-[526px] max-[1230px]:w-[438px] max-[500px]:w-[183px]  max-[700px]:w-[60%]  max-[414px]:w-[40%]">
                                    <div className="flex flex-row gap-[41px] max-[500px]:gap-[0px] max-[500px]:items-center">
                                        <label className="flex items-center max-[500px]:mr-[11px]">
                                            <input type="radio" name="option1" value="no" className="form-radio h-[24px] w-[24px] text-[#73C018] focus:ring-[#73C018] focus:outline-[#73C018] appearance-none" checked />
                                        </label>
                                        <p className="text-lg text-[#787881] leading-7 font-medium w-[29px] max-[500px]:mr-[5px] max-[500px]:text-xs max-[500px]:w-[19px]">Nei</p>
                                        <p className="text-lg text-[#787881] leading-7 font-medium w-[393px] whitespace-nowrap overflow-hidden text-ellipsis max-[1230px]:w-[309px] max-[500px]:text-xs">KUN AVBALANSERING 1 STK DEKK PÅ BIL 13-</p>
                                    </div>
                                    <div className="flex flex-row gap-[41px] max-[500px]:gap-[0px] max-[500px]:items-center">
                                        <label className="flex items-center max-[500px]:mr-[11px]">
                                            <input type="radio" name="option1" value="yes" className="form-radio h-[24px] w-[24px] text-[#73C018] focus:ring-[#73C018] focus:outline-[#73C018]" />
                                        </label>
                                        <p className="text-lg text-[#787881] leading-7 font-medium w-[29px] max-[500px]:mr-[5px] max-[500px]:text-xs max-[500px]:w-[19px]">Ja </p>
                                        <p className="text-lg text-[#787881] leading-7 font-medium  max-[500px]:text-xs">23&quot;   </p>
                                    </div>
                                </div>
                                <div className="relative w-[62px] pl-[40px] flex items-center">

                                    <select
                                        className="h-[34px] block min-w-[62px] rounded-[4px] px-[10px] py-[5px] text-black text-sm text-base font-normal font-['Inter'] text-[#787881] leading-6 border-[#787881] bg-[#18181B] border-[1px] focus:outline-none focus:ring-0 focus:border-[#787881]"
                                        style={{ outline: "#73C018", color: "#787881" }}
                                    >
                                        <option value="1" className="text-black text-sm text-lg font-normal font-['Inter'] leading-5">1</option>
                                        <option value="2" className="text-black text-sm text-lg font-normal font-['Inter'] leading-5">2</option>
                                        <option value="3" className="text-black text-sm text-lg font-normal font-['Inter'] leading-5">3</option>
                                        <option value="4" className="text-black text-sm text-lg font-normal font-['Inter'] leading-5">4</option>
                                        <option value="5" className="text-black text-sm text-lg font-normal font-['Inter'] leading-5">5</option>
                                    </select>
                                    {/* <div className="pointer-events-none absolute inset-y-0 right-[11px] flex items-center pl-3">
                                        <svg
                                            className="w-5 h-5 text-gray-700"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 12a1 1 0 0 1-.707-.293l-4-4a1 1 0 1 1 1.414-1.414L10 9.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4A1 1 0 0 1 10 12z"
                                            />
                                        </svg>
                                    </div> */}
                                </div>
                                <div className="pl-[77px] flex items-center">
                                    <p className="text-lg text-[#787881] leading-7 font-medium  max-[500px]:text-base">10</p>
                                </div>
                            </div>
                        </div>
                        <div className="pt-[12px] pb-[38px] flex flex-row gap-[10px] border-b-[2px] border-[#18181B] items-center  max-[590px]:pt-[10px]  max-[590px]:pb-[19px]">
                            <p className="text-lg leading-7 font-normal font-['Inter'] text-white  max-[590px]:text-sm">Price:</p>
                            <p className="text-2xl leading-8 font-semi-bold text-[#73C018]  max-[590px]:text-lg">Kr 348</p>
                        </div>
                        <div className="pt-[14px] flex flex-col gap-[52px]  max-[590px]:gap-[26px]  max-[590px]:pt-[8px]">
                            <div className="flex flex-col gap-[4px] relative">
                                <label className="text-lg leading-7 font-normal text-['Inter'] text-white max-[590px]:text-sm">Tid og Dato:</label>
                                <div className="relative w-[328px]" onClick={handleInputClick}>
                                    <input
                                        type="text"
                                        className="w-[328px] py-[8px] px-[16px] border-none text-white bg-[#18181B] text-lg leading-7 font-normal font-['Inter'] rounded-[8px] placeholder:text-white focus:outline-none focus:ring-0 max-[590px]:text-sm"
                                        placeholder="Velg tid og dato"
                                        disabled
                                        value={dateTime}
                                        onClick={toggleCalendar}
                                    />
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-4 h-4 text-white absolute right-[16px] top-[15px] max-[590px]:top-[10px]"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <div className="absolute w-[599px] mt-[4px] max-[772px]:w-[340px]" onClick={handleCalendarClick}>
                                        {showCalendar && (
                                            <Black_Calendar onDateTimeSelected={handleDateTimeSelected} closeCalendar={toggleCalendar} />
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row justify-end gap-[4px]">
                                <div className="py-[8px] px-[25px] bg-[#E7E7E7] rounded-[40px]">
                                    <p className="text-lg leading-7 font-normal font-['Inter'] text-black max-[590px]:text-sm">Avbryt</p>
                                </div>
                                <div className="py-[8px] px-[33px] bg-[#73C018] rounded-[40px]">
                                    <p className="text-lg leading-7 font-normal font-['Inter'] text-white max-[590px]:text-sm">Til Betaling</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Omlegg_modal;
