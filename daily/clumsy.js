/**
 * @param {number} N
 * @return {number}
 */
// var clumsy = function (N) {
//   let ans = 0
//   let positive = true
//   let num = N
//   for (; num >= 4; num -= 4) {
//     if (positive) {
//       ans += ~~((num * (num - 1)) / (num - 2)) + num - 3
//     } else {
//       ans -= ~~((num * (num - 1)) / (num - 2)) - (num - 3)
//     }
//     positive = false
//   }

//   if (positive) {
//     ans += ~~(num * Math.max(num - 1, 1)) / Math.max(num - 2, 1)
//   } else {
//     ans -= ~~(num * Math.max(num - 1, 1)) / Math.max(num - 2, 1)
//   }
//   return ans
// }

var clumsy = function (N) {
  const stack = []
  const exp = []
  const ops = ['*', '/', '+', '-']
  const priroty = {
    '*': 2,
    '/': 2,
    '+': 1,
    '-': 1
  }
  let index = 0
  for (let num = N; num >= 1; num--) {
    exp.push(num)
    if (num === 1) break
    while (stack.length && priroty[stack[stack.length - 1]] >= priroty[ops[index]]) {
      exp.push(stack.pop())
    }
    stack.push(ops[index])
    index = (index + 1) % 4
  }

  while (stack.length) {
    exp.push(stack.pop())
  }

  const ans = []
  for (let i = 0; i < exp.length; i++) {
    if (Number.isInteger(exp[i])) {
      ans.push(exp[i])
    } else {
      const b = ans.pop()
      const a = ans.pop()
      ans.push(operator(exp[i], a, b))
    }
  }
  return ans[0]

  function operator(op, a, b) {
    if (op === '*') return a * b
    if (op === '/') return ~~(a / b)
    if (op === '+') return a + b
    return a - b
  }
}

clumsy(4)

// 16 * 15 / 14 + 13 - 12 * 11 / 10 + 9 -
