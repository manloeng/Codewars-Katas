const pigIt = require('./pigLatin')

describe('pigIt', () => {
  test('when a empty string is passed it will return an empty string', () => {
    const input = ""
    const expected = pigIt(input)
    expect(expected).toBe("")
  });
  test('when a single character is passed it will return the character with "ay" attached ', () => {
    let input = "a"
    let expected = pigIt(input)
    expect(expected).toBe("aay")
    input = "b"
    expected = pigIt(input)
    expect(expected).toBe("bay")
  });
  test('when a two connected character is passed it will return the a string with the first character moved to the end and have an "ay" attached', () => {
    let input = "ab"
    let expected = pigIt(input)
    expect(expected).toBe("baay")
    input = "Ba"
    expected = pigIt(input)
    expect(expected).toBe("aBay")
  });
  test('when a string is passed it will return the a string with the first character moved to the end and have an "ay" attached', () => {
    const input = "Hello"
    const expected = pigIt(input)
    expect(expected).toBe("elloHay")
  });
  test('when a two seperated character is passed it will return both characters with "ay" attached to the end of each one', () => {
    const input = "a b"
    const expected = pigIt(input)
    expect(expected).toBe("aay bay")
  });
  test('when a two seperated strings is passed it will return both characters with "ay" attached to the end of each one', () => {
    const input = "Hello World"
    const expected = pigIt(input)
    expect(expected).toBe("elloHay orldWay")
  });
  test('when a multiple seperated strings is passed it will return both characters with "ay" attached to the end of each one', () => {
    const input = "Hello World here i am"
    const expected = pigIt(input)
    expect(expected).toBe("elloHay orldWay erehay iay maay")
  });
  test('when a string is passed with a punctuation mark it will return the a string with the first character moved to the end and have an "ay" attached and ignore the punctuation', () => {
    const input = "Hello !"
    const expected = pigIt(input)
    expect(expected).toBe("elloHay !")
  });
  test('when a seperated string is passed with a punctuation mark it will return the a string with the first character moved to the end and have an "ay" attached and ignore the punctuation', () => {
    const input = "Hello world !"
    const expected = pigIt(input)
    expect(expected).toBe("elloHay orldway !")
  });
});