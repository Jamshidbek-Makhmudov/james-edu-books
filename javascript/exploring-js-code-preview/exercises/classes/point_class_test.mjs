/* npm t exercises/classes/point_class_test.mjs
Instructions:
- Create the file point_class.mjs
- Ensure the test passes
*/
suite('point_class_test.mjs');

import assert from 'node:assert/strict';

import {Point} from './point_class.mjs';

test('Class Point', () => {
  const pt = new Point(4, 7);
  assert.equal(pt.x, 4);
  assert.equal(pt.y, 7);
  assert.equal(pt.dist(), Math.sqrt(4**2 + 7**2));
  assert.equal(pt.toString(), `(4, 7)`);
});
