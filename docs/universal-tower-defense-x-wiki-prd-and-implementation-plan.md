# Universal Tower Defense X Wiki 需求与实现文档

状态：方案草案  
日期：2026-06-04  
目标站点：www.universaltowerdefensex.wiki  
站点名称：Universal Tower Defense X Wiki

## 1. 项目目标

基于当前项目的 Next.js 15、App Router、next-intl、Tailwind CSS、shadcn/ui、MkSaaS 配置体系和 OpenNext Cloudflare 部署链路，建设一个面向 Roblox 游戏 Universal Tower Defense X 的英文攻略站。

本站的核心目标不是做游戏官网复刻，而是做玩家搜索时能马上解决问题的攻略与数据入口：

1. 玩家搜 `universal tower defense x codes` 时，能快速复制可用兑换码，并知道失败原因。
2. 玩家搜 `universal tower defense x tier list`、`best units`、`merciless god` 时，能看到可执行的召唤、培养、组队判断。
3. 玩家搜 `universal fest p2 universal tower defense x code` 时，能进入当前活动专题，了解新单位、新活动、新兑换码和注意事项。
4. 玩家搜韩语、葡语长尾词时，能至少被英文核心页面承接，后续再扩展本地化页面。
5. 玩家进入首页时，不需要读营销文案，第一屏就能选择 Codes、Tier List、Units、Traits、Relics、Guides、Update Hub。

非目标：

- 不声称本站为官方站点。
- 不提供作弊、脚本、外挂、非官方客户端或任何规避 Roblox 规则的内容。
- MVP 不做登录、评论、付费墙、复杂后台。
- 不把本项目历史遗留名称、历史路由语义、历史素材目录继续暴露到代码命名、页面文案、元数据或构建产物中。

## 2. 调研结论

### 2.1 官方游戏信息

官方 Roblox 页面当前标题包含 `UNIVERSAL FEST P2` 和 `Universal Tower Defense X`。页面描述强调这是一个召唤单位、抵御敌人波次、多人协作、升级单位、Etherealize 和 Evolve 单位的塔防体验。

这说明站点内容应围绕五类需求组织：

| 需求类型 | 玩家问题 | 站点承接方式 |
| --- | --- | --- |
| Codes | 有哪些当前可用兑换码？为什么兑换失败？ | `/codes` |
| Tier / Units | 哪些单位值得抽、值得养、适合当前账号？ | `/tier-list`、`/units`、`/units/[slug]` |
| Traits / Relics | Reroll、trait、relic 怎么选才不浪费资源？ | `/traits`、`/relics`、`/guides/reroll-strategy` |
| Update / Event | Universal Fest P2、Merciless God、活动单位和新模式怎么处理？ | `/updates/universal-fest-p2`、`/guides/merciless-god` |
| Progression | 新手先打什么、先养什么、卡关如何判断原因？ | `/guides/beginner-guide`、`/guides/story-mode` |

### 2.2 公开资料结构

Fandom 新 Wiki 已经有较完整的信息架构，包含 Units、Tier List、Traits、Story Mode、Mechanics、Rewards、Codes 等入口，并显示已有数百个页面。BloxInformer 的 Wiki 说明游戏有 Story Mode、Challenges、Virtual Realm、Units、Relics、Traits、Stats、Evolution 等系统。

因此，本站不应该只做单页 codes 站，而应该从 MVP 起就保留数据库型结构：

- Codes：高频更新入口。
- Tier List：召唤和培养优先级入口。
- Units：单位数据库。
- Traits：reroll 决策入口。
- Relics：装备/套装/获取方式入口。
- Modes：Story、Challenges、Virtual Realm、Raids。
- Guides：把复杂问题写成可读攻略。
- Updates：当前版本和活动专题。

### 2.3 近 7 天关键词判断

| 关键词 | 增长 | 相关性 | 处理策略 |
| --- | ---: | --- | --- |
| `universal tower defense x merciless god` | Breakout | 高 | 建 `/guides/merciless-god`，解释单位定位、获取路线、是否值得投入 |
| `로 블록 스 universal tower defense x 티어` | Breakout | 高 | 先由英文 `/tier-list` 承接，P1 增加韩语 meta 与 `/ko/tier-list` |
| `universal fest p2 universal tower defense x code` | +200% | 高 | 建 `/updates/universal-fest-p2` 并从 `/codes` 强链接 |
| `defesa de torre universal x codes` | +100% | 高 | 先由英文 `/codes` 承接，P1 增加葡语 meta 与 `/pt-br/codes` |
| 泛 Roblox 词 | +900% | 低 | 不建泛 Roblox 页面，只在相关页面自然出现 Roblox 平台说明 |
| 其他游戏 codes 词 | +90% 到 +250% | 低 | 不覆盖，不做跳转诱导，不建页面 |

关键词优先级结论：

1. P0 必须做 Codes、Tier List、Merciless God、Universal Fest P2。
2. P0 首页要把 “current update + codes + tier list” 放在第一屏。
3. P1 做韩语和葡语本地化入口，先覆盖 title、description、FAQ 和核心短答案。
4. 无关游戏词不写页面，避免搜索意图错配和内容稀释。

## 3. 产品定位

建议英文定位：

> Universal Tower Defense X Wiki is a fast fan-made guide hub for codes, tier lists, units, traits, relics, events, and progression routes.

中文理解：

> 一个快速、实用、非官方的 Universal Tower Defense X 攻略站，帮助玩家先领兑换码，再决定抽什么、养什么、刷什么、怎么过当前版本活动。

站点承担三种角色：

| 角色 | 用户意图 | 主要页面 |
| --- | --- | --- |
| 快速答案站 | 复制 codes、看兑换失败原因、找当前版本入口 | `/codes`、`/updates/universal-fest-p2` |
| 决策工具站 | 判断单位、trait、relic、队伍是否值得投入 | `/tier-list`、`/units`、`/traits`、`/relics` |
| 攻略文章站 | 新手路线、活动打法、boss/raid/模式攻略 | `/guides`、`/guides/[slug]` |

## 4. 内容策略

### 4.1 MVP 页面优先级

| 优先级 | 页面 | 路由 | 目标关键词 |
| --- | --- | --- | --- |
| P0 | 首页 | `/` | universal tower defense x wiki, utdx wiki |
| P0 | Codes | `/codes` | universal tower defense x codes, universal fest p2 code |
| P0 | Tier List | `/tier-list` | universal tower defense x tier list, best units |
| P0 | Units | `/units` | universal tower defense x units |
| P0 | Unit Detail | `/units/[slug]` | specific unit name + utdx |
| P0 | Universal Fest P2 | `/updates/universal-fest-p2` | universal fest p2 universal tower defense x |
| P0 | Merciless God Guide | `/guides/merciless-god` | universal tower defense x merciless god |
| P0 | Beginner Guide | `/guides/beginner-guide` | universal tower defense x beginner guide |
| P1 | Traits | `/traits` | universal tower defense x traits, trait reroll |
| P1 | Relics | `/relics` | universal tower defense x relics, best relics |
| P1 | Reroll Strategy | `/guides/reroll-strategy` | utdx reroll strategy |
| P1 | Story Mode | `/guides/story-mode` | universal tower defense x story mode |
| P1 | Virtual Realm | `/guides/virtual-realm` | universal tower defense x virtual realm |
| P1 | Raids | `/guides/raids` | universal tower defense x raids |
| P2 | Team Builder | `/tools/team-builder` | utdx team builder |
| P2 | DPS Calculator | `/tools/dps-calculator` | universal tower defense x dps calculator |

### 4.2 首页结构

首页不要做传统 SaaS landing page。第一屏必须是攻略入口和版本状态。

推荐模块顺序：

1. Hero：站点名、当前版本标签、4 个主按钮：Codes、Tier List、Units、Universal Fest P2。
2. Codes Strip：展示 3-5 个重点 code 的 copy button，并链接完整 codes 页面。
3. Current Update Board：Universal Fest P2、Merciless God、new units、relic changes、new modes。
4. Quick Route Cards：Beginner、Best Units、Traits、Relics、Story、Raids。
5. Featured Guides：展示 3 篇文章，封面使用可确认授权的 YouTube 嵌入视频缩略图或站点通用封面，不使用自绘角色图。
6. Database Preview：Units、Traits、Relics 的可筛选入口预览。
7. FAQ：首页放 5-8 个基础 FAQ。

前台不要把 “更新时间”“来源” 当作视觉模块展示。内部数据可以保留 `checkedAt`、`sourceUrl`、`sourceType`、`confidence` 字段，用于维护和审核。

### 4.3 Codes 页面

目标：承接 `universal tower defense x codes`、`universal fest p2 code`、`codes not working`、葡语 codes 长尾。

页面模块：

1. H1：`Universal Tower Defense X Codes`
2. Short answer：先说明 codes 可提供 Gems、Gold、Trait Rerolls、Relic Rerolls、fragments、event currency 等奖励，实际以游戏内为准。
3. Active codes：code、reward、level requirement、copy button。
4. Event codes：Universal Fest P2 相关 codes 单独分组。
5. Expired codes：折叠展示，避免干扰复制。
6. How to redeem：打开 Roblox 中的游戏，点击右侧 Codes 按钮，输入 code，点击 Redeem。
7. Codes not working：大小写、标点、等级要求、过期、服务器未刷新、已兑换。
8. FAQ：覆盖 Discord、Roblox group、case-sensitive、new codes frequency、level requirements。

实现要求：

- `Copy` 按钮要稳定，不改变行高，不造成 layout shift。
- 未确认奖励不要编造数量，写 `Free rewards` 或 `Rewards vary in-game`。
- 对有等级要求的 code 做醒目标签，例如 `Level 30 required`。
- 页面内部可以有数据可信度字段，但前台不展示来源列表和更新时间区块。

首批 code 数据可以从 GamesRadar、Pro Game Guides、官方社群和游戏内验证中交叉整理。所有 code 上线前需保留 `status: 'active' | 'expired' | 'needs_check'`。

### 4.4 Tier List 页面

目标：承接 `universal tower defense x tier list`、`best units`、韩语 tier 长尾。

页面模块：

1. H1：`Universal Tower Defense X Tier List`
2. Short answer：先解释该 tier list 用于 “召唤、升级、reroll 前的决策”，不是只看稀有度。
3. Segmented controls：`Overall`、`DPS`、`Support`、`Farm`、`Boss`、`Story`、`Raid`。
4. Tier bands：S、A、B、C，每个单位卡片显示 placement、role、rarity、best trait、reason。
5. How to use：新手、活动玩家、后期玩家分别怎么看。
6. Common mistakes：只看稀有度、忽略 ground/hill、把 reroll 投给过渡单位。
7. FAQ：每页至少 5 个问题。

内容原则：

- 如果某个版本的最新 tier 证据不足，要写成 “watchlist / needs more evidence”，不要硬排。
- 对 Universal Fest P2 新单位，先给 “early read”，等视频和社区证据充分再升为正式 tier。
- 单位详情页必须从 tier list 强链接，形成数据库闭环。

### 4.5 Units 数据库

目标：做成可搜索、可筛选的数据库入口，参考数据站的紧凑布局和按钮方式。

列表字段：

- Name
- Slug
- Rarity
- Placement：Ground / Hill / Hybrid 等
- Role：DPS / Support / Farm / Control / Boss / Utility
- Element 或 Theme
- Current tier
- Best trait
- Best relic set
- Obtainment
- Evolution / Synchro relation
- Short reason

筛选方式：

- Search input
- Rarity select
- Role segmented control
- Placement toggle
- Tier filter
- Obtainment filter

单位详情页模块：

1. Overview：单位定位、是否值得养。
2. Best use：Story、Challenges、Virtual Realm、Raid、Boss。
3. Build：best trait、relic、stat/reroll note。
4. Team fit：适合搭配什么角色。
5. Upgrade priority：什么时候投入，什么时候先跳过。
6. FAQ。

### 4.6 Traits 页面

目标：承接 reroll 决策，帮助玩家少浪费高价值资源。

页面模块：

1. Trait tier table：trait、rarity/odds、best unit roles、why it matters。
2. Reroll stop rules：什么时候停，什么时候继续。
3. Unit fit matrix：DPS、support、farm、boss、control 对 trait 的需求差异。
4. FAQ：`best trait for DPS`、`should I reroll early units`、`how many rerolls to save`。

### 4.7 Relics 页面

目标：承接 relic set、relic reroll、relic obtainment 搜索。

页面模块：

1. Relic list：slot、effect、rarity、obtainment、best users。
2. Best relic sets：DPS、support、farm、boss、story。
3. Enhance / reroll notes：哪些 relic 值得强化。
4. FAQ。

### 4.8 Guides 页面与文章格式

Guides 首页要像攻略目录，不像博客时间流。

分类：

- Start Here
- Codes
- Tier / Units
- Traits / Relics
- Updates
- Game Modes
- Boss / Raid

Guide 内容不能只写成模板化短答案。首批页面可以先用结构化资料上线，但正式版本必须进入视频驱动写作流程。写作有两条路径：

1. 用户需求驱动：围绕 `beginner guide`、`Merciless God`、`reroll strategy`、`story mode` 等明确搜索意图去 YouTube 搜索，筛选标题、发布时间、播放量、评论反馈和内容匹配度都较好的视频。看完视频后提炼打法顺序、关键判断、常见坑和作者观点，用原创语言写成攻略。
2. 高播放视频驱动：以 `Universal Tower Defense X`、`UTDX`、当前 update 名称去 YouTube 搜索高播放率视频，把用户已经在看的主题转成网站文章。适合发现站内还没有覆盖的新选题，例如新版本、强势单位、隐藏玩法、刷资源路线。

视频使用规则：

- 不做逐字稿搬运，也不做完整逐句翻译；只能把视频观点转成原创攻略。
- 文章应像玩家写给玩家的建议，不要像数据模板。
- 文章中保留来源视频信息：标题、频道、发布日期、播放量标签、原视频链接。
- Guide 卡片和详情页封面优先使用对应 YouTube 视频缩略图；没有视频时才使用站点通用 guide cover。
- 文章正文可以嵌入 YouTube 视频，但文字内容必须能独立解决问题，不能只让用户看视频。

每篇 guide 固定结构：

1. Short Answer：先给结论。
2. What changed：如果是版本专题，说明这次更新影响什么。
3. Why it matters：解释对玩家资源决策的影响。
4. Step-by-step plan：给可执行步骤。
5. Common mistakes：列出浪费 Gems、Rerolls、Fragments 的错误。
6. Video reference：嵌入 YouTube 视频或使用视频缩略图；内容要转写成人话攻略，不做机器翻译堆砌。
7. What to read next：导向 Codes、Tier List、Units、Traits、Relics。
8. FAQ：每篇 4-8 个问题。

首批 guides：

| 标题 | 路由 | 目的 |
| --- | --- | --- |
| Universal Tower Defense X Beginner Guide | `/guides/beginner-guide` | 新玩家第一小时路线 |
| Universal Fest P2 Guide | `/updates/universal-fest-p2` | 当前活动总入口 |
| Merciless God Guide | `/guides/merciless-god` | Breakout 关键词承接 |
| Best Units to Build First | `/guides/best-units-to-build-first` | 抽卡和培养优先级 |
| Trait Reroll Strategy | `/guides/reroll-strategy` | 减少 reroll 浪费 |
| Story Mode Route | `/guides/story-mode` | 主线推进 |
| Virtual Realm Guide | `/guides/virtual-realm` | 后期 farming |
| Raid Guide | `/guides/raids` | 多人挑战 |

## 5. 视觉与交互方向

### 5.1 配色

基于游戏 “Universe / Universal Fest / anime tower defense / dragon event” 的风格，建议使用宇宙战斗感，但避免全站单一紫蓝或过暗。

建议设计 token：

| Token | 色值 | 用途 |
| --- | --- | --- |
| `--background` | `#0F1117` | 主背景 |
| `--surface` | `#181B24` | 面板、表格、导航 |
| `--surface-soft` | `#F6F1E8` | 浅色内容区或 FAQ 带 |
| `--primary` | `#F6C945` | 主要按钮、code 高亮、稀有奖励 |
| `--accent` | `#27D8B8` | 成功、可复制、active 状态 |
| `--danger` | `#E94B5F` | expired、warning、boss |
| `--event` | `#8B5CF6` | 活动标签、小面积点缀 |
| `--text` | `#F8FAFC` | 深色背景主文字 |
| `--muted` | `#AAB2C0` | 辅助说明 |

注意：

- 紫色只能作为活动或稀有度点缀，不做大面积渐变。
- 主要 CTA 用金色或青绿色，和深色背景形成高对比。
- 数据库表格可使用浅色区块，让长时间浏览不疲劳。

### 5.2 布局原则

- 第一屏即产品本体：站名、版本、codes、tier list、units。
- 入口按钮使用图标 + 简短文本，避免长段说明。
- 数据库页面优先信息密度，卡片半径不超过 8px。
- 表格、筛选器、copy button、segmented controls 要有稳定宽高。
- 移动端优先保证按钮文字不溢出，表格改为紧凑卡片。
- FAQ 不做更新时间、来源、作者信息模块。

### 5.3 可复用组件

建议新增命名空间：

```txt
src/components/utdx/
  code-copy-button.tsx
  faq-section.tsx
  guide-card.tsx
  guide-content.tsx
  home-page.tsx
  unit-card.tsx
  unit-filters.tsx
  tier-list-table.tsx
  update-board.tsx
```

所有组件命名、导出名、文件夹名必须使用 `utdx` 或 `universal-tower-defense-x` 语义，不再沿用历史命名。

### 5.4 素材与角色图标策略

Logo 可以后补。MVP 阶段如果还没有正式 logo，先使用文字 Logo / wordmark：`Universal Tower Defense X Wiki`，搭配简洁的站点色块或通用塔防符号，不影响内容上线。

角色图标采用保守策略：

1. 不默认使用 Fandom、BloxInformer 或其他站点的角色头像作为本地资产，除非确认授权、来源和署名要求。
2. 如果拿不到可靠的角色图标，单位卡片和详情页只显示名字、稀有度、tier、role、placement、best trait、best relic、obtainment 等文本信息。
3. 不自绘、不生成、不仿画具体游戏角色或动漫角色头像。错误或相似但不准确的图标会误导用户，也会增加版权风险。
4. 单位列表可以用非角色型 UI 标识辅助识别，例如 rarity 色条、role 文本标签、placement badge、tier badge，但这些标识不能伪装成角色图。
5. Reward、trait、relic 等图标也优先使用文字和 badge。只有在图标是完全通用符号时，才使用 lucide-react 或站点自有 SVG，例如 copy、search、filter、star、shield、gem。

图片使用原则：

- 官方 Roblox 页面可作为 “Play on Roblox” 外链来源，不直接搬运官方封面为本地素材。
- Guide 页面可以嵌入 YouTube 视频；如果展示封面，优先使用视频嵌入本身的缩略图或站点统一的通用 guide cover。
- 不使用看起来像具体角色但并非准确来源的 AI 生成图。
- 数据字段可以预留 `imageUrl?: string`，但只有在图标来源可靠时才填；默认前台必须能在没有图片的情况下保持完整、好看、可读。

## 6. 信息架构与路由

当前项目已使用 `[locale]` 路由和 route group。推荐保留该结构，MVP 先只启用 `en`，后续扩展 `ko`、`pt-BR`。

推荐文件结构：

```txt
src/app/[locale]/(utdx)/
  layout.tsx
  codes/page.tsx
  tier-list/page.tsx
  units/page.tsx
  units/[slug]/page.tsx
  traits/page.tsx
  relics/page.tsx
  guides/page.tsx
  guides/[slug]/page.tsx
  updates/universal-fest-p2/page.tsx
  disclaimer/page.tsx

src/app/[locale]/(marketing)/(home)/page.tsx
```

`Routes` 建议改为：

```ts
export enum Routes {
  Root = '/',
  Codes = '/codes',
  TierList = '/tier-list',
  Units = '/units',
  Traits = '/traits',
  Relics = '/relics',
  Guides = '/guides',
  Updates = '/updates/universal-fest-p2',
  Disclaimer = '/disclaimer',
}
```

不再保留历史 route enum 名称。需要保留 SEO 价值的旧公开路径，统一放入 middleware redirects，但 redirect 规则本身不要把历史名称作为业务概念继续扩散到页面组件和数据层。

## 7. 数据模型

### 7.1 Codes

```ts
export interface UtdxCode {
  code: string;
  reward: string;
  status: 'active' | 'expired' | 'needs_check';
  levelRequirement?: number;
  event?: 'universal-fest-p2' | 'general';
  notes?: string;
  checkedAt?: string;
  sourceUrls?: string[];
}
```

### 7.2 Units

```ts
export interface UtdxUnit {
  slug: string;
  name: string;
  imageUrl?: string;
  rarity: 'Boundless' | 'Secret' | 'Mythic' | 'Legendary' | 'Epic' | 'Rare';
  placement: 'Ground' | 'Hill' | 'Hybrid' | 'Support';
  role: 'DPS' | 'Support' | 'Farm' | 'Control' | 'Boss' | 'Utility';
  tier: 'S' | 'A' | 'B' | 'C' | 'Watchlist';
  element?: string;
  obtainment?: string;
  evolveFrom?: string[];
  bestTraits?: string[];
  bestRelics?: string[];
  summary: string;
  strengths: string[];
  weaknesses: string[];
  upgradePriority: 'High' | 'Medium' | 'Low' | 'Situational';
  sourceUrls?: string[];
}
```

### 7.3 Traits

```ts
export interface UtdxTrait {
  slug: string;
  name: string;
  tier: 'S' | 'A' | 'B' | 'C' | 'Situational';
  rarity?: string;
  odds?: string;
  bestFor: UtdxUnit['role'][];
  effect: string;
  rerollAdvice: string;
}
```

### 7.4 Relics

```ts
export interface UtdxRelic {
  slug: string;
  name: string;
  slot: 'Head' | 'Body' | 'Accessory' | 'Weapon' | 'Set' | 'Unknown';
  rarity?: string;
  effect: string;
  obtainment?: string;
  bestFor: UtdxUnit['role'][];
  enhanceAdvice: string;
}
```

### 7.5 Guides

```ts
export interface UtdxGuide {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  category:
    | 'Start Here'
    | 'Codes'
    | 'Tier / Units'
    | 'Traits / Relics'
    | 'Updates'
    | 'Game Modes'
    | 'Boss / Raid';
  coverImageUrl: string;
  video?: {
    id: string;
    title: string;
    channel?: string;
  };
  sections: Array<{
    heading: string;
    body: string[];
  }>;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  relatedRoutes: string[];
}
```

## 8. SEO 与结构化数据

### 8.1 Metadata

基础模板：

```txt
Title: Universal Tower Defense X Wiki - Codes, Tier List and Units
Description: Universal Tower Defense X Wiki for active codes, tier list rankings, best units, traits, relics, Universal Fest P2 guides, and beginner progression.
Canonical: https://www.universaltowerdefensex.wiki
```

页面模板：

| 页面 | Title 模板 |
| --- | --- |
| Codes | `Universal Tower Defense X Codes - Active Rewards and Redeem Guide` |
| Tier List | `Universal Tower Defense X Tier List - Best Units to Build` |
| Units | `Universal Tower Defense X Units - Roles, Traits and Builds` |
| Unit Detail | `{Unit Name} UTDX Build - Tier, Traits and Relics` |
| Universal Fest P2 | `Universal Fest P2 Guide - Universal Tower Defense X Update` |
| Merciless God | `Merciless God Guide - Universal Tower Defense X` |

### 8.2 首页 On-page SEO

`bridgerwestern.wiki` 的首页曾经获得较多游戏长尾流量，它的 on-page SEO 值得学习，但只学习它的 “首页作为专题 Hub” 结构，不照搬批量模板化写法。

值得学习的点：

1. 首屏直接展示 `H1 + 游戏一句话定位 + 核心 CTA`，不是传统营销 landing page。
2. 导航和首屏下方马上给出核心实体入口，例如 Guides、Stands、Weapons、Locations、Progression。
3. 首页不是只有卡片，也包含可被搜索引擎理解的正文型摘要、攻略目录、最新内容和 FAQ。
4. 内链密度高，核心页面在首页一到两次点击内可达。
5. 每个链接锚文本都尽量带具体主题，而不是只写 `Read more`。

不建议照搬的点：

1. 不要大量使用年份、关键词变体和模板标题堆页面。
2. 不要覆盖 scripts、cheats、automation、外挂、非官方客户端等风险主题。
3. 不要为了搜索覆盖泛 Roblox 或其他游戏关键词。
4. 不要把首页做成纯文章列表；Universal Tower Defense X Wiki 首页应更像 “当前版本答案页 + 数据库入口”。

首页推荐 title 和 description：

```txt
Title:
Universal Tower Defense X Wiki - Codes, Tier List & Units

Meta Description:
Universal Tower Defense X Wiki with active codes, tier list rankings, best units, traits, relics, Merciless God, Universal Fest P2 updates, and beginner guides.
```

首页 H1 和首屏短文案：

```txt
H1:
Universal Tower Defense X Wiki

Hero Copy:
A fan-made UTDX guide hub for active codes, unit rankings, traits, relics, event updates, and beginner progression.
```

首屏必须提供 4 个主按钮：

- `Codes`
- `Tier List`
- `Units`
- `Universal Fest P2`

首页推荐 H2 结构：

```txt
H2: Active Universal Tower Defense X Codes
H2: Universal Tower Defense X Tier List
H2: Best Units and Roles
H2: Universal Fest P2 Update
H2: Merciless God Guide
H2: Traits, Relics and Reroll Priorities
H2: Beginner Progression Route
H2: Latest Universal Tower Defense X Guides
H2: Universal Tower Defense X FAQ
```

每个 H2 下建议写 80-150 字真实说明，解释玩家为什么应该进入该页面、该页面解决什么问题、适合什么阶段的账号。首页不能只堆链接；它需要承担 `Universal Tower Defense X Wiki` 这个主词的主题解释和分发任务。

首页内链至少包含：

- `/codes`
- `/tier-list`
- `/units`
- `/traits`
- `/relics`
- `/updates/universal-fest-p2`
- `/guides/merciless-god`
- `/guides/beginner-guide`

锚文本建议：

- `Universal Tower Defense X Codes`
- `UTDX Tier List`
- `Universal Tower Defense X Units`
- `UTDX Traits`
- `UTDX Relics`
- `Universal Fest P2 Update`
- `Merciless God Guide`
- `Universal Tower Defense X Beginner Guide`

首页 FAQ 建议 6-8 个问题：

- What is Universal Tower Defense X?
- Is this an official Universal Tower Defense X Wiki?
- Where do I find active UTDX codes?
- What is the best unit in Universal Tower Defense X?
- What is Universal Fest P2?
- Is Merciless God worth building?
- Should beginners spend trait rerolls early?
- What should I read after redeeming codes?

FAQ 内容必须在页面上真实可见。可以添加 `FAQPage` 结构化数据，但不要把它作为获取 Google FAQ rich result 的主要手段；Google 已经将 FAQ rich result 限制到权威政府和健康类网站。这里保留 FAQ 的主要价值是帮助用户快速获得答案，并让搜索引擎更清楚理解首页覆盖的问题集合。

最终首页定位：

> Universal Tower Defense X Wiki 首页应像 “UTDX 的总站地图 + 当前版本答案页”，不是传统落地页，也不是纯文章列表。学习 Bridger 的 Hub 结构和内链密度，但内容要更克制、更垂直、更可信。

### 8.3 Schema

建议使用：

- `WebSite`
- `BreadcrumbList`
- `FAQPage`
- `Article`
- `ItemList`
- `VideoObject`，仅当页面确实嵌入或引用 YouTube 视频

### 8.4 内链规则

- `/codes` 链接 `/tier-list`、`/guides/reroll-strategy`、`/updates/universal-fest-p2`。
- `/tier-list` 链接 `/units/[slug]`、`/traits`、`/relics`。
- 每个 guide 至少链接 3 个相关页面。
- 首页的所有 P0 页面必须在第一屏或第二屏可达。

## 9. MkSaaS / Next.js 实施方案

### 9.1 保留的框架能力

继续使用：

- Next.js App Router 和 Server Components。
- `[locale]` 路由结构。
- `next-intl` 的 messages 与 locale-aware navigation。
- MkSaaS 的 `websiteConfig`、navbar/footer config、metadata 体系。
- Tailwind CSS、shadcn/ui、lucide-react。
- OpenNext Cloudflare build/deploy 链路。
- `src/components/ui` 中已有基础控件。

暂不启用：

- Auth 登录注册入口。
- Billing / pricing / credits。
- Newsletter。
- Dashboard。
- AI 生成工作流前台入口。

这些模块可以保留在代码中，但不应出现在公开导航、首页、footer 或 SEO 内容中。

### 9.2 需要修改的核心文件

| 文件/目录 | 处理方式 |
| --- | --- |
| `package.json` | 项目名改为 `universal-tower-defense-x-wiki` |
| `env.example` | 域名改为 `https://www.universaltowerdefensex.wiki` |
| `public/site.webmanifest` | name、short_name、icons 描述改为本站 |
| `public/logo.*` | 替换为本站 logo |
| `src/config/website.tsx` | metadata、mail、social、ogImage 改为本站 |
| `messages/en.json` | 全部公开文案改为本站 |
| `src/routes.ts` | 删除历史 route enum 名称，改为 UTDX 路由 |
| `src/middleware.ts` | canonical host 改为本站域名；保留必要 308 redirects |
| `src/lib/urls/urls.ts` | canonical base URL 改为本站 |
| `src/app/sitemap.ts` | 使用 UTDX routes、units、guides |
| `src/app/robots.ts` | sitemap 域名改为本站 |
| `src/styles/globals.css` | 主题注释和颜色 token 改为本站 |
| `src/app/[locale]/(utdx)` | 新建 UTDX route group |
| `src/components/utdx` | 新建 UTDX 组件命名空间 |
| `src/data/utdx` | 新建 UTDX 数据命名空间 |
| `public/utdx` | 新建 guide cover 和后续 logo 目录；不建立自绘角色 icon 资产目录 |

### 9.3 必须清理的遗留内容

全项目需要跑一次精确搜索，确保以下位置不再出现历史项目名称、历史站点域名、历史素材路径和历史业务命名：

- `package.json`
- `env.example`
- `CLAUDE.md`
- `README.md` 或其他说明文档
- `messages/*.json`
- `public/site.webmanifest`
- `public/*.svg`
- `src/config/*`
- `src/components/*`
- `src/data/*`
- `src/app/*`
- `src/lib/urls/*`
- `src/middleware.ts`
- `src/styles/globals.css`

验收搜索：

```sh
rg -n "历史站点名|历史域名|历史素材目录|历史业务命名" .
```

实际执行时，把上面的占位词替换成仓库内已知的旧关键词。搜索结果必须为空，或者只剩本需求文档中明确允许的迁移说明。最终上线版本不应包含任何历史项目可见名称。

### 9.4 实施步骤

#### Phase 0：命名与框架清理

1. 改 `package.json` name。
2. 改环境变量示例和 canonical domain。
3. 改 `websiteConfig`、manifest、logo、metadata。
4. 清理公开导航、footer、messages。
5. 移除或隐藏 SaaS 模板里不需要的公开入口。

验收：

- 首页 title、description、manifest、logo 都是 Universal Tower Defense X Wiki。
- 公开页面无历史项目名称。
- `pnpm lint` 通过。

#### Phase 1：数据层

1. 新建 `src/data/utdx/types.ts`。
2. 新建 `codes.ts`、`units.ts`、`tier-list.ts`、`traits.ts`、`relics.ts`、`guides.ts`。
3. 数据字段保留 source 与 checkedAt，但前台不展示来源/更新时间模块。
4. P0 数据先覆盖 codes、tier list、Universal Fest P2、Merciless God、10-20 个重点 units。

验收：

- 数据导出均为 named exports。
- 无空页面依赖。
- 未确认信息标记 `needs_check` 或 `Watchlist`。

#### Phase 2：P0 页面

1. 首页：`home-page.tsx` + route page。
2. Codes：复制按钮、active/expired/event 分组、FAQ。
3. Tier List：分角色筛选、tier bands、FAQ。
4. Units：列表 + unit detail。
5. Universal Fest P2：活动专题。
6. Merciless God：专题 guide。
7. Beginner Guide：新手路线。

验收：

- P0 路由全部可访问。
- 每个核心子页面都有 FAQ。
- 首页底部展示 3 篇 guide 入口，封面使用可确认授权的 YouTube 嵌入缩略图或站点通用封面，不使用自绘角色图。
- 不显示更新时间和来源模块。

#### Phase 3：P1 数据库与攻略

1. Traits 页面。
2. Relics 页面。
3. Story Mode、Virtual Realm、Raids guides。
4. Reroll Strategy guide。
5. 新增韩语、葡语 SEO meta 或本地化路由。

验收：

- 数据库筛选可用。
- 每页有清晰内链。
- 长尾关键词能落到相关页面。

#### Phase 4：工具页

1. Team Builder。
2. DPS Calculator。
3. Reroll value helper。

工具页必须先明确数据可信边界：如果不是官方完整数值，就写成 planning calculator，不写成官方精确模拟器。

#### Phase 5：QA 与上线

1. `pnpm lint`
2. `pnpm next:build`
3. 本地 `pnpm dev` 手动检查：
   - desktop 首页
   - mobile 首页
   - `/codes`
   - `/tier-list`
   - `/units`
   - `/units/[slug]`
   - `/guides/merciless-god`
   - `/updates/universal-fest-p2`
4. 检查 sitemap、robots、canonical、OG image。
5. 跑历史名称搜索。

## 10. 首批内容清单

### 10.1 Codes 候选

以下只作为采集候选，不能直接当作永久有效数据。上线前需要标记状态并尽量进游戏验证：

- `200kInterestedBeast!`
- `3.0PartTwoUpdate!`
- `FusionUpdate!`
- `MercilessGodIsHere!`
- `NewBattlePass!!`
- `UniverseFestDelay1!`
- `UniverseFestDelay2!`
- `UniverseFestDelay3!`
- `UniverseFestDelay4!`
- `UniverseFestDelay5!`
- `300KInterestedUtopia!`
- `WeLoveBerserker!`

### 10.2 首批单位方向

可先从 Fandom、BloxInformer、公开 tier list 和视频交叉整理：

- Merciless God 相关新单位。
- Universal Fest P2 新增 10 个单位。
- 当前 S/A tier DPS。
- 当前关键 support / farm / control 单位。
- 新手最容易抽到、最容易误养的过渡单位。

### 10.3 首批 FAQ

首页：

- What is Universal Tower Defense X?
- Is this an official Universal Tower Defense X site?
- Where should beginners start?
- What should I check before spending rerolls?
- Does the site cover Universal Fest P2?

Codes：

- Why is my code not working?
- Are codes case-sensitive?
- Do codes have level requirements?
- Where do new codes come from?
- Should I redeem codes before summoning?

Tier List：

- What is the best unit in Universal Tower Defense X?
- Should beginners only build S-tier units?
- What does Watchlist mean?
- How often should tier rankings change?
- Are support units worth building?

Merciless God：

- How do you get Merciless God?
- Is Merciless God worth building?
- What traits fit Merciless God?
- What teams need Merciless God?
- Should beginners chase Merciless God first?

## 11. 风险与处理

| 风险 | 影响 | 处理 |
| --- | --- | --- |
| 游戏更新频繁 | codes、tier list 容易过期 | 数据保留状态字段；页面用 “current / watchlist / needs check” 语义 |
| 公开数据互相冲突 | 错误排名影响信任 | 多源交叉；不足时写 early read |
| 搜索词混入其他游戏 | 内容稀释 | 不建无关页面 |
| 新单位缺少实战视频 | guide 空泛 | 先写获取、定位、资源决策，等视频补强 |
| 工具页数值不准确 | 玩家误判 | 工具页标注 planning model，不声称官方公式 |
| 历史内容残留 | 品牌混乱、SEO 错配 | 实施前后都跑全局搜索并清理 |

## 12. 验收标准

### 内容验收

- 首页第一屏出现 `Universal Tower Defense X Wiki`。
- 首页直接提供 Codes、Tier List、Units、Universal Fest P2 入口。
- P0 页面全部有 FAQ。
- Codes 页面有复制按钮、等级要求、失败原因。
- Tier List 页面按角色或场景解释，不只按稀有度。
- Merciless God 和 Universal Fest P2 有独立专题。
- 无关游戏关键词不建页面。

### 技术验收

- `pnpm lint` 通过。
- `pnpm next:build` 通过。
- `sitemap.ts` 输出 UTDX 路由。
- `robots.ts` 指向 `https://www.universaltowerdefensex.wiki/sitemap.xml`。
- `middleware.ts` canonical host 为 `www.universaltowerdefensex.wiki`。
- `getBaseUrl` 返回本站域名。
- manifest、metadata、OG image 均为本站。

### 品牌清理验收

- 公开页面、metadata、manifest、邮件模板、导航、footer 不出现历史项目名称。
- 新增代码目录使用 `utdx` 或 `universal-tower-defense-x`。
- 不再使用历史业务名作为 React component、type、route enum、data namespace。
- 旧素材目录不再被公开页面引用。

## 13. 参考资料

- Roblox 官方游戏页：https://www.roblox.com/games/133410800847665/Universal-Tower-Defense-X
- Fandom Wiki：https://universal-tdx.fandom.com/wiki/Universal_Tower_Defense_X_Wiki
- BloxInformer Wiki：https://bloxinformer.com/wikis/universal-tower-defense/
- GamesRadar codes 页面：https://www.gamesradar.com/games/strategy/universal-tower-defense-codes/
- Pro Game Guides codes 页面：https://progameguides.com/roblox/universal-tower-defense-codes/
- 竞品参考：https://universaltowerdefensex.com/
- 竞品参考：https://universaltowerdefensex.org/
- 布局参考：https://pokopiaguide.com/
