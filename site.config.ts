import type { CardListData, Config, IntegrationUserConfig, ThemeUserConfig } from 'astro-pure/types'

export const theme: ThemeUserConfig = {
  title: 'Astro Theme Pure',
  author: 'Pure Lab',
  description: 'Stay hungry, stay foolish',
  favicon: '/favicon/favicon.ico',
  locale: {
    lang: 'en-US',
    attrs: 'en_US',
    dateLocale: 'en-US',
    dateOptions: {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    }
  },
  logo: {
    src: 'src/assets/avatar.png',
    alt: 'Avatar'
  },
  titleDelimiter: '•',
  prerender: true,
  npmCDN: 'https://cdn.jsdelivr.net/npm',
  head: [],
  customCss: [],
  header: {
    menu: [
      { title: 'Blog', link: '/blog' },
      { title: 'Docs', link: '/docs' },
      { title: 'Projects', link: '/projects' },
      { title: 'Links', link: '/links' },
      { title: 'About', link: '/about' }
    ]
  },
  footer: {
    year: `© ${new Date().getFullYear()}`,
    links: [
      { title: 'Moe ICP 114514', link: 'https://icp.gov.moe/?keyword=114514', style: 'text-sm' },
      { title: 'Travelling', link: 'https://www.travellings.cn/go.html', style: 'text-sm' },
      { title: 'Site Policy', link: '/terms/list', pos: 2 }
    ],
    credits: true,
    social: { github: 'https://github.com/cworld1/astro-theme-pure' }
  },
  content: {
    externalLinks: {
      content: ' ↗',
      properties: { style: 'user-select:none' }
    },
    blogPageSize: 8,
    share: ['weibo', 'x', 'bluesky']
  }
}

export const integ: IntegrationUserConfig = {
  links: {
    logbook: [
      { date: '2025-03-16', content: 'Is there a leakage?' },
      { date: '2025-03-16', content: 'A leakage of what?' },
      { date: '2025-03-16', content: 'I have a full seat of water, like, full of water!' },
      { date: '2025-03-16', content: 'Must be the water.' },
      { date: '2025-03-16', content: "Let's add that to the words of wisdom." }
    ],
    applyTip: [
      { name: 'Name', val: theme.title },
      { name: 'Desc', val: theme.description || 'Null' },
      { name: 'Link', val: 'https://astro-pure.js.org/' },
      { name: 'Avatar', val: 'https://astro-pure.js.org/favicon/favicon.ico' }
    ]
  },
  pagefind: true,
  quote: {
    server: 'https://api.quotable.io/quotes/random?maxLength=60',
    target: `(data) => data[0].content || 'Error'`
  },
  typography: {
    class: 'prose text-base text-muted-foreground',
    blockquoteStyle: 'italic',
    inlineCodeBlockStyle: 'modern'
  },
  mediumZoom: {
    enable: true,
    selector: '.prose .zoomable',
    options: { className: 'zoomable' }
  },
  waline: {
    enable: true,
    server: 'https://astro-theme-pure-waline.arthals.ink/',
    emoji: ['bmoji', 'weibo'],
    additionalConfigs: {
      pageview: true,
      comment: true,
      locale: {
        reaction0: 'Like',
        placeholder: 'Welcome to comment. (Email to receive replies. Login is unnecessary)'
      },
      imageUploader: false
    }
  }
}

export const terms: CardListData = {
  title: 'Terms content',
  list: [
    { title: 'Privacy Policy', link: '/terms/privacy-policy' },
    { title: 'Terms and Conditions', link: '/terms/terms-and-conditions' },
    { title: 'Copyright', link: '/terms/copyright' },
    { title: 'Disclaimer', link: '/terms/disclaimer' }
  ]
}

// Export default config for virtual:config imports
const config: Config = { ...theme, integ }
export default config
