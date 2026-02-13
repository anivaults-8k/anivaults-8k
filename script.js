const i18n = {
    ar: {
        welcome: "مرحباً بك في عالم الأنمي الأسطوري",
        subWelcome: "أنت الآن تشاهد النسخة الأولية من تطبيقك العالمي.",
        btnLang: "English",
        downloadBtn: "تحميل 8K",
        downloadDone: "تم التحميل بنجاح! ✅", // نص جديد
        searchPlaceholder: "ابحث عن خلفيتك المفضلة...",
        cats: { all: "الكل", onePiece: "ون بيس", naruto: "ناروتو", solo: "سولو ليفيلينج" }
    },
    en: {
        welcome: "Welcome to the Legendary Anime World",
        subWelcome: "You are now viewing the initial version of your global app.",
        btnLang: "العربية",
        downloadBtn: "Download 8K",
        downloadDone: "Downloaded Successfully! ✅", // نص جديد
        searchPlaceholder: "Search for your favorite wallpaper...",
        cats: { all: "All", onePiece: "One Piece", naruto: "Naruto", solo: "Solo Leveling" }
    }
};

let currentLang = 'ar';
let currentCategory = 'all';

const wallpapers = [
    { title: "Luffy Gear 5", url: "assets/1.webp", category: "onePiece" },
    { title: "Naruto Sage", url: "assets/2.webp", category: "naruto" },
    { title: "Solo Leveling", url: "assets/3.webp", category: "solo" },
    { title: "Zoro Wano", url: "assets/4.webp", category: "onePiece" }
];

function init() {
    renderCategories();
    renderWallpapers(wallpapers);
    document.getElementById('lang-btn').onclick = toggleLanguage;
    document.getElementById('search-input').oninput = (e) => {
        const term = e.target.value.toLowerCase();
        const filtered = wallpapers.filter(wp => 
            wp.title.toLowerCase().includes(term) && 
            (currentCategory === 'all' || wp.category === currentCategory)
        );
        renderWallpapers(filtered);
    };
}

// --- وظيفة التحميل المطورة الجديدة ---
function handleDownload(btnElement, url, filename) {
    // 1. حفظ النص الأصلي للزر
    const originalText = btnElement.innerText;
    
    // 2. تغيير شكل الزر للأخضر والنص للنجاح
    btnElement.innerText = i18n[currentLang].downloadDone;
    btnElement.classList.add('success');
    btnElement.disabled = true; // منع الضغط المتكرر أثناء التحميل

    // 3. بدء التحميل الفعلي
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // 4. إعادة الزر لحالته الأصلية بعد ثانيتين (2000 ميلي ثانية)
    setTimeout(() => {
        btnElement.innerText = originalText;
        btnElement.classList.remove('success');
        btnElement.disabled = false;
    }, 2000);
}

function renderWallpapers(list) {
    const grid = document.getElementById('wallpaper-grid');
    grid.innerHTML = "";
    list.forEach(wp => {
        const card = document.createElement('div');
        card.className = 'wallpaper-card';
        // لاحظ التغيير في استدعاء الدالة في السطر التالي (تمرير 'this')
        card.innerHTML = `
            <img src="${wp.url}" alt="${wp.title}" loading="lazy">
            <div class="wp-info">
                <h3>${wp.title}</h3>
                <button class="download-btn" onclick="handleDownload(this, '${wp.url}', '${wp.title}.webp')">
                    ${i18n[currentLang].downloadBtn}
                </button>
            </div>
        `;
        grid.appendChild(card);
    });
}

function renderCategories() {
    const container = document.getElementById('categories-bar');
    const cats = i18n[currentLang].cats;
    container.innerHTML = "";
    Object.keys(cats).forEach(key => {
        const btn = document.createElement('button');
        btn.className = `cat-btn ${currentCategory === key ? 'active' : ''}`;
        btn.innerText = cats[key];
        btn.onclick = () => {
            currentCategory = key;
            renderCategories();
            filterImages();
        };
        container.appendChild(btn);
    });
}

function filterImages() {
    const filtered = currentCategory === 'all' ? wallpapers : wallpapers.filter(wp => wp.category === currentCategory);
    renderWallpapers(filtered);
}

function toggleLanguage() {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.getElementById('main-title').innerText = i18n[currentLang].welcome;
    document.getElementById('sub-title').innerText = i18n[currentLang].subWelcome;
    document.getElementById('lang-btn').innerText = i18n[currentLang].btnLang;
    document.getElementById('search-input').placeholder = i18n[currentLang].searchPlaceholder;
    renderCategories();
    filterImages();
}

window.onload = init;