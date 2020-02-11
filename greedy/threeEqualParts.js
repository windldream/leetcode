/**
 * @param {number[]} A
 * @return {number[]}
 */
var threeEqualParts = function(A) {
  const len = A.length,
    sum = A.reduce((prev, cur) => prev + cur, 0);
  if (sum % 3) {
    return [-1, -1];
  }
  const count = sum / 3;
  if (count === 0) {
    return [0, len - 1];
  }

  let i1 = -1,
    j1 = -1,
    i2 = -1,
    j2 = -1,
    i3 = -1,
    j3 = -1,
    su = 0;
  for (let i = 0; i < len; i++) {
    if (A[i] === 1) {
      su += 1;
      if (su === 1) {
        i1 = i;
      }
      if (su === count) {
        j1 = i;
      }
      if (su === count + 1) {
        i2 = i;
      }
      if (su === 2 * count) {
        j2 = i;
      }
      if (su === 2 * count + 1) {
        i3 = i;
      }
      if (su === 3 * count) {
        j3 = i;
      }
    }
  }

  const p1 = parseInt(A.slice(i1, j1 + 1).join(''), 2);
  const p2 = parseInt(A.slice(i2, j2 + 1).join(''), 2);
  const p3 = parseInt(A.slice(i3, j3 + 1).join(''), 2);

  if (p1 !== p2 || p1 !== p3) {
    return [-1, -1];
  }

  // 后缀 0 的个数
  const x = i2 - j1 - 1;
  const y = i3 - j2 - 1;
  const z = len - j3 - 1;
  if (x < z || y < z) {
    return [-1, -1];
  }

  return [j1 + z, j2 + z + 1];
};

console.log(
  threeEqualParts([0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0])
);
