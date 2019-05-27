import { joinPath } from './path';

test('joinPath', () => {
  expect(joinPath('a', 'b')).toBe('a/b');
  expect(joinPath('a', 'b', 'c')).toBe('a/b/c');
  expect(joinPath('a/', '/b/', '/c/')).toBe('a/b/c/');
});
