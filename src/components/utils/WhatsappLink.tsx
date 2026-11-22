import React from 'react';
import { trackContactConversion } from './trackConversion';

export const WHATSAPP_URL =
  'https://api.whatsapp.com/send/?phone=558695776691&text&type=phone_number&app_absent=0';

type Props = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'target' | 'rel'>;

function WhatsappLink({ onClick, children, ...rest }: Props) {
  return (
    <a
      {...rest}
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      onClick={(event) => {
        trackContactConversion();
        onClick?.(event);
      }}
    >
      {children}
    </a>
  );
}

export function ChatIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 11.5a8.4 8.4 0 0 1-12.6 7.3L3 21l2.2-5.3A8.4 8.4 0 1 1 21 11.5z" />
    </svg>
  );
}

export default WhatsappLink;
