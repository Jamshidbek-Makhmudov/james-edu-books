/* npm t demos/exercises/id_test.mjs
Instructions: Implement id.mjs
*/
suite('id_test.mjs');

import * as assert from 'node:assert/strict';
import {id} from './id.mjs';

test('My test', () => {
  assert.equal(id('abc'), 'abc');
});
