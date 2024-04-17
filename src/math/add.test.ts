import { add } from './add';

describe('add', () => {
  it('should add 2 numbers', () => {
    expect(add(2, 5)).toBe(7);
  });
});
