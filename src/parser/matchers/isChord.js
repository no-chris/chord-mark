import _isString from 'lodash/isString';

import { parseChord }  from 'chord-symbol';

export default function isChord(potentialChord) {
	return _isString(potentialChord) && !(parseChord(potentialChord) === null);
}
