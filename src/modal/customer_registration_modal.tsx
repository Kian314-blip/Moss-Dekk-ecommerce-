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
import Password_Show from "@/svg/Password_Show";
import Password_Hide from "@/svg/Password_Hide";
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const Customer_Registration_modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };


    return (
        <div className="fixed inset-0 z-50 flex justify-center items-center">
            <div ref={modalRef} className="w-[891px] max-h-[95vh] overflow-y-auto hide-scrollbar flex flex-col">

                <div className="flex flex-col w-full rounded-[8px] bg-[#2D2B2B]">
                    <div className="flex flex-col pt-[8px] pr-[39px] pb-[2.5px] pl-[20px] border-b-[2px] border-[#1F1D1D] max-[590px]:p-[10px] gap-[11.5px] bg-[#282525] rounded-t-[8px]">
                        <div className="flex flex-row justify-between items-center">
                            <p className="text-xl leading-7 font-semi-bold text-[#73C018] max-[590px]:text-base">Customer Registration</p>
                            <div className='flex items-center gap-4'>
                                <button className="bg-none text-xl text-[#73C018] pr-[17px] pl-[10px] py-[6.5px] rounded border border-[#73C018] font-semi-bold max-[590px]:text-base">Sign up</button>
                                <div onClick={onClose}>
                                    <X_Cancel />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row">
                            <p className="text-base leading-6 font-normal font-['Inter'] text-[#F04D23] max-[590px]:text-xs">*</p>
                            <p className="text-base leading-6 font-normal font-['Inter'] text-white max-[590px]:text-xs">All the fields are required</p>
                        </div>
                    </div>
                    <div className="flex flex-col pt-[15px] pl-[20px] pr-[39px] pb-[33px] max-[756px]:px-[8px] max-[590px]:pb-[15px]">
                        <div className="flex flex-col gap-[16px] max-[590px]:gap-[8px]">
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
                                <label className="w-[90px] text-lg leading-7 font-normal font-['Inter'] text-[#787881] max-[590px]:text-sm">
                                    Password
                                </label>
                                <div className="relative">
                                    <input
                                        className="w-[633px] py-[8px] px-[16px] border-none text-white outline-none text-lg leading-7 bg-[#18181B] font-normal font-['Inter'] rounded-[8px] focus:outline-none focus:ring-0 w-full max-[590px]:text-sm"
                                        type={showPassword ? 'text' : 'password'}
                                    />
                                    <div
                                        onClick={togglePasswordVisibility}
                                        className="absolute right-2 top-2 text-white"
                                    >
                                        {showPassword ? <Password_Show/> :<div className="pt-[5px] max-[500px]:pt-[1px]"> <Password_Hide/></div>}
                                    </div>
                                </div>
                            </div>
                            <div className="gap-[4px] flex flex-col">
                                <p className="w-[90px] text-lg leading-7 font-normal font-['Inter'] text-[#787881] max-[590px]:text-sm">Full Name</p>
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
                                <p className="w-[90px] text-lg leading-7 font-normal font-['Inter'] text-[#787881] max-[590px]:text-sm">Mobile</p>
                                <input
                                    className="w-[633px] py-[8px] px-[16px] border-none text-white outline-none text-lg leading-7 bg-[#18181B] font-normal font-['Inter'] rounded-[8px] focus:outline-none focus:ring-0 w-full max-[590px]:text-sm"
                                    type="text"
                                />
                            </div>
                            <div className="gap-[4px] flex flex-col">
                                <p className="w-[90px] text-lg leading-7 font-normal font-['Inter'] text-[#787881] max-[590px]:text-sm">Post Code</p>
                                <input
                                    className="w-[633px] py-[8px] px-[16px] border-none text-white outline-none text-lg leading-7 bg-[#18181B] font-normal font-['Inter'] rounded-[8px] focus:outline-none focus:ring-0 w-full max-[590px]:text-sm"
                                    type="text"
                                />
                            </div>
                            <div className="gap-[4px] flex flex-col">
                                <p className="w-[90px] text-lg leading-7 font-normal font-['Inter'] text-[#787881] max-[590px]:text-sm">Address</p>
                                <input
                                    className="w-[633px] py-[8px] px-[16px] border-none text-white outline-none text-lg leading-7 bg-[#18181B] font-normal font-['Inter'] rounded-[8px] focus:outline-none focus:ring-0 w-full max-[590px]:text-sm"
                                    type="text"
                                />
                            </div>
                            <div className="gap-[4px] flex flex-col">
                                <p className="w-[90px] text-lg leading-7 font-normal font-['Inter'] text-[#787881] max-[590px]:text-sm">City</p>
                                <input
                                    className="w-[633px] py-[8px] px-[16px] border-none text-white outline-none text-lg leading-7 bg-[#18181B] font-normal font-['Inter'] rounded-[8px] focus:outline-none focus:ring-0 w-full max-[590px]:text-sm"
                                    type="text"
                                />
                            </div>

                        </div>
                        <div className="pt-[53px] flex flex-col items-end max-[590px]:pt-[26px]">

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

export default Customer_Registration_modal;
