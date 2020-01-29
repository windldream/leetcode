/**
 * @param {number[]} A
 * @return {number}
 */
var countTriplets = function(A) {
  const len = A.length,
    map = new Map();
  let res = 0;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      const key = A[i] & A[j];
      if (map.has(key)) {
        map.set(key, map.get(key) + 1);
      } else {
        map.set(key, 1);
      }
    }
  }
  for (let key of map.keys()) {
    if (key === 0) {
      res += map.get(key) * len;
      continue;
    }
    for (let i = 0; i < len; i++) {
      if ((A[i] & key) === 0) {
        res += map.get(key);
      }
    }
  }
  return res;
};

console.log(countTriplets([2, 1, 3]));
