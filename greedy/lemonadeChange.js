/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
  const len = bills.length;
  let five = 0,
    ten = 0;

  for (let i = 0; i < len; i++) {
    if (bills[i] === 5) {
      five += 1;
    } else if (bills[i] === 10) {
      if (!five) {
        return false;
      } else {
        five -= 1;
        ten += 1;
      }
    } else if (bills[i] === 20) {
      if (ten && five) {
        ten -= 1;
        five -= 1;
      } else if (five >= 3) {
        five -= 3;
      } else {
        return false;
      }
    }
  }

  return true;
};

console.log(lemonadeChange([5, 5, 10, 10, 20]));
