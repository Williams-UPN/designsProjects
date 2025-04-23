// components/logo.tsx
import Link from "next/link";
import React from "react";

interface LogoProps {
  text?: string;
  dark?: boolean;
  isScrolled?: boolean;
}

export function Logo({
  text = "Logo Text",
  dark = false,
  isScrolled = false,
}: Readonly<LogoProps>) {
  // Tamaños según scroll
  const size = isScrolled ? 40 : 60;

  return (
    <Link className="flex items-center gap-2" href="/">
      {/* Imagen estática en public/image/logo.png */}
      <img
        src="/image/logo.png"
        alt="Logo"
        width={size}
        height={size}
        className="object-cover transition-all duration-300"
      />

      <span
        className={`
          text-lg font-semibold transition-all duration-300
          ${dark ? "text-white" : "text-slate-900"}
          ${isScrolled ? "text-base" : "text-xl"}
        `}
      >
        {text}
      </span>
    </Link>
  );
}
