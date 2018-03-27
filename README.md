# ink-select [![Build Status](https://travis-ci.org/karaggeorge/ink-select.svg?branch=master)](https://travis-ci.org/karaggeorge/ink-select) [![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

> Select Component for [Ink](https://github.com/vadimdemedes/ink)


Install
---

```
$ npm install ink-select
```

Usage
---

```js
const {h, render} = require('ink');
const {Select, Option, Separator} = require('../lib');

render(
  <Select onSelect={item => console.log(item + ' was selected')}>
    <Option value='1'>One</Option>
    <Option value='2' onSelect={() => console.log('Second Action')}>Two</Option>
    <Separator />
    <Option value='3'>Three</Option>
    <Separator label='======' />
    <Option value='4'>Four</Option>
  </Select>
);
```

## Props

### Select

#### cursorCharacter

Type: `string`
Default: `❯`

This character is used for the cursor.

#### onChange(value)

Type: `Function`

Function to call when the cursor is moved up or down.

#### onSelect(value)

Type: `Function`

Function to call when an item is selected by pressing Enter/Space

### Option

#### value

Type: `any`
**Required**

Is passed to `onChange` and `onSelect` when this item is selected

### Separator

#### label

Type: `string`
Default: `—————`

Text to be used as the separator

Key bindings
---

| key              | action               |
|------------------|----------------------|
| <kbd>Space</kbd> | select option        |
| <kbd>Enter</kbd> | select option        |
| <kbd>↑</kbd>     | move the cursor up   |
| <kbd>↓</kbd>     | move the cursor down |

LICENSE
---

MIT © 2018 [George Karagkiaouris](https://github.com/karaggeorge)
