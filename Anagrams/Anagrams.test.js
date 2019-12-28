const anagrams = require("./Anagrams");

describe("anagrams", () => {
  test("will return an empty array when passed without a base word for the anagram", () => {
    const anagram = "";
    const words = [];
    const result = anagrams(anagram, words);
    expect(result).toEqual([]);
  });
  test("will return an array containing a single word anagram when passed with an anagram with the same word", () => {
    const anagram = "a";
    const words = ["a"];
    const result = anagrams(anagram, words);
    expect(result).toEqual(["a"]);
  });
  test("will return an empty array when passed with an a single word anagram that doesn't contain the same word", () => {
    const anagram = "a";
    const words = ["b"];
    const result = anagrams(anagram, words);
    expect(result).toEqual([]);
  });
  test("will return an array containing the variations of the 2 letter anagram when passed with an anagram and the valid words", () => {
    const anagram = "ab";
    const words = ["ab", "ba"];
    const result = anagrams(anagram, words);
    expect(result).toEqual(["ab", "ba"]);
  });
  test("will return an array containing the variations of the 4 letter anagram when passed with an anagram and the valid words", () => {
    const anagram = "abba";
    const words = [
      "aabb",
      "abab",
      "abbaa",
      "abbab",
      "abbba",
      "abcd",
      "baaab",
      "baab",
      "baba",
      "babaa",
      "bbaa"
    ];
    const result = anagrams(anagram, words);
    expect(result).toEqual(["aabb", "abab", "baab", "baba", "bbaa"]);
  });
  test.only("will return an array containing the variations of the 2 letter anagram when passed with an anagram and the invalid words", () => {
    const anagram = "ab";
    const words = [ 'aa', 'ab', 'ba', 'bb' ];
    const result = anagrams(anagram, words);
    expect(result).toEqual(["ab", "ba"]);
  });
});
