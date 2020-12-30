/**
 * @param {number[]} arr
 * @return {number[]}
 */
const transformArray = function(arr) {
  const len = arr.length
  if (len < 3) return arr
  while (true) {
    let flag = false
    const inc = []
    const dec = []
    for (let i = 1; i < len - 1; i++) {
      if (arr[i] < arr[i - 1] && arr[i] < arr[i + 1]) {
        inc.push(i)
        flag = true
      } else if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
        dec.push(i)
        flag = true
      }
    }
    for (const i of inc) arr[i] += 1
    for (const i of dec) arr[i] -= 1
    if (flag) break
  }
  return arr
};