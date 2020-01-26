/**
 * @param {number} x
 * @param {number} target
 * @return {number}
 */
var leastOpsExpressTarget = function(x, target) {
  const map = {};
  return helper(x, target);

  function helper(x, target) {
    if (x === target) {
      return 0;
    }
    if (target === 1) {
      return 1;
    }
    if (x === 1) {
      return target - 1;
    }
    if (map[target]) {
      return map[target];
    }
    if (target < x) {
      return Math.min(2 * target - 1, 2 * (x - target));
    }

    let num = 1,
      power = x;
    while (power < target) {
      power *= x;
      num += 1;
    }
    if (power === target) {
      return num - 1;
    }
    const lower_nearst = power / x,
      lower_num = num - 1,
      lower_diff = target - lower_nearst;
    const higher_nearst = power,
      higher_num = num,
      higher_diff = higher_nearst - target;
    let lower_res, higher_res;
    if (lower_diff < target) {
      lower_res = lower_num - 1 + 1 + helper(x, lower_diff);
    } else {
      const mul = Math.floor(lower_diff / lower_nearst);
      lower_res =
        mul * lower_num + 1 + helper(x, lower_diff - lower_nearst * mul);
    }
    if (higher_diff < target) {
      higher_res = higher_num - 1 + 1 + helper(x, higher_diff);
    } else {
      const mul = Math.floor(higher_diff / lower_nearst);
      higher_res =
        higher_num -
        1 +
        mul * lower_num +
        1 +
        helper(x, higher_diff - lower_nearst * mul);
    }
    map[target] = Math.min(lower_res, higher_res);
    return map[target];
  }
};

console.log(leastOpsExpressTarget(11, 52));
