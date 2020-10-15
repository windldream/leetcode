/**
 * @param {number} n
 * @return {number}
 */
// 以二进制为0值的格雷码为第零项，第一项改变最右边的位元，
// 第二项改变右起第一个为1的位元的左边位元，
// 第三、四项方法同第一、二项，如此反复，即可排列出n个位元的格雷码。
var minimumOneBitOperations = function (n) {
  let ans = 0
  while (n) {
    ans ^= n
    n = n >> 1
  }
  return ans
}
