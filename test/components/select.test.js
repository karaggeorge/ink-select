import test from 'ava';
import {spy} from 'sinon';
import {h, renderToString} from 'ink';
import {Select, Option, Separator} from '../../lib';

test('renders nothing', t => {
  t.is(renderToString(<Select/>), '');
});

test('calls onChange when moving down the options', t => {
  const setRef = spy();
  const onChange = spy();
  const onSelect = spy();

  renderToString(
    <Select ref={setRef} onChange={onChange} onSelect={onSelect}>
      <Option value={1}>One</Option>
      <Option value={2}>Two</Option>
      <Option value={3}>Three</Option>
    </Select>
  );

  const ref = setRef.firstCall.args[0];
  ref.handleKeyPress('', {name: 'down'});

  t.is(onChange.firstCall.args[0], 2);
  t.false(onSelect.called);
});

test('calls onChange when moving up the options', t => {
  const setRef = spy();
  const onChange = spy();
  const onSelect = spy();

  renderToString(
    <Select ref={setRef} onChange={onChange} onSelect={onSelect}>
      <Option value={1}>One</Option>
      <Option value={2}>Two</Option>
      <Option value={3}>Three</Option>
    </Select>
  );

  const ref = setRef.firstCall.args[0];
  ref.handleKeyPress('', {name: 'up'});

  t.is(onChange.firstCall.args[0], 3);
  t.false(onSelect.called);
});

test('skips separator', t => {
  const setRef = spy();
  const onChange = spy();
  const onSelect = spy();

  renderToString(
    <Select ref={setRef} onChange={onChange} onSelect={onSelect}>
      <Option value={1}>One</Option>
      <Separator/>
      <Option value={2}>Two</Option>
    </Select>
  );

  const ref = setRef.firstCall.args[0];
  ref.handleKeyPress('', {name: 'down'});

  t.is(onChange.firstCall.args[0], 2);
  t.false(onSelect.called);
});

test('calls onSelect on Enter', t => {
  const setRef = spy();
  const onChange = spy();
  const onSelect = spy();

  renderToString(
    <Select ref={setRef} onChange={onChange} onSelect={onSelect}>
      <Option value={1}>One</Option>
      <Option value={2}>Two</Option>
      <Option value={3}>Three</Option>
    </Select>
  );

  const ref = setRef.firstCall.args[0];
  ref.handleKeyPress('', {name: 'return'});

  t.is(onSelect.firstCall.args[0], 1);
  t.false(onChange.called);
});

test('calls onSelect on Space', t => {
  const setRef = spy();
  const onChange = spy();
  const onSelect = spy();

  renderToString(
    <Select ref={setRef} onChange={onChange} onSelect={onSelect}>
      <Option value={1}>One</Option>
      <Option value={2}>Two</Option>
      <Option value={3}>Three</Option>
    </Select>
  );

  const ref = setRef.firstCall.args[0];
  ref.handleKeyPress('', {name: 'space'});

  t.is(onSelect.firstCall.args[0], 1);
  t.false(onChange.called);
});

test('calls onSelect of option if given', t => {
  const setRef = spy();
  const onSelect = spy();

  renderToString(
    <Select ref={setRef}>
      <Option value={1} onSelect={onSelect}>One</Option>
      <Option value={2}>Two</Option>
      <Option value={3}>Three</Option>
    </Select>
  );

  const ref = setRef.firstCall.args[0];
  ref.handleKeyPress('', {name: 'space'});

  t.true(onSelect.called);
});
