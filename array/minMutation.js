/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function (start, end, bank) {
  let count = 0
  const validStr = ['A', 'C', 'G', 'T']
  const queue = []
  const visited = new Set()
  queue.push(start)
  visited.add(start)
  while (queue.length) {
    const len = queue.length
    for (let i = 0; i < len; i++) {
      const val = queue.shift()
      if (val === end) return count
      for (let j = 0; j < val.length; j++) {
        for (const c of validStr) {
          if (val[j] === c) continue
          const sequence = val.substring(0, j) + c + val.substring(j + 1)
          if (!bank.includes(sequence) || visited.has(sequence)) continue
          queue.push(sequence)
          visited.add(sequence)
        }
      }
    }
    count++
  }
  return -1
}

minMutation('AAAACCCC', 'CCCCCCCC', [
  'AAAACCCA',
  'AAACCCCA',
  'AACCCCCA',
  'AACCCCCC',
  'ACCCCCCC',
  'CCCCCCCC',
  'AAACCCCC',
  'AACCCCCC'
])
