# What is ChordMark?

Simply put, ChordMark is the most powerful syntax to write Chord Charts, eg. text-based song transcriptions with lyrics and chords.

It is easier to write than other formats, while allowing a higher precision in the song transcription, as well as more flexibility in the way the chart is displayed.

## Why a new format?

Like many things, ChordMark was born out of frustration.

Chord charts are all around the web:

```
C                     F
When I find myself in times of troubles
```

And most of the times, I agree that is all you need to learn a song.

However, there are also a significant number of times when I find them incredibly frustrating:

-   They are **mostly useless** if you don't know the song beforehand. And I get often asked to play songs I don't know by other people.
-   They get **very confusing** when the song contain many chord changes. Sometimes it's very hard to know how long a given chord should be played or when the change should happen.
-   **Transposing** them doesn't always work, because most software/website fails to recognize complex chords. You end up with a chord chart mixing tonalities.
-   They are **only useful for the singer musician**: if all that you care about is the song structure or the chord grid, as a bass player or drummer, for example, you will have a hard time getting that information in an accurate way

And that's only from a player point of view. From a transcriber point of view, my frustration with chord charts was even bigger:

-   they are **painful to write**. You either need to enter spaces in order to position the chord on top of the lyrics, or put them between brackets (eg, `[A7]`) in the middle of the lyrics line.
-   even if the chords are identical for each verse/chorus, you need to **repeat that painful process** of positionning/inserting the chords every time
-   whenever you correct/change something, you risk **breaking** the chords/lyrics alignement
-   they do not allow to **easily encode rythm information**, unless you manually type the bar separators `|` and space the chords. Which makes the writing process even more painful.

For all those reasons, I would always cringe whenever I wanted to write a song transcription.
After many years of frustration, I've decided to build the solution myself.

## The ChordMark solution

Chord charts written in ChordMark solves all the issues above:

-   They are quick and easy to write. No need to space anything manually, to enclose chords in brackets or to mix them with lyrics.
-   Whenever possible, they also avoid you to repeat what you've already written once, making the transcription process quicker and more enjoyable.
-   They embed rythm information, eg. how long a given chord should be played. That way, you can play the song even if you don't know it, and there is no ambiguity in the duration of each chord.
-   Having the rythm information encoded also allows you to display only the chord grid or the song structure, which is great for other band members.
-   They recognize all possible chords symbols (or almost), even the most complex ones. So transposing always work.

Of course this also have some tradeoffs:

-   in order to enjoy the full benefits of the formats, chord charts needs to be written with an accurate understanding of the song rythm: time signature, bars details, etc.
-   ChordMark focus on writability.
    The drawback is that the source file is not easily readable than with other formats and needs to be rendered.
    This is why I also built ChordChartsStudio, a software that allows to create Chord Charts in ChordMark format.
