/* eslint-env node */
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'ChordMark',
	tagline: 'The most powerful chord charts',
	url: 'https://chordmark.netlify.app',
	baseUrl: '/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/favicon.ico',
	organizationName: 'no-chris', // Usually your GitHub org/user name.
	projectName: 'chord-mark', // Usually your repo name.

	plugins: ['docusaurus-plugin-sass'],

	presets: [
		[
			'@docusaurus/preset-classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					// Please change this to your repo.
					editUrl: 'https://github.com/no-chris/chord-mark/',
				},
				theme: {
					customCss: require.resolve('./src/css/custom.scss'),
				},
				gtag: {
					trackingID: 'G-Z2C35ZZBCN',
					anonymizeIP: true,
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			navbar: {
				title: 'ChordMark',
				logo: {
					alt: 'ChordMark Logo',
					src: 'img/cmLogo.png',
				},
				items: [
					{
						type: 'doc',
						docId: 'overview/what-is-chordmark',
						position: 'left',
						label: 'User guide',
					},
					{
						type: 'doc',
						docId: 'api/intro',
						position: 'left',
						label: 'API',
					},
					{
						href: 'https://github.com/no-chris/chord-mark/',
						label: 'GitHub',
						position: 'right',
					},
				],
			},
			footer: {
				style: 'dark',
				links: [
					{
						title: 'Docs',
						items: [
							{
								label: '5 minutes tutorial',
								to: '/docs/getting-started',
							},
						],
					},
					{
						title: 'Community',
						items: [
							{
								label: 'Report issues',
								href: 'https://github.com/no-chris/chord-mark/issues',
							},
							{
								label: 'User forum',
								href: 'https://github.com/no-chris/chord-mark/discussions',
							},
						],
					},
					{
						title: 'Related tools',
						items: [
							{
								label: 'ChordSymbol',
								href: 'https://chord-symbol.netlify.app',
							},
							{
								label: 'Chord Charts Studio',
								href: 'https://chord-charts-studio.netlify.app/',
							},
						],
					},
				],
				copyright: `Copyright © ${new Date().getFullYear()} Christophe Noël. Built with Docusaurus.`,
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
		}),
};

module.exports = config;
