import React from 'react';
import postesNordeste from '../assets/site/parceiros/postes-nordeste.png';
import fs from '../assets/site/parceiros/fs.png';
import progen from '../assets/site/parceiros/progen.png';
import bfr from '../assets/site/parceiros/bfr.png';
import sesi from '../assets/site/parceiros/sesi.png';
import engesert from '../assets/site/parceiros/engesert.png';
import concepcao from '../assets/site/parceiros/concepcao.png';
import cometa from '../assets/site/parceiros/cometa.png';
import bolt from '../assets/site/parceiros/bolt.png';
import adp from '../assets/site/parceiros/adp.png';
import self from '../assets/site/parceiros/self.png';

const PARTNERS = [
  { logo: postesNordeste, name: 'Postes Nordeste' },
  { logo: fs, name: 'FS' },
  { logo: progen, name: 'Progen' },
  { logo: bfr, name: 'BFR Start Up Engenharia e Automação' },
  { logo: sesi, name: 'SESI, Serviço Social da Indústria' },
  { logo: engesert, name: 'Engesert Engenharia e Projetos' },
  { logo: concepcao, name: 'Concepção' },
  { logo: cometa, name: 'Cometa, Companhia de Melhoramento de Tráfego Assistido' },
  { logo: bolt, name: 'Bolt Engenharia' },
  { logo: adp, name: 'ADP' },
  { logo: self, name: 'Self Engenharia' },
];

function Partners() {
  return (
    <section id="parcerias" className="bg-mist">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-5 px-4 py-14 md:gap-10 md:px-6 md:py-24">
        <div className="flex flex-col gap-5 md:flex-row md:flex-wrap md:items-end md:justify-between md:gap-6">
          <h2 className="m-0 font-display text-[32px] font-extrabold leading-[0.95] tracking-[-0.045em] text-navy md:text-[clamp(36px,4.5vw,60px)] md:leading-[0.92]">
            PARCEIROS QUE
            <br className="hidden md:block" /> TRANSFORMARAM PROJETOS
            <br className="hidden md:block" /> EM RESULTADOS
          </h2>
          <p className="m-0 max-w-[380px] text-[15px] leading-[1.55] text-muted md:text-base">
            Empresas que confiaram na Ramov para tirar seus projetos do papel.
          </p>
        </div>
        <ul className="m-0 grid list-none grid-cols-2 gap-2.5 p-0 md:grid-cols-[repeat(auto-fill,minmax(170px,1fr))] md:gap-3">
          {PARTNERS.map((partner) => (
            <li
              key={partner.name}
              className="group flex h-[84px] items-center justify-center rounded-[14px] border border-line bg-white px-4 py-3.5 md:h-28 md:rounded-2xl md:px-[22px] md:py-[18px]"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                loading="lazy"
                className="max-h-12 max-w-full object-contain opacity-75 mix-blend-multiply grayscale transition duration-200 group-hover:opacity-100 group-hover:grayscale-0 md:max-h-16"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Partners;
