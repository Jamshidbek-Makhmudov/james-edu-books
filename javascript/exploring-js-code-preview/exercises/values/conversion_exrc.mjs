/* npm t exercises/values/conversion_exrc.mjs
Instructions:
- Run this test (it fails).
- Change the second parameter of each assert.equal() so that the test succeeds
*/
suite('conversion_exrc.mjs');

import assert from 'node:assert/strict';

test('conversion', () => {
  assert.equal(Boolean(5), '???');
  assert.equal(Number('7'), '???');
  assert.equal(String(21), '???');
});
