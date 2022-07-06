/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function (start, end, bank) {
  const queue = [start]
  const visited = new Set()
  let step = 0
  visited.add(start)

  while (queue.length) {
    for (let i = 0, len = queue.length; i < len; i++) {
      const cur = queue.shift()
      if (cur === end) return step

      for (const next of nextGene(cur, bank)) {
        if (!visited.has(next)) {
          queue.push(next)
          visited.add(next)
        }
      }
    }

    step++
  }

  return -1

  function nextGene(str, bank) {
    const chars = ['A', 'C', 'G', 'T']
    const list = new Set()

    for (let i = 0; i < str.length; i++) {
      for (const ch of chars) {
        if (str[i] !== ch) {
          const gene = str.slice(0, i) + ch + str.slice(i + 1)
          if (bank.includes(gene)) list.add(gene)
        }
      }
    }

    return list
  }
}
