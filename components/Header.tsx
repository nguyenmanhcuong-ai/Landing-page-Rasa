"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const nav = [
  { href: "/#rau-cu-nam", label: "Rau củ nấm" },
  { href: "/#cach-doc", label: "Cách đọc thông tin" },
  { href: "/#ve-rasa", label: "Về Rasa" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-forest shadow-lg shadow-forest-900/10">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:h-20 sm:px-6">
        <Link href="/" className="flex items-center gap-3" aria-label="Rasa – Trang chủ" onClick={() => setOpen(false)}>
          <Image
            src="/logo.jpg"
            alt="Logo Rasa – ngon & lành"
            width={447}
            height={447}
            priority
            className="h-12 w-12 rounded-md sm:h-16 sm:w-16"
          />
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-white/80 md:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-sand">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="tel:19006644"
            className="inline-flex h-11 items-center gap-2 rounded-full border border-sand/60 px-4 text-sm font-semibold text-white transition hover:bg-sand hover:text-forest"
          >
            <PhoneIcon />
            1900 66 44
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Đóng menu" : "Mở menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-white transition hover:bg-white/10 md:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`fixed inset-x-0 bottom-0 top-16 bg-forest transition md:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <nav className="flex flex-col px-6 pt-6">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-white/10 py-5 font-serif text-2xl text-white active:text-sand"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
    </svg>
  );
}
