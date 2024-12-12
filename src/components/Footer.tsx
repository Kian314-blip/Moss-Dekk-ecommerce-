import React from 'react';
import Mail from "../svg/Mail";
import Phone_call from "../svg/Phone_call"
import logo_image from '../../public/image/autobutler.png'
import Facebook from '../svg/Facebook';
import Twitter from '../svg/Twitter';
import Youtube from '../svg/Youtube';
import Globe from '../svg/Globe';
import Image from 'next/image';
import Link from 'next/link';
export default function Footer() {
    return (
        <footer>
            <div className='flex flex-col bg-[#222222]'>
                <div className='main-footer flex flex-row py-[112px] pl-[210.5px] pr-[273px]'>
                    <div className='responsive-footer-header'>
                        <div className='connection-info flex flex-col gap-[11px] pr-[181px]'>
                            <div className='w-[128px] h-[69.54px]'>
                                <Image src={logo_image} width={128} height={69.54} alt="Moss Dekk logo" />
                            </div>
                            <div className="h-7 justify-start items-center gap-3 inline-flex info-item">
                                <div className="w-4 h-4"> <Mail /></div>
                                <div className="text-white text-lg font-normal font-['Inter'] leading-7 info-item-text">poss@mossdekk.no</div>
                            </div>
                            <div className="h-7 justify-start items-center gap-3 inline-flex info-item">
                                <div className="w-4 h-4"> <Phone_call /></div>
                                <div className="text-white text-lg font-normal font-['Inter'] leading-7 info-item-text">+47 4502 24 50 </div>
                            </div>
                        </div>

                    </div>
                    <div className='flex flex-row responsive-footer-middle'>
                        <div className='management flex flex-col gap-[24px] pr-[91px]'>
                            <div className="text-white text-base font-semibold font-['Inter'] leading-normal management-title">Management</div>
                            <div className="w-[175px] h-7 justify-start items-center gap-3 inline-flex management-list">
                                <div className="w-1 h-1 bg-[#73c018] rounded-full"></div>
                                <a className="text-white text-lg font-normal font-['Inter'] leading-7 management-text" href='http://bedrift.autobutler.no/'>Portal Bedrift</a>
                            </div>
                        </div>
                        <div className='dekkhotell flex flex-col gap-[24px] pr-[91px]'>
                            <div className="text-white text-base font-semibold font-['Inter'] leading-normal dekkhotell-title">Dekkhotell</div>
                            <div className="w-[175px] h-7 justify-start items-center gap-3 inline-flex dekkhotell-list">
                                <div className="w-1 h-1 bg-[#73c018] rounded-full"></div>
                                <a className="text-white text-lg font-normal font-['Inter'] leading-7 dekkhotell-text" href='http://bedrift.autobutler.no/'>Dekkhotell Bedrift</a>
                            </div>
                        </div>
                        <div className='tyre-shop flex flex-col gap-[24px] pr-[91px]'>
                            <div className="text-white text-base font-semibold font-['Inter'] leading-normal tyre-shop-title">Tyre Shop</div>
                            <div className='flex flex-col gap-[11px]'>
                                <div className="w-[175px] h-7 justify-start items-center gap-3 inline-flex tyre-shop-list">
                                    <div className="w-1 h-1 bg-[#73c018] rounded-full"></div>
                                    <Link className="text-white text-lg font-normal font-['Inter'] leading-7 tyre-shop-text" href='/'>Hovedside</Link>
                                </div>

                                <div className="w-[175px] h-7 justify-start items-center gap-3 inline-flex tyre-shop-list">
                                    <div className="w-1 h-1 bg-[#73c018] rounded-full"></div>
                                    <Link className="text-white text-lg font-normal font-['Inter'] leading-7 tyre-shop-text" href='/privacy'>Personvern</Link>
                                </div>
                                <div className="w-[191px] h-7 justify-start items-center gap-3 inline-flex tyre-shop-list">
                                    <div className="w-1 h-1 bg-[#73c018] rounded-full"></div>
                                    <Link className="text-white text-lg font-normal font-['Inter'] leading-7 tyre-shop-text" href='/terms'>Vilkår og betingelser</Link>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='responsive-footer-end'>
                        <div className='contact-info flex flex-col gap-[24px]'>
                            <div className="text-white text-base font-semibold font-['Inter'] leading-normal contact-info-title">Kontaktinfo</div>
                            <div className='flex flex-col gap-[11px]'>
                                <div className="w-[285px] justify-start items-center gap-3 inline-flex contact-info-list">
                                    <div className="w-1 h-1 bg-[#73c018] rounded-full"></div>
                                    <div className="text-white text-lg font-normal font-['Inter'] leading-7 contact-info-text">Moss Dekk AS<br />Skredderveien 5, 1537 Moss</div>
                                </div>

                                <div className="w-[190px] h-7 justify-start items-center gap-3 inline-flex contact-info-list">
                                    <div className="w-1 h-1 bg-[#73c018] rounded-full"></div>
                                    <div className="text-white text-lg font-normal font-['Inter'] leading-7 contact-info-text">post@mossdekk.no</div>
                                </div>
                                <div className="h-7 justify-start items-center gap-3 inline-flex contact-info-list">
                                    <div className="w-1 h-1 bg-[#73c018] rounded-full"></div>
                                    <div className="text-white text-lg font-normal font-['Inter'] leading-7 contact-info-text">Tlf: +47 45022450</div>
                                </div>
                                <div className="w-[226px] justify-start items-center gap-3 inline-flex contact-info-list">
                                    <div className="w-1 h-1 bg-[#73c018] rounded-full"></div>
                                    <div className="text-white text-lg font-normal font-['Inter'] leading-7 contact-info-text">Org.nr.: 921836686 MVA</div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                <div className='last-footer flex flex-row justify-between items-center py-[13px] px-[209px] bg-[#1B1B1B]'>
                    <div className="text-white text-xs font-normal font-['Inter'] leading-none">© 2024 All Rights Reserved By Mossdekk</div>
                    <div className='flex flex-row gap-[6px]'>
                        <div className='w-[32px] h-[32px] rounded-full border border-[#3b3b3b] flex items-center justify-center'><Facebook /></div>
                        <div className='w-[32px] h-[32px] rounded-full border border-[#3b3b3b] flex items-center justify-center'><Twitter /></div>
                        <div className='w-[32px] h-[32px] rounded-full border border-[#3b3b3b] flex items-center justify-center'><Youtube /></div>
                        <div className='w-[32px] h-[32px] rounded-full border border-[#3b3b3b] flex items-center justify-center'><Globe /></div>
                    </div>
                </div>
            </div>
        </footer >
    );
};
