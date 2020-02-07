/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
  const len = gas.length;
  let run = 0,
    rest = 0,
    start = 0;
  for (let i = 0; i < len; i++) {
    run += gas[i] - cost[i];
    rest += gas[i] - cost[i];
    // 如果到不了 k + 1 站
    // 那么就从 k + 1 站出发
    if (run < 0) {
      start = i + 1;
      run = 0;
    }
  }
  return rest < 0 ? -1 : start;
};
