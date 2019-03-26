# Tech debt
+ mock renderers instead of passing them as parameters
+ delegate event to inner event emitter instead of wrapping it
+ change API of components
= rename cp2 classes
- add unit tests for song renderer
- unsafe rendering of handlebars templates: {{{ }}}
- jscore warning webpack

/perso/universal-chords-charts/ucc/src/parser/parseChordLine.js
  37:16  warning  function 'parseChordLine' has too many lines (67). Maximum allowed is 50  max-lines-per-function

/perso/universal-chords-charts/ucc/tests/integration/parser/parseSong.spec.js
  7:23  warning  arrow function has too many lines (78). Maximum allowed is 50  max-lines-per-function

/perso/universal-chords-charts/ucc/tests/unit/parser/parseSong.spec.js
  22:24  warning  arrow function has too many lines (60). Maximum allowed is 50  max-lines-per-function


- Reconfigure PhpStorm once this is fixed:
https://youtrack.jetbrains.com/issue/WEB-37680

Workaround: disable jest.test.tree.use.jasmine.reporter registry key:

    "Help | Find Action..." on the main menu;
    Type "registry" and click "Registry..." found element;
    Find jest.test.tree.use.jasmine.reporter key and disable it.

It will be fixed in 2018.3.6. Once it's out, there will be no need in the workaround, and jest.test.tree.use.jasmine.reporter can be enabled back restoring support for "Click to see difference".
