import Image from "next/image";

export function HeroArtwork() {
  return (
    <figure className="hero-artwork">
      <div className="hero-artwork-stage">
        <svg className="hero-art-sculpture" viewBox="0 0 600 620" fill="none" aria-hidden="true" focusable="false">
          <defs>
            <linearGradient id="hero-blue" x1="60" y1="35" x2="205" y2="410" gradientUnits="userSpaceOnUse">
              <stop stopColor="#65d5ef" /><stop offset="1" stopColor="#08aade" />
            </linearGradient>
            <linearGradient id="hero-green" x1="55" y1="375" x2="280" y2="570" gradientUnits="userSpaceOnUse">
              <stop stopColor="#55d6a1" /><stop offset="1" stopColor="#1aaf70" />
            </linearGradient>
            <linearGradient id="hero-yellow" x1="230" y1="15" x2="350" y2="210" gradientUnits="userSpaceOnUse">
              <stop stopColor="#ffe888" /><stop offset="1" stopColor="#ffd12c" />
            </linearGradient>
            <linearGradient id="hero-orange" x1="430" y1="140" x2="550" y2="450" gradientUnits="userSpaceOnUse">
              <stop stopColor="#ffb477" /><stop offset="1" stopColor="#f78b37" />
            </linearGradient>
            <linearGradient id="hero-pink" x1="360" y1="480" x2="550" y2="585" gradientUnits="userSpaceOnUse">
              <stop stopColor="#f67fbb" /><stop offset="1" stopColor="#e72c88" />
            </linearGradient>
            <filter id="hero-soft-shadow" x="-35%" y="-35%" width="170%" height="190%">
              <feDropShadow dx="0" dy="12" stdDeviation="12" floodColor="#173953" floodOpacity=".12" />
            </filter>
          </defs>
          <ellipse cx="307" cy="328" rx="277" ry="207" transform="rotate(-28 307 328)" stroke="#204b8d" strokeOpacity=".13" strokeWidth="1.2" />
          <g className="hero-art-piece" filter="url(#hero-soft-shadow)">
            <path d="M80 381C14 246 4 133 76 71C137 17 223 44 245 103C269 167 227 221 191 270L139 405L80 381Z" fill="url(#hero-blue)" />
          </g>
          <g className="hero-art-piece" filter="url(#hero-soft-shadow)">
            <path d="M266 574C132 602 32 538 26 458C20 375 104 345 170 380C235 415 254 503 266 574Z" fill="url(#hero-green)" />
          </g>
          <g className="hero-art-piece" filter="url(#hero-soft-shadow)">
            <circle cx="310" cy="116" r="98" fill="url(#hero-yellow)" />
          </g>
          <g className="hero-art-piece" filter="url(#hero-soft-shadow)">
            <rect x="413" y="167" width="129" height="326" rx="64.5" transform="rotate(17 477 330)" fill="url(#hero-orange)" />
          </g>
          <g className="hero-art-piece" filter="url(#hero-soft-shadow)">
            <rect x="349" y="479" width="208" height="100" rx="50" transform="rotate(-15 453 529)" fill="url(#hero-pink)" />
          </g>
          <circle cx="78" cy="314" r="5" fill="#204b8d" fillOpacity=".55" />
          <circle cx="354" cy="600" r="4" fill="#204b8d" fillOpacity=".35" />
        </svg>
        <div className="studio-hero-photo hero-artwork-photo">
          <Image
            src="/images/rbl-santri.jpg"
            alt="Santri Jagat ‘Arsy menyampaikan hasil penelitian dalam kegiatan Research-Based Learning"
            fill
            loading="eager"
            fetchPriority="high"
            sizes="(max-width: 700px) 64vw, (max-width: 980px) 360px, 28vw"
            className="studio-hero-image"
          />
        </div>
      </div>
      <figcaption>Ilmu. Adab. Khidmah.</figcaption>
    </figure>
  );
}
