document.addEventListener("DOMContentLoaded", function() {
  const galleryGrid = document.getElementById('gallery-grid');
  if (!galleryGrid) return;

  const galleryData = [
    {
        "src": "/assets/images/gallery/Srisailam_Reservoir/IMG_20190926_164337782.webp",
        "date": "Unknown",
        "place": "Unknown",
        "event": "Srisailam Reservoir",
        "name": "Img 20190926 164337782"
    },
    {
        "src": "/assets/images/gallery/Srisailam_Reservoir/IMG_20171014_142332131_HDR.webp",
        "date": "Unknown",
        "place": "Unknown",
        "event": "Srisailam Reservoir",
        "name": "Img 20171014 142332131 Hdr"
    },
    {
        "src": "/assets/images/gallery/Srisailam_Reservoir/IMG_20190926_162858123.webp",
        "date": "Unknown",
        "place": "Unknown",
        "event": "Srisailam Reservoir",
        "name": "Img 20190926 162858123"
    },
    {
        "src": "/assets/images/gallery/Srisailam_Reservoir/IMG_20190926_163358646_HDR.webp",
        "date": "Unknown",
        "place": "Unknown",
        "event": "Srisailam Reservoir",
        "name": "Img 20190926 163358646 Hdr"
    },
    {
        "src": "/assets/images/gallery/Srisailam_Reservoir/IMG_20171014_142335937_HDR.webp",
        "date": "Unknown",
        "place": "Unknown",
        "event": "Srisailam Reservoir",
        "name": "Img 20171014 142335937 Hdr"
    },
    {
        "src": "/assets/images/gallery/Experiments/20240903_133107.webp",
        "date": "Unknown",
        "place": "Unknown",
        "event": "Experiments",
        "name": "20240903 133107"
    },
    {
        "src": "/assets/images/gallery/Experiments/20240314_124325.webp",
        "date": "Unknown",
        "place": "Unknown",
        "event": "Experiments",
        "name": "20240314 124325"
    },
    {
        "src": "/assets/images/gallery/Tarun/Flying_AgricultureDrones.webp",
        "date": "Unknown",
        "place": "Unknown",
        "event": "Tarun",
        "name": "Flying Agriculturedrones"
    },
    {
        "src": "/assets/images/gallery/Tarun/Leaf_Chlorophyll_Estimation.webp",
        "date": "Unknown",
        "place": "Unknown",
        "event": "Tarun",
        "name": "Leaf Chlorophyll Estimation"
    },
    {
        "src": "/assets/images/gallery/Tarun/Assembling_Drones.webp",
        "date": "Unknown",
        "place": "Unknown",
        "event": "Tarun",
        "name": "Assembling Drones"
    },
    {
        "src": "/assets/images/gallery/Tarun/Hyperspectral_Data_Capturing_IARI.jpg.webp",
        "date": "Unknown",
        "place": "Unknown",
        "event": "Tarun",
        "name": "Hyperspectral Data Capturing Iari.Jpg"
    },
    {
        "src": "/assets/images/gallery/Tarun/Hyperspectral_Data_Capturing.jpg.webp",
        "date": "Unknown",
        "place": "Unknown",
        "event": "Tarun",
        "name": "Hyperspectral Data Capturing.Jpg"
    },
    {
        "src": "/assets/images/gallery/Tarun/Finally_Dr_Tarun_Teja_Kondraju.webp",
        "date": "Unknown",
        "place": "Unknown",
        "event": "Tarun",
        "name": "Finally Dr Tarun Teja Kondraju"
    },
    {
        "src": "/assets/images/gallery/Tarun/Dindi_Reservoir_Field_Visit.webp",
        "date": "Unknown",
        "place": "Unknown",
        "event": "Tarun",
        "name": "Dindi Reservoir Field Visit"
    },
    {
        "src": "/assets/images/gallery/Tarun/Play poster final.webp",
        "date": "Unknown",
        "place": "Unknown",
        "event": "Tarun",
        "name": "Play Poster Final"
    },
    {
        "src": "/assets/images/gallery/Tarun/Crop_LAI_Estimation.webp",
        "date": "Unknown",
        "place": "Unknown",
        "event": "Tarun",
        "name": "Crop Lai Estimation"
    },
    {
        "src": "/assets/images/gallery/Tarun/National_War_Mamorial.webp",
        "date": "Unknown",
        "place": "Unknown",
        "event": "Tarun",
        "name": "National War Mamorial"
    },
    {
        "src": "/assets/images/gallery/Tarun/IMG_20230205_181744.webp",
        "date": "Unknown",
        "place": "Unknown",
        "event": "Tarun",
        "name": "Img 20230205 181744"
    },
    {
        "src": "/assets/images/gallery/Prominent_People_in_my_Professional_Life/Dr Rabi Babu Mandla/20251117_190220.webp",
        "date": "Unknown",
        "place": "Prominent People In My Professional Life",
        "event": "Dr Rabi Babu Mandla",
        "name": "20251117 190220"
    },
    {
        "src": "/assets/images/gallery/Prominent_People_in_my_Professional_Life/Dr Rabi Babu Mandla/20251117_185701.webp",
        "date": "Unknown",
        "place": "Prominent People In My Professional Life",
        "event": "Dr Rabi Babu Mandla",
        "name": "20251117 185701"
    },
    {
        "src": "/assets/images/gallery/Prominent_People_in_my_Professional_Life/Dr Rabi Babu Mandla/20251117_185354.webp",
        "date": "Unknown",
        "place": "Prominent People In My Professional Life",
        "event": "Dr Rabi Babu Mandla",
        "name": "20251117 185354"
    },
    {
        "src": "/assets/images/gallery/Prominent_People_in_my_Professional_Life/Dr Rabi Babu Mandla/20251117_185343.webp",
        "date": "Unknown",
        "place": "Prominent People In My Professional Life",
        "event": "Dr Rabi Babu Mandla",
        "name": "20251117 185343"
    },
    {
        "src": "/assets/images/gallery/Prominent_People_in_my_Professional_Life/Big_Data_Analytics_Lab/20260325_113605.webp",
        "date": "Unknown",
        "place": "Prominent People In My Professional Life",
        "event": "Big Data Analytics Lab",
        "name": "20260325 113605"
    },
    {
        "src": "/assets/images/gallery/Prominent_People_in_my_Professional_Life/Big_Data_Analytics_Lab/IMG_20221115_133838.webp",
        "date": "Unknown",
        "place": "Prominent People In My Professional Life",
        "event": "Big Data Analytics Lab",
        "name": "Img 20221115 133838"
    },
    {
        "src": "/assets/images/gallery/Prominent_People_in_my_Professional_Life/Big_Data_Analytics_Lab/IMG_20221223_154731.webp",
        "date": "Unknown",
        "place": "Prominent People In My Professional Life",
        "event": "Big Data Analytics Lab",
        "name": "Img 20221223 154731"
    },
    {
        "src": "/assets/images/gallery/Prominent_People_in_my_Professional_Life/Big_Data_Analytics_Lab/IMG_20221223_154733.webp",
        "date": "Unknown",
        "place": "Prominent People In My Professional Life",
        "event": "Big Data Analytics Lab",
        "name": "Img 20221223 154733"
    },
    {
        "src": "/assets/images/gallery/Prominent_People_in_my_Professional_Life/Big_Data_Analytics_Lab/IMG_20221011_140145.webp",
        "date": "Unknown",
        "place": "Prominent People In My Professional Life",
        "event": "Big Data Analytics Lab",
        "name": "Img 20221011 140145"
    },
    {
        "src": "/assets/images/gallery/Prominent_People_in_my_Professional_Life/Big_Data_Analytics_Lab/20250725_165040.webp",
        "date": "Unknown",
        "place": "Prominent People In My Professional Life",
        "event": "Big Data Analytics Lab",
        "name": "20250725 165040"
    },
    {
        "src": "/assets/images/gallery/Prominent_People_in_my_Professional_Life/Big_Data_Analytics_Lab/IMG_0143.webp",
        "date": "Unknown",
        "place": "Prominent People In My Professional Life",
        "event": "Big Data Analytics Lab",
        "name": "Img 0143"
    },
    {
        "src": "/assets/images/gallery/Prominent_People_in_my_Professional_Life/Dr Rajan/IMG_20171120_162647273_HDR.webp",
        "date": "Unknown",
        "place": "Prominent People In My Professional Life",
        "event": "Dr Rajan",
        "name": "Img 20171120 162647273 Hdr"
    },
    {
        "src": "/assets/images/gallery/Prominent_People_in_my_Professional_Life/Dr Rajan/How_approach_a_GIS_Problem.webp",
        "date": "Unknown",
        "place": "Prominent People In My Professional Life",
        "event": "Dr Rajan",
        "name": "How Approach A Gis Problem"
    },
    {
        "src": "/assets/images/gallery/Prominent_People_in_my_Professional_Life/Dr Rabi N. Sahoo/20241207_113238.webp",
        "date": "Unknown",
        "place": "Prominent People In My Professional Life",
        "event": "Dr Rabi N. Sahoo",
        "name": "20241207 113238"
    },
    {
        "src": "/assets/images/gallery/Prominent_People_in_my_Professional_Life/Dr Rabi N. Sahoo/20241207_113016.webp",
        "date": "Unknown",
        "place": "Prominent People In My Professional Life",
        "event": "Dr Rabi N. Sahoo",
        "name": "20241207 113016"
    },
    {
        "src": "/assets/images/gallery/Prominent_People_in_my_Professional_Life/Dr Rabi N. Sahoo/IMG_20230301_152333.webp",
        "date": "Unknown",
        "place": "Prominent People In My Professional Life",
        "event": "Dr Rabi N. Sahoo",
        "name": "Img 20230301 152333"
    },
    {
        "src": "/assets/images/gallery/Prominent_People_in_my_Professional_Life/Dr Rabi N. Sahoo/IMG_20220628_193110.webp",
        "date": "Unknown",
        "place": "Prominent People In My Professional Life",
        "event": "Dr Rabi N. Sahoo",
        "name": "Img 20220628 193110"
    },
    {
        "src": "/assets/images/gallery/Prominent_People_in_my_Professional_Life/Dr Rabi N. Sahoo/20241207_113033.webp",
        "date": "Unknown",
        "place": "Prominent People In My Professional Life",
        "event": "Dr Rabi N. Sahoo",
        "name": "20241207 113033"
    },
    {
        "src": "/assets/images/gallery/Prominent_People_in_my_Professional_Life/Dr Rabi N. Sahoo/20241207_114201.webp",
        "date": "Unknown",
        "place": "Prominent People In My Professional Life",
        "event": "Dr Rabi N. Sahoo",
        "name": "20241207 114201"
    },
    {
        "src": "/assets/images/gallery/Rakhadibaba_Ashram/PXL_20210609_111521857.MP.webp",
        "date": "Unknown",
        "place": "Unknown",
        "event": "Rakhadibaba Ashram",
        "name": "Pxl 20210609 111521857.Mp"
    },
    {
        "src": "/assets/images/gallery/Rakhadibaba_Ashram/PXL_20210609_111514789.MP.webp",
        "date": "Unknown",
        "place": "Unknown",
        "event": "Rakhadibaba Ashram",
        "name": "Pxl 20210609 111514789.Mp"
    },
    {
        "src": "/assets/images/gallery/IIIT_Hyderabad/IMG_20151007_061206.webp",
        "date": "Unknown",
        "place": "Unknown",
        "event": "Iiit Hyderabad",
        "name": "Img 20151007 061206"
    },
    {
        "src": "/assets/images/gallery/IIIT_Hyderabad/IMG_20151007_061200.webp",
        "date": "Unknown",
        "place": "Unknown",
        "event": "Iiit Hyderabad",
        "name": "Img 20151007 061200"
    },
    {
        "src": "/assets/images/gallery/IIIT_Hyderabad/IMG_20151007_061121.webp",
        "date": "Unknown",
        "place": "Unknown",
        "event": "Iiit Hyderabad",
        "name": "Img 20151007 061121"
    },
    {
        "src": "/assets/images/gallery/Indian_Agriculural_Research_Institute/IMG_20220909_181025.webp",
        "date": "Unknown",
        "place": "Unknown",
        "event": "Indian Agriculural Research Institute",
        "name": "Img 20220909 181025"
    },
    {
        "src": "/assets/images/gallery/Indian_Agriculural_Research_Institute/IMG_20220827_124854.webp",
        "date": "Unknown",
        "place": "Unknown",
        "event": "Indian Agriculural Research Institute",
        "name": "Img 20220827 124854"
    },
    {
        "src": "/assets/images/gallery/Indian_Agriculural_Research_Institute/IMG_20220302_181058.webp",
        "date": "Unknown",
        "place": "Unknown",
        "event": "Indian Agriculural Research Institute",
        "name": "Img 20220302 181058"
    },
    {
        "src": "/assets/images/gallery/Indian_Agriculural_Research_Institute/IMG_20220827_124850.webp",
        "date": "Unknown",
        "place": "Unknown",
        "event": "Indian Agriculural Research Institute",
        "name": "Img 20220827 124850"
    },
    {
        "src": "/assets/images/gallery/Indian_Agriculural_Research_Institute/IMG_20220302_181107.webp",
        "date": "Unknown",
        "place": "Unknown",
        "event": "Indian Agriculural Research Institute",
        "name": "Img 20220302 181107"
    },
    {
        "src": "/assets/images/gallery/Indian_Agriculural_Research_Institute/20241021_105803.webp",
        "date": "Unknown",
        "place": "Unknown",
        "event": "Indian Agriculural Research Institute",
        "name": "20241021 105803"
    },
    {
        "src": "/assets/images/gallery/Indian_Agriculural_Research_Institute/IMG_20220723_092408.webp",
        "date": "Unknown",
        "place": "Unknown",
        "event": "Indian Agriculural Research Institute",
        "name": "Img 20220723 092408"
    },
    {
        "src": "/assets/images/gallery/Indian_Agriculural_Research_Institute/IMG_20220721_092907.webp",
        "date": "Unknown",
        "place": "Unknown",
        "event": "Indian Agriculural Research Institute",
        "name": "Img 20220721 092907"
    },
    {
        "src": "/assets/images/gallery/Indian_Agriculural_Research_Institute/IMG_20220721_092911.webp",
        "date": "Unknown",
        "place": "Unknown",
        "event": "Indian Agriculural Research Institute",
        "name": "Img 20220721 092911"
    },
    {
        "src": "/assets/images/gallery/Indian_Agriculural_Research_Institute/IMG_20220909_181104.webp",
        "date": "Unknown",
        "place": "Unknown",
        "event": "Indian Agriculural Research Institute",
        "name": "Img 20220909 181104"
    },
    {
        "src": "/assets/images/gallery/Indian_Agriculural_Research_Institute/20250113_131634.webp",
        "date": "Unknown",
        "place": "Unknown",
        "event": "Indian Agriculural Research Institute",
        "name": "20250113 131634"
    },
    {
        "src": "/assets/images/gallery/Indian_Agriculural_Research_Institute/20240909_173307.webp",
        "date": "Unknown",
        "place": "Unknown",
        "event": "Indian Agriculural Research Institute",
        "name": "20240909 173307"
    },
    {
        "src": "/assets/images/gallery/Indian_Agriculural_Research_Institute/IMG_20220302_181053.webp",
        "date": "Unknown",
        "place": "Unknown",
        "event": "Indian Agriculural Research Institute",
        "name": "Img 20220302 181053"
    },
    {
        "src": "/assets/images/gallery/Events/IMC/20241018_114056.webp",
        "date": "Unknown",
        "place": "Events",
        "event": "Imc",
        "name": "20241018 114056"
    },
    {
        "src": "/assets/images/gallery/Events/IMC/20241018_115509.webp",
        "date": "Unknown",
        "place": "Events",
        "event": "Imc",
        "name": "20241018 115509"
    },
    {
        "src": "/assets/images/gallery/Events/IMC/20241016_145318.webp",
        "date": "Unknown",
        "place": "Events",
        "event": "Imc",
        "name": "20241016 145318"
    },
    {
        "src": "/assets/images/gallery/Events/IMC/20241018_114942.webp",
        "date": "Unknown",
        "place": "Events",
        "event": "Imc",
        "name": "20241018 114942"
    },
    {
        "src": "/assets/images/gallery/Events/ESTIC_2025/20251105_132851.webp",
        "date": "Unknown",
        "place": "Events",
        "event": "Estic 2025",
        "name": "20251105 132851"
    },
    {
        "src": "/assets/images/gallery/Events/AI Summit/20260216_114926.webp",
        "date": "Unknown",
        "place": "Events",
        "event": "Ai Summit",
        "name": "20260216 114926"
    },
    {
        "src": "/assets/images/gallery/Events/ICRISAT/20260316_144119.webp",
        "date": "Unknown",
        "place": "Events",
        "event": "Icrisat",
        "name": "20260316 144119"
    },
    {
        "src": "/assets/images/gallery/Events/ICRISAT/20260316_144139.webp",
        "date": "Unknown",
        "place": "Events",
        "event": "Icrisat",
        "name": "20260316 144139"
    },
    {
        "src": "/assets/images/gallery/Events/NePPA_Showcase/IMG_20220310_122114.webp",
        "date": "Unknown",
        "place": "Events",
        "event": "Neppa Showcase",
        "name": "Img 20220310 122114"
    },
    {
        "src": "/assets/images/gallery/Swamy_Srisrisri_Poornanndaji_Ashram/Swamiji_Chair.webp",
        "date": "Unknown",
        "place": "Unknown",
        "event": "Swamy Srisrisri Poornanndaji Ashram",
        "name": "Swamiji Chair"
    },
    {
        "src": "/assets/images/gallery/Swamy_Srisrisri_Poornanndaji_Ashram/Nityananda_Bagwan.webp",
        "date": "Unknown",
        "place": "Unknown",
        "event": "Swamy Srisrisri Poornanndaji Ashram",
        "name": "Nityananda Bagwan"
    },
    {
        "src": "/assets/images/gallery/Swamy_Srisrisri_Poornanndaji_Ashram/Swamiji_Adishtanam.webp",
        "date": "Unknown",
        "place": "Unknown",
        "event": "Swamy Srisrisri Poornanndaji Ashram",
        "name": "Swamiji Adishtanam"
    },
    {
        "src": "/assets/images/gallery/Swamy_Srisrisri_Poornanndaji_Ashram/Nityananda_Bhagwan.webp",
        "date": "Unknown",
        "place": "Unknown",
        "event": "Swamy Srisrisri Poornanndaji Ashram",
        "name": "Nityananda Bhagwan"
    },
    {
        "src": "/assets/images/gallery/Swamy_Srisrisri_Poornanndaji_Ashram/Swamiji_Lotus_Feet.webp",
        "date": "Unknown",
        "place": "Unknown",
        "event": "Swamy Srisrisri Poornanndaji Ashram",
        "name": "Swamiji Lotus Feet"
    },
    {
        "src": "/assets/images/gallery/Swamy_Srisrisri_Poornanndaji_Ashram/demo.webp",
        "date": "Unknown",
        "place": "Unknown",
        "event": "Swamy Srisrisri Poornanndaji Ashram",
        "name": "Demo"
    },
    {
        "src": "/assets/images/gallery/Swamy_Srisrisri_Poornanndaji_Ashram/Swamy_Srisrisri_Pooranandagaru.webp",
        "date": "Unknown",
        "place": "Unknown",
        "event": "Swamy Srisrisri Poornanndaji Ashram",
        "name": "Swamy Srisrisri Pooranandagaru"
    },
    {
        "src": "/assets/images/gallery/Swamy_Srisrisri_Poornanndaji_Ashram/Swamiji_Adhistanam.webp",
        "date": "Unknown",
        "place": "Unknown",
        "event": "Swamy Srisrisri Poornanndaji Ashram",
        "name": "Swamiji Adhistanam"
    },
    {
        "src": "/assets/images/gallery/Swamy_Srisrisri_Poornanndaji_Ashram/Sadguru_SriSriSri_Swamy_Poornanandji.webp",
        "date": "Unknown",
        "place": "Unknown",
        "event": "Swamy Srisrisri Poornanndaji Ashram",
        "name": "Sadguru Srisrisri Swamy Poornanandji"
    },
    {
        "src": "/assets/images/gallery/Swamy_Srisrisri_Poornanndaji_Ashram/Bhuwaneshwari_Yantram.webp",
        "date": "Unknown",
        "place": "Unknown",
        "event": "Swamy Srisrisri Poornanndaji Ashram",
        "name": "Bhuwaneshwari Yantram"
    },
    {
        "src": "/assets/images/gallery/Swamy_Srisrisri_Poornanndaji_Ashram/Swamiji_Adishatanam.webp",
        "date": "Unknown",
        "place": "Unknown",
        "event": "Swamy Srisrisri Poornanndaji Ashram",
        "name": "Swamiji Adishatanam"
    },
    {
        "src": "/assets/images/gallery/Swamy_Srisrisri_Poornanndaji_Ashram/Swamiji_Padukalu.webp",
        "date": "Unknown",
        "place": "Unknown",
        "event": "Swamy Srisrisri Poornanndaji Ashram",
        "name": "Swamiji Padukalu"
    },
    {
        "src": "/assets/images/gallery/Swamy_Srisrisri_Poornanndaji_Ashram/Bhuvaneshwari_Yantram.webp",
        "date": "Unknown",
        "place": "Unknown",
        "event": "Swamy Srisrisri Poornanndaji Ashram",
        "name": "Bhuvaneshwari Yantram"
    },
    {
        "src": "/assets/images/gallery/Swamy_Srisrisri_Poornanndaji_Ashram/Rakhadibaba_hall.webp",
        "date": "Unknown",
        "place": "Unknown",
        "event": "Swamy Srisrisri Poornanndaji Ashram",
        "name": "Rakhadibaba Hall"
    },
    {
        "src": "/assets/images/gallery/Swamy_Srisrisri_Poornanndaji_Ashram/RakhadiBaba.webp",
        "date": "Unknown",
        "place": "Unknown",
        "event": "Swamy Srisrisri Poornanndaji Ashram",
        "name": "Rakhadibaba"
    }
];

  // Group photos by Event (Album)
  const albums = {};
  galleryData.forEach(item => {
    const albumName = item.event;
    if (!albums[albumName]) {
      albums[albumName] = [];
    }
    albums[albumName].push(item);
  });

  const albumGrid = document.getElementById('album-grid');
  const albumView = document.getElementById('album-view');
  const btnBack = document.getElementById('back-to-albums');
  const albumTitle = document.getElementById('album-title');
  const heroImg = document.getElementById('hero-img');
  const heroCaption = document.getElementById('hero-caption');
  const thumbnailRow = document.getElementById('thumbnail-row');

  // Render the Album Grid
  function renderAlbumGrid() {
    albumGrid.style.display = 'grid';
    albumView.style.display = 'none';
    albumGrid.innerHTML = '';

    Object.keys(albums).sort().forEach(albumName => {
      const photos = albums[albumName];
      const coverPhoto = photos[0]; // First photo as cover

      const card = document.createElement('div');
      card.className = 'album-card';
      
      let metaText = coverPhoto.date;
      if (coverPhoto.place !== 'Unknown') metaText += ` • ${coverPhoto.place}`;

      card.innerHTML = `
        <img src="${coverPhoto.src}" alt="${albumName}" class="album-cover" loading="lazy">
        <div class="album-info">
          <h3 class="album-name">${albumName}</h3>
          <p class="album-meta">${metaText} (${photos.length} photos)</p>
        </div>
      `;

      card.addEventListener('click', () => openAlbum(albumName));
      albumGrid.appendChild(card);
    });
  }

  // Open specific album
  function openAlbum(albumName) {
    albumGrid.style.display = 'none';
    albumView.style.display = 'flex';
    albumTitle.textContent = albumName;
    
    const photos = albums[albumName];
    thumbnailRow.innerHTML = '';

    // Function to set Hero Image
    const setHero = (item, thumbEl) => {
      heroImg.src = item.src;
      let caption = item.name;
      if (item.place !== 'Unknown' || item.date !== 'Unknown') {
         caption += ` (${item.date} - ${item.place})`;
      }
      heroCaption.textContent = caption;

      // Update active thumbnail outline
      document.querySelectorAll('.thumbnail-row img').forEach(img => img.classList.remove('active'));
      if (thumbEl) thumbEl.classList.add('active');
    };

    // Render Thumbnails
    photos.forEach((item, index) => {
      const img = document.createElement('img');
      img.src = item.src;
      img.alt = item.name;
      img.loading = 'lazy';
      
      img.addEventListener('click', () => setHero(item, img));
      thumbnailRow.appendChild(img);

      // Set first image as default hero
      if (index === 0) {
        setHero(item, img);
      }
    });
  }

  btnBack.addEventListener('click', renderAlbumGrid);

  // Initialize
  renderAlbumGrid();
});
