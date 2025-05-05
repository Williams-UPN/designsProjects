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
  const mainHeading = "Nuestros servicios";

  const services: ServiceLink[] = [
    { id: 1, heading: "Diseño de Planos", subHeading: "Creación de planos y diseños 3D de fachadas, interiores, estructuras e instalaciones con precisión.", imageUrl: "/image/servicios/Diseño de Planos.webp" },
    { id: 2, heading: "Diseño Arquitectónico", subHeading: "Soluciones arquitectónicas creativas que combinan funcionalidad y estética para cada proyecto.", imageUrl: "/image/servicios/Diseño Arquitectónico.webp" },
    { id: 3, heading: "Diseño Estructural", subHeading: "Planos estructurales detallados que aseguran solidez y seguridad en la construcción.", imageUrl: "/image/servicios/Diseño Estructural.webp" },
    { id: 4, heading: "Diseño de Instalaciones Sanitarias", subHeading: "Elaboración de planos de instalaciones sanitarias que optimizan la distribución y funcionalidad.", imageUrl: "/image/servicios/Diseño de Instalaciones Sanitarias.webp" },
    { id: 5, heading: "Diseño de Instalaciones Eléctricas", subHeading: "Creación de planos eléctricos detallados, integrando áreas, cortes y elevaciones.", imageUrl: "/image/servicios/Diseño de Instalaciones Eléctricas.webp" },
    { id: 6, heading: "Diseño de Interiores", subHeading: "Transformación de espacios con diseños interiores funcionales, estéticos y en 3D.", imageUrl: "/image/servicios/Diseño de Interiores.webp" },
    { id: 7, heading: "Estructura Metálica", subHeading: "Diseño y montaje de estructuras metálicas para construcciones seguras y duraderas.", imageUrl: "/image/servicios/Estructura Metálica.webp" },
    { id: 8, heading: "Habilitaciones Urbanas", subHeading: "Planificación y asesoría en habilitaciones urbanas, desde ubicación hasta renderizados 3D.", imageUrl: "/image/servicios/Habilitaciones Urbanas.webp" },
    { id: 9, heading: "Saneamiento Físico Legal", subHeading: "Asesoría para trámites de saneamiento físico legal y regularización de inmuebles.", imageUrl: "/image/servicios/Saneamiento Físico Legal.webp" },
    { id: 10, heading: "Estudio de Mecánica de Suelos", subHeading: "Ensayos especializados para analizar la mecánica de suelos y garantizar estabilidad.", imageUrl: "/image/servicios/Estudio de Mecánica de Suelos.webp" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [navigation, setNavigation] = useState<{ prevEl: HTMLElement | null; nextEl: HTMLElement | null }>({ prevEl: null, nextEl: null });

  useEffect(() => {
    setNavigation({ prevEl: prevRef.current, nextEl: nextRef.current });
  }, []);

  return (
    <section className="bg-white py-12">
      <div
        className="
          container mx-auto
          px-4 md:px-35 lg:px-35
          py-6 md:py-10 lg:py-12
          grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12
          items-center gap-6
        "
      >
        {/* Títulos y descripción */}
        <div className="col-span-1 md:col-span-1 lg:col-span-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3EA6D2] mb-4">
            {mainHeading}
          </h2>
          <h3 className="text-1xl md:text-2xl font-bold text-[#3EA6D2] mb-3">
            {services[activeIndex].heading}
          </h3>
          <p className="text-gray-600">
            {services[activeIndex].subHeading}
          </p>
        </div>

        {/* Slider de imágenes */}
        <div className="col-span-1 md:col-span-1 lg:col-start-7 lg:col-span-6 relative">
          {/* Flechas solo en pantallas lg+ */}
          <button
            ref={prevRef}
            className="hidden xl:flex absolute left-10 top-1/2 -translate-y-1/2 z-20 bg-black/30 text-white w-7 h-7 items-center justify-center rounded-full"
          >
            ‹
          </button>
          <button
            ref={nextRef}
            className="hidden xl:flex absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-black/30 text-white w-7 h-7 items-center justify-center rounded-full"
          >
            ›
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
                    className="object-contain w-full max-h-[400px] mx-auto"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Botón CTA */}
        <div className="col-span-1 md:col-span-2 lg:col-start-5 lg:col-span-4 flex justify-center mt-10 md:mt-0">
          <a
            href="/Nosotros"
            className="bg-[#B4000A] hover:bg-[#3EA6D2] text-white px-6 py-2 rounded-full transition whitespace-nowrap"
          >
            Explora nuestros servicios
          </a>
        </div>
      </div>
    </section>
  );

}
