import React from 'react';
import estruturas from '../assets/site/servicos/estruturas-metalicas.jpg';
import climatizacao from '../assets/site/servicos/climatizacao.jpg';
import incendio from '../assets/site/servicos/incendio.jpg';
import gases from '../assets/site/servicos/gases.jpg';
import linhaDeVida from '../assets/site/servicos/linha-de-vida.jpg';
import rigging from '../assets/site/servicos/rigging.png';
import WhatsappLink from './utils/WhatsappLink';

const SERVICES = [
  {
    title: 'Estruturas metálicas',
    text: 'Projetos conforme ABNT NBR 8800:24, com ligações soldadas ou parafusadas e a solução de melhor custo-benefício.',
    image: estruturas,
    alt: 'Isométrico de estrutura metálica com pontes rolantes',
  },
  {
    title: 'HVAC / Climatização',
    text: 'VRF, dutado, split, hidrônico e evaporativo. Plantas, cortes, detalhes e memoriais de cálculo.',
    image: climatizacao,
    alt: 'Projeto de climatização em BIM para a PRF',
  },
  {
    title: 'Prevenção e combate a incêndio',
    text: 'Projeto técnico e simplificado, chuveiros automáticos, hidrantes e acompanhamento para emissão do AVCB.',
    image: incendio,
    alt: 'Planta de prevenção e combate a incêndio',
  },
  {
    title: 'Tubulação e sistema de gases',
    text: 'Rede de gases e central de GLP para condomínios, comércio e indústria, com memorial e especificação.',
    image: gases,
    alt: 'Central de GLP com tubulação amarela',
  },
  {
    title: 'Linha de vida',
    text: 'Sistemas horizontais ou verticais, fixação temporária ou definitiva, para manutenção em galpões.',
    image: linhaDeVida,
    alt: 'Desenho de linha de vida com pórticos',
  },
  {
    title: 'Plano de rigging',
    text: 'Peso, centro de gravidade, equipamento, acessórios e trajetória da carga para um içamento seguro.',
    image: rigging,
    alt: 'Estudo de içamento com guindaste, do início ao fim da manobra',
    position: 'left top',
  },
];

function Services() {
  return (
    <section id="servicos" className="mx-auto flex max-w-[1200px] flex-col gap-6 px-4 py-14 md:gap-12 md:px-6 md:pb-24 md:pt-28">
      <div className="flex flex-col gap-3 md:flex-row md:flex-wrap md:items-end md:justify-between md:gap-6">
        <h2 className="m-0 font-display text-[44px] font-extrabold leading-[0.9] tracking-[-0.045em] text-navy md:text-[clamp(44px,6vw,80px)]">
          SERVIÇOS
        </h2>
        <p className="m-0 max-w-[440px] text-[15px] leading-[1.55] text-muted md:text-[17px]">
          Seis áreas de atuação, cada uma com projeto, memorial e detalhamento prontos para orçamento e execução.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] md:gap-6">
        {SERVICES.map((service, index) => (
          <WhatsappLink
            key={service.title}
            className="group flex flex-col overflow-hidden rounded-[20px] border border-line bg-white text-ink no-underline md:rounded-3xl"
          >
            <div className="h-[170px] overflow-hidden bg-mist md:h-[200px]">
              <img
                src={service.image}
                alt={service.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                style={service.position ? { objectPosition: service.position } : undefined}
              />
            </div>
            <div className="flex flex-col gap-2 p-5 md:gap-2.5 md:p-6">
              <span className="font-mono text-xs text-azure md:text-[13px]">{String(index + 1).padStart(2, '0')}</span>
              <h3 className="m-0 font-display text-[21px] font-bold leading-[1.2] tracking-[-0.02em] md:text-2xl">{service.title}</h3>
              <p className="m-0 text-[15px] leading-[1.55] text-muted">{service.text}</p>
            </div>
          </WhatsappLink>
        ))}
      </div>
    </section>
  );
}

export default Services;
