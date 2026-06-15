import type { Locale } from 'next-intl';
import { guides, siteDescription } from './guides';
import { contentWarnings, gameFacts } from './sources';
import type { GameFact, Guide, GuideFaq } from './types';

export type FalseSunLocale = 'en' | 'ru' | 'pt-BR' | 'es';

type GuideOverride = Partial<
  Pick<
    Guide,
    | 'title'
    | 'seoTitle'
    | 'seoDescription'
    | 'summary'
    | 'body'
    | 'faq'
    | 'tags'
  >
>;

type LocalizedGuideOverrides = Record<string, GuideOverride>;

export interface HomeLinkCopy {
  title: string;
  body: string;
}

export interface FalseSunHomeContent {
  badge: string;
  title: string;
  intro: string;
  primaryCta: string;
  ending20Cta: string;
  playCta: string;
  itchCta: string;
  scopeNote: string;
  siteShapeEyebrow: string;
  siteShapeTitle: string;
  siteShapeBody: string;
  endingEyebrow: string;
  endingTitle: string;
  endingBody: string;
  coreGuidesEyebrow: string;
  coreGuidesTitle: string;
  allGuidesButton: string;
  currentFactsTitle: string;
  findPageTitle: string;
  spoilerTitle: string;
  spoilerBody: string;
  primaryLinks: {
    play: HomeLinkCopy;
    allEndings: HomeLinkCopy;
    ending20: HomeLinkCopy;
    silas: HomeLinkCopy;
    miniGames: HomeLinkCopy;
  };
  secondaryLinks: {
    kyle: HomeLinkCopy;
    download: HomeLinkCopy;
    itchIo: HomeLinkCopy;
    warnings: HomeLinkCopy;
  };
  routeLabels: Record<string, string>;
  coreRouteItems: Array<{
    keyword: string;
    priority: 'P0' | 'P1' | 'P2';
    route: string;
    label: string;
    intent: string;
  }>;
}

export interface GuidesIndexContent {
  badge: string;
  title: string;
  intro: string;
  readGuide: string;
  faq: GuideFaq[];
}

export interface GuideArticleUi {
  spoilerTitle: string;
  spoilerBody: string;
  startTitle: string;
  startBody: string;
  sectionsTitle: string;
  videoPrefix: string;
  videoSuffix: string;
  officialTitle: string;
  officialBody: string;
  officialLinkLabel: string;
  relatedTitle: string;
  warningsTitle: string;
  readWarnings: string;
  faqTitle: string;
  categoryLabels: Record<Guide['category'], string>;
  difficultyLabels: Record<Guide['difficulty'], string>;
}

export interface PlayOnlineContent {
  metadataTitle: string;
  metadataDescription: string;
  badge: string;
  title: string;
  intro: string;
  allEndingsButton: string;
  warningsButton: string;
  frameLabels: {
    title: string;
    loading: string;
    start: string;
    reset: string;
    fullscreen: string;
    exitFullscreen: string;
    open: string;
  };
  infoCards: Array<{
    key: string;
    title: string;
    body: string;
  }>;
  downloadGuide: string;
  officialItch: string;
  howEyebrow: string;
  howTitle: string;
  howBody: string;
  howCards: Array<{
    label: string;
    body: string;
  }>;
  afterEyebrow: string;
  afterTitle: string;
  guideLinks: Array<{
    title: string;
    href: string;
    body: string;
    icon: 'list' | 'gamepad' | 'book';
  }>;
  warningsTitle: string;
  faq: GuideFaq[];
}

const falseSunLocales: FalseSunLocale[] = ['en', 'ru', 'pt-BR', 'es'];

export function getFalseSunLocale(locale?: Locale | string): FalseSunLocale {
  return falseSunLocales.includes(locale as FalseSunLocale)
    ? (locale as FalseSunLocale)
    : 'en';
}

function localizedGuide(base: Guide, locale?: Locale | string): Guide {
  const falseSunLocale = getFalseSunLocale(locale);
  const override = guideOverrides[falseSunLocale]?.[base.slug];

  if (!override) {
    return base;
  }

  return {
    ...base,
    ...override,
    body: override.body ?? base.body,
    faq: override.faq ?? base.faq,
    tags: override.tags ?? base.tags,
  };
}

export function getLocalizedGuide(slug: string, locale?: Locale | string) {
  const guide = guides.find((item) => item.slug === slug);
  return guide ? localizedGuide(guide, locale) : undefined;
}

export function getLocalizedGuides(locale?: Locale | string) {
  return guides.map((guide) => localizedGuide(guide, locale));
}

export function getLocalizedFeaturedGuides(locale?: Locale | string) {
  const falseSunLocale = getFalseSunLocale(locale);
  const localizedGuides = getLocalizedGuides(locale);

  if (falseSunLocale === 'en') {
    return localizedGuides.slice(0, 6);
  }

  const localizedCoreSlugs = [
    'all-endings',
    'ending-20',
    'silas-route',
    'download',
    'itch-io',
    'content-warnings',
  ];

  return localizedCoreSlugs
    .map((slug) => localizedGuides.find((guide) => guide.slug === slug))
    .filter(Boolean) as Guide[];
}

export function getLocalizedSiteDescription(locale?: Locale | string) {
  return (
    localizedSiteDescriptions[getFalseSunLocale(locale)] ?? siteDescription
  );
}

export function getLocalizedContentWarnings(locale?: Locale | string) {
  return localizedContentWarnings[getFalseSunLocale(locale)] ?? contentWarnings;
}

export function getLocalizedGameFacts(locale?: Locale | string): GameFact[] {
  return localizedGameFacts[getFalseSunLocale(locale)] ?? gameFacts;
}

export function getHomeContent(locale?: Locale | string): FalseSunHomeContent {
  return homeContent[getFalseSunLocale(locale)] ?? homeContent.en;
}

export function getGuidesIndexContent(
  locale?: Locale | string
): GuidesIndexContent {
  return guidesIndexContent[getFalseSunLocale(locale)] ?? guidesIndexContent.en;
}

export function getGuideArticleUi(locale?: Locale | string): GuideArticleUi {
  return guideArticleUi[getFalseSunLocale(locale)] ?? guideArticleUi.en;
}

export function getPlayOnlineContent(locale?: Locale | string) {
  return playOnlineContent[getFalseSunLocale(locale)] ?? playOnlineContent.en;
}

const localizedSiteDescriptions: Partial<Record<FalseSunLocale, string>> = {
  ru: 'Неофициальный хаб по The False Sun: онлайн-игра, все концовки, Ending 20, маршруты Silas и Kyle, мини-игры, безопасные загрузки и предупреждения о контенте.',
  'pt-BR':
    'Hub não oficial de The False Sun para jogar online, todos os finais, Ending 20, rotas do Silas e Kyle, mini-games, downloads seguros e avisos de conteúdo.',
  es: 'Hub no oficial de The False Sun para jugar online, todos los finales, Ending 20, rutas de Silas y Kyle, minijuegos, descargas seguras y advertencias de contenido.',
};

const localizedContentWarnings: Partial<Record<FalseSunLocale, string[]>> = {
  ru: [
    'Игра для взрослой аудитории',
    'Физическое и эмоциональное насилие',
    'Тревожные темы',
    'Мигающие визуальные эффекты',
    'Внезапные или громкие звуки',
    'Спойлеры на страницах прохождения',
  ],
  'pt-BR': [
    'Jogo para público adulto',
    'Violência física e emocional',
    'Temas perturbadores',
    'Efeitos visuais piscando',
    'Sons repentinos ou altos',
    'Spoilers nas páginas de guia',
  ],
  es: [
    'Juego para público adulto',
    'Violencia física y emocional',
    'Temas perturbadores',
    'Efectos visuales parpadeantes',
    'Sonidos repentinos o fuertes',
    'Spoilers en las guías',
  ],
};

const localizedGameFacts: Partial<Record<FalseSunLocale, GameFact[]>> = {
  ru: [
    {
      label: 'Тип игры',
      value:
        'Зрелая визуальная новелла с романтикой, хоррором, уютной фермой и выбором маршрутов.',
    },
    {
      label: 'Платформы',
      value:
        'Браузер на этом сайте, а также Windows, macOS, Linux и Android на официальной странице itch.io.',
    },
    {
      label: 'Главные темы гайдов',
      value:
        'Все концовки, Ending 20, маршрут Silas, маршрут Kyle, мини-игры и безопасная загрузка.',
    },
    {
      label: 'Политика контента',
      value:
        'Разрешены спойлерные прохождения; явные взрослые сцены, небезопасные APK и копии текста игры не публикуются.',
    },
  ],
  'pt-BR': [
    {
      label: 'Tipo de jogo',
      value:
        'Visual novel madura com romance, horror, cenas de fazenda e escolhas de rota.',
    },
    {
      label: 'Plataformas',
      value:
        'Navegador neste site, além de Windows, macOS, Linux e Android na página oficial do itch.io.',
    },
    {
      label: 'Tópicos principais',
      value:
        'Todos os finais, Ending 20, rota do Silas, rota do Kyle, mini-games e download seguro.',
    },
    {
      label: 'Política de conteúdo',
      value:
        'Guias com spoilers são permitidos; cenas adultas explícitas, APKs inseguros e texto copiado do jogo não são publicados.',
    },
  ],
  es: [
    {
      label: 'Tipo de juego',
      value:
        'Visual novel madura con romance, horror, escenas de granja y elecciones de ruta.',
    },
    {
      label: 'Plataformas',
      value:
        'Navegador en este sitio, además de Windows, macOS, Linux y Android en la página oficial de itch.io.',
    },
    {
      label: 'Temas principales',
      value:
        'Todos los finales, Ending 20, ruta de Silas, ruta de Kyle, minijuegos y descarga segura.',
    },
    {
      label: 'Política de contenido',
      value:
        'Se permiten guías con spoilers; no se publican escenas adultas explícitas, APKs inseguros ni texto copiado del juego.',
    },
  ],
};

const homeContent: Record<FalseSunLocale, FalseSunHomeContent> = {
  en: {
    badge: 'Unofficial walkthrough guide',
    title: 'The False Sun Walkthrough & All Endings Guide',
    intro:
      'A lightweight guide hub for all 20 endings, Ending 20, Silas and Kyle route cleanup, play online, farm mini-games, safe downloads, and spoiler-marked mature-content notes.',
    primaryCta: 'Open all endings',
    ending20Cta: 'Solve Ending 20',
    playCta: 'Play online',
    itchCta: 'Official itch.io',
    scopeNote:
      "This fan site covers Oniray's visual novel, not unrelated book, comic, or Risk of Rain search results using similar words.",
    siteShapeEyebrow: 'Site shape',
    siteShapeTitle: 'This is a walkthrough site, not a database wiki',
    siteShapeBody:
      'The False Sun does not need codes, tier lists, hero databases, or empty character pages. The highest-value pages are route decisions, ending cleanup, platform questions, and content warnings.',
    endingEyebrow: 'Ending tracker',
    endingTitle: 'Start with clusters, then clean up exact gallery slots',
    endingBody:
      'Current tracker labels are route notes rather than official ending names. That keeps the guide useful while the community is still verifying exact English gallery labels.',
    coreGuidesEyebrow: 'Core guides',
    coreGuidesTitle: 'Read the page that matches the missing slot',
    allGuidesButton: 'All guides',
    currentFactsTitle: 'Current facts',
    findPageTitle: 'Find the right walkthrough page',
    spoilerTitle: 'Before you open route spoilers',
    spoilerBody:
      'This site is unofficial, spoiler-marked, and written for route clarity. It keeps official downloadable builds on itch.io and does not copy scripts, publish explicit adult scene walkthroughs, or recommend unsafe APKs.',
    primaryLinks: {
      play: {
        title: 'Play Online',
        body: 'Start the game before opening spoilers.',
      },
      allEndings: {
        title: 'All Endings',
        body: 'Track all 20 route slots with save points and confidence notes.',
      },
      ending20: {
        title: 'Ending 20',
        body: 'The tutorial farm-task fail route and retry loop.',
      },
      silas: {
        title: 'Silas Route',
        body: 'Fear, confrontation, escape, and affection-chain branches.',
      },
      miniGames: {
        title: 'Mini-Games',
        body: 'Farm task saves, tutorial retries, and safe no-mod advice.',
      },
    },
    secondaryLinks: {
      kyle: {
        title: 'Kyle Route',
        body: 'Farm aftermath and promise-to-return route notes.',
      },
      download: {
        title: 'Download',
        body: 'Official itch.io, Android, Mac, Windows, and Linux guidance.',
      },
      itchIo: {
        title: 'itch.io Page',
        body: 'Official Oniray page, included files, comments, and safe access notes.',
      },
      warnings: {
        title: 'Content Warnings',
        body: 'Spoiler-light mature-audience and safety notes.',
      },
    },
    routeLabels: {
      '/': 'Game overview',
      '/all-endings': 'All endings walkthrough',
      '/save-points': 'Save points guide',
      '/ending-20': 'Ending 20 route',
      '/guides': 'Guide index',
      '/play-online': 'Play online',
      '/silas-route': 'Silas route',
      '/he-let-you-go': 'He Let You Go ending',
      '/kyle-route': 'Kyle route',
      '/mini-games': 'Mini-games',
      '/download': 'Download guide',
      '/itch-io': 'Official itch.io page',
      '/content-warnings': 'Content warnings',
    },
    coreRouteItems: [
      {
        keyword: 'the false sun all endings',
        priority: 'P0',
        route: '/all-endings',
        label: 'All endings walkthrough',
        intent: 'Find every ending and avoid missing gallery slots.',
      },
      {
        keyword: 'the false sun ending 20',
        priority: 'P0',
        route: '/ending-20',
        label: 'Ending 20 route',
        intent: 'Solve the most confusing missing ending.',
      },
      {
        keyword: 'the false sun itch io',
        priority: 'P0',
        route: '/itch-io',
        label: 'Official itch.io page',
        intent:
          'Find the official itch.io page, included files, platform status, and safe download path.',
      },
      {
        keyword: 'the false sun download',
        priority: 'P0',
        route: '/download',
        label: 'Download guide',
        intent: 'Download safely from official files while avoiding mirrors.',
      },
      {
        keyword: 'the false sun silas route',
        priority: 'P1',
        route: '/silas-route',
        label: 'Silas route',
        intent: 'Route choices centered on Silas.',
      },
      {
        keyword: 'play the false sun online',
        priority: 'P0',
        route: '/play-online',
        label: 'Play online',
        intent: 'Launch the browser version before reading route spoilers.',
      },
    ],
  },
  ru: {
    badge: 'Неофициальное прохождение',
    title: 'The False Sun: прохождение и все концовки',
    intro:
      'Короткий хаб по 20 концовкам, Ending 20, маршрутам Silas и Kyle, онлайн-игре, мини-играм на ферме, безопасной загрузке и предупреждениям о взрослом контенте.',
    primaryCta: 'Открыть все концовки',
    ending20Cta: 'Разобрать Ending 20',
    playCta: 'Играть онлайн',
    itchCta: 'Официальный itch.io',
    scopeNote:
      'Этот фан-сайт посвящен визуальной новелле Oniray, а не книгам, комиксам или другим результатам с похожим названием.',
    siteShapeEyebrow: 'Формат сайта',
    siteShapeTitle: 'Это сайт-прохождение, а не пустая база данных',
    siteShapeBody:
      'The False Sun важнее разбирать через маршруты, концовки, вопросы загрузки и предупреждения, а не через коды, тир-листы или пустые страницы персонажей.',
    endingEyebrow: 'Трекер концовок',
    endingTitle: 'Начните с групп маршрутов, затем закрывайте слоты галереи',
    endingBody:
      'Подписи в трекере пока являются маршрутными заметками, а не официальными названиями концовок. Это честнее, пока сообщество сверяет английские названия.',
    coreGuidesEyebrow: 'Основные гайды',
    coreGuidesTitle: 'Откройте страницу под нужный недостающий слот',
    allGuidesButton: 'Все гайды',
    currentFactsTitle: 'Текущие факты',
    findPageTitle: 'Найти нужную страницу',
    spoilerTitle: 'Перед спойлерами маршрутов',
    spoilerBody:
      'Сайт неофициальный и спойлерный. Он ведет к официальным загрузкам на itch.io, не копирует текст игры, не публикует явные взрослые сцены и не советует небезопасные APK.',
    primaryLinks: {
      play: {
        title: 'Играть онлайн',
        body: 'Запустите игру до чтения спойлеров.',
      },
      allEndings: {
        title: 'Все концовки',
        body: 'Отслеживайте все 20 слотов, сохранения и уровень уверенности.',
      },
      ending20: {
        title: 'Ending 20',
        body: 'Маршрут с провалом раннего задания на ферме и цикл повторов.',
      },
      silas: {
        title: 'Маршрут Silas',
        body: 'Страх, конфронтация, побег и теплая цепочка выборов.',
      },
      miniGames: {
        title: 'Мини-игры',
        body: 'Сохранения на ферме, повторы tutorial и безопасные советы без модов.',
      },
    },
    secondaryLinks: {
      kyle: {
        title: 'Маршрут Kyle',
        body: 'Ферма, последствия и обещание вернуться летом.',
      },
      download: {
        title: 'Скачать',
        body: 'Официальный itch.io, Android, Mac, Windows и Linux.',
      },
      itchIo: {
        title: 'Страница itch.io',
        body: 'Официальная страница Oniray, файлы, комментарии и безопасный доступ.',
      },
      warnings: {
        title: 'Предупреждения',
        body: 'Краткие предупреждения о взрослом контенте без лишних спойлеров.',
      },
    },
    routeLabels: {
      '/': 'Обзор игры',
      '/all-endings': 'Все концовки',
      '/save-points': 'Сохранения',
      '/ending-20': 'Ending 20',
      '/guides': 'Все гайды',
      '/play-online': 'Играть онлайн',
      '/silas-route': 'Маршрут Silas',
      '/he-let-you-go': 'He Let You Go',
      '/kyle-route': 'Маршрут Kyle',
      '/mini-games': 'Мини-игры',
      '/download': 'Скачать',
      '/itch-io': 'Официальный itch.io',
      '/content-warnings': 'Предупреждения',
    },
    coreRouteItems: [
      {
        keyword: 'the false sun все концовки',
        priority: 'P0',
        route: '/all-endings',
        label: 'Все концовки',
        intent: 'Найти все концовки и не пропустить слоты галереи.',
      },
      {
        keyword: 'the false sun ending 20',
        priority: 'P0',
        route: '/ending-20',
        label: 'Ending 20',
        intent: 'Проверить самый запутанный недостающий финал.',
      },
      {
        keyword: 'the false sun itch io',
        priority: 'P0',
        route: '/itch-io',
        label: 'Официальный itch.io',
        intent: 'Найти страницу автора, файлы и безопасный путь загрузки.',
      },
      {
        keyword: 'the false sun скачать',
        priority: 'P0',
        route: '/download',
        label: 'Скачать',
        intent: 'Скачать игру через официальные файлы, без APK-зеркал.',
      },
      {
        keyword: 'the false sun silas',
        priority: 'P1',
        route: '/silas-route',
        label: 'Маршрут Silas',
        intent: 'Разобрать выборы, связанные с Silas.',
      },
      {
        keyword: 'the false sun играть онлайн',
        priority: 'P0',
        route: '/play-online',
        label: 'Играть онлайн',
        intent: 'Запустить браузерную версию перед чтением спойлеров.',
      },
    ],
  },
  'pt-BR': {
    badge: 'Guia não oficial',
    title: 'The False Sun: guia e todos os finais',
    intro:
      'Hub leve para os 20 finais, Ending 20, rotas do Silas e Kyle, jogar online, mini-games da fazenda, downloads seguros e avisos de conteúdo maduro.',
    primaryCta: 'Abrir todos os finais',
    ending20Cta: 'Resolver Ending 20',
    playCta: 'Jogar online',
    itchCta: 'itch.io oficial',
    scopeNote:
      'Este fan site cobre a visual novel da Oniray, não livros, quadrinhos ou outros resultados com nomes parecidos.',
    siteShapeEyebrow: 'Formato do site',
    siteShapeTitle: 'Este é um site de guia, não uma wiki vazia',
    siteShapeBody:
      'The False Sun funciona melhor com decisões de rota, limpeza de finais, dúvidas de plataforma e avisos de conteúdo, não com códigos, tier lists ou páginas vazias.',
    endingEyebrow: 'Rastreador de finais',
    endingTitle: 'Comece por grupos de rota e depois limpe a galeria',
    endingBody:
      'Os nomes atuais são notas de rota, não nomes oficiais. Isso mantém o guia útil enquanto a comunidade confirma os rótulos em inglês.',
    coreGuidesEyebrow: 'Guias principais',
    coreGuidesTitle: 'Leia a página que combina com o final faltando',
    allGuidesButton: 'Todos os guias',
    currentFactsTitle: 'Fatos atuais',
    findPageTitle: 'Encontre a página certa',
    spoilerTitle: 'Antes dos spoilers de rota',
    spoilerBody:
      'Este site é não oficial, marcado com spoilers e focado em clareza de rota. Ele mantém downloads no itch.io oficial e não copia script, cenas adultas explícitas ou APKs inseguros.',
    primaryLinks: {
      play: {
        title: 'Jogar online',
        body: 'Comece o jogo antes de abrir spoilers.',
      },
      allEndings: {
        title: 'Todos os finais',
        body: 'Acompanhe os 20 slots com saves e notas de confiança.',
      },
      ending20: {
        title: 'Ending 20',
        body: 'Rota de falha no tutorial da fazenda e ciclo de tentativa.',
      },
      silas: {
        title: 'Rota do Silas',
        body: 'Medo, confronto, fuga e escolhas de afeto.',
      },
      miniGames: {
        title: 'Mini-games',
        body: 'Saves da fazenda, tentativas no tutorial e conselhos sem mods.',
      },
    },
    secondaryLinks: {
      kyle: {
        title: 'Rota do Kyle',
        body: 'Consequências na fazenda e promessa de voltar no verão.',
      },
      download: {
        title: 'Download',
        body: 'itch.io oficial, Android, Mac, Windows e Linux.',
      },
      itchIo: {
        title: 'Página itch.io',
        body: 'Página oficial da Oniray, arquivos, comentários e acesso seguro.',
      },
      warnings: {
        title: 'Avisos',
        body: 'Notas de segurança para conteúdo maduro com poucos spoilers.',
      },
    },
    routeLabels: {
      '/': 'Visão geral',
      '/all-endings': 'Todos os finais',
      '/save-points': 'Pontos de save',
      '/ending-20': 'Ending 20',
      '/guides': 'Guias',
      '/play-online': 'Jogar online',
      '/silas-route': 'Rota do Silas',
      '/he-let-you-go': 'He Let You Go',
      '/kyle-route': 'Rota do Kyle',
      '/mini-games': 'Mini-games',
      '/download': 'Download',
      '/itch-io': 'itch.io oficial',
      '/content-warnings': 'Avisos',
    },
    coreRouteItems: [
      {
        keyword: 'the false sun todos os finais',
        priority: 'P0',
        route: '/all-endings',
        label: 'Todos os finais',
        intent: 'Encontrar todos os finais e evitar slots faltando.',
      },
      {
        keyword: 'the false sun ending 20',
        priority: 'P0',
        route: '/ending-20',
        label: 'Ending 20',
        intent: 'Resolver o final mais confuso.',
      },
      {
        keyword: 'the false sun itch io',
        priority: 'P0',
        route: '/itch-io',
        label: 'itch.io oficial',
        intent: 'Encontrar a página oficial, arquivos e download seguro.',
      },
      {
        keyword: 'the false sun download',
        priority: 'P0',
        route: '/download',
        label: 'Download',
        intent: 'Baixar com segurança pelos arquivos oficiais.',
      },
      {
        keyword: 'the false sun silas',
        priority: 'P1',
        route: '/silas-route',
        label: 'Rota do Silas',
        intent: 'Entender as escolhas centradas no Silas.',
      },
      {
        keyword: 'jogar the false sun online',
        priority: 'P0',
        route: '/play-online',
        label: 'Jogar online',
        intent: 'Abrir a versão de navegador antes dos spoilers.',
      },
    ],
  },
  es: {
    badge: 'Guía no oficial',
    title: 'The False Sun: guía y todos los finales',
    intro:
      'Hub ligero para los 20 finales, Ending 20, rutas de Silas y Kyle, jugar online, minijuegos de la granja, descargas seguras y advertencias de contenido maduro.',
    primaryCta: 'Abrir todos los finales',
    ending20Cta: 'Resolver Ending 20',
    playCta: 'Jugar online',
    itchCta: 'itch.io oficial',
    scopeNote:
      'Este fan site cubre la visual novel de Oniray, no libros, cómics ni otros resultados con nombres parecidos.',
    siteShapeEyebrow: 'Formato del sitio',
    siteShapeTitle: 'Este es un sitio de guía, no una wiki vacía',
    siteShapeBody:
      'The False Sun se resuelve mejor con decisiones de ruta, limpieza de finales, dudas de plataforma y advertencias, no con códigos, tier lists ni páginas vacías.',
    endingEyebrow: 'Rastreador de finales',
    endingTitle: 'Empieza por grupos de ruta y luego limpia la galería',
    endingBody:
      'Las etiquetas actuales son notas de ruta, no nombres oficiales. Así la guía sigue siendo útil mientras la comunidad verifica los nombres en inglés.',
    coreGuidesEyebrow: 'Guías principales',
    coreGuidesTitle: 'Lee la página que coincide con el final que falta',
    allGuidesButton: 'Todas las guías',
    currentFactsTitle: 'Datos actuales',
    findPageTitle: 'Encuentra la página correcta',
    spoilerTitle: 'Antes de abrir spoilers de ruta',
    spoilerBody:
      'Este sitio es no oficial, contiene spoilers marcados y se centra en claridad de ruta. Mantiene las descargas en itch.io oficial y no copia guion, escenas adultas explícitas ni APKs inseguros.',
    primaryLinks: {
      play: {
        title: 'Jugar online',
        body: 'Empieza el juego antes de abrir spoilers.',
      },
      allEndings: {
        title: 'Todos los finales',
        body: 'Sigue los 20 slots con saves y notas de confianza.',
      },
      ending20: {
        title: 'Ending 20',
        body: 'Ruta de fallo en el tutorial de la granja y ciclo de reintento.',
      },
      silas: {
        title: 'Ruta de Silas',
        body: 'Miedo, confrontación, escape y cadena afectiva.',
      },
      miniGames: {
        title: 'Minijuegos',
        body: 'Saves de granja, reintentos del tutorial y consejos sin mods.',
      },
    },
    secondaryLinks: {
      kyle: {
        title: 'Ruta de Kyle',
        body: 'Consecuencias en la granja y promesa de volver en verano.',
      },
      download: {
        title: 'Descarga',
        body: 'itch.io oficial, Android, Mac, Windows y Linux.',
      },
      itchIo: {
        title: 'Página itch.io',
        body: 'Página oficial de Oniray, archivos, comentarios y acceso seguro.',
      },
      warnings: {
        title: 'Advertencias',
        body: 'Notas de seguridad para contenido maduro con pocos spoilers.',
      },
    },
    routeLabels: {
      '/': 'Resumen del juego',
      '/all-endings': 'Todos los finales',
      '/save-points': 'Puntos de guardado',
      '/ending-20': 'Ending 20',
      '/guides': 'Guías',
      '/play-online': 'Jugar online',
      '/silas-route': 'Ruta de Silas',
      '/he-let-you-go': 'He Let You Go',
      '/kyle-route': 'Ruta de Kyle',
      '/mini-games': 'Minijuegos',
      '/download': 'Descarga',
      '/itch-io': 'itch.io oficial',
      '/content-warnings': 'Advertencias',
    },
    coreRouteItems: [
      {
        keyword: 'the false sun todos los finales',
        priority: 'P0',
        route: '/all-endings',
        label: 'Todos los finales',
        intent: 'Encontrar todos los finales y evitar huecos en la galería.',
      },
      {
        keyword: 'the false sun ending 20',
        priority: 'P0',
        route: '/ending-20',
        label: 'Ending 20',
        intent: 'Resolver el final más confuso.',
      },
      {
        keyword: 'the false sun itch io',
        priority: 'P0',
        route: '/itch-io',
        label: 'itch.io oficial',
        intent: 'Encontrar la página oficial, archivos y descarga segura.',
      },
      {
        keyword: 'the false sun descargar',
        priority: 'P0',
        route: '/download',
        label: 'Descarga',
        intent: 'Descargar de forma segura desde archivos oficiales.',
      },
      {
        keyword: 'the false sun silas',
        priority: 'P1',
        route: '/silas-route',
        label: 'Ruta de Silas',
        intent: 'Entender las elecciones centradas en Silas.',
      },
      {
        keyword: 'jugar the false sun online',
        priority: 'P0',
        route: '/play-online',
        label: 'Jugar online',
        intent: 'Abrir la versión de navegador antes de los spoilers.',
      },
    ],
  },
};

const guidesIndexContent: Record<FalseSunLocale, GuidesIndexContent> = {
  en: {
    badge: 'Guides',
    title: 'The False Sun Guides',
    intro:
      'Route-first walkthrough pages for ending cleanup, Silas and Kyle branches, farm mini-games, official downloads, and mature-content warnings.',
    readGuide: 'Read guide',
    faq: [
      {
        question: 'Which The False Sun guide should I read first?',
        answer:
          'Start with the all endings guide. If you only miss one gallery slot, use Ending 20, Silas route, or Kyle route based on the missing branch.',
      },
      {
        question: 'Are these pages a traditional wiki?',
        answer:
          'No. The False Sun is better served by route walkthroughs and ending cleanup pages than by empty database pages.',
      },
      {
        question: 'Do the guides copy YouTube transcripts?',
        answer:
          'No. Videos are used as cross-check sources, while articles are written as practical route logic and save-point advice.',
      },
    ],
  },
  ru: {
    badge: 'Гайды',
    title: 'Гайды по The False Sun',
    intro:
      'Страницы прохождения для концовок, маршрутов Silas и Kyle, мини-игр на ферме, официальной загрузки и предупреждений.',
    readGuide: 'Читать гайд',
    faq: [
      {
        question: 'С какого гайда начать?',
        answer:
          'Начните со всех концовок. Если не хватает одного слота, переходите к Ending 20, маршруту Silas или Kyle.',
      },
      {
        question: 'Это обычная wiki?',
        answer:
          'Нет. The False Sun полезнее разбирать через маршруты и концовки, а не через пустые страницы базы данных.',
      },
      {
        question: 'Гайды копируют YouTube-транскрипты?',
        answer:
          'Нет. Видео используются только для сверки, а статьи написаны как практичные маршрутные подсказки.',
      },
    ],
  },
  'pt-BR': {
    badge: 'Guias',
    title: 'Guias de The False Sun',
    intro:
      'Guias por rota para limpar finais, rotas do Silas e Kyle, mini-games da fazenda, downloads oficiais e avisos de conteúdo.',
    readGuide: 'Ler guia',
    faq: [
      {
        question: 'Qual guia devo ler primeiro?',
        answer:
          'Comece pelo guia de todos os finais. Se falta só um slot, use Ending 20, rota do Silas ou rota do Kyle.',
      },
      {
        question: 'Estas páginas são uma wiki tradicional?',
        answer:
          'Não. The False Sun funciona melhor com guias de rota e finais do que com páginas vazias de banco de dados.',
      },
      {
        question: 'Os guias copiam transcrições do YouTube?',
        answer:
          'Não. Vídeos são usados como referência, mas os artigos são escritos como lógica prática de rota e save.',
      },
    ],
  },
  es: {
    badge: 'Guías',
    title: 'Guías de The False Sun',
    intro:
      'Guías por ruta para limpiar finales, rutas de Silas y Kyle, minijuegos de la granja, descargas oficiales y advertencias de contenido.',
    readGuide: 'Leer guía',
    faq: [
      {
        question: '¿Qué guía debo leer primero?',
        answer:
          'Empieza con todos los finales. Si solo falta un slot, usa Ending 20, la ruta de Silas o la ruta de Kyle.',
      },
      {
        question: '¿Estas páginas son una wiki tradicional?',
        answer:
          'No. The False Sun funciona mejor con guías de ruta y finales que con páginas vacías de base de datos.',
      },
      {
        question: '¿Las guías copian transcripciones de YouTube?',
        answer:
          'No. Los videos se usan como referencia, pero los artículos están escritos como lógica práctica de ruta y guardado.',
      },
    ],
  },
};

const guideArticleUi: Record<FalseSunLocale, GuideArticleUi> = {
  en: {
    spoilerTitle: 'Spoiler and mature-content note',
    spoilerBody:
      'The False Sun is intended for mature audiences. Route pages include story spoilers and may discuss violent or disturbing outcomes without explicit adult scene detail.',
    startTitle: 'Where to start on this page',
    startBody:
      'Pick the branch or platform problem you are solving, then use the related pages instead of replaying unrelated routes.',
    sectionsTitle: 'Page sections',
    videoPrefix: 'Video cross-check:',
    videoSuffix: 'The article is hand-written and not a transcript rewrite.',
    officialTitle: 'Official page and safe downloads',
    officialBody:
      "Use the creator's itch.io page for game files, platform availability, and updates. This fan guide does not host game builds, modified clients, or APK mirrors.",
    officialLinkLabel: 'Oniray on itch.io',
    relatedTitle: 'Related pages',
    warningsTitle: 'Official warnings',
    readWarnings: 'Read warnings',
    faqTitle: 'FAQ',
    categoryLabels: {
      Endings: 'Endings',
      Route: 'Route',
      'Mini-Games': 'Mini-Games',
      Download: 'Download',
      Safety: 'Safety',
    },
    difficultyLabels: {
      Beginner: 'Beginner',
      Intermediate: 'Intermediate',
      'Spoiler Heavy': 'Spoiler Heavy',
    },
  },
  ru: {
    spoilerTitle: 'Спойлеры и взрослый контент',
    spoilerBody:
      'The False Sun рассчитана на взрослую аудиторию. Страницы маршрутов содержат сюжетные спойлеры и могут обсуждать жестокие или тревожные исходы без явных взрослых сцен.',
    startTitle: 'С чего начать на этой странице',
    startBody:
      'Выберите проблему маршрута или платформы, затем переходите по связанным страницам вместо повторов не связанных веток.',
    sectionsTitle: 'Разделы страницы',
    videoPrefix: 'Сверка с видео:',
    videoSuffix:
      'Статья написана вручную и не является пересказом транскрипта.',
    officialTitle: 'Официальная страница и безопасная загрузка',
    officialBody:
      'Используйте страницу автора на itch.io для файлов игры, платформ и обновлений. Этот фан-гайд не хранит сборки, модифицированные клиенты или APK-зеркала.',
    officialLinkLabel: 'Oniray на itch.io',
    relatedTitle: 'Связанные страницы',
    warningsTitle: 'Официальные предупреждения',
    readWarnings: 'Читать предупреждения',
    faqTitle: 'FAQ',
    categoryLabels: {
      Endings: 'Концовки',
      Route: 'Маршрут',
      'Mini-Games': 'Мини-игры',
      Download: 'Загрузка',
      Safety: 'Безопасность',
    },
    difficultyLabels: {
      Beginner: 'Для новичков',
      Intermediate: 'Средний уровень',
      'Spoiler Heavy': 'Много спойлеров',
    },
  },
  'pt-BR': {
    spoilerTitle: 'Spoilers e conteúdo maduro',
    spoilerBody:
      'The False Sun é para público adulto. Páginas de rota incluem spoilers e podem discutir finais violentos ou perturbadores sem detalhes adultos explícitos.',
    startTitle: 'Por onde começar nesta página',
    startBody:
      'Escolha a rota ou o problema de plataforma que você quer resolver e use as páginas relacionadas em vez de repetir rotas sem relação.',
    sectionsTitle: 'Seções da página',
    videoPrefix: 'Referência de vídeo:',
    videoSuffix: 'O artigo é escrito manualmente e não reescreve transcrições.',
    officialTitle: 'Página oficial e downloads seguros',
    officialBody:
      'Use a página do criador no itch.io para arquivos, plataformas e atualizações. Este fan guide não hospeda builds, clientes modificados ou APKs espelhados.',
    officialLinkLabel: 'Oniray no itch.io',
    relatedTitle: 'Páginas relacionadas',
    warningsTitle: 'Avisos oficiais',
    readWarnings: 'Ler avisos',
    faqTitle: 'FAQ',
    categoryLabels: {
      Endings: 'Finais',
      Route: 'Rota',
      'Mini-Games': 'Mini-games',
      Download: 'Download',
      Safety: 'Segurança',
    },
    difficultyLabels: {
      Beginner: 'Iniciante',
      Intermediate: 'Intermediário',
      'Spoiler Heavy': 'Muitos spoilers',
    },
  },
  es: {
    spoilerTitle: 'Spoilers y contenido maduro',
    spoilerBody:
      'The False Sun es para público adulto. Las páginas de ruta incluyen spoilers y pueden hablar de finales violentos o perturbadores sin detalles adultos explícitos.',
    startTitle: 'Por dónde empezar en esta página',
    startBody:
      'Elige la ruta o el problema de plataforma que quieres resolver y usa las páginas relacionadas en lugar de repetir rutas sin relación.',
    sectionsTitle: 'Secciones de la página',
    videoPrefix: 'Referencia de video:',
    videoSuffix:
      'El artículo está escrito a mano y no reescribe transcripciones.',
    officialTitle: 'Página oficial y descargas seguras',
    officialBody:
      'Usa la página del creador en itch.io para archivos, plataformas y actualizaciones. Esta guía fan no aloja builds, clientes modificados ni APKs espejo.',
    officialLinkLabel: 'Oniray en itch.io',
    relatedTitle: 'Páginas relacionadas',
    warningsTitle: 'Advertencias oficiales',
    readWarnings: 'Leer advertencias',
    faqTitle: 'FAQ',
    categoryLabels: {
      Endings: 'Finales',
      Route: 'Ruta',
      'Mini-Games': 'Minijuegos',
      Download: 'Descarga',
      Safety: 'Seguridad',
    },
    difficultyLabels: {
      Beginner: 'Principiante',
      Intermediate: 'Intermedio',
      'Spoiler Heavy': 'Muchos spoilers',
    },
  },
};

const playOnlineContent: Record<FalseSunLocale, PlayOnlineContent> = {
  en: {
    metadataTitle: 'Play The False Sun Online - Browser Game and Walkthrough',
    metadataDescription:
      'Play The False Sun online, then use walkthrough guides for all endings, Ending 20, routes, mini-games, and downloads.',
    badge: 'Play online',
    title: 'Play The False Sun Online',
    intro:
      'Start the game in your browser, then use the walkthrough pages when you are ready to clean up endings, Silas and Kyle branches, farm mini-games, or download questions.',
    allEndingsButton: 'All endings guide',
    warningsButton: 'Read warnings',
    frameLabels: {
      title: 'The False Sun online game',
      loading: 'Launching The False Sun...',
      start: 'I am 18+ - start game',
      reset: 'Restart game',
      fullscreen: 'Enter fullscreen',
      exitFullscreen: 'Exit fullscreen',
      open: 'Open game in new tab',
    },
    infoCards: [
      {
        key: 'mature',
        title: 'Mature content',
        body: 'Expect adult themes, disturbing scenes, flashing visuals, sudden audio, and route spoilers once you open the guides.',
      },
      {
        key: 'saves',
        title: 'Browser save care',
        body: 'Browser saves can depend on device, browser, and private-mode settings. Export saves before clearing site data.',
      },
      {
        key: 'downloads',
        title: 'Official downloads',
        body: 'Use the creator page for Windows, macOS, Linux, and Android downloadable builds.',
      },
    ],
    downloadGuide: 'Download guide',
    officialItch: 'Oniray on itch.io',
    howEyebrow: 'How to play',
    howTitle: 'Read slowly, save often, and watch how choices change the farm',
    howBody:
      'The False Sun is a story-first visual novel. Most of the game is about reading dialogue, noticing tone shifts, and choosing how you react when a familiar farm starts to feel wrong.',
    howCards: [
      {
        label: 'Start',
        body: 'Use the play button above, wait for the RenPy loading screen, then click or tap inside the game frame to focus it.',
      },
      {
        label: 'Controls',
        body: 'Click, tap, Space, or Enter to advance dialogue. Use the on-screen menu for saving, loading, preferences, and skipping text you have already seen.',
      },
      {
        label: 'Choices',
        body: 'Dialogue choices can push routes toward different endings. Treat nervous, brave, trusting, and resistant answers as route signals.',
      },
      {
        label: 'Saves',
        body: 'Save before major choices, mini-games, and route turns. Browser saves depend on your device and can disappear if site data is cleared.',
      },
      {
        label: 'Language',
        body: 'If the game opens in Russian first, check the settings menu and look for the English language option before downloading another copy.',
      },
    ],
    afterEyebrow: 'After playing',
    afterTitle: 'Turn a first run into clean ending progress',
    guideLinks: [
      {
        title: 'All Endings Guide',
        href: '/all-endings',
        body: 'Use save branches to clean up all 20 ending slots after a first run.',
        icon: 'list',
      },
      {
        title: 'Ending 20',
        href: '/ending-20',
        body: 'Test the opening farm tutorial fail route without rebuilding late choices.',
        icon: 'gamepad',
      },
      {
        title: 'Save Points',
        href: '/save-points',
        body: 'Make clean saves before tutorial, animal tasks, and route forks.',
        icon: 'book',
      },
      {
        title: 'Route Guides',
        href: '/guides',
        body: 'Open Silas, Kyle, mini-games, download, and warning pages from one hub.',
        icon: 'book',
      },
    ],
    warningsTitle: 'Content warnings',
    faq: [
      {
        question: 'Can I play The False Sun online here?',
        answer:
          'Yes. Press the start button above and the game will load in your browser.',
      },
      {
        question: 'How do I control The False Sun?',
        answer:
          'Click or tap to advance dialogue, select choices when they appear, and use the in-game menu for saving, loading, preferences, and skip options.',
      },
      {
        question: 'What if The False Sun opens in Russian?',
        answer:
          'Open the in-game settings menu and look for the English language option. If you are still stuck, check the official itch.io comments for current player troubleshooting.',
      },
      {
        question: 'Should I play online or download the official build?',
        answer:
          'Use play online for a quick first run. Use the official itch.io build if you are doing all-endings cleanup and need more reliable local saves.',
      },
    ],
  },
  ru: {
    metadataTitle: 'Играть в The False Sun онлайн - браузерная версия и гайд',
    metadataDescription:
      'Играйте в The False Sun онлайн, затем используйте гайды по концовкам, Ending 20, маршрутам, мини-играм и загрузке.',
    badge: 'Играть онлайн',
    title: 'Играть в The False Sun онлайн',
    intro:
      'Запустите игру в браузере, а затем откройте прохождение для концовок, маршрутов Silas и Kyle, мини-игр на ферме или вопросов загрузки.',
    allEndingsButton: 'Гайд по концовкам',
    warningsButton: 'Предупреждения',
    frameLabels: {
      title: 'The False Sun онлайн',
      loading: 'Запуск The False Sun...',
      start: 'Мне 18+ - начать игру',
      reset: 'Перезапустить',
      fullscreen: 'Полный экран',
      exitFullscreen: 'Выйти из полного экрана',
      open: 'Открыть в новой вкладке',
    },
    infoCards: [
      {
        key: 'mature',
        title: 'Взрослый контент',
        body: 'Ожидайте взрослые темы, тревожные сцены, мигающие эффекты, внезапный звук и спойлеры в гайдах.',
      },
      {
        key: 'saves',
        title: 'Сохранения в браузере',
        body: 'Сохранения зависят от устройства, браузера и приватного режима. Не очищайте данные сайта перед прохождением.',
      },
      {
        key: 'downloads',
        title: 'Официальные загрузки',
        body: 'Для Windows, macOS, Linux и Android используйте страницу автора.',
      },
    ],
    downloadGuide: 'Гайд по загрузке',
    officialItch: 'Oniray на itch.io',
    howEyebrow: 'Как играть',
    howTitle: 'Читайте медленно, часто сохраняйтесь и следите за выборами',
    howBody:
      'The False Sun - сюжетная визуальная новелла. Главное здесь читать диалоги, замечать смену тона и выбирать реакцию, когда знакомая ферма становится тревожной.',
    howCards: [
      {
        label: 'Старт',
        body: 'Нажмите кнопку запуска, дождитесь экрана RenPy и кликните или тапните внутри фрейма.',
      },
      {
        label: 'Управление',
        body: 'Клик, тап, Space или Enter продвигают диалог. В меню игры доступны сохранение, загрузка, настройки и пропуск уже виденного текста.',
      },
      {
        label: 'Выборы',
        body: 'Ответы могут вести к разным концовкам. Страх, доверие, сопротивление и мягкие ответы считайте сигналами маршрута.',
      },
      {
        label: 'Сохранения',
        body: 'Сохраняйтесь перед важными выборами, мини-играми и поворотами маршрута.',
      },
      {
        label: 'Язык',
        body: 'Если игра открылась на русском, проверьте настройки и выберите английский, прежде чем скачивать другую копию.',
      },
    ],
    afterEyebrow: 'После игры',
    afterTitle: 'Превратите первый проход в прогресс по концовкам',
    guideLinks: [
      {
        title: 'Все концовки',
        href: '/all-endings',
        body: 'Используйте сохранения, чтобы закрыть все 20 слотов после первого прохода.',
        icon: 'list',
      },
      {
        title: 'Ending 20',
        href: '/ending-20',
        body: 'Проверьте провал раннего farm tutorial без перестройки поздних выборов.',
        icon: 'gamepad',
      },
      {
        title: 'Сохранения',
        href: '/save-points',
        body: 'Делайте чистые сохранения перед tutorial, заданиями с животными и развилками.',
        icon: 'book',
      },
      {
        title: 'Все гайды',
        href: '/guides',
        body: 'Откройте Silas, Kyle, мини-игры, загрузку и предупреждения из одного хаба.',
        icon: 'book',
      },
    ],
    warningsTitle: 'Предупреждения о контенте',
    faq: [
      {
        question: 'Можно играть в The False Sun онлайн здесь?',
        answer: 'Да. Нажмите кнопку старта, и игра загрузится в браузере.',
      },
      {
        question: 'Как управлять игрой?',
        answer:
          'Кликайте или нажимайте Space/Enter для диалогов, выбирайте ответы и используйте меню игры для сохранения, загрузки и настроек.',
      },
      {
        question: 'Что делать, если игра открылась на русском?',
        answer:
          'Откройте настройки игры и найдите английский язык. Если не получается, проверьте свежие комментарии на официальной странице itch.io.',
      },
      {
        question: 'Играть онлайн или скачать официальную сборку?',
        answer:
          'Онлайн удобно для первого прохода. Для охоты за всеми концовками лучше официальная сборка с itch.io и стабильные локальные сохранения.',
      },
    ],
  },
  'pt-BR': {
    metadataTitle: 'Jogar The False Sun online - versão de navegador e guia',
    metadataDescription:
      'Jogue The False Sun online e use guias para todos os finais, Ending 20, rotas, mini-games e downloads.',
    badge: 'Jogar online',
    title: 'Jogar The False Sun online',
    intro:
      'Comece no navegador e depois use os guias para limpar finais, rotas do Silas e Kyle, mini-games da fazenda ou dúvidas de download.',
    allEndingsButton: 'Guia de finais',
    warningsButton: 'Ler avisos',
    frameLabels: {
      title: 'The False Sun online',
      loading: 'Abrindo The False Sun...',
      start: 'Tenho 18+ - começar',
      reset: 'Reiniciar',
      fullscreen: 'Tela cheia',
      exitFullscreen: 'Sair da tela cheia',
      open: 'Abrir em nova aba',
    },
    infoCards: [
      {
        key: 'mature',
        title: 'Conteúdo maduro',
        body: 'Espere temas adultos, cenas perturbadoras, efeitos piscando, áudio repentino e spoilers nas guias.',
      },
      {
        key: 'saves',
        title: 'Cuidado com saves',
        body: 'Saves do navegador dependem do dispositivo, navegador e modo privado. Evite limpar dados do site.',
      },
      {
        key: 'downloads',
        title: 'Downloads oficiais',
        body: 'Use a página do criador para builds de Windows, macOS, Linux e Android.',
      },
    ],
    downloadGuide: 'Guia de download',
    officialItch: 'Oniray no itch.io',
    howEyebrow: 'Como jogar',
    howTitle: 'Leia devagar, salve bastante e observe as escolhas',
    howBody:
      'The False Sun é uma visual novel focada em história. O importante é ler diálogos, notar mudanças de tom e escolher reações quando a fazenda começa a parecer errada.',
    howCards: [
      {
        label: 'Começo',
        body: 'Use o botão acima, espere a tela do RenPy e clique ou toque dentro do frame.',
      },
      {
        label: 'Controles',
        body: 'Clique, toque, Space ou Enter avançam diálogo. O menu do jogo tem save, load, preferências e skip.',
      },
      {
        label: 'Escolhas',
        body: 'Respostas nervosas, corajosas, confiantes ou resistentes podem empurrar a rota para finais diferentes.',
      },
      {
        label: 'Saves',
        body: 'Salve antes de escolhas grandes, mini-games e viradas de rota.',
      },
      {
        label: 'Idioma',
        body: 'Se o jogo abrir em russo, procure a opção de inglês nas configurações antes de baixar outra cópia.',
      },
    ],
    afterEyebrow: 'Depois de jogar',
    afterTitle: 'Transforme a primeira run em progresso de finais',
    guideLinks: [
      {
        title: 'Todos os finais',
        href: '/all-endings',
        body: 'Use saves por ramo para limpar os 20 slots depois da primeira run.',
        icon: 'list',
      },
      {
        title: 'Ending 20',
        href: '/ending-20',
        body: 'Teste a falha no tutorial da fazenda sem refazer escolhas tardias.',
        icon: 'gamepad',
      },
      {
        title: 'Pontos de save',
        href: '/save-points',
        body: 'Faça saves limpos antes do tutorial, animais e bifurcações.',
        icon: 'book',
      },
      {
        title: 'Guias de rota',
        href: '/guides',
        body: 'Abra Silas, Kyle, mini-games, download e avisos em um hub.',
        icon: 'book',
      },
    ],
    warningsTitle: 'Avisos de conteúdo',
    faq: [
      {
        question: 'Posso jogar The False Sun online aqui?',
        answer: 'Sim. Aperte o botão de início e o jogo carrega no navegador.',
      },
      {
        question: 'Como controlo The False Sun?',
        answer:
          'Clique ou toque para avançar diálogo, escolha opções e use o menu do jogo para salvar, carregar e ajustar preferências.',
      },
      {
        question: 'E se The False Sun abrir em russo?',
        answer:
          'Abra as configurações do jogo e procure o idioma inglês. Se ainda travar, veja os comentários oficiais no itch.io.',
      },
      {
        question: 'Jogar online ou baixar a build oficial?',
        answer:
          'Use online para uma primeira run rápida. Baixe pelo itch.io oficial se for limpar todos os finais e precisar de saves mais estáveis.',
      },
    ],
  },
  es: {
    metadataTitle: 'Jugar The False Sun online - navegador y guía',
    metadataDescription:
      'Juega The False Sun online y usa guías para todos los finales, Ending 20, rutas, minijuegos y descargas.',
    badge: 'Jugar online',
    title: 'Jugar The False Sun online',
    intro:
      'Empieza en el navegador y luego usa las guías para limpiar finales, rutas de Silas y Kyle, minijuegos de la granja o dudas de descarga.',
    allEndingsButton: 'Guía de finales',
    warningsButton: 'Leer advertencias',
    frameLabels: {
      title: 'The False Sun online',
      loading: 'Abriendo The False Sun...',
      start: 'Tengo 18+ - empezar',
      reset: 'Reiniciar',
      fullscreen: 'Pantalla completa',
      exitFullscreen: 'Salir de pantalla completa',
      open: 'Abrir en nueva pestaña',
    },
    infoCards: [
      {
        key: 'mature',
        title: 'Contenido maduro',
        body: 'Espera temas adultos, escenas perturbadoras, efectos parpadeantes, audio repentino y spoilers en las guías.',
      },
      {
        key: 'saves',
        title: 'Cuidado con guardados',
        body: 'Los guardados del navegador dependen del dispositivo, navegador y modo privado. Evita borrar datos del sitio.',
      },
      {
        key: 'downloads',
        title: 'Descargas oficiales',
        body: 'Usa la página del creador para builds de Windows, macOS, Linux y Android.',
      },
    ],
    downloadGuide: 'Guía de descarga',
    officialItch: 'Oniray en itch.io',
    howEyebrow: 'Cómo jugar',
    howTitle: 'Lee despacio, guarda seguido y observa las elecciones',
    howBody:
      'The False Sun es una visual novel centrada en la historia. Lo importante es leer diálogos, notar cambios de tono y elegir cómo reaccionar cuando la granja familiar empieza a sentirse mal.',
    howCards: [
      {
        label: 'Inicio',
        body: 'Usa el botón de arriba, espera la pantalla de RenPy y haz clic o toca dentro del marco.',
      },
      {
        label: 'Controles',
        body: 'Clic, toque, Space o Enter avanzan diálogo. El menú del juego tiene guardar, cargar, preferencias y salto.',
      },
      {
        label: 'Elecciones',
        body: 'Respuestas nerviosas, valientes, confiadas o resistentes pueden mover la ruta hacia finales distintos.',
      },
      {
        label: 'Guardados',
        body: 'Guarda antes de elecciones grandes, minijuegos y cambios de ruta.',
      },
      {
        label: 'Idioma',
        body: 'Si el juego abre en ruso, busca la opción de inglés en ajustes antes de descargar otra copia.',
      },
    ],
    afterEyebrow: 'Después de jugar',
    afterTitle: 'Convierte la primera partida en progreso de finales',
    guideLinks: [
      {
        title: 'Todos los finales',
        href: '/all-endings',
        body: 'Usa guardados por rama para limpiar los 20 slots después de la primera partida.',
        icon: 'list',
      },
      {
        title: 'Ending 20',
        href: '/ending-20',
        body: 'Prueba el fallo del tutorial de la granja sin rehacer elecciones tardías.',
        icon: 'gamepad',
      },
      {
        title: 'Puntos de guardado',
        href: '/save-points',
        body: 'Crea guardados limpios antes del tutorial, animales y bifurcaciones.',
        icon: 'book',
      },
      {
        title: 'Guías de ruta',
        href: '/guides',
        body: 'Abre Silas, Kyle, minijuegos, descarga y advertencias desde un hub.',
        icon: 'book',
      },
    ],
    warningsTitle: 'Advertencias de contenido',
    faq: [
      {
        question: '¿Puedo jugar The False Sun online aquí?',
        answer:
          'Sí. Pulsa el botón de inicio y el juego cargará en tu navegador.',
      },
      {
        question: '¿Cómo controlo The False Sun?',
        answer:
          'Haz clic o toca para avanzar diálogo, elige opciones y usa el menú del juego para guardar, cargar y cambiar preferencias.',
      },
      {
        question: '¿Qué hago si The False Sun abre en ruso?',
        answer:
          'Abre los ajustes del juego y busca el idioma inglés. Si sigues atascado, revisa los comentarios oficiales en itch.io.',
      },
      {
        question: '¿Juego online o descargo la build oficial?',
        answer:
          'Usa online para una primera partida rápida. Descarga desde itch.io oficial si vas a limpiar todos los finales y necesitas guardados más estables.',
      },
    ],
  },
};

const guideOverrides: Partial<Record<FalseSunLocale, LocalizedGuideOverrides>> =
  {
    ru: {
      'all-endings': {
        title: 'The False Sun: все концовки',
        seoTitle: 'The False Sun все концовки - прохождение 20 финалов',
        seoDescription:
          'Гайд по 20 концовкам The False Sun: группы маршрутов, сохранения, Silas, Kyle, Ending 20 и безопасная очистка галереи.',
        summary:
          'Начните здесь, если галерея застряла. Гайд группирует 20 концовок по маршрутам, сохранениям и уровню уверенности.',
        tags: ['20 концовок', 'Прохождение', 'Спойлеры'],
        body: [
          {
            heading: 'Думайте группами маршрутов',
            paragraphs: [
              'The False Sun проще проходить не как прямой список концовок, а как дерево сохранений. Разделите раннюю ферму, страх, побег, конфронтацию, теплый маршрут Silas и farm tutorial fail для Ending 20.',
              'Не начинайте игру заново после каждого слота. Делайте сохранения перед большими развилками и меняйте только один выбор за раз.',
            ],
            bullets: [
              'Сохранение перед ранним farm tutorial.',
              'Сохранение перед выбором страха или доверия.',
              'Сохранение перед побегом, дорогой или водой.',
              'Сохранение перед поздней цепочкой Silas.',
              'Сохранение перед проверкой Ending 20.',
            ],
          },
          {
            heading: 'Если не хватает одного слота',
            paragraphs: [
              'Если недостающий слот похож на Silas, идите на маршрут Silas. Если он связан с ранней фермой или странным fail state, проверьте Ending 20. Если это более спокойное последствие фермы, проверьте Kyle.',
            ],
          },
          {
            heading: 'Порядок очистки',
            paragraphs: [
              'Сначала сделайте один обычный проход. Затем закройте основные плохие и побеговые ветки. После этого разделите теплую цепочку Silas, Kyle-последствия и Ending 20.',
              'Записывайте номер слота, имя сохранения и измененный выбор. Без заметок маршруты начинают казаться случайными.',
            ],
          },
        ],
        faq: [
          {
            question: 'Сколько концовок в The False Sun?',
            answer:
              'Сообщество сейчас отслеживает 20 концовок. Этот сайт группирует их как маршрутные слоты, пока официальные английские названия проверяются.',
          },
          {
            question: 'Нужно ли каждый раз начинать сначала?',
            answer:
              'Нет. Используйте сохранения перед развилками, чтобы переигрывать короткие участки.',
          },
          {
            question: 'Где искать Ending 20?',
            answer:
              'Сейчас лучший след указывает на ранний farm tutorial или animal task fail, а не на поздний выбор Silas.',
          },
        ],
      },
      'ending-20': {
        title: 'The False Sun Ending 20',
        seoTitle: 'The False Sun Ending 20 - tutorial fail route',
        seoDescription:
          'Как искать Ending 20 в The False Sun через ранний farm tutorial или animal placement fail, сохранения и безопасные повторы.',
        summary:
          'Ending 20 сейчас больше похож на провал раннего farm tutorial, а не на позднюю романтическую развилку.',
        tags: ['Ending 20', 'Tutorial', 'Ферма'],
        body: [
          {
            heading: 'Почему Ending 20 выбивается из остальных',
            paragraphs: [
              'Большинство концовок завязаны на тон отношений с Silas. Ending 20, по свежим сообщениям игроков, лучше искать в ранней фермерской задаче или animal placement fail.',
              'Начните с сохранения до tutorial, специально ошибитесь в задании и проверьте, меняется ли маршрут.',
            ],
          },
          {
            heading: 'Цикл проверки',
            paragraphs: [
              'Загрузите сохранение до первого farm tutorial. Провалите задание намеренно. Если ничего не меняется, вернитесь еще раньше и повторите с чистым состоянием.',
            ],
            bullets: [
              'Не меняйте поздние выборы Silas во время этой проверки.',
              'Не сохраняйтесь после результата, если ветка не сработала.',
              'Записывайте, какую ошибку вы тестировали.',
            ],
          },
          {
            heading: 'Частая ошибка',
            paragraphs: [
              'Игроки часто ищут Ending 20 в финальном сне или романтической цепочке. Это тратит время, потому что текущий след ведет к ранней ферме.',
            ],
          },
        ],
        faq: [
          {
            question: 'Ending 20 случайная?',
            answer:
              'Сейчас она больше похожа на ранний tutorial или animal-task fail. Точный триггер остается community-verified, не официальным.',
          },
          {
            question: 'Где сохраняться?',
            answer: 'До открытия farm tutorial или первой задачи с животными.',
          },
        ],
      },
      'silas-route': {
        title: 'The False Sun: маршрут Silas',
        seoTitle: 'The False Sun маршрут Silas - выборы, сохранения и концовки',
        seoDescription:
          'Спойлерный гайд по маршруту Silas в The False Sun: страх, конфронтация, побег, теплая ветка и сохранения.',
        summary:
          'Silas лучше разбирать как несколько семей маршрутов: страх, конфронтация, побег и теплая цепочка.',
        tags: ['Silas', 'Маршрут', 'Сохранения'],
        body: [
          {
            heading: 'Разделите Silas на четыре семьи',
            paragraphs: [
              'Не пытайтесь решить Silas одним проходом. Сделайте отдельные сохранения для страха, конфронтации, побега и теплой цепочки.',
              'Один мягкий ответ поздно не исправит маршрут, который раньше строился на панике или сопротивлении.',
            ],
          },
          {
            heading: 'Где сохраняться',
            paragraphs: [
              'Сохраняйтесь перед сценой в кровати, ответами о страхе, восстановлением памяти, конфронтацией, пирсом, деревом, вопросом о прошлом и финальным сном.',
            ],
          },
          {
            heading: 'Если Silas не дает новый слот',
            paragraphs: [
              'Вернитесь к первому выбору, который меняет тон маршрута. Не переписывайте сразу все ответы. Меняйте один выбор и записывайте результат.',
            ],
          },
        ],
        faq: [
          {
            question: 'Есть ли у Silas более спокойная концовка?',
            answer:
              'Похоже, есть более мягкая ветка расставания, но ей нужна последовательная теплая цепочка выборов.',
          },
          {
            question: 'Можно смешивать побег и теплые ответы?',
            answer:
              'Для тестов лучше нет. Держите отдельные сохранения для каждой семьи маршрута.',
          },
        ],
      },
      download: {
        title: 'The False Sun скачать',
        seoTitle:
          'The False Sun скачать - официальный itch.io, Android, Mac и PC',
        seoDescription:
          'Где скачать The False Sun безопасно: официальный itch.io, Android, Windows, Linux, macOS, язык игры и предупреждения об APK.',
        summary:
          'Скачивайте The False Sun только через официальную страницу itch.io. Этот сайт не хранит файлы и не советует APK-зеркала.',
        tags: ['Скачать', 'Android', 'itch.io'],
        body: [
          {
            heading: 'Официальный путь загрузки',
            paragraphs: [
              'Используйте официальную страницу Oniray на itch.io. Там находятся актуальные файлы для Android, Windows/Linux и macOS.',
              'Если сайт обещает mod APK, unlocked gallery или маленький APK-зеркало, пропустите его, если автор не дал такую ссылку сам.',
            ],
          },
          {
            heading: 'Android, PC и Mac',
            paragraphs: [
              'На Android выбирайте официальный Android-файл. На PC используйте Windows/Linux build. На Mac возможны обычные предупреждения безопасности для indie-приложений.',
            ],
          },
          {
            heading: 'Если игра открылась на русском',
            paragraphs: [
              'Проверьте настройки игры и найдите английский язык. Не скачивайте другую копию только из-за языка интерфейса.',
            ],
          },
        ],
        faq: [
          {
            question: 'Где скачать The False Sun?',
            answer:
              'На официальной странице Oniray на itch.io. Не используйте зеркала APK.',
          },
          {
            question: 'Есть ли Android-версия?',
            answer: 'Да, официальная страница itch.io указывает Android-файл.',
          },
          {
            question: 'Что значит скачать?',
            answer:
              'Это download. Для The False Sun безопасный download означает официальный itch.io.',
          },
        ],
      },
      'itch-io': {
        title: 'The False Sun itch.io',
        seoTitle: 'The False Sun itch.io - официальная страница и файлы',
        seoDescription:
          'Официальная страница The False Sun на itch.io: Oniray, файлы Android, Windows/Linux, Mac, комментарии и безопасная загрузка.',
        summary:
          'Используйте эту страницу, если ищете настоящий listing The False Sun на itch.io и хотите избежать зеркал.',
        tags: ['itch.io', 'Официально', 'Файлы'],
        body: [
          {
            heading: 'Используйте listing Oniray',
            paragraphs: [
              'Официальная страница The False Sun находится у Oniray на itch.io. Она нужна для имени автора, предупреждений, статуса релиза и файлов.',
            ],
          },
          {
            heading: 'Что проверять в комментариях',
            paragraphs: [
              'Свежие комментарии полезны для Mac-ошибок, выбора языка и подсказок по Ending 20. Но они не заменяют официальные файлы автора.',
            ],
            bullets: [
              'Язык: проверьте English в настройках.',
              'Ending 20: ищите подсказки про провал раннего tutorial.',
              'Загрузка: используйте только официальные файлы itch.io.',
            ],
          },
        ],
        faq: [
          {
            question: 'Это официальный itch.io?',
            answer:
              'Нет. Это фан-гайд, который направляет на официальную страницу Oniray.',
          },
          {
            question: 'Можно использовать сторонний APK?',
            answer: 'Нет. Используйте официальный Android-файл на itch.io.',
          },
        ],
      },
      'content-warnings': {
        title: 'The False Sun: предупреждения',
        seoTitle: 'The False Sun предупреждения - зрелая visual novel',
        seoDescription:
          'Спойлер-легкие предупреждения по The False Sun: взрослые темы, насилие, тревожные сцены, мигание и громкие звуки.',
        summary:
          'The False Sun предназначена для взрослой аудитории. Прочитайте это перед спойлерными гайдами.',
        tags: ['Предупреждения', 'Взрослый контент'],
        body: [
          {
            heading: 'Кратко о предупреждениях',
            paragraphs: [
              'Официальная страница указывает взрослую аудиторию, физическое и эмоциональное насилие, тревожные темы, мигающие эффекты и внезапные громкие звуки.',
            ],
          },
          {
            heading: 'Перед страницами концовок',
            paragraphs: [
              'Все концовки, Silas Route и Ending 20 содержат сильные сюжетные спойлеры. Если вам нужен только download, начните со страницы загрузки.',
            ],
          },
        ],
        faq: [
          {
            question: 'The False Sun для взрослых?',
            answer: 'Да, официальная страница помечает игру как mature.',
          },
          {
            question: 'Гайды без спойлеров?',
            answer:
              'Нет. Маршрутные и ending-страницы по природе содержат спойлеры.',
          },
        ],
      },
    },
    'pt-BR': {
      'all-endings': {
        title: 'The False Sun: todos os finais',
        seoTitle: 'The False Sun todos os finais - guia dos 20 finais',
        seoDescription:
          'Guia dos 20 finais de The False Sun com rotas, saves, Silas, Kyle, Ending 20 e limpeza segura da galeria.',
        summary:
          'Comece aqui se sua galeria travou. O guia agrupa os 20 finais por rota, save e nível de confiança.',
        tags: ['20 finais', 'Guia', 'Spoilers'],
        body: [
          {
            heading: 'Pense em famílias de rota',
            paragraphs: [
              'The False Sun é mais fácil quando você trata os finais como uma árvore de saves: fazenda inicial, medo, fuga, confronto, rota quente do Silas e falha no farm tutorial para Ending 20.',
              'Não reinicie tudo para cada slot. Salve antes de grandes bifurcações e mude uma escolha por vez.',
            ],
          },
          {
            heading: 'Se falta só um slot',
            paragraphs: [
              'Se parece um final do Silas, use a rota do Silas. Se parece uma falha inicial de fazenda, use Ending 20. Se parece um pós-fazenda mais calmo, confira Kyle.',
            ],
          },
        ],
        faq: [
          {
            question: 'Quantos finais The False Sun tem?',
            answer:
              'A comunidade acompanha 20 finais. Este site os organiza como slots de rota enquanto os nomes oficiais são confirmados.',
          },
          {
            question: 'Preciso recomeçar para cada final?',
            answer:
              'Não. Use saves antes de bifurcações para repetir trechos curtos.',
          },
        ],
      },
      'ending-20': {
        title: 'The False Sun Ending 20',
        seoTitle: 'The False Sun Ending 20 - rota de falha no tutorial',
        seoDescription:
          'Como buscar Ending 20 em The False Sun usando falha no farm tutorial, animal placement, saves e tentativas seguras.',
        summary:
          'Ending 20 parece mais ligado a uma falha no tutorial inicial da fazenda do que a uma escolha romântica tardia.',
        tags: ['Ending 20', 'Tutorial', 'Fazenda'],
        body: [
          {
            heading: 'Por que Ending 20 é diferente',
            paragraphs: [
              'A maioria dos finais depende do tom com Silas. Ending 20, segundo relatos recentes, deve ser testado no farm tutorial ou em uma falha de animal placement.',
            ],
          },
          {
            heading: 'Loop recomendado',
            paragraphs: [
              'Carregue um save antes do primeiro tutorial da fazenda, falhe de propósito e veja se a rota muda. Se nada acontecer, volte um checkpoint antes.',
            ],
          },
        ],
        faq: [
          {
            question: 'Ending 20 é aleatório?',
            answer:
              'A evidência atual aponta mais para falha no tutorial ou animal task do que para pura aleatoriedade.',
          },
        ],
      },
      'silas-route': {
        title: 'The False Sun: rota do Silas',
        seoTitle: 'The False Sun rota do Silas - escolhas, saves e finais',
        seoDescription:
          'Guia com spoilers da rota do Silas em The False Sun: medo, confronto, fuga, rota afetiva e saves.',
        summary:
          'Silas funciona melhor como quatro famílias: medo, confronto, fuga e cadeia afetiva.',
        tags: ['Silas', 'Rota', 'Saves'],
        body: [
          {
            heading: 'Divida Silas em quatro famílias',
            paragraphs: [
              'Não tente resolver Silas em uma única run. Tenha saves separados para medo, confronto, fuga e rota afetiva.',
            ],
          },
          {
            heading: 'Saves principais',
            paragraphs: [
              'Salve antes da cena da cama, respostas de medo, memória, confronto, pier, árvore, pergunta sobre passado e sonho final.',
            ],
          },
        ],
        faq: [
          {
            question: 'Existe um final bom do Silas?',
            answer:
              'Parece existir um ramo mais calmo, mas ele exige uma cadeia quente e consistente de escolhas.',
          },
        ],
      },
      download: {
        title: 'The False Sun download',
        seoTitle: 'The False Sun download - itch.io oficial, Android, Mac e PC',
        seoDescription:
          'Baixe The False Sun com segurança pelo itch.io oficial, entenda Android, macOS, Windows, Linux, idioma e riscos de APK.',
        summary:
          'Use a página oficial do itch.io para baixar The False Sun. Este site não hospeda arquivos nem recomenda APKs espelhados.',
        tags: ['Download', 'Android', 'itch.io'],
        body: [
          {
            heading: 'Caminho oficial',
            paragraphs: [
              'Baixe pela página oficial da Oniray no itch.io. Ela é a fonte para Android, Windows/Linux e macOS.',
              'Evite mod APK, galeria desbloqueada, mirror menor ou arquivo reupado se a própria Oniray não linkar.',
            ],
          },
          {
            heading: 'Se o jogo abrir em russo',
            paragraphs: [
              'Abra as configurações do jogo e procure a opção de inglês antes de baixar outra cópia.',
            ],
          },
        ],
        faq: [
          {
            question: 'Onde baixar The False Sun?',
            answer: 'Na página oficial da Oniray no itch.io.',
          },
          {
            question: 'Existe Android?',
            answer: 'Sim, o itch.io oficial lista um arquivo Android.',
          },
        ],
      },
      'itch-io': {
        title: 'The False Sun itch.io',
        seoTitle: 'The False Sun itch.io - página oficial e arquivos',
        seoDescription:
          'Página oficial de The False Sun no itch.io: Oniray, arquivos Android, Windows/Linux, Mac, comentários e download seguro.',
        summary:
          'Use esta página se você está tentando achar o listing real de The False Sun no itch.io.',
        tags: ['itch.io', 'Oficial', 'Arquivos'],
        body: [
          {
            heading: 'Use o listing da Oniray',
            paragraphs: [
              'A página oficial de The False Sun é o listing da Oniray no itch.io. Use-a para arquivos, avisos e status do jogo.',
            ],
          },
          {
            heading: 'O que checar nos comentários',
            paragraphs: [
              'Comentários recentes ajudam com Mac, idioma e pistas de Ending 20, mas não substituem arquivos oficiais.',
            ],
          },
        ],
        faq: [
          {
            question: 'Este site é o itch.io oficial?',
            answer:
              'Não. É um fan guide que aponta para a página oficial da Oniray.',
          },
        ],
      },
      'content-warnings': {
        title: 'The False Sun avisos de conteúdo',
        seoTitle: 'The False Sun avisos - visual novel madura',
        seoDescription:
          'Avisos com poucos spoilers para The False Sun: temas adultos, violência, cenas perturbadoras, efeitos piscando e sons altos.',
        summary:
          'The False Sun é para público adulto. Leia isto antes das guias com spoilers.',
        tags: ['Avisos', 'Maduro'],
        body: [
          {
            heading: 'Resumo sem grandes spoilers',
            paragraphs: [
              'A página oficial alerta para público adulto, violência física e emocional, temas perturbadores, efeitos piscando e sons repentinos.',
            ],
          },
        ],
        faq: [
          {
            question: 'The False Sun é para adultos?',
            answer: 'Sim. A página oficial marca o jogo como mature.',
          },
        ],
      },
    },
    es: {
      'all-endings': {
        title: 'The False Sun: todos los finales',
        seoTitle: 'The False Sun todos los finales - guía de 20 finales',
        seoDescription:
          'Guía de los 20 finales de The False Sun con rutas, guardados, Silas, Kyle, Ending 20 y limpieza segura de galería.',
        summary:
          'Empieza aquí si la galería se atascó. La guía agrupa los 20 finales por ruta, guardado y confianza.',
        tags: ['20 finales', 'Guía', 'Spoilers'],
        body: [
          {
            heading: 'Piensa en familias de ruta',
            paragraphs: [
              'The False Sun se entiende mejor como un árbol de guardados: granja inicial, miedo, escape, confrontación, ruta cálida de Silas y fallo del farm tutorial para Ending 20.',
              'No reinicies todo por cada slot. Guarda antes de bifurcaciones grandes y cambia una elección por intento.',
            ],
          },
          {
            heading: 'Si solo falta un slot',
            paragraphs: [
              'Si parece un final de Silas, usa la ruta de Silas. Si parece una falla temprana de granja, ve a Ending 20. Si es un resultado más calmado de granja, revisa Kyle.',
            ],
          },
        ],
        faq: [
          {
            question: '¿Cuántos finales tiene The False Sun?',
            answer:
              'La comunidad sigue 20 finales. Este sitio los organiza como slots de ruta mientras se confirman los nombres oficiales.',
          },
          {
            question: '¿Debo empezar de cero para cada final?',
            answer:
              'No. Usa guardados antes de bifurcaciones para repetir tramos cortos.',
          },
        ],
      },
      'ending-20': {
        title: 'The False Sun Ending 20',
        seoTitle: 'The False Sun Ending 20 - ruta de fallo del tutorial',
        seoDescription:
          'Cómo buscar Ending 20 en The False Sun con fallo del farm tutorial, animal placement, guardados y reintentos seguros.',
        summary:
          'Ending 20 parece más ligado a fallar el tutorial inicial de la granja que a una elección romántica tardía.',
        tags: ['Ending 20', 'Tutorial', 'Granja'],
        body: [
          {
            heading: 'Por qué Ending 20 es diferente',
            paragraphs: [
              'La mayoría de finales dependen del tono con Silas. Ending 20, según reportes recientes, debe probarse en el farm tutorial o en una falla de animal placement.',
            ],
          },
          {
            heading: 'Bucle recomendado',
            paragraphs: [
              'Carga un guardado antes del primer tutorial de la granja, falla a propósito y mira si la ruta cambia. Si no pasa nada, vuelve un checkpoint antes.',
            ],
          },
        ],
        faq: [
          {
            question: '¿Ending 20 es aleatorio?',
            answer:
              'La evidencia actual apunta más a un fallo de tutorial o animal task que a puro azar.',
          },
        ],
      },
      'silas-route': {
        title: 'The False Sun: ruta de Silas',
        seoTitle:
          'The False Sun ruta de Silas - elecciones, guardados y finales',
        seoDescription:
          'Guía con spoilers de la ruta de Silas en The False Sun: miedo, confrontación, escape, ruta afectiva y guardados.',
        summary:
          'Silas se entiende mejor como cuatro familias: miedo, confrontación, escape y cadena afectiva.',
        tags: ['Silas', 'Ruta', 'Guardados'],
        body: [
          {
            heading: 'Divide a Silas en cuatro familias',
            paragraphs: [
              'No intentes resolver a Silas en una sola partida. Ten guardados separados para miedo, confrontación, escape y ruta afectiva.',
            ],
          },
          {
            heading: 'Guardados principales',
            paragraphs: [
              'Guarda antes de la cama, respuestas de miedo, memoria, confrontación, muelle, árbol, pregunta sobre el pasado y sueño final.',
            ],
          },
        ],
        faq: [
          {
            question: '¿Hay un final bueno de Silas?',
            answer:
              'Parece haber una rama más tranquila, pero necesita una cadena cálida y consistente de elecciones.',
          },
        ],
      },
      download: {
        title: 'The False Sun descarga',
        seoTitle: 'The False Sun descarga - itch.io oficial, Android, Mac y PC',
        seoDescription:
          'Descarga The False Sun de forma segura desde itch.io oficial y entiende Android, macOS, Windows, Linux, idioma y riesgos de APK.',
        summary:
          'Usa la página oficial de itch.io para descargar The False Sun. Este sitio no aloja archivos ni recomienda APKs espejo.',
        tags: ['Descarga', 'Android', 'itch.io'],
        body: [
          {
            heading: 'Ruta oficial',
            paragraphs: [
              'Descarga desde la página oficial de Oniray en itch.io. Es la fuente para Android, Windows/Linux y macOS.',
              'Evita mod APK, galería desbloqueada, mirrors o archivos re-subidos si Oniray no los enlaza.',
            ],
          },
          {
            heading: 'Si el juego abre en ruso',
            paragraphs: [
              'Abre los ajustes del juego y busca la opción de inglés antes de descargar otra copia.',
            ],
          },
        ],
        faq: [
          {
            question: '¿Dónde descargar The False Sun?',
            answer: 'En la página oficial de Oniray en itch.io.',
          },
          {
            question: '¿Hay versión Android?',
            answer: 'Sí, el itch.io oficial lista un archivo Android.',
          },
        ],
      },
      'itch-io': {
        title: 'The False Sun itch.io',
        seoTitle: 'The False Sun itch.io - página oficial y archivos',
        seoDescription:
          'Página oficial de The False Sun en itch.io: Oniray, archivos Android, Windows/Linux, Mac, comentarios y descarga segura.',
        summary:
          'Usa esta página si quieres encontrar el listing real de The False Sun en itch.io.',
        tags: ['itch.io', 'Oficial', 'Archivos'],
        body: [
          {
            heading: 'Usa el listing de Oniray',
            paragraphs: [
              'La página oficial de The False Sun es el listing de Oniray en itch.io. Úsala para archivos, advertencias y estado del juego.',
            ],
          },
          {
            heading: 'Qué revisar en comentarios',
            paragraphs: [
              'Los comentarios recientes ayudan con Mac, idioma y pistas de Ending 20, pero no reemplazan los archivos oficiales.',
            ],
          },
        ],
        faq: [
          {
            question: '¿Este sitio es el itch.io oficial?',
            answer:
              'No. Es una guía fan que apunta a la página oficial de Oniray.',
          },
        ],
      },
      'content-warnings': {
        title: 'The False Sun advertencias de contenido',
        seoTitle: 'The False Sun advertencias - visual novel madura',
        seoDescription:
          'Advertencias con pocos spoilers para The False Sun: temas adultos, violencia, escenas perturbadoras, efectos parpadeantes y sonidos fuertes.',
        summary:
          'The False Sun es para público adulto. Lee esto antes de las guías con spoilers.',
        tags: ['Advertencias', 'Maduro'],
        body: [
          {
            heading: 'Resumen sin grandes spoilers',
            paragraphs: [
              'La página oficial advierte sobre público adulto, violencia física y emocional, temas perturbadores, efectos parpadeantes y sonidos repentinos.',
            ],
          },
        ],
        faq: [
          {
            question: '¿The False Sun es para adultos?',
            answer: 'Sí. La página oficial marca el juego como mature.',
          },
        ],
      },
    },
  };
