import isRenderer from '../../../src/renderer/isRenderer';

describe('isRenderer', () => {
	test('Module', () => {
		expect(isRenderer).toBeInstanceOf(Function);
	});
});

describe('Behavior', () => {
	test('Return true if given a renderer', () => {
		const renderer = {
			render() {}
		};
		expect(isRenderer(renderer)).toEqual(true);
	});
});

describe.each([

	['no parameter', 		undefined ],
	['string param', 		'string' ],
	['no render method', 	{} ],

])('Should return false with %s', (title, input) => {
	expect(isRenderer(input)).toEqual(false);
});
