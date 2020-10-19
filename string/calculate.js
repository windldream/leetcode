/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  s = s.replace(/\s/g, '')
  const len = s.length
  const ops = []
  const vals = []
  const numReg = /\d/
  let i = 0
  while (i < len) {
    let str = s[i]
    if (str === '*') {
      const num1 = vals.pop()
      i++
      let num2 = ''
      while (numReg.test(s[i])) {
        num2 += s[i]
        i++
      }
      const res = num1 * num2
      vals.push(res)
    } else if (str === '/') {
      const num1 = vals.pop()
      i++
      let num2 = ''
      while (numReg.test(s[i])) {
        num2 += s[i]
        i++
      }
      const res = Math.trunc(num1 / num2)
      vals.push(res)
    } else if (str === '+' || str === '-') {
      ops.push(str)
      i++
    } else {
      i++
      while (numReg.test(s[i])) {
        str += s[i]
        i++
      }
      vals.push(+str)
    }
  }

  let ans = vals[0]
  let j = 1
  for (let i = 0; i < ops.length; i++) {
    const num1 = ans
    const num2 = vals[j++]
    ans = operator(num1, num2, ops[i])
  }

  return ans

  function operator(a, b, op) {
    if (op === '+') return a + b
    if (op === '-') return a - b
  }
}
