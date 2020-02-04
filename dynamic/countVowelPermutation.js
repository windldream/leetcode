/**
 * @param {number} n
 * @return {number}
 */
var countVowelPermutation = function(n) {
  const M = 10 ** 9 + 7;
  let a = 1,
    e = 1,
    i = 1,
    o = 1,
    u = 1;

  for (let j = 1; j < n; j++) {
    let a1, e1, i1, o1, u1;
    a1 = (e + i + u) % M;
    e1 = (a + i) % M;
    i1 = (e + o) % M;
    o1 = i;
    u1 = (i + o) % M;
    (a = a1), (e = e1), (i = i1), (o = o1), (u = u1);
  }

  return (a + e + i + o + u) % M;
};
