# ChordMark

## Installation

```shell
yarn add chord-mark chord-mark-themes
```

## Usage

```javascript
import { parseSong, renderSong } from 'chord-mark/lib/chord-mark.js';

const song = 'C.. G..\n' + 'When I _find myself in _times of trouble';

const parsed = parseSong(song);
const rendered = renderSong(parsed);
```

ChordMark's default renderer produces a string containing an HTML markup.

```html
<div class="cmSong">
	<p class="cmLine">
		<span class="cmChordLine"
			><span class="cmChordLineOffset"> </span
			><span class="cmBarSeparator">|</span
			><span class="cmChordSymbol">C</span>
			<span class="cmChordSymbol">G</span>
			<span class="cmBarSeparator">|</span></span
		>
	</p>
	<p class="cmLine">
		<span class="cmLyricLine">When I find myself in times of trouble</span>
	</p>
</div>
```

## Configuration

The renderer function can be configured.
Until proper documentation is available, the list of parameters can be checked here: https://github.com/no-chris/chord-mark/blob/master/packages/chord-mark/src/renderer/components/renderSong.js#L27

## Documentation

Check the [User Guide](https://chordmark.netlify.app).

## CSS Classes

By default, ChordMark does not come with any CSS styling.
You can either use the `chord-mark-themes` module or design your own themes.
The following list of CSS classes are available:

-   `cmSong`
-   `cmSection`
-   `cmSection-xxx`, where `xxx` is the section name
-   `cmLine`
-   `cmLine--isFromAutoRepeatChords`
-   `cmLine--isFromChordLineRepeater`
-   `cmLine--isFromSectionCopy`
-   `cmLine--isFromSectionMultiply`
-   `cmChordLine`
-   `cmChordLineOffset`
-   `cmBarSeparator`
-   `cmChordSymbol`
-   `cmChordDuration`
-   `cmEmptyLine`
-   `cmLyricLine`
-   `cmSectionLabel`
-   `cmSectionMultiplier`
-   `cmTimeSignature`
-   `cmSubBeatGroupOpener`
-   `cmSubBeatGroupCloser`

## Breaking changes

While I don't foresee the public API to change drastically in the future, it is to be considered unstable until `v1.0.0` is published.
Breaking changes might happen until then and will be documented in the release notes.
