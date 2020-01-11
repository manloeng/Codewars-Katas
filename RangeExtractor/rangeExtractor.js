function rangeExtractor(list) {
  if (!list.length) return "";
  if (list.length === 1 || list.length === 2) return list.join().toString();
  const newList = getNewRangeList(list);
  console.log(newList);
  return newList.join(",").toString();
}

module.exports = rangeExtractor;

function isNextNumberAnIncreament(currentNumber, nextNumber) {
  return increamentCurrentNumber(currentNumber) === nextNumber;
}

function increamentCurrentNumber(currentNumber) {
  return currentNumber + 1;
}

function getNewRangeList(list) {
  const newList = [];
  let countIncreament = 0;
  let startNumber = 0;
  let endNumber = 0;

  for (let i = 0; i < list.length; i++) {
    const currentNumber = list[i];
    const nextNumber = list[i + 1];

    if (isNextNumberAnIncreament(currentNumber, nextNumber)) {
      countIncreament++;
      
      if (countIncreament === 1) {
        startNumber = currentNumber;
        endNumber = nextNumber;
      }

      if (countIncreament > 1) endNumber = nextNumber;

    } else if (startNumber && endNumber && countIncreament === 1) {
      newList.push(startNumber);
      newList.push(endNumber);
      countIncreament = 0;
      startNumber = 0;
      endNumber = 0;
    } else if (startNumber && endNumber) {
      const range = `${startNumber}-${endNumber}`;
      newList.push(range);
      countIncreament = 0;
      startNumber = 0;
      endNumber = 0;
    } else newList.push(currentNumber);
  }

  return newList;
}
