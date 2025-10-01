import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'Dijkstra Blog',
  description:
    'dijkstra-blog is a opinionated, unstyled blogging template—built with Astro, Tailwind, and shadcn/ui.',
  href: 'https://www.dijkstra.org.in/',
  author: 'jktrn',
  locale: 'en-US',
  featuredPostCount: 2,
  postsPerPage: 6,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/blog',
    label: 'blog',
  },
  {
    href: '/authors',
    label: 'authors',
  },
  {
    href: '/tags',
    label: 'tags',
  },
  {
    href: '/about',
    label: 'about',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/Dijkstra-Edu',
    label: 'GitHub',
  },
  {
    href: 'https://twitter.com/Dijkstra',
    label: 'Twitter',
  },
  {
    href: 'mailto:hello@dijkstra.org.in',
    label: 'Email',
  },
  {
    href: 'https://www.linkedin.com/company/dijkstra-edu/',
    label: 'LinkedIn',
  },
  // {
  //   href: '/rss.xml',
  //   label: 'RSS',
  // },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}