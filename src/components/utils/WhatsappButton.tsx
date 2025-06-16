import React from 'react';
import { ReactComponent as WhatsappIcon } from '../../assets/icons/whatsapp.svg';


function WhatsappButton({ color, text, classes }: { color: string, text: string, classes?: string }) {
  return (
    <a className={`flex items-center gap-4 text-xs font-medium text-white 
    ${color === 'royal_blue' ? 'bg-royal_blue border-royal_blue' : 'bg-green_darker border-green_darker'} 
    border-[1px] group hover:border-royal_blue
    rounded-sm uppercase py-5 px-10 mt-6 hover:-translate-y-3 transition-transform ease-in-out duration-500	
    hover:bg-transparent hover:text-royal_blue ${classes}`} 
    href="https://api.whatsapp.com/send/?phone=558695776691&text&type=phone_number&app_absent=0" target="_blank">
      { text }
      <WhatsappIcon className="fill-white group-hover:fill-royal_blue"/>
    </a>
  );
}

export default WhatsappButton;
