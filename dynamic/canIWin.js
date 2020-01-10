/**
 * @param {number} maxChoosableInteger
 * @param {number} desiredTotal
 * @return {boolean}
 */
var canIWin = function (maxChoosableInteger, desiredTotal) {
  if (maxChoosableInteger >= desiredTotal || desiredTotal <= 0) {
    return true;
  }

  const sum = (maxChoosableInteger + 1) * maxChoosableInteger / 2;
  if (sum < desiredTotal) {
    return false;
  }

  const map = new Map();
  const used = Array(maxChoosableInteger + 1).fill(false);
  return helper(desiredTotal);

  function helper(desiredTotal) {
    // 轮到我选择的时候 desiredTotal 小于0 说明我已经输了
    if (desiredTotal <= 0) {
      return false;
    }

    let key = used.toString();
    if (!map.has(key)) {
      for (let i = 1; i < used.length; i++) {
        if (!used[i]) {
          used[i] = true;
          // next表示对手是否能赢的比赛
          let next = helper(desiredTotal - i);
          if (!next) {
            map.set(key, true);
            used[i] = false;
            return true;
          }
          used[i] = false;
        }
      }
      map.set(key, false);
    }
    return map.get(key);
  }
};

console.log(canIWin(10, 11));