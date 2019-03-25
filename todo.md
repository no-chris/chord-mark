# Tech debt
+ mock renderers instead of passing them as parameters
- add unit tests for song renderer
- delegate event to inner event emitter instead of wrapping it
- rename cp2 classes
- change API of components
- unsafe rendering of handlebars templates: {{{ }}}

/perso/universal-chords-charts/ucc/src/parser/parseChordLine.js
  37:16  warning  function 'parseChordLine' has too many lines (67). Maximum allowed is 50  max-lines-per-function

/perso/universal-chords-charts/ucc/tests/integration/parser/parseSong.spec.js
  7:23  warning  arrow function has too many lines (78). Maximum allowed is 50  max-lines-per-function

/perso/universal-chords-charts/ucc/tests/unit/parser/parseSong.spec.js
  22:24  warning  arrow function has too many lines (60). Maximum allowed is 50  max-lines-per-function


