import React from 'react';

const ITEMS = [
  { title: 'Atendimento em todo o Brasil', text: 'Reuniões online e entregas digitais. Projetos em MG, BA, SP e PI.' },
  { title: 'Responsabilidade técnica', text: 'Engenheiros mecânicos registrados no CREA, com emissão de ART.' },
  { title: 'Sob medida, com foco em custo-benefício', text: 'Comparamos alternativas para chegar à solução mais segura e econômica.' },
  { title: 'Projetos em BIM e CAD', text: 'Memoriais, detalhes construtivos e lista de materiais prontos para orçamento.' },
  { title: 'Instituições e setor público', text: 'Já atendemos PRF e SESI, com documentação no padrão exigido.' },
  { title: 'Processo claro do início ao fim', text: 'Briefing → Proposta → Desenvolvimento → Revisão → Entrega com ART.' },
];

function Differentials() {
  return (
    <section id="diferenciais" className="bg-mist">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-6 px-4 py-14 md:gap-12 md:px-6 md:py-28">
        <div className="flex flex-col gap-3">
          <h2 className="m-0 font-display text-[44px] font-extrabold leading-[0.9] tracking-[-0.045em] text-navy md:text-[clamp(44px,6vw,80px)]">
            DIFERENCIAIS
          </h2>
          <p className="m-0 text-[15px] leading-[1.55] text-muted md:text-lg">
            Mais do que entregar pranchas, entregamos segurança para quem vai construir, instalar e operar.
          </p>
        </div>
        <div className="grid grid-cols-1 border-t border-ink md:grid-cols-[repeat(auto-fit,minmax(320px,1fr))]">
          {ITEMS.map((item, index) => (
            <div key={item.title} className="flex flex-col gap-1.5 border-b border-rule py-5 md:gap-2 md:py-7 md:pr-7">
              <span className="font-mono text-xs text-azure md:text-[13px]">{String(index + 1).padStart(2, '0')}</span>
              <h3 className="m-0 text-[17px] font-semibold leading-[1.3] md:text-[19px]">{item.title}</h3>
              <p className="m-0 text-[15px] leading-[1.55] text-muted">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Differentials;
