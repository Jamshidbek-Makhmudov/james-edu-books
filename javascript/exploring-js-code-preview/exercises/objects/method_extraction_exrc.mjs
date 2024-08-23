/* npm t exercises/objects/method_extraction_exrc.mjs
Instructions:
- Run this test (fails)
- Change the code so that the test passes
*/
suite('method_extraction_exrc.mjs');

import assert from 'node:assert/strict';

const jane = {
  first: 'Jane',
  describe() {
    return `Person named ${this.first}`;
  },
};

test('method_extraction_exrc', () => {
  const func = jane.describe;
  assert.equal(func(), 'Person named Jane');
  jane.first = 'John';
  assert.equal(func(), 'Person named John');
});
