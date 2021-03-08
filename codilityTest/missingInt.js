function missingInt(A) {
  if (!A.length) return 1;

  const sortedArray = A.sort((a, b) => a - b);
  const startNumber = sortedArray[0];
  const endNumber = sortedArray[sortedArray.length - 1];

  let newArray = [];
  for (let i = startNumber; i < endNumber; i++) {
    if (!sortedArray.includes(i)) newArray.push(i);
  }

  if (!newArray.length) return endNumber + 1;

  let smallestPositiveNumber;
  for (let i = 0; i < newArray.length; i++) {
    const number = newArray[i];
    if (number > 0) {
      smallestPositiveNumber = number;
      break;
    } else smallestPositiveNumber = 1;
  }

  return smallestPositiveNumber;
}

module.exports = missingInt;
