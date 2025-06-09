import React from 'react';
import whatsappIcon from '../../assets/icons/whatsapp_fixed.svg'

function WhatsappIcon() {
  return (
  <a href="https://wa.me/558695776691" target="_blank">
    <img className="w-12 xs:w-[4.5rem] fixed bottom-6 right-6 hover:scale-110 transition-transform ease-in-out" src={whatsappIcon} alt="whatsapp" />
  </a>
  );
}

export default WhatsappIcon;
