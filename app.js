document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", event => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

const translations = {
  en: {
    nav_about: "About",
    nav_telegram: "Telegram",
    nav_blog: "Blog",
    header_cta: "Telegram",
    hero_prefix: "I build",
    hero_subtitle: "From concept to launch.",
    hero_cta_primary: "@arxixx",
    hero_cta_secondary: "Telegram Blog",
    about_title_1: "Simple process.",
    about_title_2: "Real results.",
    about_desc: "Built for results, not noise.",
    about_contact_telegram: "Telegram",
    about_contact_blog: "Blog",
    about_contact_open: "Open",
    about_contact_spam: "Spam restrictions?",
    words: ["software", "sites", "bots", "apps", "systems"]
  },
  ru: {
    nav_about: "Обо мне",
    nav_telegram: "Телеграм",
    nav_blog: "Блог",
    header_cta: "Телеграм",
    hero_prefix: "Я создаю",
    hero_subtitle: "От идеи до запуска.",
    hero_cta_primary: "@arxixx",
    hero_cta_secondary: "Telegram блог",
    about_title_1: "Простой процесс.",
    about_title_2: "Реальный результат.",
    about_desc: "Фокус на результате, без шума.",
    about_contact_telegram: "Телеграм",
    about_contact_blog: "Блог",
    about_contact_open: "Открыть",
    about_contact_spam: "Spam restrictions?",
    words: ["софт", "сайты", "боты", "приложения", "системы"]
  },
  es: {
    nav_about: "Sobre mi",
    nav_telegram: "Telegram",
    nav_blog: "Blog",
    header_cta: "Telegram",
    hero_prefix: "Construyo",
    hero_subtitle: "De la idea al lanzamiento.",
    hero_cta_primary: "@arxixx",
    hero_cta_secondary: "Blog de Telegram",
    about_title_1: "Proceso simple.",
    about_title_2: "Resultados reales.",
    about_desc: "Hecho para resultados, sin ruido.",
    about_contact_telegram: "Telegram",
    about_contact_blog: "Blog",
    about_contact_open: "Abrir",
    about_contact_spam: "Restricciones de spam?",
    words: ["software", "sitios", "bots", "apps", "sistemas"]
  },
  de: {
    nav_about: "Uber mich",
    nav_telegram: "Telegram",
    nav_blog: "Blog",
    header_cta: "Telegram",
    hero_prefix: "Ich entwickle",
    hero_subtitle: "Von der Idee bis zum Launch.",
    hero_cta_primary: "@arxixx",
    hero_cta_secondary: "Telegram Blog",
    about_title_1: "Einfacher Prozess.",
    about_title_2: "Echte Ergebnisse.",
    about_desc: "Gebaut fur Resultate, ohne Larm.",
    about_contact_telegram: "Telegram",
    about_contact_blog: "Blog",
    about_contact_open: "Offnen",
    about_contact_spam: "Spam-Einschrankungen?",
    words: ["software", "websites", "bots", "apps", "systeme"]
  },
  fr: {
    nav_about: "A propos",
    nav_telegram: "Telegram",
    nav_blog: "Blog",
    header_cta: "Telegram",
    hero_prefix: "Je cree",
    hero_subtitle: "De l idea au lancement.",
    hero_cta_primary: "@arxixx",
    hero_cta_secondary: "Blog Telegram",
    about_title_1: "Processus simple.",
    about_title_2: "Resultats reels.",
    about_desc: "Concu pour les resultats, sans bruit.",
    about_contact_telegram: "Telegram",
    about_contact_blog: "Blog",
    about_contact_open: "Ouvrir",
    about_contact_spam: "Restrictions anti-spam ?",
    words: ["logiciels", "sites", "bots", "apps", "systemes"]
  },
  it: {
    nav_about: "Chi sono",
    nav_telegram: "Telegram",
    nav_blog: "Blog",
    header_cta: "Telegram",
    hero_prefix: "Creo",
    hero_subtitle: "Dall idea al lancio.",
    hero_cta_primary: "@arxixx",
    hero_cta_secondary: "Blog Telegram",
    about_title_1: "Processo semplice.",
    about_title_2: "Risultati reali.",
    about_desc: "Creato per risultati, senza rumore.",
    about_contact_telegram: "Telegram",
    about_contact_blog: "Blog",
    about_contact_open: "Apri",
    about_contact_spam: "Restrizioni spam?",
    words: ["software", "siti", "bot", "app", "sistemi"]
  },
  pt: {
    nav_about: "Sobre",
    nav_telegram: "Telegram",
    nav_blog: "Blog",
    header_cta: "Telegram",
    hero_prefix: "Eu construo",
    hero_subtitle: "Do conceito ao lancamento.",
    hero_cta_primary: "@arxixx",
    hero_cta_secondary: "Blog Telegram",
    about_title_1: "Processo simples.",
    about_title_2: "Resultados reais.",
    about_desc: "Feito para resultado, sem ruido.",
    about_contact_telegram: "Telegram",
    about_contact_blog: "Blog",
    about_contact_open: "Abrir",
    about_contact_spam: "Restricoes de spam?",
    words: ["software", "sites", "bots", "apps", "sistemas"]
  },
  tr: {
    nav_about: "Hakkinda",
    nav_telegram: "Telegram",
    nav_blog: "Blog",
    header_cta: "Telegram",
    hero_prefix: "Ben gelistiriyorum",
    hero_subtitle: "Fikirden yayina.",
    hero_cta_primary: "@arxixx",
    hero_cta_secondary: "Telegram Blog",
    about_title_1: "Basit surec.",
    about_title_2: "Gercek sonuclar.",
    about_desc: "Sonuc icin, gereksiz gurultu olmadan.",
    about_contact_telegram: "Telegram",
    about_contact_blog: "Blog",
    about_contact_open: "Ac",
    about_contact_spam: "Spam kisitlamalari?",
    words: ["yazilim", "siteler", "botlar", "uygulamalar", "sistemler"]
  },
  ar: {
    nav_about: "من أنا",
    nav_telegram: "تيليجرام",
    nav_blog: "المدونة",
    header_cta: "تيليجرام",
    hero_prefix: "أنا أبني",
    hero_subtitle: "من الفكرة إلى الإطلاق.",
    hero_cta_primary: "@arxixx",
    hero_cta_secondary: "مدونة تيليجرام",
    about_title_1: "عملية بسيطة.",
    about_title_2: "نتائج حقيقية.",
    about_desc: "مصمم للنتائج، دون ضوضاء.",
    about_contact_telegram: "تيليجرام",
    about_contact_blog: "المدونة",
    about_contact_open: "فتح",
    about_contact_spam: "قيود الرسائل المزعجة؟",
    words: ["برمجيات", "مواقع", "بوتات", "تطبيقات", "أنظمة"]
  },
  hi: {
    nav_about: "मेरे बारे में",
    nav_telegram: "Telegram",
    nav_blog: "ब्लॉग",
    header_cta: "Telegram",
    hero_prefix: "मैं बनाता हूं",
    hero_subtitle: "आइडिया से लॉन्च तक।",
    hero_cta_primary: "@arxixx",
    hero_cta_secondary: "Telegram ब्लॉग",
    about_title_1: "सरल प्रक्रिया।",
    about_title_2: "वास्तविक परिणाम।",
    about_desc: "परिणाम के लिए बनाया गया, शोर के लिए नहीं।",
    about_contact_telegram: "Telegram",
    about_contact_blog: "ब्लॉग",
    about_contact_open: "खोलें",
    about_contact_spam: "स्पैम प्रतिबंध?",
    words: ["सॉफ्टवेयर", "साइटें", "बॉट्स", "ऐप्स", "सिस्टम"]
  },
  zh: {
    nav_about: "关于",
    nav_telegram: "Telegram",
    nav_blog: "博客",
    header_cta: "Telegram",
    hero_prefix: "我打造",
    hero_subtitle: "从概念到上线。",
    hero_cta_primary: "@arxixx",
    hero_cta_secondary: "Telegram 博客",
    about_title_1: "流程简单。",
    about_title_2: "结果真实。",
    about_desc: "以结果为导向，不做噪音。",
    about_contact_telegram: "Telegram",
    about_contact_blog: "博客",
    about_contact_open: "打开",
    about_contact_spam: "垃圾信息限制？",
    words: ["软件", "网站", "机器人", "应用", "系统"]
  },
  ja: {
    nav_about: "概要",
    nav_telegram: "Telegram",
    nav_blog: "ブログ",
    header_cta: "Telegram",
    hero_prefix: "私は作る",
    hero_subtitle: "アイデアから公開まで。",
    hero_cta_primary: "@arxixx",
    hero_cta_secondary: "Telegram ブログ",
    about_title_1: "シンプルな進行。",
    about_title_2: "確かな成果。",
    about_desc: "ノイズではなく成果のために。",
    about_contact_telegram: "Telegram",
    about_contact_blog: "ブログ",
    about_contact_open: "開く",
    about_contact_spam: "スパム制限？",
    words: ["ソフトウェア", "サイト", "ボット", "アプリ", "システム"]
  },
  ko: {
    nav_about: "소개",
    nav_telegram: "Telegram",
    nav_blog: "블로그",
    header_cta: "Telegram",
    hero_prefix: "저는 만듭니다",
    hero_subtitle: "아이디어에서 출시까지.",
    hero_cta_primary: "@arxixx",
    hero_cta_secondary: "Telegram 블로그",
    about_title_1: "간단한 프로세스.",
    about_title_2: "실제 결과.",
    about_desc: "잡음이 아닌 결과를 위해 만듭니다.",
    about_contact_telegram: "Telegram",
    about_contact_blog: "블로그",
    about_contact_open: "열기",
    about_contact_spam: "스팸 제한?",
    words: ["소프트웨어", "사이트", "봇", "앱", "시스템"]
  },
  kk: {
    nav_about: "Мен туралы",
    nav_telegram: "Telegram",
    nav_blog: "Блог",
    header_cta: "Telegram",
    hero_prefix: "Мен жасаймын",
    hero_subtitle: "Идеядан іске қосуға дейін.",
    hero_cta_primary: "@arxixx",
    hero_cta_secondary: "Telegram блогы",
    about_title_1: "Қарапайым процесс.",
    about_title_2: "Нақты нәтиже.",
    about_desc: "Шусыз, нәтижеге бағытталған.",
    about_contact_telegram: "Telegram",
    about_contact_blog: "Блог",
    about_contact_open: "Ашу",
    about_contact_spam: "Спам шектеулері?",
    words: ["бағдарлама", "сайттар", "боттар", "қосымшалар", "жүйелер"]
  },
  uk: {
    nav_about: "Про мене",
    nav_telegram: "Telegram",
    nav_blog: "Блог",
    header_cta: "Telegram",
    hero_prefix: "Я створюю",
    hero_subtitle: "Від ідеї до запуску.",
    hero_cta_primary: "@arxixx",
    hero_cta_secondary: "Telegram блог",
    about_title_1: "Простий процес.",
    about_title_2: "Реальні результати.",
    about_desc: "Сфокусовано на результаті, без шуму.",
    about_contact_telegram: "Telegram",
    about_contact_blog: "Блог",
    about_contact_open: "Відкрити",
    about_contact_spam: "Обмеження спаму?",
    words: ["софт", "сайти", "боти", "додатки", "системи"]
  },
  uz: {
    nav_about: "Men haqimda",
    nav_telegram: "Telegram",
    nav_blog: "Blog",
    header_cta: "Telegram",
    hero_prefix: "Men yarataman",
    hero_subtitle: "G'oyadan ishga tushirishgacha.",
    hero_cta_primary: "@arxixx",
    hero_cta_secondary: "Telegram blog",
    about_title_1: "Oddiy jarayon.",
    about_title_2: "Haqiqiy natijalar.",
    about_desc: "Shovqinsiz, natijaga yo'naltirilgan.",
    about_contact_telegram: "Telegram",
    about_contact_blog: "Blog",
    about_contact_open: "Ochish",
    about_contact_spam: "Spam cheklovlari?",
    words: ["dasturiy ta'minot", "saytlar", "botlar", "ilovalar", "tizimlar"]
  },
  pl: {
    nav_about: "O mnie",
    nav_telegram: "Telegram",
    nav_blog: "Blog",
    header_cta: "Telegram",
    hero_prefix: "Tworze",
    hero_subtitle: "Od pomyslu do startu.",
    hero_cta_primary: "@arxixx",
    hero_cta_secondary: "Blog Telegram",
    about_title_1: "Prosty proces.",
    about_title_2: "Realne wyniki.",
    about_desc: "Nastawione na efekt, bez szumu.",
    about_contact_telegram: "Telegram",
    about_contact_blog: "Blog",
    about_contact_open: "Otworz",
    about_contact_spam: "Ograniczenia spamu?",
    words: ["oprogramowanie", "strony", "boty", "aplikacje", "systemy"]
  }
};

const typedWordElement = document.getElementById("typed-word");
const langSelect = document.getElementById("lang-select");

let activeWords = translations.en.words;
let wordIndex = 0;
let charIndex = activeWords[0].length;
let isDeleting = false;

function applyLanguage(lang) {
  const locale = translations[lang] || translations.en;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach(node => {
    const key = node.getAttribute("data-i18n");
    if (locale[key]) node.textContent = locale[key];
  });

  activeWords = locale.words && locale.words.length ? locale.words : translations.en.words;
  wordIndex = 0;
  charIndex = activeWords[0].length;
  isDeleting = false;
  typedWordElement.textContent = activeWords[0];
}

function typeNextFrame() {
  const currentWord = activeWords[wordIndex];

  if (isDeleting) {
    charIndex -= 1;
  } else {
    charIndex += 1;
  }

  typedWordElement.textContent = currentWord.slice(0, Math.max(0, charIndex));

  let delay = isDeleting ? 80 : 140;

  if (!isDeleting && charIndex >= currentWord.length) {
    isDeleting = true;
    delay = 1100;
  } else if (isDeleting && charIndex <= 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % activeWords.length;
    delay = 320;
  }

  setTimeout(typeNextFrame, delay);
}

const savedLang = localStorage.getItem("siteLang");

function detectDeviceLanguage() {
  const browserLocales = Array.isArray(navigator.languages) && navigator.languages.length
    ? navigator.languages
    : [navigator.language || "en"];

  for (const locale of browserLocales) {
    const normalized = String(locale).toLowerCase();
    const primary = normalized.split("-")[0];
    if (translations[primary]) return primary;
  }

  return "en";
}

const deviceLang = detectDeviceLanguage();
const initialLang = translations[savedLang] ? savedLang : deviceLang;

langSelect.value = initialLang;
applyLanguage(initialLang);

langSelect.addEventListener("change", event => {
  const nextLang = event.target.value;
  applyLanguage(nextLang);
  localStorage.setItem("siteLang", nextLang);
});

setTimeout(() => {
  isDeleting = true;
  typeNextFrame();
}, 1100);
