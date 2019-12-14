function sellTickets(sales) {
  if (!sales.length) return "No";

  const changeRefObj = { 25: 0, 50: 0, 100: 0 };
  let success = "Yes";

  for (let i = 0; i < sales.length; i++) {
    let remainder = sales[i];

    // while (remainder >= 25)
    if (sales[i] === 25) {
      twentyFives(changeRefObj, sales[i], remainder)
    }

    if (sales[i] === 50) {
      if (changeRefObj[25] <= 0) {
        return "No";
      } else {
        let changeRequired = sales[i] / 25 - 1;

        remainder = remainder - 25 * changeRequired;
        changeRefObj[25] = changeRefObj[25] - changeRequired;

        changeRefObj[sales[i]]++;
      }
    }

    if (sales[i] === 100) {
      if (changeRefObj[25] <= 1 && changeRefObj[50] <= 0) {
        return "No";
      } else {
        let changeRequired = remainder / 50;

        if (changeRequired > changeRefObj[50]) {
          remainder = remainder - changeRefObj[50] * 50;
          changeRefObj[50] = 0;
          // if there's a remainder it needs to check 50 before you can get the 100 bill
          console.log(remainder);
        } else {
          remainder = remainder - changeRefObj[50] * 50;
          changeRefObj[50] = changeRefObj[50] - changeRequired;

          changeRefObj[sales[i]]++;
        }
      }
    }
  }

  return success;
}

module.exports = sellTickets;

function twentyFives(changeRefObj, sale, remainder) {
  changeRefObj[sale]++;
  remainder = remainder - 25;
}

// function checkChange(change) {
//   if (change[25] <= 0) {
//     return "No"
//   }
// }

// function sellTickets(sales) {
//   if (!sales.length) return "No";

//   const changeRefObj = { 25: 0, 50: 0, 100: 0 };
//   let success = "Yes";

//   for (let i = 0; i < sales.length; i++) {
//     if (sales[i] === 25) {
//       changeRefObj[sales[i]]++;
//     } else if (sales[i] === 50) {
//       if (changeRefObj[25] <= 0) {
//         return "No";
//       } else {
//         let changeRequired = sales[i] / 25 - 1;
//         changeRefObj[25] = changeRefObj[25] - changeRequired;

//         changeRefObj[sales[i]]++;
//       }
//     } else {
//       if (changeRefObj[25] <= 0) {
//         return "No";
//       } else {
//         let remainder = 0;

//         // remainder>=25
//         while ((changeRefObj[25] > 0) | (changeRefObj[50] > 0)) {
//           if (changeRefObj[50] > 0) {
//             let changeRequired = sales[i] / 50;
//             if (changeRequired > changeRefObj[50]) {
//               remainder = sales[i] - changeRefObj[50] * 50;
//               changeRefObj[50] = 0;
//             } else {
//               changeRefObj[50] = changeRefObj[50] - changeRequired;
//             }
//           } else {
//             let changeRequired = remainder / 25 - 1;

//             remainder = remainder - changeRefObj[25] * 25;
//             changeRefObj[25] = changeRefObj[25] - changeRequired;

//             // possibly could use the remainder better
//           }
//         }
//       }
//     }

//     if (
//       changeRefObj[25] < 0 &&
//       changeRefObj[50] === 0 &&
//       changeRefObj[100] === 0
//     ) {
//       return "No";
//     }
//   }

//   return success;
// }

// module.exports = sellTickets;
