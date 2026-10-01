import { SiteFooter } from "@/app/components/SiteFooter";
import { SiteHeader } from "@/app/components/SiteHeader";

export default function IndonesianSiteLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <a className="skip-link" href="#konten">Lewati ke konten utama</a>
      <SiteHeader locale="id" />
      <main id="konten" tabIndex={-1}>{children}</main>
      <SiteFooter locale="id" />
    </>
  );
}
