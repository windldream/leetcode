/**
 * @param {number[]} A
 * @return {number}
 */
var largestComponentSize = function(A) {
  const unionfind = {};
  for (const num of A) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        union(i, num / i, num);
      }
    }
  }

  const count = {};
  let res = 0;
  for (const num of A) {
    const p = find(num);
    if (!count[p]) {
      count[p] = 0;
    }
    count[p] += 1;
    res = Math.max(res, count[p]);
  }
  return res;

  function find(i) {
    if (unionfind[i] === undefined) {
      return (unionfind[i] = i);
    }
    return unionfind[i] === i ? i : (unionfind[i] = find(unionfind[i]));
  }

  function union(x, y, z) {
    x = find(x);
    y = find(y);
    z = find(z);
    unionfind[x] = unionfind[y] = z;
  }
};
