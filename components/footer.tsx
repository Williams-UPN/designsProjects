"use client";

import Link from "next/link";
import { inter } from "@/config/fonts";
import { Logo } from "@/components/logo";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import Lottie from "lottie-react";
import whatsappAnimation from "@/public/animations/whatsapp.json";
import mapsAnimation from "@/public/animations/maps.json";
import mailAnimation from "@/public/animations/mail.json";

export function Footer() {
  // ————— Datos estáticos —————
  const text = "© 2025 Todos los derechos reservados Construingenio.";

  const socialLinks = [
    { id: 1, url: "https://www.instagram.com/construingenio18/", text: "Instagram", isExternal: true },
    { id: 2, url: "https://www.facebook.com/profile.php?id=61559248537718&mibextid=ZbWKwL", text: "Facebook", isExternal: true },
    { id: 3, url: "https://www.youtube.com/@ConstruIngenio", text: "YouTube", isExternal: true },
    { id: 4, url: "https://www.tiktok.com/@construingenio18/", text: "TikTok", isExternal: true },
    { id: 5, url: "https://wa.me/51956498610", text: "WhatsApp", isExternal: true },
    { id: 6, url: "Construingenio18@gmail.com", text: "Correo", isExternal: false },
  ];

  const address = "Torres Paz 708, Chiclayo, Perú.";
  const linkAddress = "https://maps.app.goo.gl/7ZfXghVocp3QDTeS9";
  // ——————————————————————

  // Extraemos cada canal
  const instagram = socialLinks.find((l) => l.text === "Instagram");
  const facebook  = socialLinks.find((l) => l.text === "Facebook");
  const youtube   = socialLinks.find((l) => l.text === "YouTube");
  const whatsapp  = socialLinks.find((l) => l.text === "WhatsApp");
  const emailLink = socialLinks.find((l) => l.text === "Correo");

  // Últimos 9 dígitos WhatsApp
  let lastNineDigits = "";
  if (whatsapp) {
    const onlyDigits = whatsapp.url.replace(/\D+/g, "");
    lastNineDigits = onlyDigits.slice(-9);
  }

  return (
    <footer className={`${inter.className} bg-[#3EA6D2]/55 text-base text-white`}>
      <div className="container mx-auto px-6 md:px-35 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Izquierda: Logo + RRSS */}
          <div className="flex flex-col items-center space-y-4 md:items-start">
            <Logo text="" dark />

            {instagram && (
              <Link
                href={instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-2 text-white hover:text-[#B4000A] transition-colors"
              >
                <FaInstagram className="w-5 h-5 text-[#E4405F] group-hover:text-[#B4000A]" />
                <span>Síguenos en Instagram</span>
              </Link>
            )}

            {facebook && (
              <Link
                href={facebook.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-2 text-white hover:text-[#B4000A] transition-colors"
              >
                <FaFacebookF className="w-5 h-5 text-[#1877F2] group-hover:text-[#B4000A]" />
                <span>Míranos en Facebook</span>
              </Link>
            )}

            {youtube && (
              <Link
                href={youtube.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-2 text-white hover:text-[#B4000A] transition-colors"
              >
                <FaYoutube className="w-5 h-5 text-[#FF0000] group-hover:text-[#B4000A]" />
                <span>Suscríbete en YouTube</span>
              </Link>
            )}
          </div>

          {/* Derecha: Dirección, Correo, WhatsApp */}
          <div className="mt-6 md:mt-0 flex flex-col items-start space-y-6">
            <Link
              href={linkAddress}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-2 text-white hover:text-[#B4000A] transition-colors"
            >
              <Lottie animationData={mapsAnimation} loop className="w-8 h-8" />
              <span>{address}</span>
            </Link>

            {emailLink && (
              <Link
                href={`mailto:${emailLink.url}`}
                className="group flex items-center space-x-2 text-white hover:text-[#B4000A] transition-colors"
              >
                <Lottie animationData={mailAnimation} loop className="w-8 h-8" />
                <span>{emailLink.url}</span>
              </Link>
            )}

            {whatsapp && (
              <Link
                href={whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-2 text-white hover:text-[#B4000A] transition-colors"
              >
                <Lottie animationData={whatsappAnimation} loop className="w-8 h-8" />
                <span>{lastNineDigits}</span>
              </Link>
            )}
          </div>
        </div>

        {/* Pie inferior */}
        <div className="text-center py-8 border-t border-white mt-4">
          {text}
        </div>
      </div>
    </footer>
  );
}
