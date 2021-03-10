/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  const len = s.length
  const stack = []
  const express = []
  const reg = /\d/
  for (let i = 0; i < len; i++) {
    if (s[i] === ' ') continue
    if (reg.test(s[i])) {
      let num = +s[i++]
      while (reg.test(s[i])) {
        num = num * 10 + +s[i++]
      }
      i--
      express.push(num)
    } else if (s[i] === '(') {
      stack.push(s[i])
    } else if (s[i] === ')') {
      while (stack.length && stack[stack.length - 1] !== '(') {
        express.push(stack.pop())
      }
      stack.pop()
    } else {
      while (stack.length && stack[stack.length - 1] !== '(') {
        express.push(stack.pop())
      }
      stack.push(s[i])
    }
  }

  while (stack.length) {
    express.push(stack.pop())
  }

  const nums = []
  for (let i = 0; i < express.length; i++) {
    if (express[i] === '+' || express[i] === '-') {
      let a = 0
      let b = 0
      if (nums.length) {
        a = nums.pop()
      }
      if (nums.length) {
        b = nums.pop()
      }
      nums.push(evalExp(express[i], a, b))
    } else {
      nums.push(express[i])
    }
  }

  return nums[0]

  function evalExp(op, a, b) {
    if (op === '+') return b + a
    if (op === '-') return b - a
  }
}

calculate('-2--2')
