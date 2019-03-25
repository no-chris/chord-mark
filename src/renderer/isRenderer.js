import _isObject from 'lodash/isObject';
import _isFunction from 'lodash/isFunction';

export default function isRenderer(renderer) {
	return (_isObject(renderer) && _isFunction(renderer.render));
}
