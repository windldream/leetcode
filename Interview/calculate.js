/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  const stack = []
  const reg = /\d/
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') continue
    if (reg.test(s[i])) {
      let num = 0
      while (reg.test(s[i])) num = num * 10 + +s[i++]
      stack.push(num)
      i--
    } else if (s[i] === '*' || s[i] === '/') {
      const old = s[i]
      const prev = stack.pop()
      i++
      while (s[i] === ' ') i++
      let num = 0
      while (reg.test(s[i])) num = num * 10 + +s[i++]
      if (old === '*') stack.push(prev * num)
      else stack.push(~~(prev / num))
      i--
    } else {
      stack.push(s[i])
    }
  }

  const ans = []
  for (let i = 0; i < stack.length; i++) {
    if (reg.test(stack[i])) {
      ans.push(stack[i])
      continue
    }
    const old = stack[i]
    const prev = ans.pop()
    const next = stack[++i]
    if (old === '+') {
      ans.push(prev + next)
    } else {
      ans.push(prev - next)
    }
  }
  return ans[0]
}
