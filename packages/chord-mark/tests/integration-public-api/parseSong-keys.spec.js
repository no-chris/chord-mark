import { parseSong } from '../../src/chordMark';
import song from './helpers/songInput';
import {
	explicitKey,
	explicitKeyMinor,
	multipleKeyChanges,
	autoDetectedKey,
} from './fixtures/songs';

describe('parseSong - keys', () => {
	test('parses explicit key declaration', () => {
		const parsed = parseSong(explicitKey());
		const keyLine = parsed.allLines.find(
			(l) => l.type === 'keyDeclaration'
		);
		expect(keyLine).toBeDefined();
		expect(keyLine.string).toBe('key G');
		expect(keyLine.model.string).toBe('G');
		expect(keyLine.model.accidental).toBe('sharp');
	});

	test('parses minor key declaration', () => {
		const parsed = parseSong(explicitKeyMinor());
		const keyLine = parsed.allLines.find(
			(l) => l.type === 'keyDeclaration'
		);
		expect(keyLine.model.string).toBe('Am');
		expect(keyLine.model.accidental).toBe('flat');
	});

	test('allKeys.explicit contains all declared keys', () => {
		const parsed = parseSong(multipleKeyChanges());
		expect(parsed.allKeys.explicit).toHaveLength(2);
		expect(parsed.allKeys.explicit[0].string).toBe('C');
		expect(parsed.allKeys.explicit[1].string).toBe('G');
	});

	test('auto-detects key from chords', () => {
		const parsed = parseSong(autoDetectedKey());
		expect(parsed.allKeys.auto).toBeDefined();
	});

	test('explicit key sets originalKey on chord lines', () => {
		const parsed = parseSong(explicitKey());
		const chordLine = parsed.allLines.find((l) => l.type === 'chord');
		expect(chordLine.model.originalKey).toBeDefined();
		expect(chordLine.model.originalKey.string).toBe('G');
	});

	describe.each([
		['key A', 'A', 'sharp'],
		['key Am', 'Am', 'flat'],
		['key Bb', 'Bb', 'flat'],
		['key F#', 'F#', 'sharp'],
		['key C#m', 'C#m', 'sharp'],
		['key Abm', 'Abm', 'flat'],
	])('parses %s', (keyInput, expectedString, expectedAccidental) => {
		test(`key ${expectedString} accidental=${expectedAccidental}`, () => {
			const parsed = parseSong(song(keyInput, 'C'));
			const keyLine = parsed.allLines.find(
				(l) => l.type === 'keyDeclaration'
			);
			expect(keyLine.model.string).toBe(expectedString);
			expect(keyLine.model.accidental).toBe(expectedAccidental);
		});
	});

	test('key affects chord parsing in allChords', () => {
		const parsed = parseSong(
			song('key G', 'C.. G..', 'key Am', 'Am.. Dm..')
		);
		expect(parsed.allChords.length).toBeGreaterThan(0);
	});

	test('no key declaration results in empty explicit keys', () => {
		const parsed = parseSong(song('C G Am'));
		expect(parsed.allKeys.explicit).toEqual([]);
	});
});
