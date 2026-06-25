import sharp from "sharp";
import { mkdirSync, existsSync } from "fs";
import { dirname } from "path";

const SRC = "Asset_Pictures_Narmaa/New incoming photos";
const QUALITY = 84;
const MAX_DIM = 1920;

const conversions = [
  {
    src: `${SRC}/WhatsApp Image 2026-06-21 at 12.39.52 PM.jpeg`,
    dest: "public/images/tours/kuala-selangor/kuala-selangor-monkeys-steps.webp",
  },
  {
    src: `${SRC}/WhatsApp Image 2026-06-21 at 12.39.51 PM (2).jpeg`,
    dest: "public/images/tours/kuala-selangor/kuala-selangor-monkey-close.webp",
  },
  {
    src: `${SRC}/WhatsApp Image 2026-06-21 at 12.39.52 PM (1).jpeg`,
    dest: "public/images/tours/kuala-selangor/kuala-selangor-monkeys-feeding.webp",
  },
  {
    src: `${SRC}/WhatsApp Image 2026-06-21 at 12.39.51 PM (1).jpeg`,
    dest: "public/images/tours/kuala-selangor/kuala-selangor-boat-operator.webp",
  },
  {
    src: `${SRC}/WhatsApp Image 2026-06-21 at 12.39.51 PM.jpeg`,
    dest: "public/images/tours/malacca-tour/malacca-tour-night-trishaws.webp",
  },
  {
    src: `${SRC}/WhatsApp Image 2026-06-21 at 12.39.53 PM (1).jpeg`,
    dest: "public/images/tours/cameron-highlands/cameron-highlands-waterfall-bridge.webp",
  },
  {
    src: `${SRC}/WhatsApp Image 2026-06-21 at 12.39.53 PM.jpeg`,
    dest: "public/images/tours/cameron-highlands/cameron-highlands-waterfall.webp",
  },
];

for (const { src, dest } of conversions) {
  const dir = dirname(dest);
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });

  await sharp(src)
    .resize({ width: MAX_DIM, height: MAX_DIM, fit: "inside", withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .withMetadata(false)
    .toFile(dest);

  console.log(`✓  ${src.split("/").pop()} → ${dest}`);
}

console.log("\nDone. All 7 files converted.");
