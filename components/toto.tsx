'use client';
import { motion } from 'motion/react';

export function Toto({ festive = false, onClick }: { festive?: boolean; onClick?: () => void }) {
  return <motion.button aria-label="Tap the little toto" className="toto" onClick={onClick} whileTap={{ y: 7, rotate: -1, scale: .98 }} animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 2.6, ease: 'easeInOut' }}>
    {festive && <div className="toto-flowers">✦ &nbsp;✿ &nbsp;✦</div>}
    <img src="/bengali-toto.svg" alt="A cheerful Bengali toto with a waving driver" />
    <svg className="toto-original" viewBox="0 0 410 210" role="img" aria-label="A cheerful green toto vehicle">
      <path d="M13 172H397" stroke="#875449" strokeWidth="7" strokeLinecap="round" opacity=".28"/>
      <path d="M74 157V70Q76 34 113 33H277Q322 34 337 77V158" fill="#c6d8a6" stroke="#482c31" strokeWidth="7" strokeLinejoin="round"/>
      <path d="M91 72H323V151H91Z" fill="#f7e9c7" stroke="#482c31" strokeWidth="6"/>
      <path d="M104 81H183V141H104Z" fill="#9ccbd0" stroke="#482c31" strokeWidth="5"/>
      <path d="M194 81H309V141H194Z" fill="#b8d9d1" stroke="#482c31" strokeWidth="5"/>
      <path d="M183 81V141" stroke="#482c31" strokeWidth="5"/>
      <path d="M62 151H356Q373 151 376 168L368 181H48L42 167Q45 151 62 151Z" fill="#94aa69" stroke="#482c31" strokeWidth="7"/>
      <g className="wheel left-wheel"><circle cx="105" cy="181" r="22" fill="#482c31"/><circle cx="105" cy="181" r="11" fill="#f6d779"/><path d="M105 164v34M88 181h34" stroke="#482c31" strokeWidth="3"/></g><g className="wheel right-wheel"><circle cx="310" cy="181" r="22" fill="#482c31"/><circle cx="310" cy="181" r="11" fill="#f6d779"/><path d="M310 164v34M293 181h34" stroke="#482c31" strokeWidth="3"/></g>
      <path d="M286 111Q278 93 263 98Q252 108 259 127" fill="#7b5144"/><circle cx="267" cy="91" r="12" fill="#c98262"/><path d="M253 83Q267 69 280 84" stroke="#482c31" strokeWidth="7" strokeLinecap="round"/>
      <path d="M210 51H315" stroke="#482c31" strokeWidth="9" strokeLinecap="round"/><path d="M115 51H182" stroke="#482c31" strokeWidth="9" strokeLinecap="round"/>
      <circle className="toto-light" cx="347" cy="162" r="7" fill="#f5c85b"/><path d="M33 96l-17-8M31 110l-22 2" stroke="#b45847" strokeWidth="5" strokeLinecap="round"/>
    </svg>
  </motion.button>;
}
