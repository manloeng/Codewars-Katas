function anagrams(anagram, words) {
  if (!anagram) return [];

  return newWords(anagram, words);
}

module.exports = anagrams;

function newWords(anagram, words) {
  const newWordsArray = filterWordsByLength(anagram, words);
  const sortNewWordsArray = sortNewWords(newWordsArray);
  const wordsIndex = getWordIndex(anagram, sortNewWordsArray);
  const newWords = getNewWords(wordsIndex, newWordsArray)

  return newWords
}

function filterWordsByLength(anagram, words) {
  return words.filter(word => {
    const anagramLength = anagram.length;
    const isWordLengthValid = word.length === anagramLength;
    if (isWordLengthValid) return word;
  });
}

function sortNewWords(newWordsArray) {
  return newWordsArray.map(word => {
    const sortWord = word
      .split("")
      .sort()
      .join("");
    return sortWord;
  });
}

function getWordIndex(anagram, sortNewWordsArray) {
  let counter = -1;
  const sortAnagram = anagram
  .split("")
  .sort()
  .join("");
  return sortNewWordsArray.map(word => {
    counter++;
    if (word === sortAnagram) return counter;
  });
}

function getNewWords(wordsIndex, newWordsArray){
  const newWords = []

  for (let i = 0; i < wordsIndex.length; i++) {
    const isWordIndexValid = wordsIndex[i] | wordsIndex[i] > -1
    if(isWordIndexValid){
      newWords.push(newWordsArray[wordsIndex[i]])
    }
  }

  return newWords
}