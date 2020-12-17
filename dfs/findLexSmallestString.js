/**
 * @param {string} s
 * @param {number} a
 * @param {number} b
 * @return {string}
 */
const findLexSmallestString = function (s, a, b) {
  const visited = new Set()
  let ans = s
  const queue = []
  queue.push(s)
  visited.add(s)
  while (queue.length) {
    const len = queue.length
    for (let i = 0; i < len; i++) {
      const str = queue.shift()
      ans = ans < str ? ans : str
      let num = add(str, a)
      if (!visited.has(num)) {
        queue.push(num)
        visited.add(num)
      }
      num = rotate(str, b)
      if (!visited.has(num)) {
        queue.push(num)
        visited.add(num)
      }
    }
  }
  return ans

  function add(a, b) {
    let n = a.length - 1
    let ans = ''
    while (n >= 0) {
      if (n & 1) {
        let num = +a[n] + b
        if (num >= 10) {
          num = num - 10
        }
        ans = num + ans
      } else {
        ans = a[n] + ans
      }
      n--
    }

    return ans
  }

  function rotate(str, b) {
    return str.substring(str.length - b) + str.substring(0, str.length - b)
  }
}

findLexSmallestString('5525', 9, 2)
