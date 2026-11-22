import React from 'react';
import climatizacao from '../assets/site/servicos/climatizacao.jpg';

function HvacHighlight() {
  return (
    <section className="hidden bg-navy text-white md:block">
      <div className="mx-auto grid max-w-[1200px] grid-cols-[repeat(auto-fit,minmax(320px,1fr))] items-center gap-8 px-6 py-[88px]">
        <div className="flex flex-wrap items-center gap-7 rounded-[28px] border border-white/75 p-9">
          <img
            src={climatizacao}
            alt="Isométrico do projeto de climatização da PRF na Bahia"
            loading="lazy"
            className="h-[150px] w-[220px] rounded-[14px] bg-white object-cover"
          />
          <div className="flex flex-[1_1_220px] flex-col gap-3">
            <span className="text-lg font-semibold leading-[1.4]">
              Procurando soluções eficientes para ventilação e ar-condicionado?
            </span>
            <span className="text-[15px] leading-[1.6] text-haze">Projeto de climatização em BIM para a PRF, na Bahia.</span>
          </div>
        </div>
        <div className="flex flex-col gap-4 rounded-[28px] bg-azure p-9">
          <span className="text-sm font-bold tracking-[0.08em]">INFORMAÇÕES</span>
          <ul className="m-0 flex flex-col gap-2.5 pl-5 text-[15px] leading-normal tracking-[0.02em] list-disc">
            <li>Plantas com seleção de equipamentos e cortes</li>
            <li>Detalhes construtivos</li>
            <li>Memoriais de cálculo e descritivos</li>
            <li>Hidrônico, VRF, expansão direta, evaporativo e split</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default HvacHighlight;
