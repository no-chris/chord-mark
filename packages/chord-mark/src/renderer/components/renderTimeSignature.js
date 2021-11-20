import timeSignatureTpl from './tpl/timeSignature.hbs';

/**
 * @param {SongTimeSignatureLine} timeSignatureLine
 * @returns {String} rendered html
 */
export default function render(timeSignatureLine) {
	return timeSignatureTpl({ timeSignature: timeSignatureLine.string });
}
