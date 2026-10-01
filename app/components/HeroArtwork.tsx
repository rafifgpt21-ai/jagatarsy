import { BrandLogo } from "./BrandLogo";

export function HeroArtwork() {
  return (
    <figure className="hero-artwork">
      <div className="hero-artwork-stage">
        <BrandLogo className="hero-brand-logo" size={480} eager />
      </div>
      <figcaption>Ilmu. Adab. Khidmah.</figcaption>
    </figure>
  );
}
