/* npm t exercises/modules/export_default_test.mjs
Instructions:
– Create export_default.mjs so that this test passes
*/
suite('export_default_test.mjs');

import assert from 'node:assert/strict';

import func from './export_default.mjs';

test('export_default', () => {
    assert.equal(func(), 'hello');
});
