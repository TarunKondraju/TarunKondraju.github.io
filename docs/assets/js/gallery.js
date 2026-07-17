document.addEventListener("DOMContentLoaded", function() {
  // Only run if we are on the gallery page
  const galleryGrid = document.getElementById('gallery-grid');
  if (!galleryGrid) return;

  // Sample Data: You should replace this with your actual photo data
  // Ensure the images exist in docs/assets/images/gallery/
  const galleryData = [
    {
      src: 'https://images.unsplash.com/photo-1500964757637-c85e8a162699?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      date: '2023-01',
      event: 'Conference',
      name: 'Landscape'
    },
    {
      src: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      date: '2023-05',
      event: 'Field Work',
      name: 'Nature'
    },
    {
      src: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      date: '2023-05',
      event: 'Conference',
      name: 'Mountains'
    },
    {
      src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      date: '2024-02',
      event: 'Presentation',
      name: 'Forest'
    }
  ];

  const dateFilter = document.getElementById('date-filter');
  const eventFilter = document.getElementById('event-filter');
  const nameFilter = document.getElementById('name-filter');

  // Populate filter options dynamically based on data
  function populateFilters() {
    const dates = new Set();
    const events = new Set();
    const names = new Set();

    galleryData.forEach(item => {
      dates.add(item.date);
      events.add(item.event);
      names.add(item.name);
    });

    dates.forEach(date => dateFilter.innerHTML += `<option value="${date}">${date}</option>`);
    events.forEach(evt => eventFilter.innerHTML += `<option value="${evt}">${evt}</option>`);
    names.forEach(name => nameFilter.innerHTML += `<option value="${name}">${name}</option>`);
  }

  // Render the gallery grid based on current filters
  function renderGallery() {
    const selectedDate = dateFilter.value;
    const selectedEvent = eventFilter.value;
    const selectedName = nameFilter.value;

    galleryGrid.innerHTML = ''; // Clear current

    const filteredData = galleryData.filter(item => {
      const matchDate = selectedDate === 'all' || item.date === selectedDate;
      const matchEvent = selectedEvent === 'all' || item.event === selectedEvent;
      const matchName = selectedName === 'all' || item.name === selectedName;
      return matchDate && matchEvent && matchName;
    });

    if (filteredData.length === 0) {
      galleryGrid.innerHTML = '<p>No photos found matching the selected filters.</p>';
      return;
    }

    filteredData.forEach(item => {
      const div = document.createElement('div');
      div.className = 'gallery-item';
      div.innerHTML = `
        <img src="${item.src}" alt="${item.name}" loading="lazy">
        <div class="gallery-item-overlay">
          <p class="gallery-item-title">${item.name}</p>
          <p class="gallery-item-meta">${item.date} • ${item.event}</p>
        </div>
      `;
      
      div.addEventListener('click', () => openLightbox(item));
      galleryGrid.appendChild(div);
    });
  }

  // Lightbox functionality
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const closeBtn = document.getElementsByClassName('lightbox-close')[0];

  function openLightbox(item) {
    lightbox.style.display = "block";
    lightboxImg.src = item.src;
    lightboxCaption.innerHTML = `<b>${item.name}</b><br>${item.date} • ${item.event}`;
  }

  closeBtn.onclick = function() {
    lightbox.style.display = "none";
  }

  // Close lightbox if clicking outside the image
  lightbox.onclick = function(e) {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
    }
  }

  // Event Listeners for filters
  dateFilter.addEventListener('change', renderGallery);
  eventFilter.addEventListener('change', renderGallery);
  nameFilter.addEventListener('change', renderGallery);

  // Initialize
  populateFilters();
  renderGallery();
});
