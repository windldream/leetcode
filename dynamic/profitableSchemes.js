/**
 * @param {number} G
 * @param {number} P
 * @param {number[]} group
 * @param {number[]} profit
 * @return {number}
 */
var profitableSchemes = function(G, P, group, profit) {
  const M = 10 ** 9 + 7,
    len = group.length;
  let dp = Array(P + 1)
    .fill(0)
    .map(() => Array(G + 1).fill(0));
  dp[0][0] = 1;

  for (let i = 0; i < len; i++) {
    const p0 = profit[i],
      g0 = group[i];
    let dp2 = Array(P + 1)
      .fill(0)
      .map((val, i) => dp[i].slice());

    // 每次犯罪所产生的利润距离P还差多少理论 P1
    for (let p1 = 0; p1 <= P; p1++) {
      let p2 = Math.min(p1 + p0, P);
      for (let g1 = 0; g1 <= G - g0; g1++) {
        let g2 = g1 + g0;
        dp2[p2][g2] = (dp2[p2][g2] + dp[p1][g1]) % M;
      }
    }
    dp = dp2;
  }

  let res = 0;
  for (let x of dp[P]) {
    res += x;
  }
  return res % M;
};

console.log(profitableSchemes(10, 5, [2, 3, 5], [6, 7, 8]));
