/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function (arr) {
  const sortArr = arr.slice().sort((a, b) => a - b)
  const map = new Map()
  let rank = 1
  for (let i = 0; i < sortArr.length; i++) {
    if (!map.has(sortArr[i])) {
      map.set(sortArr[i], rank++)
    }
  }
  const ans = []
  for (let i = 0; i < arr.length; i++) {
    ans.push(map.get(arr[i]))
  }
  return ans
}

arrayRankTransform([37, 12, 28, 9, 100, 56, 80, 5, 12])
