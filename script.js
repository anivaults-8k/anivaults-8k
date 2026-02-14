// قاعدة بيانات الصور المحلية
const localWallpapers = [
    { title: "Luffy Gear 5", cat: "one-piece", path: "assets/1.webp" },
    { title: "Naruto Sage Mode", cat: "naruto", path: "assets/2.webp" },
    { title: "Sung Jin-Woo", cat: "solo-leveling", path: "assets/3.webp" },
    { title: "Roronoa Zoro", cat: "one-piece", path: "assets/4.webp" },
    { title: "Goku Ultra Instinct", cat: "dragon-ball", path: "assets/5.webp" },
    { title: "Killua Godspeed", cat: "hunter", path: "assets/9.webp" },
    { title: "Gabimaru", cat: "hells-paradise", path: "assets/11.webp" },
    { title: "Taro Sakamoto", cat: "sakamoto-days", path: "assets/12.webp" },
    { title: "Monica Everett", cat: "silent-witch", path: "assets/13.webp" }
];

const translations = {
    ar: {
        title: "Anivaults 8K - عالم الأساطير", search: "ابحث عن شخصيتك...", download: "تحميل 8K", share: "مشاركة",
        navAbout: "من نحن", navPrivacy: "سياسة الخصوصية", navContact: "اتصل بنا",
        aboutCont: "<h2>من نحن</h2><p>Anivaults 8K هو مشروع شغوف يهدف لجمع أجمل خلفيات الأنمي بدقة فائقة الجودة.</p>",
        privacyCont: "<h2>سياسة الخصوصية</h2><p>نحن نحترم خصوصيتك بالكامل. لا نقوم بجمع بيانات شخصية.</p>",
        contactCont: "<h2>اتصل بنا</h2><p>للاقتراحات أو الاستفسارات، راسلنا عبر:<br><b>support@anivaults8k.com</b></p>",
        cats: { 
            all: "الكل", "one-piece": "ون بيس", naruto: "ناروتو", "dragon-ball": "دراغون بول",
            "demon-slayer": "قاتل الشياطين", jjk: "جوجوتسو", "solo-leveling": "سولو", hunter: "هنتر", 
            bleach: "بليتش", "hells-paradise": "جنة الجحيم", "sakamoto-days": "ساكاموتو", 
            "silent-witch": "Silent Witch", "black-clover": "بلاك كلوفر", 
            "tokyo-ghoul": "طوكيو غول", berserk: "بيرسيرك", "vinland-saga": "فينلاند", 
            "chainsaw-man": "رجل المنشار", "blue-lock": "بلو لوك",
            baki: "باكي", conan: "المحقق كونان", "spy-family": "سباي x عائلة",
            "fairy-tail": "فيري تيل", sins: "الخطايا السبع", "kaiju-no-8": "كايجو 8",
            mashle: "ماشل", kenshin: "روروني كينشين", haikyu: "هايكيو"
        }
    },
    en: {
        title: "Anivaults 8K - Legendary World", search: "Search character...", download: "DOWNLOAD 8K", share: "SHARE",
        navAbout: "About Us", navPrivacy: "Privacy Policy", navContact: "Contact Us",
        aboutCont: "<h2>About Us</h2><p>Anivaults 8K is a passion project for anime fans world-wide.</p>",
        privacyCont: "<h2>Privacy Policy</h2><p>We respect your privacy. No personal data is collected.</p>",
        contactCont: "<h2>Contact Us</h2><p>Contact us at: <b>support@anivaults8k.com</b></p>",
        cats: { 
            all: "ALL", "one-piece": "One Piece", naruto: "Naruto", "dragon-ball": "Dragon Ball",
            "demon-slayer": "Demon Slayer", jjk: "JJK", "solo-leveling": "Solo", hunter: "Hunter", 
            bleach: "Bleach", "hells-paradise": "Hell's Paradise", "sakamoto-days": "Sakamoto", 
            "silent-witch": "Silent Witch", "black-clover": "Black Clover", 
            "tokyo-ghoul": "Tokyo Ghoul", berserk: "Berserk", "vinland-saga": "Vinland", 
            "chainsaw-man": "Chainsaw Man", "blue-lock": "Blue Lock",
            baki: "Baki", conan: "Detective Conan", "spy-family": "Spy x Family",
            "fairy-tail": "Fairy Tail", sins: "Seven Deadly Sins", "kaiju-no-8": "Kaiju No. 8",
            mashle: "Mashle", kenshin: "Rurouni Kenshin", haikyu: "Haikyu!!"
        }
    }
};

let currentLang = 'ar';
let currentCategory = 'all';

function renderUI() {
    const bar = document.getElementById('categories-bar');
    const cats = translations[currentLang].cats;
    
    // بناء الأزرار مع تأثير الظهور المتوالي (Sequential delay)
    bar.innerHTML = Object.keys(cats).map((k, index) => `
        <button class="cat-btn ${currentCategory===k?'active':''}" 
                style="animation-delay: ${index * 0.04}s" 
                onclick="filterAnime('${k}')">${cats[k]}</button>
    `).join('');
    
    display(currentCategory === 'all' ? localWallpapers : localWallpapers.filter(w => w.cat === currentCategory));
}

document.getElementById('main-logo').onclick = function() {
    this.querySelector('.header-logo').classList.add('logo-refresh');
    setTimeout(() => { location.reload(); }, 600);
};

function showPage(pageKey) {
    const modal = document.getElementById('info-modal');
    document.getElementById('info-body').innerHTML = translations[currentLang][pageKey + 'Cont'];
    modal.style.display = "flex";
}

function closeInfoModal() { document.getElementById('info-modal').style.display = "none"; }

function display(items) {
    const grid = document.getElementById('wallpaper-grid');
    if (items.length === 0) {
        grid.innerHTML = `<p style="text-align:center; width:100%; padding:50px;">قريباً سيتم إضافة صور لهذا القسم!</p>`;
        return;
    }
    grid.innerHTML = items.map(wp => `
        <div class="wallpaper-card">
            <img src="${wp.path}" alt="${wp.title}" onclick="openModal('${wp.path}')" loading="lazy">
            <div class="info">
                <h3>${wp.title}</h3>
                <div class="actions">
                    <a href="${wp.path}" download class="download-btn" onclick="showToast('Download started!')">${translations[currentLang].download}</a>
                    <button class="share-btn" onclick="copyLink('${wp.path}')">${translations[currentLang].share}</button>
                </div>
            </div>
        </div>
    `).join('');
}

function filterAnime(c) { currentCategory = c; renderUI(); }
function searchWallpapers() {
    const s = document.getElementById('search-input').value.toLowerCase();
    display(localWallpapers.filter(w => w.title.toLowerCase().includes(s)));
}

function copyLink(u) { navigator.clipboard.writeText(window.location.href + u); showToast(currentLang==='ar'?'تم النسخ!':'Copied!'); }
function showToast(m) { const t = document.getElementById('toast-container'); t.innerText=m; t.classList.add('show'); setTimeout(()=>t.classList.remove('show'), 3000); }
function openModal(u) { document.getElementById('image-modal').style.display="flex"; document.getElementById('full-image').src = u; }

document.getElementById('lang-btn').onclick = () => {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.getElementById('lang-btn').innerText = currentLang === 'ar' ? 'English' : 'العربية';
    document.getElementById('main-title').innerText = translations[currentLang].title;
    
    ['about', 'privacy', 'contact'].forEach(k => {
        const n = document.getElementById(`nav-${k}`);
        const f = document.getElementById(`foot-${k}`);
        if(n) n.innerText = translations[currentLang][`nav${k.charAt(0).toUpperCase() + k.slice(1)}`];
        if(f) f.innerText = translations[currentLang][`nav${k.charAt(0).toUpperCase() + k.slice(1)}`];
    });
    renderUI();
};

window.onscroll = () => { document.getElementById("scroll-top").style.display = (window.scrollY > 400) ? "block" : "none"; };
document.getElementById("scroll-top").onclick = () => window.scrollTo({top: 0, behavior: 'smooth'});

// التشغيل الفوري لضمان ظهور الصور
renderUI();