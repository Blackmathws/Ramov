import React, { useState } from 'react';
import logo from '../assets/site/logo-branco.png';
import WhatsappLink, { ChatIcon } from './utils/WhatsappLink';

const NAV = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#diferenciais', label: 'Diferenciais' },
  { href: '#quem-somos', label: 'Quem somos' },
  { href: '#parcerias', label: 'Parcerias' },
];

function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);

  return (
    <header className="bg-grain relative overflow-hidden text-white">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-5 px-4 pt-5 md:px-6 md:pt-7">
        <img src={logo} alt="RamoV Engenharia" className="w-28 md:w-[148px]" />

        <nav aria-label="Principal" className="hidden items-center gap-7 text-[15px] md:flex">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="text-white no-underline hover:opacity-80">
              {item.label}
            </a>
          ))}
          <a
            href="#contato"
            className="inline-flex min-h-[44px] items-center rounded-full border-[1.5px] border-white px-5 font-semibold text-white no-underline hover:bg-white hover:text-ink"
          >
            Fale conosco
          </a>
        </nav>

        <button
          type="button"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          aria-controls="menu-celular"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/70 bg-transparent text-white md:hidden"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
            {menuOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <nav id="menu-celular" aria-label="Principal" className="mx-4 mt-4 flex flex-col rounded-2xl border border-white/40 bg-navy/95 p-2 md:hidden">
          {[...NAV, { href: '#contato', label: 'Fale conosco' }].map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={close}
              className="flex min-h-[48px] items-center rounded-xl px-4 text-base text-white no-underline hover:bg-white/10"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}

      <div className="mx-auto flex max-w-[1200px] flex-col gap-12 px-4 pb-12 pt-12 md:gap-10 md:px-6 md:pb-[88px] md:pt-24">
        <h1 className="m-0 font-display text-[76px] font-extrabold leading-[0.86] tracking-[-0.05em] md:text-[clamp(64px,11vw,168px)]">
          <span className="sr-only">Ramov: projetos e soluções de engenharia mecânica</span>
          <span aria-hidden="true" className="block">
            <span>PROJE</span>
            <span className="text-white/[0.12]">TOS</span>
          </span>
          <span aria-hidden="true" className="block">
            <span className="text-white/[0.12]">PROJE</span>
            <span>TOS</span>
          </span>
        </h1>

        <div className="flex flex-col gap-5 md:flex-row md:flex-wrap md:items-end md:justify-between md:gap-10">
          <div className="flex max-w-[560px] flex-col gap-5 md:gap-7">
            <p className="m-0 text-lg leading-normal tracking-[0.02em] md:text-[22px] md:leading-[1.45]">
              Projetos e soluções de engenharia mecânica: estruturas metálicas, climatização, incêndio, gases, linha de vida e rigging.
            </p>
            <div className="flex flex-col gap-2.5 md:flex-row md:flex-wrap md:gap-3.5">
              <WhatsappLink className="inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-full bg-azure px-[26px] text-base font-semibold text-white no-underline hover:brightness-110">
                <ChatIcon />
                Solicitar orçamento
              </WhatsappLink>
              <a
                href="#servicos"
                className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-white px-[26px] text-base font-semibold text-ink no-underline hover:bg-haze"
              >
                Ver serviços
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-2 rounded-[20px] border border-white/75 px-5 py-[18px] text-sm tracking-[0.03em] md:min-w-[280px] md:gap-2.5 md:rounded-3xl md:px-7 md:py-6 md:text-[15px] md:tracking-[0.04em]">
            <span>Atendimento remoto em todo o Brasil</span>
            <span>Engenheiros mecânicos com registro no CREA</span>
            <span>Entregas em BIM e CAD, com ART</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;
