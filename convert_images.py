import os
import glob
from PIL import Image
from pillow_heif import register_heif_opener
import shutil
import re

register_heif_opener()

source_dir = "C:/Users/jobay/OneDrive/Desktop/Narmaa/Asset_Pictures_Narmaa"
dest_base = "C:/Users/jobay/OneDrive/Desktop/Narmaa/public/images/tours"

mapping = {
    "Cameroon Highlands": "cameron-highlands",
    "Genting and French Village tour": "genting-highlands",
    "KL City Tour": "kl-city-tour",
    "Kuala Selangor Tour": "kuala-selangor",
    "Malacca Tour": "malacca-tour"
}

os.makedirs(dest_base, exist_ok=True)

for folder_name, slug in mapping.items():
    folder_path = os.path.join(source_dir, folder_name)
    if not os.path.exists(folder_path):
        print(f"Skipping {folder_path}, not found.")
        continue
    
    dest_dir = os.path.join(dest_base, slug)
    os.makedirs(dest_dir, exist_ok=True)
    
    images = []
    for ext in ["*.jpg", "*.jpeg", "*.heic", "*.png"]:
        images.extend(glob.glob(os.path.join(folder_path, ext)))
        images.extend(glob.glob(os.path.join(folder_path, ext.upper())))
    
    images = list(set(images))
    
    def get_priority(filename):
        base = os.path.basename(filename)
        match = re.search(r'(\d+(\.\d+)?)', base)
        if match:
            return float(match.group(1))
        return 999.0
        
    images.sort(key=get_priority)
    
    gallery = []
    
    for i, img_path in enumerate(images):
        img_name = os.path.basename(img_path)
        webp_name = f"{slug}-{i+1}.webp"
        webp_path = os.path.join(dest_dir, webp_name)
        
        try:
            with Image.open(img_path) as im:
                max_size = 1920
                if im.width > max_size or im.height > max_size:
                    im.thumbnail((max_size, max_size), Image.Resampling.LANCZOS)
                
                im = im.convert("RGB")
                im.save(webp_path, "webp", quality=85)
            gallery.append(f"/images/tours/{slug}/{webp_name}")
            print(f"Converted {img_name} -> {webp_name}")
        except Exception as e:
            print(f"Error converting {img_name}: {e}")
            
    print(f"\n--- Gallery for {slug} ---")
    print(gallery)
    print("--------------------------------\n")
