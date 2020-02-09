/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
  const map = {
      '5': 0,
      '10': 0,
      '20': 0
    },
    len = bills.length;

  for (let i = 0; i < len; i++) {
    if (bills[i] === 5) {
      map[5] += 1;
    } else if (bills[i] === 10) {
      if (!map[5]) {
        return false;
      } else {
        map[5] -= 1;
        map[10] += 1;
      }
    } else if (bills[i] === 20) {
      if (map[10] && map[5]) {
        map[10] -= 1;
        map[5] -= 1;
        map[20] += 1;
      } else if (map[5] >= 3) {
        map[5] -= 3;
        map[20] += 1;
      } else {
        return false;
      }
    }
  }

  return true;
};

console.log(lemonadeChange([5, 5, 10, 10, 20]));
