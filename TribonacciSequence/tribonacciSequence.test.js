const tribonacci = require("./tribonacci");

describe("tribonacci", () => {
  test("when passed with an empty array it will return an empty array", () => {
    const sequence = [];
    const result = tribonacci(sequence);
    expect(result).toEqual([]);
  });
  test("when a n 0 it will return an empty array", () => {
    const sequence = [300,200,100];
    const n = 0
    const result = tribonacci(sequence, n);
    expect(result).toEqual([]);
  });
  test("when a sequence of three 0's array, where n is 1 it will return an array containing one 0", () => {
    const sequence = [0, 0, 0];
    const n = 1
    const result = tribonacci(sequence, n);
    expect(result).toEqual([0]);
  });
  test("when a sequence of three 0's array, where n is 10 it will return an array containing ten 0's", () => {
    const sequence = [0, 0, 0];
    const n = 10
    const result = tribonacci(sequence, n);
    expect(result).toEqual([0,0,0,0,0,0,0,0,0,0]);
  });
  test("when a sequence of two 0's and one 1, where n is 4 it will return an array with the next tribonacci number", () => {
    const sequence = [0, 0, 1];
    const n = 4
    const result = tribonacci(sequence, n);
    expect(result).toEqual([0, 0, 1, 1]);
  });
  test("when a sequence is passed with nth times it will return an array with the containing tribonacci number up to the nth time", () => {
    let sequence = [0, 0, 1];
    let n = 10
    let result = tribonacci(sequence, n);
    expect(result).toEqual([0,0,1,1,2,4,7,13,24,44]);
    sequence = [1,1,1];
    n = 10
    result = tribonacci(sequence, n);
    expect(result).toEqual([1,1,1,3,5,9,17,31,57,105]);
    sequence = [0.5,0.5,0.5];
    n = 30
    result = tribonacci(sequence, n);
    expect(result).toEqual([0.5,0.5,0.5,1.5,2.5,4.5,8.5,15.5,28.5,52.5,96.5,177.5,326.5,600.5,1104.5,2031.5,3736.5,6872.5,12640.5,23249.5,42762.5,78652.5,144664.5,266079.5,489396.5,900140.5,1655616.5,3045153.5,5600910.5,10301680.5]);
  });
});
