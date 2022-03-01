/**
 * @param {number[]} digits
 * @return {number[]}
 */
var findEvenNumbers = function (digits) {
  const ans = []
  let countMap = Object.create(null)

  for (const num of digits) {
    if (countMap[num] === undefined) countMap[num] = 0
    countMap[num] += 1
  }

  for (let i = 100; i < 1000; i++) {
    const cloneMap = Object.assign({}, countMap)
    if (i % 2 === 0 && check(countMap, i)) ans.push(i)
    countMap = cloneMap
  }

  return ans

  function check(map, num) {
    num = num + ''

    for (const ch of num) {
      if (map[ch] === undefined || map[ch] < 1) return false
      map[ch] -= 1
    }

    return true
  }
}
