'use client';

import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { useEffect, useState } from 'react';
import { KaanPakadkeCharacter } from './kaan-pakadke-character';
import { Toto } from './toto';

const labels = ['sorry, yaar', 'toto-wala on duty', 'coffee break?', 'one tiny question'];

function Button({ children, onClick }: { children: React.ReactNode; onClick: () => void }) {
  return <button className="button" onClick={onClick}>{children}<span aria-hidden="true">→</span></button>;
}

function Doodles() {
  return <><div className="grain" /><div className="cloud c1">☁</div><div className="cloud c2">☁</div><div className="spark s1">✦</div><div className="spark s2">✧</div><div className="flower f1">✿</div><div className="flower f2">✾</div></>;
}

export function PendingPlan() {
  const [scene, setScene] = useState(0);
  const [yes, setYes] = useState(false);
  const reduce = useReducedMotion();
  const next = () => setScene(n => Math.min(n + 1, 3));
  const back = () => setScene(n => Math.max(n - 1, 0));

  return <main className={`story scene-${scene}`}>
    <Doodles />
    <header><span className="brand">a little <i>pending</i> plan</span><span className="counter">{String(scene + 1).padStart(2, '0')} <em>/</em> 04</span></header>
    <div className="progress"><i style={{ width: `${(scene + 1) * 25}%` }} /></div>
    <AnimatePresence mode="wait">
      <motion.section key={scene} className="scene" initial={{ opacity: 0, y: reduce ? 0 : 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: reduce ? 0 : -16 }} transition={{ duration: reduce ? .1 : .48 }}>
        {scene === 0 && <Sorry go={next} reduced={Boolean(reduce)} />}
        {scene === 1 && <TotoScene go={next} />}
        {scene === 2 && <Coffee go={next} />}
        {scene === 3 && <Question yes={yes} setYes={() => setYes(true)} />}
      </motion.section>
    </AnimatePresence>
    {scene > 0 && scene < 3 && <button className="back" onClick={back}>← Back</button>}
    <p className="scene-label">{labels[scene]}</p>
    <p className="admirer-credit">made by your biggest fan<br />and admirer since 2011</p>
  </main>;
}

function Sorry({ go, reduced }: { go: () => void; reduced: boolean }) {
  return <div className="sorry-scene"><KaanPakadkeCharacter reduced={reduced} /><p className="eyebrow">for Ishika, an extremely serious apology</p><h1>Kaan pakadke<br /><i>sorry.</i></h1><p className="lead">Kal tumne bola tha, aur main hi time nahi nikaal paaya. Not my finest moment, I know. 🥺</p><p className="smaller">Toh ek chhota sa sorry… with unnecessarily high production value.</p><Button onClick={go}>Let me make it up to you</Button></div>;
}

function TotoScene({ go }: { go: () => void }) {
  const [honk, setHonk] = useState(false);
  return <div className="toto-scene"><div className="bubble driver">{honk ? 'Didi, bhara komabo... kintu kobe jaben sheta toh bolun! 🛺' : 'Didi, bhara komabo... kintu kobe jaben sheta toh bolun! 🛺'}</div><div className="road"><i /><i /><i /></div><div className="swag"><span>✦</span><span>✦</span></div><Toto festive onClick={() => setHonk(true)} /><p className="eyebrow">town’s most stylish ride</p><h1>The toto-wala<br />has <i>swag.</i></h1><p className="lead">Suna hai aapka preferred mode of transport is a toto… and bargaining is practically an extreme sport.</p><Button onClick={go}>Fine, let him cook</Button></div>;
}

function Coffee({ go }: { go: () => void }) {
  return <div className="coffee-scene"><img className="coffee-supplied" src="/coffee-and-cha.svg" alt="A coffee mug and a Bengali clay cup of cha" /><p className="eyebrow">a gentle plot twist</p><h1>One coffee.<br />One <i>walk.</i></h1><p className="lead">Or cha. Or phuchka. Or water with excellent conversation.<br />I’m flexible. Impressively flexible.</p><Button onClick={go}>Now we’re talking</Button></div>;
}

function Question({ yes, setYes }: { yes: boolean; setYes: () => void }) {
  const [dodge, setDodge] = useState(0);
  const [autoChosen, setAutoChosen] = useState(false);
  const [voiceReady, setVoiceReady] = useState(false);
  const moves = [{ x: 0, y: 0 }, { x: 88, y: -64 }, { x: -76, y: 55 }, { x: 62, y: 76 }, { x: -94, y: -42 }];
  const evade = () => setDodge(n => (n + 1) % moves.length || 1);

  useEffect(() => {
    if (yes) return;
    const timer = window.setTimeout(() => { setAutoChosen(true); setYes(); }, 15000);
    return () => window.clearTimeout(timer);
  }, [yes, setYes]);

  useEffect(() => {
    if (!yes) return;
    const timer = window.setTimeout(() => setVoiceReady(true), 2500);
    return () => window.clearTimeout(timer);
  }, [yes]);

  if (yes) return <div className="yay-scene"><img className="girl-supplied" src="/girl-inspired-animated.svg" alt="A shy animated girl waving hello" /><p className="eyebrow">well, look at us</p><h1>It&apos;s a <i>plan.</i></h1><p className="lead">{autoChosen ? 'Okay, you didn’t click anything… so it’s aaj. I get it.' : 'Aaj it is. The toto is ready, and apparently so are we.'}</p><p className="final-words">I’ve waited several years to see those beautiful eyes and that beautiful smile from a little closer.</p><p className="song-line">Aur na wait karao, madam ji — please mood bana lo. ♪</p>{voiceReady && <div className="voice-finale"><p>One tiny voice note, whenever you feel like hearing it.</p><audio controls preload="metadata"><source src="/ishika-voice-note.aac" type="audio/aac" />Your browser can’t play this voice note.</audio></div>}</div>;

  return <div className="question-scene"><p className="eyebrow">last question. promise.</p><h1>Kobe meet korbe?<br /><i>(aaj pleaseee)</i></h1><p className="lead">Aaj, kal, ba jokhon tumi free?</p><div className="answer-area"><button className="yes-answer" onClick={setYes}>Aaj <span>→</span></button><button className="later-answer" style={{ transform: `translate(${moves[dodge].x}px,${moves[dodge].y}px)` }} onPointerEnter={evade} onPointerDown={evade} onFocus={evade}>Kabhi aur</button></div><p className="tiny-note">Psst… the second one is feeling a little shy.</p></div>;
}
