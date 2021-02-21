/**
 * @param {number[][]} groups
 * @param {number[]} nums
 * @return {boolean}
 */
var canChoose = function (groups, nums) {
  const numsStr = nums.join('&')
  groups = groups.map((group) => group.join('&'))
  if (groups.length === 1) return numsStr.includes(groups[0])
  let i = 0
  while (numsStr.indexOf(groups[0], i) > -1) {
    let index = numsStr.indexOf(groups[0], i)
    let j = 1
    index += groups[0].length
    let start = groups[j]
    while (numsStr.indexOf(start, index) > -1) {
      index += start.length
      j++
      if (j === groups.length) return true
      start = groups[j]
    }
    i++
  }
  return false
}

canChoose([[1], [2]], [2, 1])
