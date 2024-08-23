/* npm t exercises/strings/concat_string_array_test.mjs
Instructions:
- Create the file concat_string_array.mjs
- Ensure this test passes
– Use function logStringArray() from this file as a template.
*/
suite('concat_string_array_test.mjs');

import assert from 'node:assert/strict';

import {concatStringArray} from './concat_string_array.mjs';

test('concatStringArray', () => {
  assert.equal(concatStringArray([]), '');
  assert.equal(concatStringArray(['abc']), 'abc');
  assert.equal(concatStringArray(['x', 'y', 'z']), 'xyz');
});

//----------

function logStringArray(stringArray) {
  for (const str of stringArray) {
    console.log(str);
  }
}
