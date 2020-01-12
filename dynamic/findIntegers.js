/**
 * @param {number} num
 * @return {number}
 */
var findIntegers = function(num) {
  let res = 0;
  for (let i = 0; i <= num; i++) {
    if (!isContinuously(i.toString(2))) {
      res++;
    }
  }

  return res;

  function isContinuously(str) {
    for (let i = 0; i < str.length; i++) {
      if (str[i] === '1' && str[i + 1] === '1') {
        return true;
      }
    }
    return false;
  }
};

console.log(findIntegers(5));
