import { readFile, writeFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

// __dirname'i ESM modüllerinde kullanmak için
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Dosya yollarını belirleyin
const manifestPath = path.join(__dirname, "manifest.json");
const packageJsonPath = path.join(__dirname, "package.json");

// Versiyonu artıran fonksiyon
function bumpVersion(version) {
  const parts = version.split(".");
  const major = parseInt(parts[0]);
  const minor = parseInt(parts[1]);
  const patch = parseInt(parts[2]) + 1;
  return `${major}.${minor}.${patch}`;
}

// Dosyayı oku ve versiyonu artır
async function updateVersion(filePath, versionKey) {
  const fileContent = JSON.parse(await readFile(filePath, "utf8"));
  fileContent[versionKey] = bumpVersion(fileContent[versionKey]);
  await writeFile(filePath, JSON.stringify(fileContent, null, 2));
  console.log(`Updated ${filePath} to version ${fileContent[versionKey]}`);
}

// `manifest.json` ve `package.json` dosyalarındaki versiyonu artır
(async () => {
  await updateVersion(manifestPath, "version");
  await updateVersion(packageJsonPath, "version");
})();
