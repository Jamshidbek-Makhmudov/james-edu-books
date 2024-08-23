/* npm t exercises/exception-handling/call_function_test.mjs
Instructions:
– Change call_function.mjs so that it passes the test.
*/
suite('call_function_test.mjs');

import assert from 'node:assert/strict';

import {callFunction} from './call_function.mjs';

test('callFunction', () => {
  assert.deepEqual(
    callFunction(() => { return 'abc' }),
    { success: 'abc' });
  
  const err = new Error('Failed!');
  assert.deepEqual(
    callFunction(() => { throw err }),
    { failure: err });
});
