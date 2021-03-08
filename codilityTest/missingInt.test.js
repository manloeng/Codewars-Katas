const missingInt = require("./missingInt");

describe("missingInt", () => {
  test("", () => {
    const array = [];
    const result = missingInt(array);
    expect(result).toEqual(1);
  });
  test("", () => {
    const array = [1, 2, 3];
    const result = missingInt(array);
    expect(result).toEqual(4);
  });
  test("", () => {
    const array = [-1, 2, 3];
    const result = missingInt(array);
    expect(result).toEqual(1);
  });
  test("", () => {
    const array = [-1, 2, -13];
    const result = missingInt(array);
    expect(result).toEqual(1);
  });
  test("", () => {
    const array = [-1, 1, 2, 3, 4, 5, 6, 7, 8, 10];
    const result = missingInt(array);
    expect(result).toEqual(9);
  });
});
