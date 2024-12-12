"use client";
import Image from "next/image";
import Calendar from '@/components/calendar';
import External_link_Mod from '@/svg/External_Link_Mod';
import React, { useEffect, useRef, useState } from 'react';
import Black_Calendar from '@/components/Black_calendar';
import Back_Image from "../../public/image/back_image.png";
import Product from "../../public/image/product_detail.png";
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const Welcome_Modal_Dark: React.FC<ModalProps> = ({ isOpen, onClose }) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const [showCalendar, setShowCalendar] = useState(false);
    const [dateTime, setDateTime] = useState<string>('');

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
    const handleDateTimeSelected = (dateTime: string) => {
        setDateTime(dateTime);
      };
      const toggleCalendar = () => {
          setShowCalendar(!showCalendar);
        };
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex justify-center items-center">
            <div ref={modalRef} className="w-[636px] max-h-[100vh] overflow-y-auto hide-scrollbar flex flex-col items-center pt-[28px] pl-[12px] pr-[24px] bg-black rounded-[4px] max-[455px]:pt-[14px] max-[455px]:w-[360px] max-[455px]:pl-[6px] max-[455px]:pr-[12px]">
                <div className="w-full flex justify-center pb-[20px] max-[455px]:pb-[10px]">
                    <p className="text-4xl font-normal text-white max-[455px]:text-2xl">
                        Velkommen <span className="text-4xl font-semibold text-[#73C018] max-[455px]:text-2xl">Saba Kanwar</span>
                    </p>
                </div>
                <div className='w-full flex justify-center pb-[24px] max-[455px]:pb-[12px]'>
                    <p className='text-lg leading-7 font-normal text-white max-[455px]:text-sm'>You have set a time before, do you want to change it?</p>
                </div>
                <div className='flex flex-row gap-[10px] w-full justify-center pb-[37px] max-[455px]:pb-[18px]'>
                    <div className='bg-[#73C018] py-[10px] px-[19px] rounded-[4px] cursor-pointer' /*onClick={handleJaClick}*/>
                        <p className='text-base leading-6 font-normal text-white max-[455px]:text-sm'>Ja</p>
                    </div>
                    <div className="bg-[#1F1F1F] px-[10px] py-[8px] rounded-[4px] cursor-pointer">
                        <p className='text-lg leading-7 font-normal text-white max-[455px]:text-sm'>Nei, gå til andre tjenester</p>
                    </div>
                </div>
                <div className='shadow-2xl rounded-[15px] px-[5px] py-[10px] mb-[29px]'>
                    <Black_Calendar  onDateTimeSelected={handleDateTimeSelected} closeCalendar={toggleCalendar}  />
                </div>
                <div className='w-full bg-[#1F1F1F] py-[24px] pl-[28px] flex flex-col rounded-[4px] max-[455px]:py-[12px] max-[455px]:pl-[14px] mb-[73px] max-[455px]:mb-[36px]'>
                    <p className='text-[#73C018] text-lg leading-7 font-normal'>Kjøretøydetaljer:</p>
                    <p className='text-white text-lg leading-7 font-normal'>- BMW X3 XDRIVE20D</p>
                    <p className='text-white text-lg leading-7 font-normal'>Standard dekk: 225/60R17 H 93</p>
                    <p className='text-white text-lg leading-7 font-normal'>Standardinformasjon er nå forhåndsutfylt.</p>
                </div>
                <div className="flex flex-col w-[601px] h-[750.5px] items-center relative max-[1250px]:w-[435px] max-[1250px]:h-[496px] max-[700px]:h-[390px] max-[700px]:w-[343px]">
                    <div className="flex w-[601px] h-[33px] bg-[#EBEBEB] rounded-full z-0 max-[1250px]:w-[435px] max-[700px]:w-[343px] max-[700px]:h-[18px]"></div>
                    <div className="flex w-[584px] h-[732.5px] top-[18px] z-10 absolute max-[1250px]:w-[413px] max-[1250px]:h-[484px] max-[700px]:w-[325px] max-[700px]:pb-0 max-[700px]:top-[9px]  mb-[52px]">
                        <Image
                            alt="blackimage"
                            className="w-full h-full absolute max-[700px]:h-[381px]"
                            src={Back_Image}
                        ></Image>
                        <div className="flex flex-col w-full h-full px-[32.5px] pt-[37px] pb-[83.5px] z-[15] max-[1250px]:pt-6 max-[1250px]:pl-[22px] max-[700px]:px-[11px] max-[700px]:pt-[17px] max-[700px]:pb-[10px]">
                            <div className="flex text-3xl leading-9 font-semi-bold text-black pb-[34px] border-b border-b-solid border-b-[#aaa] max-[1250px]:text-xl max-[1250px]:leading-7 max-[1250px]:pb-[22px] max-[700px]:text-lg max-[700px]:pb-[19px]">
                                Order Summary
                            </div>
                            <div className="flex flex-row w-full h-25 justify-center items-center py-[22px] max-[1250px]:py-[15px] max-[700px]:py-[11px]">
                                <div className="flex flex-col w-auto h-auto pr-[42px] border-r border-r-solid border-r-[#aaa] max-[1250px]:pr-[12px] max-[700px]:pr-[6px]">
                                    <div className="text-lg leading-7 font-medium text-zinc-500 max-[1250px]:text-sm max-[1250px]:leading-5 max-[1250px]:font-normal max-[700px]:text-xs max-[700px]:leading-4">
                                        Date
                                    </div>
                                    <div className="text-lg leding-7 font-medium text-black max-[1250px]:text-sm max-[1250px]:leading-5 max-[1250px]:font-normal max-[700px]:text-xs max-[700px]:leading-4">
                                        13 May 2024
                                    </div>
                                </div>
                                <div className="flex flex-col w-auto h-auto pr-[16px] pl-7 border-r border-r-solid border-r-[#aaa] max-[1250px]:pl-2 max-[1250px]:pr-[6px]">
                                    <div className="text-lg leading-7 font-medium text-zinc-500 max-[1250px]:text-sm max-[1250px]:leading-5 max-[1250px]:font-normal max-[700px]:text-xs max-[700px]:leading-4">
                                        Order Number
                                    </div>
                                    <div className="text-lg leding-7 font-medium text-black max-[1250px]:text-sm max-[1250px]:leading-5 max-[1250px]:font-normal max-[700px]:text-xs max-[700px]:leading-4">
                                        012-123456789
                                    </div>
                                </div>
                                <div className="flex flex-col w-auto h-auto pl-[25px] max-[1250px]:pl-4">
                                    <div className="text-lg leading-7 font-medium text-zinc-500 max-[1250px]:text-sm max-[1250px]:leading-5 max-[1250px]:font-normal max-[700px]:text-xs max-[700px]:leading-4">
                                        Payment Method
                                    </div>
                                    <div className="text-lg leding-7 font-medium text-black max-[1250px]:text-sm max-[1250px]:leading-5 max-[1250px]:font-normal max-[700px]:text-xs max-[700px]:leading-4">
                                        Mastercard
                                    </div>
                                </div>
                            </div>
                            <div className="flex border-b border-dashed border-b-[#aaa] mx-[-5px]"></div>
                            <div className="flex flex-row justify-between w-full h-auto pt-[33px] pb-[150px] border-b border-b-solid border-b-[#aaa]  max-[1250px]:pt-[21px] max-[1250px]:pb-11 max-[700px]:pt-5 max-[700px]:pb-[31px]">
                                <div className="flex flex-row justify-between w-[260px] max-[1250px]:w-auto max-[1250px]:gap-[11px]">
                                    <div className="flex justify-center items-center w-[93px] h-[93px] bg-[#D9D9D9] rounded-lg max-[1250px]:w-[68px] max-[1250px]:h-[68px] max-[700px]:w-[52px] max-[700px]:h-[52px]">
                                        <Image
                                            alt="Product"
                                            src={Product}
                                            className="w-[52px] h-[82px] max-[1250px]:w-10 max-[1250px]:h-[61px] max-[700px]:w-[31px] max-[700px]:h-[48px]"
                                        ></Image>
                                    </div>
                                    <div className="flex flex-col w-auto h-auto text-sm leading-5 font-medium text-[#787881] pt-[10px] max-[1250px]:text-xs max-[1250px]:leading-4 max-[1250px]:font-normal max-[700px]:text-xs max-[700px]:leading-4 max-[700px]:pt-0">
                                        <div className="flex pb-[5px]  max-[700px]:pb-0">VERKSTED MATRIELL</div>
                                        <div className="flex">
                                            Pack: Premium
                                            <br />
                                            Qty: 1
                                        </div>
                                    </div>
                                </div>
                                <div className="flex pt-[5px] w-auto">
                                    <div className="text-lg leading-7 font-semi-bold text-black max-[1250px]:text-sm max-[1250px]:leading-5 max-[700px]:text-sm max-[700px]:leading-5">
                                        kr 1016 / stk
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row justify-between w-full h-auto pt-[13px] pb-[48px] text-[#aaa] border-b border-b-solid border-b-[#aaa] max-[1250px]:pt-2 max-[1250px]:pb-[25px] max-[700px]:pt-[6px] max-[700px]:pb-[25px]">
                                <div className="flex flex-col text-lg leading-7 gap-[7px] font-medium max-[1250px]:text-sm max-[1250px]:leading-5 max-[1250px]:font-normal max-[700px]:text-sm max-[700px]:leading-5">
                                    <div className="flex">Sub TotalMiljøavgift</div>
                                    <div className="flex">Miljøavgift</div>
                                </div>
                                <div className="flex flex-col text-lg leading-7 w-auto font-medium gap-[7px] max-[1250px]:text-sm max-[1250px]:leading-5 max-[1250px]:font-normal max-[700px]:text-sm max-[700px]:leading-5">
                                    <div className="flex w-full ">kr 1016 / stk</div>
                                    <div className="flex pl-[30px] w-full max-[700px]:pl-[20px]">kr 2 / stk</div>
                                </div>
                            </div>
                            <div className="flex justify-between pt-[10px] w-full h-auto">
                                <div className="flex text-2xl leading-8 font-semi-bold text-black max-[1250px]:text-lg max-[1250px]:leading-7">
                                    Order Total
                                </div>
                                <div className="flex text-2xl leading-8 font-semi-bold text-black max-[1250px]:text-lg max-[1250px]:leading-7">
                                    kr 1016 / stk
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Welcome_Modal_Dark;
