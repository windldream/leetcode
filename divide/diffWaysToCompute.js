/**
 * @param {string} input
 * @return {number[]}
 */
var diffWaysToCompute = function (input) {
  const res = []
  for (let i = 0; i < input.length; i++) {
    if (['+', '*', '-'].includes(input[i])) {
      const left = diffWaysToCompute(input.substring(0, i))
      const right = diffWaysToCompute(input.substring(i + 1))
      for (const l of left) {
        for (const r of right) {
          if (input[i] === '+') {
            res.push(l + r)
          } else if (input[i] === '*') {
            res.push(l * r)
          } else if (input[i] === '-') {
            res.push(l - r)
          }
        }
      }
    }
  }

  if (res.length === 0) {
    res.push(+input)
  }
  return res
}
