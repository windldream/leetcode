/**
 * Definition for a binary tree node.
 * function Node(val, left, right) {
 *     this.val = (val===undefined ? " " : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {string} s
 * @return {Node}
 */
var expTree = function (s) {
  const stack = []
  const reg = /\d/
  const len = s.length
  const priority = {
    '*': 2,
    '/': 2,
    '+': 1,
    '-': 1
  }
  let postfix = ''
  for (let i = 0; i < len; i++) {
    if (reg.test(s[i])) {
      postfix += s[i]
    } else if (s[i] === '(') {
      stack.push('(')
    } else if (s[i] === ')') {
      while (stack.length && stack[stack.length - 1] !== '(') {
        postfix += stack.pop()
      }
      stack.pop()
    } else {
      while (stack.length && priority[stack[stack.length - 1]] >= priority[s[i]]) {
        postfix += stack.pop()
      }
      stack.push(s[i])
    }
  }

  while (stack.length) {
    postfix += stack.pop()
  }

  const arr = []
  for (let str of postfix) {
    if (reg.test(str)) {
      arr.push(new Node(str))
    } else {
      const a = arr.pop()
      const b = arr.pop()
      const node = new Node(str, b, a)
      arr.push(node)
    }
  }
  return arr[0]
}

expTree('2-3/(5*2)+1')
