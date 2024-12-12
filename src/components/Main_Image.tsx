'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Small_Right_arrow from '../svg/Small_right_arrow';
import path from 'path';
import Main_back from "../../public/image/main-back.png"

const sections: Record<string, string> = {
    section1: 'How to find my tire size?',
    section2: 'Sidewall explained',
    section3: 'Tire Rotation',
    section4: 'Load Index',
    section5: 'Speed Rating',
    section6: 'Tire Pressure',
    // Add more sections as needed
};

const Main_Image = () => {
    const router = useRouter();
    const { pathname, asPath } = router;
    const [currentSection, setCurrentSection] = useState('');

    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash.substring(1); // Remove the '#' character
            const sectionTitle = sections[hash];
            setCurrentSection(sectionTitle || '');
        };

        // Initial check
        handleHashChange();

        // Add event listener for hash change
        window.addEventListener('hashchange', handleHashChange);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, [asPath]);

    const renamePathname = (pathname: string): string => {
        return pathname.startsWith('/') ? pathname.substring(1) : pathname;
    };

    return (
        <div className='flex relative w-[100%] justify-center items-end'>
            <div className='relative w-full min-h-[200px] md:min-h-[300px] lg:h-[424px] top-0 right-0 main-background-image'>
                <Image
                    alt="Background"
                    src={Main_back}
                    fill
                    style={{ objectFit: 'cover' }}
                    className='w-full h-full'
                />
                <div className='opacity-70 bg-black w-full h-full absolute top-0 z'></div>
            </div>
            <div className='flex flex-col justify-center items-center absolute gap-[26px] main-back-pan'>
                <div><p className="text-white text-4xl font-semi-bold font-['Inter'] leading-10 main-back-title uppercase">{pathname == "/aboutus" ? "About Us" : pathname == "/report" ? "DEKK RAPPORT" : pathname == "/terms" || pathname == "/privacy"?"TERMS AND CONDITION":pathname=="/pdetail"?"product detail":pathname=="/order"?"checkout":renamePathname(pathname)}</p></div>
                <div className='flex flex-row gap-[4px] justify-center items-center mb-[58px] main-back-url-info'>
                    <p className="text-white text-lg font-medium leading-7 font-['Inter'] uppercase">HOME</p>
                    <span className='w-[18px] h-[18px]'><Small_Right_arrow /></span>
                    {(currentSection)
                        ? <>
                            <p className="text-white text-lg font-medium leading-7 font-['Inter'] uppercase">{renamePathname(pathname)}</p>
                            <span className='w-[18px] h-[18px]'><Small_Right_arrow /></span>
                            <p className='text-[#73c018] text-lg font-medium leading-7 uppercase'>{currentSection}</p>
                        </>
                        : pathname == "/report" ? <>
                            <p className="text-white text-lg font-medium leading-7 font-['Inter'] uppercase">DEKK RAPPORT</p>
                            <span className='w-[18px] h-[18px]'><Small_Right_arrow /></span>
                            <p className='text-[#73c018] text-lg font-medium leading-7 uppercase'>Details</p>
                        </> : pathname=="/order"?<>
                        <p className="text-white text-lg font-medium leading-7 font-['Inter'] uppercase">checkout</p>
                            <span className='w-[18px] h-[18px]'><Small_Right_arrow /></span>
                            <p className='text-[#73c018] text-lg font-medium leading-7 uppercase'>ORDER RECEIVED</p>
                        </>:
                         <p className="text-[#73c018] text-lg font-medium font-['Inter'] leading-7 uppercase">{pathname == "/aboutus" ? "about" : pathname == "/pricing" ? "pricing" : pathname == "/contact" ? "contact" : pathname=="/products"?"products":pathname=="/terms"||pathname=="/privacy"?"TERMS AND CONDITION":pathname=="/pdetail"?"products":pathname=="/cart"?"cart":pathname=="/checkout"?"checkout":""}</p>
                    }
                </div>
            </div>
        </div>
    );
};

export default Main_Image;
