function LongestNonRepeatedSubString(string) {
  if (!string) return 0;

  const splitStringArray = string.split("");
  if (splitStringArray.length === 1) return 1;

  const highestCount = getHighestCount(splitStringArray);
  return highestCount;
}

module.exports = LongestNonRepeatedSubString;

function getHighestCount(splitStringArray) {
  let referenceArray = [];
  let nextLetterIndex = 1;
  let highestCount = 0;
  let currentLetter = splitStringArray[0];

  while (nextLetterIndex < splitStringArray.length) {
    const nextLetter = splitStringArray[nextLetterIndex];
    referenceArray.push(currentLetter);

    if (referenceArray.includes(nextLetter)) {
      if (highestCount < referenceArray.length) highestCount = referenceArray.length;
      referenceArray = [];
    }

    currentLetter = splitStringArray[nextLetterIndex];
    nextLetterIndex++;
  }

  if (highestCount < referenceArray.length) highestCount = referenceArray.length + 1;

  return highestCount;
}
