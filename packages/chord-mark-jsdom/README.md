# ChordMark jsdom

A nodeJs-compatible version of ChordMark, to use for server-side use-cases such as SSR.
There is a separate package for it as it bundles [jsdom](https://github.com/jsdom/jsdom) which is obviously not needed for client-side usage.

## Installation

```shell
npm install chord-mark-jsdom
```

## Usage

This module exposes the same API than [ChordMark](https://github.com/no-chris/chord-mark/tree/master/packages/chord-mark) so the usage is identical.
Under the hood, it will pass a jsdom `window` object to the parsing and rendering functions.

```javascript
import { parseSong, renderSong } from 'chord-mark-jsdom';

const song = 'C.. G..\n' + 'When I _find myself in _times of trouble';

const parsed = parseSong(song);
const rendered = renderSong(parsed);
```
