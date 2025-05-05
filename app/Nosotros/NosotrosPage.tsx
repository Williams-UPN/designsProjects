"use client";

import React, { useState } from "react";

/** Datos estáticos de servicios */
const SERVICES = [
  {
    heading: "Diseño de Planos",
    subHeadingComplete:
      "Elaboramos planos en todas sus especialidades, abarcando arquitectura, estructuras y todas las instalaciones (eléctricas y sanitarias). Nuestros servicios se complementan con innovadores diseños 3D, planos detallados y visualizaciones que garantizan proyectos integrales, optimizados y adaptados a las normativas vigentes, asegurando precisión y calidad en cada fase.",
    imageUrl: "/image/servicios/Diseño de Planos.webp",
  },
  {
    heading: "Diseño Arquitectónico",
    subHeadingComplete:
      "Desarrollamos diseños arquitectónicos integrales que optimizan espacios y mejoran la funcionalidad, utilizando innovaciones tecnológicas y soluciones creativas. Nuestro enfoque personalizado se adapta a las necesidades y estilos de cada cliente, garantizando proyectos que combinan estética, eficiencia y un alto estándar en calidad constructiva.",
    imageUrl: "/image/servicios/Diseño Arquitectónico.webp",
  },
  {
    heading: "Diseño Estructural",
    subHeadingComplete:
      "Diseñamos estructuras robustas y seguras, desarrollando planos detallados que comprenden cimientos, vigas, losas y columnas. Cada proyecto se respalda en cálculos estructurales precisos y análisis rigurosos, garantizando estabilidad, resistencia y durabilidad en cada obra, cumpliendo las normativas vigentes en construcción.",
    imageUrl: "/image/servicios/Diseño Estructural.webp",
  },
  {
    heading: "Diseño de Instalaciones Sanitarias",
    subHeadingComplete:
      "Desarrollamos diseños especializados para instalaciones sanitarias, creando planos precisos que aseguran la correcta distribución de sistemas, luminarias y tomacorrientes, y garantizando el cumplimiento de normativas técnicas y de seguridad. Nuestros proyectos, tanto residenciales como comerciales, se benefician de soluciones eficientes y optimizadas.",
    imageUrl: "/image/servicios/Diseño de Instalaciones Sanitarias.webp",
  },
  {
    heading: "Diseño de Instalaciones Eléctricas",
    subHeadingComplete:
      "Realizamos diseños de instalaciones eléctricas detallados, desarrollando planos que abarcan distribución, áreas, cortes y elevaciones. Nuestros proyectos aseguran una alta eficiencia energética y seguridad, adaptándose a diversos entornos, y cumpliendo estrictamente las normativas técnicas y de calidad en cada etapa del proceso constructivo.",
    imageUrl: "/image/servicios/Diseño de Instalaciones Eléctricas.webp",
  },
  {
    heading: "Diseño de Interiores",
    subHeadingComplete:
      "Desarrollamos proyectos de diseño de interiores integrales que abarcan desde la elaboración de planos y renderizados en 3D hasta recorridos virtuales, transformando espacios residenciales, oficinas y comercios en ambientes funcionales, estéticos y personalizados, combinando creatividad, innovación y un enfoque centrado en la experiencia del usuario.",
    imageUrl: "/image/servicios/Diseño de Interiores.webp",
  },
  {
    heading: "Estructura Metálica",
    subHeadingComplete:
      "Elaboramos soluciones integrales en estructuras metálicas, diseñando y montando coberturas y sistemas de soporte que garantizan resistencia y precisión. Nuestros proyectos combinan eficiencia y rapidez en la ejecución, ofreciendo calidad constructiva y adaptabilidad a las exigencias técnicas y normativas del sector.",
    imageUrl: "/image/servicios/Estructura Metálica.webp",
  },
  {
    heading: "Habilitaciones Urbanas",
    subHeadingComplete:
      "Ofrecemos soluciones integrales en habilitaciones urbanas, desarrollando detallados planos de ubicación, perimetrales y renderizados 3D, junto con asesoría completa en la regularización y planificación de inmuebles. Nuestro enfoque garantiza la optimización del espacio urbano y el cumplimiento de normativas locales.",
    imageUrl: "/image/servicios/Habilitaciones Urbanas.webp",
  },
  {
    heading: "Saneamiento Físico Legal",
    subHeadingComplete:
      "Ofrecemos un servicio integral de saneamiento físico legal, que abarca inmatriculación, subdivisión, independización y regularización de inmuebles. Elaboramos perfiles técnicos y asesoramos en trámites, garantizando el cumplimiento normativo, documentación precisa y una completa regularización del estado físico legal de cada propiedad.",
    imageUrl: "/image/servicios/Saneamiento Físico Legal.webp",
  },
  {
    heading: "Estudio de Mecánica de Suelos",
    subHeadingComplete:
      "Realizamos estudios y ensayos especializados de mecánica de suelos y rocas, incluyendo análisis de compactación, ensayos químicos y pruebas de resistencia. Nuestros servicios técnicos aseguran la viabilidad estructural y la seguridad en cada proyecto, proporcionando datos precisos para un diseño fundamentado.",
    imageUrl: "/image/servicios/Estudio de Mecánica de Suelos.webp",
  },
];

export default function NosotrosPage() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  // Protegemos selected
  const selected = SERVICES[selectedIndex] ?? SERVICES[0];

  return (
    <>
      {/* Hero */}
      <section
        className="relative w-full h-[500px] flex items-center justify-center"
        style={{
          backgroundImage: `url('/image/portadas/1.webp')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#3EA6D2]/30" />
        <h1 className="text-4xl md:text-6xl text-white font-bold z-10">
          Nosotros
        </h1>
      </section>

      {/* Contenido */}
      <div className="container mx-auto px-4 py-6 md:px-35 lg:py-12">
        <h2 className="mt-10 text-2xl md:text-4xl font-bold text-[#3EA6D2] mb-10 text-center">
          Nuestros Servicios
        </h2>

        {/* Desktop / Tablet Grande */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-6">
          <aside>
            {SERVICES.map((item, idx) => {
              const sel = idx === selectedIndex;
              return (
                <div
                  key={idx}
                  onClick={() => setSelectedIndex(idx)}
                  className={`flex items-center p-4 mb-4 rounded-lg cursor-pointer transition-all duration-300 ${sel
                      ? "bg-[#B4000A]/10 border border-[#B4000A]/50 text-[#B4000A]"
                      : "bg-[#3EA6D2]/10 border border-[#3EA6D2]/20 text-[#3EA6D2] hover:bg-[#3EA6D2]/20"
                    }`}
                >
                  <span
                    className={`w-8 h-8 flex items-center justify-center rounded-full font-bold mr-4 transition-all duration-300 ${sel
                        ? "bg-[#B4000A]/70 text-white"
                        : "bg-[#3EA6D2]/20 text-[#3EA6D2]"
                      }`}
                  >
                    {idx + 1}
                  </span>
                  <span className="text-lg font-semibold">
                    {item.heading}
                  </span>
                </div>
              );
            })}
          </aside>

          <div className="mx-auto bg-white shadow-lg rounded-lg p-6 max-w-[900px] min-h-[800px]">
            <h2 className="text-2xl md:text-3xl font-bold text-[#3EA6D2] mb-4">
              {selected.heading}
            </h2>
            <div className="w-full h-[550px] mb-4 overflow-hidden rounded-md">
              <img
                src={selected.imageUrl}
                alt={selected.heading}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-gray-500 text-sm md:text-base text-justify leading-relaxed">
              {selected.subHeadingComplete}
            </p>
          </div>
        </div>

        <div className="md:hidden space-y-4">
          {SERVICES.map((item, idx) => {
            const open = idx === selectedIndex;
            return (
              <div key={idx}>
                {/* Cabecera de la tarjeta */}
                <div
                  onClick={() => setSelectedIndex(open ? -1 : idx)}
                  className={`flex items-center p-4 mb-0 rounded-lg cursor-pointer transition-all duration-300 ${open
                      ? "bg-[#B4000A]/10 border border-[#B4000A]/50 text-[#B4000A] rounded-b-none"
                      : "bg-[#3EA6D2]/10 border border-[#3EA6D2]/20 text-[#3EA6D2] hover:bg-[#3EA6D2]/20"
                    }`}
                >
                  <span
                    className={`w-8 h-8 flex items-center justify-center rounded-full font-bold mr-4 transition-all duration-300 ${open
                        ? "bg-[#B4000A]/70 text-white"
                        : "bg-[#3EA6D2]/20 text-[#3EA6D2]"
                      }`}
                  >
                    {idx + 1}
                  </span>
                  <span className="text-lg font-semibold">{item.heading}</span>
                  {/* Flecha eliminada: aquí ya no va nada más */}
                </div>

                {/* Contenido desplegable */}
                {open && (
                  <div className="border-x border-b border-[#B4000A]/50 bg-white rounded-b-lg p-4 space-y-3">
                    <div className="w-full h-48 overflow-hidden rounded-md">
                      <img
                        src={item.imageUrl}
                        alt={item.heading}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-gray-600 text-sm text-justify">
                      {item.subHeadingComplete}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </>
  );
}
