const fs = require("fs");
const path = require("path");

const projectsDir = path.join(process.cwd(), "public", "projects");
const libDir = path.join(process.cwd(), "lib", "projects");

const validExtensions = [".png", ".jpg", ".jpeg", ".webp"];

const folders = fs
  .readdirSync(projectsDir)
  .filter((f) => fs.statSync(path.join(projectsDir, f)).isDirectory());

folders.forEach((folder) => {
  const tsFile = path.join(libDir, `${folder}.ts`);

  if (!fs.existsSync(tsFile)) {
    console.log(`⚠ No existe ${folder}.ts`);
    return;
  }

  const images = fs
    .readdirSync(path.join(projectsDir, folder))
    .filter((f) =>
      validExtensions.includes(path.extname(f).toLowerCase())
    )
    .sort((a, b) =>
      a.localeCompare(b, undefined, {
        numeric: true,
        sensitivity: "base",
      })
    );

  if (!images.length) {
    console.log(`⚠ ${folder} sin imágenes`);
    return;
  }

  let content = fs.readFileSync(tsFile, "utf8");

  // ----------------------------
  // heroImage
  // ----------------------------

  content = content.replace(
    /heroImage:\s*[\r\n\s]*"[^"]*"/m,
    `heroImage: "/projects/${folder}/${images[0]}"`
  );

  // ----------------------------
  // gallery
  // ----------------------------

  const gallery = images
    .map((img) => `    "/projects/${folder}/${img}"`)
    .join(",\n");

  content = content.replace(
    /gallery:\s*\[[\s\S]*?\],\s*sections:/m,
    `gallery: [
${gallery}
  ],

  sections:`
  );

  // ----------------------------
  // sections
  // ----------------------------

  const sectionImages = images
    .map((img) => `        "/projects/${folder}/${img}"`)
    .join(",\n");

  content = content.replace(
    /sections:\s*\[[\s\S]*?\],\s*deliverables:/m,
`sections: [
    {
      title: "Portfolio",
      images: [
${sectionImages}
      ],
    },
  ],

  deliverables:`
  );

  fs.writeFileSync(tsFile, content, "utf8");

  console.log(`✅ ${folder} (${images.length} imágenes)`);
});

console.log("\n🎉 Todos los proyectos fueron actualizados.");