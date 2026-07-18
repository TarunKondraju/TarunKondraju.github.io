import os
import json
import re
from PIL import Image

# Paths
SOURCE_DIR = "docs/assets/images/gallery_raw"
OPT_DIR = "docs/assets/images/gallery"
JS_FILE = "docs/assets/js/gallery.js"

MAX_WIDTH = 1200
QUALITY = 80

def optimize_image(src_path, dest_path):
    """Compress and resize the image."""
    try:
        with Image.open(src_path) as img:
            # Convert to RGB if needed (e.g. for PNGs with alpha being saved as JPEG/WEBP)
            if img.mode in ("RGBA", "P"):
                img = img.convert("RGB")
            
            # Resize if too large
            if img.width > MAX_WIDTH:
                ratio = MAX_WIDTH / img.width
                new_size = (MAX_WIDTH, int(img.height * ratio))
                img = img.resize(new_size, Image.Resampling.LANCZOS)
            
            # Save as webp for best compression
            os.makedirs(os.path.dirname(dest_path), exist_ok=True)
            img.save(dest_path, "WEBP", quality=QUALITY)
            return True
    except Exception as e:
        print(f"Error optimizing {src_path}: {e}")
        return False

def update_gallery():
    # Ensure source directory exists
    if not os.path.exists(SOURCE_DIR):
        os.makedirs(SOURCE_DIR)
        print(f"Created directory {SOURCE_DIR}")
        print("Please place your folders here in this format: Year / Place / Event / photo.jpg")
        return

    # Ensure optimized directory exists
    os.makedirs(OPT_DIR, exist_ok=True)

    valid_extensions = {".jpg", ".jpeg", ".png", ".webp", ".tiff", ".tif"}
    new_entries = []

    # Walk through the raw gallery directory
    for root, _, files in os.walk(SOURCE_DIR):
        for file in files:
            ext = os.path.splitext(file)[1].lower()
            if ext not in valid_extensions:
                continue

            src_file_path = os.path.join(root, file)
            rel_path = os.path.relpath(src_file_path, SOURCE_DIR)
            
            # Expected relative path format: Year/Place/Event/photo.jpg
            parts = rel_path.split(os.sep)
            
            year, place, event = "Unknown", "Unknown", "Unknown"
            
            import re
            is_year = lambda x: bool(re.match(r'^\d{4}$', x))

            if len(parts) >= 4:
                year, place, event = parts[0], parts[1], parts[2]
            elif len(parts) == 3:
                if is_year(parts[0]):
                    year, place, event = parts[0], "Unknown", parts[1]
                else:
                    year, place, event = "Unknown", parts[0], parts[1]
            elif len(parts) == 2:
                if is_year(parts[0]):
                    year = parts[0]
                else:
                    event = parts[0]
            
            # Clean up names for display
            clean_name = lambda x: x.replace("_", " ").replace("-", " ").title() if x != "Unknown" else x
            year = clean_name(year) if not is_year(year) else year
            place = clean_name(place)
            event = clean_name(event)
                
            filename_no_ext = os.path.splitext(file)[0]
            name = filename_no_ext.replace("_", " ").replace("-", " ").title()

            # Destination webp path
            dest_rel_path = os.path.splitext(rel_path)[0] + ".webp"
            dest_file_path = os.path.join(OPT_DIR, dest_rel_path)
            
            # Optimize image if it doesn't exist or is older than source
            if not os.path.exists(dest_file_path) or os.path.getmtime(src_file_path) > os.path.getmtime(dest_file_path):
                print(f"Optimizing: {rel_path} -> {dest_rel_path}")
                optimize_image(src_file_path, dest_file_path)

            # Web path for JS (absolute so it works on any page)
            web_path = f"/assets/images/gallery/{dest_rel_path.replace(os.sep, '/')}"
            
            new_entries.append({
                "src": web_path,
                "date": year,
                "place": place,
                "event": event,
                "name": name
            })

    if not new_entries:
        print("No valid images found in the raw gallery folder.")
        return

    # Generate the new JS content
    js_content = f"""document.addEventListener("DOMContentLoaded", function() {{
  const albumGridCheck = document.getElementById('album-grid');
  if (!albumGridCheck) return;

  const galleryData = {json.dumps(new_entries, indent=4)};

  // Group photos by Event (Album)
  const albums = {{}};
  galleryData.forEach(item => {{
    const albumName = item.event;
    if (!albums[albumName]) {{
      albums[albumName] = [];
    }}
    albums[albumName].push(item);
  }});

  const albumGrid = document.getElementById('album-grid');
  const albumView = document.getElementById('album-view');
  const btnBack = document.getElementById('back-to-albums');
  const albumTitle = document.getElementById('album-title');
  const heroImg = document.getElementById('hero-img');
  const heroCaption = document.getElementById('hero-caption');
  const thumbnailRow = document.getElementById('thumbnail-row');

  // Render the Album Grid
  function renderAlbumGrid() {{
    albumGrid.style.display = 'grid';
    albumView.style.display = 'none';
    albumGrid.innerHTML = '';

    Object.keys(albums).sort().forEach(albumName => {{
      const photos = albums[albumName];
      const coverPhoto = photos[0]; // First photo as cover

      const card = document.createElement('div');
      card.className = 'album-card';
      
      let metaText = coverPhoto.date;
      if (coverPhoto.place !== 'Unknown') metaText += ` • ${{coverPhoto.place}}`;

      card.innerHTML = `
        <img src="${{coverPhoto.src}}" alt="${{albumName}}" class="album-cover" loading="lazy">
        <div class="album-info">
          <h3 class="album-name">${{albumName}}</h3>
          <p class="album-meta">${{metaText}} (${{photos.length}} photos)</p>
        </div>
      `;

      card.addEventListener('click', () => openAlbum(albumName));
      albumGrid.appendChild(card);
    }});
  }}

  // Open specific album
  function openAlbum(albumName) {{
    albumGrid.style.display = 'none';
    albumView.style.display = 'flex';
    albumTitle.textContent = albumName;
    
    const photos = albums[albumName];
    thumbnailRow.innerHTML = '';

    // Function to set Hero Image
    const setHero = (item, thumbEl) => {{
      heroImg.src = item.src;
      let caption = item.name;
      if (item.place !== 'Unknown' || item.date !== 'Unknown') {{
         caption += ` (${{item.date}} - ${{item.place}})`;
      }}
      heroCaption.textContent = caption;

      // Update active thumbnail outline
      document.querySelectorAll('.thumbnail-row img').forEach(img => img.classList.remove('active'));
      if (thumbEl) thumbEl.classList.add('active');
    }};

    // Render Thumbnails
    photos.forEach((item, index) => {{
      const img = document.createElement('img');
      img.src = item.src;
      img.alt = item.name;
      img.loading = 'lazy';
      
      img.addEventListener('click', () => setHero(item, img));
      thumbnailRow.appendChild(img);

      // Set first image as default hero
      if (index === 0) {{
        setHero(item, img);
      }}
    }});
  }}

  btnBack.addEventListener('click', renderAlbumGrid);

  // Initialize
  renderAlbumGrid();
}});
"""
    # Write directly to the JS file, overwriting the entire script
    with open(JS_FILE, "w") as f:
        f.write(js_content)
        
    print(f"Successfully generated metadata for {len(new_entries)} image(s)!")
    print(f"Updated {JS_FILE}")

if __name__ == "__main__":
    update_gallery()
