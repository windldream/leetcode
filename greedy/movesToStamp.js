/**
 * @param {string} stamp
 * @param {string} target
 * @return {number[]}
 */
var movesToStamp = function(stamp, target) {
  if (stamp === target) {
    return [0];
  }

  const m = stamp.length,
    n = target.length,
    res = [],
    seen = [];
  let total = 0;
  while (total < n) {
    let found = false;
    for (let i = 0; i <= n - m; i++) {
      if (seen[i]) {
        continue;
      }
      let l;
      [l, target] = unStamp(stamp, target, i);
      if (l === 0) {
        continue;
      }
      found = true;
      res.push(i);
      seen[i] = 1;
      total += l;
    }
    if (!found) {
      return [];
    }
  }

  return res.reverse();

  function unStamp(stamp, target, s) {
    let l = stamp.length;
    for (let i = 0; i < stamp.length; i++) {
      if (target[s + i] === '*') {
        l--;
      } else if (target[s + i] !== stamp[i]) {
        return [0, target];
      }
    }
    if (l !== 0) {
      target =
        target.substring(0, s) +
        '*'.repeat(stamp.length) +
        target.substring(s + stamp.length);
    }
    return [l, target];
  }
};

console.log(movesToStamp('abc', 'ababc'));
