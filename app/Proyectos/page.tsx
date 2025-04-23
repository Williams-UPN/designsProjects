// app/proyectos/page.tsx
import ProjectsPage from "./ProyectosPage";
import fs from "fs";
import path from "path";

export const dynamic = "force-static";

export default async function Page() {
  const projectsDir = path.join(process.cwd(), "public/image/projects");
  const projectNames = fs
    .readdirSync(projectsDir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name);

  const projects = projectNames.map((name) => {
    const planosDir = path.join(projectsDir, name, "PLANOS");
    let files: string[] = [];
    if (fs.existsSync(planosDir)) {
      files = fs
        .readdirSync(planosDir)
        .filter((f) => /\.(png|jpe?g|webp)$/.test(f))
        .sort();
    }
    const gallery = files.map((f) =>
      `/image/projects/${encodeURIComponent(name)}/PLANOS/${encodeURIComponent(f)}`
    );
    return {
      heading: name,
      subHeading:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae orci euismod, luctus orci non, pretium arcu.",
      imageUrl: gallery[0] || "/placeholder.jpg",
      gallery,
    };
  });

  return (
    <main>
      {/* ——— Portada #2 ——— */}
      <section
        className="relative w-full h-[300px] sm:h-[400px] flex items-center justify-center"
        style={{
          backgroundImage: `url('/image/portadas/2.webp')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#3EA6D2]/30" />
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-white font-bold z-10">
          Nuestros Proyectos
        </h1>
      </section>

      {/* Componente que renderiza grid y modal (sin hero) */}
      <ProjectsPage projects={projects} />
    </main>
  );
}
