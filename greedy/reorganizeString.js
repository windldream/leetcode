/**
 * @param {string} S
 * @return {string}
 */
var reorganizeString = function(S) {
  const len = S.length,
    map = {};
  let maxLen = 0;
  for (let i = 0; i < len; i++) {
    if (map[S[i]]) {
      map[S[i]] += 1;
    } else {
      map[S[i]] = 1;
    }
    if (map[S[i]] > maxLen) {
      maxLen = map[S[i]];
    }
  }

  if (maxLen > (len + 1) / 2) {
    return '';
  }

  let even = 0,
    odd = 1;
  const res = [];
  for (let key in map) {
    while (map[key] > 0 && map[key] < Math.floor(len / 2) + 1 && odd < len) {
      res[odd] = key;
      odd += 2;
      map[key] -= 1;
    }

    while (map[key] > 0) {
      res[even] = key;
      even += 2;
      map[key] -= 1;
    }
  }
  return res.join('');
};

console.log(reorganizeString('aab'));
