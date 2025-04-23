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
        .filter((f) => /\.(png|jpe?g)$/.test(f))
        .sort();
    }
    const gallery = files.map((f) =>
      `/image/projects/${encodeURIComponent(name)}/PLANOS/${encodeURIComponent(f)}`
    );
    return {
      heading: name,
      subHeading:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae orci euismod, luctus orci non, pretium arcu. Praesent at feugiat nisl, sit amet vulputate orci.",
      imageUrl: gallery[0] || "/placeholder.jpg",
      gallery,
    };
  });

  return (
    <main>
      <ProjectsPage projects={projects} />
    </main>
  );
}
