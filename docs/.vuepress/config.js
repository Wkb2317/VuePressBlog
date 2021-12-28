const path = require('path');
const fs = require('fs');
module.exports = {
	title: 'Keyl',
	// theme: 'reco',
	locales: {
		'/': {
			lang: 'zh-CN',
		},
	},
	head: [
		[
			'meta',
			{
				name: 'viewport',
				content: 'width=device-width,initial-scale=1,user-scalable=no',
			},
		],
	],
	themeConfig: {
		nav: [
			{
				text: '首页',
				link: '/',
			},
			{
				text: '笔记',
				link: '/notes/',
			},
		],
		subSidebar: 'auto',
		sidebar: {
			'/notes/': [
			
				{
					title: 'Node.js',
					path: '/notes/node/node',
					collapsable: true,
					children: [
						{
							title: '首頁',
							path: '/notes/node/node',
						},
					],
				},
				{
					title: 'Vue',
					collapsable: true,
					path: '/notes/vue/vue',
					children: [
						{
							title: '首頁',
							path: '/notes/vue/vue',
						},
					],
				},
				{
					title: 'React',
					collapsable: true,
					path: '/notes/react/react',
					children: [
						{
							title: '首頁',
							path: '/notes/react/react',
						},
					],
				},
				{
					title: 'JS',
					collapsable: true,
					path: '/notes/js/js',
					children: [
						{
							title: '首頁',
							path: '/notes/js/js',
						},
					],
				},
			]
		},
		
	},
};

function genSidebarConfig(dir, hasSub) {
	let p = path.join(__dirname, '../', dir);
	let files = fs.readdirSync(p);
	let subDir = hasSub ? dir.split('/')[1] : '';
	files = files.map((item) => {
		item = subDir ? subDir + '/' + path.basename(item, '.md') : path.basename(item, '.md');
		return item;
	});
	return files;
}
