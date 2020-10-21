/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
  const stack = []
  const ops = []
  for (let i = 0; i < s.length; i++) {
    const c = s[i]
    if (c === '(') {
      stack.push(i)
    } else if (c === ')') {
      if (stack.length) {
        stack.pop()
      } else if (ops.length) {
        ops.pop()
      } else {
        return false
      }
    } else {
      ops.push(i)
    }
  }

  if (stack.length > ops.length) return false

  for (let i = 0; i < stack.length; i++) {
    const index = ops.findIndex((val) => val > stack[i])
    if (index === -1) return false
    ops.splice(index, 1)
  }

  return true
}

checkValidString('(())((())()()(*)(*()(())())())()()((()())((()))(*')
