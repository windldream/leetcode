/**
 * @param {string} expression
 * @return {string[]}
 */
var braceExpansionII = function (expression) {
  const queue = []
  queue.push(expression)
  const ans = new Set()

  while (queue.length) {
    const exp = queue.shift()
    if (!exp.includes('{')) {
      ans.add(exp)
      continue
    }

    let i = 0
    let left = 0
    let right = 0
    while (exp[i] !== '}') {
      if (exp[i] === '{') left = i
      i++
    }
    right = i

    const before = exp.substring(0, left)
    const after = exp.substring(right + 1)
    const strs = exp.substring(left + 1, right).split(',')
    for (const str of strs) {
      queue.push(before + str + after)
    }
  }

  return [...ans].sort()
}
