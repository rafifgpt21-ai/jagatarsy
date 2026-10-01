import Image from "next/image";

type BrandLogoProps = {
  tone?: "color" | "white" | "navy";
  size?: number;
  className?: string;
  alt?: string;
  eager?: boolean;
};

const sources = {
  color: "/brand/jagat-arsy.svg",
  white: "/brand/jagat-arsy-white.svg",
  navy: "/brand/jagat-arsy-navy.svg",
};

export function BrandLogo({
  tone = "color",
  size = 64,
  className = "",
  alt = "Logo Pesantren Peradaban Dunia Jagat ‘Arsy",
  eager = false,
}: BrandLogoProps) {
  return (
    <Image
      src={sources[tone]}
      alt={alt}
      width={size}
      height={size}
      className={`brand-logo ${className}`.trim()}
      loading={eager ? "eager" : "lazy"}
      unoptimized
    />
  );
}
