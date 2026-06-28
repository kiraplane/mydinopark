import type { Locale } from 'next-intl';
import { featuredGuides, getGuide, guides, siteDescription } from './guides';
import { gameFacts, keywordMatrix, siteFacts } from './sources';
import type { GameFact, Guide, GuideFaq } from './types';

export interface HomeContent {
  badge: string;
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
    badge: 'nophenia guide hub',
    metadataTitle: 'nophenia Wiki - play online, walkthrough and achievements',
    title: 'nophenia',
    intro:
      'A player-first wiki for the lo-fi 3D dream explorer: play the official demo online, learn controls, find a spoiler-light route, and clean up Steam achievements.',
    primaryCta: 'Start with the beginner guide',
    playCta: 'Play online',
    steamCta: 'Open Steam guide',
    scopeNote:
      'This site covers lane’s nophenia only. It does not provide APK mirrors, modded builds, cheats, or unofficial downloads.',
    allGuidesButton: 'All guides',
    routeLabels,
    coreRouteItems,
    faq: [
      {
        question: 'Is nophenia.wiki official?',
        answer:
          'No. It is an independent guide site. Official game sources are Steam, the lane itch.io page, and creator-owned links.',
      },
      {
        question: 'Can I play nophenia online here?',
        answer:
          'Yes. The play-online page self-hosts the official itch.io HTML5 demo build with permission from the project requirements.',
      },
      {
        question: 'Why does the site focus on guides instead of a database?',
        answer:
          'Search demand is about play online, walkthrough, ending, controls, and achievements. A small guide hub fits the current evidence better than empty database pages.',
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
      'Choose the route that matches your problem: first session, browser play, controls, walkthrough and ending, 100% achievements, Steam, itch.io demo, community, or comfort notes.',
    readGuide: 'Read guide',
    faq: [
      {
        question: 'Which nophenia guide should I read first?',
        answer:
          'Start with the beginner guide, then read controls if browser input feels odd or walkthrough if a dream-space transition blocks you.',
      },
      {
        question: 'Are these guides for Steam or the browser demo?',
        answer:
          'Steam pages cover the full release. Play-online and itch.io pages clearly mark the official HTML5 demo context.',
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
    officialTitle: 'Official links',
    officialBody:
      'Use Steam for the current full release and lane’s itch.io page for the official browser demo source.',
    officialLinkLabel: 'Open official Steam page',
    relatedTitle: 'Related pages',
    faqTitle: 'FAQ',
    categoryLabels: {
      Start: 'Start',
      Walkthrough: 'Walkthrough',
      Achievement: 'Achievement',
      Official: 'Official',
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
  '/itch-io': 'itch.io Demo',
  '/community': 'Community Links',
  '/comfort': 'Comfort Notes',
  '/disclaimer': 'Disclaimer',
};

const playOnlineContent: PlayOnlineContent = {
  metadataTitle: 'nophenia Play Online - official demo in browser',
  metadataDescription:
    'Play nophenia online with the self-hosted official itch.io HTML5 demo, then read controls, comfort notes, screenshots, and Steam release guidance.',
  badge: 'Self-hosted official demo',
  title: 'nophenia Play Online',
  intro:
    'Launch the official itch.io HTML5 demo in your browser, then use the controls and guide links below to understand the dream explorer before moving to Steam.',
  beginnerButton: 'Beginner guide',
  steamButton: 'Steam release notes',
  frameLabels: {
    title: `${siteFacts.gameName} browser demo`,
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
      title: 'Official demo build',
      body: 'The browser game comes from lane’s official itch.io HTML5 demo and is self-hosted here with permission.',
    },
    {
      key: 'steam',
      title: 'Steam is the full release',
      body: 'Steam lists nophenia as released on Jun 26, 2026 and is the right home for achievements and the complete route.',
    },
    {
      key: 'controls',
      title: 'Controls are part of the experience',
      body: 'Use WASD or arrows, Shift to run, Space to jump, Z/Enter/click to interact, C to sit, H to howl, and Tab for cursor focus.',
    },
  ],
  downloadGuide: 'Read safe download guide',
  officialItch: 'Open official itch.io page',
  howEyebrow: 'How to play',
  howTitle: 'Play the demo without fighting the browser',
  howBody:
    'The first launch downloads a large Godot WebAssembly build. Wait for the progress bar, click into the frame, use Shift instead of Ctrl if shortcuts collide, and treat the demo as a mood test before Steam.',
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
      body: 'Use the browser demo for a quick first walk and Steam for the full release, ending path, and achievements.',
    },
  ],
  media: {
    eyebrow: 'Official media',
    title: 'Screenshots, trailer, and what the demo includes',
    body: 'These images come from official Steam and itch.io media. They show the quiet, empty, dreamlike spaces that define the game better than a feature checklist can.',
    screenshots: [
      {
        src: '/nophenia/screenshots/nophenia-steam-1.jpg',
        alt: 'nophenia dreamlike exterior screenshot from Steam',
        caption:
          'Steam release media frames nophenia as a small dream explorer with large quiet spaces.',
      },
      {
        src: '/nophenia/screenshots/nophenia-itch-1.png',
        alt: 'nophenia itch demo screenshot with liminal environment',
        caption:
          'The itch demo gives a fast read on walking pace, empty rooms, and the visual tone.',
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
      caption: 'Official trailer embedded on the lane itch.io page.',
    },
  },
  afterEyebrow: 'Next steps',
  afterTitle: 'Turn the demo into a cleaner first run',
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
        'The browser demo comes from the official itch.io page. Use Steam for the paid full release.',
    },
    {
      question: 'Can I fullscreen the game?',
      answer:
        'Yes. Use the fullscreen button in the toolbar. On some mobile browsers, opening the game directly may be more reliable.',
    },
    {
      question: 'Does this page replace Steam?',
      answer:
        'No. It self-hosts the official demo build and links clearly to Steam for the full release.',
    },
  ],
};
