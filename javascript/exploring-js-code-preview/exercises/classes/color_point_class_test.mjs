/* npm t exercises/classes/color_point_class_test.mjs
Instructions:
- Create the file color_point_class.mjs
- Ensure the test passes
*/
suite('color_point_class_test.mjs');

import assert from 'node:assert/strict';

import {Point} from './point_class.mjs';
import {ColorPoint} from './color_point_class.mjs';

test('Class ColorPoint', () => {
  const cpt = new ColorPoint(4, 7, 'red');
  assert.ok(cpt instanceof Point);
  assert.ok(cpt instanceof ColorPoint);
  assert.equal(cpt.toString(), `(4, 7) in red`);
});
