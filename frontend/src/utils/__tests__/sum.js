import { sum } from '../sum';

describe('sum', () => {
  it('1 + 1 = 2', () => {
    expect(sum(1, 1)).toEqual(2);
  });

  it('2 + 2 = 4', () => {
    expect(sum(2, 2)).toEqual(4);
  });
});
