# Ember-cli-latex-maths

Typeset LaTeX maths expressions using [KaTeX](http://khan.github.io/KaTeX/).


## Installation

    npm install ember-cli-latex-maths --save-dev


## Usage

    {{latex-maths expr="c = \sqrt{a^2 + b^2}"}}


## Options

### `expr`

Type: `String`

TeX expression to render.


### `display`

Type: `Boolean`

Render maths using "display" style typesetting, rather than "inline". Defaults to `false`.
