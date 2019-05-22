/**
 * @param {number} n
 * @return {string}
 */
// 1 一个1 -> 11 两个1 -> 21 一个2一个1 -> 1211 一个1一个2两个1 ->111221 三个1两个2一个1 ->312211
/*
1.     1
2.     11
3.     21
4.     1211
5.     111221
6.     312211
*/
var countAndSay = function(n) {
    let i, cache = [0, "1"]

    for (i = 2; i <= n; i++) {
      let len = 1;
      let str = cache[i - 1] + '';
      let num = '';
      for (let j = 0; j < str.length; j++) {
        if (str[j] === str[j + 1]) {
          len++;
        } else {
          num += '' + len + str[j];
          len = 1
        }
      }
      cache[i] = num;
    }

    return cache[n];
};

console.log(countAndSay(6));