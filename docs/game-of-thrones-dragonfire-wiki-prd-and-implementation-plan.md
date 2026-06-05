# Game of Thrones Dragonfire Wiki 需求与实现文档

文档日期：2026-06-05  
目标站点：Game of Thrones Dragonfire Wiki  
目标域名：www.gameofthronesdragonfire.wiki  
默认语言：English first，后续可通过 `next-intl` 扩展中文、日文、韩文等版本  
技术基础：当前仓库的 Next.js 15 App Router、React 19、Tailwind CSS 4、shadcn/ui、Radix UI、lucide-react、next-intl、MkSaaS 配置体系、OpenNext Cloudflare 部署链路

## 1. 项目目标

基于当前代码框架，将本项目改造成面向 Game of Thrones: Dragonfire 玩家搜索需求的攻略站。站点不需要延续当前页面结构、视觉风格或配色，应以 Dragonfire 的 4X 策略、巨龙、阵营战争、资源、Campaign、Reigns 和联盟玩法为核心重新设计信息架构。

最终公开站点必须满足三条底线：

- 公开页面、metadata、sitemap、manifest、README、邮件发件人、配置文案、图片 alt、JSON-LD、导航和 footer 中只出现 Game of Thrones: Dragonfire 相关命名。
- 不保留任何历史项目名称、旧缩写、旧域名、旧玩法文案或旧内容标题。
- 不伪造官方身份；页面明确标注为 unofficial fan-made guide / wiki，并尊重 Warner Bros.、HBO、Game of Thrones、House of the Dragon 相关商标归属。

## 2. 外部信息与需求判断

### 2.1 已确认游戏事实

根据 2026-06-05 检索到的官方和第三方资料：

- Warner Bros. Games 于 2026-06-02 宣布 Game of Thrones: Dragonfire 全球上线，定位为基于 House of the Dragon 的免费移动策略游戏。
- 游戏核心卖点包括：dragonrider 身份、hatch / raise / command dragons、tile-based warfare、territorial expansion、Alliances、Factions、Campaigns、seasonal Reigns。
- 官方资料提到 launch 阶段有 28 条独特 dragons，玩家可同时派出最多 5 支由 dragon 带领的 armies。
- Google Play 页面将其描述为 4X strategy war game，关键词包括 RTS war、alliances、conquest、diplomacy、dragon warfare、live events。
- 官方 gameplay 页面强调 Hatchery、Dragon Relics、Commands、Habits、wood / iron / stone / grain、Stronghold、Faction objectives、Alliance objectives、Campaign Stages。
- 已出现的玩家长尾内容需求包括 beginner guide、resource management guide、redeem codes、download / Android / iOS、campaign reset、alliance strategy、dragon profiles。

### 2.2 用户真实痛点

从 Google Play 评论、攻略搜索结果和 4X 手游常见需求推断，玩家首先需要解决：

- 我第一天应该先升级什么？
- Campaign / Reign 会重置哪些进度，哪些进度永久保留？
- 哪些 dragons 值得培养，Syrax、Vhagar、Caraxes、Seasmoke 等怎么选？
- wood、stone、iron、grain、meat、gold、Dragonfire Gems 等资源怎么规划？
- 是否有 active codes，如何确认 codes 真假？
- Faction / Alliance / Solo 玩家该怎么贡献进度？
- Stronghold、troop training、resource tiles、world map gathering 的优先级是什么？
- Dragon Strike mini-game 是否值得每天做？
- 如何下载、是否支持 iOS / Android、是否有 PC / emulator 方案？

站点应把这些问题作为首页、导航和文章标题的第一层结构，而不是先做泛泛的品牌介绍。

## 3. 产品定位

一句话定位：

> Game of Thrones Dragonfire Wiki is an unofficial strategy hub for dragons, codes, campaigns, resources, alliances, and beginner progression.

产品形态：

- 以攻略和数据页为主的英文 wiki / guide site。
- 首页不是营销页，而是可立即进入的攻略入口。
- MVP 以静态结构化数据和静态文章为主，不需要账号、支付、数据库写入或复杂后台。
- 后续可增加轻量工具，例如 resource planner、campaign reset checklist、dragon comparison table、alliance timing helper。

目标用户：

- 新入坑玩家：需要 first day / beginner / what to upgrade first。
- 4X 策略玩家：需要 resource priority、alliance、territory、seasonal reset、war timing。
- IP 粉丝：需要 characters、dragons、House of the Dragon lore context，但页面必须服务玩法，不做单纯百科搬运。
- 搜索流量用户：通过 codes、tier list、best dragons、download、campaign guide 等长尾词进入。

## 4. SEO 与长尾关键词策略

### 4.1 核心关键词

- game of thrones dragonfire wiki
- game of thrones dragonfire guide
- game of thrones dragonfire codes
- game of thrones dragonfire beginner guide
- game of thrones dragonfire dragons
- game of thrones dragonfire best dragons
- game of thrones dragonfire tier list
- game of thrones dragonfire campaign guide
- game of thrones dragonfire reigns
- game of thrones dragonfire resource guide
- game of thrones dragonfire alliance guide
- game of thrones dragonfire download

### 4.2 页面集群

| 集群 | 目标页面 | 搜索意图 | MVP 内容 |
| --- | --- | --- | --- |
| Codes | `/codes` | 查找 active codes、expired codes、redeem steps | Verified status、last checked、source notes、FAQ，不编造不存在的 codes |
| Beginner | `/guides/beginner-guide` | 第一小时路线、升级顺序、常见错误 | Short answer、first day checklist、资源优先级、内链到 dragons/resources/campaigns |
| Dragons | `/dragons`, `/dragons/[slug]` | best dragons、dragon profiles、Syrax / Vhagar / Caraxes 等 | dragon role、skills、habits、troop affinity、upgrade priority、source status |
| Tier List | `/tier-list` | best dragons、best upgrades、early meta、what to build first | 按 progression value、combat role、resource cost、source confidence 给出分层排名 |
| Campaigns | `/campaigns`, `/campaigns/reset-guide` | Campaign reset、what carries over、stage objectives | 重置/保留清单、personal / alliance / faction objectives、FAQ |
| Reigns | `/reigns` | seasonal reset、season length、endgame planning | Reign timeline、permanent progress、pre-reset checklist |
| Resources | `/resources` | wood、stone、iron、grain、meat、gold、gems | 获取来源、优先级、stronghold spending rules |
| Alliances | `/alliances` | alliance strategy、faction goals、capital control | 加入联盟、garrison、reinforcement、capital objectives |
| Factions | `/factions` | Greens / Blacks / faction choice | 选择建议、objectives、solo contribution |
| Stronghold | `/stronghold` | base building、upgrade priority | 建筑升级顺序、builders、troop training |
| Download | `/download` | Android / iOS / Google Play / App Store | 官方下载链接、平台说明、region notes |
| Guides | `/guides`, `/guides/[slug]` | 泛攻略与视频解读 | 文章列表、标签、难度、YouTube embed、FAQ |
| Updates | `/updates` | patch / events / launch rewards | 发布日期、官方公告摘要、影响分析 |
| Disclaimer | `/disclaimer` | 商标和非官方声明 | Unofficial fan-made disclosure |

### 4.3 首批文章清单

P0 首批必须上线：

1. Game of Thrones Dragonfire Codes: Active Rewards and Redeem Status
2. Game of Thrones Dragonfire Beginner Guide: First Day Progression
3. Game of Thrones Dragonfire Resource Guide: Wood, Iron, Stone, Grain, Meat
4. Game of Thrones Dragonfire Campaign Reset Guide: What Carries Over
5. Game of Thrones Dragonfire Best Dragons: Early Upgrade Priorities
6. Game of Thrones Dragonfire Tier List: Best Dragons and Upgrade Priorities
7. Game of Thrones Dragonfire Alliance Guide: Joining, Reinforcing, and Objectives
8. Game of Thrones Dragonfire Download Guide: Android, iOS, and Official Links
9. Game of Thrones Dragonfire Reigns Guide: Seasonal Reset and Long-Term Progress

P1 扩展内容：

1. Syrax Dragon Profile
2. Vhagar Dragon Profile
3. Caraxes Dragon Profile
4. Seasmoke Dragon Profile
5. Solstryker Dragon Profile
6. Stronghold Upgrade Priority Guide
7. Dragon Strike Mini-Game Guide
8. Faction Objectives Guide
9. Troop Training and March Priority Guide
10. Best Use of Gold and Dragonfire Gems

## 5. 信息架构

建议使用新的业务 route group：

```txt
src/app/[locale]/(dragonfire)/
  layout.tsx
  page.tsx
  codes/page.tsx
  tier-list/page.tsx
  dragons/page.tsx
  dragons/[slug]/page.tsx
  characters/page.tsx
  characters/[slug]/page.tsx
  resources/page.tsx
  campaigns/page.tsx
  campaigns/reset-guide/page.tsx
  reigns/page.tsx
  alliances/page.tsx
  factions/page.tsx
  stronghold/page.tsx
  guides/page.tsx
  guides/[slug]/page.tsx
  updates/page.tsx
  download/page.tsx
  disclaimer/page.tsx
```

建议新增业务数据目录：

```txt
src/data/dragonfire/
  types.ts
  sources.ts
  codes.ts
  tier-list.ts
  dragons.ts
  characters.ts
  resources.ts
  campaigns.ts
  guides.ts
  updates.ts
```

建议新增业务组件目录：

```txt
src/components/dragonfire/
  home-page.tsx
  dragon-card.tsx
  dragon-browser.tsx
  tier-list-table.tsx
  code-copy-button.tsx
  guide-card.tsx
  guide-article.tsx
  faq-section.tsx
  source-note.tsx
  last-updated.tsx
  status-badge.tsx
```

公开资源建议：

```txt
public/dragonfire/
  logo.png
  og-image.jpg
  guides/
  dragons/
  icons/
```

## 6. 页面需求

### 6.1 首页

首页首屏必须直接表达品牌和攻略用途：

- H1：Game of Thrones Dragonfire Wiki
- supporting copy：unofficial strategy hub for dragons, codes, campaigns, resources, alliances, and beginner progression
- 首屏按钮：Codes、Tier List、Beginner Guide、Campaign Reset
- 首屏下面露出下一段内容，展示当前热门入口。

首页模块顺序建议：

1. Hero：品牌、核心入口、latest checked date。
2. Quick Answers：codes status、best first upgrade、campaign reset warning、best first pages。
3. Browse by Topic：Tier List、Dragons、Resources、Campaigns、Alliances、Reigns、Download。
4. Featured Dragons：官方已公开 dragon cards。
5. Latest Guides：按更新时间排序。
6. Campaign / Reign explainer：解决重置焦虑。
7. FAQ：6 到 8 个搜索问题。

### 6.2 Codes 页

Codes 页最重要的是可信度：

- 显示 Active / Expired / No verified code 三种状态。
- 每条 code 必须有 last checked、source、reward、expiresAt、notes。
- 没有可靠 code 时，页面标题仍然可做，但正文必须明确写出 no verified active codes at this check time。
- 提供 official social links 的追踪路径，但不把第三方传言当作 active code。
- FAQ 使用 `FAQPage` JSON-LD。

### 6.3 Dragons 页

Dragons 是站点的核心数据资产：

- 列表页支持 role、rarity / tier、troop affinity、source status、upgrade priority 筛选。
- 详情页包含 Commands、Habits、synergy、recommended use、upgrade priority、known unlock path、related guides。
- 没有完整数据的 dragon 使用 `Data pending`，不要填充猜测。
- 第一批可覆盖 Syrax、Vhagar、Caraxes、Seasmoke、Solstryker 以及官方 launch 中确认的其他 dragons。

### 6.4 Tier List 页

Tier List 必须独立成页，而不是只放在 Dragons 页或 guide 文章里。原因是 `game of thrones dragonfire tier list`、`best dragons`、`what to upgrade first` 都是典型高意图搜索词，玩家也习惯从 tier list 入口开始判断投入方向。

Tier List 页要求：

- URL 使用 `/tier-list`，标题建议为 `Game of Thrones Dragonfire Tier List`。
- 排名对象以 dragons 为主，后续数据足够时可增加 commanders / characters / troops / builds。
- 每个条目必须显示 tier、role、best use、upgrade priority、source confidence、last checked。
- Tier 依据必须写清楚：early progression、campaign value、alliance combat、resource efficiency、long-term potential。
- 早期数据不足时，不做硬装权威的 S/A/B 排名；可以先使用 `Recommended`、`Situational`、`Data Pending`，并解释排序是 launch-stage provisional ranking。
- 与 `/dragons/[slug]` 双向内链：tier list 负责决策总览，dragon 详情页负责技能、habits、commands、培养建议。
- FAQ 使用 `FAQPage` JSON-LD，覆盖 best dragon、beginner upgrade、tier list update frequency、data confidence 等问题。

### 6.5 Guides 页

Guides 使用成熟攻略站的“文章 + YouTube + FAQ + 内链”模式：

- 列表页字段：title、summary、category、difficulty、publishedAt、updatedAt、coverImageUrl、tags。
- 详情页结构：Short Answer、Video Reference、Decision Framework、Mistakes、Step-by-Step、FAQ、Related Pages。
- YouTube 只嵌入播放器和简短引用，不复制字幕全文。
- 如果某个搜索需求没有可靠文本资料，可以搜索 YouTube 视频，先整理中文理解稿，再写成原创英文文章；若后续开中文站，再复用中文理解稿制作 `/zh` 版本。

### 6.6 Campaigns / Reigns 页

这两个页面应成为站点差异化内容：

- 明确解释 temporary progress 与 permanent progress。
- 用表格说明 Stronghold、resources、tiles、gold、dragon star levels、dragon growth 等是否保留；每一项必须标注来源状态。
- 提供 end-of-campaign checklist。
- 提供 solo player / alliance player 两套路径。

### 6.7 Download 页

- 只放官方 Google Play、App Store、official website 链接。
- 不提供不可信 APK 下载。
- 可以解释 Android、iOS、tablet、emulator 的注意事项，但必须把官方渠道放在第一位。

## 7. 内容生产流程

### 7.1 数据来源优先级

1. 官方网站、Google Play、App Store、Warner Bros. Games 公告、官方 Discord / YouTube / social channels。
2. 游戏内截图和人工核验记录。
3. 可信攻略媒体与高质量 YouTube 攻略。
4. Fandom / community wiki 仅作为线索，不直接搬运正文或图片。

### 7.2 Guide 文章模板

每篇 guide 建议结构化为：

```ts
export interface Guide {
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  summary: string;
  category: 'Beginner' | 'Tier List' | 'Dragons' | 'Resources' | 'Campaigns' | 'Alliance' | 'Codes' | 'Download';
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  coverImageUrl: string;
  publishedAt: string;
  updatedAt: string;
  sourceStrategy: 'official' | 'gameplay_verified' | 'youtube_explainer' | 'community_crosscheck';
  video?: {
    id: string;
    title: string;
    channel: string;
    url: string;
    thumbnailUrl: string;
    checkedAt: string;
  };
  tags: string[];
  relatedRoutes: string[];
  body: GuideSection[];
  faq: GuideFaq[];
}
```

文章写法要求：

- 第一段直接回答问题，不铺垫。
- 标题和 H2/H3 使用真实搜索词，但不要堆砌。
- 每篇至少 4 个内链，指向 codes、dragons、resources、campaigns、alliances 等页面。
- 每篇至少 4 个 FAQ，覆盖 People Also Ask 风格问题。
- 每篇保留 `updatedAt`，因为手游数据会变。

## 8. 视觉与 UI 方向

站点不沿用当前旧主题。视觉应贴合 House Targaryen / Westeros / dragonfire 氛围，但保持攻略站可读性。

建议色板：

| 用途 | 颜色 | 说明 |
| --- | --- | --- |
| Page background | `#080707` | 接近 obsidian black |
| Surface | `#15110F` | 深棕黑，用于卡片和导航 |
| Surface raised | `#211714` | 稍亮层级 |
| Border | `#3A2721` | 烟熏铜棕 |
| Primary | `#B91C1C` | dragonfire crimson |
| Primary hover | `#DC2626` | 更亮的火红 |
| Accent | `#D6A03D` | molten gold |
| Ember | `#F97316` | 小范围强调 |
| Text primary | `#F7EFE3` | parchment white |
| Text muted | `#B8A99A` | warm ash |

UI 原则：

- 首页可以使用 full-bleed dark hero 或官方允许使用的 key art；不要做 SaaS 风格大白卡营销页。
- 导航使用 icon + text，核心入口固定为 Codes、Tier List、Dragons、Guides、Campaigns、Resources、Download。
- 数据卡片保持紧凑，8px radius 以内，优先用于 dragons、resources、guides，不做卡片套卡片。
- 攻略正文保持高可读性，宽度 720 到 840px；视频 iframe 使用 16:9。
- 移动端首屏按钮最多 2 列，避免文本挤压。
- 颜色不要陷入单一红色，应使用黑、金、灰、羊皮纸色共同构成层次。

## 9. Next.js / MkSaaS 实施方案

### 9.1 保留的框架能力

- 保留 App Router、locale-aware routing、`next-intl`、MkSaaS 的 `websiteConfig`、navbar/footer config、metadata helpers。
- 保留 shadcn/ui、Radix UI、lucide-react、Tailwind CSS、Biome。
- 保留 OpenNext Cloudflare 构建部署脚本。
- 保留 analytics provider 架构，按需要启用 Google Analytics、Plausible、Ahrefs 或其他统计。
- 账号、支付、credits、newsletter、AI 功能 MVP 默认关闭，避免攻略站出现不必要的 SaaS 噪音。

### 9.2 必改配置

- `package.json` name 改为 `game-of-thrones-dragonfire-wiki`。
- `src/config/website.tsx` 中站点名、域名、logo、OG image、supportEmail、fromEmail 改为 Dragonfire。
- `messages/en.json` 中 Metadata、Pricing、footer、nav、common copy 全部改为 Dragonfire 或移除不用的业务文案。
- `src/routes.ts` 改为 Dragonfire 路由枚举。
- `public/site.webmanifest`、`src/app/manifest.ts`、`src/app/sitemap.ts`、`src/app/robots.ts` 改为新站点。
- `src/config/navbar-config.tsx`、`src/config/footer-config.tsx` 改为新导航和页脚。
- `README.md` 改为本项目说明，不能保留 starter marketing copy。
- 法务页加入 unofficial fan-made disclosure。

### 9.3 数据层

MVP 使用 TypeScript 静态数据，不需要 Drizzle schema：

```txt
src/data/dragonfire/
```

后续如果需要后台编辑、用户投稿、自动更新 codes，再引入数据库表：

- `game_entities`
- `guides`
- `code_checks`
- `source_checks`
- `update_logs`

### 9.4 组件层

优先复用通用组件：

- `src/components/ui/button.tsx`
- `src/components/ui/badge.tsx`
- `src/components/ui/tabs.tsx`
- `src/components/ui/table.tsx`
- `src/components/ui/accordion.tsx`
- `src/components/ui/tooltip.tsx`
- `src/components/layout/container.tsx`
- `src/components/seo/json-ld.tsx`

新增业务组件只承载 Dragonfire 领域逻辑，不把旧站业务概念带入。

### 9.5 SEO 技术要求

每个核心页面都必须实现：

- `generateMetadata`
- canonical URL
- Open Graph title / description / image
- Twitter card
- JSON-LD
- Breadcrumb
- FAQ schema where relevant
- sitemap inclusion
- last updated display

结构化数据建议：

- 首页：`WebSite`、`Organization`、`VideoGame`。
- 文章页：`Article`、`BreadcrumbList`、`FAQPage`、可选 `VideoObject`。
- Dragon 详情页：`Article` 或自定义 entity page；不要滥用不存在的 schema。
- Tier List 页：`Article`、`ItemList`、`BreadcrumbList`、`FAQPage`。
- Codes 页：`Article` + `FAQPage`。

### 9.6 性能要求

- 首屏图片使用 Next Image，提供明确 width / height 或 aspect ratio。
- YouTube iframe 懒加载。
- 数据列表分页或客户端筛选，避免移动端一次渲染过长。
- 首页 JS 体积保持克制，不引入无关动画库。
- `pnpm lint` 和 `pnpm build` 必须通过。

## 10. 旧内容清理要求

迁移阶段必须把旧内容清理作为 P0，而不是最后补丁。

必须处理：

- 旧 route group、旧 page 文件、旧数据目录、旧组件目录。
- 旧站点标题、描述、域名、manifest、OG image、favicon alt、mail from。
- 旧导航项、footer 项、pricing 文案、legal 文案。
- 旧 markdown PRD、旧 docs 中会被团队误用的文件。
- 旧图片资源和 public assets，除非确认不会被公开引用并已移入私有 archive。
- 旧 sitemap / robots 中的 URL。
- 旧 search keywords、FAQ、JSON-LD、structured data。

验收方式：

```bash
rg -n "<historical-project-name>|<historical-domain>|<historical-acronym>|<old-gameplay-keyword>" .
```

实际执行时，把占位词替换成仓库内已知的旧关键词。结果必须为空，或者只剩本需求文档中明确允许的迁移说明。最终上线版本不应包含任何历史项目可见名称。

额外要求：

- 不做半迁移：不要出现 Dragonfire 首页搭配旧数据页的状态。
- 如果某个旧功能暂时无对应 Dragonfire 价值，直接删除或从公开导航移除。
- 如果需要保留旧代码作参考，必须放到私有临时分支或非公开 archive，不进入生产构建。

## 11. 实施里程碑

### Phase 0：清理与重命名

- 更新 package、README、website config、messages、manifest、routes。
- 删除或重建旧 route group、旧 data、旧 components。
- 建立 `src/data/dragonfire` 和 `src/components/dragonfire`。
- 首次运行旧名搜索审计。

### Phase 1：首页与基础导航

- 实现新 layout、navbar、footer。
- 实现首页。
- 实现 disclaimer、download、codes。
- 完成基础 metadata、sitemap、robots。

### Phase 2：核心数据页

- 实现 dragons list / detail。
- 实现 resources、campaigns、reigns、alliances。
- 增加 source notes 和 last updated。
- 加入 FAQ schema。

### Phase 3：Guide 系统

- 建立 guide 数据结构。
- 实现 `/guides` 和 `/guides/[slug]`。
- 发布 P0 首批 8 篇文章。
- 接入 YouTube embed 和 related links。

### Phase 4：SEO 与 QA

- 校验 canonical、Open Graph、Twitter card、JSON-LD。
- 校验移动端和桌面端首屏。
- 运行 `pnpm lint`、`pnpm build`。
- 再次运行旧名搜索审计。

## 12. 验收标准

上线前必须满足：

- 首页首屏显示 Game of Thrones Dragonfire Wiki，且下一模块在桌面和移动端都能露出。
- 导航指向 Codes、Tier List、Dragons、Guides、Campaigns、Resources、Download。
- 所有公开页面无历史项目名称、旧缩写、旧域名、旧玩法残留。
- 所有核心页面都有唯一 H1、title、description、canonical。
- Codes 页不伪造 active codes。
- Guide 页包含 short answer、video reference、FAQ、related links。
- Dragon 页区分 verified / pending data。
- 法务页明确 unofficial fan-made status。
- `pnpm lint` 通过。
- `pnpm build` 或当前部署目标的 build 命令通过。

## 13. 资料来源

已检索和参考的外部资料：

- Warner Bros. Games launch article: https://warnerbrosgames.com/article/warner-bros-games-launches-game-of-thrones-dragonfire
- Google Play listing: https://play.google.com/store/apps/details?id=com.wb.goog.hotd.socialstrategy&hl=en_US
- Official gameplay overview: https://gotdragonfire.com/gameplay/
- Wiki of Westeros / Fandom page: https://gameofthrones.fandom.com/wiki/Game_of_Thrones:_Dragonfire
- Beginner guide demand reference: https://gamingonphone.com/guides/game-of-thrones-dragonfire-beginners-guide-and-tips/
- Resource guide demand reference: https://gamingonphone.com/guides/game-of-thrones-dragonfire-resource-management-guide/
- Codes demand reference: https://gamingonphone.com/guides/game-of-thrones-dragonfire-redeem-codes-and-how-to-use-them/
- On-page SEO competitor reference: https://www.illusionconnectre.wiki/
- Wiki layout competitor reference: https://pokopiaguide.com/

已参考的本地项目能力：

- 当前仓库的 Next.js / MkSaaS 框架、配置体系和部署脚本。
- 本地成熟攻略站的 guide 数据结构、YouTube embed、Short Answer、FAQ、内链写法。
