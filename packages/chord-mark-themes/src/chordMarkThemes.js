import '../scss/chordMarkThemes.scss';
import '../scss/playground.scss';

import sampleSong1 from './sampleSong';
import sampleSong2 from './sampleSong2';
import { parseSong, renderSong } from '../../chord-mark/src/chordMark';

const rendered1 = renderSong(parseSong(sampleSong1)).replace(/\n/g, '');
const rendered2 = renderSong(parseSong(sampleSong2)).replace(/\n/g, '');

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
		name: 'Print',
		key: 'print',
	},
	{
		name: 'Text',
		key: 'text',
	},
];

themes.forEach((theme) => {
	const themePreview = `<div style="font-weight: bold">${theme.name}</div>
<div class="cmContainer cmTheme-${theme.key}">${rendered1}</div>
<p>&nbsp;</p>
<div class="cmContainer cmTheme-${theme.key}">${rendered2}</div>`;
	const htmlObject = document.createElement('div');
	htmlObject.classList.add('themePreview');
	// eslint-disable-next-line no-unsanitized/property
	htmlObject.innerHTML = themePreview;
	document.body.appendChild(htmlObject);
});
