import '../scss/chordMarkThemes.scss';
import '../scss/playground.scss';

import sampleSong from './sampleSong';
import { parseSong, renderSong } from 'chord-mark';

const parsed = parseSong(sampleSong);
const rendered = renderSong(parsed);

const themes = [
	{
		name: 'Default',
		key: 'default',
	},
];

themes.forEach((theme) => {
	const themePreview = `<div style="font-weight: bold">${theme.name}</div><div class="cmTheme-${theme.key}">${rendered}</div>`;
	const htmlObject = document.createElement('div');
	htmlObject.classList.add('cmTheme');
	// eslint-disable-next-line no-unsanitized/property
	htmlObject.innerHTML = themePreview;
	document.body.appendChild(htmlObject);
});
