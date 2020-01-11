const rangeExtractor = require("./rangeExtractor");

describe("rangeExtractor", () => {
  test("Expects an empty string when an empty array is passed", () => {
    const input = [];
    const results = rangeExtractor(input);
    expect(results).toBe("");
  });
  test("Expects a string of the single digit when an array with a single digit is passed", () => {
    const input = [1];
    const results = rangeExtractor(input);
    expect(results).toBe("1");
  });
  test("Expects a string of 2 digits when an array with a 2 digits that are connected is passed", () => {
    const input = [1, 2];
    const results = rangeExtractor(input);
    expect(results).toBe("1,2");
  });
  test.only("Expects a string with the range between the 3 digits when an array with a 3 digits that are connected is passed", () => {
    const input = [1, 2, 3];
    const results = rangeExtractor(input);
    expect(results).toBe("1-3");
  });
  test("Expects a string of digits when an array of mixed connected and non connected digits are passed", () => {
    const input = [0, 2, 3, 4];
    const results = rangeExtractor(input);
    expect(results).toBe("0,2-4");
  });
  test("Expects a string of digits when an array of mixed connected and non connected digits are passed", () => {
    const input = [0, 2, 3, 4, 6, 7, 8, 10];
    const results = rangeExtractor(input);
    expect(results).toBe("0,2-4,6-8,10");
  });
  test("Expects a string with the range between the 3 -ve digits when an array with a 3 -ve digits that are connected is passed", () => {
    const input = [-3, -2, -1];
    const results = rangeExtractor(input);
    expect(results).toBe("-3--1");
  });
  test("Expects a string of -ve digits when an array of mixed connected and non connected - ve digits are passed", () => {
    const input = [-4, -3, -2, 0];
    const results = rangeExtractor(input);
    expect(results).toBe("-4--2,0");
  });
  test("Expects a string of -ve digits when an array of mixed connected and non connected - ve digits are passed", () => {
    const input = [-10, -8, -7, -6, -4, -3, -2, 0];
    const results = rangeExtractor(input);
    expect(results).toBe("-10,-8--6,-4--2,0");
  });
  test("Expects a string of mixed digits when an array of mixed connected and non connected digits are passed", () => {
    const input = [-4, -3, -2, 0, 2, 3, 4];
    const results = rangeExtractor(input);
    expect(results).toBe("-4--2,0,2-4");
  });
  test("Expects a string with the range of digits when an array of connected digits from -ve to +ve are passed", () => {
    const input = [-3, -2, -1, 0, 1];
    const results = rangeExtractor(input);
    expect(results).toBe("-3-1");
  });
  test("Expects a string with the range of digits when an array of connected digits from -ve to +ve are passed (codewars test)", () => {
    const input = [
      -6,
      -3,
      -2,
      -1,
      0,
      1,
      3,
      4,
      5,
      7,
      8,
      9,
      10,
      11,
      14,
      15,
      17,
      18,
      19,
      20
    ];
    const results = rangeExtractor(input);
    expect(results).toBe("-6,-3-1,3-5,7-11,14,15,17-20");
  });
  test("Expects a string with the range of digits when an array of connected -ve digits are passed (codewars test)", () => {
    const input = [
      -60,
      -57,
      -56,
      -53,
      -51,
      -48,
      -46,
      -45,
      -42,
      -41,
      -38,
      -36,
      -34,
      -33,
      -32,
      -30,
      -28,
      -26
    ];
    const results = rangeExtractor(input);
    expect(results).toBe(
      "-60,-57,-56,-53,-51,-48,-46,-45,-42,-41,-38,-36,-34--32,-30,-28,-26"
    );
  });
});
