// 1. قاعدة البيانات المصححة (تأكد من مطابقة الأرقام للصور في assets)
const wallpapers = [
    { id: 1, title: "Luffy Gear 5", category: "one-piece", url: "assets/1.webp" },
    { id: 2, title: "Naruto Sage Mode", category: "naruto", url: "assets/2.webp" },
    { id: 3, title: "Sung Jin-Woo", category: "solo", url: "assets/3.webp" },
    { id: 4, title: "Roronoa Zoro", category: "one-piece", url: "assets/4.webp" },
    { id: 5, title: "Goku Ultra Instinct", category: "dragon-ball", url: "assets/5.webp" },
    { id: 9, title: "Killua Godspeed", category: "hunter", url: "assets/9.webp" },
    { id: 11, title: "Gabimaru", category: "hells-paradise", url: "assets/11.webp" },
    { id: 12, title: "Taro Sakamoto", category: "sakamoto-days", url: "assets/12.webp" },
    { id: 13, title: "Monica Everett", category: "silent-witch", url: "assets/13.webp" }
];

// 2. نظام الترجمة الشامل لـ 23 قسم
const translations = {
    ar: {
        title: "Anivaults 8K - عالم الأساطير",
        subTitle: "استكشف وحمل خلفياتك المفضلة بأعلى جودة ممكنة.",
        search: "ابحث عن خلفيتك المفضلة...",
        langBtn: "English",
        download: "تحميل 8K",
        toast: "بدأ التحميل.. استمتع بالفخامة! 🚀",
        cats: {
            all: "الكل", "one-piece": "ون بيس", naruto: "ناروتو", "dragon-ball": "دراغون بول",
            aot: "هجوم العمالقة", "demon-slayer": "قاتل الشياطين", jjk: "جوجوتسو كايسن",
            solo: "سولو ليفيلينج", hunter: "هنتر", bleach: "بليتش", 
            "hells-paradise": "جنة الجحيم", "sakamoto-days": "ساكاموتو دايز", "silent-witch": "Silent Witch",
            "death-note": "مذكرة الموت", mha: "MHA", "black-clover": "بلاك كلوفر",
            opm: "ون بنش مان", "tokyo-ghoul": "طوكيو غول", fma: "FMA",
            berserk: "بيرسيرك", "vinland-saga": "فينلاند ساغا", "chainsaw-man": "رجل المنشار", "blue-lock": "بلو لوك"
        }
    },
    en: {
        title: "Anivaults 8K - Legendary World",
        subTitle: "Explore and download your favorite wallpapers in 8K.",
        search: "Search for your favorite character...",
        langBtn: "العربية",
        download: "DOWNLOAD 8K",
        toast: "Download started.. Enjoy the 8K! 🚀",
        cats: {
            all: "ALL", "one-piece": "ONE PIECE", naruto: "NARUTO", "dragon-ball": "DRAGON BALL",
            aot: "AOT", "demon-slayer": "DEMON SLAYER", jjk: "JJK",
            solo: "SOLO LEVELING", hunter: "HUNTER", bleach: "BLEACH",
            "hells-paradise": "HELL'S PARADISE", "sakamoto-days": "SAKAMOTO DAYS", "silent-witch": "SILENT WITCH",
            "death-note": "DEATH NOTE", mha: "MHA", "black-clover": "BLACK CLOVER",
            opm: "ONE PUNCH MAN", "tokyo-ghoul": "TOKYO GHOUL", fma: "FMA",
            berserk: "BERSERK", "vinland-saga": "VINLAND SAGA", "chainsaw-man": "CHAINSAW MAN", "blue-lock": "BLUE LOCK"
        }
    }
};

let currentLang = 'ar';
let currentCategory = 'all';

function renderUI() {
    const bar = document.getElementById('categories-bar');
    const categories = translations[currentLang].cats;
    
    bar.innerHTML = Object.keys(categories).map(key => `
        <button class="cat-btn ${currentCategory === key ? 'active' : ''}" onclick="filterAnime('${key}')">
            ${categories[key]}
        </button>
    `).join('');

    const filtered = currentCategory === 'all' ? wallpapers : wallpapers.filter(wp => wp.category === currentCategory);
    display(filtered);
}

function display(items) {
    const grid = document.getElementById('wallpaper-grid');
    grid.innerHTML = items.map(wp => `
        <div class="wallpaper-card">
            <img src="${wp.url}" alt="${wp.title}" onclick="openModal('${wp.url}')" onerror="this.src='https://via.placeholder.com/300x500?text=Image+Coming+Soon'">
            <div class="info">
                <h3>${wp.title}</h3>
                <a href="${wp.url}" download class="download-btn" onclick="event.stopPropagation(); triggerToast()">${translations[currentLang].download}</a>
            </div>
        </div>
    `).join('');
}

function openModal(url) {
    const modal = document.getElementById('image-modal');
    document.getElementById('full-image').src = url;
    modal.style.display = "block";
}

document.querySelector('.close-modal').onclick = () => document.getElementById('image-modal').style.display = "none";

window.onscroll = () => {
    const btn = document.getElementById("scroll-top");
    btn.style.display = (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) ? "block" : "none";
};

document.getElementById("scroll-top").onclick = () => window.scrollTo({top: 0, behavior: 'smooth'});

function triggerToast() {
    const toast = document.getElementById('toast-container');
    toast.innerText = translations[currentLang].toast;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
}

function filterAnime(category) { currentCategory = category; renderUI(); }

function searchWallpapers() {
    const term = document.getElementById('search-input').value.toLowerCase();
    const filtered = wallpapers.filter(wp => wp.title.toLowerCase().includes(term));
    display(filtered);
}

document.getElementById('lang-btn').addEventListener('click', () => {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    const langData = translations[currentLang];
    document.getElementById('main-title').innerText = langData.title;
    document.getElementById('sub-title').innerText = langData.subTitle;
    document.getElementById('search-input').placeholder = langData.search;
    document.getElementById('lang-btn').innerText = langData.langBtn;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    renderUI();
});

renderUI();