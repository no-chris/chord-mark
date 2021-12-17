[![build](https://github.com/no-chris/chord-mark/actions/workflows/build.yml/badge.svg)](https://github.com/no-chris/chord-mark/actions/workflows/build.yml)
[![Coverage Status](https://coveralls.io/repos/github/no-chris/chord-mark/badge.svg?branch=master)](https://coveralls.io/github/no-chris/chord-mark?branch=master)
[![codebeat badge](https://codebeat.co/badges/78861a38-f06a-44f4-af79-172a31e8ad3e)](https://codebeat.co/projects/github-com-no-chris-chord-mark-master)

# ChordMark

The purpose of ChordMark is to provide the easiest possible way to write accurate chord charts, e.g., text-based song transcriptions with lyrics and chords.
ChordMark charts are usable by all musicians, whether they sing or not, whether they already know the song or not, and whether the song harmony is complex or simple.

ChordMark is both:

-   a grammar to write chords charts in a fast, efficient and accurate way, encoding lyrics, chords and rhythm information.
-   an Open Source Javascript module, `chord-mark`, allowing to process ChordMark files and to format them with a high degree of customization.

ChordMark is supported by [Chord Charts Studio](https://chordmark.netlify.app/docs/chord-charts-studio/overview), a free, web-based, ChordMark native editor, that showcases all the possibilities of the format.

ChordMark has some unique features that make it stand out from other chord charts formats:

-   it focuses on writability, allowing writing chord charts faster than ever
-   it offers higher precision in the song transcription, thanks to its ability to encode rhythm information
-   it allows customizing the rendering for each band member (and not only the one that sings)

Want to give it a try? Head over to the [5 minutes tutorial](https://chordmark.netlify.app/docs/getting-started).

## Available packages

| Package name                                                                                               | Desription                                       |
| ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| [chord-mark](https://github.com/no-chris/chord-mark/tree/master/packages/chord-mark)                       | The core library for parsing and rendering songs |
| [chord-mark-2-chordpro](https://github.com/no-chris/chord-mark/tree/master/packages/chord-mark-2-chordpro) | The ChordPro converter                           |
| [chord-mark-themes](https://github.com/no-chris/chord-mark/tree/master/packages/chord-mark-themes)         | A set of themes to style `chord-mark` output     |
| [documentation](https://github.com/no-chris/chord-mark/tree/master/packages/documentation)                 | The documentation website                        |

## Documentation

Check the [User Guide](https://chordmark.netlify.app).
