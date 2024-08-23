/* npm t exercises/objects/simple_dict_test.mjs
Instructions:
- Implement simple_dict.mjs so that the test passes.
*/
suite('simple_dict_test.mjs');

import assert from 'node:assert/strict';

import { createDict, setValue, getValue, hasKey, getKeys } from './simple_dict.mjs';

test('updateProperty: update existing property', () => {
  const dict = createDict();
  
  setValue(dict, '__proto__', 'abc');
  assert.equal(getValue(dict, '__proto__'), 'abc');
  assert.ok(hasKey(dict, '__proto__'));

  setValue(dict, 'foo', 123);
  assert.equal(getValue(dict, 'foo'), 123);
  assert.ok(hasKey(dict, 'foo'));
  
  assert.deepEqual(hasKey(dict, 'toString'), false);
  
  // Keys are listed in creation order!
  assert.deepEqual(getKeys(dict), ['__proto__', 'foo']);
});
