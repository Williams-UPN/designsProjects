"use client";

export default function ShowcaseSection() {
  // ————— Datos estáticos —————
  const projectNames = [
    "CASA DE CAMPO- FAMILIA DELGADO",
    "CASA SEÑORA MARITZA",
    "CASA SEÑORA NORMA",
    "CASA WILLIAN VENTURA",
    "REMODELACIÓN SEÑORA VANESA VASQUEZ",
  ];

  // Construye la ruta completa al WebP "1.webp" de cada proyecto
  const images = projectNames.flatMap((name) => {
    const base = `/image/projects/${encodeURIComponent(name)}/PLANOS/1.webp`;
    // duplicamos para el bucle infinito
    return [base, base];
  });
  // ——————————————————————

  return (
    <section className="py-12">
      <div className="container mx-auto px-4 md:px-35 lg:py-12 overflow-hidden">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3EA6D2]">
            NUESTROS PROYECTOS
          </h2>
        </div>

        <div className="flex animate-showcase gap-10 w-max mb-12">
          {images.map((src, idx) => (
            <div
              key={idx}
              className="min-w-[360px] h-[240px] flex items-center justify-center rounded-[2rem] overflow-hidden shadow-lg border border-gray-200 bg-white mx-3"
            >
              <img
                src={src}
                alt={`Proyecto ${idx + 1}`}
                className="object-contain w-full h-full"
              />
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="/Proyectos"
            className="inline-block bg-[#B4000A] hover:bg-[#3EA6D2] text-white font-medium px-6 py-2 rounded-full transition-all duration-300"
          >
            Conoce nuestros proyectos
          </a>
        </div>
      </div>
    </section>
  );
}
