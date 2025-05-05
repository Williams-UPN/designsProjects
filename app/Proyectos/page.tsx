// app/proyectos/page.tsx
import ProjectsPage from "./ProjectsPage";
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
    const projectDir = path.join(projectsDir, name);
    let files: string[] = [];

    if (fs.existsSync(projectDir)) {
      files = fs
        .readdirSync(projectDir)
        .filter((f) => /\.(png|jpe?g|webp)$/i.test(f))
        .sort();
    }

    const gallery = files.map((f) =>
      `/image/projects/${encodeURIComponent(name)}/${encodeURIComponent(f)}`
    );

    // Descripción condicional
    const subHeading =
      name === "CASA DE CAMPO- FAMILIA DELGADO"
        ? `• **Organización en torno al patio:** patio central ajardinado que inunda de luz cenital y ventilación natural.\n
• **Zonas sociales fluidas:** sala y comedor en planta abierta conectados con jardín y pérgola exterior.\n
• **Suite principal independiente:** amplio dormitorio con baño en suite y vistas al patio.\n
• **Dormitorios secundarios inteligentes:** tres habitaciones con baños eficientes y ventilación propia.\n
• **Detalles constructivos:** troneras altas, vigas a la vista y cielorrasos inclinados.\n
• **Acabados cálidos y naturales:** pisos de tablón laminado, carpintería de madera y piedra natural.\n
• **Compromiso sostenible:** paneles solares en cubierta y recolección de aguas pluviales para riego.`
        : name === "CASA SEÑORA MARITZA"
        ? `• **Diseño luminoso:** grandes ventanales frontales para máxima entrada de luz.\n
• **Distribución abierta:** cocina, comedor y sala integrados para sensación de amplitud.\n
• **Espacio de trabajo:** rincón-office junto a ventana con vistas agradables.\n
• **Suite de visita:** dormitorio de cortesía con baño propio e independencia.\n
• **Materiales cálidos:** uso de madera natural en mobiliario y carpinterías.\n
• **Aislamiento acústico:** techos y paredes con paneles fonoabsorbentes.\n
• **Eficiencia energética:** iluminación LED y ventilación cruzada.`
        : name === "CASA SEÑORA NORMA"
        ? `• **Acceso y fachada:** escalera de caracol que conecta planta baja y terraza superior.\n
• **Espacios integrados:** kitchenette, comedor y sala en un solo volumen diáfano.\n
• **Iluminación cenital:** lucernario central que inunda de luz natural todo el interior.\n
• **Baño contemporáneo:** revestimientos gris mármol, sanitarios suspendidos y nicho de ducha.\n
• **Detalles cálidos:** carpintería de madera natural y pavimento de microcemento.\n
• **Terraza privada:** zona exterior con barandilla metálica y piso antideslizante.`
        : `• Descripción genérica del proyecto…`;

    return {
      heading: name,
      subHeading,
      imageUrl:
        gallery.find((f) => f.toLowerCase().endsWith("plano1.webp")) ||
        gallery[0] ||
        "/placeholder.jpg",
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

      {/* Componente que renderiza grid y modal */}
      <ProjectsPage projects={projects} />
    </main>
  );
}
