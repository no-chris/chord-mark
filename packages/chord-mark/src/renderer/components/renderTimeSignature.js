import timeSignatureTpl from './tpl/timeSignature.js';

/**
 * @param {SongTimeSignatureLine} timeSignatureLine
 * @returns {String} rendered html
 */
export default function render(timeSignatureLine) {
	return timeSignatureTpl({ timeSignature: timeSignatureLine.string });
}
