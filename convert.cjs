const sharp = require('sharp');

sharp("C:\\Users\\jobay\\OneDrive\\Desktop\\Narmaa\\Asset_Pictures_Narmaa\\New Narma Main.jpg")
  .webp({ quality: 80 })
  .toFile("C:\\Users\\jobay\\OneDrive\\Desktop\\Narmaa\\public\\images\\general\\New_Narma_Main.webp")
  .then(() => console.log('Done'))
  .catch(console.error);
