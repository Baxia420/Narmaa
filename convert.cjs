const sharp = require('sharp');
const fs = require('fs');

async function convert() {
  try {
    await sharp("C:\\Users\\jobay\\OneDrive\\Desktop\\Narmaa\\Asset_Pictures_Narmaa\\Narma Main 2.jpg")
      .webp({ quality: 80 })
      .toFile("C:\\Users\\jobay\\OneDrive\\Desktop\\Narmaa\\public\\images\\general\\Narma_Main_2.webp");
    console.log("Conversion successful");
  } catch (err) {
    console.error("Conversion failed:", err);
  }
}

convert();
