import test from 'ava';
import app from '../src/app.js';

test('testApp', (t) => {
    t.is(app(), 'test')
});
