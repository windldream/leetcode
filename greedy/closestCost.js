/**
 * @param {number[]} baseCosts
 * @param {number[]} toppingCosts
 * @param {number} target
 * @return {number}
 */
var closestCost = function (baseCosts, toppingCosts, target) {
  const n = baseCosts.length
  let ans = Infinity
  for (let i = 0; i < n; i++) {
    let cost = baseCosts[i]
    dfs(cost, 0, toppingCosts, target)
  }
  return ans

  function dfs(cost, index, costs, target) {
    if (index === costs.length) {
      if (Math.abs(cost - target) < Math.abs(ans - target)) {
        ans = cost
      } else if (Math.abs(cost - target) === Math.abs(ans - target) && cost < ans) {
        ans = cost
      }
      return
    }
    if (cost - target >= 0 && Math.abs(cost - target) > Math.abs(ans - target)) return
    dfs(cost, index + 1, costs, target)
    dfs(cost + costs[index], index + 1, costs, target)
    dfs(cost + 2 * costs[index], index + 1, costs, target)
  }
}

closestCost([1, 7], [3, 4], 10)
