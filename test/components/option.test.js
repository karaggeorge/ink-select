import test from 'ava';
import {h, renderToString, Text} from 'ink';
import {Option} from '../../lib';

test('renders empty line', t => {
  t.is(renderToString(<Option value={1}/>), '\n');
});

test('renders children', t => {
  t.is(renderToString(<Option value={1}><Text>My Option</Text></Option>), 'My Option\n');
});
