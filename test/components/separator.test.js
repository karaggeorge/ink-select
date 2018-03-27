import test from 'ava';
import {h, renderToString} from 'ink';
import {Separator} from '../../lib';

test('renders default separator', t => {
  t.is(renderToString(<Separator/>), '—————\n');
});

test('renders given separator', t => {
  t.is(renderToString(<Separator label="---"/>), '---\n');
});
