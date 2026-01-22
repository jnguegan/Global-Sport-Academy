/* Global Sport Academy - multilingual site (EN / FR / ES)
   - Language persists via localStorage
   - Elements use data-i18n="key"
*/

const I18N = {
  en: {
    brand_line: "Elite Football + Sport Science Education",
    tagline: "From Africa to the World",
    cta_enrol: "Enrol Now",
    cta_dual: "Dual Pathway",
    cta_donate: "Donate",
    cta_partner: "Become a Partner",
    cta_contact: "Contact",
    nav_home: "Home",
    nav_about: "About",
    nav_football: "Football",
    nav_education: "Education",
    nav_dual: "Dual Pathway",
    nav_admissions: "Admissions",
    nav_donations: "Donations",
    nav_partnerships: "Partnerships",
    nav_portal: "Parents Portal",
    nav_contact: "Contact",
    top_location: "Ngaoundéré • Adamaoua • Cameroon",
    top_school: "Based at Global Management School",

    home_kicker_a: "GLOBAL SPORT ACADEMY",
    home_kicker_b: "Dual Pathway Institute",
    home_h1: "Developing Africa’s Next Generation of Football Talent",
    home_lead:
      "Global Sport Academy (GSA) is a dual-pathway football and sport science institute based in Ngaoundéré, Cameroon, operating within the facilities of Global Management School. We develop boys and girls through elite football training and career-ready sport education.",
    home_card_mini: "What you will find at GSA",
    home_b1: "Elite football programs for boys and girls (6–19)",
    home_b2: "Sport science courses (16+) with real practical experience",
    home_b3: "Scholarships, donations, and partnerships to support talent",

    sec_about_title: "A Serious Pathway: Sport + Education",
    sec_about_text:
      "We believe football talent must be supported by education, discipline, and real career pathways. Our dual pathway model helps students reach elite performance while gaining valuable qualifications in sport sciences.",

    sec_programs_title: "Football Programs",
    sec_programs_sub: "Structured development for boys and girls across key age groups.",
    p1_title: "Grassroots (6–9)",
    p1_text: "Fun-based learning, coordination, discipline, and love of the game.",
    p2_title: "Foundation (10–12)",
    p2_text: "Technical development, game understanding, and physical literacy.",
    p3_title: "Youth Development (13–15)",
    p3_text: "Tactical awareness, performance training, and competitive exposure.",
    p4_title: "Elite Performance (16–19)",
    p4_text: "Professional-level preparation, match analysis, showcases and scouting pathways.",
    p5_title: "Girls Football Program",
    p5_text: "Dedicated pathway supporting girls’ development, confidence and elite performance.",

    sec_edu_title: "Education & Sport Sciences (16+)",
    sec_edu_sub:
      "Certified training delivered within Global Management School facilities, combining classroom learning with practical experience.",
    edu1: "Sports Physiotherapy (Assistant Level)",
    edu2: "Sports Massage Therapy",
    edu3: "Sports Nutrition & Performance",
    edu4: "Strength & Conditioning",
    edu5: "First Aid & Sports Safety",
    edu6: "Football Coaching (Youth Level)",

    sec_dual_title: "Dual Pathway Program",
    sec_dual_sub:
      "Football + Education = Real Futures. Even if a student does not become professional, they leave with recognised skills and employable qualifications.",

    sec_partners_title: "Partnerships & Collaborations",
    sec_partners_sub:
      "We work with local and international clubs, academies, NGOs, universities, scouts, and sponsors to create exposure and opportunities.",

    sec_donate_title: "Support a Child. Support a Dream.",
    sec_donate_sub:
      "Contribute financially or donate equipment to scholarships, education programs, and girls’ football development.",

    sec_enrol_title: "Start Your Journey",
    sec_enrol_sub:
      "Register your child, book a trial session, or enquire about the 16+ education programs.",

    foot_about:
      "Global Sport Academy (GSA) is a dual-pathway football and sport science institute based in Ngaoundéré, Cameroon, operating within Global Management School facilities.",
    foot_quick: "Quick Links",
    foot_contact: "Contact",
    foot_rights: "All rights reserved.",

    about_h1: "About Global Sport Academy",
    about_lead:
      "A dual-pathway institute delivering elite football training for boys and girls alongside certified sport science education programs.",

    football_h1: "Football Programs",
    football_lead:
      "Structured development programs from grassroots to elite performance, including a dedicated girls pathway.",

    education_h1: "Education & Sport Sciences",
    education_lead:
      "Career-ready programs for ages 16+ delivered in classrooms and through practical academy internships.",

    dual_h1: "Dual Pathway Program",
    dual_lead:
      "A complete pathway that combines elite football training with sport science education to create real futures.",

    admissions_h1: "Admissions & Registration",
    admissions_lead:
      "Join GSA through online registration, trials, and talent identification camps. Scholarships available.",

    donations_h1: "Donations & Scholarships",
    donations_lead:
      "Support scholarships, equipment, facilities, and education programs through financial or material donations.",

    partnerships_h1: "Partnerships",
    partnerships_lead:
      "Collaborate with GSA to create pathways, exposure, scholarships, and elite development opportunities.",

    portal_h1: "Parents Portal",
    portal_lead:
      "A secure portal for parents to manage subscriptions, payments, messages, and student documents (UI shell for launch).",

    contact_h1: "Contact",
    contact_lead:
      "Get in touch to enrol, partner with us, or support our programs."
  },

  fr: {
    brand_line: "Football d’élite + Formation en sciences du sport",
    tagline: "De l’Afrique au Monde",
    cta_enrol: "S’inscrire",
    cta_dual: "Double Parcours",
    cta_donate: "Faire un Don",
    cta_partner: "Devenir Partenaire",
    cta_contact: "Contact",
    nav_home: "Accueil",
    nav_about: "À propos",
    nav_football: "Football",
    nav_education: "Éducation",
    nav_dual: "Double Parcours",
    nav_admissions: "Admissions",
    nav_donations: "Dons",
    nav_partnerships: "Partenariats",
    nav_portal: "Espace Parents",
    nav_contact: "Contact",
    top_location: "Ngaoundéré • Adamaoua • Cameroun",
    top_school: "Au sein de Global Management School",

    home_kicker_a: "GLOBAL SPORT ACADEMY",
    home_kicker_b: "Institut Double Parcours",
    home_h1: "Former la prochaine génération de talents du football africain",
    home_lead:
      "Global Sport Academy (GSA) est un institut de football et de sciences du sport à double parcours basé à Ngaoundéré, au Cameroun, au sein de Global Management School. Nous développons les garçons et les filles grâce à un entraînement d’élite et une formation professionnelle.",
    home_card_mini: "Ce que vous trouverez à GSA",
    home_b1: "Programmes de football d’élite pour filles et garçons (6–19)",
    home_b2: "Formations en sciences du sport (16+) avec pratique réelle",
    home_b3: "Bourses, dons et partenariats pour soutenir les talents",

    sec_about_title: "Un parcours sérieux : Sport + Éducation",
    sec_about_text:
      "Nous croyons que le talent doit être soutenu par l’éducation, la discipline et de vraies perspectives. Notre modèle double parcours aide les étudiants à viser l’élite tout en obtenant des qualifications utiles.",

    sec_programs_title: "Programmes Football",
    sec_programs_sub: "Développement structuré pour filles et garçons par tranches d’âge.",
    p1_title: "Initiation (6–9)",
    p1_text: "Apprentissage ludique, coordination, discipline, plaisir du jeu.",
    p2_title: "Fondations (10–12)",
    p2_text: "Technique, compréhension du jeu, bases physiques.",
    p3_title: "Développement (13–15)",
    p3_text: "Tactique, performance, compétition et progression.",
    p4_title: "Élite (16–19)",
    p4_text: "Préparation niveau pro, analyse vidéo, showcases, exposition aux recruteurs.",
    p5_title: "Programme Féminin",
    p5_text: "Parcours dédié aux filles : confiance, performance et inclusion.",

    sec_edu_title: "Éducation & Sciences du Sport (16+)",
    sec_edu_sub:
      "Formations certifiantes au sein de Global Management School : cours + pratique en académie.",
    edu1: "Physiothérapie du sport (niveau assistant)",
    edu2: "Massage sportif",
    edu3: "Nutrition sportive & performance",
    edu4: "Préparation physique",
    edu5: "Premiers secours & sécurité",
    edu6: "Coaching football (niveau jeunes)",

    sec_dual_title: "Programme Double Parcours",
    sec_dual_sub:
      "Football + Éducation = un avenir réel. Même sans carrière pro, l’étudiant repart avec des compétences reconnues.",

    sec_partners_title: "Partenariats & Collaborations",
    sec_partners_sub:
      "Clubs locaux et internationaux, académies, ONG, universités, recruteurs et sponsors.",

    sec_donate_title: "Soutenez un enfant. Soutenez un rêve.",
    sec_donate_sub:
      "Don financier ou matériel : bourses, programmes éducatifs, football féminin.",

    sec_enrol_title: "Commencer le parcours",
    sec_enrol_sub:
      "Inscrivez votre enfant, réservez un essai, ou demandez les formations 16+.",

    foot_about:
      "Global Sport Academy (GSA) est un institut de football et de sciences du sport à double parcours basé à Ngaoundéré, au Cameroun, au sein de Global Management School.",
    foot_quick: "Liens rapides",
    foot_contact: "Contact",
    foot_rights: "Tous droits réservés.",

    about_h1: "À propos de Global Sport Academy",
    about_lead:
      "Institut double parcours : football d’élite pour filles et garçons + formations certifiantes en sciences du sport.",

    football_h1: "Programmes Football",
    football_lead:
      "Programmes structurés de l’initiation à l’élite, avec un parcours féminin dédié.",

    education_h1: "Éducation & Sciences du Sport",
    education_lead:
      "Formations professionnalisantes (16+) en salle et en stage pratique à l’académie.",

    dual_h1: "Programme Double Parcours",
    dual_lead:
      "Une voie complète combinant football d’élite et sciences du sport pour créer de vrais avenirs.",

    admissions_h1: "Admissions & Inscriptions",
    admissions_lead:
      "Rejoignez GSA via inscription en ligne, essais et détection. Bourses disponibles.",

    donations_h1: "Dons & Bourses",
    donations_lead:
      "Soutenez bourses, équipements, infrastructures et formations par don financier ou matériel.",

    partnerships_h1: "Partenariats",
    partnerships_lead:
      "Collaborez avec GSA pour créer des passerelles, de l’exposition, des bourses et des opportunités.",

    portal_h1: "Espace Parents",
    portal_lead:
      "Portail sécurisé : abonnements, paiements, messages, documents (interface de lancement).",

    contact_h1: "Contact",
    contact_lead:
      "Contactez-nous pour vous inscrire, devenir partenaire ou soutenir nos programmes."
  },

  es: {
    brand_line: "Fútbol de élite + Formación en ciencias del deporte",
    tagline: "De África al Mundo",
    cta_enrol: "Inscribirse",
    cta_dual: "Doble Vía",
    cta_donate: "Donar",
    cta_partner: "Ser Socio",
    cta_contact: "Contacto",
    nav_home: "Inicio",
    nav_about: "Sobre GSA",
    nav_football: "Fútbol",
    nav_education: "Educación",
    nav_dual: "Doble Vía",
    nav_admissions: "Admisiones",
    nav_donations: "Donaciones",
    nav_partnerships: "Alianzas",
    nav_portal: "Portal Padres",
    nav_contact: "Contacto",
    top_location: "Ngaoundéré • Adamaoua • Camerún",
    top_school: "En instalaciones de Global Management School",

    home_kicker_a: "GLOBAL SPORT ACADEMY",
    home_kicker_b: "Instituto Doble Vía",
    home_h1: "Desarrollando la próxima generación de talento futbolístico africano",
    home_lead:
      "Global Sport Academy (GSA) es un instituto de fútbol y ciencias del deporte de doble vía con sede en Ngaoundéré, Camerún, dentro de Global Management School. Formamos a chicos y chicas con entrenamiento de élite y educación profesional.",
    home_card_mini: "Qué encontrarás en GSA",
    home_b1: "Programas de fútbol de élite para chicos y chicas (6–19)",
    home_b2: "Cursos de ciencias del deporte (16+) con práctica real",
    home_b3: "Becas, donaciones y alianzas para apoyar el talento",

    sec_about_title: "Un camino serio: Deporte + Educación",
    sec_about_text:
      "Creemos que el talento debe apoyarse con educación, disciplina y salidas profesionales reales. Nuestro modelo de doble vía ayuda a alcanzar el alto rendimiento y obtener certificaciones útiles.",

    sec_programs_title: "Programas de Fútbol",
    sec_programs_sub: "Desarrollo estructurado para chicos y chicas por edades.",
    p1_title: "Base (6–9)",
    p1_text: "Aprendizaje divertido, coordinación, disciplina y amor por el juego.",
    p2_title: "Fundación (10–12)",
    p2_text: "Técnica, comprensión del juego y bases físicas.",
    p3_title: "Desarrollo (13–15)",
    p3_text: "Táctica, rendimiento, competición y progreso.",
    p4_title: "Élite (16–19)",
    p4_text: "Preparación nivel profesional, análisis, showcases y exposición a ojeadores.",
    p5_title: "Programa Femenino",
    p5_text: "Vía dedicada para niñas: inclusión, confianza y alto rendimiento.",

    sec_edu_title: "Educación y Ciencias del Deporte (16+)",
    sec_edu_sub:
      "Programas certificados en Global Management School: aula + práctica en la academia.",
    edu1: "Fisioterapia deportiva (nivel asistente)",
    edu2: "Masaje deportivo",
    edu3: "Nutrición deportiva y rendimiento",
    edu4: "Preparación física",
    edu5: "Primeros auxilios y seguridad",
    edu6: "Entrenador de fútbol (nivel juvenil)",

    sec_dual_title: "Programa de Doble Vía",
    sec_dual_sub:
      "Fútbol + Educación = Futuro real. Aunque no llegues a profesional, sales con habilidades y certificaciones.",

    sec_partners_title: "Alianzas y Colaboraciones",
    sec_partners_sub:
      "Clubes locales e internacionales, academias, ONG, universidades, ojeadores y patrocinadores.",

    sec_donate_title: "Apoya a un niño. Apoya un sueño.",
    sec_donate_sub:
      "Donación económica o material: becas, educación y fútbol femenino.",

    sec_enrol_title: "Empieza tu camino",
    sec_enrol_sub:
      "Inscribe a tu hijo/a, reserva una prueba o consulta los cursos 16+.",

    foot_about:
      "Global Sport Academy (GSA) es un instituto de doble vía de fútbol y ciencias del deporte en Ngaoundéré, Camerún, dentro de Global Management School.",
    foot_quick: "Enlaces",
    foot_contact: "Contacto",
    foot_rights: "Todos los derechos reservados.",

    about_h1: "Sobre Global Sport Academy",
    about_lead:
      "Instituto de doble vía: fútbol de élite para chicos y chicas + educación certificada en ciencias del deporte.",

    football_h1: "Programas de Fútbol",
    football_lead:
      "Programas estructurados desde base hasta élite, con vía femenina dedicada.",

    education_h1: "Educación y Ciencias del Deporte",
    education_lead:
      "Programas profesionales (16+) en aula y prácticas reales en la academia.",

    dual_h1: "Programa de Doble Vía",
    dual_lead:
      "Una vía completa que combina fútbol de élite con ciencias del deporte para crear futuros reales.",

    admissions_h1: "Admisiones e Inscripción",
    admissions_lead:
      "Únete a GSA por inscripción online, pruebas y detección. Becas disponibles.",

    donations_h1: "Donaciones y Becas",
    donations_lead:
      "Apoya becas, equipamiento, instalaciones y formación con donación económica o material.",

    partnerships_h1: "Alianzas",
    partnerships_lead:
      "Colabora con GSA para crear oportunidades, exposición, becas y desarrollo de élite.",

    portal_h1: "Portal de Padres",
    portal_lead:
      "Portal seguro: pagos, historial, mensajes y documentos (interfaz inicial).",

    contact_h1: "Contacto",
    contact_lead:
      "Contáctanos para inscribirte, colaborar o apoyar nuestros programas."
  }
};

const SUPPORTED = ["en","fr","es"];
const DEFAULT_LANG = "en";

function getLang(){
  const saved = localStorage.getItem("gsa_lang");
  if(saved && SUPPORTED.includes(saved)) return saved;
  const nav = (navigator.language || DEFAULT_LANG).slice(0,2).toLowerCase();
  return SUPPORTED.includes(nav) ? nav : DEFAULT_LANG;
}

function setLang(lang){
  const l = SUPPORTED.includes(lang) ? lang : DEFAULT_LANG;
  localStorage.setItem("gsa_lang", l);
  applyI18n(l);
  syncLangSelect(l);
}

function syncLangSelect(lang){
  const sel = document.getElementById("langSelect");
  if(sel) sel.value = lang;
}

function applyI18n(lang){
  const dict = I18N[lang] || I18N[DEFAULT_LANG];
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n");
    const val = dict[key];
    if(typeof val === "string"){
      el.textContent = val;
    }
  });
  document.documentElement.setAttribute("lang", lang);
}

function initNav(){
  const nav = document.querySelector(".nav");
  const btn = document.getElementById("mobileToggle");
  if(!nav || !btn) return;
  btn.addEventListener("click", ()=>{
    nav.classList.toggle("open");
  });
}

function initLang(){
  const sel = document.getElementById("langSelect");
  const lang = getLang();
  applyI18n(lang);
  syncLangSelect(lang);
  if(sel){
    sel.addEventListener("change", (e)=> setLang(e.target.value));
  }
}

document.addEventListener("DOMContentLoaded", ()=>{
  initNav();
  initLang();
});

