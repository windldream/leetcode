/**
 * @param {string} S
 * @return {number[]}
 */
// 123456579
var splitIntoFibonacci = function(S) {
  const len = S.length,
    Max = 2 ** 31 - 1;
  for (let i = 0; i < len; i++) {
    if (S[0] == 0 && i > 0) {
      break;
    }
    const a = +S.substring(0, i + 1);
    if (a > Max) {
      break;
    }
    search: for (let j = i + 1; j < len; j++) {
      if (S[i + 1] == 0 && j > i + 1) {
        break;
      }
      const b = +S.substring(i + 1, j + 1);
      if (b > Max) {
        break;
      }

      const list = [];
      list.push(a);
      list.push(b);
      let k = j + 1;
      while (k < len) {
        const c = list[list.length - 2] + list[list.length - 1];
        const str = c + '';
        if (c <= Max && S.substring(k).startsWith(str)) {
          k += str.length;
          list.push(c);
        } else {
          continue search;
        }
      }
      if (list.length >= 3) {
        return list;
      }
    }
  }
  return [];
};

console.log(splitIntoFibonacci('123456579'));
