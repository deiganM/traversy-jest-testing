const { TestScheduler } = require('jest');
const reverseString = require('./reverseString');

test('ReverseString function exists', () => {
  expect(reverseString).toBeDefined();
});


test('String Reverses', () => {
  expect(reverseString('hello')).toEqual('olleh');
});

test('String reverses with uppercase', () => {
  expect(reverseString('Hello')).toEqual('olleh');
});