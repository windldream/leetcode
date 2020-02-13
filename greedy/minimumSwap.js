/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumSwap = function(s1, s2) {
  let len = s1.length,
    xy = 0,
    yx = 0;
  for (let i = 0; i < len; i++) {
    if (s1[i] === s2[i]) {
      continue;
    }
    if (s1[i] === 'x') {
      xy++;
    } else {
      yx++;
    }
  }

  return (xy + yx) % 2 ? -1 : xy % 2 ? (xy + yx) / 2 + 1 : (xy + yx) / 2;
};

console.log(minimumSwap('xxyyxyxyxx', 'xyyxyxxxyx'));
