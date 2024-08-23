/* npm t exercises/exercises/first_module_test.mjs
Instructions:
- Run the test (fails)
- Change first_module.mjs so that the test passes.
*/
suite('first_module_test.mjs');

import assert from 'node:assert/strict';

import {hello} from './first_module.mjs';

test('First exercise', () => {
  assert.equal(hello('world'), 'Hello world!');
  assert.equal(hello('Jane'), 'Hello Jane!');
  assert.equal(hello('John'), 'Hello John!');
  assert.equal(hello(''), 'Hello !');
});
