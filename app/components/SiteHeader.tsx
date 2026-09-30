"use client";

import Link from "next/link";
import { useLenis } from "lenis/react";
import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";
import { ThemeIcon } from "./ThemeIcon";

const navigation = [
  ["Beranda", "/"],
  ["Tentang", "/tentang"],
  ["Pendidikan", "/pendidikan"],
  ["Kelas Peminatan", "/kelas-khusus"],
  ["Kehidupan Santri", "/kehidupan-santri"],
  ["Alumni & Karya", "/outcomes"],
  ["Kabar Pesantren", "/cerita"],
  ["Pendaftaran", "/admissions"],
] as const;

export function SiteHeader() {
  const lenis = useLenis();
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    lenis?.stop();
    document.body.style.overflow = "hidden";
    // Let the opening transition make the overlay visible before moving focus.
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
      const links = Array.from(overlayRef.current?.querySelectorAll<HTMLAnchorElement>("a") ?? []);
      const focusable = [buttonRef.current, ...links].filter(
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
        <Link className="studio-brand" href="/" onClick={closeMenu} aria-label="Jagat ‘Arsy, kembali ke beranda">
          <span className="theme-brand-mark" aria-hidden="true"><ThemeIcon name="globe" /></span>
          <span className="theme-brand-copy">JAGAT <span>‘ARSY</span></span>
        </Link>
        <div className="studio-header-actions">
          <Link className="studio-header-apply" href="/admissions" onClick={closeMenu} data-analytics-event="apply_now_click">
            PPDB <ThemeIcon name="arrow" />
          </Link>
          <button
            ref={buttonRef}
            className="studio-menu-button"
            type="button"
            aria-expanded={open}
            aria-controls="studio-menu-overlay"
            aria-label={open ? "Tutup menu" : "Buka menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "Tutup" : "Menu"}<ThemeIcon name={open ? "close" : "menu"} />
          </button>
        </div>
      </header>

      <div
        ref={overlayRef}
        id="studio-menu-overlay"
        className={`studio-menu-overlay${open ? " is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigasi utama"
        aria-hidden={!open}
        data-lenis-prevent
      >
        <nav className="studio-overlay-nav" aria-label="Halaman utama">
          {navigation.map(([label, href], index) => (
            <Link
              key={href}
              style={{ "--menu-order": index } as CSSProperties}
              ref={index === 0 ? firstLinkRef : undefined}
              href={href}
              onClick={closeMenu}
              data-analytics-event={href === "/admissions" ? "apply_now_click" : undefined}
            >
              <span className="studio-overlay-index" aria-hidden="true"><ThemeIcon name={(["home", "globe", "book", "compass", "heart", "graduation", "palette", "clipboard"] as const)[index]} /></span>
              <span className="studio-overlay-label">{label}</span>
              <span className="studio-overlay-arrow" aria-hidden="true">↗</span>
            </Link>
          ))}
        </nav>
        <div className="studio-overlay-bottom">
          <span>Pesantren Peradaban Dunia · BSD, Tangerang Selatan</span>
          <a href="https://wa.me/628111543738" target="_blank" rel="noreferrer" data-analytics-event="whatsapp_click">
            Hubungi panitia PPDB ↗
          </a>
        </div>
      </div>
    </>
  );
}
