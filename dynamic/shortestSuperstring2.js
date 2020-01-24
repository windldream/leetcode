/**
 * @param {string[]} A
 * @return {string}
 */
var shortestSuperstring = function(A) {
  while (true) {
    const len = A.length;
    if (len === 1) {
      break;
    }
    let maxOverlap = -1,
      index1 = -1,
      index2 = -1,
      newStr = '';
    for (let i = 0; i < len; i++) {
      for (let j = i + 1; j < len; j++) {
        const merged = merge(A[i], A[j]);
        const newlen = A[i].length + A[j].length - merged.length;
        if (newlen > maxOverlap) {
          maxOverlap = newlen;
          index1 = i;
          index2 = j;
          newStr = merged;
        }
      }
    }
    A.splice(index1, 1);
    A.splice(index2 - 1, 1);
    A.push(newStr);
  }

  return A[0];

  function merge(s1, s2) {
    let min = Math.min(s1.length, s2.length);
    let max = -1,
      str = s1 + s2;
    for (let k = min; k >= 0; k--) {
      if (s1.endsWith(s2.substring(0, k))) {
        max = k;
        str = s1.substring(0, s1.length - k) + s2;
        break;
      }
    }
    for (let k = min; k > max; k--) {
      if (s2.endsWith(s1.substring(0, k))) {
        str = s2.substring(0, s2.length - k) + s1;
        max = k;
      }
    }
    return str;
  }
};

console.log(shortestSuperstring());
