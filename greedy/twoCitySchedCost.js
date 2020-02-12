/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
  const len = costs.length;
  // for (let cost of costs) {
  //   cost[2] = cost[0] - cost[1];
  // }
  costs.sort((a, b) => a[0] - a[1] - (b[0] - b[1]));
  let res = 0;
  for (let i = 0; i < len / 2; i++) {
    res += costs[i][0] + costs[i + len / 2][1];
  }
  return res;
};

console.log(
  twoCitySchedCost([
    [259, 770],
    [448, 54],
    [926, 667],
    [184, 139],
    [840, 118],
    [577, 469]
  ])
);

// 259 + 184 + 577 + 54 + 667 + 118
