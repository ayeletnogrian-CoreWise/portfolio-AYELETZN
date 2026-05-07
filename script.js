'use strict';

/* ============================================================
   TRANSLATIONS
   data-i18n  → el.textContent
   data-i18n-html → el.innerHTML
   ============================================================ */
const translations = {
  en: {
    /* nav */
    'nav-about':     'About',
    'nav-education': 'Education',
    'nav-skills':    'Skills',
    'nav-tools':     'Tools',
    'nav-projects':  'Projects',
    'nav-contact':   'Contact',

    /* hero */
    'hero-label': 'People Operations & Project Management | Strategic L&D',
    'hero-cta':   'View My Projects',

    /* about */
    'section-about':  'Who Am I?',
    'stat-programs':  'Strategic Projects',
    'stat-degree':    'Organizational Development',
    'stat-data':      'End-to-End Execution',

    /* why portfolio */
    'section-why': 'Why I Built This Portfolio',

    /* education */
    'section-education':     'Education',
    'edu-tau-institution':   'Tel Aviv University',
    'edu-tau-degree':        'M.A. in Organizational Development & Change — Specialization in Global Management',
    'edu-tau-spec':          'Specialization: Global Management &amp; Organizational Change<br>Additional academic focus: Organizational Consulting, Group Facilitation, Labor Law coursework',
    'edu-tau-dates':         '2023 – 2025',
    'edu-ariel-institution': 'Ariel University',
    'edu-ariel-degree':      'B.A. in Psychology',
    'edu-ariel-dates':       '2020 – 2023',

    /* honors */
    'section-honors': 'Honors & Distinctions',
    'honor1-meta':    'Military Service Distinction',
    'honor1-title':   'Military Service Distinction — Leadership & Education Role, Southern Region',
    'honor1-desc':    'Recognized for excellence, responsibility, and leadership during military service. In addition to my operational role, I took ownership of the Education Officer responsibilities for the Southern Region, leading educational and training initiatives while managing two roles in parallel.',
    'honor2-meta':    'Military Recognition',
    'honor2-title':   'Outstanding Operations Officer — Swords of Iron War, Nahal Brigade',
    'honor2-desc':    'Recognized for outstanding performance as an Operations Officer during the Swords of Iron War in the Nahal Brigade. Led and managed the operations cell, demonstrated human-centered leadership under pressure, and built a smart Excel-based operations log to track, organize, and improve operational clarity and follow-up.',

    /* skills */
    'section-skills': 'Core Skills',
    'skill-ld':       'Learning & Development',
    'skill-od':       'Organizational Development',
    'skill-ai':       'AI Enablement',
    'skill-mgr':      'Manager Enablement',
    'skill-onboard':  'Onboarding',
    'skill-ops':      'People Operations',
    'skill-lms':      'LMS Administration',
    'skill-km':       'Knowledge Management',
    'skill-tna':      'Training Needs Analysis',
    'skill-fac':      'Facilitation',
    'skill-gfac':     'Group Facilitation',
    'skill-stake':    'Stakeholder Management',
    'skill-change':   'Change Enablement',
    'skill-global':   'Global Collaboration',
    'skill-kpi':      'KPI Measurement',
    'skill-dash':     'Dashboard Design',
    'skill-portal':   'Learning Portal Design',
    'skill-id':       'Instructional Design',
    'skill-cd':       'Content Development',
    'skill-pm':       'Project Management',
    'skill-rai':      'Responsible AI',
    'skill-prompt':   'Prompt Design',

    /* tools */
    'section-tools':  'Tools & Platforms',
    'tool-ppt-name':  'PowerPoint',
    'tool-ppt-desc':  'Facilitator decks, training presentations, learning materials, and manager enablement slides.',
    'tool-cv-name':   'Canva',
    'tool-cv-desc':   'Case study design, portfolio visuals, visual storytelling, learning assets, and branded templates.',
    'tool-xl-name':   'Excel',
    'tool-xl-desc':   'KPI dashboards, learning impact measurement, adoption tracking, data summaries, and reporting.',
    'tool-fg-name':   'Figma',
    'tool-fg-desc':   'Learning portal mockups, LMS screens, dashboard interfaces, and user experience design.',
    'tool-nt-name':   'Notion',
    'tool-nt-desc':   'Project management boards, task tracking, timelines, milestones, risk logs, and structured documentation.',
    'tool-vs-name':   'VS Code',
    'tool-vs-desc':   'Portfolio website development, digital knowledge portals, and enablement architecture.',
    'tool-ai-name':   'AI Tools',
    'tool-ai-desc':   'Prompt design, AI enablement materials, content structuring, workflow templates, and adoption support.',
    'tool-gh-name':   'GitHub',
    'tool-gh-desc':   'Portfolio website, project documentation, file organization, and project presentation.',

    /* projects section */
    'section-projects': 'Portfolio Projects',
    'projects-note':    'Four end-to-end strategic projects — from academic research to practical HR, L&D, and People Operations solutions, built and measured for real organizational impact.',

    /* project 04 (displayed first) */
    'p04-category': 'PM | Global HR | People Operations',
    'p04-title':    'Global Communication Infrastructure & Conflict Resolution',
    'p04-kpi1':     '-28% conflict resolution time',
    'p04-kpi2':     '+45% manager confidence',
    'p04-kpi3':     'CLEAR Model',
    'p04-value':    'Translating academic research into a practical managerial toolkit for distributed global teams.',

    /* project 01 (displayed second) */
    'p01-category': 'PM | AI Implementation | Change Management',
    'p01-title':    'AI Implementation & Operational Adoption',
    'p01-kpi1':     '86% completion rate',
    'p01-kpi2':     'Confidence 2.4 → 4.1',
    'p01-kpi3':     '+68% weekly usage',
    'p01-value':    'Building AI confidence through structured enablement — turning AI from a threatening tool into a daily work method.',

    /* project 02 (displayed third) */
    'p02-category': 'PM | People Operations | HR',
    'p02-title':    'CSM Readiness & Time-to-Productivity Project',
    'p02-kpi1':     '91% completion rate',
    'p02-kpi2':     '-32% repeat questions',
    'p02-kpi3':     'Reduced ramp-up time',
    'p02-value':    'Structured onboarding journey reducing ramp-up time and improving employee retention from day one.',

    /* project 03 (displayed fourth) */
    'p03-category': 'PM | Transformation | Change Management',
    'p03-title':    'Strategic Transformation Execution',
    'p03-kpi1':     'Clarity 2.9 → 4.2',
    'p03-kpi2':     'Confidence 3.0 → 4.3',
    'p03-kpi3':     '5-week program',
    'p03-value':    '5-week change enablement program bridging executive strategy and frontline adoption.',

    /* shared card labels */
    'card-academic-label': 'Conceptual Case Study | M.A.-Based Project',
    'snapshot-label':      'Management Case Study Snapshot',
    'snapshot-open':       'Open Full Story',
    'read-more':           'Read More',
    'read-less':           'Collapse',

    /* primary action buttons */
    'btn-project-story': 'Full Project Story',
    'btn-pm-docs':       'Project Management Documentation & Data',
    'btn-view-portal':   'View Learning Portal',

    /* pm docs description */
    'pm-docs-desc': 'Task breakdown, roadmap, milestones, responsibilities, risks, execution tracking and data-based project management.',

    /* pm roadmap */
    'roadmap-label': 'The PM Roadmap',
    'roadmap-step1': 'Diagnosis',
    'roadmap-step2': 'Planning',
    'roadmap-step3': 'Stakeholder Alignment',
    'roadmap-step4': 'Build',
    'roadmap-step5': 'Measurement',

    /* asset buttons */
    'btn-case-study':   'Case Study',
    'btn-facilitator':  'Facilitator Deck',
    'btn-dashboard':    'Dashboard',
    'btn-content-pack': 'Content Pack',

    /* contact */
    'section-contact':        'Get in Touch',
    'contact-linkedin-label': 'LinkedIn Profile',

    /* footer */
    'footer-text': '© 2026 Ayelet Nogrian · Strategic HR, L&D & People Operations',
  },

  /* ==================== HEBREW ==================== */
  he: {
    /* nav */
    'nav-about':     'אודות',
    'nav-education': 'השכלה',
    'nav-skills':    'מיומנויות',
    'nav-tools':     'כלים',
    'nav-projects':  'פרויקטים',
    'nav-contact':   'יצירת קשר',

    /* hero */
    'hero-label': 'People Operations & Project Management | Strategic L&D',
    'hero-cta':   'צפו בפרויקטים שלי',

    /* about */
    'section-about':  'מי אני?',
    'stat-programs':  'פרויקטים אסטרטגיים',
    'stat-degree':    'פיתוח ארגוני',
    'stat-data':      'ביצוע מקצה לקצה',

    /* why portfolio */
    'section-why': 'למה בניתי את תיק העבודות הזה?',

    /* education */
    'section-education':     'השכלה',
    'edu-tau-institution':   'אוניברסיטת תל אביב',
    'edu-tau-degree':        'M.A. בפיתוח ושינוי ארגוני — התמחות בניהול גלובלי',
    'edu-tau-spec':          'התמחות: ניהול גלובלי ושינוי ארגוני<br>מיקוד אקדמי נוסף: ייעוץ ארגוני, הנחיית קבוצות ודיני עבודה',
    'edu-tau-dates':         '2023 – 2025',
    'edu-ariel-institution': 'אוניברסיטת אריאל',
    'edu-ariel-degree':      'תואר ראשון בפסיכולוגיה',
    'edu-ariel-dates':       '2020 – 2023',

    /* honors */
    'section-honors': 'הצטיינויות והוקרה',
    'honor1-meta':    'הצטיינות בשירות הצבאי',
    'honor1-title':   'הצטיינות בשירות הצבאי — הובלה ותיק חינוך, מרחב דרום',
    'honor1-desc':    'הוקרה על תפקוד מצטיין, אחריות, הובלה ומצוינות במהלך השירות הצבאי. בנוסף לתפקידי המבצעי, לקחתי אחריות על תיק החינוך במרחב דרום, הובלתי יוזמות חינוך והדרכה, וניהלתי שני תחומי אחריות במקביל.',
    'honor2-meta':    'הוקרה צבאית',
    'honor2-title':   'קצינת מבצעים מצטיינת — מלחמת חרבות ברזל, חטיבת הנח״ל',
    'honor2-desc':    'הוקרה על תפקוד מצטיין כקצינת מבצעים במהלך מלחמת חרבות ברזל בחטיבת הנח״ל. ניהלתי והובלתי את תא המבצעים, הפגנתי מנהיגות אנושית תחת לחץ, ובניתי יומן מבצעים חכם באקסל לצורך מעקב, סדר, תיעוד ושיפור הבהירות המבצעית.',

    /* skills */
    'section-skills': 'מיומנויות מרכזיות',
    'skill-ld':       'למידה ופיתוח',
    'skill-od':       'פיתוח ארגוני',
    'skill-ai':       'הטמעת AI',
    'skill-mgr':      'פיתוח והעצמת מנהלים',
    'skill-onboard':  'אונבורדינג',
    'skill-ops':      'People Operations',
    'skill-lms':      'ניהול LMS',
    'skill-km':       'ניהול ידע',
    'skill-tna':      'ניתוח צורכי למידה',
    'skill-fac':      'הנחיה',
    'skill-gfac':     'הנחיית קבוצות',
    'skill-stake':    'עבודה מול בעלי עניין',
    'skill-change':   'הטמעת שינוי',
    'skill-global':   'שיתוף פעולה גלובלי',
    'skill-kpi':      'מדידת KPI',
    'skill-dash':     'עיצוב דשבורדים',
    'skill-portal':   'עיצוב פורטלי למידה',
    'skill-id':       'עיצוב למידה',
    'skill-cd':       'פיתוח תוכן',
    'skill-pm':       'ניהול פרויקטים',
    'skill-rai':      'שימוש אחראי ב־AI',
    'skill-prompt':   'עיצוב פרומפטים',

    /* tools */
    'section-tools':  'כלים ופלטפורמות',
    'tool-ppt-name':  'PowerPoint',
    'tool-ppt-desc':  'בניית מצגות הדרכה, Facilitator Decks, חומרי למידה ומצגות לפיתוח מנהלים.',
    'tool-cv-name':   'Canva',
    'tool-cv-desc':   'עיצוב Case Studies, נכסי למידה, תבניות ממותגות וסטוריטלינג ויזואלי.',
    'tool-xl-name':   'Excel',
    'tool-xl-desc':   'בניית דשבורדים, מדידת KPI, מעקב אימוץ, ניתוח נתונים ודוחות למידה.',
    'tool-fg-name':   'Figma',
    'tool-fg-desc':   'עיצוב מוקאפ לפורטלי למידה, מסכי LMS, ממשקי דשבורד וחוויית משתמש.',
    'tool-nt-name':   'Notion',
    'tool-nt-desc':   'לוחות ניהול פרויקטים, מעקב משימות, לוחות זמנים, אבני דרך, יומן סיכונים ותיעוד מובנה.',
    'tool-vs-name':   'VS Code',
    'tool-vs-desc':   'פיתוח אתר תיק העבודות, פורטלי ידע דיגיטליים ותשתית Enablement.',
    'tool-ai-name':   'כלי AI',
    'tool-ai-desc':   'עיצוב פרומפטים, בניית חומרי הטמעת AI, ארגון תוכן, תבניות עבודה ותהליכי אימוץ.',
    'tool-gh-name':   'GitHub',
    'tool-gh-desc':   'הצגת תיק עבודות, תיעוד פרויקטים, ארגון קבצים ובניית אתר פורטפוליו.',

    /* projects section */
    'section-projects': 'פרויקטים',
    'projects-note':    'ארבעה פרויקטים אסטרטגיים מקצה לקצה — ממחקר אקדמי לפתרונות HR, למידה ו-People Operations מעשיים, עם מדידת אימפקט ארגוני אמיתי.',

    /* project 04 (displayed first) */
    'p04-category': 'PM | HR גלובלי | People Operations',
    'p04-title':    'תשתית תקשורת גלובלית ופתרון קונפליקטים',
    'p04-kpi1':     'צמצום 28% בזמן פתרון',
    'p04-kpi2':     'עלייה 45% בביטחון מנהלים',
    'p04-kpi3':     'מודל CLEAR',
    'p04-value':    'תרגום מחקר אקדמי לכלים ניהוליים פרקטיים לצוותים מבוזרים גלובלית.',

    /* project 01 (displayed second) */
    'p01-category': 'PM | הטמעת AI | ניהול שינוי',
    'p01-title':    'ניהול הטמעה ואימוץ תפעולי של AI',
    'p01-kpi1':     '86% השלמה',
    'p01-kpi2':     'ביטחון 2.4 → 4.1',
    'p01-kpi3':     'צמיחה 68% בשימוש שבועי',
    'p01-value':    'בניית תשתית AI Enablement שהופכת AI מכלי מאיים לשיטת עבודה יומיומית.',

    /* project 02 (displayed third) */
    'p02-category': 'PM | People Operations | HR',
    'p02-title':    'פרויקט מוכנות עובדים וקיצור זמן הכשרה CSM',
    'p02-kpi1':     '91% השלמה',
    'p02-kpi2':     'צמצום 32% שאלות חוזרות',
    'p02-kpi3':     'קיצור זמן Ramp-up',
    'p02-value':    'מסלול קליטה מובנה שמקצר זמן Ramp-up ומשפר שימור עובדים מהיום הראשון.',

    /* project 03 (displayed fourth) */
    'p03-category': 'PM | טרנספורמציה | ניהול שינוי',
    'p03-title':    'הוצאה לפועל של טרנספורמציה אסטרטגית',
    'p03-kpi1':     'בהירות 2.9 → 4.2',
    'p03-kpi2':     'ביטחון 3.0 → 4.3',
    'p03-kpi3':     'תוכנית 5 שבועות',
    'p03-value':    'תוכנית 5 שבועות לגישור בין אסטרטגיה ניהולית לאימוץ בשטח.',

    /* shared card labels */
    'card-academic-label': 'מקרה בוחן קונספטואלי | מבוסס מחקר אקדמי במסגרת M.A',
    'snapshot-label':      'תקציר מקרה בוחן ניהולי',
    'snapshot-open':       'לצפייה במצגת התהליך המלאה',
    'read-more':           'קראי עוד',
    'read-less':           'סגרי',

    /* primary action buttons */
    'btn-project-story': 'סיפור הפרויקט המלא',
    'btn-pm-docs':       'תיעוד ניהול פרויקט ודאטה',
    'btn-view-portal':   'לצפייה בפורטל הלמידה',

    /* pm docs description */
    'pm-docs-desc': 'פירוק למשימות, Roadmap, אבני דרך, תחומי אחריות, סיכונים, מעקב ביצוע וניהול פרויקט מבוסס דאטה.',

    /* pm roadmap */
    'roadmap-label': 'ציר הזמן הניהולי',
    'roadmap-step1': 'אבחון',
    'roadmap-step2': 'תכנון',
    'roadmap-step3': 'גיוס שותפים',
    'roadmap-step4': 'בנייה',
    'roadmap-step5': 'מדידה',

    /* asset buttons */
    'btn-case-study':   'תיאור מקרה',
    'btn-facilitator':  'מצגת הדרכה',
    'btn-dashboard':    'דשבורד',
    'btn-content-pack': 'חבילת תוכן',

    /* contact */
    'section-contact':        'יצירת קשר',
    'contact-linkedin-label': 'פרופיל לינקדאין',

    /* footer */
    'footer-text': '© 2026 איילת נוגריאן · HR אסטרטגי, למידה ופיתוח ואנשים',
  }
};

/* ============================================================
   APPLY LANGUAGE
   ============================================================ */
function setLang(lang) {
  const html = document.documentElement;
  html.setAttribute('lang', lang);
  html.setAttribute('dir', lang === 'he' ? 'rtl' : 'ltr');

  const t = translations[lang];

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    const isActive = btn.dataset.lang === lang;
    btn.classList.toggle('lang-btn--active', isActive);
    btn.setAttribute('aria-pressed', isActive);
  });

  try { localStorage.setItem('portfolio-lang', lang); } catch (_) {}
}

/* ============================================================
   EXPAND / COLLAPSE (Read More)
   ============================================================ */
function initExpandable() {
  document.querySelectorAll('.read-more-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      const panel    = document.getElementById(targetId);
      if (!panel) return;

      const isOpen = panel.classList.contains('is-open');
      panel.classList.toggle('is-open', !isOpen);
      btn.classList.toggle('is-open', !isOpen);
      btn.setAttribute('aria-expanded', String(!isOpen));
      panel.setAttribute('aria-hidden', String(isOpen));
    });
  });
}

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  /* Mobile nav */
  const navToggle = document.getElementById('navToggle');
  const navLinks  = document.getElementById('navLinks');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
    navLinks.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => navLinks.classList.remove('open'))
    );
  }

  /* Navbar scroll shadow */
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 10);
  });

  /* Language buttons */
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });

  /* Read More expand/collapse */
  initExpandable();

  /* Restore saved language, default EN */
  let saved = 'en';
  try { saved = localStorage.getItem('portfolio-lang') || 'en'; } catch (_) {}
  setLang(saved);
});
