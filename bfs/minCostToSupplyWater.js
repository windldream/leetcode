/**
 * @param {number} n
 * @param {number[]} wells
 * @param {number[][]} pipes
 * @return {number}
 */
const minCostToSupplyWater = function(n, wells, pipes) {
  const uf = Array(n + 1).fill(0)
  for (let i = 1; i <= n; i++) {
    uf[i] = i
    pipes.push([0, i, wells[i - 1]])
  }
  pipes.sort((a, b) => a[2] - b[2])

  let ans = 0
  let connects = n + 1
  for (const [house1, house2, cost] of pipes) {
    const u = find(house1)
    const v = find(house2)
    if (u === v) continue
    union(u, v)
    ans += cost
    connects--
    if (connects === 1) return ans
  }


  function find(x) {
    if (uf[x] !== x) {
      uf[x] = find(uf[x])
    }
    return uf[x]
  }

  function union(u, v) {
    uf[u] = v
  }
};