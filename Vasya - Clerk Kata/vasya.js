function sellTickets(sales) {
  if (!sales.length) return "No";

  const changeRefObj = { 25: 0, 50: 0, 100: 0 };
  let success = "Yes";

  for (let i = 0; i < sales.length; i++) {
    let remainder = sales[i];

    if (sales[i] === 25) {
      changeTwentyFives(changeRefObj, remainder, sales[i]);
    }

    if (sales[i] === 50) {
      if (changeRefObj[25] <= 0) {
        return "No";
      } else {
        changeFifty(changeRefObj, remainder, sales[i]);
      }
    }

    if (sales[i] === 100) {
      if (changeRefObj[25] <= 1 && changeRefObj[50] <= 0) {
        return "No";
      } else {
        if (changeRefObj[50] > 0) {
          let changeRequired = remainder / 50;

          if (changeRequired > changeRefObj[50]) {
            remainder = remainder - changeRefObj[50] * 50;

            changeRefObj[50] = 0;

            changeFifty(changeRefObj, remainder);
          } else {
            remainder = remainder - changeRefObj[50] * 50;
            changeRefObj[50] = changeRefObj[50] - changeRequired;

            changeRefObj[sales[i]]++;
          }
        } else {
          let changeRequired = remainder / 25 - 1;

          if (changeRequired > changeRefObj[25]) {
            return "No";
          } else {
            changeRefObj[25] = changeRefObj[25] - changeRequired;
          }
        }
      }
    }
  }
  return success;
}

module.exports = sellTickets;

function changeTwentyFives(changeRefObj, remainder, sale) {
  changeRefObj[sale]++;
  remainder = remainder - 25;
}

function changeFifty(changeRefObj, remainder, sale) {
  if (!sale) {
    let changeRequired = remainder / 25 - 1;
    remainder = remainder - 25 * changeRequired;
    changeRefObj[25] = changeRefObj[25] - changeRequired;
  } else {
    let changeRequired = sale / 25 - 1;

    remainder = remainder - 25 * changeRequired;
    changeRefObj[25] = changeRefObj[25] - changeRequired;

    changeRefObj[sale]++;
  }
}
