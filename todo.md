# Tech debt
+ mock renderers instead of passing them as parameters
+ delegate event to inner event emitter instead of wrapping it
+ change API of components
+ rename cp2 classes
+ coverage 100%
+ unsafe rendering of handlebars templates: {{{ }}}
+ js-core warning webpack



/perso/universal-chords-charts/ucc/src/parser/parseChordLine.js
  38:16  warning  function 'parseChordLine' has too many lines (67). Maximum allowed is 50       max-lines-per-function




- Reconfigure PhpStorm once this is fixed:
https://youtrack.jetbrains.com/issue/WEB-37680

Workaround: disable jest.test.tree.use.jasmine.reporter registry key:

    "Help | Find Action..." on the main menu;
    Type "registry" and click "Registry..." found element;
    Find jest.test.tree.use.jasmine.reporter key and disable it.

It will be fixed in 2018.3.6. Once it's out, there will be no need in the workaround, and jest.test.tree.use.jasmine.reporter can be enabled back restoring support for "Click to see difference".
