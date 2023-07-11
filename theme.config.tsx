import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  head: <link rel="icon" href="https://avatars.githubusercontent.com/u/5600837" type="image/x-icon"/>,
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Coding Freedom',
    }
  },
  logo: <img style={{height: '48px'}} src="https://avatars.githubusercontent.com/u/5600837" />,
  project: {
    link: 'https://github.com/coding-freedom',
  },
  chat: {
    icon: <img style={{width: '24px'}} src="https://www.bilibili.com/favicon.ico" />,
    link: 'https://space.bilibili.com/388036379',
  },
  footer: {
    text: '© Coding Freedom',
  },
  docsRepositoryBase: 'https://github.com/coding-freedom/docs/tree/main',
  editLink: {
  },
  feedback: {
    content: undefined
  }
}

export default config
