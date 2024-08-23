/* npm t exercises/objects/find_key_test.mjs
Instructions:
– Implement find_key.mjs so that the test passes. Use Object.entries() to do so.
– findKey(object, callback) returns the first property key for which callback(propValue, propKey, object) returns true.
– Inspired by Underscore function _.findKey(): https://underscorejs.org/#findKey
*/
suite('find_key_test.mjs');

import assert from 'node:assert/strict';

import {findKey} from './find_key.mjs';

test('Find key via value', () => {
  assert.equal(
    findKey({a:1, b:2, c:3}, (v) => v > 1),
    'b'
  );
});

test('Find key via key', () => {
  assert.equal(
    findKey({a:1, bb:2, ccc:3}, (_v, k) => k.length > 2),
    'ccc'
  );
});

test('Is object passed to callback?', () => {
  const obj = {a:1, b:2, c:3};
  findKey(obj, (v, k, o) => assert.equal(o, obj));
});
