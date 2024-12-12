// src/components/MyIcon.js
// import React from 'react';
export default function Right_arrow_alt() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="27" viewBox="0 0 24 27" fill="none">
            <g filter="url(#filter0_d_557_26706)">
                <mask id="mask0_557_26706" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="25">
                    <rect y="0.5" width="24" height="24" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_557_26706)">
                    <path d="M14 18.5L12.6 17.05L16.15 13.5H4V11.5H16.15L12.6 7.95L14 6.5L20 12.5L14 18.5Z" fill="black" />
                </g>
            </g>
            <defs>
                <filter id="filter0_d_557_26706" x="-4" y="0.5" width="32" height="32" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_557_26706" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_557_26706" result="shape" />
                </filter>
            </defs>
        </svg>
    );
}