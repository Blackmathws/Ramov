import React from 'react';
import logo from '../assets/site/logo-branco.png';
import WhatsappLink, { ChatIcon } from './utils/WhatsappLink';

const socialClass =
  'flex h-11 w-11 items-center justify-center rounded-full border border-white/60 text-white hover:bg-white hover:text-ink';

function Footer() {
  return (
    <footer id="contato" className="bg-grain text-white">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-7 px-4 pb-28 pt-14 md:gap-14 md:px-6 md:pb-14 md:pt-28">
        <div className="flex flex-col gap-7 md:flex-row md:flex-wrap md:items-end md:justify-between md:gap-10">
          <h2 className="m-0 max-w-[720px] font-display text-[38px] font-bold leading-none tracking-[-0.04em] md:text-[clamp(40px,5.5vw,72px)] md:leading-[0.98]">
            Vamos construir o próximo projeto juntos.
          </h2>
          <WhatsappLink className="inline-flex min-h-[56px] items-center justify-center gap-2.5 rounded-full bg-white px-[30px] text-base font-bold text-ink no-underline hover:bg-haze md:text-[17px]">
            <ChatIcon size={20} />
            Chamar no WhatsApp
          </WhatsappLink>
        </div>

        <div className="flex flex-col gap-5 rounded-[20px] border border-white/75 px-5 py-[22px] md:flex-row md:flex-wrap md:items-center md:justify-between md:gap-6 md:rounded-3xl md:px-8 md:py-7">
          <address className="flex flex-col gap-1.5 text-[15px] not-italic leading-normal tracking-[0.03em] md:gap-2 md:text-base md:tracking-[0.05em]">
            <span>Rua Teófilo dos Santos, 1555, Morada do Sol</span>
            <span className="flex flex-col md:block">
              <span>(86) 98152-1510</span>
              <span className="hidden md:inline"> / </span>
              <span>(86) 99577-6691</span>
            </span>
            <a href="mailto:contato@ramoveng.com.br" className="text-white no-underline hover:underline">
              contato@ramoveng.com.br
            </a>
          </address>
          <img src={logo} alt="RamoV" className="w-[150px] md:w-[200px]" />
        </div>

        <div className="flex flex-col-reverse gap-4 border-t border-white/30 pt-5 text-xs leading-normal text-fog md:flex-row md:flex-wrap md:items-center md:justify-between md:pt-6 md:text-[13px]">
          <span>
            © {new Date().getFullYear()} Ramov Soluções em Engenharia Mecânica Ltda.
            <br className="md:hidden" />
            <span className="hidden md:inline"> · </span>
            CNPJ 55.546.916/0001-33
          </span>
          <div className="flex gap-3">
            <a
              href="https://www.linkedin.com/in/ramov-projetos-e-solu%C3%A7%C3%B5es-de-engenharia-8b144331a/"
              target="_blank"
              rel="noreferrer"
              aria-label="Ramov no LinkedIn"
              className={socialClass}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a href="https://www.instagram.com/ramovengenharia/" target="_blank" rel="noreferrer" aria-label="Ramov no Instagram" className={socialClass}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
