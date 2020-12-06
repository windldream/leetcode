/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

class Codec {
  constructor() {}

  /**
   * @param {Node} root
   * @return {string}
   */
  // Encodes a tree to a single string.
  serialize = function (root) {
    let ans = ''
    if (root === null) return ans
    encode(root)
    return ans

    function encode(node) {
      if (node === null) return
      ans += node.val + ' '
      let hasChildren = node.children && node.children.length
      if (hasChildren) {
        ans += '[ '
        for (let i = 0; i < node.children.length; i++) {
          const children = node.children[i]
          encode(children)
        }
        ans += ' ] '
      }
    }
  }

  /**
   * @param {string} data
   * @return {Node}
   */
  // Decodes your encoded data to tree.
  deserialize = function (data) {
    if (data.length === 0) return null
    const strings = data.split(' ')
    const stack = []
    let root = null
    let cur = null
    for (const s of strings) {
      if (s === '') continue
      if (s === '[') {
        stack.push(cur)
      } else if (s === ']') {
        stack.pop()
      } else {
        const node = new Node(+s)
        node.children = []
        if (root === null) {
          root = node
        } else {
          const parent = stack[stack.length - 1]
          parent.children.push(node)
        }
        cur = node
      }
    }
    return root
  }
}

// Your Codec object will be instantiated and called as such:
// Codec codec = new Codec();
// codec.deserialize(codec.serialize(root));
