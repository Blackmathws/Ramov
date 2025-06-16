import React from 'react';
import whatsappIcon from '../../assets/icons/whatsapp_fixed.svg'

function WhatsappIcon() {
  return (
  <a href="https://api.whatsapp.com/send/?phone=558695776691&text&type=phone_number&app_absent=0" target="_blank">
    <img className="w-12 xs:w-[4.5rem] fixed bottom-6 right-6 hover:scale-110 transition-transform ease-in-out" src={whatsappIcon} alt="whatsapp" />
  </a>
  );
}

export default WhatsappIcon;
