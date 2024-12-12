import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Partner from "@/components/Partner";
import GetInTouch from "@/components/GetInTouch";
import Main_Image from "@/components/Main_Image"
import Price_service_1 from "../../public/image/price-service-image-1.png";
import Price_service_2 from "../../public/image/price-service-image-2.png";
import CollapseContainer from "@/components/CollapseContainer";
import BackToTop from "@/components/backToTop";

const inter = Inter({ subsets: ["latin"] });
const backend_url = process.env.NEXT_PUBLIC_API_URL

export default function Pricing() {
    return (
        <div className="home-container flex flex-col">
            <Header />
            <main style={{ "width": '100%' }}>
                <div className="main-container flex flex-col justify-center w-[100%]">
                    <Main_Image />
                    <div className="price-service-pan relative flex flex-col items-center px-[218px] pt-[55px] pb-[84px] gap-[84px] w-[100%]">
                        <div className="psp-title w-full text-center z-10">
                            <p className="text-white text-4xl font-semi-bold">Prices Of Our Services</p>
                        </div>
                        <div className="flex flex-row justify-center gap-[96px] psp-list-pan z-10">
                            <div className="flex flex-col psp-list-pan-item gap-[36px]">
                                <div className="plpi-title w-[299px] text-center py-[5px] bg-[#6d6d6d]">
                                    <p className="text-white text-lg font-semi-bold leading-7">DECK HOTEL</p>
                                </div>
                                <div className="plpi-content flex flex-col gap-[21px] w-full pr-[3px]">
                                    <div className="plpi-content-item relative flex flex-row justify-between h-[57px]">
                                        <div className="plpi-content-item-content pr-[35px] w-[236px]">
                                            <p className="text-white text-lg leading-7 font-['Inter'] font-normal">Passenger car 13&quot; - 16&quot;</p>
                                        </div>
                                        <div className="plpi-content-item-price w-[63px] pb-[13px] flex flex-col">
                                            <p className="text-[#73c018] text-lg font-normal font-['Inter'] leading-7">$1,190</p>
                                            <p className="text-[#6d6d6d] text-xs font-normal font-['Inter'] leading-none">per season</p>
                                        </div>
                                        <div className="w-[291px] h-[0px] absolute bottom-[0px] shadow-inner border border-[#aaaaaa]"></div>
                                    </div>
                                    <div className="plpi-content-item relative flex flex-row justify-between h-[57px]">
                                        <div className="plpi-content-item-content pr-[35px] w-[236px]">
                                            <p className="text-white text-lg leading-7 font-['Inter'] font-normal">Passenger car 17&quot; - 19&quot;</p>
                                        </div>
                                        <div className="plpi-content-item-price w-[63px] pb-[13px] flex flex-col">
                                            <p className="text-[#73c018] text-lg font-normal font-['Inter'] leading-7">$1,190</p>
                                            <p className="text-[#6d6d6d] text-xs font-normal font-['Inter'] leading-none">per season</p>
                                        </div>
                                        <div className="w-[291px] h-[0px] absolute bottom-[0px] shadow-inner border border-[#aaaaaa]"></div>
                                    </div>
                                    <div className="plpi-content-item relative flex flex-row justify-between h-[57px]">
                                        <div className="plpi-content-item-content pr-[35px] w-[236px]">
                                            <p className="text-white text-lg leading-7 font-['Inter'] font-normal">Passenger car 19&quot; - 22&quot;</p>
                                        </div>
                                        <div className="plpi-content-item-price w-[63px] pb-[13px] flex flex-col">
                                            <p className="text-[#73c018] text-lg font-normal font-['Inter'] leading-7">$1,190</p>
                                            <p className="text-[#6d6d6d] text-xs font-normal font-['Inter'] leading-none">per season</p>
                                        </div>
                                        <div className="w-[291px] h-[0px] absolute bottom-[0px] shadow-inner border border-[#aaaaaa]"></div>
                                    </div>
                                    <div className="plpi-content-item relative flex flex-row justify-between h-[57px]">
                                        <div className="plpi-content-item-content pr-[35px] w-[236px]">
                                            <p className="text-white text-lg leading-7 font-['Inter'] font-normal">SUV/VAN 16&quot; - 19&quot;</p>
                                        </div>
                                        <div className="plpi-content-item-price w-[63px] pb-[13px] flex flex-col">
                                            <p className="text-[#73c018] text-lg font-normal font-['Inter'] leading-7">$1,190</p>
                                            <p className="text-[#6d6d6d] text-xs font-normal font-['Inter'] leading-none">per season</p>
                                        </div>
                                        <div className="w-[291px] h-[0px] absolute bottom-[0px] shadow-inner border border-[#aaaaaa]"></div>
                                    </div>
                                    <div className="plpi-content-item relative flex flex-row justify-between h-[57px]">
                                        <div className="plpi-content-item-content pr-[35px] w-[236px]">
                                            <p className="text-white text-lg leading-7 font-['Inter'] font-normal">SUV/VAN 19&quot; - 22&quot;</p>
                                        </div>
                                        <div className="plpi-content-item-price w-[63px] pb-[13px] flex flex-col">
                                            <p className="text-[#73c018] text-lg font-normal font-['Inter'] leading-7">$1,190</p>
                                            <p className="text-[#6d6d6d] text-xs font-normal font-['Inter'] leading-none">per season</p>
                                        </div>
                                        <div className="w-[291px] h-[0px] absolute bottom-[0px] shadow-inner border border-[#aaaaaa]"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col psp-list-pan-item gap-[36px]">
                                <div className="plpi-title w-[299px] text-center py-[5px] bg-[#6d6d6d]">
                                    <p className="text-white text-lg font-semi-bold leading-7">TIRE CHANGEL</p>
                                </div>
                                <div className="plpi-content flex flex-col gap-[21px] w-full pr-[3px]">
                                    <div className="plpi-content-item relative flex flex-row justify-between h-[57px]">
                                        <div className="plpi-content-item-content pr-[35px] w-[236px]">
                                            <p className="text-white text-lg leading-7 font-['Inter'] font-normal">Passenger car</p>
                                        </div>
                                        <div className="plpi-content-item-price w-[63px] pb-[13px] flex flex-col">
                                            <p className="text-[#73c018] text-lg font-normal font-['Inter'] leading-7">$550</p>
                                            <p className="text-[#6d6d6d] text-xs font-normal font-['Inter'] leading-none">per season</p>
                                        </div>
                                        <div className="w-[291px] h-[0px] absolute bottom-[0px] shadow-inner border border-[#aaaaaa]"></div>
                                    </div>
                                    <div className="plpi-content-item relative flex flex-row justify-between h-[57px]">
                                        <div className="plpi-content-item-content pr-[35px] w-[236px]">
                                            <p className="text-white text-lg leading-7 font-['Inter'] font-normal">SUV/VAN</p>
                                        </div>
                                        <div className="plpi-content-item-price w-[63px] pb-[13px] flex flex-col">
                                            <p className="text-[#73c018] text-lg font-normal font-['Inter'] leading-7">$599</p>
                                            <p className="text-[#6d6d6d] text-xs font-normal font-['Inter'] leading-none">per season</p>
                                        </div>
                                        <div className="w-[291px] h-[0px] absolute bottom-[0px] shadow-inner border border-[#aaaaaa]"></div>
                                    </div>
                                    <div className="plpi-content-item relative flex flex-row justify-between h-[57px]">
                                        <div className="plpi-content-item-content pr-[35px] w-[236px]">
                                            <p className="text-white text-lg leading-7 font-['Inter'] font-normal">MOTORHOME/Sprinter</p>
                                        </div>
                                        <div className="plpi-content-item-price w-[63px] pb-[13px] flex flex-col">
                                            <p className="text-[#73c018] text-lg font-normal font-['Inter'] leading-7">$799</p>
                                            <p className="text-[#6d6d6d] text-xs font-normal font-['Inter'] leading-none">per season</p>
                                        </div>
                                        <div className="w-[291px] h-[0px] absolute bottom-[0px] shadow-inner border border-[#aaaaaa]"></div>
                                    </div>
                                    <div className="plpi-content-item relative flex flex-row justify-between h-[57px]">
                                        <div className="plpi-content-item-content pr-[35px] w-[236px]">
                                            <p className="text-white text-lg leading-7 font-['Inter'] font-normal">SUV/VAN 16&quot; - 19&quot;</p>
                                        </div>
                                        <div className="plpi-content-item-price w-[63px] pb-[13px] flex flex-col">
                                            <p className="text-[#73c018] text-lg font-normal font-['Inter'] leading-7">$1,190</p>
                                            <p className="text-[#6d6d6d] text-xs font-normal font-['Inter'] leading-none">per season</p>
                                        </div>
                                        <div className="w-[291px] h-[0px] absolute bottom-[0px] shadow-inner border border-[#aaaaaa]"></div>
                                    </div>
                                    <div className="plpi-content-item relative flex flex-row justify-between h-[57px]">
                                        <div className="plpi-content-item-content pr-[35px] w-[236px]">
                                            <p className="text-white text-lg leading-7 font-['Inter'] font-normal">SUV/VAN 19&quot; - 22&quot;</p>
                                        </div>
                                        <div className="plpi-content-item-price w-[63px] pb-[13px] flex flex-col">
                                            <p className="text-[#73c018] text-lg font-normal font-['Inter'] leading-7">$1,190</p>
                                            <p className="text-[#6d6d6d] text-xs font-normal font-['Inter'] leading-none">per season</p>
                                        </div>
                                        <div className="w-[291px] h-[0px] absolute bottom-[0px] shadow-inner border border-[#aaaaaa]"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col psp-list-pan-item gap-[36px]">
                                <div className="plpi-title w-[299px] text-center py-[5px] bg-[#6d6d6d]">
                                    <p className="text-white text-lg font-semi-bold leading-7">REPRESENTATION</p>
                                </div>
                                <div className="plpi-content flex flex-col gap-[21px] w-full pr-[3px]">
                                    <div className="plpi-content-item relative flex flex-row justify-between h-[57px]">
                                        <div className="plpi-content-item-content pr-[35px] w-[236px]">
                                            <p className="text-white text-lg leading-7 font-['Inter'] font-normal">Patch hole (umbrella)</p>
                                        </div>
                                        <div className="plpi-content-item-price w-[63px] pb-[13px] flex flex-col">
                                            <p className="text-[#73c018] text-lg font-normal font-['Inter'] leading-7">$798</p>
                                            <p className="text-[#6d6d6d] text-xs font-normal font-['Inter'] leading-none"></p>
                                        </div>
                                        <div className="w-[291px] h-[0px] absolute bottom-[0px] shadow-inner border border-[#aaaaaa]"></div>
                                    </div>
                                    <div className="plpi-content-item relative flex flex-row justify-between h-[57px]">
                                        <div className="plpi-content-item-content pr-[35px] w-[236px]">
                                            <p className="text-white text-lg leading-7 font-['Inter'] font-normal">Grinding of rims</p>
                                        </div>
                                        <div className="plpi-content-item-price w-[63px] pb-[13px] flex flex-col">
                                            <p className="text-[#73c018] text-lg font-normal font-['Inter'] leading-7">$390</p>
                                            <p className="text-[#6d6d6d] text-xs font-normal font-['Inter'] leading-none">per rim</p>
                                        </div>
                                        <div className="w-[291px] h-[0px] absolute bottom-[0px] shadow-inner border border-[#aaaaaa]"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col psp-list-pan-item gap-[36px]">
                                <div className="plpi-title w-[299px] text-center py-[5px] bg-[#6d6d6d]">
                                    <p className="text-white text-lg font-semi-bold leading-7">OVERHAUL AND BALANCING</p>
                                </div>
                                <div className="plpi-content flex flex-col gap-[21px] w-full pr-[3px]">
                                    <div className="plpi-content-item relative flex flex-row justify-between h-[57px]">
                                        <div className="plpi-content-item-content pr-[35px] w-[236px]">
                                            <p className="text-white text-lg leading-7 font-['Inter'] font-normal">Conversion + balancing 13&quot; to 17&quot; 1 tire</p>
                                        </div>
                                        <div className="plpi-content-item-price w-[63px] pb-[13px] flex flex-col">
                                            <p className="text-[#73c018] text-lg font-normal font-['Inter'] leading-7">$1190</p>
                                            <p className="text-[#6d6d6d] text-xs font-normal font-['Inter'] leading-none">per season</p>
                                        </div>
                                        <div className="w-[291px] h-[0px] absolute bottom-[0px] shadow-inner border border-[#aaaaaa]"></div>
                                    </div>
                                    <div className="plpi-content-item relative flex flex-row justify-between h-[57px]">
                                        <div className="plpi-content-item-content pr-[35px] w-[236px]">
                                            <p className="text-white text-lg leading-7 font-['Inter'] font-normal">Conversion + balancing 13&quot; to 17&quot; 4 tires</p>
                                        </div>
                                        <div className="plpi-content-item-price w-[63px] pb-[13px] flex flex-col">
                                            <p className="text-[#73c018] text-lg font-normal font-['Inter'] leading-7">$1190</p>
                                            <p className="text-[#6d6d6d] text-xs font-normal font-['Inter'] leading-none">per season</p>
                                        </div>
                                        <div className="w-[291px] h-[0px] absolute bottom-[0px] shadow-inner border border-[#aaaaaa]"></div>
                                    </div>
                                    <div className="plpi-content-item relative flex flex-row justify-between h-[57px]">
                                        <div className="plpi-content-item-content pr-[35px] w-[236px]">
                                            <p className="text-white text-lg leading-7 font-['Inter'] font-normal">Conversion + balancing 18&quot; to 22&quot; 1 tire</p>
                                        </div>
                                        <div className="plpi-content-item-price w-[63px] pb-[13px] flex flex-col">
                                            <p className="text-[#73c018] text-lg font-normal font-['Inter'] leading-7">$1190</p>
                                            <p className="text-[#6d6d6d] text-xs font-normal font-['Inter'] leading-none">per season</p>
                                        </div>
                                        <div className="w-[291px] h-[0px] absolute bottom-[0px] shadow-inner border border-[#aaaaaa]"></div>
                                    </div>
                                    <div className="plpi-content-item relative flex flex-row justify-between h-[57px]">
                                        <div className="plpi-content-item-content pr-[35px] w-[236px]">
                                            <p className="text-white text-lg leading-7 font-['Inter'] font-normal">Conversion + balancing 18&quot; to 22&quot; 4 tires</p>
                                        </div>
                                        <div className="plpi-content-item-price w-[63px] pb-[13px] flex flex-col">
                                            <p className="text-[#73c018] text-lg font-normal font-['Inter'] leading-7">$1,190</p>
                                            <p className="text-[#6d6d6d] text-xs font-normal font-['Inter'] leading-none">per season</p>
                                        </div>
                                        <div className="w-[291px] h-[0px] absolute bottom-[0px] shadow-inner border border-[#aaaaaa]"></div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="price-service-pan-image-back w-full h-full absolute top-0 left-0">
                            <Image src={Price_service_1} alt="tire image" className="w-full h-full z-1 first-price-service-image"></Image>
                            <Image src={Price_service_2} alt="tire image" className="w-full h-full z-1 second-price-service-image"></Image>
                            <div className="absolute top-0 left-0 w-full h-full">
                                <div className="w-full h-full left-0 top-[0px] absolute opacity-30 bg-black"></div>
                                <div className="w-full h-full left-0 top-0 absolute opacity-60 mix-blend-multiply bg-black"></div>
                            </div>
                        </div>
                    </div>
                    <div className="price-faqs-pan flex flex-row pl-[239px] pr-[465px] pt-[87px] pb-[120px] gap-[399px] justify-between">
                        <div className="price-faqs-pan-title"><p className="text-white text-4xl font-semi-bold font-['Inter'] ledaing-10">FAQs</p></div>
                        <CollapseContainer />
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
