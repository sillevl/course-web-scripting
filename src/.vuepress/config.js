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
    ['vuepress-plugin-presentation-mode'],
  ],
  serviceWorker: true,
  themeConfig: {
    nav: [
      { text: 'Toledo', link: 'https://p.cygnus.cc.kuleuven.be/webapps/tol-web-rs-bb-bb_bb60/goto_lu.do?batchUid=B-VIVN-B5N222-2021&entityId=urn%3Amace%3Akuleuven.be%3Akulassoc%3Akuleuven.be' },
      { text: 'Blackboard Collaborate', link: 'https://p.cygnus.cc.kuleuven.be/webapps/collab-ultra/tool/collabultra?course_id=_976829_1&mode=cpview' },
      { text: 'ECTS', link: 'https://p.cygnus.cc.kuleuven.be/webapps/tol-ECTS-bb_bb60/public/display?button_id=338029f4-47f6-4f27-b476-6b642a1b0fb3' }
    ],
    repo: 'sillevl/course-webscripting',
    docsDir: 'src',
    docsBranch: 'master',
    sidebarDepth: 1,
    sidebar: [
      {
        title: 'JavaScript',   // required
        collapsable: true, // optional, defaults to true
        sidebarDepth: 0,    // optional, defaults to 1
        children: [
          '/chapters/01-javascript/nodejs/',
          '/chapters/01-javascript/let-const-var/',
          '/chapters/01-javascript/arrow-functions/',
          '/chapters/01-javascript/template-literals/',
          '/chapters/01-javascript/classes/',
          '/chapters/01-javascript/array-and-object-methods/',
          '/chapters/01-javascript/destructuring/',
          '/chapters/01-javascript/modules/',
          '/chapters/01-javascript/transpiling/',
          '/chapters/01-javascript/callback-hell/',
          '/chapters/01-javascript/promises/',
          '/chapters/01-javascript/async-await/',
        ]
      },
      {
        title: 'Managing Code',   // required
        collapsable: true, // optional, defaults to true
        sidebarDepth: 0,    // optional, defaults to 1
        children: [
        ]
      },
      {
        title: 'Backend with Express',   // required
        collapsable: true, // optional, defaults to true
        sidebarDepth: 0,    // optional, defaults to 1
        children: [
          '/chapters/03-rest-api/rest/',
          '/chapters/03-rest-api/express/',
          '/chapters/03-rest-api/fetch-api/',
          '/chapters/03-rest-api/dot-env/',
          '/chapters/03-rest-api/database/',
        ]
      },
      {
        title: 'Frondend with Vue.js',   // required
        collapsable: true, // optional, defaults to true
        sidebarDepth: 0,    // optional, defaults to 1
        children: [
          '/chapters/04-vue.js/introduction/',
          '/chapters/04-vue.js/vue-library-typescript/'
        ]
      },
    ]
  },
}