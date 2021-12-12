# ChordMark2ChordPro

This converter allows `chord-mark` to generate a chord chart using the [ChordPro](https://www.chordpro.org) syntax.

## Installation

```shell
npm install chord-mark chord-mark-2-chordpro
```

## Usage

```javascript
import { parseSong, renderSong } from 'chord-mark';
import chordMark2ChordPro from 'chord-mark-2-chordpro';

const parsed = parseSong('#v\nA\n_mySong');
const rendered = renderSong(parsed, {
	customRenderer: chordMark2ChordPro,
});
```

ChordMark2ChordPro renderer produces a Text output.

```text
{start_of_verse: Verse 1}
[A]mySong
{end_of_verse}
```
