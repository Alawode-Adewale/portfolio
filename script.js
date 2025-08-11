// Language translations
const translations = {
  en: {
    welcome: "Welcome",
    projects: "Projects",
    contact: "Contact",
    welcomeHeading: "Hello, I'm Alawode Adewale Afeez",
    welcomeText: "I build accessible, responsive, and multilingual websites with strong design and branding skills.",
    contactText: "You can reach me through the following:"
  },
  fr: {
    welcome: "Bienvenue",
    projects: "Projets",
    contact: "Contact",
    welcomeHeading: "Bonjour, je suis Alawode Adewale Afeez",
    welcomeText: "Je crée des sites Web accessibles, réactifs et multilingues avec de solides compétences en design et image de marque.",
    contactText: "Vous pouvez me contacter via :"
  },
  es: {
    welcome: "Bienvenido",
    projects: "Proyectos",
    contact: "Contacto",
    welcomeHeading: "Hola, soy Alawode Adewale Afeez",
    welcomeText: "Construyo sitios web accesibles, receptivos y multilingües con fuertes habilidades de diseño e identidad de marca.",
    contactText: "Puedes contactarme a través de:"
  },
  ar: {
    welcome: "مرحباً",
    projects: "المشاريع",
    contact: "اتصل",
    welcomeHeading: "مرحباً، أنا ألاوودي أدي والي عفيف",
    welcomeText: "أبني مواقع ويب متاحة، ومتجاوبة، ومتعددة اللغات بمهارات قوية في التصميم والهوية البصرية.",
    contactText: "يمكنك التواصل معي عبر:"
  }
};

// Handle language switching
document.getElementById("language").addEventListener("change", function () {
  const lang = this.value;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = translations[lang][key];
  });
});
