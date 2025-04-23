"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

interface StaticSlide {
  id: number;
  title: string;
  description?: string;
  imageUrl: string;
}

export default function ImageSlider() {
  // ————— Datos estáticos —————
  const slides: StaticSlide[] = [
    {
      id: 1,
      title: "Slide 1",
      imageUrl: "/image/slider/1.png",
    },
    {
      id: 2,
      title: "Nick Design 1",
      imageUrl: "/image/slider/nick-design-snAHOBkTQyQ-unsplash.jpg",
    },
    {
      id: 3,
      title: "Nick Design 2",
      imageUrl: "/image/slider/nick-design-snAHOBkTQyQ-unsplash (1).jpg",
    },
  ];
  // ——————————————————————

  return (
    <div className="relative w-full hero-slider mb-16 md:mb-28 overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full aspect-[16/9] sm:aspect-[8/3] overflow-hidden">
              <img
                src={slide.imageUrl}
                alt={slide.title}
                className="object-cover w-full h-full"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
