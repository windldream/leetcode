/**
 * @param {number[]} machines
 * @return {number}
 */
var findMinMoves = function(machines) {
  const sum = machines.reduce((prev, curr) => prev + curr, 0),
    len = machines.length;
  if (sum % len) {
    return -1;
  }

  const aver = sum / len;
  const diff = [];
  for (let i = 0; i < len; i++) {
    diff[i] = machines[i] - aver;
  }

  // balance 表示当前洗衣机上经过的流量
  let res = 0,
    balance = 0;
  for (let i = 0; i < len; i++) {
    balance += diff[i];
    res = Math.max(res, diff[i], Math.abs(balance));
  }

  return res;
};

console.log(findMinMoves([9, 1, 8, 8, 9]));
