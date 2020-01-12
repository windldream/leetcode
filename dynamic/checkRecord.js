/**
 * @param {number} n
 * @return {number}
 */
var checkRecord = function(n) {
  if (n === 0) {
    return 1;
  }

  const M = 10 ** 9 + 7;
  // P: 序列中没有A，最新的一个记录不是L
  // AP: 序列中有过A，最新的一个记录不是L
  // L: 序列中没有A，最新的一个记录是L
  // AL: 序列中有过A，最新的一个记录是L
  // LL: 序列中没有A，最新的两个记录是LL
  // ALL: 序列中有过A，最新的两个记录是LL
  // A: 最新的一个记录是A
  // 当 n 为 1 的时候
  let [p, ap, l, ll, al, all, a] = [1, 0, 1, 0, 0, 0, 1];
  for (let i = 2; i <= n; i++) {
    // 最新的状态可以根据上一次的状态推导出来
    [p, ap, l, ll, al, all, a] = [
      (p + l + ll) % M,
      (ap + al + all + a) % M,
      p,
      l,
      (ap + a) % M,
      al,
      (p + l + ll) % M
    ];
  }

  return (p + ap + l + ll + al + all + a) % M;
};

console.log(checkRecord(2));
