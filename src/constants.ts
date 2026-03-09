import { Language } from "./types";

export const TRANSLATIONS: Record<Language, any> = {
  ru: {
    nav: {
      home: 'Главная',
      about: 'Обо мне',
      approach: 'Метод',
      consultations: 'Встречи',
      articles: 'Размышления',
      contact: 'Контакты',
      portal: 'Кабинет',
    },
    hero: {
      title: 'Kirill Uvarov PSY',
      specialty: 'Психологические консультации',
      subtitle: 'Иногда бывает сложно разобраться в том, что происходит внутри. Спокойный разговор может помочь увидеть ситуацию яснее.',
      cta: 'Записаться на консультацию',
      secondary_cta: 'Подробнее',
    },
    footer: {
      disclaimer: 'Консультации носят психологический и коучинговый характер и не являются медицинской или психиатрической помощью.',
      note: 'Консультации проводятся исключительно на русском языке.',
      legal: 'Психолог-консультант',
    },
    common: {
      book: 'Записаться',
      login: 'Войти',
      logout: 'Выйти',
      back: 'Назад',
      more: 'Подробнее',
      send: 'Отправить',
    },
    home: {
      intro_title: 'О практике',
      intro_p1: 'Я верю, что за каждым внутренним конфликтом или чувством неопределенности скрывается важный личный смысл, ожидающий своего проявления.',
      intro_p2: 'Моя работа — создать условия, в которых этот смысл может быть услышан, осознан и интегрирован в вашу жизнь через спокойный и глубокий диалог.',
      areas_title: 'С какими вопросами можно обратиться',
      areas_subtitle: 'Темы, с которыми я работаю наиболее часто',
      how_it_works_title: 'Как проходят встречи',
      how_it_works_p: 'Мы встречаемся онлайн. Каждая сессия длится 50 минут и посвящена исследованию вашего внутреннего мира в безопасной и конфиденциальной обстановке.',
      about_preview_title: 'Обо мне',
      about_preview_p: 'Кирилл Уваров — психолог-консультант, работающий с вопросами самопонимания, эмоциональных состояний и жизненных изменений.',
      education_title: 'Образование и квалификация',
      pricing_title: 'Стоимость и формат',
      faq_title: 'Часто задаваемые вопросы',
      invite_title: 'Начало пути',
      invite_p: 'Первый шаг к пониманию себя начинается с готовности быть услышанным. Я приглашаю вас к первой ознакомительной встрече.',
      articles_title: 'Размышления',
      articles_subtitle: 'Заметки о психологии, внутреннем мире и поиске смыслов',
    },
    about: {
      title: 'Обо мне',
      subtitle: 'Психолог-консультант',
      bio_p1: 'Кирилл Уваров — психолог-консультант, работающий с вопросами самопонимания, эмоциональных состояний и жизненных изменений.',
      bio_p2: 'В своей работе он опирается на спокойный диалог, внимательное слушание и совместное исследование того, что происходит в жизни человека.',
      bio_p3: 'Консультации могут быть полезны, если вы переживаете тревогу, внутренний конфликт, усталость, сложности в отношениях или ощущение потери ориентиров.',
      bio_p4: 'Задача консультации — помочь лучше понять происходящее, увидеть ситуацию под новым углом и найти более устойчивые способы взаимодействия с собой и окружающим миром.',
      bio_p5: 'Кирилл также имеет многолетний опыт работы в театральной и творческой среде, что формирует особый интерес к вопросам личной идентичности, внутреннего выражения и психологической свободы.',
      bio_p6: 'Консультации проходят в формате уважительного и конфиденциального разговора.',
      competencies_title: 'Ключевые компетенции',
      competencies: [
        'Рефлексивный диалог',
        'Нарративный анализ',
        'Работа с идентичностью',
        'Эмоциональная интеграция',
        'Экзистенциальный поиск',
        'Творческое самовыражение'
      ]
    },
    approach: {
      title: 'Метод',
      subtitle: 'Я верю, что психологическая ясность достигается не через «исправление», а через честный и глубокий контакт с собой.',
      principles: [
        {
          title: 'Психологическая рефлексия',
          desc: 'Выход за рамки привычных реакций для понимания скрытых структур вашего опыта.'
        },
        {
          title: 'Эмоциональная интеграция',
          desc: 'Создание пространства для чувств, которые часто остаются незамеченными в повседневной суете.'
        },
        {
          title: 'Нарративный поиск',
          desc: 'Исследование историй, в которых мы живем, и того, как они определяют наше восприятие возможного.'
        },
        {
          title: 'Творческая перспектива',
          desc: 'Использование воображения для преодоления застоя и поиска новых путей развития.'
        }
      ],
      quote: '«Цель нашего диалога — перевести безмолвный язык вашей психики на ясный и значимый для вас язык смыслов»',
      footer_p: 'Мы выходим за рамки клинических ярлыков, чтобы исследовать человеческий опыт во всей его сложности.'
    },
    consultations: {
      title: 'Встречи',
      p: 'Сессии длятся 50 минут и проходят онлайн. Наш диалог строго конфиденциален и направлен на обретение вами личной ясности.',
      pricing_subtitle: 'Стоимость',
      pricing_note: '* Оплата возможна банковским переводом или онлайн.',
      expect_title: 'Что ожидать',
      expect_items: [
        'Безопасное, безоценочное пространство для открытого разговора.',
        'Глубокое слушание и вдумчивые вопросы.',
        'Исследование ваших мыслей, эмоций и жизненных сценариев.'
      ],
      booking_title: 'Записаться',
      select_date: 'Выберите дату',
      select_slot: 'Доступное время',
      confirm_title: 'Подтверждение записи',
      confirm_date: 'Дата',
      confirm_time: 'Время',
      confirm_duration: 'Длительность',
      confirm_total: 'Итого',
      confirm_note: 'Для завершения записи необходимо войти в систему. Вы будете перенаправлены на страницу входа.',
      success_title: 'Запись подтверждена',
      success_p: 'Благодарю за доверие. Подтверждение отправлено на вашу почту. Детали встречи доступны в личном кабинете.',
      go_to_portal: 'Перейти в кабинет'
    },
    legal: {
      privacy_title: 'Политика конфиденциальности',
      terms_title: 'Условия оказания услуг',
      disclaimer_title: 'Дисклеймер',
      disclaimer_p1: 'Консультации носят психологический и коучинговый характер и не являются медицинской или психиатрической помощью.',
      disclaimer_p2: 'Я не ставлю клинические диагнозы и не назначаю медикаменты.',
      disclaimer_p3: 'Если вы находитесь в кризисном состоянии, пожалуйста, немедленно обратитесь в службу экстренной помощи.'
    },
    pricing: {
      initial: 'Первичная консультация',
      individual: 'Индивидуальная сессия',
      online: 'Онлайн-консультация',
      duration: '50 минут',
      currency: '€',
    },
    faq: [
      {
        q: 'Нужно ли готовиться к первой встрече?',
        a: 'Специальной подготовки не требуется. Достаточно вашего желания исследовать беспокоящую тему. Мы начнем с того, что актуально для вас в данный момент.'
      },
      {
        q: 'На каком языке проходят консультации?',
        a: 'Консультации проводятся исключительно на русском языке.'
      },
      {
        q: 'Это конфиденциально?',
        a: 'Да, конфиденциальность — это фундаментальный принцип моей работы. Все, что обсуждается на сессиях, остается между нами.'
      },
      {
        q: 'Онлайн или офлайн?',
        a: 'Я провожу встречи онлайн через защищенные платформы.'
      },
      {
        q: 'Я не уверен(а), подходит ли мне такой формат — что делать?',
        a: 'Первая ознакомительная встреча как раз предназначена для того, чтобы мы могли познакомиться, обсудить ваш запрос и понять, насколько комфортно нам будет работать вместе.'
      },
      {
        q: 'Являются ли консультации медицинской помощью?',
        a: 'Нет. Мои консультации носят психологический характер и не являются медицинской или психиатрической помощью.'
      }
    ]
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      approach: 'Approach',
      consultations: 'Consultations',
      articles: 'Reflections',
      contact: 'Contact',
      portal: 'Client Portal',
    },
    hero: {
      title: 'Kirill Uvarov PSY',
      specialty: 'Psychological Consultations',
      subtitle: 'Sometimes it can be difficult to understand what is happening inside. A calm conversation can help see the situation more clearly.',
      cta: 'Book a consultation',
      secondary_cta: 'Learn more',
    },
    footer: {
      disclaimer: 'This practice provides psychological consultation and coaching. Services are not medical or psychiatric treatment.',
      note: 'Sessions are conducted in Russian only.',
      legal: 'Psychological Consultant',
    },
    common: {
      book: 'Book',
      login: 'Login',
      logout: 'Logout',
      back: 'Back',
      more: 'Discover more',
      send: 'Send',
    },
    home: {
      intro_title: 'The Practice',
      intro_p1: 'I believe that behind every internal conflict or sense of uncertainty lies a significant personal meaning waiting to be articulated.',
      intro_p2: 'My role is to facilitate a space where this meaning can be heard, understood, and integrated through a calm and profound therapeutic dialogue.',
      areas_title: 'Areas of Focus',
      areas_subtitle: 'Common themes we can explore together',
      how_it_works_title: 'How Consultations Work',
      how_it_works_p: 'Sessions are held online. Each 50-minute session is dedicated to exploring your inner world in a safe and confidential environment.',
      about_preview_title: 'About Kirill',
      about_preview_p: 'Kirill Uvarov is a psychological consultant working with questions of self-understanding, emotional states and life transitions.',
      education_title: 'Education & Qualifications',
      pricing_title: 'Pricing & Format',
      faq_title: 'Frequently Asked Questions',
      invite_title: 'Taking the First Step',
      invite_p: 'The journey toward self-understanding begins with the courage to be heard. I invite you to an initial consultation to explore our potential work together.',
      articles_title: 'Reflections',
      articles_subtitle: 'Notes on psychology, the inner world, and the search for meaning',
    },
    about: {
      title: 'About Me',
      subtitle: 'Psychological Consultant',
      bio_p1: 'Kirill Uvarov is a psychological consultant working with questions of self-understanding, emotional states and life transitions.',
      bio_p2: 'His work is based on calm dialogue, attentive listening and thoughtful exploration of the situations people find themselves in.',
      bio_p3: 'Consultations can be helpful if you are experiencing anxiety, internal conflict, emotional exhaustion, relationship difficulties or a sense of losing direction.',
      bio_p4: 'The aim of the consultation is to create space for reflection, understanding and the discovery of new perspectives.',
      bio_p5: 'Kirill also has extensive experience in the theatre and creative environment, which informs his interest in identity, personal expression and psychological freedom.',
      bio_p6: 'Sessions take place in a respectful and confidential conversational format.',
      competencies_title: 'Core Competencies',
      competencies: [
        'Reflective Dialogue',
        'Narrative Exploration',
        'Identity Analysis',
        'Emotional Integration',
        'Existential Inquiry',
        'Creative Expression'
      ]
    },
    approach: {
      title: 'The Method',
      subtitle: 'I believe that psychological clarity is achieved through a profound and honest engagement with one\'s inner world.',
      principles: [
        {
          title: 'Psychological Reflection',
          desc: 'Moving beyond immediate reactions to uncover the underlying structures of your experience.'
        },
        {
          title: 'Emotional Integration',
          desc: 'Creating a safe container for emotions that are often marginalized in daily life.'
        },
        {
          title: 'Narrative Inquiry',
          desc: 'Examining the stories we inhabit and how they shape our perception of what is possible.'
        },
        {
          title: 'Creative Perspective',
          desc: 'Utilizing imaginative thinking to transcend stagnation and discover new pathways.'
        }
      ],
      quote: '"The aim of our dialogue is to translate the silent language of your psyche into a clear and meaningful narrative."',
      footer_p: 'We move beyond clinical labels to explore the human experience in its full complexity.'
    },
    consultations: {
      title: 'Consultations',
      p: 'Sessions are 50 minutes long and are conducted online. Our dialogue is strictly confidential.',
      pricing_subtitle: 'Pricing',
      pricing_note: '* Payments can be made via bank transfer or online.',
      expect_title: 'What to Expect',
      expect_items: [
        'A safe, non-judgmental space for open dialogue.',
        'Deep listening and reflective questions.',
        'Exploration of your thoughts, emotions, and narratives.'
      ],
      booking_title: 'Book a Session',
      select_date: 'Select a Date',
      select_slot: 'Available Slots',
      confirm_title: 'Confirm Booking',
      confirm_date: 'Date',
      confirm_time: 'Time',
      confirm_duration: 'Duration',
      confirm_total: 'Total',
      confirm_note: 'You need to be logged in to complete the booking. You will be redirected to login.',
      success_title: 'Booking Confirmed',
      success_p: 'Thank you for your trust. A confirmation has been sent to your email. Details are in the portal.',
      go_to_portal: 'Go to Portal'
    },
    legal: {
      privacy_title: 'Privacy Policy',
      terms_title: 'Terms of Service',
      disclaimer_title: 'Disclaimer',
      disclaimer_p1: 'This practice provides psychological consultation and coaching. Services are not medical or psychiatric treatment.',
      disclaimer_p2: 'I do not provide clinical diagnosis or medication.',
      disclaimer_p3: 'If you are in a crisis, please contact emergency services immediately.'
    },
    pricing: {
      initial: 'Initial Consultation',
      individual: 'Individual Session',
      online: 'Online Consultation',
      duration: '50 minutes',
      currency: '€',
    },
    faq: [
      {
        q: 'Do I need to prepare for the first session?',
        a: 'No special preparation is needed. Your willingness to explore what concerns you is enough. We will start with whatever is most relevant to you at the moment.'
      },
      {
        q: 'In which language are sessions conducted?',
        a: 'Sessions are conducted exclusively in Russian.'
      },
      {
        q: 'Is it confidential?',
        a: 'Yes, confidentiality is a fundamental principle of my work. Everything discussed during sessions remains strictly private.'
      },
      {
        q: 'Online or in-person?',
        a: 'I offer online sessions via secure platforms.'
      },
      {
        q: 'I am not sure if this format is right for me — what should I do?',
        a: 'The initial consultation is designed specifically for us to meet, discuss your needs, and determine if our working style is a good fit for you.'
      },
      {
        q: 'Are these consultations medical treatment?',
        a: 'No. These sessions are psychological in nature and do not constitute medical or psychiatric treatment.'
      }
    ]
  },
  nl: {
    nav: {
      home: 'Home',
      about: 'Over mij',
      approach: 'Aanpak',
      consultations: 'Consulten',
      articles: 'Reflecties',
      contact: 'Contact',
      portal: 'Cliëntportaal',
    },
    hero: {
      title: 'Kirill Uvarov PSY',
      specialty: 'Psychologische Consultatie',
      subtitle: 'Soms is het lastig om te begrijpen wat er van binnen gebeurt. Een rustig gesprek kan helpen om de situatie helderder te zien.',
      cta: 'Plan een consultatie',
      secondary_cta: 'Meer informatie',
    },
    footer: {
      disclaimer: 'Deze praktijk biedt psychologische consultatie en coaching. De diensten vormen geen medische of psychiatrische behandeling.',
      note: 'Sessies worden uitsluitend in het Russisch gegeven.',
      legal: 'Psychologisch consulent',
    },
    common: {
      book: 'Boeken',
      login: 'Inloggen',
      logout: 'Uitloggen',
      back: 'Terug',
      more: 'Lees meer',
      send: 'Verzenden',
    },
    home: {
      intro_title: 'De Praktijk',
      intro_p1: 'Ik geloof dat achter elk innerlijk conflict of gevoel van onzekerheid een belangrijke persoonlijke betekenis schuilt die wacht om verwoord te worden.',
      intro_p2: 'Mijn rol is om een ruimte te creëren waarin deze betekenis gehoord, begrepen en geïntegreerd kan worden door middel van een rustige en diepgaande dialoog.',
      areas_title: 'Aandachtsgebieden',
      areas_subtitle: 'Thema\'s die we samen kunnen verkennen',
      how_it_works_title: 'Hoe consulten werken',
      how_it_works_p: 'Sessies vinden online plaats. Elke sessie van 50 minuten is gewijd aan het verkennen van uw innerlijke wereld in een veilige en vertrouwelijke omgeving.',
      about_preview_title: 'Over Kirill',
      about_preview_p: 'Kirill Uvarov is psychologisch consulent en werkt met vragen rond zelfinzicht, emotionele spanning en veranderingen in het leven.',
      education_title: 'Opleiding & Kwalificaties',
      pricing_title: 'Tarieven & Formaat',
      faq_title: 'Veelgestelde vragen',
      invite_title: 'De eerste stap',
      invite_p: 'De reis naar zelfinzicht begint met de moed om gehoord te worden. Ik nodig u uit voor een eerste kennismaking.',
      articles_title: 'Reflecties',
      articles_subtitle: 'Aantekeningen over psychologie, de innerlijke wereld en de zoektocht naar betekenis',
    },
    about: {
      title: 'Over Mij',
      subtitle: 'Psychologisch Consulent',
      bio_p1: 'Kirill Uvarov is psychologisch consulent en werkt met vragen rond zelfinzicht, emotionele spanning en veranderingen in het leven.',
      bio_p2: 'Zijn werk is gebaseerd op een rustige dialoog, aandachtig luisteren en een gezamenlijke verkenning van wat iemand doormaakt.',
      bio_p3: 'Consultaties kunnen helpend zijn bij angst, innerlijke conflicten, emotionele vermoeidheid, relatievragen of een gevoel van richtingloosheid.',
      bio_p4: 'Het doel van de consultatie is ruimte te creëren voor reflectie, begrip en nieuwe perspectieven.',
      bio_p5: 'Kirill heeft daarnaast ruime ervaring in de theater- en creatieve omgeving, wat zijn interesse in identiteit, persoonlijke expressie en innerlijke vrijheid beïnvloedt.',
      bio_p6: 'Gesprekken vinden plaats in een respectvolle en vertrouwelijke sfeer.',
      competencies_title: 'Kerncompetenties',
      competencies: [
        'Reflectieve dialoog',
        'Narratieve exploratie',
        'Identiteitsanalyse',
        'Emotionele integratie',
        'Existentiële vragen',
        'Creatieve expressie'
      ]
    },
    approach: {
      title: 'De Aanpak',
      subtitle: 'Ik geloof dat psychologische helderheid wordt bereikt door een diepe en eerlijke betrokkenheid bij de eigen innerlijke wereld.',
      principles: [
        {
          title: 'Psychologische Reflectie',
          desc: 'Verder gaan dan onmiddellijke reacties om de onderliggende structuren van uw ervaring te ontdekken.'
        },
        {
          title: 'Emotionele Integratie',
          desc: 'Het creëren van een veilige bedding voor emoties die vaak worden gemarginaliseerd.'
        },
        {
          title: 'Narratief Onderzoek',
          desc: 'Het onderzoeken van de verhalen waarin we leven en hoe deze onze perceptie vormen.'
        },
        {
          title: 'Creatief Perspectief',
          desc: 'Imaginair denken gebruiken om stagnatie te doorbreken en nieuwe paden te ontdekken.'
        }
      ],
      quote: '"Het doel van onze dialoog is om de stille taal van uw psyche te vertalen naar een helder en betekenisvol verhaal."',
      footer_p: 'We gaan verder dan klinische labels om de menselijke ervaring in al haar complexiteit te verkennen.'
    },
    consultations: {
      title: 'Consulten',
      p: 'Sessies duren 50 minuten en vinden online plaats. Onze dialoog is strikt vertrouwelijk.',
      pricing_subtitle: 'Tarieven',
      pricing_note: '* Betalingen kunnen worden gedaan via bankoverschrijving of online.',
      expect_title: 'Wat te Verwachten',
      expect_items: [
        'Een veilige, oordeelvrije ruimte voor een open dialoog.',
        'Diep luisteren en reflectieve vragen.',
        'Verkenning van uw gedachten, emoties en verhalen.'
      ],
      booking_title: 'Boek een Sessie',
      select_date: 'Selecteer een Datum',
      select_slot: 'Beschikbare Tijden',
      confirm_title: 'Bevestig Boeking',
      confirm_date: 'Datum',
      confirm_time: 'Tijd',
      confirm_duration: 'Duur',
      confirm_total: 'Totaal',
      confirm_note: 'U moet ingelogd zijn om de boeking te voltooien. U wordt doorverwezen naar de login.',
      success_title: 'Boeking Bevestigd',
      success_p: 'Bedankt voor uw vertrouwen. Een bevestiging is naar uw e-mail verzonden. Details staan in het portaal.',
      go_to_portal: 'Ga naar Portaal'
    },
    legal: {
      privacy_title: 'Privacybeleid',
      terms_title: 'Algemene Voorwaarden',
      disclaimer_title: 'Disclaimer',
      disclaimer_p1: 'Deze praktijk biedt psychologische consultatie en coaching. De diensten vormen geen medische of psychiatrische behandeling.',
      disclaimer_p2: 'Ik stel geen klinische diagnoses en schrijf geen medicatie voor.',
      disclaimer_p3: 'Als u in een crisis verkeert, neem dan onmiddellijk contact op met de hulpdiensten.'
    },
    pricing: {
      initial: 'Eerste consult',
      individual: 'Individuele sessie',
      online: 'Online consult',
      duration: '50 minuten',
      currency: '€',
    },
    faq: [
      {
        q: 'Moet ik me voorbereiden op de eerste sessie?',
        a: 'Er is geen speciale voorbereiding nodig. Uw bereidheid om te verkennen wat u bezighoudt is voldoende. We beginnen met wat op dat moment het meest relevant voor u is.'
      },
      {
        q: 'In welke taal worden de consulten gegeven?',
        a: 'Sessies worden uitsluitend in het Russisch gegeven.'
      },
      {
        q: 'Is het vertrouwelijk?',
        a: 'Ja, vertrouwelijkheid is een fundamenteel principe van mijn werk. Alles wat tijdens de sessies wordt besproken, blijft strikt privé.'
      },
      {
        q: 'Online of persoonlijk?',
        a: 'Ik bied online sessies aan via beveiligde platforms.'
      },
      {
        q: 'Ik weet niet zeker of dit formaat geschikt is voor mij — wat moet ik doen?',
        a: 'Het eerste consult is specifiek bedoeld om kennis te maken, uw behoeften te bespreken en te bepalen of onze werkwijze bij u past.'
      },
      {
        q: 'Zijn deze consulten een medische behandeling?',
        a: 'Nee. Deze sessies zijn psychologisch van aard en vormen geen medische of psychiatrische behandeling.'
      }
    ]
  }
};

export const FOCUS_AREAS = [
  { ru: 'Внутренние конфликты', en: 'Inner Conflicts', nl: 'Innerlijke конфликты' },
  { ru: 'Тревога и неопределенность', en: 'Anxiety & Uncertainty', nl: 'Angst & Onzekerheid' },
  { ru: 'Отношения с собой и другими', en: 'Relationships with Self & Others', nl: 'Relaties met jezelf & anderen' },
  { ru: 'Поиск личных смыслов', en: 'Search for Personal Meaning', nl: 'Zoektocht naar persoonlijke betкенis' },
  { ru: 'Эмоциональная ясность', en: 'Emotional Clarity', nl: 'Emotionele helderheid' },
  { ru: 'Трудные жизненные периоды', en: 'Difficult Life Transitions', nl: 'Moeilijke levensfasen' },
];

export const EDUCATION = [
  {
    title: { ru: 'Программа консультативной психологии', en: 'Consultative Psychology Program', nl: 'Programma Consultatieve Psychologie' },
    institution: { ru: 'Институт прикладной психологии в социальной сфере', en: 'Institute of Applied Psychology in the Social Sphere', nl: 'Instituut voor Toegepaste Psychologie in de Sociale Sfeer' },
    year: '2022',
  },
  {
    title: { ru: 'Обучение когнитивно-поведенческой терапии', en: 'Training in Cognitive Behavioral Therapy', nl: 'Opleiding Cognitieve Gedragstherapie' },
    institution: { ru: 'Профессиональное сообщество', en: 'Professional Community', nl: 'Professionele Gemeenschap' },
    year: '2023',
  },
  {
    title: { ru: 'Изучение психологии здоровья', en: 'Health Psychology studies', nl: 'Studie Gezondheidspsychologie' },
    institution: { ru: 'LOI Hogeschool (Нидерланды)', en: 'LOI Hogeschool (Netherlands)', nl: 'LOI Hogeschool (Nederland)' },
    year: '2024',
  },
  {
    title: { ru: 'Дополнительное профессиональное развитие и непрерывное образование', en: 'Additional professional development and continuing education', nl: 'Aanvullende professionele ontwikkeling en permanente educatie' },
    institution: { ru: 'Методы психологического консультирования', en: 'Psychological counseling methods', nl: 'Psychologische counselingmethoden' },
    year: '2024',
  },
];

export const ARTICLE_PREVIEWS = [
  {
    id: 1,
    slug: 'why-lost-feeling',
    title: { ru: 'Почему иногда возникает ощущение потерянности', en: 'Why the feeling of being lost sometimes arises', nl: 'Waarom het gevoel van verloren zijn soms ontstaat' },
    desc: { ru: 'Размышления о периодах неопределенности и поиске новых ориентиров.', en: 'Reflections on periods of uncertainty and the search for new directions.', nl: 'Reflecties op perioden van onzekerheid en de zoektocht naar nieuwe richtingen.' }
  },
  {
    id: 2,
    slug: 'inner-anxiety',
    title: { ru: 'Что стоит за внутренней тревогой', en: 'What lies behind inner anxiety', nl: 'Wat er achter innerlijke angst schuilt' },
    desc: { ru: 'Исследование тревоги как сигнала нашего внутреннего мира.', en: 'Exploring anxiety as a signal from our inner world.', nl: 'Angst verkennen als een signaal uit onze innerlijke wereld.' }
  },
  {
    id: 3,
    slug: 'burnout-recovery',
    title: { ru: 'Эмоциональное выгорание и восстановление', en: 'Emotional burnout and recovery', nl: 'Emotionele burn-out en herstel' },
    desc: { ru: 'Как заметить истощение и найти путь к восстановлению сил.', en: 'How to notice exhaustion and find a path to recovery.', nl: 'Hoe uitputting op te merken en een weg naar herstel te vinden.' }
  },
  {
    id: 4,
    slug: 'difficult-to-talk',
    title: { ru: 'Почему нам трудно говорить о чувствах', en: 'Why it is difficult for us to talk about feelings', nl: 'Waarom het voor ons moeilijk is om over gevoelens te praten' },
    desc: { ru: 'О барьерах в выражении эмоций и важности открытого диалога.', en: 'On barriers to expressing emotions and the importance of open dialogue.', nl: 'Over barrières bij het uiten van emoties en het belang van een open dialoog.' }
  },
  {
    id: 5,
    slug: 'inner-conflict',
    title: { ru: 'Внутренний конфликт и как его понять', en: 'Inner conflict and how to understand it', nl: 'Innerlijk conflict en hoe het te begrijpen' },
    desc: { ru: 'Разбираемся в противоречивых желаниях и чувствах.', en: 'Understanding contradictory desires and feelings.', nl: 'Tegenstrijdige verlangens en gevoelens begrijpen.' }
  },
  {
    id: 6,
    slug: 'how-dialogue-helps',
    title: { ru: 'Как разговор помогает увидеть ситуацию иначе', en: 'How conversation helps to see the situation differently', nl: 'Hoe een gesprek helpt om de situatie anders te zien' },
    desc: { ru: 'О силе терапевтического диалога и новых перспективах.', en: 'On the power of therapeutic dialogue and new perspectives.', nl: 'Over de kracht van de therapeutische dialoog en nieuwe perspectieven.' }
  },
  {
    id: 7,
    slug: 'importance-to-be-heard',
    title: { ru: 'Почему человеку важно быть услышанным', en: 'Why it is important for a person to be heard', nl: 'Waarom het belangrijk is voor een persoon om gehoord te worden' },
    desc: { ru: 'О базовой потребности в признании и понимании.', en: 'On the basic need for recognition and understanding.', nl: 'Over de basisbehoefte aan erkenning en begrip.' }
  },
  {
    id: 8,
    slug: 'self-perception-change',
    title: { ru: 'Как меняется восприятие себя', en: 'How self-perception changes', nl: 'Hoe zelfperceptie verandert' },
    desc: { ru: 'О пути к более подлинному и устойчивому ощущению себя.', en: 'On the path to a more authentic and stable sense of self.', nl: 'Op weg naar een authentieker en stabieler zelfgevoel.' }
  }
];

export const PRICING_DATA = {
  initial: 60,
  individual: 80,
  online: 80,
};

export const CONTACT_INFO = {
  email: 'k.uvarov.psy@gmail.com',
  kvk: '96828595',
  location: 'Netherlands / Online'
};

export const SEO_DATA = {
  ru: {
    title: 'Kirill Uvarov PSY | Психологические консультации',
    description: 'Профессиональные психологические консультации в Нидерландах и онлайн. Помощь в поиске смыслов, работе с тревогой и внутренними конфликтами.',
    keywords: 'психолог нидерланды, психологическая помощь онлайн, кирилл уваров психолог, консультация психолога на русском',
  },
  en: {
    title: 'Kirill Uvarov PSY | Psychological Consultations',
    description: 'Professional psychological consultations in the Netherlands and online. Support for self-understanding, anxiety, and life transitions.',
    keywords: 'psychologist netherlands, online psychological support, kirill uvarov psychologist, russian speaking psychologist',
  },
  nl: {
    title: 'Kirill Uvarov PSY | Psychologische Consultatie',
    description: 'Professionele psychologische consultatie in Nederland en online. Ondersteuning bij zelfinzicht, angst en levensveranderingen.',
    keywords: 'psycholoog nederland, online psychologische ondersteuning, kirill uvarov psycholoog, russisch sprekende psycholoog',
  }
};
