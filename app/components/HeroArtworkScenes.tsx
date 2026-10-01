type SceneProps = { paint: (name: string) => string };

function Spark({ x, y, size = 1 }: { x: number; y: number; size?: number }) {
  return <g transform={`translate(${x} ${y}) scale(${size})`}><g className="hero-art-spark"><path d="M0-20L5-5L20 0L5 5L0 20L-5 5L-20 0L-5-5Z" fill="currentColor" /></g></g>;
}

function Sun({ paint }: SceneProps) {
  return <g transform="translate(116 136)"><g className="hero-art-float">
    <g className="hero-art-sun-rays" stroke="#eab62d" strokeWidth="2" strokeLinecap="round"><path d="M0-52V-62M0 62V52M-52 0H-62M62 0H52M-36-36L-43-43M43 43L36 36M-36 36L-43 43M43-43L36-36" /></g>
    <circle r="43" fill={paint("yellow")} /><path d="M-12-27C-29-20-33-6-30 4" stroke="white" strokeOpacity=".65" strokeWidth="4" strokeLinecap="round" />
  </g></g>;
}

/** Each scene has a distinct silhouette; the shared book anchors every transition. */
export function KnowledgeScene({ paint }: SceneProps) {
  return <>
    <g className="hero-art-parallax">
      <g className="hero-art-piece"><g className="hero-art-float hero-art-float-slow">
        <path d="M193 370V220C193 163 229 127 282 127C335 127 375 163 375 220V370H193Z" fill="#187baf" />
        <path d="M180 359V214C180 156 220 119 274 119C328 119 368 156 368 214V359H180Z" fill={paint("blue")} />
        <path d="M205 359V215C205 173 235 145 274 145C313 145 343 173 343 215V359H205Z" fill={paint("sky")} />
        <path d="M190 276V216C190 163 225 130 271 130" stroke="white" strokeOpacity=".48" strokeWidth="3" strokeLinecap="round" />
        <path d="M219 224H328M219 250H328M219 276H328M245 193V326M274 170V326M303 193V326" stroke="#11795b" strokeOpacity=".09" />
        <path d="M274 304V340" stroke="#11795b" strokeOpacity=".2" strokeWidth="2" strokeDasharray="3 5" />
        <g color="#ffd12c"><Spark x={274} y={201} /></g>
        <path d="M244 361V348H281V334H313V320H342V361H244Z" fill={paint("orange")} /><path d="M244 348H281M281 334H313M313 320H342" stroke="#fff9ed" strokeOpacity=".65" strokeWidth="2" />
      </g></g>
      <g className="hero-art-piece"><g className="hero-art-sway">
        <path d="M230 390C219 347 201 312 179 280" stroke="#11795b" strokeWidth="7" strokeLinecap="round" />
        <path d="M207 338C157 342 134 313 139 280C179 280 204 304 207 338Z" fill={paint("green")} /><path d="M198 315C194 272 218 245 251 244C256 282 236 309 198 315Z" fill={paint("green")} /><path d="M181 284C145 280 123 254 129 222C164 228 182 251 181 284Z" fill={paint("green")} />
        <path d="M160 302L201 332M221 270L199 312M143 240L178 278" stroke="#fffefa" strokeOpacity=".5" strokeWidth="2" strokeLinecap="round" />
      </g></g>
    </g>
    <g className="hero-art-satellites">
      <Sun paint={paint} />
      <g className="hero-art-float hero-art-float-reverse hero-art-piece">
        <rect x="382" y="119" width="100" height="100" rx="30" transform="rotate(12 432 169)" fill="#e2f5fb" stroke="white" strokeWidth="2" />
        <g transform="translate(432 169)"><g className="hero-art-atom-spin" stroke="#08aade" strokeWidth="2"><ellipse rx="35" ry="13" /><ellipse rx="35" ry="13" transform="rotate(60)" /><ellipse rx="35" ry="13" transform="rotate(120)" /></g><circle r="7" fill="#204b8d" /><circle cx="28" cy="-14" r="4" fill="#f78b37" /></g>
      </g>
      <g className="hero-art-float hero-art-piece">
        <rect x="399" y="285" width="80" height="94" rx="24" transform="rotate(-12 439 332)" fill={paint("blue")} />
        <path d="M429 307H449M433 307V325L420 347C417 353 420 359 426 359H452C458 359 461 353 458 347L445 325V307" stroke="#fff9ed" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /><path d="M426 341H452" stroke="#fff9ed" strokeOpacity=".7" strokeWidth="2" /><circle cx="437" cy="345" r="3" fill="#ffd12c" />
      </g>
      <g color="#e72c88"><Spark x={366} y={86} /></g><g color="#ffd12c"><Spark x={484} y={259} size={.65} /></g>
      <g className="hero-art-float hero-art-float-reverse"><path d="M92 348C67 369 66 390 87 399C103 406 126 395 142 374" stroke="#f78b37" strokeWidth="13" strokeLinecap="round" /></g>
    </g>
  </>;
}

export function AdabScene({ paint }: SceneProps) {
  return <>
    <g className="hero-art-parallax">
      <circle cx="279" cy="238" r="145" fill="#d9f0da" fillOpacity=".5" />
      <g className="hero-art-piece"><g className="hero-art-tree-sway">
        <path d="M279 391V213M279 329L208 278M279 282L342 226M279 233L237 187" stroke="#11795b" strokeWidth="11" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M280 220C233 192 227 130 280 91C331 135 328 190 280 220Z" fill={paint("green")} />
        <path d="M241 246C184 253 149 217 149 163C205 163 239 197 241 246Z" fill={paint("green")} />
        <path d="M295 263C293 205 333 169 389 178C384 237 348 264 295 263Z" fill={paint("green")} />
        <path d="M248 325C185 334 141 303 134 247C195 240 237 271 248 325Z" fill={paint("green")} />
        <path d="M295 336C297 284 339 259 387 266C382 321 346 345 295 336Z" fill={paint("green")} />
        <path d="M280 196V124M222 227L176 187M318 243L364 200M224 309L163 269M318 319L362 286" stroke="#fffefa" strokeOpacity=".55" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="224" cy="272" r="12" fill={paint("orange")} /><circle cx="340" cy="152" r="11" fill={paint("yellow")} />
      </g></g>
      <g className="hero-art-piece"><path d="M244 379C229 345 246 318 270 310C296 335 290 365 274 387" fill="#9bdfb0" /><path d="M277 388C286 352 313 343 338 351C334 379 309 394 277 388Z" fill={paint("green")} /></g>
    </g>
    <g className="hero-art-satellites">
      <g className="hero-art-float hero-art-piece">
        <circle cx="107" cy="172" r="43" fill={paint("yellow")} />
        <path d="M118 146C101 145 88 157 88 173C88 190 102 201 117 198C102 191 102 155 118 146Z" fill="#fff9ed" />
      </g>
      <g className="hero-art-float hero-art-float-reverse hero-art-piece">
        <rect x="397" y="258" width="88" height="88" rx="28" transform="rotate(10 441 302)" fill="#e0f3e5" stroke="white" strokeWidth="2" />
        <path d="M440 327V284M440 310C420 310 411 298 414 283C431 283 441 296 440 310ZM440 304C440 286 453 274 469 278C468 296 457 307 440 304Z" fill={paint("green")} /><path d="M441 325V289" stroke="#11795b" strokeWidth="2" strokeLinecap="round" />
      </g>
      <g transform="translate(113 345)" className="hero-art-piece"><g className="hero-art-float"><path d="M-29 5C-13-7 12-7 29 5V32C10 23-12 24-29 32V5Z" fill={paint("orange")} /><path d="M0 1V28M-22 11L-8 8M8 8L22 11" stroke="#fff9ed" strokeWidth="2" strokeLinecap="round" /></g></g>
      <g color="#ffd12c"><Spark x={422} y={160} /></g><g color="#1aaf70"><Spark x={174} y={86} size={.6} /></g>
      <path d="M363 106C390 109 407 124 408 143M77 272C71 295 76 310 87 321" stroke="#11795b" strokeOpacity=".2" strokeWidth="2" strokeDasharray="3 6" />
    </g>
  </>;
}

function Person({ x, y, color, rotation = 0 }: { x: number; y: number; color: string; rotation?: number }) {
  return <g transform={`translate(${x} ${y}) rotate(${rotation})`}><g className="hero-art-float hero-art-piece"><circle cy="-29" r="16" fill="#fff0d9" /><path d="M-27 33V5C-27-22 27-22 27 5V33C13 42-13 42-27 33Z" fill={color} /><path d="M-16-2C-21 8-17 27-11 31" stroke="white" strokeOpacity=".4" strokeWidth="3" strokeLinecap="round" /></g></g>;
}

export function ServiceScene({ paint }: SceneProps) {
  return <>
    <g className="hero-art-parallax">
      <g className="hero-art-float hero-art-float-slow hero-art-piece">
        <circle cx="282" cy="253" r="111" fill={paint("blue")} />
        <g className="hero-art-globe-lines" stroke="#fff9ed" strokeOpacity=".32" strokeWidth="1.5"><ellipse cx="282" cy="253" rx="53" ry="110" /><ellipse cx="282" cy="253" rx="110" ry="44" /><path d="M172 253H392M282 143V363" /></g>
        <path d="M207 190L236 175L257 186L249 210L266 225L256 248L233 239L227 215L207 210Z" fill="#a1e2bc" /><path d="M302 160L322 163L350 183L345 202L366 221L353 245L327 239L310 211L296 198Z" fill="#a1e2bc" /><path d="M301 274L329 270L344 291L331 309L318 339L299 323L288 300Z" fill="#a1e2bc" />
        <path d="M206 184C188 201 181 220 180 235" stroke="white" strokeOpacity=".5" strokeWidth="4" strokeLinecap="round" />
      </g>
      <path className="hero-art-connection" d="M151 279C174 380 387 388 416 267M175 175C199 94 362 84 391 179" stroke="#e72c88" strokeOpacity=".4" strokeWidth="2" strokeDasharray="5 7" />
      <Person x={149} y={244} color={paint("pink")} rotation={-12} /><Person x={411} y={244} color={paint("orange")} rotation={12} /><Person x={280} y={359} color={paint("green")} />
      <path d="M175 259C183 287 209 322 253 352M307 352C349 323 378 288 386 259" stroke="#fff0d9" strokeWidth="11" strokeLinecap="round" />
      <g className="hero-art-heart"><g className="hero-art-piece"><path d="M281 126C244 103 217 70 237 49C251 34 271 42 281 57C291 42 311 34 325 49C345 70 318 103 281 126Z" fill={paint("pink")} /><path d="M245 56C252 49 262 52 266 59" stroke="white" strokeOpacity=".6" strokeWidth="4" strokeLinecap="round" /></g></g>
    </g>
    <g className="hero-art-satellites">
      <g color="#ffd12c"><Spark x={114} y={125} /></g><g color="#e72c88"><Spark x={452} y={342} size={.65} /></g>
      <g className="hero-art-float hero-art-piece"><circle cx="434" cy="122" r="34" fill={paint("yellow")} /><path d="M418 122L429 133L450 111" stroke="#173953" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></g>
      <circle cx="96" cy="323" r="7" fill="#08aade" /><circle cx="360" cy="83" r="5" fill="#1aaf70" />
    </g>
  </>;
}

export function ArtworkBook({ paint }: SceneProps) {
  return <g className="hero-art-parallax"><g className="hero-art-enter hero-art-book">
    <path d="M102 376C162 353 224 366 279 401C333 366 395 353 457 376L449 447C388 427 334 433 279 464C225 433 169 427 111 447L102 376Z" className="hero-art-book-cover" />
    <path d="M110 363C171 347 226 366 279 396C332 365 389 347 450 363L441 431C383 417 328 431 279 452C231 431 175 417 118 431L110 363Z" fill="#e3cca7" />
    <path d="M112 357C171 342 229 359 279 391C331 359 390 342 448 357L437 420C381 409 326 423 279 446C231 423 177 409 123 420L112 357Z" fill={paint("paper")} />
    <path d="M279 391V446" stroke="#c4af91" strokeWidth="2" /><path d="M123 425C178 414 231 427 272 448M288 448C333 427 385 414 436 425" stroke="#fff9ed" strokeWidth="2" />
    <path d="M147 374C186 371 221 382 250 397M148 387C185 385 218 395 247 410M310 397C341 382 377 371 414 374M312 410C345 395 379 385 411 387" stroke="#b29c7d" strokeOpacity=".42" strokeWidth="2" strokeLinecap="round" />
    <path d="M356 361L373 356L365 408L357 400L348 404L356 361Z" className="hero-art-bookmark" />
  </g></g>;
}
