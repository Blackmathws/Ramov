import React from 'react';
import WhatsappButton from './utils/WhatsappButton';
import dark_brand from '../assets/icons/brand_dark.svg';

function Hero() {
  return (
    <div className="relative h-[85vh] lg:h-screen flex items-center lg:bg-hero bg-right bg-contain bg-no-repeat p-6">
      <div className="lg:w-2/6 flex flex-col justify-between lg:justify-normal text-left gap-6 lg:ml-36">
        <img className="w-36" src={dark_brand} alt="brand" />
        <h1 className="text-3xl tracking-tight leading-10">
          <span>Garanta a Conformidade e Segurança dos seus Equipamentos com </span>
          <b><i>Nossos Laudos Técnicos e ARTs!</i></b>
        </h1>
        <span className="text-sm font-medium	text-punga">
          Na KDP Soluções em Engenharia, oferecemos uma variedade de serviços 
          de laudos técnicos e ART (Anotação de Responsabilidade Técnica) para 
          garantir a conformidade, segurança e eficiência dos seus equipamentos 
          e processos.
        </span>
        <WhatsappButton text="Solicitar um orçamento!" color="green" classes="self-center lg:self-start" />
      </div>
    </div>
  );
}

export default Hero;
