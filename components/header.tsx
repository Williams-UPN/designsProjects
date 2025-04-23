"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { inter } from "@/config/fonts";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";

// Datos estáticos
const logoLinks = [
  { id: 1, url: "/Nosotros", text: "Nosotros", isExternal: false },
  { id: 2, url: "/Proyectos", text: "Proyectos", isExternal: false },
  { id: 3, url: "/Contacto", text: "Contacto", isExternal: false },
];

const ctaButton = {
  id: 99,
  text: "COTIZAR AHORA",
  url: "/cotizar",
  isExternal: false,
};

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const showInicio = pathname !== "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const finalLinks = showInicio
    ? [{ id: 0, url: "/", text: "Inicio", isExternal: false }, ...logoLinks]
    : logoLinks;

  return (
    <>
      <header
        className={`
          ${inter.className}
          fixed top-0 left-0 w-full z-50
          transition-all duration-300
          ${isScrolled ? "bg-[#3EA6D2]/30 shadow-md h-16" : "bg-[#FFFFFF] h-24"}
          text-white
          backdrop-blur-sm
        `}
      >
        <div className="container mx-auto flex items-center justify-between px-4 md:px-8 h-full">
          {/* Logo estático */}
          <Logo text="" isScrolled={isScrolled} />

          {/* Menú de escritorio */}
          <div className="hidden md:flex ml-auto items-center space-x-6">
            {finalLinks.map((link) => (
              <Link
                key={link.id}
                href={link.url}
                className="font-medium text-slate-900 hover:text-[#B4000A] transition-colors"
                target={link.isExternal ? "_blank" : "_self"}
                rel={link.isExternal ? "noopener noreferrer" : undefined}
              >
                {link.text}
              </Link>
            ))}

            <Link href={ctaButton.url}>
              <Button className="bg-[#B4000A] text-white hover:bg-[#B4000A]/90">
                {ctaButton.text}
              </Button>
            </Link>
          </div>

          {/* Botón hamburguesa móvil */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-slate-900 focus:outline-none"
              aria-label="Abrir menú"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Menú móvil desplegable */}
        {menuOpen && (
          <nav className="absolute top-[calc(100%+0.5rem)] left-0 w-full bg-[#3EA6D2] border-t border-[#3EA6D2] shadow-md px-4 py-4 flex flex-col space-y-3 md:hidden text-white">
            {finalLinks.map((link) => (
              <Link
                key={link.id}
                href={link.url}
                className="font-medium hover:text-[#B4000A] transition-colors"
                target={link.isExternal ? "_blank" : "_self"}
                rel={link.isExternal ? "noopener noreferrer" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {link.text}
              </Link>
            ))}

            <Link href={ctaButton.url} onClick={() => setMenuOpen(false)}>
              <Button className="bg-[#B4000A] text-white hover:bg-[#B4000A]/90 w-full">
                {ctaButton.text}
              </Button>
            </Link>
          </nav>
        )}
      </header>

      {/* Espaciador para que el contenido no quede tapado */}
      <div className={isScrolled ? "h-16" : "h-24"} />
    </>
  );
}
