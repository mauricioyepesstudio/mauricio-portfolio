const fs = require("fs");
const path = require("path");

const projectsDir = path.join(__dirname, "..", "public", "projects");

const validExtensions = [".png", ".jpg", ".jpeg", ".webp"];

const folders = fs
  .readdirSync(projectsDir)
  .filter((file) =>
    fs.statSync(path.join(projectsDir, file)).isDirectory()
  );

folders.forEach((folder) => {
  const folderPath = path.join(projectsDir, folder);

  let files = fs
    .readdirSync(folderPath)
    .filter((file) =>
      validExtensions.includes(path.extname(file).toLowerCase())
    )
    .sort();

  console.log(`\n📁 ${folder}`);

  files.forEach((file, index) => {
    const ext = path.extname(file).toLowerCase();

    const newName = `Artboard ${index + 1}${ext}`;

    const oldPath = path.join(folderPath, file);
    const newPath = path.join(folderPath, newName);

    if (oldPath !== newPath) {
      fs.renameSync(oldPath, newPath);
      console.log(`${file}  ->  ${newName}`);
    }
  });
});

console.log("\n✅ DONE");