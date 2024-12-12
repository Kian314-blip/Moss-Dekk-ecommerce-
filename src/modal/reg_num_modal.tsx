"use client"
import Image from "next/image";
import { Inter } from "next/font/google";
import React, { ChangeEvent, useEffect, useState, useRef } from 'react';
import Norway_flag from "../../public/image/Norway (NO).png"
import N_image from "../../public/image/N.png"

const inter = Inter({ subsets: ["latin"] });

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const Reg_Num_Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const [inputValue, setInputValue] = useState<string>("");
    const [isValid, setIsValid] = useState<boolean>(true);

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

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const value = e.target.value;
        // Allow only up to 7 characters
        if (value.length <= 7) {
            setInputValue(value);

            if (value.length === 7) {
                // Check if the input contains both numbers and letters
                const hasLetter = /[a-zA-Z]/.test(value);
                const hasNumber = /[0-9]/.test(value);
                const isValidInput = hasLetter && hasNumber;
                setIsValid(isValidInput);
            } else {
                // Reset validation if not 7 characters
                setIsValid(true);
            }
        }
    };

    if (!isOpen) return null;

    return (
        <div className="flex justify-center bg-black top-0 z-10 w-full h-full pt-[50px]" style={{ zIndex: "111111", backgroundColor: "rgb(0 0 0 / 80%)", position: "fixed" }}>
            <div ref={modalRef} className="report-licenseplate gap-[16px] flex flex-col" style={{margin:"0px",marginTop:"50px"}}>
                <div className="report-licenseplate-title modal-report-licenseplate-title gap-36 flex flex-row" style={{gap:"145px"}}>
                    <p className="text-white text-2xl font-normal font-['Inter'] w-[180px]">Tast inn ditt</p>
                    <p className="text-white text-2xl font-normal font-['Inter']">RegNr</p>
                </div>
                <div className="report-licenseplate-content flex flex-row shadow">
                    <div className="report-licenseplate-content-header w-[93px] flex flex-col gap-[26px] px-[20px] py-[23px] bg-[#3e61a5] rounded-tl rounded-bl justify-center items-center">
                        <Image alt="Norway flag" src={Norway_flag} className="norway-flag" />
                        <Image alt="N" src={N_image} className="n-letter" />
                    </div>
                    <div className="rounded-tr rounded-br licenseplate-input-pan w-[543px] pt-[31px] pl-[26px] pr-[37px] pb-[30px] relative h-[157px] flex justify-center items-center bg-white">
                        <input
                            className={`uppercase w-full h-full border-none focus:outline-none px-0 focus:ring-0 border-gray-300 ${isValid ? "text-[#aaaaaa]" : "text-[#ff0000]"} text-[100px] font-normal z-10 font-['Inter'] leading-[96px]`}
                            pattern="[a-zA-Z]{2}[0-9]{5}$"
                            type="text"
                            maxLength={7}
                            autoFocus
                            id="input-licensplate"
                            name="input-licensplate"
                            value={inputValue}
                            onChange={handleChange}
                            style={{ letterSpacing: "15px", fontFamily: "monospace",paddingLeft:"0px",paddingRight:"0px" }}
                            autoComplete="off"
                        />
                        <div className="absolute w-full h-full pl-[33px] pr-[37px] gap-[15px] flex items-end justify-center pb-[28px] licenseplate-border">
                            <div className="flex-1 h-[2px] bg-[#000]"></div>
                            <div className="flex-1 h-[2px] bg-[#000]"></div>
                            <div className="flex-1 h-[2px] bg-[#000]"></div>
                            <div className="flex-1 h-[2px] bg-[#000]"></div>
                            <div className="flex-1 h-[2px] bg-[#000]"></div>
                            <div className="flex-1 h-[2px] bg-[#000]"></div>
                            <div className="flex-1 h-[2px] bg-[#000]"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reg_Num_Modal;
