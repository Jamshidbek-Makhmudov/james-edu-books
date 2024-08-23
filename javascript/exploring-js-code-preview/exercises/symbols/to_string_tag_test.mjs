/* npm t exercises/symbols/to_string_tag_test.mjs
Instructions:
- Implement to_string_tag.mjs so that the test passes.
– Use the property key Symbol.toStringTag
– Syntax for creating the object SPECIAL_OBJECT: check the material on symbols
*/
suite('to_string_tag_test.mjs');

import assert from 'node:assert/strict';

import { SPECIAL_OBJECT } from './to_string_tag.mjs';

test('Symbol.toStringTag', () => {
  assert.equal(String({}), '[object Object]'); // default
  
  // Instance property [Symbol.toStringTag] must be changed
  assert.notEqual(SPECIAL_OBJECT[Symbol.toStringTag], Object.prototype[Symbol.toStringTag]);
  // Method .toString() must not be changed
  assert.equal(SPECIAL_OBJECT.toString, {}.toString);

  assert.equal(String(SPECIAL_OBJECT), '[object Hello]');
});
