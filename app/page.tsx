// app/page.tsx
import ShowcaseSection from "@/components/ShowcaseSection";
import ImageSlider from "@/components/ImageSlider";
import { FeatureSection } from "@/components/features-section";
import { ServiceSection } from "@/components/service-section";

export default function Home() {
  return (
    <main>
      {/* El slider ya carga sus propias slides */}
      <ImageSlider />

      {/* Las secciones ya llevan sus propios datos */}
      <FeatureSection />
      <ServiceSection />

      {/* Showcase debajo */}
      <ShowcaseSection />
    </main>
  );
}
