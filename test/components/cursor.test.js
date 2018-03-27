import test from 'ava';
import {h, renderToString} from 'ink';
import Cursor from '../../lib/components/cursor';

test('renders default cursor', t => {
  t.is(renderToString(<Cursor isActive/>), '❯\u00A0');
});

test('renders missing cursor', t => {
  t.is(renderToString(<Cursor isActive={false}/>), '\u00A0\u00A0');
});

test('renders the right cursor', t => {
  t.is(renderToString(<Cursor isActive cursorCharacter="-->"/>), '-->\u00A0');
});

test('renders the right amount of spaces', t => {
  t.is(renderToString(<Cursor isActive={false} cursorCharacter="->"/>), '\u00A0\u00A0\u00A0');
});
