const fs = require("fs");
const path = require("path");

const projectsDir = path.join(__dirname, "..", "public", "projects");
const libDir = path.join(__dirname, "..", "lib", "projects");

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

  let images = fs
    .readdirSync(path.join(projectsDir, folder))
    .filter((f) => validExtensions.includes(path.extname(f).toLowerCase()))
    .sort((a, b) =>
      a.localeCompare(b, undefined, {
        numeric: true,
        sensitivity: "base",
      })
    );

  if (images.length === 0) {
    console.log(`⚠ ${folder} sin imágenes`);
    return;
  }

  let content = fs.readFileSync(tsFile, "utf8");

  //---------------------------------------
  // heroImage
  //---------------------------------------

  content = content.replace(
    /heroImage:\s*"[^"]*"/,
    `heroImage: "/projects/${folder}/${images[0]}"`
  );

  //---------------------------------------
  // gallery
  //---------------------------------------

  const gallery = images
    .map((img) => `    "/projects/${folder}/${img}"`)
    .join(",\n");

  content = content.replace(
    /gallery:\s*\[[\s\S]*?\],\n\n\s*sections:/,
    `gallery: [\n${gallery}\n  ],\n\n  sections:`
  );

  //---------------------------------------
  // sections
  //---------------------------------------

  const sectionImages = images
    .map((img) => `        "/projects/${folder}/${img}"`)
    .join(",\n");

  const newSections = `
  sections: [
    {
      title: "Portfolio",
      images: [
${sectionImages}
      ],
    },
  ],
`;

  content = content.replace(
    /sections:\s*\[[\s\S]*?\],\n\n\s*deliverables:/,
    `${newSections}\n  deliverables:`
  );

  fs.writeFileSync(tsFile, content);

  console.log(`✅ ${folder} (${images.length} imágenes)`);
});

console.log("\n🎉 TODOS LOS PROYECTOS ACTUALIZADOS");