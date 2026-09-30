import { useId } from "react";

type ArtworkKind = "growth" | "books" | "bloom" | "steps" | "orbit" | "together" | "stories" | "doorway" | "media" | "enterprise" | "study";

/** Decorative paper sculptures, sharing the five colors of the school identity. */
export function HomeArtwork({ kind, className = "" }: { kind: ArtworkKind; className?: string }) {
  const id = `home-art-${useId().replace(/:/g, "")}`;
  const colors = ["blue", "green", "yellow", "orange", "pink"] as const;
  const paint = (color: typeof colors[number]) => `url(#${id}-${color})`;

  return (
    <div className={`home-artwork home-artwork-${kind} ${className}`} aria-hidden="true">
      <svg viewBox="0 0 300 300" fill="none" focusable="false">
        <defs>
          {colors.map((color) => (
            <linearGradient key={color} id={`${id}-${color}`} x1="0" y1="0" x2=".8" y2="1">
              <stop className={`art-light-${color}`} /><stop offset="1" className={`art-color-${color}`} />
            </linearGradient>
          ))}
        </defs>
        {kind === "media" && <>
          <ellipse cx="150" cy="269" rx="101" ry="12" fill="#173953" opacity=".05" />
          <g className="home-art-piece"><rect x="43" y="83" width="197" height="151" rx="43" transform="rotate(-8 141 159)" fill={paint("blue")} /></g>
          <g className="home-art-piece"><rect x="71" y="57" width="72" height="36" rx="18" transform="rotate(-8 107 75)" fill={paint("green")} /></g>
          <g className="home-art-piece"><circle cx="150" cy="154" r="63" fill="#fff9ed" /><circle cx="150" cy="154" r="49" fill={paint("yellow")} /><circle cx="150" cy="154" r="31" fill="#173953" /><ellipse cx="140" cy="143" rx="10" ry="13" transform="rotate(35 140 143)" fill="white" fillOpacity=".7" /></g>
          <g className="home-art-piece"><rect x="213" y="174" width="37" height="83" rx="18.5" transform="rotate(20 231 215)" fill={paint("orange")} /></g>
          <g className="home-art-piece"><circle cx="241" cy="56" r="29" fill={paint("pink")} /><path d="M235 44L252 56L235 68V44Z" fill="#fff9ed" /></g>
          <path d="M71 118L84 116M71 136L84 134" stroke="#173953" strokeOpacity=".4" strokeWidth="3" strokeLinecap="round" />
        </>}
        {kind === "enterprise" && <>
          <ellipse cx="155" cy="270" rx="103" ry="12" fill="#173953" opacity=".05" />
          <g className="home-art-piece"><path d="M42 245V130H236V245A18 18 0 0 1 218 263H60A18 18 0 0 1 42 245Z" fill={paint("blue")} /></g>
          <g className="home-art-piece"><path d="M30 105L59 63H217L248 105V130H30V105Z" fill={paint("green")} /><path d="M30 128C30 144 54 151 72 128C87 147 108 147 121 128C135 147 156 147 169 128C185 149 205 146 216 128C229 146 248 139 248 128" fill={paint("green")} /></g>
          <g className="home-art-piece"><rect x="66" y="172" width="65" height="65" rx="18" fill={paint("yellow")} /><path d="M97 185V224M80 204H115" stroke="#173953" strokeOpacity=".28" strokeWidth="2" /></g>
          <g className="home-art-piece"><rect x="159" y="172" width="51" height="91" rx="25.5" fill={paint("orange")} /><circle cx="194" cy="222" r="3" fill="#173953" /></g>
          <g className="home-art-piece"><circle cx="236" cy="201" r="35" fill={paint("pink")} /><circle cx="236" cy="201" r="22" stroke="white" strokeOpacity=".55" strokeWidth="2" /><path d="M226 202L233 209L247 194" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></g>
          <g className="home-art-piece"><circle cx="96" cy="34" r="22" fill={paint("yellow")} /><path d="M96 23V45M88 28H104M88 40H104" stroke="#173953" strokeOpacity=".3" strokeWidth="2" strokeLinecap="round" /></g>
        </>}
        {kind === "study" && <>
          <ellipse cx="151" cy="268" rx="108" ry="12" fill="#173953" opacity=".05" />
          <g className="home-art-piece"><circle cx="156" cy="110" r="86" fill={paint("yellow")} /></g>
          <g className="home-art-piece"><path d="M26 110C74 85 115 97 150 118C187 96 230 86 275 110V230C225 209 187 213 150 236C115 213 74 213 26 230V110Z" fill={paint("green")} /></g>
          <g className="home-art-piece"><path d="M37 99C81 80 117 88 150 111V218C114 199 79 195 37 215V99Z" fill={paint("blue")} /></g>
          <g className="home-art-piece"><path d="M150 111C182 88 222 80 264 99V215C222 195 185 199 150 218V111Z" fill="#fff9ed" /></g>
          <g className="home-art-piece"><path d="M218 91L239 94V175L229 165L218 171V91Z" fill={paint("pink")} /></g>
          <g className="home-art-piece"><rect x="72" y="239" width="160" height="17" rx="8.5" transform="rotate(-4 152 247)" fill={paint("orange")} /></g>
          <path d="M57 120C86 110 108 116 130 129M57 142C85 132 109 139 130 150M57 164C85 154 108 160 130 171M173 129C184 122 197 118 207 118M173 151C184 144 197 140 207 140M173 172C194 162 213 163 242 171" stroke="#173953" strokeOpacity=".28" strokeWidth="2.5" strokeLinecap="round" />
        </>}
        {kind === "growth" && <>
          <ellipse cx="153" cy="268" rx="95" ry="11" fill="#173953" opacity=".05" />
          <g className="home-art-piece"><path d="M150 230C56 230 23 174 37 99C106 97 154 145 150 230Z" fill={paint("blue")} /></g>
          <g className="home-art-piece"><path d="M150 226C107 164 95 72 151 30C210 77 190 165 150 226Z" fill={paint("green")} /></g>
          <g className="home-art-piece"><path d="M150 230C154 151 206 110 271 113C280 188 237 238 150 230Z" fill={paint("yellow")} /></g>
          <g className="home-art-piece"><rect x="105" y="218" width="95" height="40" rx="20" fill={paint("orange")} /></g>
          <g className="home-art-piece"><circle cx="235" cy="57" r="22" fill={paint("pink")} /></g>
          <path d="M150 230V102M150 224L79 149M150 224L227 157" stroke="#173953" strokeOpacity=".25" strokeWidth="2" strokeLinecap="round" />
        </>}
        {kind === "books" && <>
          <g className="home-art-piece"><rect x="31" y="207" width="227" height="45" rx="22.5" fill={paint("blue")} /><path d="M55 229H229" stroke="white" strokeOpacity=".6" strokeWidth="3" strokeLinecap="round" /></g>
          <g className="home-art-piece"><rect x="53" y="151" width="227" height="45" rx="22.5" transform="rotate(-9 166 174)" fill={paint("green")} /></g>
          <g className="home-art-piece"><rect x="23" y="95" width="227" height="45" rx="22.5" transform="rotate(7 136 117)" fill={paint("yellow")} /></g>
          <g className="home-art-piece"><circle cx="104" cy="58" r="27" fill={paint("orange")} /></g>
          <g className="home-art-piece"><ellipse cx="226" cy="60" rx="39" ry="24" transform="rotate(-25 226 60)" fill={paint("pink")} /></g>
        </>}
        {kind === "bloom" && <>
          {colors.map((color, index) => <g className="home-art-piece" key={color}><ellipse cx="150" cy="88" rx="42" ry="67" transform={`rotate(${index * 72} 150 150)`} fill={paint(color)} /></g>)}
          <circle cx="150" cy="150" r="32" fill="#fff9ed" /><circle cx="150" cy="150" r="8" fill="#173953" />
        </>}
        {kind === "steps" && <>
          <g className="home-art-piece"><path d="M24 252V203A38 38 0 0 1 100 203V252Z" fill={paint("blue")} /></g>
          <g className="home-art-piece"><path d="M100 252V142A38 38 0 0 1 176 142V252Z" fill={paint("green")} /></g>
          <g className="home-art-piece"><path d="M176 252V81A38 38 0 0 1 252 81V252Z" fill={paint("yellow")} /></g>
          <g className="home-art-piece"><circle cx="51" cy="135" r="18" fill={paint("orange")} /></g>
          <g className="home-art-piece"><path d="M259 17L267 38L288 46L267 54L259 75L251 54L230 46L251 38Z" fill={paint("pink")} /></g>
        </>}
        {kind === "orbit" && <>
          <ellipse cx="150" cy="153" rx="139" ry="65" transform="rotate(-30 150 153)" stroke="#204b8d" strokeOpacity=".25" strokeWidth="1.5" />
          <g className="home-art-piece"><circle cx="150" cy="151" r="86" fill={paint("blue")} /><path d="M68 151H232M150 65C96 112 96 190 150 237C204 190 204 112 150 65ZM81 111C122 133 178 133 219 111M81 192C122 170 178 170 219 192" stroke="#fff9ed" strokeOpacity=".65" strokeWidth="2" /></g>
          <g className="home-art-piece"><ellipse cx="62" cy="224" rx="30" ry="21" transform="rotate(-30 62 224)" fill={paint("green")} /></g>
          <g className="home-art-piece"><circle cx="251" cy="75" r="25" fill={paint("yellow")} /></g>
          <g className="home-art-piece"><circle cx="59" cy="55" r="15" fill={paint("orange")} /></g>
          <g className="home-art-piece"><rect x="206" y="232" width="64" height="24" rx="12" transform="rotate(-25 238 244)" fill={paint("pink")} /></g>
        </>}
        {kind === "together" && <>
          <g className="home-art-piece"><path d="M26 207V115A51 51 0 0 1 128 115V155H90V115A13 13 0 0 0 64 115V207Z" fill={paint("blue")} /></g>
          <g className="home-art-piece"><path d="M93 205V158A51 51 0 0 1 195 158V251H157V158A13 13 0 0 0 131 158V205Z" fill={paint("green")} /></g>
          <g className="home-art-piece"><path d="M169 160V106A51 51 0 0 1 271 106V207H233V106A13 13 0 0 0 207 106V160Z" fill={paint("yellow")} /></g>
          <g className="home-art-piece"><circle cx="114" cy="48" r="22" fill={paint("orange")} /></g>
          <g className="home-art-piece"><circle cx="258" cy="246" r="22" fill={paint("pink")} /></g>
        </>}
        {kind === "stories" && <>
          <g className="home-art-piece"><rect x="40" y="54" width="164" height="211" rx="28" transform="rotate(-10 122 159)" fill={paint("blue")} /></g>
          <g className="home-art-piece"><path d="M100 37H204L258 91V224A25 25 0 0 1 233 249H100A25 25 0 0 1 75 224V62A25 25 0 0 1 100 37Z" fill={paint("yellow")} /><path d="M204 37V67A24 24 0 0 0 228 91H258" fill={paint("orange")} /></g>
          <path d="M110 109H175M110 132H207M110 155H184" stroke="#173953" strokeOpacity=".35" strokeWidth="3" strokeLinecap="round" />
          <g className="home-art-piece"><path d="M177 248C155 208 167 174 196 166C227 157 253 191 245 225C222 223 197 232 177 248Z" fill={paint("pink")} /></g>
          <g className="home-art-piece"><circle cx="50" cy="42" r="16" fill={paint("green")} /></g>
        </>}
        {kind === "doorway" && <>
          <g className="home-art-piece"><path d="M38 259V133A113 113 0 0 1 264 133V259H216V133A65 65 0 0 0 86 133V259Z" fill={paint("blue")} /></g>
          <g className="home-art-piece"><path d="M86 259V133A65 65 0 0 1 216 133V259H180V133A29 29 0 0 0 122 133V259Z" fill={paint("green")} /></g>
          <g className="home-art-piece"><circle cx="151" cy="134" r="23" fill={paint("yellow")} /></g>
          <g className="home-art-piece"><rect x="126" y="213" width="132" height="40" rx="20" transform="rotate(-16 192 233)" fill={paint("orange")} /></g>
          <g className="home-art-piece"><path d="M50 43L57 65L80 72L57 79L50 101L43 79L20 72L43 65Z" fill={paint("pink")} /></g>
        </>}
      </svg>
    </div>
  );
}
