import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Docusphere',
  tagline: 'From tools to concepts, your knowledge, all connected.',
  favicon: 'img/planet.ico',
  // plugins: [[
  //   'docusaurus-graph',
  //   {
  //      docsDir: "docs",}] ],
  // Set the production url of your site here
  url: 'https://moonbuild.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/docusphere/',
  markdown: {
    mermaid: true,
  },                                                                                                                  
  themes: ['@docusaurus/theme-mermaid'],
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'docusphere', // Usually your GitHub org/user name.
  projectName: 'docusphere', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // i18n: {
  //   defaultLocale: 'en',
  //   locales: ['en'],
  // },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Docusphere',
      logo: {
        alt: 'Docusphere',
        src: 'svg/planet.svg',
      },
      items: [
        {to:'/docs/backend', label:'Backend', position:'left'},
        {to:'/docs/frontend', label:'Frontend', position:'left'},
        {
          href: 'https://github.com/moonbuild/docusphere',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;