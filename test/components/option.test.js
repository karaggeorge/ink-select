import test from 'ava';
import {h, renderToString, Color} from 'ink';
import {Option} from '../../lib';

test('renders empty line', t => {
  t.is(renderToString(<Option value={1}/>), '\n');
});

test('renders children', t => {
  t.is(renderToString(<Option value={1}><Color>My Option</Color></Option>), 'My Option\n');
});
