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
<div class="cmSong">
	<p class="cmLine">
		<span class="cmChordLine">
			<span class="cmBarSeparator">|</span>
			<span class="cmBarContent"
				><span class="cmChordSymbol">A</span>
			</span>
			<span class="cmBarSeparator">|</span>
		</span>
	</p>
	<p class="cmLine">
		<span class="cmLyricLine">mySong</span>
	</p>
</div>
```

## Configuration

The renderer function can be configured.
Until proper documentation is available, the list of parameter can be checked here: https://github.com/no-chris/chord-mark/blob/master/packages/chord-mark/src/renderer/components/renderSong.js#L27

## Documentation

Check the [User Guide](https://chordmark.netlify.app).

## CSS Classes

By default, ChordMark does not come with any CSS styling.
You can either use the `chord-mark-themes` module or design your own themes.
The following list of CSS classes are available:

-   `cmSong`
-   `cmLine`
-   `cmLine--isFromAutoRepeatChords`
-   `cmLine--isFromChordLineRepeater`
-   `cmLine--isFromSectionCopy`
-   `cmLine--isFromSectionMultiply`
-   `cmChordLine`
-   `cmChordLineOffset`
-   `cmBarContent`
-   `cmBarSeparator`
-   `cmChordSymbol`
-   `cmChordDuration`
-   `cmEmptyLine`
-   `cmLyricLine`
-   `cmSectionLabel`
-   `cmSectionMultiplier`
-   `cmTimeSignature`

## Breaking changes

While I don't foresee the public API to change drastically in the future, it is to be considered unstable until `v1.0.0` is published.
Breaking changes might happen until then and will be documented in the release notes.
