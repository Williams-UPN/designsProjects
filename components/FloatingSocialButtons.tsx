"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FaYoutube,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaPlus,
  FaMinus,
  FaEnvelope,
} from "react-icons/fa";
import { SiTiktok } from "react-icons/si";

interface SocialLink {
  id: number;
  text: string;
  url: string;
  isExternal: boolean;
}

export function FloatingSocialButtons() {
  const [open, setOpen] = useState(false);

  // ————— Datos estáticos —————
  const socialLinks: SocialLink[] = [
    { id: 1, text: "YouTube", url: "https://www.youtube.com/@ConstruIngenio", isExternal: true },
    { id: 2, text: "TikTok", url: "https://www.tiktok.com/@construingenio?_t=8lAlinhyUDu&_r=1", isExternal: true },
    { id: 3, text: "Facebook", url: "https://www.facebook.com/profile.php?id=61559248537718&mibextid=ZbWKwL", isExternal: true },
    { id: 4, text: "Instagram", url: "https://www.instagram.com/construingenio18/", isExternal: true },
    { id: 5, text: "WhatsApp", url: "https://wa.me/51956498610", isExternal: true },
    { id: 6, text: "Correo", url: "Construingenio18@gmail.com", isExternal: false },
  ];
  // ——————————————————————

  function getBrandColor(url: string) {
    if (url.includes("youtube")) return "bg-red-600 hover:bg-red-700";
    if (url.includes("tiktok")) return "bg-black hover:bg-gray-800";
    if (url.includes("facebook")) return "bg-blue-600 hover:bg-blue-700";
    if (url.includes("instagram")) return "bg-pink-500 hover:bg-pink-600";
    if (url.includes("whatsapp") || url.includes("wa.me"))
      return "bg-green-500 hover:bg-green-600";
    if (url.includes("@")) return "bg-red-500 hover:bg-red-600";
    return "bg-gray-500 hover:bg-gray-600";
  }

  function selectSocialIcon(url: string) {
    if (url.includes("youtube")) return <FaYoutube className="w-6 h-6" />;
    if (url.includes("tiktok")) return <SiTiktok className="w-6 h-6" />;
    if (url.includes("facebook")) return <FaFacebookF className="w-6 h-6" />;
    if (url.includes("instagram")) return <FaInstagram className="w-6 h-6" />;
    if (url.includes("whatsapp") || url.includes("wa.me"))
      return <FaWhatsapp className="w-6 h-6" />;
    if (url.includes("@")) return <FaEnvelope className="w-6 h-6" />;
    return null;
  }

  function isValidEmail(url: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(url);
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end">
      {/* Botón principal */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="
            bg-red-500 text-white p-4 rounded-full shadow-lg
            transition-transform duration-300
            hover:scale-110
            focus:outline-none
          "
          aria-label="Abrir redes sociales"
        >
          <FaPlus className="w-5 h-5" />
        </button>
      )}

      {/* Menú desplegado */}
      {open && (
        <div className="flex flex-col items-end space-y-2">
          {socialLinks.map((link, index) => {
            const brandClasses = getBrandColor(link.url);
            const delay = 0.1 * (socialLinks.length - 1 - index);

            return (
              <Link
                key={link.id}
                href={
                  isValidEmail(link.url) && !link.url.startsWith("mailto:")
                    ? `mailto:${link.url}`
                    : link.url
                }
                target={link.isExternal ? "_blank" : "_self"}
                rel={link.isExternal ? "noopener noreferrer" : undefined}
                className={`
                  ${brandClasses}
                  text-white p-3 rounded-full shadow
                  transition-transform duration-300
                  hover:scale-110
                  flex items-center justify-center
                  explosion-blue
                `}
                style={{ animationDelay: `${delay}s` }}
                aria-label={link.text}
              >
                {selectSocialIcon(link.url)}
              </Link>
            );
          })}

          {/* Botón de cierre */}
          <button
            onClick={() => setOpen(false)}
            className="
              bg-[#3EA6D2] text-white p-3 rounded-full shadow
              transition-transform duration-300
              hover:scale-110
              focus:outline-none
            "
            aria-label="Cerrar redes sociales"
          >
            <FaMinus className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
}
