ember-cli-latex-maths
==============================================================================

[![Build Status](https://travis-ci.org/andybluntish/ember-cli-latex-maths.svg?branch=master)](https://travis-ci.org/andybluntish/ember-cli-latex-maths)
[![Dependency Status](https://david-dm.org/andybluntish/ember-cli-latex-maths.svg)](https://david-dm.org/andybluntish/ember-cli-latex-maths)
[![devDependency Status](https://david-dm.org/andybluntish/ember-cli-latex-maths/dev-status.svg)](https://david-dm.org/andybluntish/ember-cli-latex-maths#info=devDependencies)
[![Ember Observer Score](http://emberobserver.com/badges/ember-cli-latex-maths.svg)](http://emberobserver.com/addons/ember-cli-latex-maths)

[Ember CLI](http://www.ember-cli.com/) addon to typeset LaTeX maths expressions using [KaTeX](http://khan.github.io/KaTeX/).


Compatibility
------------------------------------------------------------------------------

* Ember.js v2.18 or above
* Ember CLI v2.13 or above


Installation
------------------------------------------------------------------------------

```
ember install ember-cli-latex-maths
```


Usage
------------------------------------------------------------------------------

### Inline equation

```handlebars
{{latex-maths expr="a^2 + b^2 = c^2"}}
```

### Block equation

```handlebars
{{latex-maths expr="c = \sqrt{a^2 + b^2}" display=true}}
```

### Color Latex errors rather than throw an exception

```handlebars
{{latex-maths expr="c = \sqrt{a^2 + b^2  \illegal}" throwOnError=false}}
```

Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
