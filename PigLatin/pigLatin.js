function pigIt(str) {
  if (!str) return "";
  if (str.length === 1) return str + "ay";
  
  const splitString = str.split(" ");
  if (splitString.length === 1) {
    const firstChar = str[0];
    const slicedStr = str.slice(1);

    const newWord = flipWord(firstChar, slicedStr);
    const finalString = addPhrase(newWord);

    return finalString;
  } else {
    const newStrings = splitString.map(string => {
      const punctuationRegex = /[^\w\s&/\\]/g;

      if (!punctuationRegex.test(string)) {
        const firstChar = string[0];

        const slicedString = string.slice(1);

        const newString = flipWord(firstChar, slicedString);
        const finalString = addPhrase(newString);
        return finalString;
      } else return string
    });

    return newStrings.join(" ");
  }
}

module.exports = pigIt;

function flipWord(firstChar, slicedStr) {
  return slicedStr + firstChar;
}

function addPhrase(newWord) {
  return newWord + "ay";
}
