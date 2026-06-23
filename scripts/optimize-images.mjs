import sharp from "sharp";
import { existsSync, statSync } from "fs";
import { join, parse } from "path";

const publicDir = "D:/ai-practise/Dial-Expert/public";

const pngFiles = [
  "Recruit.png",
  "Train.png",
  "Manage.png",
  "optimize.png",
  "Why-DialExpert.png",
  "the challenge.png",
  "the challenge-1.png",
  "the challenge-2.png",
  "the challenge-3.png",
  "Outbound-Sales.png",
  "Lead-Generation-picture.png",
];

async function convertToWebp(filename) {
  const inputPath = join(publicDir, filename);
  const parsed = parse(filename);
  const outputName = parsed.name + ".webp";
  const outputPath = join(publicDir, outputName);

  if (!existsSync(inputPath)) {
    console.log(`Skipping ${filename} (not found)`);
    return "";
  }

  const inputSize = statSync(inputPath).size;
  await sharp(inputPath)
    .webp({ quality: 82, alphaQuality: 90, smartSubsample: true })
    .toFile(outputPath);
  const outputSize = statSync(outputPath).size;
  const saved = ((1 - outputSize / inputSize) * 100).toFixed(1);
  const inMb = (inputSize / 1024 / 1024).toFixed(1);
  const outMb = (outputSize / 1024 / 1024).toFixed(2);
  console.log(`${filename.padEnd(38)} ${inMb} MB -> ${outMb.padStart(6)} MB (save ${saved}%)`);
  return outputName;
}

async function main() {
  console.log("Converting PNGs to WebP...\n");
  console.log("File                                  Size Before -> After      Savings");
  console.log("-".repeat(70));
  let totalBefore = 0;
  let totalAfter = 0;
  for (const file of pngFiles) {
    const inputPath = join(publicDir, file);
    if (!existsSync(inputPath)) continue;
    totalBefore += statSync(inputPath).size;
    await convertToWebp(file);
    const parsed = parse(file);
    const outputPath = join(publicDir, parsed.name + ".webp");
    totalAfter += statSync(outputPath).size;
  }
  const totalSaved = ((1 - totalAfter / totalBefore) * 100).toFixed(1);
  const beforeGb = (totalBefore / 1024 / 1024).toFixed(1);
  const afterGb = (totalAfter / 1024 / 1024).toFixed(1);
  console.log("-".repeat(70));
  console.log(`Total: ${beforeGb} MB -> ${afterGb} MB (save ${totalSaved}%)`);
}

main().catch(console.error);
