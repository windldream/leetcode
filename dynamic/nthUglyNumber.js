/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
  let dp = [], num = 1, i = 0, cache = {};

  while(true) {
    if (i === n) {
      return dp[n - 1]
    }
    if (isUgly(num, cache)) {
      cache[num] = true;
      dp[i++] = num++;
    } else {
      num++;
    }
  }

  function isUgly(num, cache) {
    const uglyArr = [2, 3, 4, 5];
    if (cache[num]) {
      return cache[num]
    }

    if (num === 1) {
      return true;
    }
  
    while (true) {
      if (num < 6) {
        return uglyArr.includes(num);
      }
      if (Number.isInteger(num / 2)) {
        num = num / 2;
        if (cache[num]) {
          return true;
        }
        continue;
      } else if (Number.isInteger(num / 3)) {
        num = num / 3;
        if (cache[num]) {
          return true;
        }
        continue;
      } else if (Number.isInteger(num / 5)) {
        num = num / 5;
        if (cache[num]) {
          return true;
        }
        continue;
      }
      return false;
    }
  }
};

console.log(nthUglyNumber(491))