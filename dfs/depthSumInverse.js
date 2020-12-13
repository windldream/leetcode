/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     @return {void}
 *     this.setInteger = function(value) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     @return {void}
 *     this.add = function(elem) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @param {NestedInteger[]} nestedList
 * @return {number}
 */
var depthSumInverse = function (nestedList) {
  const level = getDepth(nestedList)
  return getSum(nestedList, level)

  function getSum(nestedList, level) {
    let sum = 0
    for (const num of nestedList) {
      if (num.isInteger(num)) {
        sum += num.getInteger() * level
      } else {
        sum += getSum(num.getList(), level - 1)
      }
    }
    return sum
  }

  function getDepth(nestedList) {
    let level = 1
    for (const num of nestedList) {
      if (!num.isInteger()) {
        level = Math.max(level, getDepth(num.getList()) + 1)
      }
    }
    return level
  }
}
