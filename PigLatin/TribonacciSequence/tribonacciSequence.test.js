const tribonacci = require('./tribonacci')

describe("tribonacci", () => {
  test("when passed with an empty array it will return an empty array", () => {
    const input = []
    const result = tribonacci(input)
    expect(result).toBe([])
  });
});
