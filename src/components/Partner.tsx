import Partner_logo from "../../public/image/Partner logo.png";
import Partner_continental from "../../public/image/Partner(continental).png";
import Partner_dunlop from "../../public/image/Partner(dunlop).png";
import Partner_firestone from "../../public/image/Partner(firestone).png";
import Partner_goodyear from "../../public/image/Partner(goodyear).png";
import Partner_yokohama from "../../public/image/Partner(yokohama).png";
import Image from "next/image";

export default function Partner() {
  return (
    <div className='w-full flex items-center px-[216px] py-[49px] gap-[19px] bg-[#F7F7F7] partner-brand overflow-hidden'>
      <div className='slider flex flex-row gap-[19px] items-center  '>
        <div className='partner-brand-img'>
          <Image src={Partner_logo} alt="Moss Dekk's partner" />
        </div>
        <div className='partner-brand-img'>
          <Image src={Partner_continental} alt="Moss Dekk's partner" />
        </div>
        <div className='partner-brand-img'>
          <Image src={Partner_dunlop} alt="Moss Dekk's partner" />
        </div>
        <div className='partner-brand-img'>
          <Image src={Partner_firestone} alt="Moss Dekk's partner" />
        </div>
        <div className='partner-brand-img'>
          <Image src={Partner_goodyear} alt="Moss Dekk's partner" />
        </div>
        <div className='partner-brand-img'>
          <Image src={Partner_yokohama} alt="Moss Dekk's partner" />
        </div>
        {/* Repeat the images to create a seamless loop */}
        <div className='partner-brand-img'>
          <Image src={Partner_logo} alt="Moss Dekk's partner" />
        </div>
        <div className='partner-brand-img'>
          <Image src={Partner_continental} alt="Moss Dekk's partner" />
        </div>
        <div className='partner-brand-img'>
          <Image src={Partner_dunlop} alt="Moss Dekk's partner" />
        </div>
        <div className='partner-brand-img'>
          <Image src={Partner_firestone} alt="Moss Dekk's partner" />
        </div>
        <div className='partner-brand-img'>
          <Image src={Partner_goodyear} alt="Moss Dekk's partner" />
        </div>
        <div className='partner-brand-img'>
          <Image src={Partner_yokohama} alt="Moss Dekk's partner" />
        </div>
      </div>
    </div>
  );
}
