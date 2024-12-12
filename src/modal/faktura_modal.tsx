import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import X_Cancel from "@/svg/X_cancel";
import ArrowDropUp from '@/svg/ArrowDropUp';
import ArrowDropDown_O from '@/svg/ArrowDropDown_O';
import Cheveron_Left from '@/svg/Cheveron_Left';
import Cheveron_Right from '@/svg/Cheveron_Right';
import Faktura_Another_Modal from './faktura_another_modal';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const Faktura_Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null); // New ref for dropdown
    const [isOpenDropdown, setIsOpenDropdown] = useState(false);
    const [selectedOption, setSelectedOption] = useState("Firmakunde/faktura");
    const [fakturaModalOpen, setFakturaModalOpen] = useState(false);
    const handleClickOutside = (event: MouseEvent) => {
        if (
            modalRef.current &&
            !modalRef.current.contains(event.target as Node) &&
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target as Node)
        ) {
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

    if (!isOpen) return null;

    const toggleDropdown = (e: React.MouseEvent) => {
        e.stopPropagation(); 
        setIsOpenDropdown(prev => !prev);
    };

    const handleOptionClick = (option: string, e: React.MouseEvent) => {
        e.stopPropagation();
        setSelectedOption(option);
        setIsOpenDropdown(false);
    };
    const handleOpenModal = () => {
        setFakturaModalOpen(prev => !prev);
    }
    const handleClose=()=>{
        setFakturaModalOpen(false);
    }
    return (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
            <div ref={modalRef} className="w-[838px] max-h-[95vh] overflow-y-auto hide-scrollbar flex flex-col h-[480px]">
                <div className="px-[30px] py-[31px] flex flex-row justify-between bg-[#18181B] items-center max-[590px]:p-[15px]">
                    <p className="text-lg leading-7 font-medium text-[#73C018] max-[590px]:text-sm">Beataling Alternativ</p>
                    <div onClick={onClose} className='cursor-pointer'>
                        <X_Cancel />
                    </div>
                </div>
                <div className="pt-[63px] bg-[#1F1F1F] pl-[31px] pr-[21px] pb-[26px] gap-[72px] h-full flex flex-col justify-between">
                    <div className="relative w-full flex justify-center">
                        <div
                            className="h-[44px] w-[305px] flex items-center justify-between px-[16px] text-lg font-medium leading-7 text-white bg-[#18181B] rounded-[8px] border-[#73C018] border-[2px] cursor-pointer"
                            onClick={toggleDropdown}
                        >
                            {selectedOption}
                            {isOpenDropdown ? <ArrowDropUp /> : <ArrowDropDown_O />}
                        </div>

                        {isOpenDropdown && (
                            <div ref={dropdownRef} className="absolute z-10 w-[305px] mt-[50px] border-[1px] border-[#818182] bg-[#18181B] rounded-[8px] shadow-lg pt-[12px] pb-[8px] gap-[2px]">
                                <div
                                    className="cursor-pointer py-[3px] text-white hover:bg-[#73C018] hover:bg-[#1F1F1F] text-lg leading-7 font-normal font-['Inter'] text-center"
                                    onClick={(e) => { handleOptionClick("Firmakunde/faktura", e); handleOpenModal();}}
                                >
                                    Firmakunde/faktura
                                </div>
                                <div
                                    className="cursor-pointer py-[3px] text-white hover:bg-[#73C018] hover:bg-[#1F1F1F] text-lg leading-7 font-normal font-['Inter'] text-center"
                                    onClick={(e) => handleOptionClick("Vipps/Kortbeating/debetaling", e)}
                                >
                                    Vipps/Kortbeating/debetaling
                                </div>
                                <div
                                    className="cursor-pointer py-[3px] text-white hover:bg-[#73C018] hover:bg-[#1F1F1F] text-lg leading-7 font-normal font-['Inter'] text-center"
                                    onClick={(e) => handleOptionClick("Admin", e)}
                                >
                                    Admin
                                </div>
                            </div>
                        )}
                    </div>
                    <div className='flex flex-row justify-end gap-[9px]'>
                        <div className='rounded-[8px] p-[10px] bg-[#E7E7E7] gap-[2px] flex flex-row items-center cursor-pointer'>
                            <Cheveron_Left />
                            <p className='text-lg leading-7 font-normal font-["Inter"] text-black'>Tilbake</p>
                        </div>
                        <div className='rounded-[8px] p-[10px] bg-[#73C018] gap-[2px] flex flex-row items-center cursor-pointer'>
                            <p className='text-lg leading-7 font-normal font-["Inter"] text-white'>Fortsett</p>
                            <Cheveron_Right />
                        </div>
                    </div>
                </div>
            </div>
            {/* <Faktura_Another_Modal isOpen={fakturaModalOpen} onClose={handleClose} /> */}
        </div>
    );
};

export default Faktura_Modal;
