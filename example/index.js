const {h, render} = require('ink');
const {Select, Option, Separator} = require('../lib');
const readline = require('readline');

// readline.emitKeypressEvents(process.stdin);
// process.stdin.setRawMode(true);
// process.stdin.resume();

const unmount = render(
  <Select onSelect={item => console.log(item)}>
    <Option value='1'>One</Option>
    <Option value='2' onSelect={() => console.log('HI')}>Two</Option>
    <Separator />
    <Option value='3'>Three</Option>
    <Separator label='==============' />
    <Option value='4'>Four</Option>
  </Select>
);
