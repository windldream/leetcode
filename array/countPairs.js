/**
 * @param {number[]} deliciousness
 * @return {number}
 */
var countPairs = function (deliciousness) {
  const mod = 10 ** 9 + 7
  const map = new Map()
  for (const num of deliciousness) {
    if (!map.has(num)) map.set(num, 0)
    map.set(num, map.get(num) + 1)
  }

  let ans = 0
  const visited = new Set()
  for (const [num, count] of map) {
    let flag = false
    for (let i = 0; i <= 21; i++) {
      const sum = 2 ** i
      if (!visited.has(sum - num) && map.has(sum - num)) {
        if (sum - num === num) {
          ans = (ans + (count * (count - 1)) / 2) % mod
        } else {
          ans = (ans + count * map.get(sum - num)) % mod
        }
        flag = true
      }
    }
    if (flag) visited.add(num)
  }
  return ans
}

countPairs([149, 107, 1, 63, 0, 1, 6867, 1325, 5611, 2581, 39, 89, 46, 18, 12, 20, 22, 234])
