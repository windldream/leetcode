/**
 * @param {number} batchSize
 * @param {number[]} groups
 * @return {number}
 */
var maxHappyGroups = function (batchSize, groups) {
  let state = 0n
  let mod0 = 0n
  const cache = new Map()
  for (const num of groups) {
    const n = num % batchSize
    if (n === 0) mod0 += 1n
    else state += 1n << (BigInt(n) * 5n)
  }
  return mod0 + dfs(0n, state)

  function dfs(cur, state) {
    if (cache.has(state)) return cache.get(state)
    if (!state) {
      cache.set(state, 0n)
      return 0n
    }
    let res = 0n
    for (let i = 1n; i < BigInt(batchSize); i++) {
      if ((state >> (i * 5n)) % 32n) {
        let tmp = dfs((cur + i) % BigInt(batchSize), state - (1n << (i * 5n)))
        if (cur === 0n) tmp += 1n
        if (tmp > res) res = tmp
      }
    }
    cache.set(state, res)
    return res
  }
}

maxHappyGroups(3, [1, 2, 3, 4, 5, 6])

// 6
// 2 4
// 5 1
// 3

//
