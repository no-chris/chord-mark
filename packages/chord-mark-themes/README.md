# ChordMarkThemes

A set of SCSS themes to style `chord-mark`'s HTML output.
For now, they are only available as Sass files.
Let me know if there is an interest in compiled CSS.

## Installation

```shell
npm install chord-mark-themes
```

## Usage

Set your bundler to support Sass files and import the themes in your code:

```javascript
// load all themes
import '../node_modules/chord-mark-themes/scss/chordMarkThemes';

// load only a specific theme
import '../node_modules/chord-mark-themes/scss/themes/dark1';
```

Wrap ChordMark's output:

```html
<div class="cmTheme-dark1">
	<!-- ChordMark's output goes here -->
</div>
```

## Available themes

| Theme  | CSS class       | Description                                                                        |
| ------ | --------------- | ---------------------------------------------------------------------------------- |
| Dark 1 | `cmTheme-dark1` | Based on [Chord Chart Studio](https://chord-chart-studio.netlify.app) color scheme |
| Dark 2 | `cmTheme-dark2` | Based on [Dracula](https://spec.draculatheme.com) color scheme                     |
| Dark 3 | `cmTheme-dark3` | Also based on [Dracula](https://spec.draculatheme.com) color scheme                |
| Print  | `cmTheme-print` | Can be used to display a print preview                                             |
| Text   | `cmTheme-text`  | Can be used to display a text file preview                                         |

## Utility classes

You can adjust the font size using one of the utilities classes below:

-   `cmSong--fontSize-5`
-   `cmSong--fontSize-4`
-   `cmSong--fontSize-3`
-   `cmSong--fontSize-2`
-   `cmSong--fontSize-1`
-   `cmSong--fontSize1`
-   `cmSong--fontSize2`
-   `cmSong--fontSize3`
-   `cmSong--fontSize4`
-   `cmSong--fontSize5`

They need to be added to the wrapper:

```html
<div class="cmTheme-dark1 cmSong--fontSize-4">
	<!-- ChordMark's rendering goes here -->
</div>
```

## Development

ChordMarkThemes comes with a playground to ease theme development. To launch, run:

```shell
npm run start
```

And open the playground in your browser.
