/* npm t exercises/strings/remove_extension_test.mjs
Instructions:
- Create the file remove_extension.mjs
- Ensure this test passes
*/
suite('remove_extension_test.mjs');

import assert from 'node:assert/strict';

import {removeExtension} from './remove_extension.mjs';

test('removeExtension', () => {
	assert.equal(removeExtension(''), '');
    assert.equal(removeExtension('foo.txt'), 'foo');
    assert.equal(removeExtension('foo.mjs'), 'foo');
    assert.equal(removeExtension('foo.tar.gz'), 'foo.tar');
    assert.equal(removeExtension('foo'), 'foo');
    assert.equal(removeExtension('.foo'), '');
});
