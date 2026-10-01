"use client";

import { useEffect, useId, useRef, useState, type PointerEvent } from "react";
import type { Locale } from "@/app/lib/i18n";
import { AdabScene, ArtworkBook, KnowledgeScene, ServiceScene } from "./HeroArtworkScenes";

type World = { id: "ilmu" | "adab" | "khidmah"; label: string; title: string; description: string; text: string };

const indonesianWorlds: World[] = [
  { id: "ilmu", label: "Ilmu", title: "Gerbang ilmu dan penjelajahan sains", description: "Gerbang biru tumbuh dari buku terbuka, bersama atom, tabung riset, matahari, dan bintang.", text: "Rasa ingin tahu membuka semesta baru." },
  { id: "adab", label: "Adab", title: "Pohon adab yang berakar pada ilmu", description: "Pohon hijau berdaun lebat tumbuh dari buku terbuka, bersama bulan sabit, tunas, dan buah.", text: "Berakar pada adab. Bertumbuh dengan ilmu." },
  { id: "khidmah", label: "Khidmah", title: "Khidmah dan kepedulian bagi dunia", description: "Globe dikelilingi tiga figur yang saling terhubung, dengan hati merah muda di atas dan buku terbuka sebagai landasan.", text: "Tumbuh bersama, memberi arti bagi sesama." },
];

const englishWorlds: World[] = [
  { id: "ilmu", label: "Knowledge", title: "A gateway to knowledge and scientific discovery", description: "A blue gateway rises from an open book alongside an atom, a research flask, the sun, and stars.", text: "Curiosity opens the way to new discoveries." },
  { id: "adab", label: "Good conduct", title: "A tree of good conduct rooted in knowledge", description: "A leafy green tree grows from an open book alongside a crescent moon, a seedling, and fruit.", text: "Rooted in good conduct. Growing through knowledge." },
  { id: "khidmah", label: "Service", title: "Service and care for the wider world", description: "Three connected figures surround a globe, with a pink heart above and an open book beneath.", text: "Growing together and contributing to others." },
];

/** A living paper sculpture: knowledge opens a doorway to growth and service. */
export function HeroArtwork({ locale = "id" }: { locale?: Locale }) {
  const id = `hero-${useId().replace(/:/g, "")}`;
  const isEnglish = locale === "en";
  const worlds = isEnglish ? englishWorlds : indonesianWorlds;
  const figureRef = useRef<HTMLElement>(null);
  const [selectedWorldId, setSelectedWorldId] = useState<World["id"]>("ilmu");
  const world = worlds.find((item) => item.id === selectedWorldId) ?? worlds[0];
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(true);
  const [replay, setReplay] = useState(0);
  const paint = (name: string) => `url(#${id}-${name})`;

  useEffect(() => {
    const figure = figureRef.current;
    if (!figure) return;
    let inView = true;
    const update = () => setVisible(inView && !document.hidden);
    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      update();
    }, { threshold: 0.1 });
    observer.observe(figure);
    document.addEventListener("visibilitychange", update);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", update);
    };
  }, []);

  const resetPointer = () => {
    figureRef.current?.style.setProperty("--art-x", "0px");
    figureRef.current?.style.setProperty("--art-y", "0px");
  };

  const movePointer = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse" || paused) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    figureRef.current?.style.setProperty("--art-x", `${((event.clientX - bounds.left) / bounds.width - 0.5) * 16}px`);
    figureRef.current?.style.setProperty("--art-y", `${((event.clientY - bounds.top) / bounds.height - 0.5) * 12}px`);
  };

  return (
    <figure ref={figureRef} className="hero-artwork" data-world={world.id} data-running={!paused && visible} aria-label={isEnglish ? "Learning worlds" : "Semesta belajar"}>
      <div className="hero-artwork-stage" onPointerMove={movePointer} onPointerLeave={resetPointer}>
        <span className="hero-artwork-eyebrow" aria-hidden="true"><span /> {isEnglish ? "LEARNING WORLDS" : "SEMESTA BELAJAR"}</span>
        <svg className="hero-learning-art" viewBox="0 0 560 540" fill="none" role="img" aria-labelledby={`${id}-title ${id}-description`}>
          <title id={`${id}-title`}>{world.title}</title>
          <desc id={`${id}-description`}>{world.description}</desc>
          <defs>
            <linearGradient id={`${id}-blue`} x1="0" y1="0" x2="1" y2="1"><stop stopColor="#77def0" /><stop offset=".5" stopColor="#08aade" /><stop offset="1" stopColor="#207cbb" /></linearGradient>
            <linearGradient id={`${id}-green`} x1="0" y1="0" x2="1" y2="1"><stop stopColor="#75dda4" /><stop offset="1" stopColor="#119764" /></linearGradient>
            <linearGradient id={`${id}-yellow`} x1="0" y1="0" x2="1" y2="1"><stop stopColor="#ffeaa0" /><stop offset=".55" stopColor="#ffd12c" /><stop offset="1" stopColor="#f5ac27" /></linearGradient>
            <linearGradient id={`${id}-pink`} x1="0" y1="0" x2="1" y2="1"><stop stopColor="#fc9bc6" /><stop offset="1" stopColor="#e72c88" /></linearGradient>
            <linearGradient id={`${id}-paper`} x1="280" y1="358" x2="280" y2="460" gradientUnits="userSpaceOnUse"><stop stopColor="#fffefa" /><stop offset="1" stopColor="#f0dfbd" /></linearGradient>
            <linearGradient id={`${id}-sky`} x1="280" y1="163" x2="280" y2="372" gradientUnits="userSpaceOnUse"><stop stopColor="#d5f4f1" /><stop offset="1" stopColor="#fff9ed" /></linearGradient>
            <linearGradient id={`${id}-orange`} x1="0" y1="0" x2="1" y2="1"><stop stopColor="#ffd49a" /><stop offset="1" stopColor="#f78b37" /></linearGradient>
            <radialGradient id={`${id}-halo`}><stop className="hero-art-halo-color" stopOpacity=".65" /><stop className="hero-art-halo-color" offset="1" stopOpacity="0" /></radialGradient>
          </defs>
          <g key={replay}>
            <circle cx="290" cy="285" r="228" fill={paint("halo")} />
            <g className="hero-art-enter hero-art-orbits">
              <ellipse cx="286" cy="276" rx="228" ry="172" transform="rotate(-25 286 276)" stroke="currentColor" strokeOpacity=".15" strokeDasharray="3 8" />
              <path d="M69 303C30 191 130 66 277 72M379 105C477 153 515 259 474 360" stroke="currentColor" strokeOpacity=".1" />
              <circle cx="277" cy="72" r="4" fill="#1aaf70" /><circle cx="69" cy="303" r="4" fill="#f78b37" />
              <g className="hero-art-orbit-dot"><circle cx="485" cy="230" r="6" fill="currentColor" /></g>
            </g>
            <ellipse className="hero-art-ground" cx="281" cy="465" rx="164" ry="19" fill="#173953" fillOpacity=".07" />
            <g className="hero-art-enter hero-art-universe">
              <g className="hero-art-scene" data-scene="ilmu" aria-hidden={world.id !== "ilmu"}><KnowledgeScene paint={paint} /></g>
              <g className="hero-art-scene" data-scene="adab" aria-hidden={world.id !== "adab"}><AdabScene paint={paint} /></g>
              <g className="hero-art-scene" data-scene="khidmah" aria-hidden={world.id !== "khidmah"}><ServiceScene paint={paint} /></g>
            </g>
            <ArtworkBook paint={paint} />
          </g>
        </svg>
      </div>
      <figcaption>
        <div className="hero-artwork-controls">
          <div className="hero-artwork-worlds" role="group" aria-label={isEnglish ? "Explore the school values" : "Jelajahi nilai"}>
            {worlds.map((item) => <button key={item.id} type="button" className={`hero-world hero-world-${item.id}`} aria-pressed={world.id === item.id} onClick={() => { resetPointer(); setSelectedWorldId(item.id); }}><span aria-hidden="true" />{item.label}</button>)}
          </div>
          <div className="hero-artwork-playback">
            <button type="button" className="hero-art-control" aria-label={isEnglish ? "Replay artwork animation" : "Putar ulang animasi artwork"} title={isEnglish ? "Replay" : "Putar ulang"} onClick={() => { resetPointer(); setPaused(false); setReplay((value) => value + 1); }}><svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M4 8a6 6 0 1 1 0 5M4 3v5h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></button>
            <button type="button" className="hero-art-control" aria-label={paused ? (isEnglish ? "Resume artwork animation" : "Lanjutkan animasi artwork") : (isEnglish ? "Pause artwork animation" : "Jeda animasi artwork")} title={paused ? (isEnglish ? "Resume animation" : "Lanjutkan animasi") : (isEnglish ? "Pause animation" : "Jeda animasi")} aria-pressed={paused} onClick={() => { resetPointer(); setPaused((value) => !value); }}><svg viewBox="0 0 20 20" fill="none" aria-hidden="true">{paused ? <path d="M7 4L15 10L7 16V4Z" fill="currentColor" /> : <path d="M7 5V15M13 5V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />}</svg></button>
          </div>
        </div>
        <p className="hero-artwork-caption" aria-live="polite" aria-atomic="true">{world.text}</p>
      </figcaption>
    </figure>
  );
}
