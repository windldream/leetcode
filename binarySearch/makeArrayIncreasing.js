/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var makeArrayIncreasing = function (arr1, arr2) {
  arr2.sort((a, b) => a - b)
  arr2 = Array.from(new Set(arr2))
  arr1.push(Infinity)
  arr1.unshift(-Infinity)

  const n = arr1.length
  const dp = Array(n).fill(Infinity)
  dp[0] = 0

  for (let i = 1; i < n; i++) {
    let j = search(arr2, arr1[i])

    for (let k = 1; k <= Math.min(i - 1, j); k++) {
      if (arr1[i - k - 1] < arr2[j - k]) {
        dp[i] = Math.min(dp[i], dp[i - k - 1] + k)
      }
    }

    if (arr1[i - 1] < arr1[i]) {
      dp[i] = Math.min(dp[i], dp[i - 1])
    }
  }

  return dp[n - 1] === Infinity ? -1 : dp[n - 1]

  function search(list, target) {
    const n = list.length
    let l = 0
    let r = n - 1
    let ans = n

    while (l <= r) {
      const mid = (l + r) >> 1

      if (list[mid] >= target) {
        ans = mid
        r = mid - 1
      } else {
        l = mid + 1
      }
    }

    return ans
  }
}
