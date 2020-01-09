/**
 * @param {string} s1
 * @param {number} n1
 * @param {string} s2
 * @param {number} n2
 * @return {number}
 */
var getMaxRepetitions = function (s1, n1, s2, n2) {
  let index = 0,
    num1 = 0,
    num2 = 0;
  while (num1 < n1) {
    for (let i = 0; i < s1.length; i++) {
      if (s1[i] === s2[index]) {
        if (index === s2.length - 1) {
          index = 0;
          num2++;
        } else {
          index++;
        }
      }
    }
    num1++;
  }

  // s2本身也产生过一次贡献 所以要向下取整
  return Math.floor(num2 / n2);
};

console.log(getMaxRepetitions('nico', 2, 'nico', 1))