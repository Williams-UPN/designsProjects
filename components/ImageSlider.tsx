"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

interface StaticSlide {
  id: number;
  title: string;
  imageUrl: string;
}

export default function ImageSlider() {
  const slides: StaticSlide[] = [
    { id: 1, title: "", imageUrl: "/image/slider/Slide1.webp" },
    { id: 2, title: "", imageUrl: "/image/slider/Slide2.webp" },
    { id: 3, title: "", imageUrl: "/image/slider/Slide3.webp" },
  ];

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
