import os
from PIL import Image

def convert_image(src_path, dest_path):
    try:
        with Image.open(src_path) as im:
            max_size = 1920
            if im.width > max_size or im.height > max_size:
                im.thumbnail((max_size, max_size), Image.Resampling.LANCZOS)
            im = im.convert("RGB")
            im.save(dest_path, "webp", quality=85)
            print(f"Converted {src_path} -> {dest_path}")
    except Exception as e:
        print(f"Error converting {src_path}: {e}")

# Batu Caves
kl_dir = "C:/Users/jobay/OneDrive/Desktop/Narmaa/public/images/tours/kl-city-tour"
convert_image("C:/Users/jobay/OneDrive/Desktop/Narmaa/Asset_Pictures_Narmaa/KL City Tour/New photos/Batu Caves 1 MAIN.jpg", os.path.join(kl_dir, "kl-city-tour-10.webp"))
convert_image("C:/Users/jobay/OneDrive/Desktop/Narmaa/Asset_Pictures_Narmaa/KL City Tour/New photos/Batu Caves 2.jpg", os.path.join(kl_dir, "kl-city-tour-11.webp"))
convert_image("C:/Users/jobay/OneDrive/Desktop/Narmaa/Asset_Pictures_Narmaa/KL City Tour/New photos/Batu Caves 3.jpg", os.path.join(kl_dir, "kl-city-tour-12.webp"))

# French Village
genting_dir = "C:/Users/jobay/OneDrive/Desktop/Narmaa/public/images/tours/genting-highlands"
convert_image("C:/Users/jobay/Downloads/New French village 1.jpg", os.path.join(genting_dir, "genting-highlands-11.webp"))
