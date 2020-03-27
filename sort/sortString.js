/**
 * @param {string} s
 * @return {string}
 */
var sortString = function(s) {
  const map = {};
  for (const str of s) {
    if (!map[str]) {
      map[str] = 0;
    }
    map[str] += 1;
  }

  let res = '';
  let len = s.length;
  let flag = true;
  while (len) {
    let temp = [];
    for (const key in map) {
      if (map[key]) {
        temp.push(key);
        map[key] -= 1;
        len--;
      }
    }
    if (flag) {
      temp.sort();
    } else {
      temp.sort((a, b) => {
        return a > b ? -1 : a === b ? 0 : 1;
      });
    }
    res += temp.join('');
    flag = !flag;
  }

  return res;
};
