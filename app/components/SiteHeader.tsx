"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useLenis } from "lenis/react";
import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";
import { localizedFragment, localizedPath, type Locale } from "@/app/lib/i18n";
import { ThemeIcon } from "./ThemeIcon";
import { BrandLogo } from "./BrandLogo";

const navigation = {
  id: [
    ["Beranda", "/"],
    ["Tentang", "/tentang"],
    ["Pendidikan", "/pendidikan"],
    ["Kelas Peminatan", "/kelas-khusus"],
    ["Kehidupan Santri", "/kehidupan-santri"],
    ["Alumni & Karya", "/outcomes"],
    ["Kabar Pesantren", "/cerita"],
    ["Pendaftaran", "/admissions"],
  ],
  en: [
    ["Home", "/en"],
    ["About", "/en/about"],
    ["Education", "/en/education"],
    ["Special Tracks", "/en/special-tracks"],
    ["Student Life", "/en/student-life"],
    ["Alumni & Student Work", "/en/outcomes"],
    ["Stories", "/en/stories"],
    ["Admissions", "/en/admissions"],
  ],
} as const;

const menuIcons = ["home", "globe", "book", "compass", "heart", "graduation", "palette", "clipboard"] as const;

export function SiteHeader({ locale }: { locale: Locale }) {
  const lenis = useLenis();
  const pathname = usePathname();
  const router = useRouter();
  const isEnglish = locale === "en";
  const links = navigation[locale];
  const languageHref = localizedPath(pathname || (isEnglish ? "/en" : "/"), isEnglish ? "id" : "en");
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    lenis?.stop();
    document.body.style.overflow = "hidden";
    const focusTimer = window.setTimeout(() => {
      if (document.activeElement === buttonRef.current || document.activeElement === document.body) {
        firstLinkRef.current?.focus({ preventScroll: true });
      }
    }, 100);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
        return;
      }
      if (event.key !== "Tab") return;
      const anchors = Array.from(overlayRef.current?.querySelectorAll<HTMLAnchorElement>("a") ?? []);
      const focusable = [buttonRef.current, ...anchors].filter(
        (element): element is HTMLAnchorElement | HTMLButtonElement => element !== null,
      );
      if (focusable.length === 0) return;
      const current = focusable.findIndex((element) => element === document.activeElement);
      const next = event.shiftKey
        ? (current <= 0 ? focusable.length - 1 : current - 1)
        : (current < 0 || current === focusable.length - 1 ? 0 : current + 1);
      event.preventDefault();
      focusable[next]?.focus();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      window.clearTimeout(focusTimer);
      document.body.style.overflow = previousOverflow;
      lenis?.start();
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, lenis]);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <header className={`studio-header${open ? " menu-open" : ""}`}>
        <Link className="studio-brand" href={isEnglish ? "/en" : "/"} onClick={closeMenu} aria-label={isEnglish ? "Jagat ’Arsy, return to home" : "Jagat ’Arsy, kembali ke beranda"}>
          <BrandLogo tone={open ? "white" : "color"} className="navbar-brand-logo" size={64} alt="" eager />
          <span className="theme-brand-copy">JAGAT <span>’ARSY</span></span>
        </Link>
        <div className="studio-header-actions">
          <Link className="studio-header-apply" href={isEnglish ? "/en/admissions" : "/admissions"} onClick={closeMenu} data-analytics-event="apply_now_click">
            {isEnglish ? "Apply now" : "Daftar sekarang"} <ThemeIcon name="arrow" />
          </Link>
          <button
            ref={buttonRef}
            className="studio-menu-button"
            type="button"
            aria-expanded={open}
            aria-controls="studio-menu-overlay"
            aria-label={open ? (isEnglish ? "Close menu" : "Tutup menu") : (isEnglish ? "Open menu" : "Buka menu")}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? (isEnglish ? "Close" : "Tutup") : "Menu"}<ThemeIcon name={open ? "close" : "menu"} />
          </button>
        </div>
      </header>

      <div
        ref={overlayRef}
        id="studio-menu-overlay"
        className={`studio-menu-overlay${open ? " is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label={isEnglish ? "Main navigation" : "Navigasi utama"}
        aria-hidden={!open}
        data-lenis-prevent
      >
        <nav className="studio-overlay-nav" aria-label={isEnglish ? "Main pages" : "Halaman utama"}>
          {links.map(([label, href], index) => (
            <Link
              key={href}
              style={{ "--menu-order": index } as CSSProperties}
              ref={index === 0 ? firstLinkRef : undefined}
              href={href}
              onClick={closeMenu}
              data-analytics-event={href === (isEnglish ? "/en/admissions" : "/admissions") ? "apply_now_click" : undefined}
            >
              <span className="studio-overlay-index" aria-hidden="true"><ThemeIcon name={menuIcons[index]} /></span>
              <span className="studio-overlay-label">{label}</span>
              <span className="studio-overlay-arrow" aria-hidden="true">↗</span>
            </Link>
          ))}
        </nav>
        <div className="studio-overlay-bottom">
          <Link
            className="studio-overlay-language"
            href={languageHref}
            aria-label={isEnglish ? "Baca dalam Bahasa Indonesia" : "Read in English"}
            title={isEnglish ? "Bahasa Indonesia" : "English"}
            onClick={(event) => {
              closeMenu();
              if (window.location.search || window.location.hash) {
                event.preventDefault();
                const currentFragment = window.location.hash.slice(1);
                let decodedFragment = currentFragment;
                try { decodedFragment = decodeURIComponent(currentFragment); } catch { /* Keep the raw fragment if it is malformed. */ }
                const fragment = currentFragment
                  ? localizedFragment(pathname || (isEnglish ? "/en" : "/"), decodedFragment, isEnglish ? "id" : "en")
                  : "";
                router.push(`${languageHref}${window.location.search}${fragment ? `#${encodeURIComponent(fragment)}` : ""}`);
              }
            }}
          >
            {isEnglish ? "Bahasa Indonesia" : "English"}
          </Link>
          <span>{isEnglish ? "World Civilisation Islamic Boarding School · BSD, South Tangerang" : "Pesantren Peradaban Dunia · BSD, Tangerang Selatan"}</span>
          <a href="https://wa.me/628111543738" target="_blank" rel="noreferrer" data-analytics-event="whatsapp_click">
            {isEnglish ? "Contact admissions ↗" : "Hubungi panitia PPDB ↗"}
          </a>
        </div>
      </div>
    </>
  );
}
