import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Partner from "@/components/Partner";
import Main_Image from "@/components/Main_Image"
import Couple_comma from "@/svg/Couple_comma";
import Founder_image from "../../public/image/founder-back_img.png"
import Founder_woman_img from "../../public/image/founder-image.png"
import Founder_info_ava from "../../public/image/founder-info-ava.png"
import Quality from "@/svg/Quality";
import Ensurance from "@/svg/Ensurance";
import Experts from "@/svg/Experts";
import Services from "@/svg/Services";
import { SetStateAction, useState } from "react";
import BackToTop from "@/components/backToTop";

const inter = Inter({ subsets: ["latin"] });
const backend_url = process.env.NEXT_PUBLIC_API_URL

export default function About() {
    const [activeButton, setActiveButton] = useState('Mission');

    const handleButtonClick = (buttonName: SetStateAction<string>) => {
        setActiveButton(buttonName);
    };

    return (
        <div className="home-container flex flex-col">
            <Header />
            <main style={{ "width": '100%' }}>
                <div className="main-container flex flex-col justify-center w-[100%]">
                    <Main_Image />
                    <div className="flex flex-row gap-[8px] w-[100%] py-[31px] md:pt-[8px] md:pb-[23px] md:gap-[2px] justify-center about-us-title">
                        <div
                            className={`w-[87px] flex p-[10px] border-b-2 justify-center items-center ${activeButton === 'Mission' ? 'border-[#73c018]' : 'border-transparent'}`}
                            onClick={() => handleButtonClick('Mission')}
                        >
                            <a href="#" className={`${activeButton === 'Mission' ? 'text-[#73c018]' : 'text-white'} text-lg font-medium`}>Mission</a>
                        </div>
                        <div
                            className={`w-[87px] flex p-[10px] border-b-2 justify-center items-center ${activeButton === 'Vision' ? 'border-[#73c018]' : 'border-transparent'}`}
                            onClick={() => handleButtonClick('Vision')}
                        >
                            <a href="#" className={`${activeButton === 'Vision' ? 'text-[#73c018]' : 'text-white'} text-lg font-medium`}>Vision</a>
                        </div>
                        <div
                            className={`w-[87px] flex p-[10px] border-b-2 justify-center items-center ${activeButton === 'History' ? 'border-[#73c018]' : 'border-transparent'}`}
                            onClick={() => handleButtonClick('History')}
                        >
                            <a href="#" className={`${activeButton === 'History' ? 'text-[#73c018]' : 'text-white'} text-lg font-medium`}>History</a>
                        </div>
                    </div>
                    <div className="about-us-text px-[208px] pb-[127px]">
                        <p className="text-white text-lg font-normal font-['Inter'] leading-7">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis hendrerit tristique elit nec feugiat. Nunc velit mauris, auctor vel leo et, elementum hendrerit lectus. Duis egestas volutpat ante finibus porttitor. Donec quis justo ac arcu scelerisque dignissim. Nulla quis metus vulputate, convallis risus semper, iaculis augue. Duis pharetra laoreet orci non consectetur. Aenean iaculis diam fermentum mauris pulvinar feugiat. Nam maximus libero dui, non ultricies erat euismod quis. Sed venenatis elementum quam, vitae pellentesque enim euismod ornare. Curabitur lacinia dapibus justo. In semper, magna sed tincidunt vulputate, sapien orci tempor dolor, at dictum nisl ligula vitae diam. Pellentesque ultrices non velit vitae consequat. Sed et elit ut risus dignissim porttitor. Maecenas lorem erat, aliquam id rutrum sit amet, lobortis eget lacus. Nulla ultrices molestie odio, sollicitudin fermentum massa. Vestibulum et lacus id tellus semper commodo sit amet at magna.
                        </p>
                    </div>
                    <div className="about-founder-pan block flex-row justify-end relative mr-[208px] ml-[207px] w-[full] h-[532px]">
                        <div className="absolute afp-outback z-0 top-[0px] left-[0px]">
                            <div className="abp-background-color absolute top-[0px] left-[0px] w-[1505px] h-[532px] opacity-60 bg-[#101010]">
                                <Image src={Founder_image} alt="Woman founder Of the Moss Dekk" height={532} className="rounded-lg"></Image>
                            </div>
                        </div>
                        <div className="relative flex flex-row justify-end afp-main-out">
                            <div className="afp-wo-image pl-[104px] pr-[123px] absolute h-[592px] bottom-[0px] left-[0px]">
                                <div className="w-[404px] h-[592px] relative afpwi-pan">
                                    <div className="w-[404px] h-[592px] left-0 top-0 absolute bg-[#d9d9d9] rounded-[33px] border-4 border-[#17c964]"></div>
                                    <Image alt="Moss Dekk Founder and Creator" className="w-[395px] h-[583px] left-[5px] top-[4px] absolute rounded-[28px]" src={Founder_woman_img} />
                                </div>
                            </div>
                            <div className="flex flex-col pt-[61px] pr-[79px] pb-[47px] afp-content">
                                <div className="afpc-title z-10">
                                    <p className="text-white text-4xl text-semi-bold ledaing-10">From our founder</p>
                                </div>
                                <div className="couple-comma pt-[11px] pb-[7.11px] z-10">
                                    <Couple_comma />
                                </div>
                                <div className="afpc-content w-[795px] z-10">
                                    <p className="text-white text-lg font-normal ledaing-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis hendrerit tristique elit nec feugiat. Nunc velit mauris, auctor vel leo et, elementum hendrerit lectus. Duis egestas volutpat ante finibus porttitor. Donec quis justo ac arcu scelerisque dignissim. Nulla quis metus vulputate, convallis risus semper, iaculis augue. Duis pharetra laoreet orci non consectetur. Aenean iaculis diam fermentum mauris pulvinar feugiat. Nam maximus libero dui, non ultricies erat euismod quis. Sed venenatis elementum quam, vitae pellentesque enim euismod ornare. Curabitur lacinia dapibus justo. In semper, magna sed tincidunt vulputate, sapien orci tempor dolor, at dictum nisl ligula vitae diam. Pellentesque ultrices non velit vitae consequat. Sed et elit ut risus dignissim porttitor. </p>
                                </div>
                                <div className="justify-start items-center gap-[15px] inline-flex z-10">
                                    <div className="w-[68px] h-[68px]">
                                        <Image className="rounded-[64px]" src={Founder_info_ava} alt=" Moss Dekk Founder and Creator" />
                                    </div>
                                    <div className="flex-col justify-start items-start inline-flex">
                                        <div className="text-justify text-white text-2xl font-semibold font-['Inter'] leading-loose">Danial H. Smith</div>
                                        <div className="text-justify text-white text-lg font-normal font-['Inter'] leading-7">CEO & Founder</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="flex flex-col pt-[64px] pb-[32px] pl-[242px] gap-[9px] about-choose-us">
                        <div className="about-choose-us-title"><p className="text-white text-4xl font-semi-bold leading-10">Why choose us?</p></div>
                        <div className="w-[795px] about-choose-us-text"><p className="text-white text-lg font-normal leading-7">Moss Dekk is a leading provider of automotive preventive maintenance. With a national footprint of more than 2,000 franchisee owned service centers across the country, offers a range of services from oil changes and tire rotations, to everything in between. Donec quis justo ac arcu scelerisque dignissim. Nulla quis metus vulputate, convallis risus semper, iaculis augue. Duis pharetra laoreet orci non consectetur. Aenean iaculis diam fermentum mauris pulvinar feugiat. Nam maximus libero dui, non ultricies erat euismod quis. Sed venenatis elementum quam, vitae pellentesque enim euismod ornare. Curabitur lacinia dapibus justo. In semper, magna sed tincidunt vulputate, sapien orci tempor dolor, at dictum nisl ligula vitae diam. Pellentesque ultrices non velit vitae consequat. Sed et elit ut risus dignissim porttitor. </p></div>
                    </div>
                    <div className="about-feature-pan flex flex-row gap-[36px] pr-[232px] pl-[231px] pb-[64px]">
                        <div className="flex flex-row gap-[36px] justify-center max-[1707px]:flex-wrap">
                            <div className="flex flex-col py-[56.05px] gap-[39px] px-[51px] w-[333px] afp-list bg-white rounded-lg">
                                <div className="w-[100%] h-[75.90px] relative flex justify-center">
                                    <Quality />
                                </div>
                                <div className="flex-col justify-start items-center gap-[29px] flex">
                                    <div className="flex-col justify-start items-center gap-1.5 flex w-[100%]">
                                        <div className="text-black text-xl font-semibold font-['Inter'] leading-7">PREMIUM QUALITY</div>
                                        <div className="text-[#6d6d6d] text-lg font-normal font-['Inter'] leading-7">Sed do eiusm od tempor</div>
                                    </div>
                                    <div className="justify-start items-start gap-1.5 inline-flex">
                                        <div className="w-1.5 h-1.5 bg-[#aaaaaa] rounded-full"></div>
                                        <div className="w-1.5 h-1.5 bg-[#aaaaaa] rounded-full"></div>
                                        <div className="w-1.5 h-1.5 bg-[#aaaaaa] rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col py-[56.05px] gap-[39px] px-[51px] w-[333px] afp-list bg-white rounded-lg">
                                <div className="w-[100%] h-[75.90px] relative flex justify-center">
                                    <Ensurance />
                                </div>
                                <div className="flex-col justify-start items-center gap-[29px] flex">
                                    <div className="flex-col justify-start items-center gap-1.5 flex w-[100%]">
                                        <div className="text-black text-xl font-semibold font-['Inter'] leading-7">LICENSE & ENSURANCE</div>
                                        <div className="text-[#6d6d6d] text-lg font-normal font-['Inter'] leading-7">Sed do eiusm od tempor</div>
                                    </div>
                                    <div className="justify-start items-start gap-1.5 inline-flex">
                                        <div className="w-1.5 h-1.5 bg-[#aaaaaa] rounded-full"></div>
                                        <div className="w-1.5 h-1.5 bg-[#aaaaaa] rounded-full"></div>
                                        <div className="w-1.5 h-1.5 bg-[#aaaaaa] rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                            {/* </div> */}
                            {/* <div className="flex flex-row gap-[36px] justify-between"> */}
                            <div className="flex flex-col py-[56.05px] gap-[39px] px-[51px] w-[333px] afp-list bg-white rounded-lg">
                                <div className="w-[100%] h-[75.90px] relative flex justify-center">
                                    <Experts />
                                </div>
                                <div className="flex-col justify-start items-center gap-[29px] flex">
                                    <div className="flex-col justify-start items-center gap-1.5 flex w-[100%]">
                                        <div className="text-black text-xl font-semibold font-['Inter'] leading-7">CERTIFIED EXPERTS</div>
                                        <div className="text-[#6d6d6d] text-lg font-normal font-['Inter'] leading-7">Sed do eiusm od tempor</div>
                                    </div>
                                    <div className="justify-start items-start gap-1.5 inline-flex">
                                        <div className="w-1.5 h-1.5 bg-[#aaaaaa] rounded-full"></div>
                                        <div className="w-1.5 h-1.5 bg-[#aaaaaa] rounded-full"></div>
                                        <div className="w-1.5 h-1.5 bg-[#aaaaaa] rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col py-[56.05px] gap-[39px] px-[51px] w-[333px] afp-list bg-white rounded-lg">
                                <div className="w-[100%] h-[75.90px] relative flex justify-center">
                                    <Services />
                                </div>
                                <div className="flex-col justify-start items-center gap-[29px] flex">
                                    <div className="flex-col justify-start items-center gap-1.5 flex w-[100%]">
                                        <div className="text-black text-xl font-semibold font-['Inter'] leading-7">RANGE OF SERVICES</div>
                                        <div className="text-[#6d6d6d] text-lg font-normal font-['Inter'] leading-7">Sed do eiusm od tempor</div>
                                    </div>
                                    <div className="justify-start items-start gap-1.5 inline-flex">
                                        <div className="w-1.5 h-1.5 bg-[#aaaaaa] rounded-full"></div>
                                        <div className="w-1.5 h-1.5 bg-[#aaaaaa] rounded-full"></div>
                                        <div className="w-1.5 h-1.5 bg-[#aaaaaa] rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Partner />
                    <Footer />
                    <BackToTop />

                </div>
            </main>
        </div>
    );
}
