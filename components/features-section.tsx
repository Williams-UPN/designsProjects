"use client";
import { useState, useEffect } from "react";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return isMobile;
}

function getIcon(name: string, isActive: boolean) {
  const iconColor = isActive ? "#B4000A" : "#3EA6D2";
  switch (name) {
    case "MISION_ICON":
      return <MissionIcon className="w-12 h-12" stroke={iconColor} />;
    case "VALORES_ICON":
      return <ValuesIcon className="w-12 h-12" stroke={iconColor} />;
    case "VISION_ICON":
      return <VisionIcon className="w-12 h-12" stroke={iconColor} />;
    default:
      return null;
  }
}

interface FeatureProps {
  id: number;
  heading: string;
  subHeading: string;
  icon: "MISION_ICON" | "VALORES_ICON" | "VISION_ICON";
}

function getBorderClasses(index: number, total: number) {
  if (index === 0) {
    return "rounded-l-xl border-l border-t border-b border-r-0";
  } else if (index === total - 1) {
    return "rounded-r-xl border-r border-t border-b border-l-0";
  } else {
    return "border-t border-b border-l-0 border-r-0";
  }
}

function FeatureCard({
  feature,
  index,
  totalFeatures,
}: {
  feature: FeatureProps;
  index: number;
  totalFeatures: number;
}) {
  const isMobile = useIsMobile();
  const [isActive, setIsActive] = useState(false);

  const handleTouchStart = () => {
    if (isMobile) setIsActive(true);
  };
  const handleTouchEnd = () => {
    if (isMobile) setIsActive(false);
  };

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      className={`
        group pt-12 p-6 flex flex-col items-start text-left
        ${index === 1 ? "bg-[#3EA6D2]/10" : "bg-white"}
        shadow-md hover:shadow-lg hover:-translate-y-1
        transition-all duration-300
        ${getBorderClasses(index, totalFeatures)}
        border border-transparent hover:border-[#B4000A]
        hover:rounded-xl
      `}
    >
      {getIcon(feature.icon, isActive)}
      <h2 className="mt-4 mb-2 text-2xl md:text-4xl font-bold text-[#3EA6D2]">
        {feature.heading}
      </h2>
      <p className="text-gray-600 text-sm text-justify leading-relaxed">
        {feature.subHeading}
      </p>
    </div>
  );
}

export function FeatureSection() {
  // ————— Datos estáticos —————
  const title = "¿Por qué Construingenio?";
  const description =
    "En Construingenio, contamos con una sólida experiencia en proyectos de ingeniería y arquitectura, ofreciendo soluciones integrales a precios competitivos. Con un equipo de profesionales altamente capacitados, nos destacamos por nuestra innovación, calidad y compromiso con la seguridad. Buscamos mejorar la calidad de vida de nuestros clientes a través de proyectos que cumplen con los más altos estándares.";

  const features: FeatureProps[] = [
    {
      id: 1,
      icon: "MISION_ICON",
      heading: "MISIÓN",
      subHeading:
        "Somos una empresa con una amplía diversidad de servicios de ingeniería y arquitectura a precios competitivos, acompañado por la innovación en tecnología de mercado, teniendo como base, buena atención al cliente, seguridad y confianza.",
    },
    {
      id: 2,
      icon: "VALORES_ICON",
      heading: "VALORES",
      subHeading:
        "Responsabilidad: Cumplir con nuestros compromisos y responder por nuestras acciones. Calidad: Buscar la excelencia en todo lo que hacemos. Innovación: Ser pioneros en nuevas soluciones y tecnologías. Seguridad: Proteger la salud y el bienestar de nuestros empleados y clientes. Confianza: Generar confianza en nuestros clientes, colaboradores y proveedores.",
    },
    {
      id: 3,
      icon: "VISION_ICON",
      heading: "VISIÓN",
      subHeading:
        "Buscamos convertirnos en una empresa sólida en el mercado de la construcción, teniendo altos estándares de calidad en nuestros servicios, así mismo tener precios adecuados como principal estrategia de capacitación de nuestros clientes.",
    },
  ];
  // ——————————————————————

  return (
    <div className="container mx-auto px-4 py-6 md:px-35 lg:py-12">
      {/* Título y descripción */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center mb-12 gap-0">
        <h2 className="text-2xl md:text-4xl font-bold text-[#3EA6D2] mb-4 md:mb-20">
          {title}
        </h2>
        <p className="text-gray-600 text-sm text-justify leading-relaxed">
          {description}
        </p>
      </div>

      {/* Tarjetas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
        {features.map((f, idx) => (
          <FeatureCard
            key={f.id}
            feature={f}
            index={idx}
            totalFeatures={features.length}
          />
        ))}
      </div>
    </div>
  );
}

/* Íconos SVG */
function MissionIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 22V2l7 3 7-3 7 3v13l-7-3-7 3-7-3Z" />
    </svg>
  );
}

function ValuesIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 13l-3 3a2 2 0 1 0 3 3l3-3" />
      <path d="M16 13l3 3a2 2 0 1 1-3 3l-3-3" />
      <path d="M12 8a2 2 0 0 0-2 2v2h4v-2a2 2 0 0 0-2-2z" />
      <path d="M4 12v-2a4 4 0 0 1 4-4h1" />
      <path d="M20 12v-2a4 4 0 0 0-4-4h-1" />
    </svg>
  );
}

function VisionIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="2" />
      <path d="M21 12c0 3.866-4.477 7-9 7S3 15.866 3 12s4.477-7 9-7 9 3.134 9 7z" />
    </svg>
  );
}
