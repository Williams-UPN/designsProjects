// app/proyectos/ProjectsPage.tsx
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface ProjectItem {
  heading: string;
  subHeading: string;
  imageUrl: string;
  gallery: string[];
}

interface ProjectsPageProps {
  projects: ProjectItem[];
}

export default function ProjectsPage({ projects }: ProjectsPageProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [galleryIndex, setGalleryIndex] = useState(0);

  const openModal = (i: number) => {
    setSelectedIndex(i);
    setGalleryIndex(0);
    setModalOpen(true);
  };
  const closeModal = () => {
    setAnimateModal(false);
    setTimeout(() => setModalOpen(false), 300);
  };

  useEffect(() => {
    if (modalOpen) {
      const t = setTimeout(() => setAnimateModal(true), 50);
      return () => clearTimeout(t);
    }
  }, [modalOpen]);

  const current = projects[selectedIndex];
  const gallery = current.gallery.length ? current.gallery : [current.imageUrl];

  const next = () => setGalleryIndex((i) => (i + 1) % gallery.length);
  const prev = () =>
    setGalleryIndex((i) => (i - 1 + gallery.length) % gallery.length);

  return (
    <>
      {/* Intro */}
      <section className="container mx-auto px-4 md:px-35 py-6 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-[#3EA6D2] text-center">
            Nuestros Proyectos
          </h2>
          <p className="text-gray-500 max-w-xl text-sm md:text-base text-justify leading-relaxed">
            En Construingenio, cada proyecto es una oportunidad para transformar
            espacios y mejorar la calidad de vida de nuestros clientes.
            Aplicamos altos estándares de ingeniería, arquitectura e innovación
            tecnológica para garantizar resultados funcionales, seguros y
            estéticamente atractivos. Descubre cómo llevamos a cabo soluciones
            integrales que marcan la diferencia en cada obra.
          </p>
        </div>

        {/* Grid de tarjetas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {projects.map((p, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-transform hover:-translate-y-1 cursor-pointer overflow-hidden border border-transparent hover:border-[#3EA6D2]"
              onClick={() => openModal(i)}
            >
              <div className="w-full aspect-[4/3] relative">
                <Image
                  src={p.imageUrl}
                  alt={p.heading}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-[#f9fafb] p-2 text-center">
                <h3 className="text-xs md:text-sm font-medium text-gray-700 uppercase">
                  {p.heading}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className={`relative bg-white rounded-lg shadow-2xl overflow-hidden w-[90vw] h-[90vh] flex flex-col md:flex-row transition-transform duration-300 ${
              animateModal ? "translate-y-0" : "-translate-y-full"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Columna de texto */}
            <div className="w-full md:w-1/2 p-6 overflow-y-auto h-full">
              <h2 className="text-2xl md:text-4xl font-bold text-[#3EA6D2] mb-4 text-center">
                {current.heading}
              </h2>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed whitespace-pre-wrap">
                {current.subHeading}
              </p>
            </div>

            {/* Columna de imágenes */}
            <div className="w-full md:w-1/2 relative bg-gray-100 p-4 flex items-center justify-center h-full">
              <button
                onClick={prev}
                className="absolute left-4 bg-white p-2 rounded-full shadow hover:bg-gray-200 z-10"
              >
                ‹
              </button>

              <div className="w-full h-full overflow-hidden rounded-lg">
                <Image
                  src={gallery[galleryIndex]}
                  alt={`${current.heading} - Imagen ${galleryIndex + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full"
                />
              </div>

              <button
                onClick={next}
                className="absolute right-4 bg-white p-2 rounded-full shadow hover:bg-gray-200 z-10"
              >
                ›
              </button>
            </div>

            {/* Botón cerrar */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
}
