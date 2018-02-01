'use strict';

const parenser = require('../solution');

describe('parenser', () => {
  test('expect a solution with 3 paren pairs to return 5 pairs of parens', () => {
    expect(parenser(4).length).toEqual(14);
    expect(parenser(1).length).toEqual(1);
    expect(parenser(2).length).toEqual(2);
    expect(parenser(3).length).toEqual(5);
    expect(parenser(5).length).toEqual(42);
  });
});
