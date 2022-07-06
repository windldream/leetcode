/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function (deadends, target) {
  if (deadends.includes('0000')) return -1

  const queue = ['0000']
  const seen = new Set(deadends)
  let step = 0
  seen.add('0000')

  while (queue.length) {
    for (let i = 0, len = queue.length; i < len; i++) {
      const cur = queue.shift()
      if (cur === target) return step

      for (const next of nextChar(cur)) {
        if (!seen.has(next)) {
          queue.push(next)
          seen.add(next)
        }
      }
    }

    step++
  }

  return -1

  function nextChar(cur) {
    const list = new Set()

    for (let i = 0; i < cur.length; i++) {
      if (cur[i] === '0') {
        list.add(cur.slice(0, i) + 1 + cur.slice(i + 1))
        list.add(cur.slice(0, i) + 9 + cur.slice(i + 1))
      } else if (cur[i] === '9') {
        list.add(cur.slice(0, i) + 8 + cur.slice(i + 1))
        list.add(cur.slice(0, i) + 0 + cur.slice(i + 1))
      } else {
        list.add(cur.slice(0, i) + (+cur[i] + 1) + cur.slice(i + 1))
        list.add(cur.slice(0, i) + (+cur[i] - 1) + cur.slice(i + 1))
      }
    }

    return list
  }
}
