module.exports = {
  title: 'Webscripting',
  description: 'Webscripting course for the VIVES elektronics and ICT',
  dest: 'dist',
  plugins: [
    ['vuepress-plugin-zooming'],
    [
      // includes all files in `sourceDir`
      // ignore dotfiles and markdown
      'vuepress-plugin-public-files', {
        from: 'files',
        to: 'files',
      }
    ],
    ['vuepress-plugin-container', {
      type: 'quote',
      defaultTitle: '',
    }],
    ['vuepress-plugin-container', {
      type: 'right',
      defaultTitle: '',
    }],
    ['vuepress-plugin-container', {
      type: 'tip',
      defaultTitle: 'TIP',
    }],
    ['vuepress-plugin-container', {
      type: 'warning',
      defaultTitle: 'WARNING',
    }],
    ['vuepress-plugin-container', {
      type: 'danger',
      defaultTitle: 'WARNING',
    }],
    ['vuepress-plugin-container', {
      type: 'details',
      before: info => `<details class="custom-block details">${info ? `<summary>${info}</summary>` : ''}\n`,
      after: () => '</details>\n'
    }],
  ],
  serviceWorker: true,
  themeConfig: {
    nav: [
      { text: 'Toledo', link: 'https://p.cygnus.cc.kuleuven.be/webapps/tol-web-rs-bb-bb_bb60/goto_lu.do?batchUid=B-VIVN-B5N222-2021&entityId=urn%3Amace%3Akuleuven.be%3Akulassoc%3Akuleuven.be' },
      { text: 'Blackboard Collaborate', link: 'https://p.cygnus.cc.kuleuven.be/webapps/collab-ultra/tool/collabultra?course_id=_976829_1&mode=cpview' },
      { text: 'ECTS', link: 'https://p.cygnus.cc.kuleuven.be/webapps/tol-ECTS-bb_bb60/public/display?button_id=338029f4-47f6-4f27-b476-6b642a1b0fb3' }
    ],
    sidebarDepth: 1,
    repo: 'sillevl/course-webscripting',
    docsDir: 'docs',
    docsBranch: 'master'
  },
}