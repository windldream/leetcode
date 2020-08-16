/**
 * @param {string[]} words
 * @param {string} result
 * @return {boolean}
 */
var isSolvable = function (words, result) {
  let _weight = {}
  let _lead_zero = new Set()
  for (const word of words) {
    for (let i = 0; i < word.length; i++) {
      if (!_weight[word[i]]) _weight[word[i]] = 0
      _weight[word[i]] += Math.pow(10, word.length - i - 1)
    }
    if (word.length > 1) {
      _lead_zero.add(word[0])
    }
  }
  for (let i = 0; i < result.length; i++) {
    if (!_weight[result[i]]) _weight[result[i]] = 0
    _weight[result[i]] -= Math.pow(10, result.length - i - 1)
  }
  if (result.length > 1) {
    _lead_zero.add(result[0])
  }

  let weight = []
  for (const key in _weight) {
    weight.push([key, _weight[key]])
  }
  weight.sort((a, b) => Math.abs(a[1]) - Math.abs(b[1]))
  let n = weight.length
  let suffix_sum_min = Array(n).fill(0)
  let suffix_sum_max = Array(n).fill(0)
  for (let i = 0; i < n; i++) {
    const suffix_pos = weight
      .slice(i)
      .filter((val) => val[1] > 0)
      .map((val) => val[1])
    const suffix_neg = weight
      .slice(i)
      .filter((val) => val[1] < 0)
      .map((val) => val[1])
    suffix_pos.sort((a, b) => a - b)
    suffix_neg.sort((a, b) => a - b)

    for (let j = 0; j < suffix_pos.length; j++) {
      suffix_sum_min[i] += (suffix_pos.length - 1 - j) * suffix_pos[j]
      suffix_sum_max[i] += (10 - suffix_pos.length + j) * suffix_pos[j]
    }
    for (let j = 0; j < suffix_neg.length; j++) {
      suffix_sum_min[i] += (9 - j) * suffix_neg[j]
      suffix_sum_max[i] += j * suffix_neg[j]
    }
  }
  let lead_zero = Array(n).fill(0)
  for (let i = 0; i < n; i++) {
    lead_zero[i] = _lead_zero.has(weight[i][0]) ? 1 : 0
  }
  let used = Array(10).fill(0)
  return dfs(0, 0)

  function dfs(pos, total) {
    if (pos === weight.length) return total === 0
    if (!(total + suffix_sum_min[pos] <= 0 && total + suffix_sum_max[pos] >= 0)) return false
    for (let i = lead_zero[pos]; i < 10; i++) {
      if (!used[i]) {
        used[i] = true
        const check = dfs(pos + 1, total + weight[pos][1] * i)
        used[i] = false
        if (check) return true
      }
    }
    return false
  }
}
