/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
  const stack = []
  let res = 0

  for (let v of ops) {
    if (v === 'C') {
      if (stack.length) {
        res -= stack.pop()
      }
    } else if (v === 'D') {
      if (stack.length) {
        let num = stack[stack.length - 1]
        res += 2 * num
        stack.push(2 * num)
      }
    } else if (v === '+') {
      if (stack.length > 1) {
        let num1 = stack[stack.length - 1]
        let num2 = stack[stack.length - 2]
        res += num1 + num2
        stack.push(num1 + num2)
      }
    } else {
      res += +v
      stack.push(+v)
    }
  }
  return res
}
