import React, { useEffect, useRef, useState } from 'react';
import X_Cancel from "@/svg/X_cancel";
import ArrowDropUp from '@/svg/ArrowDropUp';
import ArrowDropDown_O from '@/svg/ArrowDropDown_O';
import Cheveron_Left from '@/svg/Cheveron_Left';
import Cheveron_Right from '@/svg/Cheveron_Right';
import Image from "next/image";
import Report_logo from "../../public/image/report_logo.png"
import Tyre_Mask from "../../public/image/tyre-mask.png"
import Done from "@/svg/Done";
import Success_Done from "@/svg/Success_Done"
import Car from "../../public/image/car.png"
import Alert_circle from "@/svg/Alert_circle";
import Cross_circle from "@/svg/Cross_circle";
import Slide_icon from "@/svg/Slide_icon";
import Download_icon from "@/svg/Download_icon";
import Print_icon from "@/svg/Print_icon,";
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const Popup_Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
    const modalRef = useRef<HTMLDivElement>(null);

    const text1 = "Nomal>=4.5mm";
    const text2 = "4.5mm>Begynner å bli slitt>=1.6mm";
    const text3 = "Farlig/ ulovlig<1.6mm";
    const text4 = "Sideslitt/ ujevn slitasje";
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


    return (
        <div className="fixed inset-0 z-50 flex justify-center items-center">
            <div ref={modalRef} className="w-[1632px] h-[95vh] overflow-y-auto hide-scrollbar flex flex-col h-[480px] bg-white rounded-[44px] px-[64px] pt-[71px] pb-[91px] max-[550px]:p-[10px] max-[550px]:rounded-[14px]">
                <div className="report-main-infor flex flex-row justify-between pb-[46px] border-b-[1px] border-[#D6D6D6]" style={{ paddingRight: 0, paddingTop: 0, paddingLeft: 0, justifyContent: "space-between", flexWrap: "nowrap" }}>
                    <div className="report-main-infor-content pr-[150px] flex flex-col">
                        <div className="rmi-content-title gap-[26px]">
                            <p className="text-black text-3xl font-semibold font-['Inter'] leading-9">DEKK RAPPORT</p>
                        </div>
                        <div className="rmi-content-text">
                            <div className="rmic-text-item pb-[6px]">
                                <p className="w-[248px] text-[#aaaaaa] text-lg font-normal font-['Inter'] leading-7">Order No.: <span className=" text-[#aaaaaa] text-lg font-normal font-['Inter'] leading-7">20240306162619</span></p>
                            </div>
                            <div className="rmic-text-item pb-[10px]">
                                <p className="w-[248px] text-[#aaaaaa] text-lg font-normal font-['Inter'] leading-7">Bil: <span className=" text-[#aaaaaa] text-lg font-normal font-['Inter'] leading-7">Toyota Auris</span></p>
                            </div>
                            <div className="rmic-text-item">
                                <p className="w-[248px] text-[#aaaaaa] text-lg font-normal font-['Inter'] leading-7">Dato: <span className=" text-black text-lg font-normal font-['Inter'] leading-7">2024-03-06 16:26:19</span></p>
                            </div>
                        </div>
                    </div>

                    <div className="report-info-logo">
                        <div className="ml-[85px] w-[295px] h-[161px]" style={{ width: "295px", height: "161px" }}>
                            <Image src={Report_logo} alt="Moss Dekk logo" width={295} height={161} />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col pt-[36px] pb-[155px] show-tyre-status-pan" style={{ paddingRight: 0, paddingLeft: 0 }}>
                    <div className="show-tyre-status-pan-title flex flex-row gap-[60px] pb-[62px]">
                        <p className="font-['Inter'] font-medium text-lg leading-7 text-black uppercase">SESONG:</p>
                        <p className="font-['Inter'] font-medium text-lg leading-7 text-black uppercase">SOMMER DEKK</p>
                    </div>
                    <div className="stsp-real-pan flex flex-row">
                        <div className="real-pan-tyre-status-first mr-[14px] flex flex-col justify-between">
                            <div className="tyre-info-pan shadow pt-[35px] flex flex-col pl-[19px] pr-[17px] pb-[9px] rounded-[5px]">
                                <div className="tyre-figures w-full flex flex-row justify-center gap-[24px] pb-[8px]">
                                    <p className="text-black text-lg font-normal leading-7 font-['Inter']">6.52</p>
                                    <p className="text-black text-lg font-normal leading-7 font-['Inter']">6.55</p>
                                    <p className="text-black text-lg font-normal leading-7 font-['Inter']">6.42</p>
                                    <p className="text-black text-lg font-normal leading-7 font-['Inter']">6.75</p>
                                </div>
                                <div className="tyre-exact-figures relative w-[365px] h-[145px] mb-[11px]">
                                    <Image alt="tire mask" src={Tyre_Mask} width={365} height={145}></Image>
                                    <div className="figures-tyre-width-pan absolute bottom-0 gap-[8px] flex flex-row left-0 py-[18px] px-[47px] bg-[#73C018] items-center">
                                        <p className="text-lg leading-7 font-normal font-['Inter']">Max <span className="text-xl leading-7 font-semi-bold">7.28</span> mm</p>
                                        <p className="text-lg leading-7 font-normal font-['Inter']">Min <span className="text-xl leading-7 font-semi-bold">7.03</span> mm</p>
                                        <Done />
                                    </div>
                                </div>
                                <div className="dekk-info-title pb-[16px]">
                                    <p className="text-lg leading-7 font-normai font-['Inter'] text-[#6D6D6D]">Dekk info:</p>
                                </div>
                                <div className="dekk-info-pan flex flex-col gap-[14px] pb-[21px]">
                                    <div className="dekk-info-brand flex flex-row items-center">
                                        <p className="text-lg leading-7 font-medium pr-[6px] text-black">Brand:</p>
                                        <div className="dekk-infor-brand-pan flex flex-row gap-[4px]">
                                            <div className="dekk-infor-brand-detail bg-[#1CBBB4] p-[10px] rounded-full">
                                                <p className="text-lg leading-7 font-normal font-['Inter'] uppercase">MICHELIN</p>
                                            </div>
                                            <div className="dekk-infor-brand-detail bg-[#5B9BD5] p-[10px] rounded-full">
                                                <p className="text-lg leading-7 font-normal font-['Inter'] uppercase">PRIMACY</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dekk-info-brand flex flex-row items-center">
                                        <p className="text-lg leading-7 font-medium pr-[14px] text-black">Size:</p>
                                        <div className="dekk-infor-brand-pan flex flex-row gap-[4px]">
                                            <div className="dekk-infor-brand-detail bg-[#8580C3] p-[10px] rounded-full">
                                                <p className="text-lg leading-7 font-normal font-['Inter'] uppercase">245/55R1...</p>
                                            </div>
                                            <div className="dekk-infor-brand-detail-default bg-[#54B432] py-[10px] px-[27px] rounded-full">
                                                <p className="text-lg leading-7 font-normal font-['Inter'] uppercase">4221</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dekk-info-brand flex flex-row items-center">
                                        <p className="text-lg leading-7 font-medium pr-[6px] text-black">Season:</p>
                                        <p className="text-lg leading-7 font-normal text-[#AAAAAA]">Sommer Dekk</p>
                                    </div>
                                </div>
                                <div className="dekk-status-check-item ml-[-9px] flex flex-row gap-[4px] items-center">
                                    <Success_Done />
                                    <p className="text-lg leading-7 font-semi-bold text-black">Venstre Foran</p>
                                </div>
                            </div>
                            <div className="tyre-info-pan shadow pt-[35px] flex flex-col pl-[19px] pr-[17px] pb-[9px] rounded-[5px]">
                                <div className="tyre-figures w-full flex flex-row justify-center gap-[24px] pb-[8px]">
                                    <p className="text-black text-lg font-normal leading-7 font-['Inter']">6.52</p>
                                    <p className="text-black text-lg font-normal leading-7 font-['Inter']">6.55</p>
                                    <p className="text-black text-lg font-normal leading-7 font-['Inter']">6.42</p>
                                    <p className="text-black text-lg font-normal leading-7 font-['Inter']">6.75</p>
                                </div>
                                <div className="tyre-exact-figures relative w-[365px] h-[145px] mb-[11px]">
                                    <Image alt="tire mask" src={Tyre_Mask} width={365} height={145}></Image>
                                    <div className="figures-tyre-width-pan absolute bottom-0 gap-[8px] flex flex-row left-0 py-[18px] px-[47px] bg-[#73C018] items-center">
                                        <p className="text-lg leading-7 font-normal font-['Inter']">Max <span className="text-xl leading-7 font-semi-bold">7.28</span> mm</p>
                                        <p className="text-lg leading-7 font-normal font-['Inter']">Min <span className="text-xl leading-7 font-semi-bold">7.03</span> mm</p>
                                        <Done />
                                    </div>
                                </div>
                                <div className="dekk-info-title pb-[16px]">
                                    <p className="text-lg leading-7 font-normai font-['Inter'] text-[#6D6D6D]">Dekk info:</p>
                                </div>
                                <div className="dekk-info-pan flex flex-col gap-[14px] pb-[21px]">
                                    <div className="dekk-info-brand flex flex-row items-center">
                                        <p className="text-lg leading-7 font-medium pr-[6px] text-black">Brand:</p>
                                        <div className="dekk-infor-brand-pan flex flex-row gap-[4px]">
                                            <div className="dekk-infor-brand-detail bg-[#1CBBB4] p-[10px] rounded-full">
                                                <p className="text-lg leading-7 font-normal font-['Inter'] uppercase">MICHELIN</p>
                                            </div>
                                            <div className="dekk-infor-brand-detail bg-[#5B9BD5] p-[10px] rounded-full">
                                                <p className="text-lg leading-7 font-normal font-['Inter'] uppercase">PRIMACY</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dekk-info-brand flex flex-row items-center">
                                        <p className="text-lg leading-7 font-medium pr-[14px] text-black">Size:</p>
                                        <div className="dekk-infor-brand-pan flex flex-row gap-[4px]">
                                            <div className="dekk-infor-brand-detail bg-[#8580C3] p-[10px] rounded-full">
                                                <p className="text-lg leading-7 font-normal font-['Inter'] uppercase">245/55R1...</p>
                                            </div>
                                            <div className="dekk-infor-brand-detail-default bg-[#54B432] py-[10px] px-[27px] rounded-full">
                                                <p className="text-lg leading-7 font-normal font-['Inter'] uppercase">4221</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dekk-info-brand flex flex-row items-center">
                                        <p className="text-lg leading-7 font-medium pr-[6px] text-black">Season:</p>
                                        <p className="text-lg leading-7 font-normal text-[#AAAAAA]">Sommer Dekk</p>
                                    </div>
                                </div>
                                <div className="dekk-status-check-item ml-[-9px] flex flex-row gap-[4px] items-center">
                                    <Alert_circle />
                                    <p className="text-lg leading-7 font-semi-bold text-black">Venstre Bak</p>
                                </div>
                            </div>
                        </div>
                        <div className="real-pan-car-image pt-[152px] pb-[130px]">
                            <div className="w-[608.7px] h-[1036px]">
                                <Image alt="car image" src={Car} width={608.7} height={1036}></Image>

                            </div>
                        </div>
                        <div className="real-pan-tyre-status-second ml-[30.3px] flex flex-col justify-between">
                            <div className="tyre-info-pan shadow pt-[35px] flex flex-col pl-[19px] pr-[17px] pb-[9px] rounded-[5px]">
                                <div className="tyre-figures w-full flex flex-row justify-center gap-[24px] pb-[8px]">
                                    <p className="text-black text-lg font-normal leading-7 font-['Inter']">6.52</p>
                                    <p className="text-black text-lg font-normal leading-7 font-['Inter']">6.55</p>
                                    <p className="text-black text-lg font-normal leading-7 font-['Inter']">6.42</p>
                                    <p className="text-black text-lg font-normal leading-7 font-['Inter']">6.75</p>
                                </div>
                                <div className="tyre-exact-figures relative w-[365px] h-[145px] mb-[11px]">
                                    <Image alt="tire mask" src={Tyre_Mask} width={365} height={145}></Image>
                                    <div className="figures-tyre-width-pan absolute bottom-0 gap-[8px] flex flex-row left-0 py-[18px] px-[47px] bg-[#73C018] items-center">
                                        <p className="text-lg leading-7 font-normal font-['Inter']">Max <span className="text-xl leading-7 font-semi-bold">7.28</span> mm</p>
                                        <p className="text-lg leading-7 font-normal font-['Inter']">Min <span className="text-xl leading-7 font-semi-bold">7.03</span> mm</p>
                                        <Done />
                                    </div>
                                </div>
                                <div className="dekk-info-title pb-[16px]">
                                    <p className="text-lg leading-7 font-normai font-['Inter'] text-[#6D6D6D]">Dekk info:</p>
                                </div>
                                <div className="dekk-info-pan flex flex-col gap-[14px] pb-[21px]">
                                    <div className="dekk-info-brand flex flex-row items-center">
                                        <p className="text-lg leading-7 font-medium pr-[6px] text-black">Brand:</p>
                                        <div className="dekk-infor-brand-pan flex flex-row gap-[4px]">
                                            <div className="dekk-infor-brand-detail bg-[#1CBBB4] p-[10px] rounded-full">
                                                <p className="text-lg leading-7 font-normal font-['Inter'] uppercase">MICHELIN</p>
                                            </div>
                                            <div className="dekk-infor-brand-detail bg-[#5B9BD5] p-[10px] rounded-full">
                                                <p className="text-lg leading-7 font-normal font-['Inter'] uppercase">PRIMACY</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dekk-info-brand flex flex-row items-center">
                                        <p className="text-lg leading-7 font-medium pr-[14px] text-black">Size:</p>
                                        <div className="dekk-infor-brand-pan flex flex-row gap-[4px]">
                                            <div className="dekk-infor-brand-detail bg-[#8580C3] p-[10px] rounded-full">
                                                <p className="text-lg leading-7 font-normal font-['Inter'] uppercase">245/55R1...</p>
                                            </div>
                                            <div className="dekk-infor-brand-detail-default bg-[#54B432] py-[10px] px-[27px] rounded-full">
                                                <p className="text-lg leading-7 font-normal font-['Inter'] uppercase">4221</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dekk-info-brand flex flex-row items-center">
                                        <p className="text-lg leading-7 font-medium pr-[6px] text-black">Season:</p>
                                        <p className="text-lg leading-7 font-normal text-[#AAAAAA]">Sommer Dekk</p>
                                    </div>
                                </div>
                                <div className="dekk-status-check-item ml-[-9px] flex flex-row gap-[4px] items-center">
                                    <Alert_circle />
                                    <p className="text-lg leading-7 font-semi-bold text-black">Høyre Foran</p>
                                </div>
                            </div>
                            <div className="tyre-info-pan shadow pt-[35px] flex flex-col pl-[19px] pr-[17px] pb-[9px] rounded-[5px]">
                                <div className="tyre-figures w-full flex flex-row justify-center gap-[24px] pb-[8px]">
                                    <p className="text-black text-lg font-normal leading-7 font-['Inter']">6.52</p>
                                    <p className="text-black text-lg font-normal leading-7 font-['Inter']">6.55</p>
                                    <p className="text-black text-lg font-normal leading-7 font-['Inter']">6.42</p>
                                    <p className="text-black text-lg font-normal leading-7 font-['Inter']">6.75</p>
                                </div>
                                <div className="tyre-exact-figures relative w-[365px] h-[145px] mb-[11px]">
                                    <Image alt="tire mask" src={Tyre_Mask} width={365} height={145}></Image>
                                    <div className="figures-tyre-width-pan absolute bottom-0 gap-[8px] flex flex-row left-0 py-[18px] px-[47px] bg-[#73C018] items-center">
                                        <p className="text-lg leading-7 font-normal font-['Inter']">Max <span className="text-xl leading-7 font-semi-bold">7.28</span> mm</p>
                                        <p className="text-lg leading-7 font-normal font-['Inter']">Min <span className="text-xl leading-7 font-semi-bold">7.03</span> mm</p>
                                        <Done />
                                    </div>
                                </div>
                                <div className="dekk-info-title pb-[16px]">
                                    <p className="text-lg leading-7 font-normai font-['Inter'] text-[#6D6D6D]">Dekk info:</p>
                                </div>
                                <div className="dekk-info-pan flex flex-col gap-[14px] pb-[21px]">
                                    <div className="dekk-info-brand flex flex-row items-center">
                                        <p className="text-lg leading-7 font-medium pr-[6px] text-black">Brand:</p>
                                        <div className="dekk-infor-brand-pan flex flex-row gap-[4px]">
                                            <div className="dekk-infor-brand-detail bg-[#1CBBB4] p-[10px] rounded-full">
                                                <p className="text-lg leading-7 font-normal font-['Inter'] uppercase">MICHELIN</p>
                                            </div>
                                            <div className="dekk-infor-brand-detail bg-[#5B9BD5] p-[10px] rounded-full">
                                                <p className="text-lg leading-7 font-normal font-['Inter'] uppercase">PRIMACY</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dekk-info-brand flex flex-row items-center">
                                        <p className="text-lg leading-7 font-medium pr-[14px] text-black">Size:</p>
                                        <div className="dekk-infor-brand-pan flex flex-row gap-[4px]">
                                            <div className="dekk-infor-brand-detail bg-[#8580C3] p-[10px] rounded-full">
                                                <p className="text-lg leading-7 font-normal font-['Inter'] uppercase">245/55R1...</p>
                                            </div>
                                            <div className="dekk-infor-brand-detail-default bg-[#54B432] py-[10px] px-[27px] rounded-full">
                                                <p className="text-lg leading-7 font-normal font-['Inter'] uppercase">4221</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dekk-info-brand flex flex-row items-center">
                                        <p className="text-lg leading-7 font-medium pr-[6px] text-black">Season:</p>
                                        <p className="text-lg leading-7 font-normal text-[#AAAAAA]">Sommer Dekk</p>
                                    </div>
                                </div>
                                <div className="dekk-status-check-item ml-[-9px] flex flex-row gap-[4px] items-center">
                                    <Alert_circle />
                                    <p className="text-lg leading-7 font-semi-bold text-black">Høyre Bak</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="stsp-status-guide pt-[38px] gap-[40px] flex flex-row">
                        <div className="stsp-status-guide-item flex flex-row gap-[14px] items-center">
                            <Success_Done />
                            <p className="text-lg leading-7 font-normal text-[#6D6D6D] font-['Inter']">{text1}</p>
                        </div>
                        <div className="stsp-status-guide-item flex flex-row gap-[14px] items-center">
                            <Alert_circle />
                            <p className="text-lg leading-7 font-normal text-[#6D6D6D] font-['Inter']">{text2}</p>
                        </div>
                        <div className="stsp-status-guide-item flex flex-row gap-[14px] items-center">
                            <Cross_circle />
                            <p className="text-lg leading-7 font-normal text-[#6D6D6D] font-['Inter']">{text3}</p>
                        </div>
                        <div className="stsp-status-guide-item flex flex-row gap-[14px] items-center">
                            <Slide_icon />
                            <p className="text-lg leading-7 font-normal text-[#6D6D6D] font-['Inter']">{text4}</p>
                        </div>

                    </div>
                </div>
                <div className="download-pan flex justify-center items-center w-full">
                    <div className="download-main-pan flex flex-row justify-between w-full items-center pt-[30px] pr-[34px] rounded-[13px] pb-[51px] pl-[51px] bg-[#282828] gap-[252px]">
                        <p className="dmp-text text-4xl leading-10 font-semi-bold w-[389px]">
                            Download for more details about our offer
                        </p>
                        <div className="dmp-btn-group flex flex-row gap-[11px]">
                            <div className="dmp-download-btn bg-[#54B432] p-[10px] gap-[10px] rounded-[8px] flex flex-row">
                                <Download_icon />
                                <p className="text-lg leading-7 font-normal font-['Inter']">Download file</p>
                            </div>
                            <div className="dmp-print-btn bg-[#7C7C7C] rounded-[8px] p-[10px] flex flex-row gap-[10px]">
                                <Print_icon />
                                <p className="text-lg leading-7 font-normal font-['Inter']">Print documents</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full pt-[51px] flex flex-row justify-end gap-[6px] max-[550px]:pt-[25px] max-[550px]:justify-center'>
                    <div className='rounded-[8px] bg-[#EF4225] w-[170px] py-[10px] text-center'>
                        <p className='text-sm leading-5 font-normal font-["Inter"] uppercase'>deny</p>
                    </div>
                    <div className='rounded-[8px] bg-[#54B432] w-[170px] py-[10px] text-center'>
                        <p className='text-sm leading-5 font-normal font-["Inter"] uppercase'>accept</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Popup_Modal;