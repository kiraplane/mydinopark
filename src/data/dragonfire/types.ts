export type SourceType =
  | 'official'
  | 'store'
  | 'support'
  | 'community'
  | 'guide_site'
  | 'manual_review';

export type Confidence = 'high' | 'medium' | 'low' | 'pending';

export interface DataSource {
  type: SourceType;
  label: string;
  url: string;
  checkedAt: string;
  confidence: Confidence;
  note?: string;
}

export interface GameCode {
  code: string;
  reward: string;
  status: 'active' | 'expired' | 'unverified';
  firstSeen?: string;
  lastChecked: string;
  sourceLabel: string;
  notes: string;
}

export type DragonRole =
  | 'Campaign Carry'
  | 'Siege'
  | 'Defense'
  | 'Resource Raid'
  | 'Alliance War'
  | 'Balanced'
  | 'Data Pending';

export type DragonTier = 'Recommended' | 'Situational' | 'Data Pending';

export interface Dragon {
  slug: string;
  name: string;
  role: DragonRole;
  tier: DragonTier;
  affinity: string;
  unlock: string;
  upgradePriority: 'High' | 'Medium' | 'Low' | 'Pending';
  bestUse: string;
  summary: string;
  strengths: string[];
  cautions: string[];
  commands: string[];
  habits: string[];
  sourceConfidence: Confidence;
  sources: DataSource[];
  lastChecked: string;
}

export interface TierEntry {
  dragonSlug: string;
  tier: DragonTier;
  rankingReason: string;
  bestFor: string[];
  earlyValue: 'High' | 'Medium' | 'Low' | 'Pending';
  longTermValue: 'High' | 'Medium' | 'Low' | 'Pending';
  resourceCost: 'High' | 'Medium' | 'Low' | 'Pending';
  sourceConfidence: Confidence;
}

export interface ResourceItem {
  slug: string;
  name: string;
  type: 'Basic' | 'Military' | 'Premium' | 'Dragon' | 'Seasonal';
  priority:
    | 'Always Spend'
    | 'Save Carefully'
    | 'Use for Timers'
    | 'Data Pending';
  bestSources: string[];
  bestUses: string[];
  avoid: string;
  sourceConfidence: Confidence;
}

export interface CampaignResetItem {
  system: string;
  likelyStatus: 'Permanent' | 'Seasonal' | 'Mixed' | 'Data Pending';
  playerAction: string;
  notes: string;
  confidence: Confidence;
}

export interface GuideSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface GuideFaq {
  question: string;
  answer: string;
}

export interface GuideVideo {
  id: string;
  title: string;
  channel: string;
  url: string;
  thumbnailUrl?: string;
  checkedAt: string;
}

export interface Guide {
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  summary: string;
  category:
    | 'Beginner'
    | 'Tier List'
    | 'Dragons'
    | 'Resources'
    | 'Campaigns'
    | 'Alliance'
    | 'Codes'
    | 'Download'
    | 'Stronghold';
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  coverImageUrl: string;
  publishedAt: string;
  updatedAt: string;
  sourceStrategy:
    | 'official'
    | 'gameplay_verified'
    | 'youtube_explainer'
    | 'community_crosscheck';
  video?: GuideVideo;
  tags: string[];
  relatedRoutes: string[];
  body: GuideSection[];
  faq: GuideFaq[];
}

export interface GameUpdate {
  slug: string;
  title: string;
  publishedAt: string;
  summary: string;
  source: DataSource;
}
