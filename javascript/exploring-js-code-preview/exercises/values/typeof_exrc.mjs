/* npm t exercises/values/typeof_exrc.mjs
Instructions:
- Run this test (it fails).
- Change the second parameter of each assert.equal() so that the test passes
*/
suite('typeof_exrc.mjs');

import assert from 'node:assert/strict';

test('typeof', () => {
  assert.equal(typeof null, '???');
  assert.equal(typeof undefined, '???');
  
  assert.equal(typeof 123, '???');
  assert.equal(typeof 'a', '???');
  assert.equal(typeof "abc", '???');
  
  assert.equal(typeof {}, '???');
  assert.equal(typeof function () {}, '???');
  assert.equal(typeof [], '???');
});
