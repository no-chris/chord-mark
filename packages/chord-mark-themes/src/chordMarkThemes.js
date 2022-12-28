import '../scss/chordMarkThemes.scss';
import '../scss/playground.scss';

import sampleSong from './sampleSong';
import { parseSong, renderSong } from 'chord-mark';

const parsed = parseSong(sampleSong);
const rendered = renderSong(parsed).replace(/\n/g, '');

const themes = [
	{
		name: 'Dark 1',
		key: 'dark1',
	},
	{
		name: 'Dark 2',
		key: 'dark2',
	},
	{
		name: 'Dark 3',
		key: 'dark3',
	},
	{
		name: 'Print 1',
		key: 'print1',
	},
	{
		name: 'Print 2',
		key: 'print2',
	},
	{
		name: 'Text',
		key: 'text',
	},
];

themes.forEach((theme) => {
	const themePreview = `<div style="font-weight: bold">${theme.name}</div><div class="cmContainer cmTheme-${theme.key}">${rendered}</div>`;
	const htmlObject = document.createElement('div');
	htmlObject.classList.add('themePreview');
	// eslint-disable-next-line no-unsanitized/property
	htmlObject.innerHTML = themePreview;
	document.body.appendChild(htmlObject);
});
