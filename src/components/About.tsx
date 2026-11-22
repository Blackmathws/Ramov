import React from 'react';
import matheus from '../assets/site/equipe/matheus.jpg';
import expedito from '../assets/site/equipe/expedito.jpg';

const TEAM = [
  {
    name: 'ENG. MATHEUS ARAUJO DE FREITAS',
    areas: 'Estrutura metálica · Projetos mecânicos · Sistemas de climatização',
    photo: matheus,
    alt: 'Engenheiro Matheus Araujo de Freitas',
    position: 'center 45%',
    badge: 'bg-azure',
  },
  {
    name: 'ENG. EXPEDITO AGUIAR DE ARRUDA JR.',
    areas: 'Combate a incêndio · GLP e gases medicinais · Linhas de vida',
    photo: expedito,
    alt: 'Engenheiro Expedito Aguiar de Arruda Junior',
    position: 'center 30%',
    badge: 'bg-navy',
  },
];

function About() {
  return (
    <section
      id="quem-somos"
      className="mx-auto grid max-w-[1200px] grid-cols-2 gap-3 px-4 py-14 lg:grid-cols-3 lg:gap-7 lg:px-6 lg:py-28"
    >
      <div className="col-span-2 mb-2 flex flex-col gap-5 lg:col-span-1 lg:row-span-2 lg:mb-0 lg:gap-6">
        <h2 className="m-0 font-display text-[44px] font-extrabold leading-[0.88] tracking-[-0.045em] text-navy lg:text-[clamp(44px,6vw,80px)]">
          QUEM
          <br />
          SOMOS
        </h2>
        <p className="m-0 text-[15px] leading-[1.6] text-muted lg:text-lg">
          A <b className="text-ink">Ramov</b> é uma empresa de engenharia mecânica com soluções que equilibram inovação, qualidade e
          custo-benefício. Nossa missão é a excelência em serviços de engenharia, com foco em segurança, conformidade e eficiência
          operacional.
        </p>
      </div>

      {TEAM.map((person) => (
        <div key={person.name} className="flex flex-col gap-1.5 rounded-[18px] border-2 border-navy p-1.5 lg:gap-2.5 lg:rounded-3xl lg:p-2.5">
          <img
            src={person.photo}
            alt={person.alt}
            loading="lazy"
            className="h-[190px] w-full rounded-xl object-cover lg:h-[300px] lg:rounded-2xl"
            style={{ objectPosition: person.position }}
          />
          <div className={`${person.badge} flex flex-1 flex-col gap-1 rounded-xl p-2.5 text-white lg:gap-1.5 lg:rounded-2xl lg:p-[18px]`}>
            <span className="text-xs font-bold leading-[1.3] tracking-[0.04em] lg:text-sm lg:tracking-[0.06em]">{person.name}</span>
            <span className="text-xs leading-[1.4] lg:text-sm lg:leading-normal">{person.areas}</span>
          </div>
        </div>
      ))}
    </section>
  );
}

export default About;
