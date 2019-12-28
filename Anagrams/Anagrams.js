function anagrams(anagram, words) {
  if (!anagram) return [];

  return newWords(anagram ,words)
}

module.exports = anagrams;

function newWords(anagram ,words){
  const regex = newRegex(anagram);
  const newWordsArray = filterWordsByLength(anagram, words);
  return filterWordsByRegex(newWordsArray, regex)
}

function newRegex(anagram) {
  const regexSetup = anagram.split("").join("|");
  const regexPattern = `[${regexSetup}]`;

  return new RegExp(regexPattern, "g");
}

function filterWordsByLength(anagram, words) {
  return words.filter(word => {
    const anagramLength = anagram.length;
    const isWordLengthValid = word.length === anagramLength;
    if (isWordLengthValid) return word;
  });
}

function filterWordsByRegex(newWordsArray, regex) {
  return newWordsArray.filter(word => {
    const isRegexValid = regex.test(word);
    console.log(word)
    console.log(isRegexValid)
    if (isRegexValid) return word;
  });
}
