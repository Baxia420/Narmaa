"""
convert_homestay_images.py
Converts Axon and Reizz JPG photos to WEBP for the Narmaa homestay pages.

Axon:
  - Axon10.jpg  → axon-cover.webp    (card cover photo)
  - Axon1.jpg   → axon-main-1.webp   (static pin 1 in gallery)
  - Axon2.jpg   → axon-main-2.webp   (static pin 2 in gallery)
  - Axon3–9, 11–13 → axon-3.webp … axon-13.webp (shuffled)

Reizz:
  - Reizz Main.jpg   → reizz-cover.webp    (card cover photo)
  - Reizz Main.jpg   → reizz-main-1.webp   (static pin 1 in gallery)
  - Reizz Main 2.jpg → reizz-main-2.webp   (static pin 2 in gallery)
  - All other Reizz images → reizz-N.webp  (shuffled)
"""

import os
from PIL import Image

MAX_SIZE = 1920
QUALITY = 85

SRC_BASE = "C:/Users/jobay/OneDrive/Desktop/Narmaa/Asset_Pictures_Narmaa"
DST_BASE = "C:/Users/jobay/OneDrive/Desktop/Narmaa/public/images/homestays"

AXON_SRC = os.path.join(SRC_BASE, "Axon")
AXON_DST = os.path.join(DST_BASE, "axon")

REIZZ_SRC = os.path.join(SRC_BASE, "Reizz")
REIZZ_DST = os.path.join(DST_BASE, "reizz")

os.makedirs(AXON_DST, exist_ok=True)
os.makedirs(REIZZ_DST, exist_ok=True)


def convert(src, dst):
    try:
        with Image.open(src) as im:
            if im.width > MAX_SIZE or im.height > MAX_SIZE:
                im.thumbnail((MAX_SIZE, MAX_SIZE), Image.Resampling.LANCZOS)
            im = im.convert("RGB")
            im.save(dst, "webp", quality=QUALITY)
            print(f"  ✓  {os.path.basename(src):30s}  →  {os.path.basename(dst)}")
    except Exception as e:
        print(f"  ✗  ERROR {src}: {e}")


print("\n── Axon ─────────────────────────────────────────────────────────────")

# Cover photo (card thumbnail)
convert(os.path.join(AXON_SRC, "Axon10.jpg"),   os.path.join(AXON_DST, "axon-cover.webp"))

# Static pins (always first in detail page gallery)
convert(os.path.join(AXON_SRC, "Axon1.jpg"),    os.path.join(AXON_DST, "axon-main-1.webp"))
convert(os.path.join(AXON_SRC, "Axon2.jpg"),    os.path.join(AXON_DST, "axon-main-2.webp"))

# Shuffled gallery images
for n in [3, 4, 5, 6, 7, 8, 9, 11, 12, 13]:
    convert(os.path.join(AXON_SRC, f"Axon{n}.jpg"), os.path.join(AXON_DST, f"axon-{n}.webp"))

print("\n── Reizz ────────────────────────────────────────────────────────────")

# Cover photo (card thumbnail)
convert(os.path.join(REIZZ_SRC, "Reizz Main.jpg"),    os.path.join(REIZZ_DST, "reizz-cover.webp"))

# Static pins
convert(os.path.join(REIZZ_SRC, "Reizz Main.jpg"),    os.path.join(REIZZ_DST, "reizz-main-1.webp"))
convert(os.path.join(REIZZ_SRC, "Reizz Main 2.jpg"),  os.path.join(REIZZ_DST, "reizz-main-2.webp"))

# Shuffled gallery images (space in some filenames)
shuffled_reizz = [
    ("Reizz 1.jpg",  "reizz-1.webp"),
    ("Reizz 2.jpg",  "reizz-2.webp"),
    ("Reizz 3.jpg",  "reizz-3.webp"),
    ("Reizz 5.jpg",  "reizz-5.webp"),
    ("reizz 6.jpg",  "reizz-6.webp"),
    ("reizz 7.jpg",  "reizz-7.webp"),
    ("Reizz 8.jpg",  "reizz-8.webp"),
    ("Reizz 9.jpg",  "reizz-9.webp"),
    ("reizz 10.jpg", "reizz-10.webp"),
    ("Reizz 11.jpg", "reizz-11.webp"),
]

for src_name, dst_name in shuffled_reizz:
    convert(os.path.join(REIZZ_SRC, src_name), os.path.join(REIZZ_DST, dst_name))

print("\n✅ All done!\n")
