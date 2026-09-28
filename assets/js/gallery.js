document.addEventListener("DOMContentLoaded", function() {
  const albumGridCheck = document.getElementById('album-grid');
  if (!albumGridCheck) return;

  const galleryData = [
    {
        "src": "/assets/images/gallery/Srisailam_Reservoir/IMG_20190926_164337782.webp",
        "date": "Unknown",
        "place": "Unknown",
        "event": "Srisailam Reservoir",
        "name": ""
    },
    {
        "src": "/assets/images/gallery/Srisailam_Reservoir/IMG_20190926_162858123.webp",
        "date": "Unknown",
        "place": "Unknown",
        "event": "Srisailam Reservoir",
        "name": ""
    },
    {
        "src": "/assets/images/gallery/Srisailam_Reservoir/IMG_20190926_163358646_HDR.webp",
        "date": "Unknown",
        "place": "Unknown",
        "event": "Srisailam Reservoir",
        "name": ""
    },
    {
        "src": "/assets/images/gallery/Srisailam_Reservoir/IMG_20171014_142335937_HDR.webp",
        "date": "Unknown",
        "place": "Unknown",
        "event": "Srisailam Reservoir",
        "name": ""
    },
    {
        "src": "/assets/images/gallery/Srisailam_Reservoir/Srisailam Dam.webp",
        "date": "Unknown",
        "place": "Unknown",
        "event": "Srisailam Reservoir",
        "name": "Srisailam Dam"
    },
    {
        "src": "/assets/images/gallery/Experiments/Crop Health Assessment using Proximal Images @ IARI.webp",
        "date": "Unknown",
        "place": "Unknown",
        "event": "Experiments",
        "name": "Crop Health Assessment Using Proximal Images @ Iari"
    },
    {
        "src": "/assets/images/gallery/Experiments/Spectroradiometers based Assessment of Crop Health @ IARI.webp",
        "date": "Unknown",
        "place": "Unknown",
        "event": "Experiments",
        "name": "Spectroradiometers Based Assessment Of Crop Health @ Iari"
    },
    {
        "src": "/assets/images/gallery/Big_Data_Analytics_Lab/BDL lab Lunch get-together.webp",
        "date": "Unknown",
        "place": "Unknown",
        "event": "Big Data Analytics Lab",
        "name": "Bdl Lab Lunch Get Together"
    },
    {
        "src": "/assets/images/gallery/Big_Data_Analytics_Lab/Dr Jochem Verrelst.webp",
        "date": "Unknown",
        "place": "Unknown",
        "event": "Big Data Analytics Lab",
        "name": "Dr Jochem Verrelst"
    },
    {
        "src": "/assets/images/gallery/Big_Data_Analytics_Lab/With Dr Ali.webp",
        "date": "Unknown",
        "place": "Unknown",
        "event": "Big Data Analytics Lab",
        "name": "With Dr Ali"
    },
    {
        "src": "/assets/images/gallery/Big_Data_Analytics_Lab/Mr. Purushottam Giving us Training on Hyperpsectral Sensor Calibration.webp",
        "date": "Unknown",
        "place": "Unknown",
        "event": "Big Data Analytics Lab",
        "name": "Mr. Purushottam Giving Us Training On Hyperpsectral Sensor Calibration"
    },
    {
        "src": "/assets/images/gallery/Big_Data_Analytics_Lab/Hyperspectral Data Collection.webp",
        "date": "Unknown",
        "place": "Unknown",
        "event": "Big Data Analytics Lab",
        "name": "Hyperspectral Data Collection"
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
        "name": ""
    },
    {
        "src": "/assets/images/gallery/Prominent_People_in_my_Professional_Life/Dr Rabi Babu Mandla/Dr Rabi Babu Mandla During his Delhi Visit.webp",
        "date": "Unknown",
        "place": "Prominent People In My Professional Life",
        "event": "Dr Rabi Babu Mandla",
        "name": "Dr Rabi Babu Mandla During His Delhi Visit"
    },
    {
        "src": "/assets/images/gallery/Prominent_People_in_my_Professional_Life/Dr Rabi Babu Mandla/Dr Rabi Babu Mandla During his Delhi Visit @ India Gate.webp",
        "date": "Unknown",
        "place": "Prominent People In My Professional Life",
        "event": "Dr Rabi Babu Mandla",
        "name": "Dr Rabi Babu Mandla During His Delhi Visit @ India Gate"
    },
    {
        "src": "/assets/images/gallery/Prominent_People_in_my_Professional_Life/Dr Rabi Babu Mandla/Dr Rabi Babu Mandla During his Delhi Visit India Gate.webp",
        "date": "Unknown",
        "place": "Prominent People In My Professional Life",
        "event": "Dr Rabi Babu Mandla",
        "name": "Dr Rabi Babu Mandla During His Delhi Visit India Gate"
    },
    {
        "src": "/assets/images/gallery/Prominent_People_in_my_Professional_Life/Dr Rabi Babu Mandla/Dr Rabi Babu Mandla During his Delhi Visit_Kartavya path.webp",
        "date": "Unknown",
        "place": "Prominent People In My Professional Life",
        "event": "Dr Rabi Babu Mandla",
        "name": "Dr Rabi Babu Mandla During His Delhi Visit Kartavya Path"
    },
    {
        "src": "/assets/images/gallery/Prominent_People_in_my_Professional_Life/Dr Rajan/Dr K. S. Rajan @ IIIT Hyderabad.webp",
        "date": "Unknown",
        "place": "Prominent People In My Professional Life",
        "event": "Dr Rajan",
        "name": "Dr K. S. Rajan @ Iiit Hyderabad"
    },
    {
        "src": "/assets/images/gallery/Prominent_People_in_my_Professional_Life/Dr Rajan/How_approach_a_GIS_Problem.webp",
        "date": "Unknown",
        "place": "Prominent People In My Professional Life",
        "event": "Dr Rajan",
        "name": "How Approach A Gis Problem"
    },
    {
        "src": "/assets/images/gallery/Prominent_People_in_my_Professional_Life/Dr Rabi N. Sahoo/Dr Rabi N Sahoo with Deligates.webp",
        "date": "Unknown",
        "place": "Prominent People In My Professional Life",
        "event": "Dr Rabi N. Sahoo",
        "name": "Dr Rabi N Sahoo With Deligates"
    },
    {
        "src": "/assets/images/gallery/Prominent_People_in_my_Professional_Life/Dr Rabi N. Sahoo/Dr Rabi N Sahoo.webp",
        "date": "Unknown",
        "place": "Prominent People In My Professional Life",
        "event": "Dr Rabi N. Sahoo",
        "name": "Dr Rabi N Sahoo"
    },
    {
        "src": "/assets/images/gallery/Prominent_People_in_my_Professional_Life/Dr Rabi N. Sahoo/Dr Rabi N Sahoo with Full Range Hyperspectral Camera.webp",
        "date": "Unknown",
        "place": "Prominent People In My Professional Life",
        "event": "Dr Rabi N. Sahoo",
        "name": "Dr Rabi N Sahoo With Full Range Hyperspectral Camera"
    },
    {
        "src": "/assets/images/gallery/Prominent_People_in_my_Professional_Life/Dr Rabi N. Sahoo/Dr Rabi N Sahoo with Bill Gates During his Visit @ IARI.webp",
        "date": "Unknown",
        "place": "Prominent People In My Professional Life",
        "event": "Dr Rabi N. Sahoo",
        "name": "Dr Rabi N Sahoo With Bill Gates During His Visit @ Iari"
    },
    {
        "src": "/assets/images/gallery/Prominent_People_in_my_Professional_Life/Dr Rabi N. Sahoo/Dr Rabi N Sahoo, ELU lab @ IARI.webp",
        "date": "Unknown",
        "place": "Prominent People In My Professional Life",
        "event": "Dr Rabi N. Sahoo",
        "name": "Dr Rabi N Sahoo, Elu Lab @ Iari"
    },
    {
        "src": "/assets/images/gallery/Prominent_People_in_my_Professional_Life/Dr Rabi N. Sahoo/Experiantial Learning Unit (ELU) @ IARI.webp",
        "date": "Unknown",
        "place": "Prominent People In My Professional Life",
        "event": "Dr Rabi N. Sahoo",
        "name": "Experiantial Learning Unit (Elu) @ Iari"
    },
    {
        "src": "/assets/images/gallery/Rakhadibaba_Ashram/Homan being performed by Poorna Padmakka.webp",
        "date": "Unknown",
        "place": "Unknown",
        "event": "Rakhadibaba Ashram",
        "name": "Homan Being Performed By Poorna Padmakka"
    },
    {
        "src": "/assets/images/gallery/Rakhadibaba_Ashram/Homagundam.webp",
        "date": "Unknown",
        "place": "Unknown",
        "event": "Rakhadibaba Ashram",
        "name": "Homagundam"
    },
    {
        "src": "/assets/images/gallery/IIIT_Hyderabad/IMG_20151007_061206.webp",
        "date": "Unknown",
        "place": "Unknown",
        "event": "Iiit Hyderabad",
        "name": ""
    },
    {
        "src": "/assets/images/gallery/IIIT_Hyderabad/IMG_20151007_061200.webp",
        "date": "Unknown",
        "place": "Unknown",
        "event": "Iiit Hyderabad",
        "name": ""
    },
    {
        "src": "/assets/images/gallery/IIIT_Hyderabad/IMG_20151007_061121.webp",
        "date": "Unknown",
        "place": "Unknown",
        "event": "Iiit Hyderabad",
        "name": ""
    },
    {
        "src": "/assets/images/gallery/Indian_Agriculural_Research_Institute/IMG_20220909_181025.webp",
        "date": "Unknown",
        "place": "Unknown",
        "event": "Indian Agriculural Research Institute",
        "name": ""
    },
    {
        "src": "/assets/images/gallery/Indian_Agriculural_Research_Institute/IMG_20220827_124854.webp",
        "date": "Unknown",
        "place": "Unknown",
        "event": "Indian Agriculural Research Institute",
        "name": ""
    },
    {
        "src": "/assets/images/gallery/Indian_Agriculural_Research_Institute/IMG_20220302_181058.webp",
        "date": "Unknown",
        "place": "Unknown",
        "event": "Indian Agriculural Research Institute",
        "name": ""
    },
    {
        "src": "/assets/images/gallery/Indian_Agriculural_Research_Institute/IMG_20220827_124850.webp",
        "date": "Unknown",
        "place": "Unknown",
        "event": "Indian Agriculural Research Institute",
        "name": ""
    },
    {
        "src": "/assets/images/gallery/Indian_Agriculural_Research_Institute/IMG_20220302_181107.webp",
        "date": "Unknown",
        "place": "Unknown",
        "event": "Indian Agriculural Research Institute",
        "name": ""
    },
    {
        "src": "/assets/images/gallery/Indian_Agriculural_Research_Institute/20241021_105803.webp",
        "date": "Unknown",
        "place": "Unknown",
        "event": "Indian Agriculural Research Institute",
        "name": ""
    },
    {
        "src": "/assets/images/gallery/Indian_Agriculural_Research_Institute/IMG_20220723_092408.webp",
        "date": "Unknown",
        "place": "Unknown",
        "event": "Indian Agriculural Research Institute",
        "name": ""
    },
    {
        "src": "/assets/images/gallery/Indian_Agriculural_Research_Institute/IMG_20220721_092907.webp",
        "date": "Unknown",
        "place": "Unknown",
        "event": "Indian Agriculural Research Institute",
        "name": ""
    },
    {
        "src": "/assets/images/gallery/Indian_Agriculural_Research_Institute/IMG_20220721_092911.webp",
        "date": "Unknown",
        "place": "Unknown",
        "event": "Indian Agriculural Research Institute",
        "name": ""
    },
    {
        "src": "/assets/images/gallery/Indian_Agriculural_Research_Institute/IMG_20220909_181104.webp",
        "date": "Unknown",
        "place": "Unknown",
        "event": "Indian Agriculural Research Institute",
        "name": ""
    },
    {
        "src": "/assets/images/gallery/Indian_Agriculural_Research_Institute/20250113_131634.webp",
        "date": "Unknown",
        "place": "Unknown",
        "event": "Indian Agriculural Research Institute",
        "name": ""
    },
    {
        "src": "/assets/images/gallery/Indian_Agriculural_Research_Institute/20240909_173307.webp",
        "date": "Unknown",
        "place": "Unknown",
        "event": "Indian Agriculural Research Institute",
        "name": ""
    },
    {
        "src": "/assets/images/gallery/Indian_Agriculural_Research_Institute/IMG_20220302_181053.webp",
        "date": "Unknown",
        "place": "Unknown",
        "event": "Indian Agriculural Research Institute",
        "name": ""
    },
    {
        "src": "/assets/images/gallery/Events/IMC/ICAR DG and other Deligates @ ICAR stall.webp",
        "date": "Unknown",
        "place": "Events",
        "event": "Imc",
        "name": "Icar Dg And Other Deligates @ Icar Stall"
    },
    {
        "src": "/assets/images/gallery/Events/IMC/Deligates @ ICAR stall.webp",
        "date": "Unknown",
        "place": "Events",
        "event": "Imc",
        "name": "Deligates @ Icar Stall"
    },
    {
        "src": "/assets/images/gallery/Events/IMC/ICAR DG @ ICAR stall.webp",
        "date": "Unknown",
        "place": "Events",
        "event": "Imc",
        "name": "Icar Dg @ Icar Stall"
    },
    {
        "src": "/assets/images/gallery/Events/IMC/IMC 2024 @ Bharatmandapam.webp",
        "date": "Unknown",
        "place": "Events",
        "event": "Imc",
        "name": "Imc 2024 @ Bharatmandapam"
    },
    {
        "src": "/assets/images/gallery/Events/ESTIC_2025/ESTIC@Bharatmandapam.webp",
        "date": "Unknown",
        "place": "Events",
        "event": "Estic 2025",
        "name": "Estic@Bharatmandapam"
    },
    {
        "src": "/assets/images/gallery/Events/AI Summit/Attending AI Summit.webp",
        "date": "Unknown",
        "place": "Events",
        "event": "Ai Summit",
        "name": "Attending Ai Summit"
    },
    {
        "src": "/assets/images/gallery/Events/ICRISAT/Training UN officials from Africa.webp",
        "date": "Unknown",
        "place": "Events",
        "event": "Icrisat",
        "name": "Training Un Officials From Africa"
    },
    {
        "src": "/assets/images/gallery/Events/ICRISAT/Training UN official from Africa on VRT technology.webp",
        "date": "Unknown",
        "place": "Events",
        "event": "Icrisat",
        "name": "Training Un Official From Africa On Vrt Technology"
    },
    {
        "src": "/assets/images/gallery/Events/NePPA_Showcase/NePPA Stall at Farmers Mela @ IARI 2022.webp",
        "date": "Unknown",
        "place": "Events",
        "event": "Neppa Showcase",
        "name": "Neppa Stall At Farmers Mela @ Iari 2022"
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
      
      let metaParts = [];
      if (coverPhoto.date !== 'Unknown') metaParts.push(coverPhoto.date);
      if (coverPhoto.place !== 'Unknown') metaParts.push(coverPhoto.place);
      
      let metaText = metaParts.join(' • ');
      if (metaText) {
        metaText += ` (${photos.length} photos)`;
      } else {
        metaText = `${photos.length} photos`;
      }

      card.innerHTML = `
        <img src="${coverPhoto.src}" alt="${albumName}" class="album-cover" loading="lazy">
        <div class="album-info">
          <h3 class="album-name">${albumName}</h3>
          <p class="album-meta">${metaText}</p>
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
      
      let metaParts = [];
      if (item.date !== 'Unknown') metaParts.push(item.date);
      if (item.place !== 'Unknown') metaParts.push(item.place);
      if (metaParts.length > 0) {
         let metaStr = metaParts.join(' - ');
         if (caption) {
             caption += ` (${metaStr})`;
         } else {
             caption = metaStr;
         }
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
