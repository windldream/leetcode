/**
 * @param {string} s
 * @param {number[]} answers
 * @return {number}
 */
var scoreOfStudents = function (s, answers) {
  const cache = new Map()
  const ansList = calculateAns(s)
  const rpn = generateRerversePolishType(s)
  const rightAnswer = calculateRpn(rpn)
  let ans = 0

  for (const answer of answers) {
    if (answer === rightAnswer) ans += 5
    else if (ansList.has(answer)) ans += 2
  }

  return ans

  function calculateAns(s) {
    if (cache.has(s)) return cache.get(s)

    if (s.length === 1) return [+s]

    const n = s.length
    const ans = new Set()

    for (let i = 0; i < n; i++) {
      if (s[i] === '*' || s[i] === '+') {
        const left = calculateAns(s.slice(0, i))
        const right = calculateAns(s.slice(i + 1))

        for (const l of left) {
          for (const r of right) {
            const num = s[i] === '*' ? l * r : l + r
            if (num <= 1000) ans.add(num)
          }
        }
      }
    }

    cache.set(s, ans)

    return ans
  }

  function calculateRpn(rpn) {
    const stack = []
    const numReg = /\d/

    for (let i = 0; i < rpn.length; i++) {
      if (numReg.test(rpn[i])) {
        stack.push(+rpn[i])
      } else {
        const num1 = stack.pop()
        const num2 = stack.pop()

        if (rpn[i] === '*') {
          stack.push(num1 * num2)
        } else {
          stack.push(num1 + num2)
        }
      }
    }

    return stack[0]
  }

  function generateRerversePolishType(s) {
    const stack = []
    const op = []
    const numReg = /\d/
    const priority = {
      '*': 2,
      '+': 1
    }
    let i = 0

    while (i < s.length) {
      if (numReg.test(s[i])) {
        let num = 0

        while (numReg.test(s[i])) {
          num += num * 10 + +s[i]
          i++
        }

        stack.push(num)
      } else {
        while (op.length && priority[op[op.length - 1]] > priority[s[i]]) {
          stack.push(op.pop())
        }

        op.push(s[i])

        i++
      }
    }

    while (op.length) {
      stack.push(op.pop())
    }

    return stack
  }
}

scoreOfStudents('1+2*3+4', [13, 21, 11, 15])
