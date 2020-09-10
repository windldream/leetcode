/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
var addOperators = function (num, target) {
  if (num.length === 0) return []
  const res = []
  help(num, target, 0, 0, 0, '', res)
  return res

  // diff 保存上一步的操作数
  function help(num, target, curRes, diff, start, exp, res) {
    // 回溯结束条件
    if (start === num.length && curRes == target) {
      res.push(exp)
    }

    for (let i = start; i < num.length; i++) {
      let cur = num.substring(start, i + 1)
      if (cur.length > 1 && cur[0] == '0') {
        break
      }
      cur = +cur
      if (exp.length > 0) {
        help(num, target, curRes + cur, cur, i + 1, exp + '+' + cur, res)
        help(num, target, curRes - cur, -cur, i + 1, exp + '-' + cur, res)
        help(num, target, curRes - diff + diff * cur, diff * cur, i + 1, exp + '*' + cur, res)
      } else {
        help(num, target, cur, cur, i + 1, cur + '', res)
      }
    }
  }
}

addOperators('105', 5)
