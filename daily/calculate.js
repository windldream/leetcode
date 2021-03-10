/**
 * @param {string} s
 * @return {number}
 */
// var calculate = function (s) {
//   const stack = []
//   const exp = []
//   const reg = /\d/
//   const priority = {
//     '*': 2,
//     '/': 2,
//     '+': 1,
//     '-': 1
//   }
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === ' ') continue
//     if (reg.test(s[i])) {
//       let num = +s[i++]
//       while (reg.test(s[i])) {
//         num = num * 10 + +s[i++]
//       }
//       i--
//       exp.push(num)
//     } else {
//       while (stack.length && priority[stack[stack.length - 1]] >= priority[s[i]]) {
//         exp.push(stack.pop())
//       }
//       stack.push(s[i])
//     }
//   }

//   while (stack.length) {
//     exp.push(stack.pop())
//   }

//   const ans = []
//   for (let i = 0; i < exp.length; i++) {
//     if (reg.test(exp[i])) {
//       ans.push(exp[i])
//     } else {
//       let a = 0
//       let b = 0
//       if (ans.length) a = ans.pop()
//       if (ans.length) b = ans.pop()
//       ans.push(operation(exp[i], a, b))
//     }
//   }
//   return ans[0]

//   function operation(op, a, b) {
//     if (op === '*') return b * a
//     if (op === '/') return ~~(b / a)
//     if (op === '+') return b + a
//     if (op === '-') return b - a
//   }
// }

var calculate = function (s) {
  const stack = []
  const reg = /\d/
  let sign = '+'
  let res = 0
  let cur = 0
  for (let i = 0; i < s.length; i++) {
    if (reg.test(s[i])) {
      cur = cur * 10 + +s[i]
    }
    if ((!reg.test(s[i]) && s[i] !== ' ') || i === s.length - 1) {
      if (sign === '+') {
        stack.push(cur)
      } else if (sign === '-') {
        stack.push(-cur)
      } else if (sign === '*' || sign === '/') {
        const last = stack.pop()
        stack.push(sign === '*' ? last * cur : ~~(last / cur))
      }
      cur = 0
      sign = s[i]
    }
  }

  for (const num of stack) {
    res += num
  }
  return res
}

calculate(' 3+5 / 2 ')
