"use client"
import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Partner from "@/components/Partner";
import Main_Image from "@/components/Main_Image"
import Sidewall_explain from "../../public/image/sidewall_explain.png"
import { MdCheckBox } from "react-icons/md";
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import GetInTouch from "@/components/GetInTouch";
import Norway_flag from "../../public/image/Norway (NO).png"
import N_image from "../../public/image/N.png"
import Report_logo from "../../public/image/report_logo.png"
import Tyre_Mask from "../../public/image/tyre-mask.png"
import Done from "@/svg/Done";
import Success_Done from "@/svg/Success_Done"
import Car from "../../public/image/car.png"
import Alert_circle from "@/svg/Alert_circle";
import Cross_circle from "@/svg/Cross_circle";
import Slide_icon from "@/svg/Slide_icon";
import Right_arrow_alt from "@/svg/Right_arrow_alt";
import Orange_car from "@/svg/Orange_car";
import Color_bar_first from "../../public/image/Rectangle 201.png"
import Green_car from "@/svg/Green_car";
import Download_icon from "@/svg/Download_icon";
import Print_icon from "@/svg/Print_icon,";
import Tyre_22 from "../../public/image/tyre(22).png"
import Tyre_23 from "../../public/image/tyre(23).png"
import Tyre_24 from "../../public/image/tyre(24).png"
import Tyre_Info_first from "@/svg/Tyre_Infor_first";
import Tyre_Infor_second from "@/svg/Tyre_Infor_second";
import Tyre_Infor_third from "@/svg/Tyre_Infor_third";
import BackToTop from "@/components/backToTop";

const inter = Inter({ subsets: ["latin"] });
const backend_url = process.env.NEXT_PUBLIC_API_URL

export default function Report() {
    const [inputValue, setInputValue] = useState<string>("");
    const [isValid, setIsValid] = useState<boolean>(true);
    const text1 = "Nomal>=4.5mm";
    const text2 = "4.5mm>Begynner å bli slitt>=1.6mm";
    const text3 = "Farlig/ ulovlig<1.6mm";
    const text4 = "Sideslitt/ ujevn slitasje";
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
    return (
        <div className="home-container flex flex-col">
            <Header />
            <main style={{ "width": '100%' }}>
                <div className="main-container flex flex-col justify-center w-[100%]">
                    <Main_Image />
                    <div className="report-container bg-white flex flex-col">
                        <div className="report-main-infor flex flex-row pr-[262px] pl-[242px] pt-[72px] pb-[25px]">
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
                            <div className="report-licenseplate gap-[16px] flex flex-col items-center">
                                <div className="report-licenseplate-title mt-[-7.5px]"><p className="text-black text-2xl font-normal font-['Inter'] leading-loose">Tast inn ditt RegNr</p></div>
                                <div className="report-licenseplate-content flex flex-row shadow">
                                    <div className="report-licenseplate-content-header w-[93px] flex flex-col gap-[26px] px-[20px] py-[23px] bg-[#3e61a5] rounded-tl rounded-bl justify-center items-center">
                                        <Image alt="Norway flag" src={Norway_flag} className="norway-flag" />
                                        <Image alt="N letter" src={N_image} className="n-letter" />
                                    </div>
                                    <div className="rounded-tr rounded-br licenseplate-input-pan w-[543px] pt-[31px] pl-[26px] pr-[37px] pb-[30px] relative h-[157px] flex justify-center items-center" >
                                        <input className={` uppercase w-full h-full boder-none border-0 focus:outline-none px-[0px] focus:ring-0 border-gray-300 border ${isValid ? "text-[#aaaaaa]" : "text-[#ff0000]"} text-[100px] font-normal z-10 font-['Inter'] leading-[96px]`} pattern="[a-zA-Z]{2}[0-9]{5}$" type="text" maxLength={7} autoFocus id="input-licensplate" name="input -licensplate" value={inputValue} onChange={handleChange} style={{ letterSpacing: "15px", fontFamily: "monospace" }} autoComplete="off" />
                                        {/* <div className="absolute w-[480px] custom-input"></div> */}
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
                            <div className="report-info-logo">
                                <div className="ml-[85px] w-[295px] h-[161px]" style={{ width: "295px", height: "161px" }}>
                                    <Image src={Report_logo} alt="Moss Dekk logo" width={295} height={161} />
                                </div>
                            </div>
                        </div>
                        <div className="bar px-[208px]">
                            <div className="w-full bg-[#D6D6D6] b-1 h-[1px]"></div>
                        </div>
                        <div className="flex flex-col pt-[20px] pr-[225px] pl-[242px] pb-[64px] show-tyre-status-pan">
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
                                            <Image alt="Tyre mask" src={Tyre_Mask} width={365} height={145}></Image>
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
                                            <Image alt="tyre mask" src={Tyre_Mask} width={365} height={145}></Image>
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
                                        <Image alt="Car image" src={Car} width={608.7} height={1036}></Image>

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
                                            <Image alt="car image" src={Tyre_Mask} width={365} height={145}></Image>
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
                                            <Image alt="tyre mask" src={Tyre_Mask} width={365} height={145}></Image>
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
                        <div className="bar tyre-status-bar px-[208px]">
                            <div className="w-full bg-[#D6D6D6] b-1 h-[1px]"></div>
                        </div>
                        <div className="control-report-dekk-panel flex flex-col pt-[37px] pr-[212px] pb-[152px] pl-[242px]">
                            <div className="crdp-title pb-[25px]">
                                <p className="text-4xl text-black leading-10 font-semi-bold">Kontroll Rapport Dekk</p>
                            </div>
                            <div className="crdp-small-title pb-[28px]">
                                <p className="text-lg text-[#6D6D6D] leading-7 font-normal font-['Inter']">Kontroll Rapport Dekk</p>
                            </div>
                            <div className="crdp-main-pan flex flex-row">
                                <div className="crdp-main-pan-bremse flex flex-col border-r-[1px] border-[#AAAAAA] w-[50%]">
                                    <div className="bremse-title pt-[5px] pb-[25px] pl-[38px] border-y-[1px] border-[#AAAAAA]">
                                        <p className="text-lg leading-7 font-normal font-['Inter'] text-[#6D6D6D]">Bremse Lengde</p>
                                    </div>
                                    <div className="din-bil-pan pt-[121px] flex flex-row">
                                        <div className="din-bil-tit pb-[44px]">
                                            <p className="text-lg leading-7 font-normal font-['Inter'] text-[#6D6D6D]">Din bil:</p>
                                        </div>
                                        <div className="din-bil-contain-car flex flex-col justify-center items-center pl-[134px] pr-[172px] pt-[28px]">
                                            <div className="dbcc-car flex flex-row pb-[9.5px]">
                                                <Right_arrow_alt />
                                                <Orange_car />
                                            </div>
                                            <p className="text-lg leading-7 font-normal font-['Inter'] text-black">50m</p>
                                        </div>
                                        <div className="din-bil-text pt-[64.5px]">
                                            <p className="text-lg leading-7 font-normal font-['Inter'] text-black">100m</p>
                                        </div>

                                    </div>
                                    <div className="din-color-bar pr-[50px]">
                                        <Image alt="Color bar" src={Color_bar_first}></Image>
                                    </div>
                                    <div className="ideal-distance-title pt-[8px]">
                                        <p className="text-lg leading-7 font-normal font-['Inter'] text-[#6D6D6D]">Ideel Distanse:</p>
                                    </div>
                                    <div className="din-green-car-first pl-[155px] pt-[23px] flex flex-row">
                                        <Right_arrow_alt />
                                        <Green_car />
                                    </div>
                                    <div className="ideal-distance-text pt-[19px] pb-[27px]">
                                        <p className="text-lg leading-7 font-normal font-['Inter'] text-[#6D6D6D]">Bremse lende på våt føre fra 100 km/t til 60 km/t *</p>
                                    </div>
                                    <div className="vannplanning-title pt-[12px] pb-[18px] border-y-[1px] border-[#AAAAAA]">
                                        <p className="text-lg leading-7 font-normal font-['Inter'] text-[#6D6D6D]">Fare for vannplanning</p>
                                    </div>
                                    <div className="vt-main-pan flex flex-row">
                                        <div className="vt-tit pb-[10px]">
                                            <p className="text-lg leading-7 font-normal font-['Inter'] text-[#6D6D6D]">Din bil:</p>
                                        </div>
                                        <div className="vt-green-car flex flex-row pt-[40px] pl-[13px]">
                                            <Right_arrow_alt />
                                            <Green_car />
                                        </div>

                                    </div>
                                    <div className="three-color-bar flex flex-row mt-[47px]">
                                        <div className="w-[227px] h-[35px] bg-[#008000]"></div>
                                        <div className="w-[227px] h-[35px] bg-[#F0A922]"></div>
                                        <div className="w-[227px] h-[35px] bg-[#EF4225]"></div>
                                    </div>
                                </div>
                                <div className="crdp-main-pan-monster flex flex-col w-[50%]">
                                    <div className="monster-title pt-[14px] pb-[16px] pl-[45px] border-y-[1px] border-[#AAAAAA]">
                                        <p className="text-lg leading-7 font-normal font-['Inter'] text-[#6D6D6D]">Dekk Mønster:</p>
                                    </div>
                                    <div className="ok-icon flex flex-row justify-between items-center pl-[45px] pr-[97.55px] pt-[64.67px] pb-[67.5px]">
                                        <p className="text-lg leading-7 font-normal font-['Inter'] text-[#6D6D6D]">Dekk er OK</p>
                                        <Success_Done />
                                    </div>
                                    <div className="slitasje-title pt-[5px] pb-[30px] pl-[45px] border-y-[1px] border-[#AAAAAA]">
                                        <p className="text-lg leading-7 font-normal font-['Inter'] text-[#6D6D6D]">Dekk Slitasje:</p>
                                    </div>
                                    <div className="slide-icon flex flex-row justify-between items-center pl-[39px] pr-[92px] pt-[64px] pb-[31px]">
                                        <p className="text-lg leading-7 font-normal font-['Inter'] text-[#6D6D6D]">Ujevn slitasje:<br />Venstre bak dekk<br />Høyre bak dekk.</p>
                                        <Slide_icon />
                                    </div>
                                    <div className="slitasje-title pt-[14px] pb-[19px] pl-[42px] border-y-[1px] border-[#AAAAAA]">
                                        <p className="text-lg leading-7 font-normal font-['Inter'] text-[#6D6D6D]">Forslag til utbedring:</p>
                                    </div>
                                </div>
                            </div>
                            <div className="crdp-note flex flex-row pt-[80px] gap-[32px] items-center">
                                <div className="crdp-not-title">
                                    <p className="text-lg leading-7 font-semi-bold text-black"> Note:</p>
                                </div>
                                <div className="crdp-status flex flex-row gap-[20px]">
                                    <div className="crdp-status-item flex flex-row gap-[6px] py-[8px]">
                                        <Success_Done />
                                        <p className="text-lg leading-7 font-normal font-['Inter'] text-[#6D6D6D]">Lav risiko</p>
                                    </div>
                                    <div className="crdp-status-item flex flex-row gap-[6px] py-[8px]">
                                        <Alert_circle />
                                        <p className="text-lg leading-7 font-normal font-['Inter'] text-[#6D6D6D]">Medium risiko</p>
                                    </div>
                                    <div className="crdp-status-item flex flex-row gap-[6px] py-[8px]">
                                        <Cross_circle />
                                        <p className="text-lg leading-7 font-normal font-['Inter'] text-[#6D6D6D]">Høy risiko</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bar control-report-pan-bar px-[208px]" style={{ display: "none" }}>
                            <div className="w-full bg-[#D6D6D6] b-1 h-[1px]"></div>
                        </div>
                        <div className="download-pan flex justify-center items-center">
                            <div className="download-main-pan flex flex-row justify-between items-center pt-[30px] pr-[34px] rounded-[13px] pb-[51px] pl-[51px] bg-[#282828] gap-[252px]">
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
                        <div className="bar download-bar px-[208px] pt-[46px]">
                            <div className="w-full bg-[#D6D6D6] b-1 h-[1px]"></div>
                        </div>
                        <div className="report-product-pan flex flex-col pt-[41px] pl-[239px] pr-[213px] pb-[109px]">
                            <div className="report-product-title pb-[16px]">
                                <p className="text-4xl text-black leading-10 font-semi-bold uppercase">DEKK TILBUD:</p>
                            </div>
                            <div className="rp-list-pan responsive-rplist-pan flex flex-col pb-[12px]">
                                <div className="re-list-title pb-[11px]">
                                    <p className="text-3xl text-black leading-9 font-semi-bold">Budsjett</p>
                                </div>
                                <div className="re-main-list flex flex-row justify-center gap-[22px]">
                                    <div className="main-product-pan  mmp-product-show-first flex flex-col">
                                        <div className="mpp-image bg-[#F5F5F5] w-[276px] h-[312px] relative flex justify-center items-center">
                                            <div className="mpp-image-outback absolute">
                                                <Image alt="Color bar" src={Tyre_22} width={176.52} height={238}></Image>
                                            </div>
                                        </div>
                                        <div className="mpp-main-info w-[276px] h-[336px] bg-[#E4E4E4] flex flex-col py-[11.5px]">
                                            <div className="mmp-recommend-item w-full h-[25px] mb-[19px] flex justify-center items-center">
                                                <div className="mmp-recommend px-[10px] py-[2.5px] rounded-[4px] bg-[#73C018] drop-shadow-2xl">
                                                    <p className="text-sm leading-5 font-normal font-['Inter']">Recommended</p>
                                                </div>
                                            </div>
                                            <div className="mmp-exact-info flex flex-col w-full h-[112px] items-center">
                                                <p className="text-lg leading-7 font-semi-bold text-black">Linglong</p>
                                                <p className="text-lg leading-7 font-semi-bold text-black">Sport Master</p>
                                                <p className="mmp-figures text-lg leading-7 font-normal font-['Inter'] mt-[28px] text-black">205/55-16 91 V</p>
                                            </div>
                                            <div className="mmp-show-tyre-infor flex flex-row justify-center gap-[8px] mt-[19px]">
                                                <div className="mmp-show-tyre-infor-detail flex flex-row gap-[2px]">
                                                    <div className="mmp-show-tyre-infor-detail-svg py-[3.99px] px-[4px] rounded-[2px] bg-white flex justify-center items-center">
                                                        <Tyre_Info_first />
                                                    </div>
                                                    <div className="mmp-show-tyre-infor=detail-figure py-[6px] px-[10.5px] rounded-[2px] flex justify-center items-center bg-[#B0B0B0]">
                                                        <p className="uppercase text-sm leading-5 font-middle text-black">C</p>
                                                    </div>
                                                </div>
                                                <div className="mmp-show-tyre-infor-detail flex flex-row gap-[2px]">
                                                    <div className="mmp-show-tyre-infor-detail-svg py-[3.99px] px-[4px] rounded-[2px] bg-white flex justify-center items-center">
                                                        <Tyre_Infor_second />
                                                    </div>
                                                    <div className="mmp-show-tyre-infor=detail-figure py-[6px] px-[10.5px] rounded-[2px] flex justify-center items-center bg-[#B0B0B0]">
                                                        <p className="uppercase text-sm leading-5 font-middle text-black">68</p>
                                                    </div>
                                                </div>
                                                <div className="mmp-show-tyre-infor-detail flex flex-row gap-[2px]">
                                                    <div className="mmp-show-tyre-infor-detail-svg py-[3.99px] px-[4px] rounded-[2px] bg-white flex justify-center items-center">
                                                        <Tyre_Infor_third />
                                                    </div>
                                                    <div className="mmp-show-tyre-infor=detail-figure py-[6px] px-[10.5px] rounded-[2px] flex justify-center items-center bg-[#B0B0B0]">
                                                        <p className="uppercase text-sm leading-5 font-middle text-black">A</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mmp-price pt-[19px] flex flex-row justify-center">
                                                <p className="text-lg leading-7 font-normal font-['Inter'] text-black">Price: <span className="text-lg leading-7 font-semi-bold text-black">NOK 944</span></p>
                                            </div>
                                            <div className="mmp-btn-group flex flex-row justify-center gap-[8px] pt-[19px]">
                                                <div className="mmp-buy-btn py-[8px] px-[27.5px] rounded-[4px] bg-[#73C018]">
                                                    <p className="text-base leading-6 font-normal font-['Inter'] uppercase">BUY</p>
                                                </div>
                                                <div className="mmp-detail-btn py-[8px] px-[11.5px] rounded-[4px] bg-[#888888]">
                                                    <p className="text-base leading-6 font-normal font-['Inter'] uppercase">DETAILS</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="main-product-pan  mmp-product-show-second flex flex-col">
                                        <div className="mpp-image bg-[#F5F5F5] w-[276px] h-[312px] relative flex justify-center items-center">
                                            <div className="mpp-image-outback absolute">
                                                <Image alt="tire image" src={Tyre_22} width={176.52} height={238}></Image>
                                            </div>
                                        </div>
                                        <div className="mpp-main-info w-[276px] h-[336px] bg-[#E4E4E4] flex flex-col py-[11.5px]">
                                            <div className="mmp-recommend-item w-full h-[25px] mb-[19px] flex justify-center items-center">
                                                <div className="mmp-recommend px-[10px] py-[2.5px] rounded-[4px] bg-[#73C018] drop-shadow-2xl">
                                                    <p className="text-sm leading-5 font-normal font-['Inter']">Recommended</p>
                                                </div>
                                            </div>
                                            <div className="mmp-exact-info flex flex-col w-full h-[112px] items-center">
                                                <p className="text-lg leading-7 font-semi-bold text-black">Linglong</p>
                                                <p className="text-lg leading-7 font-semi-bold text-black">Sport Master</p>
                                                <p className="mmp-figures text-lg leading-7 font-normal font-['Inter'] mt-[28px] text-black">205/55-16 91 V</p>
                                            </div>
                                            <div className="mmp-show-tyre-infor flex flex-row justify-center gap-[8px] mt-[19px]">
                                                <div className="mmp-show-tyre-infor-detail flex flex-row gap-[2px]">
                                                    <div className="mmp-show-tyre-infor-detail-svg py-[3.99px] px-[4px] rounded-[2px] bg-white flex justify-center items-center">
                                                        <Tyre_Info_first />
                                                    </div>
                                                    <div className="mmp-show-tyre-infor=detail-figure py-[6px] px-[10.5px] rounded-[2px] flex justify-center items-center bg-[#B0B0B0]">
                                                        <p className="uppercase text-sm leading-5 font-middle text-black">C</p>
                                                    </div>
                                                </div>
                                                <div className="mmp-show-tyre-infor-detail flex flex-row gap-[2px]">
                                                    <div className="mmp-show-tyre-infor-detail-svg py-[3.99px] px-[4px] rounded-[2px] bg-white flex justify-center items-center">
                                                        <Tyre_Infor_second />
                                                    </div>
                                                    <div className="mmp-show-tyre-infor=detail-figure py-[6px] px-[10.5px] rounded-[2px] flex justify-center items-center bg-[#B0B0B0]">
                                                        <p className="uppercase text-sm leading-5 font-middle text-black">68</p>
                                                    </div>
                                                </div>
                                                <div className="mmp-show-tyre-infor-detail flex flex-row gap-[2px]">
                                                    <div className="mmp-show-tyre-infor-detail-svg py-[3.99px] px-[4px] rounded-[2px] bg-white flex justify-center items-center">
                                                        <Tyre_Infor_third />
                                                    </div>
                                                    <div className="mmp-show-tyre-infor=detail-figure py-[6px] px-[10.5px] rounded-[2px] flex justify-center items-center bg-[#B0B0B0]">
                                                        <p className="uppercase text-sm leading-5 font-middle text-black">A</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mmp-price pt-[19px] flex flex-row justify-center">
                                                <p className="text-lg leading-7 font-normal font-['Inter'] text-black">Price: <span className="text-lg leading-7 font-semi-bold text-black">NOK 944</span></p>
                                            </div>
                                            <div className="mmp-btn-group flex flex-row justify-center gap-[8px] pt-[19px]">
                                                <div className="mmp-buy-btn py-[8px] px-[27.5px] rounded-[4px] bg-[#73C018]">
                                                    <p className="text-base leading-6 font-normal font-['Inter'] uppercase">BUY</p>
                                                </div>
                                                <div className="mmp-detail-btn py-[8px] px-[11.5px] rounded-[4px] bg-[#888888]">
                                                    <p className="text-base leading-6 font-normal font-['Inter'] uppercase">DETAILS</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="main-product-pan  mmp-product-show-third flex flex-col">
                                        <div className="mpp-image bg-[#F5F5F5] w-[276px] h-[312px] relative flex justify-center items-center">
                                            <div className="mpp-image-outback absolute">
                                                <Image alt="tire image" src={Tyre_22} width={176.52} height={238}></Image>
                                            </div>
                                        </div>
                                        <div className="mpp-main-info w-[276px] h-[336px] bg-[#E4E4E4] flex flex-col py-[11.5px]">
                                            <div className="mmp-recommend-item w-full h-[25px] mb-[19px] flex justify-center items-center">
                                                <div className="mmp-recommend px-[10px] py-[2.5px] rounded-[4px] bg-[#73C018] drop-shadow-2xl">
                                                    <p className="text-sm leading-5 font-normal font-['Inter']">Recommended</p>
                                                </div>
                                            </div>
                                            <div className="mmp-exact-info flex flex-col w-full h-[112px] items-center">
                                                <p className="text-lg leading-7 font-semi-bold text-black">Linglong</p>
                                                <p className="text-lg leading-7 font-semi-bold text-black">Sport Master</p>
                                                <p className="mmp-figures text-lg leading-7 font-normal font-['Inter'] mt-[28px] text-black">205/55-16 91 V</p>
                                            </div>
                                            <div className="mmp-show-tyre-infor flex flex-row justify-center gap-[8px] mt-[19px]">
                                                <div className="mmp-show-tyre-infor-detail flex flex-row gap-[2px]">
                                                    <div className="mmp-show-tyre-infor-detail-svg py-[3.99px] px-[4px] rounded-[2px] bg-white flex justify-center items-center">
                                                        <Tyre_Info_first />
                                                    </div>
                                                    <div className="mmp-show-tyre-infor=detail-figure py-[6px] px-[10.5px] rounded-[2px] flex justify-center items-center bg-[#B0B0B0]">
                                                        <p className="uppercase text-sm leading-5 font-middle text-black">C</p>
                                                    </div>
                                                </div>
                                                <div className="mmp-show-tyre-infor-detail flex flex-row gap-[2px]">
                                                    <div className="mmp-show-tyre-infor-detail-svg py-[3.99px] px-[4px] rounded-[2px] bg-white flex justify-center items-center">
                                                        <Tyre_Infor_second />
                                                    </div>
                                                    <div className="mmp-show-tyre-infor=detail-figure py-[6px] px-[10.5px] rounded-[2px] flex justify-center items-center bg-[#B0B0B0]">
                                                        <p className="uppercase text-sm leading-5 font-middle text-black">68</p>
                                                    </div>
                                                </div>
                                                <div className="mmp-show-tyre-infor-detail flex flex-row gap-[2px]">
                                                    <div className="mmp-show-tyre-infor-detail-svg py-[3.99px] px-[4px] rounded-[2px] bg-white flex justify-center items-center">
                                                        <Tyre_Infor_third />
                                                    </div>
                                                    <div className="mmp-show-tyre-infor=detail-figure py-[6px] px-[10.5px] rounded-[2px] flex justify-center items-center bg-[#B0B0B0]">
                                                        <p className="uppercase text-sm leading-5 font-middle text-black">A</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mmp-price pt-[19px] flex flex-row justify-center">
                                                <p className="text-lg leading-7 font-normal font-['Inter'] text-black">Price: <span className="text-lg leading-7 font-semi-bold text-black">NOK 944</span></p>
                                            </div>
                                            <div className="mmp-btn-group flex flex-row justify-center gap-[8px] pt-[19px]">
                                                <div className="mmp-buy-btn py-[8px] px-[27.5px] rounded-[4px] bg-[#73C018]">
                                                    <p className="text-base leading-6 font-normal font-['Inter'] uppercase">BUY</p>
                                                </div>
                                                <div className="mmp-detail-btn py-[8px] px-[11.5px] rounded-[4px] bg-[#888888]">
                                                    <p className="text-base leading-6 font-normal font-['Inter'] uppercase">DETAILS</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="main-product-pan  mmp-product-show-fourth flex flex-col">
                                        <div className="mpp-image bg-[#F5F5F5] w-[276px] h-[312px] relative flex justify-center items-center">
                                            <div className="mpp-image-outback absolute">
                                                <Image alt="tire image" src={Tyre_22} width={176.52} height={238}></Image>
                                            </div>
                                        </div>
                                        <div className="mpp-main-info w-[276px] h-[336px] bg-[#E4E4E4] flex flex-col py-[11.5px]">
                                            <div className="mmp-recommend-item w-full h-[25px] mb-[19px] flex justify-center items-center">
                                                <div className="mmp-recommend px-[10px] py-[2.5px] rounded-[4px] bg-[#73C018] drop-shadow-2xl">
                                                    <p className="text-sm leading-5 font-normal font-['Inter']">Recommended</p>
                                                </div>
                                            </div>
                                            <div className="mmp-exact-info flex flex-col w-full h-[112px] items-center">
                                                <p className="text-lg leading-7 font-semi-bold text-black">Linglong</p>
                                                <p className="text-lg leading-7 font-semi-bold text-black">Sport Master</p>
                                                <p className="mmp-figures text-lg leading-7 font-normal font-['Inter'] mt-[28px] text-black">205/55-16 91 V</p>
                                            </div>
                                            <div className="mmp-show-tyre-infor flex flex-row justify-center gap-[8px] mt-[19px]">
                                                <div className="mmp-show-tyre-infor-detail flex flex-row gap-[2px]">
                                                    <div className="mmp-show-tyre-infor-detail-svg py-[3.99px] px-[4px] rounded-[2px] bg-white flex justify-center items-center">
                                                        <Tyre_Info_first />
                                                    </div>
                                                    <div className="mmp-show-tyre-infor=detail-figure py-[6px] px-[10.5px] rounded-[2px] flex justify-center items-center bg-[#B0B0B0]">
                                                        <p className="uppercase text-sm leading-5 font-middle text-black">C</p>
                                                    </div>
                                                </div>
                                                <div className="mmp-show-tyre-infor-detail flex flex-row gap-[2px]">
                                                    <div className="mmp-show-tyre-infor-detail-svg py-[3.99px] px-[4px] rounded-[2px] bg-white flex justify-center items-center">
                                                        <Tyre_Infor_second />
                                                    </div>
                                                    <div className="mmp-show-tyre-infor=detail-figure py-[6px] px-[10.5px] rounded-[2px] flex justify-center items-center bg-[#B0B0B0]">
                                                        <p className="uppercase text-sm leading-5 font-middle text-black">68</p>
                                                    </div>
                                                </div>
                                                <div className="mmp-show-tyre-infor-detail flex flex-row gap-[2px]">
                                                    <div className="mmp-show-tyre-infor-detail-svg py-[3.99px] px-[4px] rounded-[2px] bg-white flex justify-center items-center">
                                                        <Tyre_Infor_third />
                                                    </div>
                                                    <div className="mmp-show-tyre-infor=detail-figure py-[6px] px-[10.5px] rounded-[2px] flex justify-center items-center bg-[#B0B0B0]">
                                                        <p className="uppercase text-sm leading-5 font-middle text-black">A</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mmp-price pt-[19px] flex flex-row justify-center">
                                                <p className="text-lg leading-7 font-normal font-['Inter'] text-black">Price: <span className="text-lg leading-7 font-semi-bold text-black">NOK 944</span></p>
                                            </div>
                                            <div className="mmp-btn-group flex flex-row justify-center gap-[8px] pt-[19px]">
                                                <div className="mmp-buy-btn py-[8px] px-[27.5px] rounded-[4px] bg-[#73C018]">
                                                    <p className="text-base leading-6 font-normal font-['Inter'] uppercase">BUY</p>
                                                </div>
                                                <div className="mmp-detail-btn py-[8px] px-[11.5px] rounded-[4px] bg-[#888888]">
                                                    <p className="text-base leading-6 font-normal font-['Inter'] uppercase">DETAILS</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="main-product-pan  mmp-product-show-fifth flex flex-col">
                                        <div className="mpp-image bg-[#F5F5F5] w-[276px] h-[312px] relative flex justify-center items-center">
                                            <div className="mpp-image-outback absolute">
                                                <Image alt="tire image" src={Tyre_22} width={176.52} height={238}></Image>
                                            </div>
                                        </div>
                                        <div className="mpp-main-info w-[276px] h-[336px] bg-[#E4E4E4] flex flex-col py-[11.5px]">
                                            <div className="mmp-recommend-item w-full h-[25px] mb-[19px] flex justify-center items-center">
                                                <div className="mmp-recommend px-[10px] py-[2.5px] rounded-[4px] bg-[#73C018] drop-shadow-2xl">
                                                    <p className="text-sm leading-5 font-normal font-['Inter']">Recommended</p>
                                                </div>
                                            </div>
                                            <div className="mmp-exact-info flex flex-col w-full h-[112px] items-center">
                                                <p className="text-lg leading-7 font-semi-bold text-black">Linglong</p>
                                                <p className="text-lg leading-7 font-semi-bold text-black">Sport Master</p>
                                                <p className="mmp-figures text-lg leading-7 font-normal font-['Inter'] mt-[28px] text-black">205/55-16 91 V</p>
                                            </div>
                                            <div className="mmp-show-tyre-infor flex flex-row justify-center gap-[8px] mt-[19px]">
                                                <div className="mmp-show-tyre-infor-detail flex flex-row gap-[2px]">
                                                    <div className="mmp-show-tyre-infor-detail-svg py-[3.99px] px-[4px] rounded-[2px] bg-white flex justify-center items-center">
                                                        <Tyre_Info_first />
                                                    </div>
                                                    <div className="mmp-show-tyre-infor=detail-figure py-[6px] px-[10.5px] rounded-[2px] flex justify-center items-center bg-[#B0B0B0]">
                                                        <p className="uppercase text-sm leading-5 font-middle text-black">C</p>
                                                    </div>
                                                </div>
                                                <div className="mmp-show-tyre-infor-detail flex flex-row gap-[2px]">
                                                    <div className="mmp-show-tyre-infor-detail-svg py-[3.99px] px-[4px] rounded-[2px] bg-white flex justify-center items-center">
                                                        <Tyre_Infor_second />
                                                    </div>
                                                    <div className="mmp-show-tyre-infor=detail-figure py-[6px] px-[10.5px] rounded-[2px] flex justify-center items-center bg-[#B0B0B0]">
                                                        <p className="uppercase text-sm leading-5 font-middle text-black">68</p>
                                                    </div>
                                                </div>
                                                <div className="mmp-show-tyre-infor-detail flex flex-row gap-[2px]">
                                                    <div className="mmp-show-tyre-infor-detail-svg py-[3.99px] px-[4px] rounded-[2px] bg-white flex justify-center items-center">
                                                        <Tyre_Infor_third />
                                                    </div>
                                                    <div className="mmp-show-tyre-infor=detail-figure py-[6px] px-[10.5px] rounded-[2px] flex justify-center items-center bg-[#B0B0B0]">
                                                        <p className="uppercase text-sm leading-5 font-middle text-black">A</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mmp-price pt-[19px] flex flex-row justify-center">
                                                <p className="text-lg leading-7 font-normal font-['Inter'] text-black">Price: <span className="text-lg leading-7 font-semi-bold text-black">NOK 944</span></p>
                                            </div>
                                            <div className="mmp-btn-group flex flex-row justify-center gap-[8px] pt-[19px]">
                                                <div className="mmp-buy-btn py-[8px] px-[27.5px] rounded-[4px] bg-[#73C018]">
                                                    <p className="text-base leading-6 font-normal font-['Inter'] uppercase">BUY</p>
                                                </div>
                                                <div className="mmp-detail-btn py-[8px] px-[11.5px] rounded-[4px] bg-[#888888]">
                                                    <p className="text-base leading-6 font-normal font-['Inter'] uppercase">DETAILS</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="rp-list-pan responsive-rplist-pan flex flex-col pb-[12px]">
                                <div className="re-list-title pb-[11px]">
                                    <p className="text-3xl text-black leading-9 font-semi-bold">Kuvalitet</p>
                                </div>
                                <div className="re-main-list flex flex-row justify-center gap-[22px]">
                                    <div className="main-product-pan  mmp-product-show-first flex flex-col">
                                        <div className="mpp-image bg-[#F5F5F5] w-[276px] h-[312px] relative flex justify-center items-center">
                                            <div className="mpp-image-outback absolute">
                                                <Image alt="tire image" src={Tyre_23} width={176.52} height={238}></Image>
                                            </div>
                                        </div>
                                        <div className="mpp-main-info w-[276px] h-[336px] bg-[#E4E4E4] flex flex-col py-[11.5px]">
                                            <div className="mmp-recommend-item w-full h-[25px] mb-[19px] flex justify-center items-center">
                                                <div className="mmp-recommend px-[10px] py-[2.5px] rounded-[4px] bg-[#73C018] drop-shadow-2xl">
                                                    <p className="text-sm leading-5 font-normal font-['Inter']">Recommended</p>
                                                </div>
                                            </div>
                                            <div className="mmp-exact-info flex flex-col w-full h-[112px] items-center">
                                                <p className="text-lg leading-7 font-semi-bold text-black">Linglong</p>
                                                <p className="text-lg leading-7 font-semi-bold text-black">Sport Master</p>
                                                <p className="mmp-figures text-lg leading-7 font-normal font-['Inter'] mt-[28px] text-black">205/55-16 91 V</p>
                                            </div>
                                            <div className="mmp-show-tyre-infor flex flex-row justify-center gap-[8px] mt-[19px]">
                                                <div className="mmp-show-tyre-infor-detail flex flex-row gap-[2px]">
                                                    <div className="mmp-show-tyre-infor-detail-svg py-[3.99px] px-[4px] rounded-[2px] bg-white flex justify-center items-center">
                                                        <Tyre_Info_first />
                                                    </div>
                                                    <div className="mmp-show-tyre-infor=detail-figure py-[6px] px-[10.5px] rounded-[2px] flex justify-center items-center bg-[#B0B0B0]">
                                                        <p className="uppercase text-sm leading-5 font-middle text-black">C</p>
                                                    </div>
                                                </div>
                                                <div className="mmp-show-tyre-infor-detail flex flex-row gap-[2px]">
                                                    <div className="mmp-show-tyre-infor-detail-svg py-[3.99px] px-[4px] rounded-[2px] bg-white flex justify-center items-center">
                                                        <Tyre_Infor_second />
                                                    </div>
                                                    <div className="mmp-show-tyre-infor=detail-figure py-[6px] px-[10.5px] rounded-[2px] flex justify-center items-center bg-[#B0B0B0]">
                                                        <p className="uppercase text-sm leading-5 font-middle text-black">69</p>
                                                    </div>
                                                </div>
                                                <div className="mmp-show-tyre-infor-detail flex flex-row gap-[2px]">
                                                    <div className="mmp-show-tyre-infor-detail-svg py-[3.99px] px-[4px] rounded-[2px] bg-white flex justify-center items-center">
                                                        <Tyre_Infor_third />
                                                    </div>
                                                    <div className="mmp-show-tyre-infor=detail-figure py-[6px] px-[10.5px] rounded-[2px] flex justify-center items-center bg-[#B0B0B0]">
                                                        <p className="uppercase text-sm leading-5 font-middle text-black">A</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mmp-price pt-[19px] flex flex-row justify-center">
                                                <p className="text-lg leading-7 font-normal font-['Inter'] text-black">Price: <span className="text-lg leading-7 font-semi-bold text-black">NOK 1180</span></p>
                                            </div>
                                            <div className="mmp-btn-group flex flex-row justify-center gap-[8px] pt-[19px]">
                                                <div className="mmp-buy-btn py-[8px] px-[27.5px] rounded-[4px] bg-[#73C018]">
                                                    <p className="text-base leading-6 font-normal font-['Inter'] uppercase">BUY</p>
                                                </div>
                                                <div className="mmp-detail-btn py-[8px] px-[11.5px] rounded-[4px] bg-[#888888]">
                                                    <p className="text-base leading-6 font-normal font-['Inter'] uppercase">DETAILS</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="main-product-pan  mmp-product-show-second flex flex-col">
                                        <div className="mpp-image bg-[#F5F5F5] w-[276px] h-[312px] relative flex justify-center items-center">
                                            <div className="mpp-image-outback absolute">
                                                <Image alt="tire image" src={Tyre_23} width={176.52} height={238}></Image>
                                            </div>
                                        </div>
                                        <div className="mpp-main-info w-[276px] h-[336px] bg-[#E4E4E4] flex flex-col py-[11.5px]">
                                            <div className="mmp-recommend-item w-full h-[25px] mb-[19px] flex justify-center items-center">
                                                <div className="mmp-recommend px-[10px] py-[2.5px] rounded-[4px] bg-[#73C018] drop-shadow-2xl">
                                                    <p className="text-sm leading-5 font-normal font-['Inter']">Recommended</p>
                                                </div>
                                            </div>
                                            <div className="mmp-exact-info flex flex-col w-full h-[112px] items-center">
                                                <p className="text-lg leading-7 font-semi-bold text-black">Linglong</p>
                                                <p className="text-lg leading-7 font-semi-bold text-black">Sport Master</p>
                                                <p className="mmp-figures text-lg leading-7 font-normal font-['Inter'] mt-[28px] text-black">205/55-16 91 V</p>
                                            </div>
                                            <div className="mmp-show-tyre-infor flex flex-row justify-center gap-[8px] mt-[19px]">
                                                <div className="mmp-show-tyre-infor-detail flex flex-row gap-[2px]">
                                                    <div className="mmp-show-tyre-infor-detail-svg py-[3.99px] px-[4px] rounded-[2px] bg-white flex justify-center items-center">
                                                        <Tyre_Info_first />
                                                    </div>
                                                    <div className="mmp-show-tyre-infor=detail-figure py-[6px] px-[10.5px] rounded-[2px] flex justify-center items-center bg-[#B0B0B0]">
                                                        <p className="uppercase text-sm leading-5 font-middle text-black">C</p>
                                                    </div>
                                                </div>
                                                <div className="mmp-show-tyre-infor-detail flex flex-row gap-[2px]">
                                                    <div className="mmp-show-tyre-infor-detail-svg py-[3.99px] px-[4px] rounded-[2px] bg-white flex justify-center items-center">
                                                        <Tyre_Infor_second />
                                                    </div>
                                                    <div className="mmp-show-tyre-infor=detail-figure py-[6px] px-[10.5px] rounded-[2px] flex justify-center items-center bg-[#B0B0B0]">
                                                        <p className="uppercase text-sm leading-5 font-middle text-black">69</p>
                                                    </div>
                                                </div>
                                                <div className="mmp-show-tyre-infor-detail flex flex-row gap-[2px]">
                                                    <div className="mmp-show-tyre-infor-detail-svg py-[3.99px] px-[4px] rounded-[2px] bg-white flex justify-center items-center">
                                                        <Tyre_Infor_third />
                                                    </div>
                                                    <div className="mmp-show-tyre-infor=detail-figure py-[6px] px-[10.5px] rounded-[2px] flex justify-center items-center bg-[#B0B0B0]">
                                                        <p className="uppercase text-sm leading-5 font-middle text-black">A</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mmp-price pt-[19px] flex flex-row justify-center">
                                                <p className="text-lg leading-7 font-normal font-['Inter'] text-black">Price: <span className="text-lg leading-7 font-semi-bold text-black">NOK 1180</span></p>
                                            </div>
                                            <div className="mmp-btn-group flex flex-row justify-center gap-[8px] pt-[19px]">
                                                <div className="mmp-buy-btn py-[8px] px-[27.5px] rounded-[4px] bg-[#73C018]">
                                                    <p className="text-base leading-6 font-normal font-['Inter'] uppercase">BUY</p>
                                                </div>
                                                <div className="mmp-detail-btn py-[8px] px-[11.5px] rounded-[4px] bg-[#888888]">
                                                    <p className="text-base leading-6 font-normal font-['Inter'] uppercase">DETAILS</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="main-product-pan  mmp-product-show-third flex flex-col">
                                        <div className="mpp-image bg-[#F5F5F5] w-[276px] h-[312px] relative flex justify-center items-center">
                                            <div className="mpp-image-outback absolute">
                                                <Image alt="tire image" src={Tyre_23} width={176.52} height={238}></Image>
                                            </div>
                                        </div>
                                        <div className="mpp-main-info w-[276px] h-[336px] bg-[#E4E4E4] flex flex-col py-[11.5px]">
                                            <div className="mmp-recommend-item w-full h-[25px] mb-[19px] flex justify-center items-center">
                                                <div className="mmp-recommend px-[10px] py-[2.5px] rounded-[4px] bg-[#73C018] drop-shadow-2xl">
                                                    <p className="text-sm leading-5 font-normal font-['Inter']">Recommended</p>
                                                </div>
                                            </div>
                                            <div className="mmp-exact-info flex flex-col w-full h-[112px] items-center">
                                                <p className="text-lg leading-7 font-semi-bold text-black">Linglong</p>
                                                <p className="text-lg leading-7 font-semi-bold text-black">Sport Master</p>
                                                <p className="mmp-figures text-lg leading-7 font-normal font-['Inter'] mt-[28px] text-black">205/55-16 91 V</p>
                                            </div>
                                            <div className="mmp-show-tyre-infor flex flex-row justify-center gap-[8px] mt-[19px]">
                                                <div className="mmp-show-tyre-infor-detail flex flex-row gap-[2px]">
                                                    <div className="mmp-show-tyre-infor-detail-svg py-[3.99px] px-[4px] rounded-[2px] bg-white flex justify-center items-center">
                                                        <Tyre_Info_first />
                                                    </div>
                                                    <div className="mmp-show-tyre-infor=detail-figure py-[6px] px-[10.5px] rounded-[2px] flex justify-center items-center bg-[#B0B0B0]">
                                                        <p className="uppercase text-sm leading-5 font-middle text-black">C</p>
                                                    </div>
                                                </div>
                                                <div className="mmp-show-tyre-infor-detail flex flex-row gap-[2px]">
                                                    <div className="mmp-show-tyre-infor-detail-svg py-[3.99px] px-[4px] rounded-[2px] bg-white flex justify-center items-center">
                                                        <Tyre_Infor_second />
                                                    </div>
                                                    <div className="mmp-show-tyre-infor=detail-figure py-[6px] px-[10.5px] rounded-[2px] flex justify-center items-center bg-[#B0B0B0]">
                                                        <p className="uppercase text-sm leading-5 font-middle text-black">69</p>
                                                    </div>
                                                </div>
                                                <div className="mmp-show-tyre-infor-detail flex flex-row gap-[2px]">
                                                    <div className="mmp-show-tyre-infor-detail-svg py-[3.99px] px-[4px] rounded-[2px] bg-white flex justify-center items-center">
                                                        <Tyre_Infor_third />
                                                    </div>
                                                    <div className="mmp-show-tyre-infor=detail-figure py-[6px] px-[10.5px] rounded-[2px] flex justify-center items-center bg-[#B0B0B0]">
                                                        <p className="uppercase text-sm leading-5 font-middle text-black">A</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mmp-price pt-[19px] flex flex-row justify-center">
                                                <p className="text-lg leading-7 font-normal font-['Inter'] text-black">Price: <span className="text-lg leading-7 font-semi-bold text-black">NOK 1180</span></p>
                                            </div>
                                            <div className="mmp-btn-group flex flex-row justify-center gap-[8px] pt-[19px]">
                                                <div className="mmp-buy-btn py-[8px] px-[27.5px] rounded-[4px] bg-[#73C018]">
                                                    <p className="text-base leading-6 font-normal font-['Inter'] uppercase">BUY</p>
                                                </div>
                                                <div className="mmp-detail-btn py-[8px] px-[11.5px] rounded-[4px] bg-[#888888]">
                                                    <p className="text-base leading-6 font-normal font-['Inter'] uppercase">DETAILS</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="main-product-pan  mmp-product-show-fourth flex flex-col">
                                        <div className="mpp-image bg-[#F5F5F5] w-[276px] h-[312px] relative flex justify-center items-center">
                                            <div className="mpp-image-outback absolute">
                                                <Image alt="tire image" src={Tyre_23} width={176.52} height={238}></Image>
                                            </div>
                                        </div>
                                        <div className="mpp-main-info w-[276px] h-[336px] bg-[#E4E4E4] flex flex-col py-[11.5px]">
                                            <div className="mmp-recommend-item w-full h-[25px] mb-[19px] flex justify-center items-center">
                                                <div className="mmp-recommend px-[10px] py-[2.5px] rounded-[4px] bg-[#73C018] drop-shadow-2xl">
                                                    <p className="text-sm leading-5 font-normal font-['Inter']">Recommended</p>
                                                </div>
                                            </div>
                                            <div className="mmp-exact-info flex flex-col w-full h-[112px] items-center">
                                                <p className="text-lg leading-7 font-semi-bold text-black">Linglong</p>
                                                <p className="text-lg leading-7 font-semi-bold text-black">Sport Master</p>
                                                <p className="mmp-figures text-lg leading-7 font-normal font-['Inter'] mt-[28px] text-black">205/55-16 91 V</p>
                                            </div>
                                            <div className="mmp-show-tyre-infor flex flex-row justify-center gap-[8px] mt-[19px]">
                                                <div className="mmp-show-tyre-infor-detail flex flex-row gap-[2px]">
                                                    <div className="mmp-show-tyre-infor-detail-svg py-[3.99px] px-[4px] rounded-[2px] bg-white flex justify-center items-center">
                                                        <Tyre_Info_first />
                                                    </div>
                                                    <div className="mmp-show-tyre-infor=detail-figure py-[6px] px-[10.5px] rounded-[2px] flex justify-center items-center bg-[#B0B0B0]">
                                                        <p className="uppercase text-sm leading-5 font-middle text-black">C</p>
                                                    </div>
                                                </div>
                                                <div className="mmp-show-tyre-infor-detail flex flex-row gap-[2px]">
                                                    <div className="mmp-show-tyre-infor-detail-svg py-[3.99px] px-[4px] rounded-[2px] bg-white flex justify-center items-center">
                                                        <Tyre_Infor_second />
                                                    </div>
                                                    <div className="mmp-show-tyre-infor=detail-figure py-[6px] px-[10.5px] rounded-[2px] flex justify-center items-center bg-[#B0B0B0]">
                                                        <p className="uppercase text-sm leading-5 font-middle text-black">69</p>
                                                    </div>
                                                </div>
                                                <div className="mmp-show-tyre-infor-detail flex flex-row gap-[2px]">
                                                    <div className="mmp-show-tyre-infor-detail-svg py-[3.99px] px-[4px] rounded-[2px] bg-white flex justify-center items-center">
                                                        <Tyre_Infor_third />
                                                    </div>
                                                    <div className="mmp-show-tyre-infor=detail-figure py-[6px] px-[10.5px] rounded-[2px] flex justify-center items-center bg-[#B0B0B0]">
                                                        <p className="uppercase text-sm leading-5 font-middle text-black">A</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mmp-price pt-[19px] flex flex-row justify-center">
                                                <p className="text-lg leading-7 font-normal font-['Inter'] text-black">Price: <span className="text-lg leading-7 font-semi-bold text-black">NOK 1180</span></p>
                                            </div>
                                            <div className="mmp-btn-group flex flex-row justify-center gap-[8px] pt-[19px]">
                                                <div className="mmp-buy-btn py-[8px] px-[27.5px] rounded-[4px] bg-[#73C018]">
                                                    <p className="text-base leading-6 font-normal font-['Inter'] uppercase">BUY</p>
                                                </div>
                                                <div className="mmp-detail-btn py-[8px] px-[11.5px] rounded-[4px] bg-[#888888]">
                                                    <p className="text-base leading-6 font-normal font-['Inter'] uppercase">DETAILS</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="main-product-pan  mmp-product-show-fifth flex flex-col">
                                        <div className="mpp-image bg-[#F5F5F5] w-[276px] h-[312px] relative flex justify-center items-center">
                                            <div className="mpp-image-outback absolute">
                                                <Image alt="tire image" src={Tyre_23} width={176.52} height={238}></Image>
                                            </div>
                                        </div>
                                        <div className="mpp-main-info w-[276px] h-[336px] bg-[#E4E4E4] flex flex-col py-[11.5px]">
                                            <div className="mmp-recommend-item w-full h-[25px] mb-[19px] flex justify-center items-center">
                                                <div className="mmp-recommend px-[10px] py-[2.5px] rounded-[4px] bg-[#73C018] drop-shadow-2xl">
                                                    <p className="text-sm leading-5 font-normal font-['Inter']">Recommended</p>
                                                </div>
                                            </div>
                                            <div className="mmp-exact-info flex flex-col w-full h-[112px] items-center">
                                                <p className="text-lg leading-7 font-semi-bold text-black">Linglong</p>
                                                <p className="text-lg leading-7 font-semi-bold text-black">Sport Master</p>
                                                <p className="mmp-figures text-lg leading-7 font-normal font-['Inter'] mt-[28px] text-black">205/55-16 91 V</p>
                                            </div>
                                            <div className="mmp-show-tyre-infor flex flex-row justify-center gap-[8px] mt-[19px]">
                                                <div className="mmp-show-tyre-infor-detail flex flex-row gap-[2px]">
                                                    <div className="mmp-show-tyre-infor-detail-svg py-[3.99px] px-[4px] rounded-[2px] bg-white flex justify-center items-center">
                                                        <Tyre_Info_first />
                                                    </div>
                                                    <div className="mmp-show-tyre-infor=detail-figure py-[6px] px-[10.5px] rounded-[2px] flex justify-center items-center bg-[#B0B0B0]">
                                                        <p className="uppercase text-sm leading-5 font-middle text-black">C</p>
                                                    </div>
                                                </div>
                                                <div className="mmp-show-tyre-infor-detail flex flex-row gap-[2px]">
                                                    <div className="mmp-show-tyre-infor-detail-svg py-[3.99px] px-[4px] rounded-[2px] bg-white flex justify-center items-center">
                                                        <Tyre_Infor_second />
                                                    </div>
                                                    <div className="mmp-show-tyre-infor=detail-figure py-[6px] px-[10.5px] rounded-[2px] flex justify-center items-center bg-[#B0B0B0]">
                                                        <p className="uppercase text-sm leading-5 font-middle text-black">69</p>
                                                    </div>
                                                </div>
                                                <div className="mmp-show-tyre-infor-detail flex flex-row gap-[2px]">
                                                    <div className="mmp-show-tyre-infor-detail-svg py-[3.99px] px-[4px] rounded-[2px] bg-white flex justify-center items-center">
                                                        <Tyre_Infor_third />
                                                    </div>
                                                    <div className="mmp-show-tyre-infor=detail-figure py-[6px] px-[10.5px] rounded-[2px] flex justify-center items-center bg-[#B0B0B0]">
                                                        <p className="uppercase text-sm leading-5 font-middle text-black">A</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mmp-price pt-[19px] flex flex-row justify-center">
                                                <p className="text-lg leading-7 font-normal font-['Inter'] text-black">Price: <span className="text-lg leading-7 font-semi-bold text-black">NOK 1180</span></p>
                                            </div>
                                            <div className="mmp-btn-group flex flex-row justify-center gap-[8px] pt-[19px]">
                                                <div className="mmp-buy-btn py-[8px] px-[27.5px] rounded-[4px] bg-[#73C018]">
                                                    <p className="text-base leading-6 font-normal font-['Inter'] uppercase">BUY</p>
                                                </div>
                                                <div className="mmp-detail-btn py-[8px] px-[11.5px] rounded-[4px] bg-[#888888]">
                                                    <p className="text-base leading-6 font-normal font-['Inter'] uppercase">DETAILS</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="rp-list-pan flex flex-col">
                                <div className="re-list-title pb-[11px]">
                                    <p className="text-3xl text-black leading-9 font-semi-bold">Premium</p>
                                </div>
                                <div className="re-main-list flex flex-row justify-center gap-[22px]">
                                    <div className="main-product-pan  mmp-product-show-first flex flex-col">
                                        <div className="mpp-image bg-[#F5F5F5] w-[276px] h-[312px] relative flex justify-center items-center">
                                            <div className="mpp-image-outback absolute">
                                                <Image alt="tire image" src={Tyre_24} width={176.52} height={238}></Image>
                                            </div>
                                        </div>
                                        <div className="mpp-main-info w-[276px] h-[336px] bg-[#E4E4E4] flex flex-col py-[11.5px]">
                                            <div className="mmp-recommend-item w-full h-[25px] mb-[19px] flex justify-center items-center">
                                                <div className="mmp-recommend px-[10px] py-[2.5px] rounded-[4px] bg-[#73C018] drop-shadow-2xl">
                                                    <p className="text-sm leading-5 font-normal font-['Inter']">Recommended</p>
                                                </div>
                                            </div>
                                            <div className="mmp-exact-info flex flex-col w-full h-[112px] items-center">
                                                <p className="text-lg leading-7 font-semi-bold text-black">Goodyear</p>
                                                <p className="text-lg leading-7 font-semi-bold text-black">EfficientGrip Performance 2</p>
                                                <p className="mmp-figures text-lg leading-7 font-normal font-['Inter'] mt-[28px] text-black">205/55-16 91 W</p>
                                            </div>
                                            <div className="mmp-show-tyre-infor flex flex-row justify-center gap-[8px] mt-[19px]">
                                                <div className="mmp-show-tyre-infor-detail flex flex-row gap-[2px]">
                                                    <div className="mmp-show-tyre-infor-detail-svg py-[3.99px] px-[4px] rounded-[2px] bg-white flex justify-center items-center">
                                                        <Tyre_Info_first />
                                                    </div>
                                                    <div className="mmp-show-tyre-infor=detail-figure py-[6px] px-[10.5px] rounded-[2px] flex justify-center items-center bg-[#B0B0B0]">
                                                        <p className="uppercase text-sm leading-5 font-middle text-black">B</p>
                                                    </div>
                                                </div>
                                                <div className="mmp-show-tyre-infor-detail flex flex-row gap-[2px]">
                                                    <div className="mmp-show-tyre-infor-detail-svg py-[3.99px] px-[4px] rounded-[2px] bg-white flex justify-center items-center">
                                                        <Tyre_Infor_second />
                                                    </div>
                                                    <div className="mmp-show-tyre-infor=detail-figure py-[6px] px-[10.5px] rounded-[2px] flex justify-center items-center bg-[#B0B0B0]">
                                                        <p className="uppercase text-sm leading-5 font-middle text-black">69</p>
                                                    </div>
                                                </div>
                                                <div className="mmp-show-tyre-infor-detail flex flex-row gap-[2px]">
                                                    <div className="mmp-show-tyre-infor-detail-svg py-[3.99px] px-[4px] rounded-[2px] bg-white flex justify-center items-center">
                                                        <Tyre_Infor_third />
                                                    </div>
                                                    <div className="mmp-show-tyre-infor=detail-figure py-[6px] px-[10.5px] rounded-[2px] flex justify-center items-center bg-[#B0B0B0]">
                                                        <p className="uppercase text-sm leading-5 font-middle text-black">A</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mmp-price pt-[19px] flex flex-row justify-center">
                                                <p className="text-lg leading-7 font-normal font-['Inter'] text-black">Price: <span className="text-lg leading-7 font-semi-bold text-black">NOK 1520</span></p>
                                            </div>
                                            <div className="mmp-btn-group flex flex-row justify-center gap-[8px] pt-[19px]">
                                                <div className="mmp-buy-btn py-[8px] px-[27.5px] rounded-[4px] bg-[#73C018]">
                                                    <p className="text-base leading-6 font-normal font-['Inter'] uppercase">BUY</p>
                                                </div>
                                                <div className="mmp-detail-btn py-[8px] px-[11.5px] rounded-[4px] bg-[#888888]">
                                                    <p className="text-base leading-6 font-normal font-['Inter'] uppercase">DETAILS</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="main-product-pan  mmp-product-show-second flex flex-col">
                                        <div className="mpp-image bg-[#F5F5F5] w-[276px] h-[312px] relative flex justify-center items-center">
                                            <div className="mpp-image-outback absolute">
                                                <Image alt="tire image" src={Tyre_24} width={176.52} height={238}></Image>
                                            </div>
                                        </div>
                                        <div className="mpp-main-info w-[276px] h-[336px] bg-[#E4E4E4] flex flex-col py-[11.5px]">
                                            <div className="mmp-recommend-item w-full h-[25px] mb-[19px] flex justify-center items-center">
                                                <div className="mmp-recommend px-[10px] py-[2.5px] rounded-[4px] bg-[#73C018] drop-shadow-2xl">
                                                    <p className="text-sm leading-5 font-normal font-['Inter']">Recommended</p>
                                                </div>
                                            </div>
                                            <div className="mmp-exact-info flex flex-col w-full h-[112px] items-center">
                                                <p className="text-lg leading-7 font-semi-bold text-black">Goodyear</p>
                                                <p className="text-lg leading-7 font-semi-bold text-black">EfficientGrip Performance 2</p>
                                                <p className="mmp-figures text-lg leading-7 font-normal font-['Inter'] mt-[28px] text-black">205/55-16 91 W</p>
                                            </div>
                                            <div className="mmp-show-tyre-infor flex flex-row justify-center gap-[8px] mt-[19px]">
                                                <div className="mmp-show-tyre-infor-detail flex flex-row gap-[2px]">
                                                    <div className="mmp-show-tyre-infor-detail-svg py-[3.99px] px-[4px] rounded-[2px] bg-white flex justify-center items-center">
                                                        <Tyre_Info_first />
                                                    </div>
                                                    <div className="mmp-show-tyre-infor=detail-figure py-[6px] px-[10.5px] rounded-[2px] flex justify-center items-center bg-[#B0B0B0]">
                                                        <p className="uppercase text-sm leading-5 font-middle text-black">B</p>
                                                    </div>
                                                </div>
                                                <div className="mmp-show-tyre-infor-detail flex flex-row gap-[2px]">
                                                    <div className="mmp-show-tyre-infor-detail-svg py-[3.99px] px-[4px] rounded-[2px] bg-white flex justify-center items-center">
                                                        <Tyre_Infor_second />
                                                    </div>
                                                    <div className="mmp-show-tyre-infor=detail-figure py-[6px] px-[10.5px] rounded-[2px] flex justify-center items-center bg-[#B0B0B0]">
                                                        <p className="uppercase text-sm leading-5 font-middle text-black">69</p>
                                                    </div>
                                                </div>
                                                <div className="mmp-show-tyre-infor-detail flex flex-row gap-[2px]">
                                                    <div className="mmp-show-tyre-infor-detail-svg py-[3.99px] px-[4px] rounded-[2px] bg-white flex justify-center items-center">
                                                        <Tyre_Infor_third />
                                                    </div>
                                                    <div className="mmp-show-tyre-infor=detail-figure py-[6px] px-[10.5px] rounded-[2px] flex justify-center items-center bg-[#B0B0B0]">
                                                        <p className="uppercase text-sm leading-5 font-middle text-black">A</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mmp-price pt-[19px] flex flex-row justify-center">
                                                <p className="text-lg leading-7 font-normal font-['Inter'] text-black">Price: <span className="text-lg leading-7 font-semi-bold text-black">NOK 1520</span></p>
                                            </div>
                                            <div className="mmp-btn-group flex flex-row justify-center gap-[8px] pt-[19px]">
                                                <div className="mmp-buy-btn py-[8px] px-[27.5px] rounded-[4px] bg-[#73C018]">
                                                    <p className="text-base leading-6 font-normal font-['Inter'] uppercase">BUY</p>
                                                </div>
                                                <div className="mmp-detail-btn py-[8px] px-[11.5px] rounded-[4px] bg-[#888888]">
                                                    <p className="text-base leading-6 font-normal font-['Inter'] uppercase">DETAILS</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="main-product-pan  mmp-product-show-third flex flex-col">
                                        <div className="mpp-image bg-[#F5F5F5] w-[276px] h-[312px] relative flex justify-center items-center">
                                            <div className="mpp-image-outback absolute">
                                                <Image alt="tire image" src={Tyre_24} width={176.52} height={238}></Image>
                                            </div>
                                        </div>
                                        <div className="mpp-main-info w-[276px] h-[336px] bg-[#E4E4E4] flex flex-col py-[11.5px]">
                                            <div className="mmp-recommend-item w-full h-[25px] mb-[19px] flex justify-center items-center">
                                                <div className="mmp-recommend px-[10px] py-[2.5px] rounded-[4px] bg-[#73C018] drop-shadow-2xl">
                                                    <p className="text-sm leading-5 font-normal font-['Inter']">Recommended</p>
                                                </div>
                                            </div>
                                            <div className="mmp-exact-info flex flex-col w-full h-[112px] items-center">
                                                <p className="text-lg leading-7 font-semi-bold text-black">Goodyear</p>
                                                <p className="text-lg leading-7 font-semi-bold text-black">EfficientGrip Performance 2</p>
                                                <p className="mmp-figures text-lg leading-7 font-normal font-['Inter'] mt-[28px] text-black">205/55-16 91 W</p>
                                            </div>
                                            <div className="mmp-show-tyre-infor flex flex-row justify-center gap-[8px] mt-[19px]">
                                                <div className="mmp-show-tyre-infor-detail flex flex-row gap-[2px]">
                                                    <div className="mmp-show-tyre-infor-detail-svg py-[3.99px] px-[4px] rounded-[2px] bg-white flex justify-center items-center">
                                                        <Tyre_Info_first />
                                                    </div>
                                                    <div className="mmp-show-tyre-infor=detail-figure py-[6px] px-[10.5px] rounded-[2px] flex justify-center items-center bg-[#B0B0B0]">
                                                        <p className="uppercase text-sm leading-5 font-middle text-black">B</p>
                                                    </div>
                                                </div>
                                                <div className="mmp-show-tyre-infor-detail flex flex-row gap-[2px]">
                                                    <div className="mmp-show-tyre-infor-detail-svg py-[3.99px] px-[4px] rounded-[2px] bg-white flex justify-center items-center">
                                                        <Tyre_Infor_second />
                                                    </div>
                                                    <div className="mmp-show-tyre-infor=detail-figure py-[6px] px-[10.5px] rounded-[2px] flex justify-center items-center bg-[#B0B0B0]">
                                                        <p className="uppercase text-sm leading-5 font-middle text-black">69</p>
                                                    </div>
                                                </div>
                                                <div className="mmp-show-tyre-infor-detail flex flex-row gap-[2px]">
                                                    <div className="mmp-show-tyre-infor-detail-svg py-[3.99px] px-[4px] rounded-[2px] bg-white flex justify-center items-center">
                                                        <Tyre_Infor_third />
                                                    </div>
                                                    <div className="mmp-show-tyre-infor=detail-figure py-[6px] px-[10.5px] rounded-[2px] flex justify-center items-center bg-[#B0B0B0]">
                                                        <p className="uppercase text-sm leading-5 font-middle text-black">A</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mmp-price pt-[19px] flex flex-row justify-center">
                                                <p className="text-lg leading-7 font-normal font-['Inter'] text-black">Price: <span className="text-lg leading-7 font-semi-bold text-black">NOK 1520</span></p>
                                            </div>
                                            <div className="mmp-btn-group flex flex-row justify-center gap-[8px] pt-[19px]">
                                                <div className="mmp-buy-btn py-[8px] px-[27.5px] rounded-[4px] bg-[#73C018]">
                                                    <p className="text-base leading-6 font-normal font-['Inter'] uppercase">BUY</p>
                                                </div>
                                                <div className="mmp-detail-btn py-[8px] px-[11.5px] rounded-[4px] bg-[#888888]">
                                                    <p className="text-base leading-6 font-normal font-['Inter'] uppercase">DETAILS</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="main-product-pan  mmp-product-show-fourth flex flex-col">
                                        <div className="mpp-image bg-[#F5F5F5] w-[276px] h-[312px] relative flex justify-center items-center">
                                            <div className="mpp-image-outback absolute">
                                                <Image alt="tire image" src={Tyre_24} width={176.52} height={238}></Image>
                                            </div>
                                        </div>
                                        <div className="mpp-main-info w-[276px] h-[336px] bg-[#E4E4E4] flex flex-col py-[11.5px]">
                                            <div className="mmp-recommend-item w-full h-[25px] mb-[19px] flex justify-center items-center">
                                                <div className="mmp-recommend px-[10px] py-[2.5px] rounded-[4px] bg-[#73C018] drop-shadow-2xl">
                                                    <p className="text-sm leading-5 font-normal font-['Inter']">Recommended</p>
                                                </div>
                                            </div>
                                            <div className="mmp-exact-info flex flex-col w-full h-[112px] items-center">
                                                <p className="text-lg leading-7 font-semi-bold text-black">Goodyear</p>
                                                <p className="text-lg leading-7 font-semi-bold text-black">EfficientGrip Performance 2</p>
                                                <p className="mmp-figures text-lg leading-7 font-normal font-['Inter'] mt-[28px] text-black">205/55-16 91 W</p>
                                            </div>
                                            <div className="mmp-show-tyre-infor flex flex-row justify-center gap-[8px] mt-[19px]">
                                                <div className="mmp-show-tyre-infor-detail flex flex-row gap-[2px]">
                                                    <div className="mmp-show-tyre-infor-detail-svg py-[3.99px] px-[4px] rounded-[2px] bg-white flex justify-center items-center">
                                                        <Tyre_Info_first />
                                                    </div>
                                                    <div className="mmp-show-tyre-infor=detail-figure py-[6px] px-[10.5px] rounded-[2px] flex justify-center items-center bg-[#B0B0B0]">
                                                        <p className="uppercase text-sm leading-5 font-middle text-black">B</p>
                                                    </div>
                                                </div>
                                                <div className="mmp-show-tyre-infor-detail flex flex-row gap-[2px]">
                                                    <div className="mmp-show-tyre-infor-detail-svg py-[3.99px] px-[4px] rounded-[2px] bg-white flex justify-center items-center">
                                                        <Tyre_Infor_second />
                                                    </div>
                                                    <div className="mmp-show-tyre-infor=detail-figure py-[6px] px-[10.5px] rounded-[2px] flex justify-center items-center bg-[#B0B0B0]">
                                                        <p className="uppercase text-sm leading-5 font-middle text-black">69</p>
                                                    </div>
                                                </div>
                                                <div className="mmp-show-tyre-infor-detail flex flex-row gap-[2px]">
                                                    <div className="mmp-show-tyre-infor-detail-svg py-[3.99px] px-[4px] rounded-[2px] bg-white flex justify-center items-center">
                                                        <Tyre_Infor_third />
                                                    </div>
                                                    <div className="mmp-show-tyre-infor=detail-figure py-[6px] px-[10.5px] rounded-[2px] flex justify-center items-center bg-[#B0B0B0]">
                                                        <p className="uppercase text-sm leading-5 font-middle text-black">A</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mmp-price pt-[19px] flex flex-row justify-center">
                                                <p className="text-lg leading-7 font-normal font-['Inter'] text-black">Price: <span className="text-lg leading-7 font-semi-bold text-black">NOK 1520</span></p>
                                            </div>
                                            <div className="mmp-btn-group flex flex-row justify-center gap-[8px] pt-[19px]">
                                                <div className="mmp-buy-btn py-[8px] px-[27.5px] rounded-[4px] bg-[#73C018]">
                                                    <p className="text-base leading-6 font-normal font-['Inter'] uppercase">BUY</p>
                                                </div>
                                                <div className="mmp-detail-btn py-[8px] px-[11.5px] rounded-[4px] bg-[#888888]">
                                                    <p className="text-base leading-6 font-normal font-['Inter'] uppercase">DETAILS</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="main-product-pan  mmp-product-show-fifth flex flex-col">
                                        <div className="mpp-image bg-[#F5F5F5] w-[276px] h-[312px] relative flex justify-center items-center">
                                            <div className="mpp-image-outback absolute">
                                                <Image alt="tire image" src={Tyre_24} width={176.52} height={238}></Image>
                                            </div>
                                        </div>
                                        <div className="mpp-main-info w-[276px] h-[336px] bg-[#E4E4E4] flex flex-col py-[11.5px]">
                                            <div className="mmp-recommend-item w-full h-[25px] mb-[19px] flex justify-center items-center">
                                                <div className="mmp-recommend px-[10px] py-[2.5px] rounded-[4px] bg-[#73C018] drop-shadow-2xl">
                                                    <p className="text-sm leading-5 font-normal font-['Inter']">Recommended</p>
                                                </div>
                                            </div>
                                            <div className="mmp-exact-info flex flex-col w-full h-[112px] items-center">
                                                <p className="text-lg leading-7 font-semi-bold text-black">Goodyear</p>
                                                <p className="text-lg leading-7 font-semi-bold text-black">EfficientGrip Performance 2</p>
                                                <p className="mmp-figures text-lg leading-7 font-normal font-['Inter'] mt-[28px] text-black">205/55-16 91 W</p>
                                            </div>
                                            <div className="mmp-show-tyre-infor flex flex-row justify-center gap-[8px] mt-[19px]">
                                                <div className="mmp-show-tyre-infor-detail flex flex-row gap-[2px]">
                                                    <div className="mmp-show-tyre-infor-detail-svg py-[3.99px] px-[4px] rounded-[2px] bg-white flex justify-center items-center">
                                                        <Tyre_Info_first />
                                                    </div>
                                                    <div className="mmp-show-tyre-infor=detail-figure py-[6px] px-[10.5px] rounded-[2px] flex justify-center items-center bg-[#B0B0B0]">
                                                        <p className="uppercase text-sm leading-5 font-middle text-black">B</p>
                                                    </div>
                                                </div>
                                                <div className="mmp-show-tyre-infor-detail flex flex-row gap-[2px]">
                                                    <div className="mmp-show-tyre-infor-detail-svg py-[3.99px] px-[4px] rounded-[2px] bg-white flex justify-center items-center">
                                                        <Tyre_Infor_second />
                                                    </div>
                                                    <div className="mmp-show-tyre-infor=detail-figure py-[6px] px-[10.5px] rounded-[2px] flex justify-center items-center bg-[#B0B0B0]">
                                                        <p className="uppercase text-sm leading-5 font-middle text-black">6</p>
                                                    </div>
                                                </div>
                                                <div className="mmp-show-tyre-infor-detail flex flex-row gap-[2px]">
                                                    <div className="mmp-show-tyre-infor-detail-svg py-[3.99px] px-[4px] rounded-[2px] bg-white flex justify-center items-center">
                                                        <Tyre_Infor_third />
                                                    </div>
                                                    <div className="mmp-show-tyre-infor=detail-figure py-[6px] px-[10.5px] rounded-[2px] flex justify-center items-center bg-[#B0B0B0]">
                                                        <p className="uppercase text-sm leading-5 font-middle text-black">A</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mmp-price pt-[19px] flex flex-row justify-center">
                                                <p className="text-lg leading-7 font-normal font-['Inter'] text-black">Price: <span className="text-lg leading-7 font-semi-bold text-black">NOK 1520</span></p>
                                            </div>
                                            <div className="mmp-btn-group flex flex-row justify-center gap-[8px] pt-[19px]">
                                                <div className="mmp-buy-btn py-[8px] px-[27.5px] rounded-[4px] bg-[#73C018]">
                                                    <p className="text-base leading-6 font-normal font-['Inter'] uppercase">BUY</p>
                                                </div>
                                                <div className="mmp-detail-btn py-[8px] px-[11.5px] rounded-[4px] bg-[#888888]">
                                                    <p className="text-base leading-6 font-normal font-['Inter'] uppercase">DETAILS</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Partner />
                    <GetInTouch />
                    <Footer />
                    <BackToTop />

                </div>
            </main>
        </div>
    );
}
