# documentHelper
Intended to be a collection of utility functions (and a playground for my Node/NPM education). Should not be considered production ready.

Exposes a global variable (currently) docHelper with utility functions. 

Currently contains
docHelper.highestZIndex([HTMLElement]) - recurses the specified element (or the body if none provided) and determines the highest greatest z-index stacking context in the scope.

right now using webpack polyfills to support IE 10+, but that's likely to change at some point. I can't justify 88kb to use Array.from in IE 10. T_T