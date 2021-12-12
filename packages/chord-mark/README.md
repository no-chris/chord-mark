# ChordMark

## Installation

```shell
npm install chord-mark
```

## Usage

```javascript
import { parseSong, renderSong } from 'chord-mark';

const parsed = parseSong('A\n_mySong');
const rendered = renderSong(parsed);
```

ChordMark's default renderer produces an HTML output.

```html
<p class="cmLine">
	<span class="cmChordLine">
		<span class="cmBarSeparator">|</span>
		<span class="cmBarContent"><span class="cmChordSymbol">A</span> </span>
		<span class="cmBarSeparator">|</span>
	</span>
</p>
<p class="cmLine">
	<span class="cmLyricLine">mySong</span>
</p>
```

## Configuration

The renderer function can be configured.
The list of available options is available here: https://github.com/no-chris/chord-mark/blob/master/packages/chord-mark/src/renderer/components/renderSong.js#L27

## Documentation

Check the [User Guide](https://chordmark.netlify.app).
