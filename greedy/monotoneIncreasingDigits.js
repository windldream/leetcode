/**
 * @param {number} N
 * @return {number}
 */
var monotoneIncreasingDigits = function(N) {
  const str = N + '',
    len = str.length;

  // 10 9
  // 1234 1234
  // 332 299
  // 343 3 3 9
  let res = '';
  for (let i = 0; i < len; i++) {
    if (i === len - 1) {
      res += str[i];
      return +res;
    }
    if (str[i] < str[i + 1]) {
      res += str[i];
    } else if (str[i] === str[i + 1]) {
      for (let j = i + 1; j < len; j++) {
        if (str[j] > str[i]) {
          res += str[i];
          break;
        } else if (str[j] < str[i]) {
          res += str[i] - 1;
          res += '9'.repeat(len - i - 1);
          return +res;
        }
      }
    } else {
      res += str[i] - 1;
      res += '9'.repeat(len - i - 1);
      return +res;
    }
  }

  return +res;
};

console.log(monotoneIncreasingDigits(10));
