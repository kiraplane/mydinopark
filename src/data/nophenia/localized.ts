import type { Locale } from 'next-intl';
import { featuredGuides, getGuide, guides, siteDescription } from './guides';
import { gameFacts, keywordMatrix, siteFacts } from './sources';
import type { GameFact, Guide, GuideFaq } from './types';

export interface HomeContent {
  metadataTitle: string;
  title: string;
  intro: string;
  primaryCta: string;
  playCta: string;
  steamCta: string;
  scopeNote: string;
  allGuidesButton: string;
  routeLabels: Record<string, string>;
  coreRouteItems: Array<{
    keyword: string;
    route: string;
    label: string;
    intent: string;
  }>;
  faq: GuideFaq[];
}

export interface GuidesIndexContent {
  badge: string;
  title: string;
  intro: string;
  readGuide: string;
  faq: GuideFaq[];
}

export interface GuideArticleUi {
  sourceTitle: string;
  sourceBody: string;
  sectionsTitle: string;
  videoPrefix: string;
  videoSuffix: string;
  officialTitle: string;
  officialBody: string;
  officialLinkLabel: string;
  relatedTitle: string;
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
  beginnerButton: string;
  steamButton: string;
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
  media: {
    eyebrow: string;
    title: string;
    body: string;
    screenshots: Array<{
      src: string;
      alt: string;
      caption: string;
    }>;
    video: {
      id: string;
      title: string;
      caption: string;
    };
  };
  afterEyebrow: string;
  afterTitle: string;
  guideLinks: Array<{
    title: string;
    href: string;
    body: string;
    icon: 'gamepad' | 'book' | 'shield';
  }>;
  faq: GuideFaq[];
}

export function getNopheniaLocale(_locale?: Locale | string) {
  return 'en';
}

export function getLocalizedGuide(slug: string, _locale?: Locale | string) {
  return getGuide(slug);
}

export function getLocalizedGuides(_locale?: Locale | string) {
  return guides;
}

export function getLocalizedFeaturedGuides(_locale?: Locale | string) {
  return featuredGuides;
}

export function getLocalizedSiteDescription(_locale?: Locale | string) {
  return siteDescription;
}

export function getLocalizedGameFacts(_locale?: Locale | string): GameFact[] {
  return gameFacts;
}

export function getHomeContent(_locale?: Locale | string): HomeContent {
  const coreRouteItems = keywordMatrix
    .filter((item) => item.status === 'keep')
    .slice(0, 12)
    .map((item) => ({
      keyword: item.keyword,
      route: item.route,
      label: routeLabels[item.route] ?? item.route,
      intent: item.intent,
    }));

  return {
    metadataTitle: 'nophenia Wiki - Guides、Walkthrough and Play Online',
    title: 'Nophenia Wiki',
    intro:
      'A player-first nophenia wiki for the lo-fi 3D dream explorer: play nophenia online, use a practical nophenia guide, learn controls, and find a spoiler-light walkthrough route.',
    primaryCta: 'Start with the beginner guide',
    playCta: 'Play online',
    steamCta: 'Open Steam guide',
    scopeNote:
      'This nophenia wiki focuses on nophenia guide help, nophenia play online access, and the common search typo nophenia paly online.',
    allGuidesButton: 'All guides',
    routeLabels,
    coreRouteItems,
    faq: [
      {
        question: 'What is nophenia wiki?',
        answer:
          'nophenia.wiki is a focused nophenia wiki for browser play, beginner help, controls, walkthrough decisions, and guide routes.',
      },
      {
        question: 'Can I play nophenia online here?',
        answer:
          'Yes. Use the play-online page to launch nophenia in your browser, then keep this nophenia guide page open for controls and route help.',
      },
      {
        question: 'Why does the site focus on guides instead of a database?',
        answer:
          'Search demand is about nophenia, nophenia wiki, nophenia guide, nophenia play online, walkthrough, ending, and controls, so guide pages fit better than empty database pages.',
      },
    ],
  };
}

export function getGuidesIndexContent(
  _locale?: Locale | string
): GuidesIndexContent {
  return {
    badge: 'nophenia guides',
    title: 'nophenia Guide Hub',
    intro:
      'Choose the route that matches your problem: first session, browser play, controls, walkthrough and ending, 100% cleanup, Steam, community, or comfort notes.',
    readGuide: 'Read guide',
    faq: [
      {
        question: 'Which nophenia guide should I read first?',
        answer:
          'Start with the beginner guide, then read controls if browser input feels odd or walkthrough if a dream-space transition blocks you.',
      },
      {
        question: 'Are these guides for Steam or browser play?',
        answer:
          'Steam pages cover the full release, while play-online pages focus on browser controls, loading, and first-session route help.',
      },
      {
        question: 'Will you add exact achievement triggers?',
        answer:
          'Yes, when they are verified. The launch guide uses public Steam achievement identifiers and conservative cleanup logic.',
      },
    ],
  };
}

export function getGuideArticleUi(_locale?: Locale | string): GuideArticleUi {
  return {
    sourceTitle: 'How to use this guide',
    sourceBody:
      'Read only the section that solves your current block if you want to preserve the first-play mood. Use videos as cross-checks after you have explored yourself.',
    sectionsTitle: 'Sections',
    videoPrefix: 'Walkthrough cross-check:',
    videoSuffix: 'use it when you want a visual route reference.',
    officialTitle: 'Game links',
    officialBody:
      'Use Steam for the current full release and the play-online page when you want to try nophenia in the browser.',
    officialLinkLabel: 'Open Steam page',
    relatedTitle: 'Related pages',
    faqTitle: 'FAQ',
    categoryLabels: {
      Start: 'Start',
      Walkthrough: 'Walkthrough',
      Achievement: 'Achievement',
      Official: 'Release',
      Community: 'Community',
      Safety: 'Safety',
    },
    difficultyLabels: {
      Beginner: 'Beginner',
      Intermediate: 'Intermediate',
      Advanced: 'Advanced',
      Status: 'Status',
    },
  };
}

export function getPlayOnlineContent(_locale?: Locale | string) {
  return playOnlineContent;
}

export const routeLabels: Record<string, string> = {
  '/': 'nophenia Wiki',
  '/play-online': 'Play nophenia Online',
  '/guides': 'Guide Hub',
  '/guides/beginner-guide': 'Beginner Guide',
  '/guides/controls-and-comfort': 'Controls and Comfort',
  '/guides/walkthrough-ending': 'Walkthrough and Ending',
  '/guides/achievements-100-percent': '100% Achievements',
  '/steam': 'Steam Release',
  '/download': 'Download Safety',
  '/browser-version': 'Browser Version',
  '/itch-io': 'Browser Version',
  '/community': 'Community Links',
  '/comfort': 'Comfort Notes',
  '/disclaimer': 'Disclaimer',
};

const playOnlineContent: PlayOnlineContent = {
  metadataTitle: 'nophenia Play Online - nophenia guide browser game',
  metadataDescription:
    'Play nophenia online in your browser, then use nophenia guide links for controls, comfort notes, screenshots, and Steam release guidance.',
  badge: 'Play nophenia online',
  title: 'nophenia Play Online',
  intro:
    'Launch nophenia in your browser, then use the controls and nophenia guide links below to understand the dream explorer before moving to Steam.',
  beginnerButton: 'Beginner guide',
  steamButton: 'Steam release notes',
  frameLabels: {
    title: `${siteFacts.gameName} browser game`,
    loading: 'Loading nophenia...',
    start: 'Run existential crisis',
    reset: 'Reload game',
    fullscreen: 'Fullscreen',
    exitFullscreen: 'Exit fullscreen',
    open: 'Open direct',
  },
  infoCards: [
    {
      key: 'build',
      title: 'Browser play build',
      body: 'The browser game is hosted here so you can play nophenia online without leaving the nophenia wiki.',
    },
    {
      key: 'steam',
      title: 'Steam is the full release',
      body: 'Steam lists nophenia as released on Jun 26, 2026 and is the right home for the full release and complete route.',
    },
    {
      key: 'controls',
      title: 'Controls are part of the experience',
      body: 'Use WASD or arrows, Shift to run, Space to jump, Z/Enter/click to interact, C to sit, H to howl, and Tab for cursor focus.',
    },
  ],
  downloadGuide: 'Download options',
  officialItch: 'Browser version notes',
  howEyebrow: 'How to play',
  howTitle: 'Play nophenia without fighting the browser',
  howBody:
    'The first launch downloads a large Godot WebAssembly build. Wait for the progress bar, click into the frame, use Shift instead of Ctrl if shortcuts collide, and treat browser play as your first read on nophenia.',
  howCards: [
    {
      label: 'Wait for the Godot load',
      body: 'The first load pulls a large pack file and WebAssembly runtime. Let the progress bar finish before refreshing.',
    },
    {
      label: 'Click inside the frame',
      body: 'Browser games need focus. If keys do nothing, click the game area and try movement again.',
    },
    {
      label: 'Prefer Shift to run',
      body: 'Ctrl can conflict with browser shortcuts. Shift is the safer run key inside an iframe.',
    },
    {
      label: 'Use expressive buttons',
      body: 'C sits and H howls. They help you test the room mood and matter for achievement cleanup.',
    },
    {
      label: 'Pause when needed',
      body: 'P or Escape pauses. Use Tab if you need the cursor back.',
    },
    {
      label: 'Move to Steam for completion',
      body: 'Use browser play for a quick first walk and Steam for the full release, ending path, and completion tracking.',
    },
  ],
  media: {
    eyebrow: 'Game media',
    title: 'Screenshots, trailer, and what browser play feels like',
    body: 'These images show the quiet, empty, dreamlike spaces that define nophenia better than a feature checklist can.',
    screenshots: [
      {
        src: '/nophenia/screenshots/nophenia-steam-1.jpg',
        alt: 'nophenia dreamlike exterior screenshot from Steam',
        caption:
          'Steam release media frames nophenia as a small dream explorer with large quiet spaces.',
      },
      {
        src: '/nophenia/screenshots/nophenia-itch-1.png',
        alt: 'nophenia browser screenshot with liminal environment',
        caption:
          'Browser play gives a fast read on walking pace, empty rooms, and the visual tone.',
      },
      {
        src: '/nophenia/screenshots/nophenia-steam-3.jpg',
        alt: 'nophenia surreal interior screenshot from Steam',
        caption:
          'When route logic feels unclear, look for staged thresholds rather than combat markers.',
      },
    ],
    video: {
      id: 'brHDlSkKQMQ',
      title: 'nophenia pre-release trailer thingy',
      caption: 'Trailer reference for the mood, spaces, and walking pace.',
    },
  },
  afterEyebrow: 'Next steps',
  afterTitle: 'Turn browser play into a cleaner first run',
  guideLinks: [
    {
      title: 'Beginner Guide',
      href: '/guides/beginner-guide',
      body: 'Start with the right expectations and first-session rhythm.',
      icon: 'book',
    },
    {
      title: 'Controls and Comfort',
      href: '/guides/controls-and-comfort',
      body: 'Fix input confusion and use sit/howl deliberately.',
      icon: 'gamepad',
    },
    {
      title: 'Walkthrough and Ending',
      href: '/guides/walkthrough-ending',
      body: 'Use a spoiler-light route when dream spaces start looping.',
      icon: 'book',
    },
    {
      title: 'Comfort Notes',
      href: '/comfort',
      body: 'Keep liminal isolation interesting instead of overwhelming.',
      icon: 'shield',
    },
  ],
  faq: [
    {
      question: 'Is the online version free?',
      answer:
        'Yes. You can play nophenia online in the browser here, and Steam remains the full release path.',
    },
    {
      question: 'Can I fullscreen the game?',
      answer:
        'Yes. Use the fullscreen button in the toolbar. On some mobile browsers, opening the game directly may be more reliable.',
    },
    {
      question: 'Does this page replace Steam?',
      answer:
        'No. Use browser play for a quick first walk and Steam for the full release.',
    },
  ],
};
