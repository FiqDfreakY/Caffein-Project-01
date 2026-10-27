// Path foto utama dan spesifik untuk tiap slide biji kopi & item katalog menu
const IMG_HERO = "assets/images/hero-roastery.jpg";
const IMG_SIG = "assets/images/espresso-bar.jpg";
const IMG_BREW = "assets/images/slow-bar-v60.jpg";

// Hopper Daily Calibration Data
const HOPPER_LINEUP = [
  {
    title: "House Blend: Caffein Klasik (70% Gayo / 30% Temanggung)",
    notes: "Tasting Notes: Dark Chocolate, Roasted Hazelnut, Sweet Caramel"
  },
  {
    title: "Single Origin Espresso: Flores Bajawa Natural",
    notes: "Tasting Notes: Red Berries, Milk Chocolate, Creamy Macadamia"
  },
  {
    title: "Seasonal Blend: Kintamani x Puntang Honey",
    notes: "Tasting Notes: Mandarin Orange, Brown Sugar, Floral Jasmine"
  }
];
let currentHopperIdx = 0;

function cycleHopperBean() {
  currentHopperIdx = (currentHopperIdx + 1) % HOPPER_LINEUP.length;
  const item = HOPPER_LINEUP[currentHopperIdx];
  document.getElementById('hero-hopper-title').textContent = item.title;
  document.getElementById('hero-hopper-notes').textContent = item.notes;
  showToast("Kalibrasi hopper ditampilkan: " + item.title);
}

// Company Pillar Details Data
const PILLAR_DATA = [
  {
    tag: "Pilar 01 • Transparansi Hulu ke Hilir",
    title: "Kontrak Panen Tahunan Bersama 6 Koperasi Tani Nusantara",
    desc: "Setiap kemasan biji kopi Caffein mencantumkan nama stasiun pencucian, varietas pohon, ketinggian tanam (mdpl), serta tanggal panen. Pendapatan langsung disalurkan untuk peremajaan kebun dan fasilitas penjemuran rumah kaca (solar dryer dome)."
  },
  {
    tag: "Pilar 02 • Rekayasa Termal Presisi",
    title: "Pencatatan Kurva Suhu Digital & Cupping Kualitas Setiap Batch",
    desc: "Mesin sangrai kami terhubung dengan sensor termokopel ganda untuk memantau laju kenaikan suhu (Rate of Rise) detik demi detik. Setiap batch wajib lulus uji cupping internal sebelum masuk ke meja bar."
  },
  {
    tag: "Pilar 03 • Kimia Air Spesialti",
    title: "Standar Mineral Air SCA untuk Ekstraksi Seimbang",
    desc: "Sebanyak 98% isi cangkir kopi adalah air. Kami merancang komposisi ion Magnesium untuk mengangkat karakter fruity dan Kalsium untuk menonjolkan tekstur creamy pada setiap seduhan."
  },
  {
    tag: "Pilar 04 • Arsitektur Produktif",
    title: "Tata Cahaya Hangat 3000K & Akustik Ruang Kerja Kolaboratif",
    desc: "Dirancang khusus bagi pekerja lepas, arsitek, peneliti, dan mahasiswa dengan meja kayu solid ergonomis, pencahayaan ramah mata, koneksi internet simetris 150 Mbps, dan ruang rapat kedap suara."
  }
];

function selectCompanyPillar(idx) {
  for (let i = 0; i < 4; i++) {
    const card = document.getElementById('pillar-card-' + i);
    if (i === idx) {
      card.classList.add('border-t-2', 'border-t-espresso-700');
    } else {
      card.classList.remove('border-t-2', 'border-t-espresso-700');
    }
  }
  const p = PILLAR_DATA[idx];
  document.getElementById('pillar-detail-tag').textContent = p.tag;
  document.getElementById('pillar-detail-title').textContent = p.title;
  document.getElementById('pillar-detail-desc').textContent = p.desc;
}

// ==========================================
// INTERACTIVE COFFEE BEAN PHOTO SLIDER DATA & LOGIC
// ==========================================
const CAFE_BEANS_SLIDES = [
  {
    id: 'b1',
    code: '01',
    shortName: 'Caffein Klasik',
    name: 'House Blend: Caffein Klasik (70% Aceh Gayo / 30% Temanggung)',
    role: 'Basis Utama Espresso Bar & Kopi Susu Signature',
    origin: 'Aceh Tengah & Temanggung',
    altitude: '1.450 – 1.650 mdpl',
    process: 'Wet-Hulled & Natural',
    roast: 'Medium to Dark (Agtron #48)',
    score: 'SCA Score 85.5',
    image: 'assets/images/bean-house-blend.jpg',
    acidity: 55,
    body: 92,
    sweetness: 88,
    notes: ['Dark Chocolate', 'Roasted Hazelnut', 'Butterscotch Caramel'],
    desc: 'Dirancang khusus sebagai tulang punggung mesin espresso utama kami. Perpaduan 70% Arabika Aceh Gayo memberikan struktur body yang tebal dan rempah hangat, sedangkan 30% Arabika Natural Temanggung menyumbangkan aroma karamel serta kacang panggang yang tetap tegas saat dipadukan dengan susu segar maupun susu oat.'
  },
  {
    id: 'b1',
    code: '02',
    shortName: 'Aceh Gayo',
    name: 'Single Origin: Aceh Gayo — Atu Lintang',
    role: 'Pilihan Favorit Tubruk Spesialti, Long Black & V60 Bold',
    origin: 'Atu Lintang, Aceh Tengah',
    altitude: '1.550 – 1.700 mdpl',
    process: 'Giling Basah (Wet-Hulled)',
    roast: 'Medium Roast (Agtron #56)',
    score: 'SCA Score 86.75',
    image: 'assets/images/bean-aceh-gayo.jpg',
    acidity: 60,
    body: 90,
    sweetness: 82,
    notes: ['Dark Cocoa', 'Cedar Spice', 'Sweet Molasses'],
    desc: 'Ditanam di tanah vulkanik basah dataran tinggi Atu Lintang dan diolah menggunakan metode tradisional Giling Basah. Menghasilkan tekstur cangkir yang sangat kental (syrupy body), tingkat keasaman rendah yang sangat nyaman di lambung, serta jejak rasa cokelat hitam dan rempah manis yang panjang.'
  },
  {
    id: 'b2',
    code: '03',
    shortName: 'Bali Kintamani',
    name: 'Single Origin: Bali Kintamani — Ulian',
    role: 'Andalan Japanese Iced Pour Over & Filter Pagi Hari',
    origin: 'Lereng Gunung Batur, Bangli',
    altitude: '1.300 – 1.500 mdpl',
    process: 'Full Washed (Fermentasi 24 Jam)',
    roast: 'Light to Medium (Agtron #70)',
    score: 'SCA Score 87.25',
    image: 'assets/images/bean-bali-kintamani.jpg',
    acidity: 90,
    body: 65,
    sweetness: 85,
    notes: ['Mandarin Orange', 'Green Apple', 'Cane Sugar'],
    desc: 'Dibudidayakan oleh koperasi petani Subak Abian dengan sistem tumpangsari bersama kebun jeruk keprok. Proses pencucian penuh (Full Washed) menggunakan mata air pegunungan menghasilkan kejernihan rasa luar biasa dengan keasaman sitrus segar dan akhir rasa manis tebu yang bersih.'
  },
  {
    id: 'b3',
    code: '04',
    shortName: 'Flores Bajawa',
    name: 'Single Origin: Flores Bajawa — Ngada',
    role: 'Seasonal Single Origin Espresso & Manual Brew V60',
    origin: 'Kaki Gunung Inerie, Ngada NTT',
    altitude: '1.400 – 1.600 mdpl',
    process: 'Natural Dry Process (26 Hari)',
    roast: 'Medium Filter (Agtron #62)',
    score: 'SCA Score 88.0',
    image: 'assets/images/bean-flores-bajawa.jpg',
    acidity: 76,
    body: 85,
    sweetness: 94,
    notes: ['Ripe Strawberry', 'Milk Chocolate', 'Roasted Macadamia'],
    desc: 'Buah ceri merah matang petik pilih dijemur secara utuh di atas para-para bambu selama hampir empat minggu. Gula alami daging buah meresap sempurna ke dalam biji kopi, menciptakan ledakan aroma buah beri matang yang manis diikuti tekstur cokelat susu yang lembut.'
  },
  {
    id: 'b4',
    code: '05',
    shortName: 'Toraja Sapan',
    name: 'Single Origin: Toraja Sapan — Minanga',
    role: 'Eksklusif Meja Slow Bar (Kalita Wave & Syphon)',
    origin: 'Toraja Utara, Sulawesi Selatan',
    altitude: '1.650 – 1.850 mdpl',
    process: 'Yellow Honey Process',
    roast: 'Light to Medium (Agtron #68)',
    score: 'SCA Score 87.5',
    image: 'assets/images/bean-toraja-sapan.jpg',
    acidity: 82,
    body: 80,
    sweetness: 89,
    notes: ['Cinnamon Bark', 'Pink Grapefruit', 'Sweet Butterscotch'],
    desc: 'Salah satu kebun kopi dengan elevasi tertinggi di Sulawesi. Melalui proses Honey yang mempertahankan sebagian lendir manis buah saat penjemuran, kopi ini menghadirkan harmoni langka antara keasaman jeruk bali merah yang cerah, aroma kayu manis, dan manis butterscotch.'
  }
];

let currentBeanSlide = 0;
let beanAutoSlideActive = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let beanHoverPaused = false;
let beanSlideInterval = null;
let beanDragged = false;

function initBeanSlider() {
  const stage = document.getElementById('bean-stage');
  if (!stage) return;
  const n = CAFE_BEANS_SLIDES.length;
  stage.innerHTML = CAFE_BEANS_SLIDES.map((s, i) => `
    <article class="bean-card" data-i="${i}" aria-label="${s.shortName}">
      ${s.image ? `<img src="${s.image}" alt="${s.name}" style="object-position:${['50% 50%','30% 50%','70% 50%','40% 60%','60% 40%'][i % 5]}" draggable="false" />` : ''}
      <div class="bean-card-shade"></div>
      <span class="bean-card-tag">#${s.origin}</span>
      <div class="bean-card-body">
        <h3>${s.shortName}</h3>
        <span class="bean-card-rule"></span>
        <p class="bean-card-role">${s.role}</p>
        <p class="bean-card-meta">${s.roast.split(' (')[0]} &bull; ${s.altitude}</p>
      </div>
    </article>`).join('');
  document.getElementById('bean-dots').innerHTML = CAFE_BEANS_SLIDES.map((s, i) =>
    `<button type="button" class="bean-dot" data-i="${i}" aria-label="Slide ${i + 1}: ${s.shortName}"></button>`).join('');

  let sx = null;
  stage.addEventListener('pointerdown', e => { sx = e.clientX; beanDragged = false; });
  stage.addEventListener('pointerup', e => {
    if (sx === null) return;
    const dx = e.clientX - sx; sx = null;
    if (Math.abs(dx) > 40) { beanDragged = true; dx < 0 ? nextBeanSlide() : prevBeanSlide(); }
  });
  stage.addEventListener('click', e => {
    if (beanDragged) return;
    const c = e.target.closest('.bean-card');
    if (c) goToBeanSlide(+c.dataset.i);
  });
  stage.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') nextBeanSlide();
    if (e.key === 'ArrowLeft') prevBeanSlide();
  });
  document.getElementById('bean-dots').addEventListener('click', e => {
    const d = e.target.closest('.bean-dot');
    if (d) goToBeanSlide(+d.dataset.i);
  });
  updateBeanSliderUI();
  startBeanAutoSlideTimer();
}

function updateBeanSliderUI() {
  const n = CAFE_BEANS_SLIDES.length, half = Math.floor(n / 2);
  document.querySelectorAll('#bean-stage .bean-card').forEach((el, i) => {
    const d = ((i - currentBeanSlide + n + half) % n) - half;
    const abs = Math.abs(d);
    el.style.setProperty('--d', d);
    el.style.setProperty('--abs', abs);
    el.style.zIndex = 10 - abs;
    el.style.opacity = abs === 0 ? 1 : abs === 1 ? 0.9 : 0.6;
    el.classList.toggle('is-active', abs === 0);
  });
  document.querySelectorAll('#bean-dots .bean-dot').forEach((el, i) =>
    el.classList.toggle('active', i === currentBeanSlide));
  const s = CAFE_BEANS_SLIDES[currentBeanSlide];
  const info = document.getElementById('bean-info');
  if (info) info.innerHTML = `
    <div class="border-y border-[#c8b6a2]/80 dark:border-[#332721] py-3.5 px-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs">
      <div class="min-w-0">
        <p class="font-display font-bold text-sm text-stone-900 dark:text-stone-100 leading-snug">${s.name}</p>
        <p class="text-stone-600 dark:text-stone-400 mt-1">${s.notes.join(' &bull; ')} &nbsp;|&nbsp; <span class="font-mono font-semibold text-espresso-700 dark:text-espresso-400">${s.score}</span></p>
      </div>
      <div class="flex items-center shrink-0 pt-1 sm:pt-0">
        <button onclick="buyOriginBean('${s.id}')" class="line-action-link primary-line"><span>Pesan Biji 200g</span></button>
        <span class="w-px h-4 mx-4 shrink-0 bg-[#c8b6a2] dark:bg-[#3d2e27]" aria-hidden="true"></span>
        <button onclick="switchPage('biji'); selectOrigin('${s.id}');" class="line-action-link"><span>Spesifikasi</span></button>
      </div>
    </div>`;
}

function goToBeanSlide(idx) {
  currentBeanSlide = (idx + CAFE_BEANS_SLIDES.length) % CAFE_BEANS_SLIDES.length;
  updateBeanSliderUI();
}
function nextBeanSlide() { goToBeanSlide(currentBeanSlide + 1); }
function prevBeanSlide() { goToBeanSlide(currentBeanSlide - 1); }
function pauseBeanHover(paused) { beanHoverPaused = paused; }

function startBeanAutoSlideTimer() {
  if (beanSlideInterval) clearInterval(beanSlideInterval);
  beanSlideInterval = setInterval(() => {
    if (beanAutoSlideActive && !beanHoverPaused && !document.hidden) nextBeanSlide();
  }, 5000);
}

// Interactive Post-Harvest Process Data
const PROCESS_DATA = {
  washed: {
    badge: "Fermentasi Air 12–36 Jam",
    title: "Full Washed (Proses Basah Terfermentasi)",
    desc: "Kulit buah dan lendir (mucilage) dibersihkan sepenuhnya melalui fermentasi air terukur sebelum dijemur. Menghasilkan kejernihan rasa (clarity) paling tinggi, keasaman sitrus yang bersih, serta aftertaste lembut menyerupai teh.",
    acid: 88,
    body: 55,
    sweet: 75,
    rec: "Bali Kintamani (Citrus, Green Apple, Brown Sugar)"
  },
  natural: {
    badge: "Penjemuran Buah Utuh 21–30 Hari",
    title: "Natural / Dry Process (Fermentasi Buah Utuh)",
    desc: "Biji kopi dijemur bersama kulit dan daging buah ceri secara utuh di atas para-para. Gula alami buah meresap ke dalam biji, menciptakan ledakan aroma buah beri matang, tekstur kental, dan rasa manis yang intens.",
    acid: 70,
    body: 88,
    sweet: 94,
    rec: "Flores Bajawa Natural (Berry Hint, Dark Chocolate, Nutty)"
  },
  honey: {
    badge: "Lendir Buah Dipertahankan 50–80%",
    title: "Honey Process (Pulped Natural)",
    desc: "Kulit luar buah dikupas tetapi sebagian lendir manis (mucilage) dibiarkan menempel selama penjemuran. Menawarkan jembatan harmonis antara kebersihan rasa Washed dan tekstur manis Natural.",
    acid: 78,
    body: 76,
    sweet: 90,
    rec: "Toraja Sapan (Spices, Caramel, Grapefruit, Clean Finish)"
  },
  giling: {
    badge: "Tradisi Khas Sumatera (Kadar Air 30–35%)",
    title: "Giling Basah (Wet-Hulled Nusantara)",
    desc: "Metode ikonik khas Indonesia di mana kulit tanduk dikupas saat biji masih setengah basah. Menghasilkan body yang sangat tebal, keasaman rendah yang nyaman di lambung, serta aroma rempah dan cokelat pekat.",
    acid: 45,
    body: 96,
    sweet: 78,
    rec: "Aceh Gayo Atu Lintang (Dark Cocoa, Cedar Spice, Molasses)"
  }
};

function selectCoffeeProcess(key) {
  const data = PROCESS_DATA[key];
  if (!data) return;
  document.querySelectorAll('.proc-tab-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  const activeBtn = document.getElementById('proc-btn-' + key);
  if (activeBtn) {
    activeBtn.classList.add('active');
  }
  document.getElementById('proc-ferment-badge').textContent = data.badge;
  document.getElementById('proc-title').textContent = data.title;
  document.getElementById('proc-desc').textContent = data.desc;
  document.getElementById('proc-val-acid').textContent = data.acid + "%";
  document.getElementById('proc-bar-acid').style.width = data.acid + "%";
  document.getElementById('proc-val-body').textContent = data.body + "%";
  document.getElementById('proc-bar-body').style.width = data.body + "%";
  document.getElementById('proc-val-sweet').textContent = data.sweet + "%";
  document.getElementById('proc-bar-sweet').style.width = data.sweet + "%";
  document.getElementById('proc-rec-origin').textContent = data.rec;
}

// Interactive Roast Level Data
const ROAST_DATA = {
  light: {
    title: "Light to Medium (Filter Roast)",
    agtron: "Agtron #72",
    desc: "Dihentikan tepat 45–60 detik setelah First Crack selesai. Mempertahankan senyawa organik buah dan aroma floral tanpa rasa gosong. Sangat ideal untuk seduhan manual tanpa tambahan susu.",
    dtr: "13.5% - 15.0%",
    methods: "V60, Kalita, Chemex"
  },
  medium: {
    title: "Medium Roast (Omni-Roast Seimbang)",
    agtron: "Agtron #58",
    desc: "Karamelisasi gula mencapai titik puncak sehingga keasaman sitrus melunak menjadi manis karamel dan cokelat susu. Sangat fleksibel untuk seduhan manual maupun espresso modern.",
    dtr: "16.0% - 18.5%",
    methods: "AeroPress, Espresso, Tubruk"
  },
  dark: {
    title: "Medium to Dark (Espresso & Milk Base)",
    agtron: "Agtron #46",
    desc: "Disangrai mendekati awal Second Crack untuk menghasilkan tekstur body yang tebal, crema pekat, dan karakter dark chocolate yang tetap menonjol saat dipadukan dengan susu segar atau oat.",
    dtr: "19.5% - 22.0%",
    methods: "Mesin Espresso, French Press, Kopi Susu"
  }
};

function selectRoastProfile(level) {
  const r = ROAST_DATA[level];
  if (!r) return;
  ['light', 'medium', 'dark'].forEach(k => {
    const btn = document.getElementById('roast-btn-' + k);
    if (k === level) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  document.getElementById('roast-stage-title').textContent = r.title;
  document.getElementById('roast-agtron').textContent = r.agtron;
  document.getElementById('roast-stage-desc').textContent = r.desc;
  document.getElementById('roast-dtr').textContent = r.dtr;
  document.getElementById('roast-methods').textContent = r.methods;
}

// Menu Items Dataset
const MENU_ITEMS = [
  {
    id: 'm1',
    name: 'Es Kopi Caffein Aren',
    category: 'signature',
    catLabel: 'Signature',
    price: 28000,
    cal: 165,
    popular: 99,
    image: 'assets/images/menu-kopi-aren.jpg',
    notes: ['Organic Palm Sugar', 'Creamy', 'Caramel Finish'],
    desc: 'Double ristretto dari biji House Blend Caffein berpadu harmonis dengan susu segar dingin dan gula aren organik murni dari petani Lebak.'
  },
  {
    id: 'm2',
    name: 'Salted Caramel Cloud Oat Latte',
    category: 'signature',
    catLabel: 'Signature',
    price: 36000,
    cal: 180,
    popular: 95,
    image: 'assets/images/menu-oat-latte.jpg',
    notes: ['Oat Milk', 'Sea Salt Cream', 'Buttery'],
    desc: 'Espresso single origin Flores di atas susu gandum (oat milk) pilihan dengan lapisan foam krim garam laut yang gurih dan lembut.'
  },
  {
    id: 'm3',
    name: 'V60 Manual Brew — Flores Bajawa',
    category: 'manual',
    catLabel: 'Manual Brew',
    price: 32000,
    cal: 5,
    popular: 92,
    image: 'assets/images/menu-v60-flores.jpg',
    notes: ['Dark Berries', 'Cocoa', 'Clean Finish'],
    desc: 'Seduhan manual presisi menggunakan dripper Hario V60 dengan rasio 1:15 pada suhu 92°C untuk menonjolkan karakter manis buah alami.'
  },
  {
    id: 'm4',
    name: 'Japanese Iced Pour Over — Kintamani',
    category: 'manual',
    catLabel: 'Manual Brew',
    price: 34000,
    cal: 5,
    popular: 89,
    image: 'assets/images/menu-japanese-iced.jpg',
    notes: ['Mandarin Citrus', 'Brown Sugar', 'Refreshing'],
    desc: 'Ekstraksi panas langsung di atas es batu kristal untuk mengunci aroma floral dan kesegaran jeruk keprok khas dataran tinggi Bali Kintamani.'
  },
  {
    id: 'm5',
    name: 'Hot Flat White 6oz',
    category: 'espresso',
    catLabel: 'Espresso Base',
    price: 30000,
    cal: 110,
    popular: 87,
    image: 'assets/images/menu-flat-white.jpg',
    notes: ['Double Ristretto', 'Velvety Microfoam', 'Nutty'],
    desc: 'Perpaduan seimbang antara dua shot ristretto pekat dengan lapisan microfoam susu tipis bertekstur halus dan manis alami.'
  },
  {
    id: 'm6',
    name: 'Double Iced Americano',
    category: 'espresso',
    catLabel: 'Espresso Base',
    price: 25000,
    cal: 10,
    popular: 85,
    image: 'assets/images/menu-iced-americano.jpg',
    notes: ['Bold', 'Dark Chocolate', 'Zero Sugar'],
    desc: 'Dua shot espresso House Blend Caffein yang diekstraksi di atas air mineral terkalibrasi dan es batu kristal murni yang menyegarkan.'
  },
  {
    id: 'm7',
    name: 'Uji Matcha Ceremonial Latte',
    category: 'noncoffee',
    catLabel: 'Non-Kopi',
    price: 35000,
    cal: 150,
    popular: 91,
    image: 'assets/images/menu-matcha-latte.jpg',
    notes: ['First Harvest Uji', 'Umami', 'Smooth Milk'],
    desc: 'Bubuk teh hijau ceremonial grade dari Uji, Kyoto yang dikocok menggunakan chasen bambu tradisional dan disajikan bersama susu segar.'
  },
  {
    id: 'm8',
    name: 'Artisan Dark Chocolate 72% Sulawesi',
    category: 'noncoffee',
    catLabel: 'Non-Kopi',
    price: 33000,
    cal: 195,
    popular: 84,
    image: 'assets/images/menu-dark-chocolate.jpg',
    notes: ['Single Origin Cacao', 'Bittersweet', 'Rich'],
    desc: 'Cokelat murni 72% asal perkebunan Sulawesi Tengah yang dilelehkan perlahan dengan susu hangat atau dingin untuk tekstur kental.'
  },
  {
    id: 'm9',
    name: 'French Butter Croissant',
    category: 'pastry',
    catLabel: 'Pastry & Kudapan',
    price: 26000,
    cal: 260,
    popular: 94,
    image: 'assets/images/menu-croissant.jpg',
    notes: ['Elle & Vire Butter', 'Flaky Layers', 'Fresh Baked'],
    desc: 'Croissant klasik berlapis renyah di bagian luar dan berongga lembut di bagian dalam, dipanggang segar setiap pagi di dapur kami.'
  }
];

// Nusantara Beans Dataset
const ORIGINS_DATA = [
  {
    id: 'b1',
    name: 'Aceh Gayo — Atu Lintang',
    region: 'Aceh Tengah, Sumatera',
    altitude: '1.550 – 1.700 mdpl',
    process: 'Giling Basah (Wet-Hulled)',
    roast: 'Medium to Dark',
    variety: 'Timtim, Bourbon, Ateng Super',
    price200g: 95000,
    acidity: 60,
    body: 90,
    sweetness: 80,
    notes: ['Dark Chocolate', 'Cedar Spice', 'Caramel Molasses'],
    story: 'Berasal dari dataran tinggi Atu Lintang, biji ini diproses menggunakan metode tradisional Giling Basah yang menghasilkan tekstur kekentalan (body) tebal, keasaman rendah yang ramah di lambung, serta aroma rempah hangat yang berpadu dengan cokelat hitam.'
  },
  {
    id: 'b2',
    name: 'Bali Kintamani — Ulian',
    region: 'Bangli, Bali',
    altitude: '1.300 – 1.500 mdpl',
    process: 'Full Washed',
    roast: 'Light to Medium',
    variety: 'Kopyol, Lini S-795',
    price200g: 98000,
    acidity: 90,
    body: 65,
    sweetness: 85,
    notes: ['Mandarin Orange', 'Brown Sugar', 'Green Apple'],
    story: 'Ditanam berdampingan dengan kebun jeruk oleh organisasi tradisional Subak Abian di lereng Gunung Batur. Proses Full Washed menggunakan air pegunungan menghasilkan rasa yang sangat bersih dengan keasaman sitrus segar.'
  },
  {
    id: 'b3',
    name: 'Flores Bajawa — Ngada',
    region: 'Ngada, Nusa Tenggara Timur',
    altitude: '1.400 – 1.600 mdpl',
    process: 'Natural Process',
    roast: 'Medium Roast',
    variety: 'Kartika, Typica',
    price200g: 105000,
    acidity: 75,
    body: 85,
    sweetness: 92,
    notes: ['Dried Berry', 'Milk Chocolate', 'Roasted Hazelnut'],
    story: 'Tumbuh di tanah vulkanik subur kaki Gunung Inerie. Penjemuran buah ceri utuh (Natural Process) memberikan tingkat kemanisan buah beri matang yang intens dengan akhir rasa cokelat susu dan kacang panggang yang panjang.'
  },
  {
    id: 'b4',
    name: 'Toraja Sapan — Minanga',
    region: 'Toraja Utara, Sulawesi Selatan',
    altitude: '1.600 – 1.850 mdpl',
    process: 'Honey Process',
    roast: 'Light to Medium',
    variety: 'S-795, Typica',
    price200g: 110000,
    acidity: 80,
    body: 80,
    sweetness: 88,
    notes: ['Cinnamon', 'Grapefruit', 'Sweet Butterscotch'],
    story: 'Salah satu kopi dataran tertinggi di Sulawesi. Proses Honey mempertahankan sebagian lendir gula buah selama penjemuran sehingga menciptakan keseimbangan kompleks antara rempah manis, jeruk bali merah, dan karamel.'
  }
];

// Reviews Dataset
let REVIEWS_DATA = [
  {
    name: 'Arif Wicaksono',
    role: 'Principal Architect',
    ordered: 'V60 Flores Bajawa & Croissant',
    text: 'Tempat paling kondusif di Semarang untuk kerja fokus maupun bertemu klien. Konsistensi seduhan manualnya sangat terjaga, suhu sajiannya pas, dan baristanya sangat komunikatif menjelaskan asal biji kopi.'
  },
  {
    name: 'Nadia Kusuma',
    role: 'Product Designer',
    ordered: 'Salted Caramel Cloud Oat Latte',
    text: 'Suka sekali dengan tata ruangnya yang rapi, tenang, dan tidak berisik. Koneksi internetnya cepat, stopkontak tersedia di setiap meja, dan Es Kopi Caffein Aren-nya punya rasa kopi yang tetap tegas.'
  },
  {
    name: 'Dimas Prayogo',
    role: 'Home Brewer & Penikmat Kopi',
    ordered: 'Biji Kopi Bali Kintamani 200g',
    text: 'Selalu beli biji sangrai di Caffein untuk seduh V60 di rumah. Tanggal sangrainya selalu segar di bawah 10 hari dan panduan kalkulator rasio seduhnya sangat membantu.'
  }
];

// FAQ Dataset
const FAQ_DATA = [
  {
    q: 'Apakah biji kopi yang dijual dijamin baru disangrai (freshly roasted)?',
    a: 'Ya. Seluruh biji kopi dalam katalog kami disangrai di mesin micro-roaster internal kami setiap hari Selasa dan Jumat. Kami hanya mengirimkan biji kopi dengan usia sangrai 5–14 hari (masa optimal degassing) dan menyediakan layanan giling gratis sesuai alat seduh Anda.'
  },
  {
    q: 'Apakah ada biaya minimum pemesanan untuk menggunakan meja kerja atau Wi-Fi?',
    a: 'Untuk area Indoor Work Desk, Slow Bar, dan Semi-Outdoor Garden tidak dikenakan biaya reservasi maupun batas waktu selama memesan menu. Khusus ruangan VIP Private Meeting Pod (kapasitas 8 orang), berlaku minimum pemesanan makanan dan minuman sebesar Rp 250.000 untuk durasi 3 jam.'
  },
  {
    q: 'Apakah tersedia pilihan susu nabati (plant-based) untuk seluruh menu kopi susu?',
    a: 'Tersedia. Anda dapat mengganti susu sapi segar (Fresh Milk) dengan Oat Milk atau Soy Milk pada seluruh menu berbasis espresso maupun melalui halaman Simulator Racik Kopi.'
  },
  {
    q: 'Bagaimana cara kerja kerjasama suplai biji kopi (B2B Wholesale) untuk kedai atau kantor?',
    a: 'Kami menyediakan paket sampel kurasi biji kopi (Sample Box 4x100g) beserta konsultasi kalibrasi mesin espresso dan pelatihan barista dasar untuk mitra kedai kopi, restoran, maupun kebutuhan pantry kantor.'
  }
];

// Global State
let currentCategory = 'all';
let onlyFavorites = false;
let favorites = ['m1', 'm3'];
let cart = [
  {
    id: 'm1',
    name: 'Es Kopi Caffein Aren',
    price: 28000,
    qty: 1,
    note: 'Regular • Less Sweet • Normal Ice'
  }
];
let promoApplied = false;
let orderType = 'Dine-In';
let activeModalItem = null;
let selectedOriginId = 'b1';

// Custom Drink Builder State
let customDrink = {
  temp: 'Iced',
  bean: 'House Blend Caffein',
  beanPrice: 0,
  shots: 2,
  milk: 'Fresh Milk',
  milkPrice: 0,
  milkCal: 110,
  syrupName: 'Gula Aren Organik',
  syrupPrice: 0,
  syrupCal: 45,
  sweetness: 100,
  toppings: []
};

// Brew Calculator & Live Timer State
let currentBrewMethod = 'v60';
let brewTimerInterval = null;
let brewSecondsElapsed = 0;
let brewTimerRunning = false;

// ==========================================
// MULTI-PAGE NAVIGATION CONTROLLER
// ==========================================
function switchPage(pageId) {
  document.querySelectorAll('.page-section').forEach(sec => {
    sec.classList.remove('active');
  });
  const target = document.getElementById('page-' + pageId);
  if (target) {
    target.classList.add('active');
  }

  document.querySelectorAll('.nav-open-link').forEach(btn => {
    if (btn.getAttribute('data-page') === pageId) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  document.querySelectorAll('.mobile-nav-btn').forEach(btn => {
    if (btn.getAttribute('data-page') === pageId) {
      btn.classList.add('active', 'text-espresso-700', 'font-bold');
    } else {
      btn.classList.remove('active', 'text-espresso-700', 'font-bold');
    }
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleMobileMenu() {
  const m = document.getElementById('mobile-menu');
  m.classList.toggle('hidden');
}

function toggleTheme() {
  document.documentElement.classList.toggle('dark');
}

// ==========================================
// MENU CATALOG FUNCTIONS
// ==========================================
function setCategory(cat) {
  currentCategory = cat;
  onlyFavorites = false;
  document.querySelectorAll('.cat-btn').forEach(btn => {
    if (btn.getAttribute('data-cat') === cat) {
      btn.className = 'cat-btn cat-line-tab active';
    } else {
      btn.className = 'cat-btn cat-line-tab';
    }
  });
  renderMenu();
}

function filterMenuByFavorites() {
  onlyFavorites = !onlyFavorites;
  renderMenu();
  if (onlyFavorites) {
    showToast('Menampilkan menu favorit tersimpan');
  }
}

function resetMenuFilters() {
  document.getElementById('menu-search').value = '';
  onlyFavorites = false;
  setCategory('all');
}

function toggleFavorite(id) {
  const idx = favorites.indexOf(id);
  if (idx > -1) {
    favorites.splice(idx, 1);
  } else {
    favorites.push(id);
  }
  document.getElementById('fav-count-badge').textContent = favorites.length;
  renderMenu();
}

function renderMenu() {
  const searchVal = (document.getElementById('menu-search')?.value || '').toLowerCase();
  const sortVal = document.getElementById('menu-sort')?.value || 'popular';
  const grid = document.getElementById('menu-grid');
  const empty = document.getElementById('menu-empty');

  let filtered = MENU_ITEMS.filter(item => {
    const matchCat = currentCategory === 'all' || item.category === currentCategory;
    const matchFav = !onlyFavorites || favorites.includes(item.id);
    const matchSearch = item.name.toLowerCase().includes(searchVal) ||
                        item.desc.toLowerCase().includes(searchVal) ||
                        item.notes.some(n => n.toLowerCase().includes(searchVal));
    return matchCat && matchFav && matchSearch;
  });

  if (sortVal === 'price-asc') filtered.sort((a, b) => a.price - b.price);
  else if (sortVal === 'price-desc') filtered.sort((a, b) => b.price - a.price);
  else if (sortVal === 'cal-asc') filtered.sort((a, b) => a.cal - b.cal);
  else filtered.sort((a, b) => b.popular - a.popular);

  if (filtered.length === 0) {
    grid.innerHTML = '';
    empty.classList.remove('hidden');
    return;
  }
  empty.classList.add('hidden');

  grid.innerHTML = filtered.map(item => {
    const isFav = favorites.includes(item.id);
    return `
      <article class="sharp-box sharp-box-hover flex flex-col justify-between">
        <div>
          <div class="relative aspect-[16/10] bg-stone-200 dark:bg-stone-800 border-b border-[#dfd3c5]/80 dark:border-[#332721] img-zoom-wrap">
            ${item.image ? `<img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover" />` : ''}
            <span class="absolute top-3 left-3 px-2.5 py-1 bg-stone-900/85 backdrop-blur-xs text-white text-[10px] font-bold uppercase tracking-wider">
              ${item.catLabel}
            </span>
            <button onclick="toggleFavorite('${item.id}')" aria-label="Simpan ke Favorit" class="btn-click-anim absolute top-3 right-3 p-2 bg-white/85 dark:bg-stone-900/85 backdrop-blur-xs text-stone-700 dark:text-stone-200 hover:text-espresso-600">
              <svg class="w-3.5 h-3.5 ${isFav ? 'fill-espresso-600 text-espresso-600' : ''} shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>
            </button>
          </div>
          <div class="p-5">
            <div class="flex items-start justify-between gap-2 mb-2">
              <h3 class="font-display font-bold text-base text-stone-900 dark:text-stone-100 leading-snug">${item.name}</h3>
              <span class="font-mono text-[11px] text-stone-500 dark:text-stone-400 shrink-0">${item.cal} kkal</span>
            </div>
            <p class="text-xs text-stone-600 dark:text-stone-400 leading-relaxed text-justify mb-4">${item.desc}</p>
            <div class="flex flex-wrap items-center gap-2 text-[10px] font-semibold uppercase tracking-wider text-espresso-700 dark:text-espresso-400 pt-2 border-t border-[#dfd3c5]/60 dark:border-[#332721]">
              ${item.notes.map(n => `<span>${n}</span>`).join('<span class="text-stone-300 dark:text-stone-600">&bull;</span>')}
            </div>
          </div>
        </div>
        <div class="px-5 py-4 border-t border-[#dfd3c5]/80 dark:border-[#332721] flex items-center justify-between">
          <span class="font-display font-extrabold text-base text-stone-900 dark:text-stone-100">Rp ${item.price.toLocaleString('id-ID')}</span>
          <button onclick="openItemModal('${item.id}')" class="line-action-link primary-line">
            <span>Pilih & Kustom</span>
            <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
          </button>
        </div>
      </article>
    `;
  }).join('');

  lucide.createIcons();
}

// Item Modal Functions
function openItemModal(itemId) {
  const item = MENU_ITEMS.find(m => m.id === itemId);
  if (!item) return;
  activeModalItem = item;
  document.getElementById('modal-item-cat').textContent = item.catLabel;
  document.getElementById('modal-item-name').textContent = item.name;
  document.getElementById('modal-item-desc').textContent = item.desc;

  const drinkOpts = document.getElementById('modal-drink-options');
  if (item.category === 'pastry') {
    drinkOpts.classList.add('hidden');
  } else {
    drinkOpts.classList.remove('hidden');
  }
  updateModalPrice();
  const modal = document.getElementById('item-modal');
  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closeItemModal() {
  const modal = document.getElementById('item-modal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

function updateModalPrice() {
  if (!activeModalItem) return;
  let extra = 0;
  if (activeModalItem.category !== 'pastry') {
    const sizeChecked = document.querySelector('input[name="modal-size"]:checked');
    if (sizeChecked) {
      extra = parseInt(sizeChecked.value.split('|')[1], 10) || 0;
    }
  }
  const finalPrice = activeModalItem.price + extra;
  document.getElementById('modal-item-price').textContent = 'Rp ' + finalPrice.toLocaleString('id-ID');
}

function confirmModalAddToCart() {
  if (!activeModalItem) return;
  let extra = 0;
  let note = 'Disajikan Hangat';
  if (activeModalItem.category !== 'pastry') {
    const sizeChecked = document.querySelector('input[name="modal-size"]:checked').value.split('|');
    extra = parseInt(sizeChecked[1], 10) || 0;
    const sugar = document.getElementById('modal-sugar').value;
    const ice = document.getElementById('modal-ice').value;
    note = `${sizeChecked[0]} • ${sugar} • ${ice}`;
  }
  addToCart({
    id: activeModalItem.id + '-' + Date.now(),
    name: activeModalItem.name,
    price: activeModalItem.price + extra,
    qty: 1,
    note
  });
  closeItemModal();
}

// ==========================================
// CUSTOM DRINK BUILDER FUNCTIONS
// ==========================================
function updateCustomDrink(key, val, priceDelta = 0, calDelta = 0) {
  if (key === 'temp') {
    customDrink.temp = val;
    highlightBuilderGroup('cb-temp-group', val);
  } else if (key === 'bean') {
    customDrink.bean = val;
    customDrink.beanPrice = priceDelta;
    highlightBuilderGroup('cb-bean-group', val);
  } else if (key === 'shots') {
    customDrink.shots = val;
    highlightBuilderGroup('cb-shots-group', String(val));
  } else if (key === 'milk') {
    customDrink.milk = val;
    customDrink.milkPrice = priceDelta;
    customDrink.milkCal = calDelta;
    highlightBuilderGroup('cb-milk-group', val);
  }
  updateCustomDrinkFromSelect();
}

function highlightBuilderGroup(groupId, activeVal) {
  const container = document.getElementById(groupId);
  if (!container) return;
  container.querySelectorAll('.cb-opt-btn').forEach(btn => {
    if (btn.getAttribute('data-val') === activeVal) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

function updateCustomDrinkFromSelect() {
  const syrupParts = document.getElementById('cb-syrup').value.split('|');
  customDrink.syrupName = syrupParts[0];
  customDrink.syrupPrice = parseInt(syrupParts[1], 10);
  customDrink.syrupCal = parseInt(syrupParts[2], 10);

  const sweetVal = parseInt(document.getElementById('cb-sweetness').value, 10);
  customDrink.sweetness = sweetVal;
  document.getElementById('cb-sweet-val').textContent = sweetVal === 0 ? 'Tanpa Manis (0%)' : `${sweetVal}% Manis`;

  const toppings = [];
  let toppingPrice = 0;
  let toppingCal = 0;
  document.querySelectorAll('.cb-topping:checked').forEach(cb => {
    const parts = cb.value.split('|');
    toppings.push(parts[0]);
    toppingPrice += parseInt(parts[1], 10);
    toppingCal += parseInt(parts[2], 10);
  });
  customDrink.toppings = toppings;

  const basePrice = 26000;
  const shotExtra = customDrink.shots === 3 ? 6000 : 0;
  const totalPrice = basePrice + customDrink.beanPrice + shotExtra + customDrink.milkPrice + customDrink.syrupPrice + toppingPrice;

  const caffeine = customDrink.shots * 85;
  const syrupAdjustedCal = Math.round(customDrink.syrupCal * (customDrink.sweetness / 100));
  const totalCal = customDrink.milkCal + syrupAdjustedCal + toppingCal + (customDrink.shots * 5);

  document.getElementById('cb-shot-label').textContent = `${customDrink.shots} Shot (${caffeine} mg Kafein)`;
  document.getElementById('cb-preview-title').textContent = `${customDrink.temp} ${customDrink.shots}x Shot — ${customDrink.syrupName}`;
  document.getElementById('cb-preview-temp').textContent = `${customDrink.temp.toUpperCase()} 14oz`;
  document.getElementById('cb-stat-caffeine').textContent = `${caffeine} mg`;
  document.getElementById('cb-stat-cal').textContent = `${totalCal} kkal`;
  document.getElementById('cb-stat-bean').textContent = customDrink.bean.replace('Single Origin ', 'SO ');
  document.getElementById('cb-total-price').textContent = 'Rp ' + totalPrice.toLocaleString('id-ID');

  const syrupH = customDrink.syrupName === 'Tanpa Pemanis' || customDrink.sweetness === 0 ? 0 : 15;
  const espH = customDrink.shots * 14;
  const topH = toppings.length > 0 ? 15 : 0;
  const milkH = customDrink.milk.includes('Tanpa Susu') ? 0 : Math.max(20, 90 - syrupH - espH - topH);

  document.getElementById('cup-layer-syrup').style.height = syrupH + '%';
  document.getElementById('cup-layer-espresso').style.height = espH + '%';
  document.getElementById('cup-layer-espresso').textContent = `${customDrink.shots}x Espresso`;
  document.getElementById('cup-layer-milk').style.height = milkH + '%';
  document.getElementById('cup-layer-milk').textContent = customDrink.milk.includes('Tanpa Susu') ? 'Air Mineral' : customDrink.milk;
  document.getElementById('cup-layer-topping').style.height = topH + '%';
  document.getElementById('cup-layer-topping').textContent = toppings.join(', ');

  const topText = toppings.length > 0 ? ` serta tambahan topping ${toppings.join(', ')}` : '';
  document.getElementById('cb-recipe-summary').textContent =
    `Disajikan ${customDrink.temp} menggunakan ${customDrink.shots} Shot ${customDrink.bean}, dipadukan bersama ${customDrink.milk} dan ${customDrink.syrupName} pada tingkat kemanisan ${customDrink.sweetness}%${topText}.`;

  customDrink.calculatedPrice = totalPrice;
}

function addCustomDrinkToCart() {
  updateCustomDrinkFromSelect();
  const topText = customDrink.toppings.length > 0 ? ` • ${customDrink.toppings.join(', ')}` : '';
  addToCart({
    id: 'custom-' + Date.now(),
    name: `Racikan Kustom (${customDrink.temp} ${customDrink.shots}x Shot)`,
    price: customDrink.calculatedPrice || 32000,
    qty: 1,
    note: `${customDrink.bean} • ${customDrink.milk} • ${customDrink.syrupName} (${customDrink.sweetness}%)${topText}`
  });
}

// ==========================================
// NUSANTARA BEAN EXPLORER FUNCTIONS
// ==========================================
function renderOrigins() {
  const listEl = document.getElementById('origin-list');
  listEl.innerHTML = ORIGINS_DATA.map(o => {
    const active = o.id === selectedOriginId;
    return `
      <button onclick="selectOrigin('${o.id}')" class="btn-click-anim w-full text-left p-4 sharp-box transition-all flex items-center justify-between ${active ? 'border-l-4 border-l-espresso-700 border-[#c8b6a2]' : 'hover:border-espresso-600'}">
        <div>
          <span class="text-[10px] font-bold uppercase tracking-widest text-espresso-700 dark:text-espresso-400 block">${o.region}</span>
          <h3 class="font-display font-bold text-base text-stone-900 dark:text-stone-100 mt-0.5">${o.name}</h3>
          <span class="text-xs text-stone-500 dark:text-stone-400">${o.process} &bull; ${o.altitude}</span>
        </div>
        <i data-lucide="chevron-right" class="w-4 h-4 ${active ? 'text-espresso-700 dark:text-espresso-400' : 'text-stone-400'}"></i>
      </button>
    `;
  }).join('');

  const cur = ORIGINS_DATA.find(o => o.id === selectedOriginId) || ORIGINS_DATA[0];
  const detailEl = document.getElementById('origin-detail-card');
  detailEl.innerHTML = `
    <div class="space-y-6">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-5 border-b border-[#dfd3c5]/80 dark:border-[#332721]">
        <div>
          <span class="text-[10px] font-bold uppercase tracking-widest text-espresso-700 dark:text-espresso-400">${cur.region}</span>
          <h2 class="font-display text-2xl font-bold text-stone-900 dark:text-stone-100 mt-0.5">${cur.name}</h2>
        </div>
        <span class="font-mono text-xs font-bold text-espresso-700 dark:text-espresso-300">
          Kemasan 200g &bull; Rp ${cur.price200g.toLocaleString('id-ID')}
        </span>
      </div>

      <p class="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed text-justify">${cur.story}</p>

      <div class="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#c8b6a2] dark:divide-[#332721] py-3 border-y border-[#dfd3c5]/80 dark:border-[#332721] text-xs">
        <div class="py-2 sm:py-0 sm:pr-4">
          <span class="text-[10px] text-stone-500 uppercase block">Ketinggian Tanam</span>
          <strong class="text-stone-900 dark:text-stone-100">${cur.altitude}</strong>
        </div>
        <div class="py-2 sm:py-0 sm:px-4">
          <span class="text-[10px] text-stone-500 uppercase block">Proses Pascapanen</span>
          <strong class="text-stone-900 dark:text-stone-100">${cur.process}</strong>
        </div>
        <div class="py-2 sm:py-0 sm:pl-4">
          <span class="text-[10px] text-stone-500 uppercase block">Varietas Pohon</span>
          <strong class="text-stone-900 dark:text-stone-100">${cur.variety}</strong>
        </div>
      </div>

      <!-- Sensory Bars -->
      <div class="space-y-3.5 pt-1">
        <div>
          <div class="flex justify-between text-xs mb-1.5">
            <span class="font-medium text-stone-600 dark:text-stone-400">Tingkat Keasaman (Acidity)</span>
            <span class="font-mono font-bold text-espresso-700 dark:text-espresso-400">${cur.acidity}%</span>
          </div>
          <div class="h-1.5 bg-[#dfd3c5]/70 dark:bg-[#241c18]">
            <div class="flavor-bar-fill h-full bg-espresso-600" style="width: ${cur.acidity}%"></div>
          </div>
        </div>
        <div>
          <div class="flex justify-between text-xs mb-1.5">
            <span class="font-medium text-stone-600 dark:text-stone-400">Kekentalan Tekstur (Body)</span>
            <span class="font-mono font-bold text-espresso-700 dark:text-espresso-400">${cur.body}%</span>
          </div>
          <div class="h-1.5 bg-[#dfd3c5]/70 dark:bg-[#241c18]">
            <div class="flavor-bar-fill h-full bg-stone-800 dark:bg-stone-300" style="width: ${cur.body}%"></div>
          </div>
        </div>
        <div>
          <div class="flex justify-between text-xs mb-1.5">
            <span class="font-medium text-stone-600 dark:text-stone-400">Intensitas Manis (Sweetness)</span>
            <span class="font-mono font-bold text-espresso-700 dark:text-espresso-400">${cur.sweetness}%</span>
          </div>
          <div class="h-1.5 bg-[#dfd3c5]/70 dark:bg-[#241c18]">
            <div class="flavor-bar-fill h-full bg-amber-600" style="width: ${cur.sweetness}%"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="pt-5 mt-6 border-t border-[#dfd3c5]/80 dark:border-[#332721] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div class="flex flex-wrap items-center gap-2 text-xs font-semibold text-espresso-800 dark:text-espresso-300">
        ${cur.notes.map(n => `<span>${n}</span>`).join('<span class="text-stone-400">&bull;</span>')}
      </div>
      <button onclick="buyOriginBean('${cur.id}')" class="line-action-link primary-line shrink-0">
        <span>Beli Biji 200g</span>
        <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
      </button>
    </div>
  `;
  lucide.createIcons();
}

function selectOrigin(id) {
  selectedOriginId = id;
  renderOrigins();
}

function buyOriginBean(id) {
  const o = ORIGINS_DATA.find(x => x.id === id);
  if (!o) return;
  addToCart({
    id: 'bean-' + o.id + '-' + Date.now(),
    name: `Biji Kopi ${o.name} (200g)`,
    price: o.price200g,
    qty: 1,
    note: `Whole Bean (Biji Utuh) • ${o.roast}`
  });
}

// ==========================================
// BREW RATIO CALCULATOR & LIVE TIMER FUNCTIONS
// ==========================================
const BREW_SPECS = {
  v60: { temp: '92°C', grind: 'Medium-Fine', time: '02:15 - 02:30' },
  frenchpress: { temp: '94°C', grind: 'Coarse (Kasar)', time: '04:00' },
  aeropress: { temp: '88°C', grind: 'Medium', time: '01:45' },
  tubruk: { temp: '93°C', grind: 'Medium-Fine', time: '03:30' }
};

function setBrewMethod(m) {
  currentBrewMethod = m;
  document.querySelectorAll('.brew-btn').forEach(btn => {
    if (btn.getAttribute('data-method') === m) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  resetBrewTimer();
  calculateBrew();
}

function calculateBrew() {
  const dose = parseInt(document.getElementById('brew-dose').value, 10);
  const ratio = parseInt(document.getElementById('brew-ratio').value, 10);
  const totalWater = dose * ratio;

  document.getElementById('brew-dose-val').textContent = `${dose} gram`;
  document.getElementById('brew-ratio-val').textContent = `1 : ${ratio}`;
  document.getElementById('brew-water-out').textContent = `${totalWater} ml`;

  const spec = BREW_SPECS[currentBrewMethod];
  document.getElementById('brew-temp-out').textContent = spec.temp;
  document.getElementById('brew-grind-out').textContent = spec.grind;
  document.getElementById('brew-time-out').textContent = spec.time;

  const bloom = Math.round(dose * 2.5);
  const pour1 = Math.round((totalWater - bloom) * 0.55) + bloom;

  const s = brewSecondsElapsed;
  const step1Active = brewTimerRunning && s >= 0 && s <= 40;
  const step2Active = brewTimerRunning && s > 40 && s <= 95;
  const step3Active = brewTimerRunning && s > 95;

  const stepsEl = document.getElementById('brew-steps-list');
  stepsEl.innerHTML = `
    <div class="p-3.5 border-l-2 ${step1Active ? 'border-l-espresso-600 bg-white/60 dark:bg-[#241c18]' : 'border-l-[#c8b6a2] bg-white/30 dark:bg-[#1f1814]'} flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-4 transition-all">
      <span class="text-justify leading-relaxed"><strong>00:00 - 00:40 (Blooming):</strong> Tuangkan air panas secara melingkar perlahan untuk membasahi seluruh bubuk kopi dan melepaskan gas CO2.</span>
      <span class="font-mono font-bold text-espresso-700 dark:text-espresso-400 shrink-0 self-end sm:self-auto">${bloom} ml</span>
    </div>
    <div class="p-3.5 border-l-2 ${step2Active ? 'border-l-espresso-600 bg-white/60 dark:bg-[#241c18]' : 'border-l-[#c8b6a2] bg-white/30 dark:bg-[#1f1814]'} flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-4 transition-all">
      <span class="text-justify leading-relaxed"><strong>00:40 - 01:35 (Tuangan Inti):</strong> Lanjutkan tuangan spiral stabil dari bagian tengah ke tepi untuk mengekstraksi senyawa asam sitrus dan rasa manis.</span>
      <span class="font-mono font-bold text-espresso-700 dark:text-espresso-400 shrink-0 self-end sm:self-auto">Hingga ${pour1} ml</span>
    </div>
    <div class="p-3.5 border-l-2 ${step3Active ? 'border-l-espresso-600 bg-white/60 dark:bg-[#241c18]' : 'border-l-[#c8b6a2] bg-white/30 dark:bg-[#1f1814]'} flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-4 transition-all">
      <span class="text-justify leading-relaxed"><strong>01:35 - Selesai (Penyeimbang Body):</strong> Tuangkan sisa air dengan aliran lembut di titik tengah hingga mencapai target volume ekstraksi.</span>
      <span class="font-mono font-bold text-espresso-700 dark:text-espresso-400 shrink-0 self-end sm:self-auto">Hingga ${totalWater} ml</span>
    </div>
  `;
}

function formatTimer(sec) {
  const m = String(Math.floor(sec / 60)).padStart(2, '0');
  const s = String(sec % 60).padStart(2, '0');
  return `${m}:${s}`;
}

function toggleBrewTimer() {
  const btnText = document.getElementById('brew-timer-btn-text');
  const stageText = document.getElementById('brew-timer-stage');
  if (brewTimerRunning) {
    clearInterval(brewTimerInterval);
    brewTimerRunning = false;
    btnText.textContent = "Lanjutkan";
    stageText.textContent = "Stopwatch dijeda";
    calculateBrew();
  } else {
    brewTimerRunning = true;
    btnText.textContent = "Jeda Waktu";
    brewTimerInterval = setInterval(() => {
      brewSecondsElapsed++;
      document.getElementById('brew-timer-display').textContent = formatTimer(brewSecondsElapsed);
      if (brewSecondsElapsed <= 40) {
        stageText.textContent = "Tahap 1: Blooming (Pelepasan CO2)";
      } else if (brewSecondsElapsed <= 95) {
        stageText.textContent = "Tahap 2: Ekstraksi Inti (Tuangan Pertama)";
      } else if (brewSecondsElapsed <= 150) {
        stageText.textContent = "Tahap 3: Penyeimbang Body (Tuangan Akhir)";
      } else {
        stageText.textContent = "Seduhan Selesai — Angkat Dripper";
      }
      calculateBrew();
    }, 1000);
    calculateBrew();
  }
}

function resetBrewTimer() {
  if (brewTimerInterval) clearInterval(brewTimerInterval);
  brewTimerRunning = false;
  brewSecondsElapsed = 0;
  const disp = document.getElementById('brew-timer-display');
  const btnText = document.getElementById('brew-timer-btn-text');
  const stageText = document.getElementById('brew-timer-stage');
  if (disp) disp.textContent = "00:00";
  if (btnText) btnText.textContent = "Mulai Seduh";
  if (stageText) stageText.textContent = "Siap memulai ekstraksi";
  calculateBrew();
}

// ==========================================
// RESERVATION & LOYALTY FUNCTIONS
// ==========================================
function selectZone(zoneName) {
  document.getElementById('res-zone-input').value = zoneName;
  document.querySelectorAll('.zone-card').forEach(card => {
    if (card.getAttribute('data-zone') === zoneName) {
      card.className = 'zone-card cursor-pointer p-4 border-l-4 border-l-espresso-700 bg-white/60 dark:bg-[#241c18] transition-all';
    } else {
      card.className = 'zone-card cursor-pointer p-4 border-l-4 border-l-transparent hover:bg-white/40 dark:hover:bg-[#1f1814] transition-all';
    }
  });
}

function submitReservation(e) {
  e.preventDefault();
  const name = document.getElementById('res-name').value;
  const date = document.getElementById('res-date').value;
  const time = document.getElementById('res-time').value;
  const guests = document.getElementById('res-guests').value;
  const zone = document.getElementById('res-zone-input').value;
  const code = 'SNJ-' + Math.floor(1000 + Math.random() * 9000);

  document.getElementById('res-code').textContent = code;
  document.getElementById('res-summary-text').textContent =
    `Terima kasih, ${name}. Meja Anda pada ${zone} untuk ${guests} telah dijadwalkan pada tanggal ${date} pukul ${time}. Silakan tunjukkan kode booking ${code} kepada barista kami saat tiba di lokasi.`;
  document.getElementById('res-receipt').classList.remove('hidden');
  showToast('Reservasi meja berhasil dikonfirmasi');
}

function updateLoyaltySim() {
  const visits = parseInt(document.getElementById('loyalty-slider').value, 10);
  const monthlyPoints = visits * 4 * 30;
  document.getElementById('loyalty-visits-label').textContent = `${visits}x / Minggu`;
  document.getElementById('loyalty-points').textContent = `${monthlyPoints} Poin`;

  let tier = 'Silver Brewer';
  let reward = '1 Pastry Gratis / Bulan';
  if (visits >= 5) {
    tier = 'Platinum Connoisseur';
    reward = '1 Bag Biji 200g + 2 Cup Gratis';
  } else if (visits >= 3) {
    tier = 'Gold Brewer';
    reward = '2 Cup Signature Gratis';
  }
  document.getElementById('loyalty-tier').textContent = tier;
  document.getElementById('loyalty-reward').textContent = reward;
}

// ==========================================
// REVIEWS & FAQ FUNCTIONS
// ==========================================
function escHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}
function renderReviews() {
  const container = document.getElementById('reviews-list');
  container.innerHTML = REVIEWS_DATA.map(r => {
    const ini = escHtml(r.name.trim().split(/\s+/).slice(0, 2).map(w => w[0]).join('').toUpperCase());
    return `
    <article class="sharp-box p-5 flex flex-col gap-4">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 shrink-0 flex items-center justify-center bg-espresso-700/10 dark:bg-espresso-400/10 border border-[#c8b6a2]/70 dark:border-[#3d2e27] font-display font-bold text-sm text-espresso-700 dark:text-espresso-400">${ini}</div>
        <div class="min-w-0">
          <h4 class="font-display font-bold text-sm text-stone-900 dark:text-stone-100 truncate">${escHtml(r.name)}</h4>
          <span class="text-xs text-stone-500 dark:text-stone-400 block truncate">${escHtml(r.role)}</span>
        </div>
      </div>
      <p class="text-sm text-stone-700 dark:text-stone-300 leading-relaxed pl-4 border-l-2 border-espresso-600 dark:border-espresso-400">&ldquo;${escHtml(r.text)}&rdquo;</p>
      <p class="text-xs text-stone-500 dark:text-stone-400 pt-3 border-t border-[#dfd3c5]/80 dark:border-[#332721]">Pesanan: <strong class="font-semibold text-espresso-700 dark:text-espresso-400">${escHtml(r.ordered)}</strong></p>
    </article>`;
  }).join('');
}

function submitReview(e) {
  e.preventDefault();
  const name = document.getElementById('rev-name').value;
  const role = document.getElementById('rev-role').value;
  const ordered = document.getElementById('rev-Ordered').value;
  const text = document.getElementById('rev-text').value;

  REVIEWS_DATA.unshift({ name, role, ordered, text });
  renderReviews();
  e.target.reset();
  showToast('Terima kasih! Testimoni Anda telah ditambahkan.');
}

function renderFaq() {
  const container = document.getElementById('faq-container');
  container.innerHTML = FAQ_DATA.map((item, idx) => `
    <div class="border-b border-[#c8b6a2]/60 dark:border-[#3d2e27]">
      <button onclick="toggleFaq(${idx})" aria-expanded="${idx === 0}" class="w-full py-4 text-left flex items-center justify-between gap-4 font-display font-bold text-sm text-stone-900 dark:text-stone-100">
        <span>${item.q}</span>
        <svg id="faq-icon-${idx}" class="w-4 h-4 shrink-0 text-stone-500 dark:text-stone-400 transition-transform duration-200 ${idx === 0 ? 'rotate-180' : ''}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
      </button>
      <div id="faq-ans-${idx}" class="${idx === 0 ? '' : 'hidden'} pb-4 text-xs text-stone-600 dark:text-stone-400 leading-relaxed text-justify">
        ${item.a}
      </div>
    </div>
  `).join('');
}

function toggleFaq(idx) {
  const ans = document.getElementById('faq-ans-' + idx);
  const icon = document.getElementById('faq-icon-' + idx);
  ans.classList.toggle('hidden');
  icon.classList.toggle('rotate-180', !ans.classList.contains('hidden'));
}

// ==========================================
// CART & CHECKOUT FUNCTIONS
// ==========================================
function toggleCartDrawer(open) {
  const drawer = document.getElementById('cart-drawer');
  const backdrop = document.getElementById('cart-drawer-backdrop');
  if (open) {
    drawer.classList.remove('translate-x-full');
    backdrop.classList.remove('hidden');
    renderCart();
  } else {
    drawer.classList.add('translate-x-full');
    backdrop.classList.add('hidden');
  }
}

function setOrderType(type) {
  orderType = type;
  document.querySelectorAll('.otype-btn').forEach(btn => {
    if (btn.getAttribute('data-otype') === type) {
      btn.className = 'otype-btn py-2.5 border-b-2 border-espresso-700 text-espresso-800 dark:text-espresso-300 font-bold';
    } else {
      btn.className = 'otype-btn py-2.5 border-b-2 border-transparent text-stone-500 dark:text-stone-400';
    }
  });
}

function addToCart(item) {
  cart.push(item);
  updateCartBadge();
  showToast(`${item.name} ditambahkan ke keranjang`);
}

function updateCartQty(idx, delta) {
  cart[idx].qty += delta;
  if (cart[idx].qty <= 0) {
    cart.splice(idx, 1);
  }
  updateCartBadge();
  renderCart();
}

function updateCartBadge() {
  const count = cart.reduce((acc, item) => acc + item.qty, 0);
  document.getElementById('cart-badge').textContent = count;
}

function applyPromoCode() {
  const code = document.getElementById('promo-input').value.trim().toUpperCase();
  if (code === 'CAFFEIN20') {
    promoApplied = true;
    renderCart();
    showToast('Kode promo CAFFEIN20 (Diskon 20%) berhasil diterapkan');
  } else {
    showToast('Kode promo tidak valid. Gunakan: CAFFEIN20');
  }
}

function renderCart() {
  const container = document.getElementById('cart-items-container');
  if (cart.length === 0) {
    container.innerHTML = `
      <div class="text-center py-12 text-xs text-stone-500">
        Keranjang pesanan Anda masih kosong.
      </div>
    `;
  } else {
    container.innerHTML = cart.map((item, idx) => `
      <div class="p-3.5 bg-white/50 dark:bg-[#241c18] border border-[#dfd3c5] dark:border-[#332721] flex items-start justify-between gap-3">
        <div>
          <h4 class="font-display font-bold text-xs text-stone-900 dark:text-stone-100">${item.name}</h4>
          <p class="text-[11px] text-stone-500 dark:text-stone-400 mt-0.5">${item.note}</p>
          <span class="font-mono text-xs font-bold text-espresso-700 dark:text-espresso-400 mt-1.5 block">Rp ${(item.price * item.qty).toLocaleString('id-ID')}</span>
        </div>
        <div class="flex items-center border border-[#c8b6a2] dark:border-[#332721] bg-white/80 dark:bg-[#16110e]">
          <button onclick="updateCartQty(${idx}, -1)" class="px-2 py-1 text-xs font-bold hover:bg-[#efe6dc] dark:hover:bg-stone-800">-</button>
          <span class="px-2 py-1 text-xs font-mono">${item.qty}</span>
          <button onclick="updateCartQty(${idx}, 1)" class="px-2 py-1 text-xs font-bold hover:bg-[#efe6dc] dark:hover:bg-stone-800">+</button>
        </div>
      </div>
    `).join('');
  }

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  const discount = promoApplied ? Math.round(subtotal * 0.2) : 0;
  const taxedBase = subtotal - discount;
  const tax = Math.round(taxedBase * 0.1);
  const total = taxedBase + tax;

  document.getElementById('cart-subtotal').textContent = 'Rp ' + subtotal.toLocaleString('id-ID');
  const discRow = document.getElementById('cart-discount-row');
  if (promoApplied && subtotal > 0) {
    discRow.classList.remove('hidden');
    document.getElementById('cart-discount').textContent = '-Rp ' + discount.toLocaleString('id-ID');
  } else {
    discRow.classList.add('hidden');
  }
  document.getElementById('cart-tax').textContent = 'Rp ' + tax.toLocaleString('id-ID');
  document.getElementById('cart-total').textContent = 'Rp ' + total.toLocaleString('id-ID');
}

function processCheckout() {
  if (cart.length === 0) {
    showToast('Tambahkan menu terlebih dahulu sebelum checkout');
    return;
  }
  const queueNo = 'A-' + Math.floor(10 + Math.random() * 89);
  cart = [];
  promoApplied = false;
  updateCartBadge();
  renderCart();
  toggleCartDrawer(false);
  showToast(`Pesanan (${orderType}) diterima! Nomor Antrean Bar: ${queueNo}`);
}

// ==========================================
// BARISTA COFFEE MATCHER QUIZ
// ==========================================
function openQuizModal() {
  const m = document.getElementById('quiz-modal');
  m.classList.remove('hidden');
  m.classList.add('flex');
}

function closeQuizModal() {
  const m = document.getElementById('quiz-modal');
  m.classList.add('hidden');
  m.classList.remove('flex');
}

function runCoffeeMatcher() {
  const flavor = document.querySelector('input[name="q-flavor"]:checked').value;
  const strength = document.querySelector('input[name="q-strength"]:checked').value;

  let matched = MENU_ITEMS[0];
  if (flavor === 'creamy' && strength === 'strong') matched = MENU_ITEMS[0];
  else if (flavor === 'creamy' && strength === 'light') matched = MENU_ITEMS[6];
  else if (flavor === 'fruity' && strength === 'strong') matched = MENU_ITEMS[2];
  else matched = MENU_ITEMS[3];

  document.getElementById('quiz-res-name').textContent = `${matched.name} (Rp ${matched.price.toLocaleString('id-ID')})`;
  document.getElementById('quiz-res-desc').textContent = matched.desc;
  const btn = document.getElementById('quiz-res-btn');
  btn.onclick = () => {
    closeQuizModal();
    openItemModal(matched.id);
  };
  document.getElementById('quiz-result-box').classList.remove('hidden');
}

// Toast Helper
let toastTimeout = null;
function showToast(msg) {
  const t = document.getElementById('toast');
  document.getElementById('toast-msg').textContent = msg;
  t.classList.remove('hidden');
  if (toastTimeout) clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    t.classList.add('hidden');
  }, 3200);
}

// Initialize Application
window.addEventListener('DOMContentLoaded', () => {
  // Tiap langkah dijalankan terpisah agar satu error tidak menghentikan bagian lain
  const safe = (fn) => { try { fn(); } catch (err) { console.error('Init error:', err); } };
  safe(() => {
    const today = new Date().toISOString().split('T')[0];
    const dateInput = document.getElementById('res-date');
    if (dateInput) dateInput.value = today;
  });
  safe(() => { document.getElementById('fav-count-badge').textContent = favorites.length; });
  safe(updateCartBadge);
  safe(renderReviews);
  safe(renderFaq);
  safe(initBeanSlider);
  safe(renderMenu);
  safe(updateCustomDrinkFromSelect);
  safe(renderOrigins);
  safe(calculateBrew);
  safe(updateLoyaltySim);
  safe(() => lucide.createIcons());
});
