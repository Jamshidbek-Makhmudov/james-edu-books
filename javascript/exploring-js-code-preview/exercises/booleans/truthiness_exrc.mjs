/* npm t exercises/booleans/truthiness_exrc.mjs
Instructions:
- Run this test (it fails).
- Change the second parameters of assert.equal() so that the test passes
*/
suite('truthiness_exrc.mjs');

import assert from 'node:assert/strict';

test('truthiness', () => {
  assert.equal(Boolean(null), 'some value');
  assert.equal(Boolean(undefined), 'some value');

  assert.equal(Boolean(''), 'some value');
  assert.equal(Boolean('abc'), 'some value');
  assert.equal(Boolean(0), 'some value');
  assert.equal(Boolean(123), 'some value');
  
  assert.equal(Boolean({}), 'some value');
  assert.equal(Boolean([]), 'some value');
});
