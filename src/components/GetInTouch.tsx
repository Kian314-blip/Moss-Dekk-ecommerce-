// import React from 'react';
export default function GetInTouch() {
    return (
        <div className='flex flex-row justify-between items-center py-[99.5px] px-[206.5px] get-in-touch'>
            <div className='flex flex-col gap-[24px] gint-header'>
                <div className="w-[212px] text-white text-4xl font-semibold font-['Inter'] leading-10 gint-title">Get in touch</div>
                <div className="w-[552px] text-white text-lg font-normal font-['Inter'] leading-7 gint-text">Be the first to know about new products, sales and promotions.</div>
            </div>
            <div className="w-[767px] h-[68px] relative gint-input">
                <input style={{"fontSize":"16px",}} className="focus:outline-none focus:ring-0 focus:border-none w-[767px] h-[68px] py-[22px] px-[23px] text-black bg-[#fefefe] rounded-[50px] focus:outline-none sm:text-sm placeholder-gray-400" type='text' placeholder='Your email' />
                <div className="w-[201.94px] h-[68px] p-2.5 left-[565.06px] top-0 absolute bg-[#73c018] rounded-[120px] justify-center items-center gap-2.5 inline-flex gint-send-btn">
                    <div className="text-white text-lg font-normal font-['Inter'] leading-7">Subcribe</div>
                </div>
            </div>
        </div>
    );
};

