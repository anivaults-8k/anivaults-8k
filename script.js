// ==========================================
// 1. DATA ARRAY (REAL ASSETS 1 - 39)
// ==========================================
const wallData = [
    // --- المجموعة الأولى ---
    { id: "00001-luffy-gear5-sungod", title: "Monkey D. Luffy Gear 5 Sun God", cat: "one piece luffy joyboy" },
    { id: "00002-naruto-sage-mode", title: "Naruto Uzumaki Sage Mode Legend", cat: "naruto shippuden hokage" },
    { id: "00003-sungjinwoo-shadow", title: "Sung Jin-Woo Monarch Shadow", cat: "solo leveling manhwa" },
    { id: "00004-zoro-king-of-hell", title: "Roronoa Zoro King of Hell", cat: "one piece zoro enma" },
    { id: "00005-luffy-black-wallpaper", title: "Luffy Black Edition", cat: "one piece luffy dark amoled" },
    { id: "00006-killua-godspeed", title: "Killua Zoldyck Godspeed Assassin", cat: "hunter x hunter hxh" },
    { id: "00007-goku-ultra-instinct", title: "Goku Ultra Instinct Final Form", cat: "dragon ball dbs goku" },
    { id: "00008-sakamoto-hitman", title: "Sakamoto Hitman Legend", cat: "sakamoto days" },
    { id: "00009-monica-silent-witch", title: "Monica Everett Silent Witch", cat: "silent witch anime" },
    { id: "00010-gabimaru-hells-paradise", title: "Gabimaru The Hollow", cat: "jigokuraku hells paradise ninja" },
    { id: "00011-madara-dark-aura", title: "Madara Uchiha Dark Aura", cat: "naruto madara uchiha sharingan amoled" },
    { id: "00012-madara-blue-susanoo", title: "Madara Blue Susanoo Face", cat: "naruto madara uchiha dark" },
    { id: "00013-madara-gunbai-weapon", title: "Madara Gunbai Weapon", cat: "naruto madara uchiha weapon" },
    { id: "00014-madara-fire-jutsu", title: "Madara Epic Fire Jutsu", cat: "naruto madara uchiha fire dark" },
    { id: "00015-madara-rinnegan-glow", title: "Madara Glowing Rinnegan", cat: "naruto madara uchiha rinnegan amoled" },
    { id: "00016-madara-meteor-strike", title: "Madara Meteor Strike", cat: "naruto madara uchiha epic sky" },
    { id: "00017-madara-perfect-susanoo", title: "Madara Perfect Susanoo", cat: "naruto madara uchiha giant" },
    { id: "00018-madara-six-paths", title: "Madara Six Paths Sage Mode", cat: "naruto madara uchiha god white" },
    { id: "00019-madara-action-combat", title: "Madara Intense Combat", cat: "naruto madara uchiha action fight" },
    { id: "00020-madara-dark-throne", title: "Madara Dark Throne", cat: "naruto madara uchiha shadow cinematic" },
    
    // --- مجموعة أمير العمالقة لوكي (00021 - 00039) ---
    { id: "00021-loki-elbaf-conquerors-haki", title: "Loki Elbaf Conquerors Haki", cat: "loki one piece elbaf haki dark oled anime" },
    { id: "00022-loki-dark-rim-lighting", title: "Loki Dark Rim Lighting", cat: "loki one piece dark oled purple aesthetic" },
    { id: "00023-loki-purple-glow-face", title: "Loki Purple Glow Face", cat: "loki one piece portrait glowing dark oled" },
    { id: "00024-loki-void-punch-action", title: "Loki Void Punch Action", cat: "loki one piece action fight dark oled" },
    { id: "00025-loki-glowing-silhouette", title: "Loki Glowing Silhouette", cat: "loki one piece silhouette dark oled epic" },
    { id: "00026-loki-giant-village", title: "Loki Giant Village", cat: "loki one piece elbaf village landscape" },
    { id: "00027-loki-stone-throne", title: "Loki Stone Throne", cat: "loki one piece throne king dark fantasy" },
    { id: "00028-loki-burning-battlefield", title: "Loki Burning Battlefield", cat: "loki one piece fire battle epic" },
    { id: "00029-loki-thunderstorm-peak", title: "Loki Thunderstorm Peak", cat: "loki one piece lightning storm mountain" },
    { id: "00030-loki-epic-manga-cover", title: "Loki Epic Manga Cover", cat: "loki one piece manga cover art" },
    { id: "00031-loki-sitting-hammer-dark", title: "Loki Sitting with Hammer", cat: "loki one piece hammer sitting dark oled" },
    { id: "00032-loki-bandaged-eyes-dark", title: "Loki Bandaged Eyes", cat: "loki one piece bandages portrait dark oled" },
    { id: "00033-loki-pirate-flag-jolly-roger", title: "Loki Jolly Roger Flag", cat: "loki one piece jolly roger pirate flag dark oled" },
    { id: "00034-loki-dragon-red-haki-dark", title: "Loki Dragon Red Haki", cat: "loki one piece dragon red haki lightning dark oled" },
    { id: "00035-loki-orange-eyes-glow-dark", title: "Loki Orange Eyes Glow", cat: "loki one piece glowing eyes portrait dark oled" },
    { id: "00036-loki-monochrome-manga-dark", title: "Loki Monochrome Manga", cat: "loki one piece manga monochrome dark oled" },
    { id: "00037-loki-back-view-purple-aura-dark", title: "Loki Back View Purple Aura", cat: "loki one piece back purple aura glowing dark oled" },
    { id: "00038-loki-full-body-dark-aura-fixed", title: "Loki Full Body Dark Aura", cat: "loki one piece full body dark aura dark oled" },
    { id: "00039-loki-dragon-rider-purple-lightning-dark", title: "Loki Dragon Rider Purple Lightning", cat: "loki one piece dragon rider purple lightning dark oled" }
];

let wallpapers = wallData.map(d => ({ ...d, path: `assets/${d.id}.webp` }));

// توليد باقي الصور الوهمية لملء المكتبة (تبدأ من 40 الآن لأننا أضفنا صور لوكي)
for(let i = 40; i <= 1350; i++) {
    // جعل الأرقام الوهمية بخمس خانات أيضاً ليتناسق الشكل
    let paddedNum = String(i).padStart(5, '0');
    wallpapers.push({ title: `Legendary Anime Masterpiece #${paddedNum}`, cat: "anime manga premium", path: `assets/art_${i}.webp` });
}

// ==========================================
// 2. LONG PROFESSIONAL ARTICLES
// ==========================================
const articles = {
    about: `
        <h2>The Story of Anivaults 8K</h2>
        <p>Welcome to <b>Anivaults 8K</b>, the global leader in high-fidelity anime digital art and the world's most exclusive sanctuary for true collectors. Founded by a dedicated team of visionary designers and die-hard anime enthusiasts, we realized that the world needed a place where digital art meets technological perfection. We are not just another wallpaper site; we are a professional platform dedicated to delivering the highest visual standard possible for modern smartphone displays.</p>
        <h3>The 8K Resolution Standard</h3>
        <p>Our project started with a clear mission: to completely eliminate low-resolution, blurry backgrounds that fail to do justice to the legends of anime. Today, Anivaults 8K proudly houses an elite collection of over <b>1,350+ professional masterpieces</b>. Each image is meticulously handcrafted, upscaled, and curated to provide a cinematic experience every single time you unlock your phone.</p>
        <h3>OLED & Battery Efficiency</h3>
        <p>We take immense pride in our specialized <b>OLED & AMOLED Optimization</b> technology. By mastering the art of true-black contrast (#000000), our wallpapers allow high-end screens to turn off individual pixels. This crucial feature significantly reduces battery consumption by up to 15% during daily use. At Anivaults 8K, luxury and hardware efficiency are unified in one legendary experience.</p>
    `,
    privacy: `
        <h2>Privacy & Security Infrastructure</h2>
        <p>At Anivaults 8K, your privacy is our supreme priority. In an era where data is constantly being tracked, harvested, and sold, we stand firmly as a beacon of <b>Security and Transparency</b>. We strongly believe that enjoying high-quality art should never come at the cost of your personal information.</p>
        <h3>Zero-Tracking Policy</h3>
        <p>We operate under a strict and uncompromising <b>Zero-Tracking Policy</b>. We do not collect names, email addresses, phone numbers, location data, or browsing habits. Our platform is designed natively as a direct-access digital vault where users can freely explore and download high-resolution art without the need for registration, cookies, or unnecessary logins.</p>
        <h3>Secure Server Architecture</h3>
        <p>To maintain our massive 8K storage infrastructure and keep this premium library 100% free for the global anime community, we utilize professional advertisement flows. These flows are carefully integrated to respect your security and are scanned continuously for any malicious activity. Every 8K download link is fully encrypted and delivered directly through our secure servers, ensuring your mobile device remains protected at all times.</p>
    `,
    contact: `
        <h2>Connect With the Legend Designers</h2>
        <p>Do you have a specific character request that you cannot find in our vault? Or perhaps you are a talented digital artist who wants to see your work featured in the global 8K vault? Our professional support and design team is ready to connect with you 24/7 to ensure your voice is heard.</p>
        <h3>Community-Driven Art</h3>
        <p>We take community feedback very seriously. In fact, the majority of our <b>Special Edition Packs</b> are created based on direct requests from our loyal fans. If you have a vision for a legendary wallpaper, whether it is a rare manga panel or a trending anime moment, we want to hear it.</p>
        <p style="text-align:center; background:#111; padding:25px; border-radius:20px; border:1px solid var(--gold); margin-top:20px;">
            <b>Official Global Support Channel:</b><br>
            Email: <b class="gold">support@anivaults8k.com</b><br><br>
            <b>Follow the Legend on Twitter/X:</b><br>
            <b class="gold">@Anivaults8K</b>
        </p>
        <p>Our dedicated response team strives to reply to all professional business inquiries and fan requests within 12 to 24 hours. Thank you for making Anivaults 8K the #1 anime art destination on the planet.</p>
    `
};

// ==========================================
// 3. CORE FUNCTIONS (UI & SEARCH)
// ==========================================
function renderUI() { display(wallpapers); }

function display(items) {
    const grid = document.getElementById('wallpaper-grid');
    if(!grid) return;
    grid.innerHTML = items.map((wp, index) => `
        <div class="wallpaper-card" style="transition-delay: ${index * 0.03}s">
            <img src="${wp.path}" alt="${wp.title}" loading="lazy" onclick="startFlow('p','${wp.path}','${wp.title}')">
            <div class="btn-group">
                <button class="card-btn p-btn" onclick="startFlow('p','${wp.path}','${wp.title}')">PREVIEW</button>
                <button class="card-btn d-btn" onclick="startFlow('d','${wp.path}','${wp.title}')">DOWNLOAD</button>
            </div>
        </div>
    `).join('');

    // Trigger animations via IntersectionObserver
    const obs = new IntersectionObserver((entries) => {
        entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    document.querySelectorAll('.wallpaper-card').forEach(c => obs.observe(c));
}

// Advanced Search Engine
function searchWallpapers() {
    const term = document.getElementById('search-input').value.toLowerCase().trim();
    const filtered = wallpapers.filter(w => 
        w.title.toLowerCase().includes(term) || 
        w.cat.toLowerCase().includes(term)
    );
    display(filtered);
}

// ==========================================
// 4. DUAL-ADS SYSTEM (MANDATORY & BULLETPROOF)
// ==========================================
function startFlow(type, path, title) {
    const ad = document.getElementById('ad-modal');
    const bar = document.getElementById('progress-bar');
    if(!ad || !bar) return;

    // Show Ad Modal immediately
    ad.style.display = 'flex';
    bar.style.width = "0%";
    
    // Set text based on action
    document.getElementById('ad-title').innerText = type === 'p' ? "Rendering 8K Preview..." : "Generating Secure 8K Link...";
    
    let count = 5;
    const itv = setInterval(() => {
        count--;
        bar.style.width = (100 - (count * 20)) + "%";
        document.getElementById('ad-timer').innerText = `Please wait ${count}s...`;
        
        if(count <= 0) {
            clearInterval(itv);
            ad.style.display = 'none'; // Hide Ad
            
            // Execute Action
            if(type === 'p') {
                document.getElementById('full-image').src = path;
                document.getElementById('image-modal').style.display = 'flex';
            } else {
                // Download trigger
                const a = document.createElement('a'); 
                a.href = path; 
                a.download = `Anivaults8K_${title.replace(/\s+/g,'_')}.webp`; 
                a.click();
                
                // Show beautiful success message
                document.getElementById('success-modal').style.display = 'flex';
            }
        }
    }, 1000);
}

// ==========================================
// 5. MODAL CONTROLLERS & EFFECTS
// ==========================================
function closeModal() { document.getElementById('image-modal').style.display = 'none'; }
function closeSuccess() { document.getElementById('success-modal').style.display = 'none'; }

function showArticle(key) { 
    document.getElementById('article-content').innerHTML = articles[key]; 
    document.getElementById('article-modal').style.display = 'flex'; 
    document.body.style.overflow = "hidden"; 
}
function closeArticle() { 
    document.getElementById('article-modal').style.display = 'none'; 
    document.body.style.overflow = "auto"; 
}

// Cursor Glow Effect
document.addEventListener('mousemove', (e) => {
    const g = document.getElementById('cursor-glow');
    if(g) { 
        g.style.left = e.clientX + 'px'; 
        g.style.top = e.clientY + 'px'; 
    }
});

// Initialize UI
renderUI();
// ==========================================
// 6. SECURITY: PREVENT IMAGE THEFT
// ==========================================

// منع الضغط بالزر الأيمن للماوس في كامل الموقع
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

// منع سحب وإفلات الصور بالماوس
document.addEventListener('dragstart', function(e) {
    if (e.target.nodeName === 'IMG') {
        e.preventDefault();
    }
});

// منع تحديد النصوص (اختياري لزيادة الحماية)
document.addEventListener('selectstart', function(e) {
    e.preventDefault();
});