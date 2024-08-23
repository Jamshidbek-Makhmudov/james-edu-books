/* npm t exercises/objects/update_property_test.mjs
Instructions:
- Create the file update_property.mjs so that the tests pass.
- Use spreading.
– Same as update_name.mjs, but with arbitrary keys
*/
suite('update_property_test.mjs');

import assert from 'node:assert/strict';

import {updateProperty} from './update_property.mjs';

test('updateProperty: update existing property', () => {
  const input = { name: 'Jane', age: 54 };
  const output = updateProperty(input, 'age', 82);
  // The function must return a copy, not the original:
  assert.notEqual(input, output);
  assert.deepEqual(output, { name: 'Jane', age: 82 });
});

test('updateProperty: add new property', () => {
  const input = {};
  const output = updateProperty(input, 'data', 123);
  // The function must return a copy, not the original:
  assert.notEqual(input, output);
  assert.deepEqual(output, { data: 123 });
});
