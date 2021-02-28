/**
 * @param {number[][]} cars
 * @return {number[]}
 */
var getCollisionTimes = function (cars) {
  const n = cars.length
  const stack = []
  const ans = Array(n).fill(0)
  for (let i = n - 1; i >= 0; i--) {
    while (stack.length) {
      const top = stack[stack.length - 1]
      if (cars[i][1] > cars[top][1]) {
        const t = (cars[top][0] - cars[i][0]) / (cars[i][1] - cars[top][1])
        // t 小于栈顶车辆追上其他汽车的时间 或者 栈顶车辆不会追上其他的车
        if (t <= ans[top] || ans[top] === -1) {
          ans[i] = t
          break
        }
      }
      // 追不上当前栈顶的车辆
      stack.pop()
    }
    if (stack.length === 0) ans[i] = -1
    stack.push(i)
  }
  return ans
}

getCollisionTimes([
  [3, 4],
  [5, 4],
  [6, 3],
  [9, 1]
])
