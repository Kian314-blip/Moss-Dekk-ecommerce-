import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Partner from "@/components/Partner";
import Main_Image from "@/components/Main_Image"
import Sidewall_explain from "../../public/image/sidewall_explain.png"
import { MdCheckBox } from "react-icons/md";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import GetInTouch from "@/components/GetInTouch";
const inter = Inter({ subsets: ["latin"] });
const backend_url = process.env.NEXT_PUBLIC_API_URL
import BackToTop from "@/components/backToTop";

export default function Guide() {
    const router = useRouter();
    const { pathname, asPath } = router;
    const [selectedSection, setSelectedSection] = useState("section1");

    // Function to handle item click
    const handleItemClick = (sectionId: React.SetStateAction<string>) => {
        setSelectedSection(sectionId);
    };

    // Function to determine item color
    const getItemColor = (sectionId: string) => {
        return selectedSection === sectionId ? 'text-[#73c018]' : 'text-[#d1d1d1]';
    };
    useEffect(() => {
        // Add #section1 to the URL and scroll to the section
        router.replace('#section1');
        document.getElementById('section1')?.scrollIntoView({ behavior: 'smooth' });
    }, []);
    return (
        <div className="home-container flex flex-col">
            <Header />
            <main style={{ "width": '100%' }}>
                <div className="main-container flex flex-col justify-center w-[100%]">
                    <Main_Image />
                    <div className="guide-pan flex flex-row pt-[59px] gap-[225px] pl-[208px] pb-[98px]">
                        <div className="guide-pan-section flex flex-col w-[210px] pt-[72px] gap-[3px]">
                            <div className="guide-pan-section-title">
                                <p className="text-white text-base font-semibold font-['Inter'] leading-normal">Guide sections</p>
                            </div>
                            <div className="guide-pan-section-list flex flex-col gap-[3px]">
                                <a
                                    href="#section1"
                                    onClick={() => handleItemClick('section1')}
                                    className={`${getItemColor('section1')} text-lg font-normal font-['Inter'] leading-7`}
                                >
                                    How to find my tire size?
                                </a>
                                <a
                                    href="#section2"
                                    onClick={() => handleItemClick('section2')}
                                    className={`${getItemColor('section2')} text-lg font-normal font-['Inter'] leading-7`}
                                >
                                    Sidewall explained
                                </a>
                                <a
                                    href="#section3"
                                    onClick={() => handleItemClick('section3')}
                                    className={`${getItemColor('section3')} text-lg font-normal font-['Inter'] leading-7`}
                                >
                                    Tire Rotation
                                </a>
                                <a
                                    href="#section4"
                                    onClick={() => handleItemClick('section4')}
                                    className={`${getItemColor('section4')} text-lg font-normal font-['Inter'] leading-7`}
                                >
                                    Load Index
                                </a>
                                <a
                                    href="#section5"
                                    onClick={() => handleItemClick('section5')}
                                    className={`${getItemColor('section5')} text-lg font-normal font-['Inter'] leading-7`}
                                >
                                    Speed Rating
                                </a>
                                <a
                                    href="#section6"
                                    onClick={() => handleItemClick('section6')}
                                    className={`${getItemColor('section6')} text-lg font-normal font-['Inter'] leading-7`}
                                >
                                    Tire Pressure
                                </a>
                            </div>
                        </div>
                        <div className="guide-pan-content flex flex-col">
                            <div className="gpc-title pb-[24px]">
                                <p className="text-white text-3xl font-medium font-['Inter'] leading-9">Sidewall explained</p>
                            </div>
                            <div className="gpc-image w-[629px] h-[315px] mb-[37px]">
                                <Image alt="Image to find the tire detail" src={Sidewall_explain} />
                            </div>
                            <div className="gpc-text gap-[16px] flex flex-col">
                                <p className="gpc-main-text w-[728px] text-white text-2xl font-medium font-['Inter'] leading-loose">As seen on the image , the sidewall of a tire includes numbers and letters, which perform the below tire information:</p>
                                <p className="gpc-extra-text text-[#f6f6f6] text-lg font-normal font-['Inter'] leading-7">1. 225 tire width<br />2. 40 tire profile<br />3. R indicates that it is a “Radial” tire<br />4. 18 tire diameter<br />5. 94 tire load rating<br />6. Y tire speed rating</p>
                                <p className="gpc-main-text w-[728px] text-white text-2xl font-medium font-['Inter'] leading-loose">When choosing new tires, we recommend using the same size as your existing tires. Note down the information and start your search on blackcircles.com.eg using the three initial standard:</p>
                                <p className="gpc-extra-text text-[#f6f6f6] text-lg font-normal font-['Inter'] leading-7">1. Width<br />2. Profile<br />3. Diameter</p>
                                <p className="gpc-main-text w-[728px] text-white text-2xl font-medium font-['Inter'] leading-loose">Then, you can select the speed rating and the load rating for your vehicle’s tires.</p>
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
