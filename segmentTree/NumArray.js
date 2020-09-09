class SegmentTreeNode {
  constructor(start, end, sum) {
    this.start = start
    this.end = end
    this.sum = sum
    this.left = null
    this.right = null
  }
}

function build(start, end, arr) {
  if (start > end) return null
  const root = new SegmentTreeNode(start, end, 0)
  if (start === end) {
    root.sum = arr[start]
  } else {
    const mid = (start + end) >> 1
    root.left = build(start, mid, arr)
    root.right = build(mid + 1, end, arr)
    root.sum = root.left.sum + root.right.sum
  }
  return root
}

function query(root, start, end) {
  if (start === root.start && root.end === end) return root.sum

  const mid = (root.start + root.end) >> 1
  let leftSum = 0,
    rightSum = 0

  if (start <= mid) {
    if (mid < end) {
      // 左子树部分包含区间
      leftSum = query(root.left, start, mid)
    } else {
      // 左子树全包含区间
      leftSum = query(root.left, start, end)
    }
  }

  if (mid < end) {
    if (start <= mid) {
      // 右子树部分包含区间
      rightSum = query(root.right, mid + 1, end)
    } else {
      // 右子树全包含区间
      rightSum = query(root.right, start, end)
    }
  }

  return leftSum + rightSum
}

function modify(root, index, val) {
  if (root === null) return
  if (root.start === index && root.end === index) {
    root.sum = val
    return
  }

  const mid = (root.start + root.end) >> 1
  if (root.start <= index && index <= mid) {
    modify(root.left, index, val)
  }
  if (mid < index && index <= root.end) {
    modify(root.right, index, val)
  }
  let sum = 0
  if (root.left) {
    sum += root.left.sum
  }
  if (root.right) {
    sum += root.right.sum
  }
  root.sum = sum
}

/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  this.node = build(0, nums.length - 1, nums)
}

/**
 * @param {number} i
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function (i, val) {
  modify(this.node, i, val)
}

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function (i, j) {
  return query(this.node, i, j)
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(i,val)
 * var param_2 = obj.sumRange(i,j)
 */
