import _ from 'lodash';

export default function isRenderer(renderer) {
	return (_.isObject(renderer) && _.isFunction(renderer.render));
}