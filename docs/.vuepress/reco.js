const path = require("path");
const fs = require("fs");
module.exports = {
  theme: 'reco',
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  themeConfig: {
    authorAvatar: 'http://keyl.top/images/test.jpg', 
    blogConfig: {
      tag: {
        location: 3,     // 在导航栏菜单中所占的位置，默认3
        text: '首页'      // 默认文案 “标签”
      },
      category: {
        location: 2,     // 在导航栏菜单中所占的位置，默认2
        text: '技术' // 默认文案 “分类”
      },
      socialLinks: [     // 信息栏展示社交信息
        { icon: 'reco-github', link: 'https://github.com/recoluan' },
        { icon: 'reco-npm', link: 'https://www.npmjs.com/~reco_luan' }
      ],
      subSidebar: 'auto'
    },
    subSidebar: 'auto',
    nav: [
      { text: '首页', link: '/' },
      { text: '技术', link: '/learning-notes/' },
    ],
    sidebar: {
      '/learning-notes/': [
        {
          title: "Node.js",
          collapsable: true,
          children: genSidebarConfig("learning-notes/node", true)
        },
        {
          title: "Vue",
          collapsable: true,
          children: genSidebarConfig("learning-notes/vue", true)
        },
        {
          title: "React",
          collapsable: true,
          children: genSidebarConfig("learning-notes/react", true)
        },
        {
          title: "JS",
          collapsable: true,
          children: genSidebarConfig("learning-notes/js", true)
        },

      ],

    }
  }
}

function genSidebarConfig(dir, hasSub) {
  let p = path.join(__dirname, '../', dir);
  let files = fs.readdirSync(p);
  let subDir = hasSub ? dir.split('/')[1] : '';
  files = files.map(item => {
    item = subDir ? subDir + '/' + path.basename(item, '.md') : path.basename(item, '.md');
    return item;
  });
  return files;
}