/**
 * This is the interface for the expression tree Node.
 * You should not remove it, and you can define some classes to implement it.
 */

var Node = function () {
  if (this.constructor === Node) {
    throw new Error('Cannot instanciate abstract class')
  }
}

Node.prototype.evaluate = function () {
  throw new Error('Cannot call abstract method')
}

class TreeNode extends Node {
  constructor(val, left, right) {
    super()
    this.val = val === undefined ? ' ' : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }

  evaluate() {
    return postorder(this)

    function postorder(root) {
      if (root === null) return 0
      const l = postorder(root.left)
      const r = postorder(root.right)
      if (/\d/.test(root.val)) return root.val
      switch (root.val) {
        case '*':
          return l * r
        case '/':
          return l / r
        case '+':
          return l + r
        case '-':
          return l - r
      }
    }
  }
}

/**
 * This is the TreeBuilder class.
 * You can treat it as the driver code that takes the postinfix input
 * and returns the expression tree represnting it as a Node.
 */

class TreeBuilder {
  /**
   * @param {string[]} s
   * @return {Node}
   */
  buildTree(postfix) {
    const stack = []
    const reg = /\d/
    for (const s of postfix) {
      if (reg.test(s)) {
        stack.push(new TreeNode(+s))
      } else {
        const a = stack.pop()
        const b = stack.pop()
        stack.push(new TreeNode(s, b, a))
      }
    }
    return stack[0]
  }
}

/**
 * Your TreeBuilder object will be instantiated and called as such:
 * var obj = new TreeBuilder();
 * var expTree = obj.buildTree(postfix);
 * var ans = expTree.evaluate();
 */
