/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

class Codec {
  constructor() {}

  /**
   * @param {Node} root
   * @return {TreeNode}
   */
  // Encodes an n-ary tree to a binary tree.
  encode = function (root) {
    if (root === null) return root
    const ans = new TreeNode(root.val)
    if (root.children && root.children.length) {
      ans.left = this.encode(root.children[0])
      let cur = ans.left
      for (let i = 1; i < root.children.length; i++) {
        cur.right = this.encode(root.children[i])
        cur = cur.right
      }
    }
    return ans
  }

  /**
   * @param {TreeNode} root
   * @return {Node}
   */
  // Decodes your binary tree to an n-ary tree.
  decode = function (root) {
    if (root === null) return root
    const ans = new Node(root.val, [])
    let cur = root.left
    while (cur) {
      ans.children.push(this.decode(cur))
      cur = cur.right
    }
    return ans
  }
}

/*
 * Your Codec object will be instantiated and called as such:
 * codec = Codec()
 * codec.decode(codec.encode(root))
 */
