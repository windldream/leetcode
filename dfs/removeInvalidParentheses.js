/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function(s) {
  let left = 0,
    right = 0;
  for (let c of s) {
    if (c === '(') {
      left++;
    } else if (c === ')') {
      if (left > 0) {
        left--;
      } else {
        right++;
      }
    }
  }

  const res = [];
  dfs(s, 0, left, right);
  return res;

  function dfs(s, index, l, r) {
    if (l === 0 && r === 0) {
      if (check(s)) {
        res.push(s);
        return;
      }
    }

    for (let i = index; i < s.length; i++) {
      // 对于连续两个相同的括号 只需处理前面一个
      if (i - 1 >= index && s[i] === s[i - 1]) {
        continue;
      }
      if (l > 0 && s[i] === '(') {
        dfs(s.substring(0, i) + s.substring(i + 1), i, l - 1, r);
      }
      if (r > 0 && s[i] === ')') {
        dfs(s.substring(0, i) + s.substring(i + 1), i, l, r - 1);
      }
    }
  }

  function check(s) {
    let count = 0;
    for (let c of s) {
      if (c === '(') {
        count++;
      } else if (c === ')') {
        count--;
        if (count < 0) {
          return false;
        }
      }
    }

    return count === 0;
  }
};
