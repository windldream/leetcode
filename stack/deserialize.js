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
 * @param {string} s
 * @return {NestedInteger}
 */
var deserialize = function (s) {
  const numberReg = /[\-\d]*/
  return process(s, 0, s.length - 1)

  function process(str, start, end) {
    const node = new NestedInteger()
    if (str[start] !== '[') {
      const number = numberReg.exec(str.substring(start))[0]
      node.setInteger(number)
    } else {
      let left = start + 1
      let count = 0
      for (let i = left; i < end; i++) {
        if (str[i] === '[') {
          count++
        } else if (str[i] === ']') {
          count--
        }
        if (count === 0 && str[i] === ',') {
          node.add(process(str, left, i - 1))
          left = i + 1
          continue
        }
        if (i === end - 1) {
          node.add(process(str, left, i))
        }
      }
    }
    return node
  }
}
