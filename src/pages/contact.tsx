import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Partner from "@/components/Partner";
import Main_Image from "@/components/Main_Image"
import Google_map from "../../public/image/googlemap.png"
import Map_pin from "@/svg/Map_pin";
import Phone_Call_One from "@/svg/Phonecall_one";
import Contact_mail from "@/svg/Contact_mail";
import Input_user from "@/svg/Input_User";
import Input_alert from "@/svg/Input_alert";
import Input_mail from "@/svg/Input_Mail";
import Input_pen from "@/svg/Input_pen";
import Input_phone from "@/svg/Input_phone";
import Send from "@/svg/Send";
import { MdCheckBox } from "react-icons/md";
import Link from "next/link";
import Union from "@/svg/Paymethod";
import BackToTop from "@/components/backToTop";

import axios from "axios";
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { log } from "console";
const inter = Inter({ subsets: ["latin"] });
const backend_url = process.env.NEXT_PUBLIC_API_URL

interface FormData {
    name: string;
    email: string;
    phone: string;
    sub: string;
    msg: string;
    regNr: string;
    location: string;
}
const Contact: React.FC = () => {
    const [isNewCustomer, setIsNewCustomer] = useState<boolean>(false);

    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        sub: '',
        msg: '',
        regNr: '',
        location: '',
    });
    const handleCheckboxChange = () => {
        setIsNewCustomer((prevState) => !prevState); // Toggle the state
    };
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,

        });

    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (!isNewCustomer) {
            alert("You have to agree to the Privacy and Policy!");
            return;
        }

        try {
            // Convert formData object into URLSearchParams format for URL encoding
            const formDataParams = new URLSearchParams();
            formDataParams.append('method', 'saveContact');
            formDataParams.append('name', formData.name);
            formDataParams.append('email', formData.email);
            formDataParams.append('phone', formData.phone);
            formDataParams.append('sub', formData.sub);
            formDataParams.append('msg', formData.msg);
            formDataParams.append('regNr', formData.regNr);
            formDataParams.append('location', "Moss Dekk AS"); // Optional field

            // Make the POST request
            const response = await axios.post(
                `${backend_url}/queryNewSite.php`,
                formDataParams, // Pass URLSearchParams directly, no need for .toString()
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                }
            );

            if (response.data === 'success') {

                alert('Contact saved successfully!');
                window.location.reload();
            } else if (response.data === 'empty fields') {
                alert('Please fill in all fields.');
            } else {
                alert('Failed to save contact.');
            }
        } catch (error) {
            console.error('Error while sending data:', error);
            alert('An error occurred. Please try again.');
        }
    };
    return (
        <div className="home-container flex flex-col">
            <Header />
            <main style={{ "width": '100%' }}>
                <div className="main-container flex flex-col justify-center w-[100%]">
                    <Main_Image />
                    <div className="google-map w-full">
                        <div className='relative w-full h-[655px] top-0 right-0 google-image'>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8109.663153793965!2d10.6886197!3d59.4594927!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf0c938655e220549!2sMoss%20Dekk%20AS!5e0!3m2!1sno!2sno!4v1591397614919!5m2!1sno!2sno"
                                style={{ objectFit: 'cover' }}
                                className='w-full h-full'
                            ></iframe>

                        </div>
                    </div>
                    <div className="contact-pan flex flex-col px-[208px] pt-[125px] pb-[132px] gap-[23px] bg-white">
                        <div className="contact-pan-title">
                            <p className="text-[#73c018] text-lg font-semi-bold font-['Inter'] leading-7">CONTACT US</p>
                        </div>
                        <div className="contact-pan-content flex flex-row gap-[122px]">
                            <div className="cpc-question flex flex-col gap-[40px]">
                                <div className="cpc-question-title">
                                    <p className="w-[310px] text-black text-4xl font-semi-bold font-['Inter'] leading-10">Have Questions? Get In Touch!</p>
                                </div>
                                <div className="cpc-question-contnet flex flex-col gap-[26px]">
                                    <div className="cpc-question-content-text">
                                        <p className="w-[680px] text-justify text-[#6d6d6d] text-lg font-normal font-['Inter'] leading-7">Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
                                    </div>
                                    <div className="cpc-question-content-item flex flex-col gap-[20px]">
                                        <div className="cpcqc-item-list flex flex-row items-center gap-[23px]">
                                            <Map_pin />
                                            <p className="text-justify text-[#6d6d6d] text-lg font-normal font-['Inter'] leading-7">Moss Dekk AS Skredderveien 5, 1537 Moss</p>
                                        </div>
                                        <div className="cpcqc-item-list flex flex-row items-center gap-[23px]">
                                            <Phone_Call_One />
                                            <p className="text-justify text-[#6d6d6d] text-lg font-normal font-['Inter'] leading-7">+47 45022450</p>
                                        </div>
                                        <div className="cpcqc-item-list flex flex-row items-center gap-[23px]">
                                            <Contact_mail />
                                            <p className="text-justify text-[#6d6d6d] text-lg font-normal font-['Inter'] leading-7">post@mossdekk.no</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cpc-information-input flex flex-col gap-[66px]">
                                <div className="cpc-infor-input-pan gap-[55px] flex flex-col">
                                    <div className="cpc-iip-list flex flex-row gap-[28px]">
                                        <div className="flex w-[334px] gap-[19px] items-center border-b border-[#aaaaaa] pb-[17px]">
                                            <Input_user />
                                            <input
                                                type="text"
                                                placeholder="Name"
                                                name="name"
                                                className="appearance-none bg-transparent border-none w-full text-[#6d6d6d] text-lg font-['Inter'] leading-tight focus:outline-none focus:ring-0 placeholder-[#6d6d6d]"
                                                required={true}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="flex w-[334px] gap-[19px] items-center border-b border-[#aaaaaa] pb-[17px]">
                                            <Input_mail />
                                            <input
                                                type="email"
                                                placeholder="Email Address"
                                                name="email"
                                                className="appearance-none bg-transparent border-none w-full text-[#6d6d6d] text-lg font-['Inter'] leading-tight focus:outline-none focus:ring-0 placeholder-[#6d6d6d]"
                                                required={true}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="cpc-iip-list flex flex-row gap-[28px]">
                                        <div className="flex w-[334px] gap-[19px] items-center border-b border-[#aaaaaa] pb-[17px]">
                                            <Input_phone />
                                            <input
                                                type="tel"
                                                placeholder="Phone"
                                                name="phone"
                                                className="appearance-none bg-transparent border-none w-full text-[#6d6d6d] text-lg font-['Inter'] leading-tight focus:outline-none focus:ring-0 placeholder-[#6d6d6d] placeholder-text"
                                                required={true}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="flex w-[334px] gap-[19px] items-center border-b border-[#aaaaaa] pb-[17px]">
                                            <Input_alert />
                                            <input
                                                type="text"
                                                placeholder="Subject"
                                                name="sub"
                                                className="appearance-none bg-transparent border-none w-full text-[#6d6d6d] text-lg font-['Inter'] leading-tight focus:outline-none focus:ring-0 placeholder-[#6d6d6d]"
                                                required={true}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="cpc-iip-list flex flex-row gap-[28px]">
                                        <div className="flex w-full gap-[19px] items-center border-b border-[#aaaaaa] pb-[17px]">
                                            <Input_alert />
                                            <input
                                                type="text"
                                                placeholder="RegNr"
                                                name="regNr"
                                                className="appearance-none bg-transparent border-none w-full text-[#6d6d6d] text-lg font-['Inter'] leading-tight focus:outline-none focus:ring-0 placeholder-[#6d6d6d] placeholder-text"
                                                required={true}
                                                onChange={handleChange}
                                                maxLength={7}
                                            />
                                        </div>

                                    </div>
                                    <div className="cpc-iip-list responsive-cpc-iip-list flex flex-row gap-[28px]">
                                        <div className="flex flex-col w-full responsive-cpc-iip-list-item">
                                            <div className="cpc-iip-list-title flex items-center flex-row gap-[16px]">
                                                <Input_pen />
                                                <p className="text-justify text-[#6d6d6d] text-lg font-normal font-['Inter'] leading-7">How can we help you? Feel free to get in touch!</p>
                                            </div>
                                            <div className="flex w-full gap-[19px] items-center border-b border-[#aaaaaa] py-[17px]">
                                                <input
                                                    type="text"
                                                    placeholder="Message"
                                                    name="msg"
                                                    className="appearance-none bg-transparent border-none w-full text-[#6d6d6d] text-lg font-['Inter'] leading-tight focus:outline-none focus:ring-0 placeholder-[#6d6d6d]"
                                                    required={true}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="cpc-infor-confirm-btn flex items-center flex-row gap-[48px]">
                                    <div className="w-[235px] h-[61px] p-2.5 bg-[#73c018] justify-center items-center gap-2.5 inline-flex cursor-pointer" onClick={handleSubmit}>
                                        <div className="w-6 h-6 relative"><Send /></div>
                                        <p className="text-justify text-white text-lg font-normal font-['Inter'] leading-7">GET IN TOUCH</p>
                                    </div>
                                    <label className="h-6 flex flex-row items-center gap-[7px]">
                                        {/* <input
                                            type="checkbox"
                                            className="form-checkbox h-5 w-5 text-blue-600"
                                        /> */}
                                        <input
                                            type="checkbox"
                                            checked={isNewCustomer}
                                            onChange={handleCheckboxChange} // Use the correct handler
                                            className="hidden form-checkbox h-5 w-5 text-blue-600"
                                        />
                                        <span
                                            className={`w-5 h-5 inline-block mr-[6px] border-2 rounded-[4px] ${isNewCustomer ? 'bg-[#73C018] border-[#73C018]' : 'border-gray-300'
                                                } transition-colors`}
                                        // onClick={handleCheckboxChange} // Toggle when span is clicked
                                        >
                                            {isNewCustomer && (
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="text-white"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M6 10.293l1.293-1.293 3 3 7-7L18.707 5 10 13.707l-4-4z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            )}
                                        </span>
                                        <div className="text-justify flex flex-row"><p className="text-[#6d6d6d] text-base font-normal font-['Inter'] leading-normal">I agree with the site’s <Link className="text-[#6d6d6d] text-base font-normal font-['Inter'] underline leading-normal" href="/privacy">privacy policy.</Link></p></div>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                    <BackToTop />

                </div>
            </main>
        </div>
    );
}
export default Contact;