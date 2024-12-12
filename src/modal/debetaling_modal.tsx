import React, { useEffect, useRef, useState } from 'react';
import X_Cancel from "@/svg/X_cancel";
import ArrowDropUp from '@/svg/ArrowDropUp';
import ArrowDropDown_O from '@/svg/ArrowDropDown_O';
import Cheveron_Left from '@/svg/Cheveron_Left';
import Cheveron_Right from '@/svg/Cheveron_Right';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const Debetaling_modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const [isOpenDropdown, setIsOpenDropdown] = useState(false);
    const [selectedOption, setSelectedOption] = useState("Firmakunde/faktura");

    const handleClickOutside = (event: MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
            onClose();
        }
    };

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

    // Return null if modal is not open
    if (!isOpen) return null;

    const toggleDropdown = () => setIsOpenDropdown(prev => !prev);

    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
        // setIsOpenDropdown(false);
    };
    return (
        <div className="fixed inset-0 z-50 flex justify-center items-center">
            <div ref={modalRef} className="w-[838px] max-h-[95vh] overflow-y-auto hide-scrollbar flex flex-col h-[480px]">
                <div className="px-[30px] py-[31px] flex flex-row justify-between bg-[#18181B] items-center max-[590px]:p-[15px]">
                    <p className="text-lg leading-7 font-medium text-[#73C018] max-[590px]:text-sm">Beataling Alternativ</p>
                    <X_Cancel />
                </div>
                <div className="pt-[63px] bg-[#1F1F1F] pl-[31px] pr-[21px] pb-[26px] gap-[72px] h-full flex flex-col justify-between">
                    <div className="relative w-full flex gap-[31px] max-[610px]:flex-col max-[610px]:items-center max-[610px]:gap-[15px]">
                        <div className=''>
                            <p className='text-lg leading-7 font-normal font-["Inter"]'>Velg en betalings måte:</p>
                        </div>
                        <div className='flex'>

                        <div
                            className="h-[44px] w-[305px] flex items-center justify-between px-[16px] text-lg font-medium leading-7 text-white bg-[#18181B] rounded-[8px] border-[#73C018] border-[2px] cursor-pointer"
                            onClick={toggleDropdown}
                            >
                            {selectedOption}
                            {isOpenDropdown ? <ArrowDropUp /> : <ArrowDropDown_O />}

                        </div>
                        {isOpenDropdown && (
                            <div className="absolute z-10 w-[305px] mt-[50px] border-[1px] border-[#818182] bg-[#18181B] rounded-[8px] shadow-lg pt-[12px] pb-[8px] gap-[2px]">
                                <div
                                    className="cursor-pointer py-[3px] text-white hover:bg-[#73C018] hover:bg-[#1F1F1F] text-lg leading -7 font-normal font-['Inter'] text-center"
                                    onClick={() => handleOptionClick("Firmakunde/faktura")}
                                    >
                                    Firmakunde/faktura
                                </div>
                                <div
                                    className="cursor-pointer py-[3px] text-white hover:bg-[#73C018] hover:bg-[#1F1F1F] text-lg leading -7 font-normal font-['Inter'] text-center"
                                    onClick={() => handleOptionClick("Vipps/Kortbeating/debetaling")}
                                    >
                                    Vipps/Kortbeating/debetaling
                                </div>
                                <div
                                    className="cursor-pointer py-[3px] text-white hover:bg-[#73C018] hover:bg-[#1F1F1F] text-lg leading -7 font-normal font-['Inter'] text-center"
                                    onClick={() => handleOptionClick("Admin")}
                                >
                                    Admin
                                </div>
                            </div>
                        )}
                        </div>
                    </div>
                    <div className='flex flex-row justify-end gap-[9px]'>
                        <div className='rounded-[8px] p-[10px] bg-[#E7E7E7] gap-[2px] flex flex-row items-center cursor-pointer'>
                            <Cheveron_Left />
                            <p className='text-lg leading-7 font-normal font-["Inter"] text-black'>Tilbake</p>
                        </div>
                        <div className='rounded-[8px] p-[10px] bg-[#73C018] gap-[2px] flex flex-row items-center cursor-pointer'>
                            <p className='text-lg leading-7 font-normal font-["Inter"] text-white'>Fortsett</p>
                            <Cheveron_Right  />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Debetaling_modal;