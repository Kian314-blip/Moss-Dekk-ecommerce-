"use client";
import Calendar from '@/components/calendar';
import External_link_Mod from '@/svg/External_Link_Mod';
import React, { useEffect, useRef, useState } from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const Welcome_Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const [dateTime, setDateTime] = useState<string>('');
    const [showCalendar, setShowCalendar]=useState(false);
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
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex justify-center items-center">
            <div ref={modalRef} className="w-[636px] max-h-[90vh] overflow-y-auto hide-scrollbar flex flex-col items-center pt-[28px] pl-[12px] pr-[24px] bg-white rounded-[4px] max-[455px]:pt-[14px] max-[455px]:pl-[6px] max-[455px]:pr-[12px]">
                <div className="w-full flex justify-center pb-[20px] max-[455px]:pb-[10px]">
                    <p className="text-4xl font-normal text-black max-[455px]:text-2xl">
                        Velkommen <span className="text-4xl font-semibold text-black max-[455px]:text-2xl">Saba Kanwar</span>
                    </p>
                </div>
                <div className='w-full flex justify-center pb-[24px] max-[455px]:pb-[12px]'>
                    <p className='text-lg leading-7 font-normal text-black max-[455px]:text-sm'>Ønsker du å Bestille tid for DEKKSKIFT?</p>
                </div>
                <div className='flex flex-row gap-[10px] w-full justify-center pb-[29px] max-[455px]:pb-[14px]'>
                    <div className='bg-[#73C018] py-[10px] px-[19px] rounded-[4px] cursor-pointer' onClick={handleJaClick}>
                        <p className='text-base leading-6 font-normal text-white max-[455px]:text-sm'>Ja</p>
                    </div>
                    <div className="bg-[#5D5D5D] px-[10px] py-[8px] rounded-[4px] cursor-pointer">
                        <p className='text-lg leading-7 font-normal text-white max-[455px]:text-sm'>Nei, gå til andre tjenester</p>
                    </div>
                </div>
                <div className='w-full bg-[#F6F6F6] py-[24px] pl-[28px] flex flex-col rounded-[4px] max-[455px]:py-[12px] max-[455px]:pl-[14px] mb-[27px] max-[455px]:mb-[13px]'>
                    <p className='text-black text-lg leading-7 font-normal'>Kjøretøydetaljer:</p>
                    <p className='text-[#6D6D6D] text-lg leading-7 font-normal'>- BMW X3 XDRIVE20D</p>
                    <p className='text-[#6D6D6D] text-lg leading-7 font-normal'>Standard dekk: 225/60R17 H 93</p>
                    <p className='text-[#6D6D6D] text-lg leading-7 font-normal'>Standardinformasjon er nå forhåndsutfylt.</p>
                </div>
                {showCalendar&&(
                <div className='flex flex-col pb-[9px] w-full'>
                    <div className='flex flex-col'>
                        <p className='text-3xl leading-9 font-semibold text-black max-[455px]:text-xl'>Dekkhotell: <span className='text-3xl leading-9 font-semibold text-[#73C018] max-[455px]:text-xl'>1190.-</span></p>
                        <p className='text-lg leading-7 font-normal text-black max-[455px]:text-sm'>inkl, skift, vask, lagring og forsikring</p>
                    </div>
                    <div className='pt-[16px] gap-[4px] flex flex-row items-center pb-[20px] max-[455px]:pb-[10px] max-[455px]:pt-[8px]'>
                        <External_link_Mod />
                        <p className='text-lg leading-8 font-normal underline text-[#356EF1]'>Tire report</p>
                    </div>
                    <div className='shadow-2xl rounded-[15px] px-[5px] py-[10px]'>
                        <Calendar   onDateTimeSelected={handleDateTimeSelected} closeCalendar={toggleCalendar}   />
                    </div>
                </div>

                )}
            </div>

        </div>
    );
};

export default Welcome_Modal;
