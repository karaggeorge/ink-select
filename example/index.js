const {h, render} = require('ink');
const {Select, Option, Separator} = require('../lib');

const unmount = render(
  <Select onSelect={item => console.log(item + ' was selected')}>
    <Option value='1'>One</Option>
    <Option value='2' onSelect={() => console.log('Second Action')}>Two</Option>
    <Separator />
    <Option value='3'>Three</Option>
    <Separator label='======' />
    <Option value='4'>Four</Option>
  </Select>
);
