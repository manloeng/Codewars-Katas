const LongestNonRepeatedSubString = require("./LongestNonRepeatedSubString");

describe("LongestNonRepeatedSubString", () => {
  test("will return an empty array when passed without a base word for the anagram", () => {
    const string = "";
    const result = LongestNonRepeatedSubString(string);
    expect(result).toEqual(0);
  });
  test("will return 1 when a single letter is passed", () => {
    const string = "a";
    const result = LongestNonRepeatedSubString(string);
    expect(result).toEqual(1);
  });
  test("will return 1 when a duplicate letter is passed", () => {
    const string = "aa";
    const result = LongestNonRepeatedSubString(string);
    expect(result).toEqual(1);
  });
  test("will return 2 when a two different letters is passed", () => {
    const string = "ab";
    const result = LongestNonRepeatedSubString(string);
    expect(result).toEqual(2);
  });
  test("will return 3 when a two different letters is passed", () => {
    const string = "abc";
    const result = LongestNonRepeatedSubString(string);
    expect(result).toEqual(3);
  });
  test("will return 3 when passed with a string with 1 duplicate letter", () => {
    const string = "abca";
    const result = LongestNonRepeatedSubString(string);
    expect(result).toEqual(3);
  });
  test("will return find the longest non repeated sub string and count it", () => {
    const string = "abcadsajbdkncxnmzcqkwndxzikujabsx";
    const result = LongestNonRepeatedSubString(string);
    expect(result).toEqual(11);
  });
});
