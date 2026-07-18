document.addEventListener("DOMContentLoaded", function() {
  const galleryGrid = document.getElementById('gallery-grid');
  if (!galleryGrid) return;

  const galleryData = [
    {
        "src": "assets/images/gallery/2026/Delhi/Conference/demo.webp",
        "date": "2026",
        "place": "Delhi",
        "event": "Conference",
        "name": "Demo"
    }
];

  const dateFilter = document.getElementById('date-filter');
  const placeFilter = document.getElementById('place-filter');
  const eventFilter = document.getElementById('event-filter');
  const nameFilter = document.getElementById('name-filter');

  function populateFilters() {
    const dates = new Set();
    const places = new Set();
    const events = new Set();
    const names = new Set();

    galleryData.forEach(item => {
      dates.add(item.date);
      places.add(item.place);
      events.add(item.event);
      names.add(item.name);
    });

    // Helper to generate options
    const createOptions = (set, filterElement) => {
       [...set].sort().forEach(val => filterElement.innerHTML += `<option value="${val}">${val}</option>`);
    };

    createOptions(dates, dateFilter);
    if(placeFilter) createOptions(places, placeFilter);
    createOptions(events, eventFilter);
    createOptions(names, nameFilter);
  }

  function renderGallery() {
    const selectedDate = dateFilter.value;
    const selectedPlace = placeFilter ? placeFilter.value : 'all';
    const selectedEvent = eventFilter.value;
    const selectedName = nameFilter.value;

    galleryGrid.innerHTML = '';

    const filteredData = galleryData.filter(item => {
      const matchDate = selectedDate === 'all' || item.date === selectedDate;
      const matchPlace = selectedPlace === 'all' || item.place === selectedPlace;
      const matchEvent = selectedEvent === 'all' || item.event === selectedEvent;
      const matchName = selectedName === 'all' || item.name === selectedName;
      return matchDate && matchPlace && matchEvent && matchName;
    });

    if (filteredData.length === 0) {
      galleryGrid.innerHTML = '<p>No photos found matching the selected filters.</p>';
      return;
    }

    filteredData.forEach(item => {
      const div = document.createElement('div');
      div.className = 'gallery-item';
      
      // Determine caption
      let caption = item.date;
      if (item.place !== 'Unknown') caption += ` • ${item.place}`;
      if (item.event !== 'Unknown') caption += ` • ${item.event}`;

      div.innerHTML = `
        <img src="${item.src}" alt="${item.name}" loading="lazy">
        <div class="gallery-item-overlay">
          <p class="gallery-item-title">${item.name}</p>
          <p class="gallery-item-meta">${caption}</p>
        </div>
      `;
      
      div.addEventListener('click', () => openLightbox(item, caption));
      galleryGrid.appendChild(div);
    });
  }

  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const closeBtn = document.getElementsByClassName('lightbox-close')[0];

  function openLightbox(item, captionText) {
    lightbox.style.display = "block";
    lightboxImg.src = item.src;
    lightboxCaption.innerHTML = `<b>${item.name}</b><br>${captionText}`;
  }

  closeBtn.onclick = () => lightbox.style.display = "none";
  lightbox.onclick = (e) => { if (e.target === lightbox) lightbox.style.display = "none"; };

  dateFilter.addEventListener('change', renderGallery);
  if(placeFilter) placeFilter.addEventListener('change', renderGallery);
  eventFilter.addEventListener('change', renderGallery);
  nameFilter.addEventListener('change', renderGallery);

  populateFilters();
  renderGallery();
});
