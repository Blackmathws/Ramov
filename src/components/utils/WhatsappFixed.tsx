import React from 'react';
import WhatsappLink, { ChatIcon } from './WhatsappLink';

function WhatsappFixed() {
  return (
    <WhatsappLink
      aria-label="Conversar no WhatsApp"
      className="fixed bottom-6 right-4 z-50 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-azure text-white shadow-[0_10px_28px_rgba(15,23,64,0.35)] transition-transform hover:scale-110 md:right-6"
    >
      <ChatIcon size={28} />
    </WhatsappLink>
  );
}

export default WhatsappFixed;
