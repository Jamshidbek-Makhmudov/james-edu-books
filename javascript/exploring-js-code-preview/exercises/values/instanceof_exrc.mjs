/* npm t exercises/values/instanceof_exrc.mjs
Instructions:
- Run this test (it fails).
- Change the second parameters of assert.equal() so that the test passes
*/
suite('instanceof_exrc.mjs');

import assert from 'node:assert/strict';

test('instanceof', () => {
  assert.equal('abc' instanceof String, '???');
  assert.equal(null instanceof Object, '???');
  assert.equal(undefined instanceof Object, '???');
  
  assert.equal([true, false] instanceof Array, '???');
  assert.equal([true, false] instanceof Object, '???');
  assert.equal({} instanceof Object, '???');
});
