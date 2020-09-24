/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
var longestDiverseString = function (a, b, c) {
  const countMap = new Map()
  if (a) {
    countMap.set('a', a)
  }
  if (b) {
    countMap.set('b', b)
  }
  if (c) {
    countMap.set('c', c)
  }

  let ans = ''
  let sum = a + b + c
  while (countMap.size) {
    const keys = [...countMap.keys()].sort((a, b) => countMap.get(b) - countMap.get(a))
    if (keys.length === 1) {
      if (ans[ans.length - 1] === keys[0]) return ans
      ans += keys[0].repeat(Math.min(2, countMap.get(keys[0])))
      return ans
    }

    let index = 0
    while (keys[index] === ans[ans.length - 1]) {
      index++
    }
    if (countMap.get(keys[index]) > sum - countMap.get(keys[index])) {
      ans += keys[index].repeat(2)
      countMap.set(keys[index], countMap.get(keys[index]) - 2)
      sum -= 2
      if (index !== 0) {
        ans += keys[0]
        countMap.set(keys[0], countMap.get(keys[0]) - 1)
      } else {
        ans += keys[index + 1]
        countMap.set(keys[index + 1], countMap.get(keys[index + 1]) - 1)
      }
      sum -= 1
    } else {
      ans += keys[index]
      countMap.set(keys[index], countMap.get(keys[index]) - 1)
      sum -= 1
      if (index !== 0) {
        ans += keys[0]
        countMap.set(keys[0], countMap.get(keys[0]) - 1)
      } else {
        ans += keys[index + 1]
        countMap.set(keys[index + 1], countMap.get(keys[index + 1]) - 1)
      }
      sum -= 1
    }
    if (countMap.get(keys[index]) === 0) {
      countMap.delete(keys[index])
    }
    if (countMap.get(keys[0]) === 0) {
      countMap.delete(keys[0])
    }
    if (countMap.get(keys[index + 1]) === 0) {
      countMap.delete(keys[index + 1])
    }
  }

  return ans
}

longestDiverseString(4, 42, 7)
