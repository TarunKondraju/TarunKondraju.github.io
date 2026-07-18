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
                
            filename_no_ext = os.path.splitext(file)[0]
            name = filename_no_ext.replace("_", " ").replace("-", " ").title()

            # Destination webp path
            dest_rel_path = os.path.splitext(rel_path)[0] + ".webp"
            dest_file_path = os.path.join(OPT_DIR, dest_rel_path)
            
            # Optimize image if it doesn't exist or is older than source
            if not os.path.exists(dest_file_path) or os.path.getmtime(src_file_path) > os.path.getmtime(dest_file_path):
                print(f"Optimizing: {rel_path} -> {dest_rel_path}")
                optimize_image(src_file_path, dest_file_path)

            # Web path for JS
            web_path = f"assets/images/gallery/{dest_rel_path.replace(os.sep, '/')}"
            
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
  const galleryGrid = document.getElementById('gallery-grid');
  if (!galleryGrid) return;

  const galleryData = {json.dumps(new_entries, indent=4)};

  const dateFilter = document.getElementById('date-filter');
  const placeFilter = document.getElementById('place-filter');
  const eventFilter = document.getElementById('event-filter');
  const nameFilter = document.getElementById('name-filter');

  function populateFilters() {{
    const dates = new Set();
    const places = new Set();
    const events = new Set();
    const names = new Set();

    galleryData.forEach(item => {{
      dates.add(item.date);
      places.add(item.place);
      events.add(item.event);
      names.add(item.name);
    }});

    // Helper to generate options
    const createOptions = (set, filterElement) => {{
       [...set].sort().forEach(val => filterElement.innerHTML += `<option value="${{val}}">${{val}}</option>`);
    }};

    createOptions(dates, dateFilter);
    if(placeFilter) createOptions(places, placeFilter);
    createOptions(events, eventFilter);
    createOptions(names, nameFilter);
  }}

  function renderGallery() {{
    const selectedDate = dateFilter.value;
    const selectedPlace = placeFilter ? placeFilter.value : 'all';
    const selectedEvent = eventFilter.value;
    const selectedName = nameFilter.value;

    galleryGrid.innerHTML = '';

    const filteredData = galleryData.filter(item => {{
      const matchDate = selectedDate === 'all' || item.date === selectedDate;
      const matchPlace = selectedPlace === 'all' || item.place === selectedPlace;
      const matchEvent = selectedEvent === 'all' || item.event === selectedEvent;
      const matchName = selectedName === 'all' || item.name === selectedName;
      return matchDate && matchPlace && matchEvent && matchName;
    }});

    if (filteredData.length === 0) {{
      galleryGrid.innerHTML = '<p>No photos found matching the selected filters.</p>';
      return;
    }}

    filteredData.forEach(item => {{
      const div = document.createElement('div');
      div.className = 'gallery-item';
      
      // Determine caption
      let caption = item.date;
      if (item.place !== 'Unknown') caption += ` • ${{item.place}}`;
      if (item.event !== 'Unknown') caption += ` • ${{item.event}}`;

      div.innerHTML = `
        <img src="${{item.src}}" alt="${{item.name}}" loading="lazy">
        <div class="gallery-item-overlay">
          <p class="gallery-item-title">${{item.name}}</p>
          <p class="gallery-item-meta">${{caption}}</p>
        </div>
      `;
      
      div.addEventListener('click', () => openLightbox(item, caption));
      galleryGrid.appendChild(div);
    }});
  }}

  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const closeBtn = document.getElementsByClassName('lightbox-close')[0];

  function openLightbox(item, captionText) {{
    lightbox.style.display = "block";
    lightboxImg.src = item.src;
    lightboxCaption.innerHTML = `<b>${{item.name}}</b><br>${{captionText}}`;
  }}

  closeBtn.onclick = () => lightbox.style.display = "none";
  lightbox.onclick = (e) => {{ if (e.target === lightbox) lightbox.style.display = "none"; }};

  dateFilter.addEventListener('change', renderGallery);
  if(placeFilter) placeFilter.addEventListener('change', renderGallery);
  eventFilter.addEventListener('change', renderGallery);
  nameFilter.addEventListener('change', renderGallery);

  populateFilters();
  renderGallery();
}});
"""
    # Write directly to the JS file, overwriting the entire script
    with open(JS_FILE, "w") as f:
        f.write(js_content)
        
    print(f"Successfully generated metadata for {len(new_entries)} image(s)!")
    print(f"Updated {JS_FILE}")

if __name__ == "__main__":
    update_gallery()
