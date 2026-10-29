'use client';
import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';

export function KaanPakadkeCharacter({ reduced = false }: { reduced?: boolean }) {
  const host = useRef<HTMLButtonElement>(null);
  useLayoutEffect(() => {
    if (!host.current || reduced) return;
    const ctx = gsap.context(() => {
      const q = (selector: string) => host.current!.querySelector(selector);
      const play = () => {
        const tl = gsap.timeline();
        tl.set(['#apology-pose', '#whole-character', '#left-arm', '#right-arm', '#sorry-bubble'], { clearProps: 'all' })
          .fromTo('#whole-character', { opacity: 0, y: 28, scale: .84 }, { opacity: 1, y: 0, scale: 1, duration: .72, ease: 'back.out(1.7)' })
          .to('#head', { rotation: -5, x: -5, duration: .28, ease: 'sine.inOut' })
          .to('#head', { rotation: 5, x: 5, duration: .38, ease: 'sine.inOut' })
          .to('#head', { rotation: 0, x: 0, duration: .26 })
          .to(['#left-eye', '#right-eye'], { scaleY: .08, transformOrigin: 'center', duration: .09, yoyo: true, repeat: 1 }, '<')
          .fromTo(['#left-arm', '#right-arm'], { rotation: (i: number) => i ? 48 : -48, x: (i: number) => i ? 26 : -26, y: 23 }, { rotation: 0, x: 0, y: 0, duration: .9, stagger: .06, ease: 'back.out(1.25)' })
          .to(['#left-hand', '#right-hand'], { scale: .91, transformOrigin: 'center', duration: .13, yoyo: true, repeat: 2 }, '>-0.18')
          .to('#apology-pose', { rotation: 3, y: 12, transformOrigin: '260px 380px', duration: .33, ease: 'sine.inOut' })
          .to('#apology-pose', { rotation: 0, y: 0, duration: .28, ease: 'sine.out' })
          .to('#apology-pose', { rotation: 3, y: 12, duration: .33, ease: 'sine.inOut' })
          .to('#apology-pose', { rotation: 0, y: 0, duration: .3, ease: 'sine.out' })
          .to('#sweat-drop', { opacity: 1, y: 3, duration: .28 }, '<')
          .to('#head', { rotation: -5, y: -3, transformOrigin: 'center bottom', duration: .42, ease: 'power2.out' })
          .fromTo('#sorry-bubble', { opacity: 0, scale: .5, y: 16, transformOrigin: 'center' }, { opacity: 1, scale: 1, y: 0, duration: .42, ease: 'back.out(2)' }, '<.1');
      };
      play(); host.current!.onclick = play;
    }, host);
    return () => ctx.revert();
  }, [reduced]);
  return <button ref={host} className="sorry-character supplied-character" aria-label="Tap the character to replay his apology"><svg viewBox="0 0 520 460" role="img" aria-labelledby="character-title"><title id="character-title">A shy boy holding both ears and asking for forgiveness</title><defs><linearGradient id="face" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#F9CFAE"/><stop offset="1" stopColor="#EBA987"/></linearGradient><linearGradient id="jumper" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#C6BBD4"/><stop offset="1" stopColor="#A89CBB"/></linearGradient><linearGradient id="hair" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#493039"/><stop offset="1" stopColor="#281F2B"/></linearGradient></defs><ellipse cx="260" cy="427" rx="117" ry="15" fill="#513944" opacity=".15"/><g id="whole-character"><g id="apology-pose"><g id="left-arm"><path d="M192 325C167 323 138 311 123 287M124 283C120 262 133 234 159 220" fill="none" stroke="#4D3641" strokeWidth="52" strokeLinecap="round"/><path d="M192 325C167 323 138 311 123 287M124 283C120 262 133 234 159 220" fill="none" stroke="url(#jumper)" strokeWidth="43" strokeLinecap="round"/><path d="M124 283C120 262 133 234 159 220" fill="none" stroke="url(#face)" strokeWidth="27" strokeLinecap="round"/></g><g id="right-arm"><path d="M328 325C353 323 382 311 397 287M396 283C400 262 387 234 361 220" fill="none" stroke="#4D3641" strokeWidth="52" strokeLinecap="round"/><path d="M328 325C353 323 382 311 397 287M396 283C400 262 387 234 361 220" fill="none" stroke="url(#jumper)" strokeWidth="43" strokeLinecap="round"/><path d="M396 283C400 262 387 234 361 220" fill="none" stroke="url(#face)" strokeWidth="27" strokeLinecap="round"/></g><g id="torso"><path d="M201 303Q221 291 240 294l20 18 20-18q21-3 39 9c28 14 41 51 39 104q-98 14-196 0c-3-53 11-89 39-104z" fill="url(#jumper)" stroke="#4D3641" strokeWidth="4.4"/><path d="M240 294l20 18 20-18 11 19q-31 25-62 0z" fill="#F7E9D9" stroke="#4D3641" strokeWidth="3"/></g><g id="ears"><path d="M189 210c-17-16-27-8-24 11q3 28 24 25M331 210c17-16 27-8 24 11q-3 28-24 25" fill="url(#face)" stroke="#4D3641" strokeWidth="4.4"/></g><g id="head"><path d="M260 112c47-2 81 33 78 83l-3 44c-4 40-33 66-75 68-43-2-72-28-75-68l-3-44c-3-47 29-83 78-83z" fill="url(#face)" stroke="#4D3641" strokeWidth="4.4"/><ellipse cx="216" cy="253" rx="20" ry="10" fill="#E78B96" opacity=".55"/><ellipse cx="304" cy="253" rx="20" ry="10" fill="#E78B96" opacity=".55"/><path d="M211 212q14-11 30-1m38 0q16-10 30 1" fill="none" stroke="#422E37" strokeWidth="5" strokeLinecap="round"/><g id="left-eye"><ellipse cx="225" cy="229" rx="6" ry="9" fill="#392C35"/><circle cx="227" cy="225" r="2" fill="white"/></g><g id="right-eye"><ellipse cx="295" cy="229" rx="6" ry="9" fill="#392C35"/><circle cx="297" cy="225" r="2" fill="white"/></g><path d="M245 268q15 13 30 0" fill="none" stroke="#8C4F61" strokeWidth="4" strokeLinecap="round"/></g><g id="hair-shape"><path d="M182 202c-10-31-10-57 7-80 13-21 35-23 48-23 15-17 52-13 72 3 26 1 43 29 40 54q1 24-11 45l-3-28c-14 1-25-10-36-25-19 20-50 27-75 19-12 17-27 20-37 25z" fill="url(#hair)" stroke="#4D3641" strokeWidth="4.4"/></g><g id="hands-gripping-ears"><g id="left-hand"><path d="M158 226c-10-1-15-10-12-19 2-8 12-12 21-7 10 1 12 11 7 19l-4 10c-3 7-11 9-15 3z" fill="url(#face)" stroke="#4D3641" strokeWidth="4.4"/><path d="M170 206q12-1 14 13 0 10-9 14" fill="none" stroke="#4D3641" strokeWidth="7" strokeLinecap="round"/></g><g id="right-hand"><path d="M362 226c10-1 15-10 12-19-2-8-12-12-21-7-10 1-12 11-7 19l4 10c3 7 11 9 15 3z" fill="url(#face)" stroke="#4D3641" strokeWidth="4.4"/><path d="M350 206q-12-1-14 13 0 10 9 14" fill="none" stroke="#4D3641" strokeWidth="7" strokeLinecap="round"/></g></g><path id="sweat-drop" d="M350 174c0-6 6-13 8-18 5 8 7 15 4 19-3 4-9 4-12-1z" fill="#A5C4CF" opacity="0"/></g></g><g id="sorry-bubble"><path d="M369 100q0-25 37-25t37 25q0 25-37 25h-14l-14 10 4-14q-13-7-13-21z" fill="#fffdf5" stroke="#4D3641" strokeWidth="3"/><text x="406" y="104" textAnchor="middle" fill="#7a3745" fontFamily="cursive" fontSize="16">Sorry na? 🥹</text></g></svg></button>;
}
