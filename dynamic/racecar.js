/**
 * @param {number} target
 * @return {number}
 */
var racecar = function(target) {
  const dp = Array(target + 1).fill(Infinity);

  dp[0] = 0;
  dp[1] = 1;
  dp[2] = 4;
  for (let i = 3; i <= target; i++) {
    const k = 32 - numberOfLeadingZeros(i);

    if ((1 << k) - 1 === i) {
      dp[i] = k;
      continue;
    }

    // 1. 连续加速 k - 1 个 A 然后掉头 行驶 j 个 A (j < k - 1) 然后再掉头
    // 2. 此时距离终点的距离为 t - 2 ** k - 1 + 2 ** j
    // 3. 故到达目标 t 的距离为 k - 1 + 1 + j + 1 + 步骤2距离终点的需行走的步数
    for (let j = 0; j < k - 1; j++) {
      dp[i] = Math.min(
        dp[i],
        dp[i - (1 << (k - 1)) + (1 << j)] + k - 1 + j + 2
      );
    }

    // 1. 连续加速 k 个 A 然后掉头 处在 2 ** k - 1 的位置上
    // 2. 这时多走的距离为 2 ** k - 1 - t
    // 3. 往回倒车 此时已走了 k + 1 步
    // 4. 由第三步可知此时需往回走的距离为 2 ** k - 1 - j
    // 5. 故到达目标 t 的步数为 k + 1 + 往回走的步数
    if ((1 << k) - 1 - i < i) {
      dp[i] = Math.min(dp[i], dp[(1 << k) - 1 - i] + 1 + k);
    }
  }

  return dp[target];

  function numberOfLeadingZeros(i) {
    if (i === 0) {
      return 32;
    }

    let n = 1;
    if (i >>> 16 === 0) {
      n += 16;
      i <<= 16;
    }
    if (i >>> 24 === 0) {
      n += 8;
      i <<= 8;
    }
    if (i >>> 28 === 0) {
      n += 4;
      i <<= 4;
    }
    if (i >>> 30 === 0) {
      n += 2;
      i <<= 2;
    }

    n -= i >>> 31;
    return n;
  }
};

console.log(racecar(4));
