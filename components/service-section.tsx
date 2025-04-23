"use client";

import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

interface ServiceLink {
  id: number;
  heading: string;
  subHeading: string;
  imageUrl: string;
}

export function ServiceSection() {
  // ————— Datos estáticos —————
  const mainHeading = "Nuestros servicios";

  const services: ServiceLink[] = [
    {
      id: 1,
      heading: "Diseño de Planos",
      subHeading:
        "Creación de planos y diseños 3D de fachadas, interiores, estructuras e instalaciones con precisión.",
      imageUrl: "/image/servicios/Diseño de Planos.png",
    },
    {
      id: 2,
      heading: "Diseño Arquitectónico",
      subHeading:
        "Soluciones arquitectónicas creativas que combinan funcionalidad y estética para cada proyecto.",
      imageUrl: "/image/servicios/Diseño Arquitectónico.png",
    },
    {
      id: 3,
      heading: "Diseño Estructural",
      subHeading:
        "Planos estructurales detallados que aseguran solidez y seguridad en la construcción.",
      imageUrl: "/image/servicios/Diseño Estructural.png",
    },
    {
      id: 4,
      heading: "Diseño de Instalaciones Sanitarias",
      subHeading:
        "Elaboración de planos de instalaciones sanitarias que optimizan la distribución y funcionalidad.",
      imageUrl: "/image/servicios/Diseño de Instalaciones Sanitarias.jpg",
    },
    {
      id: 5,
      heading: "Diseño de Instalaciones Eléctricas",
      subHeading:
        "Creación de planos eléctricos detallados, integrando áreas, cortes y elevaciones.",
      imageUrl: "/image/servicios/Diseño de Instalaciones Eléctricas.png",
    },
    {
      id: 6,
      heading: "Diseño de Interiores",
      subHeading:
        "Transformación de espacios con diseños interiores funcionales, estéticos y en 3D.",
      imageUrl: "/image/servicios/Diseño de Interiores.png",
    },
    {
      id: 7,
      heading: "Estructura Metálica",
      subHeading:
        "Diseño y montaje de estructuras metálicas para construcciones seguras y duraderas.",
      imageUrl: "/image/servicios/Estructura Metálica.png",
    },
    {
      id: 8,
      heading: "Habilitaciones Urbanas",
      subHeading:
        "Planificación y asesoría en habilitaciones urbanas, desde ubicación hasta renderizados 3D.",
      imageUrl: "/image/servicios/Habilitaciones Urbanas.png",
    },
    {
      id: 9,
      heading: "Saneamiento Físico Legal",
      subHeading:
        "Asesoría para trámites de saneamiento físico legal y regularización de inmuebles.",
      imageUrl: "/image/servicios/Saneamiento Físico Legal.png",
    },
    {
      id: 10,
      heading: "Estudio de Mecánica de Suelos",
      subHeading:
        "Ensayos especializados para analizar la mecánica de suelos y garantizar estabilidad.",
      imageUrl: "/image/servicios/Estudio de Mecánica de Suelos.png",
    },
  ];
  // ——————————————————————

  const [activeIndex, setActiveIndex] = useState(0);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [navigation, setNavigation] = useState<{ prevEl: HTMLElement | null; nextEl: HTMLElement | null }>({
    prevEl: null,
    nextEl: null,
  });

  useEffect(() => {
    setNavigation({ prevEl: prevRef.current, nextEl: nextRef.current });
  }, []);

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4 py-6 md:px-35 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-6">
          {/* MAIN HEADING + SUBHEADING */}
          <div className="lg:col-span-4 flex flex-col justify-center text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3EA6D2] mb-2">
              {mainHeading}
            </h2>
            <p className="text-gray-600">{services[activeIndex].subHeading}</p>
          </div>

          {/* SLIDER */}
          <div className="lg:col-start-7 lg:col-span-6 flex flex-col items-center">
            <div className="relative w-full max-w-md rounded-3xl shadow-md hover:shadow-lg border border-gray-200 bg-white transition-transform hover:-translate-y-1">
              {/* Prev */}
              <button
                ref={prevRef}
                className="absolute left-2 top-1/2 z-20 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white w-7 h-7 flex items-center justify-center rounded-full transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Next */}
              <button
                ref={nextRef}
                className="absolute right-2 top-1/2 z-20 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white w-7 h-7 flex items-center justify-center rounded-full transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>

              <Swiper
                modules={[Navigation, Autoplay]}
                navigation={navigation}
                autoplay={{ delay: 3000 }}
                loop
                speed={700}
                onSlideChange={({ realIndex }) => setActiveIndex(realIndex)}
                className="w-full"
              >
                {services.map((svc) => (
                  <SwiperSlide key={svc.id}>
                    <div className="relative w-full h-auto">
                      <img
                        src={svc.imageUrl}
                        alt={svc.heading}
                        className="w-full h-auto object-contain max-h-[400px] mx-auto"
                      />
                      <div
                        className="
        absolute bottom-3 left-1/2 transform -translate-x-1/2
        bg-black/90          /* fondo más oscuro */
        text-white           /* texto sigue igual */
        text-sm text-center px-6 py-2 rounded
        whitespace-nowrap max-w-[calc(100%-2rem)]
      "
                      >
                        {svc.heading}
                      </div>
                    </div>
                  </SwiperSlide>

                ))}
              </Swiper>
            </div>
          </div>

          {/* CTA */}
          <div className="lg:col-start-5 lg:col-span-4 flex justify-center mt-12 lg:mt-10">
            <a
              href="/Nosotros"
              className="inline-block bg-[#B4000A] hover:bg-[#3EA6D2] text-white font-medium px-6 py-2 rounded-full transition-all duration-300"
            >
              Explora nuestros servicios
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
