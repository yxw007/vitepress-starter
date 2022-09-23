const anchor = require('markdown-it-anchor')

export default {
	title: 'VitePress',
	description: 'Just playing around.',
	themeConfig: {
		/* siteTile:false 可隐藏网站title */
		siteTitle: 'My Site Name',
		logo: '../assets/logo.svg',
		nav: [
			{ text: 'Guide', link: '/getting-started' },
			{
				text: 'Dropdown Menu', items: [
					{ text: 'Foo-Index', link: '/foo/index' },
					{ text: 'Foo-one', link: '/foo/one' },
					{ text: 'Foo-two', link: '/foo/two' }
				]
			},
			{
				text: 'Dropdown Nested Menu', items:
					[
						{ text: 'level-1-itemA', items: [{ text: 'level-2-itemA1', link: '/bar/three1' }, { text: 'level-2-itemA2', link: '/bar/four2' }] },
						{ text: 'level-1-itemB', items: [{ text: 'level-2-itemB1', link: '/bar/three3' }, { text: 'level-2-itemB2', link: '/bar/four4' }] }
					]
			},
			{ text: 'Foo', activeMatch: '/foo/', link: '/foo/index' }
		],
		sidebar: [
			{
				text: 'Guide',
				collapsible: true,
				collapsed: true,
				items: [
					{ text: 'Foo-Index', link: '/foo/' },
					{ text: 'Foo-one', link: '/foo/one' },
					{ text: 'Foo-two', link: '/foo/two' }
				]
			}
		]
		/* sidebar: {
			'/foo/': [
				{ text: 'Foo-Index', link: '/foo/' },
				{ text: 'Foo-one', link: '/foo/one' },
				{ text: 'Foo-two', link: '/foo/two' }
			],
			'/bar/': [
				{ text: 'Bar-Index', link: '/bar/' },
				{ text: 'Bar-Four', link: '/bar/four' },
			]
		} */
	},
	markdown: {
		/* 代码块显示行数 */
		lineNumbers: true,
		anchor: {
			permalink: anchor.permalink.headerLink()
		},
		/* 让toc显示的层级 */
		toc: { level: [1, 2] },
	}
}
