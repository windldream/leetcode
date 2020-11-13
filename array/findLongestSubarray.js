/**
 * @param {string[]} array
 * @return {string[]}
 */
var findLongestSubarray = function (array) {
  let start = 0
  let end = 0
  const reg = /\d/
  const leftIndexMap = new Map()
  let presum = 0
  leftIndexMap.set(0, -1)
  for (let i = 0; i < array.length; i++) {
    presum += reg.test(array[i]) ? 1 : -1
    if (!leftIndexMap.has(presum)) {
      leftIndexMap.set(presum, i)
    } else {
      let leftIndex = leftIndexMap.get(presum)
      if (i - leftIndex > end - start) {
        start = leftIndex
        end = i
      }
    }
  }
  return array.slice(start + 1, end + 1)
}
