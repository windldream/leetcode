/**
 * @param {string} preorder
 * @return {boolean}
 */
// var isValidSerialization = function (preorder) {
//   const list = preorder.split(',')
//   const stack = []
//   for (let i = 0; i < list.length; i++) {
//     while (stack.length && stack[stack.length - 1] === '#' && list[i] === '#') {
//       stack.pop()
//       if (stack.length === 0) return false
//       stack.pop()
//     }
//     stack.push(list[i])
//   }
//   return stack.length === 1 && stack[0] === '#'
// }
var isValidSerialization = function (preorder) {
  const list = preorder.split(',')
  let degree = 1
  for (const node of list) {
    degree -= 1
    if (degree < 0) return false
    if (node !== '#') degree += 2
  }
  return degree === 0
}
