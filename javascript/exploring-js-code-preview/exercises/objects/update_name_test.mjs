/* npm t exercises/objects/update_name_test.mjs
Instructions:
- Create the file update_name.mjs so that the tests pass.
- Use spreading.
*/
suite('update_name_test.mjs');

import assert from 'node:assert/strict';

import {updateName} from './update_name.mjs';

test('updateName: update existing property', () => {
  const input = { name: 'John', age: 54 };
  const output = updateName(input, 'Jane');
  // The function must return a copy, not the original:
  assert.notEqual(input, output);
  assert.deepEqual(output, { name: 'Jane', age: 54 });
});

test('updateName: add new property', () => {
  const input = {};
  const output = updateName(input, 'Rumpelstiltskin');
  // The function must return a copy, not the original:
  assert.notEqual(input, output);
  assert.deepEqual(output, { name: 'Rumpelstiltskin' });
});
