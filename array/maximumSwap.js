/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function (num) {
  const arr = (num + '').split('').map((val) => +val)
  for (let i = 0; i < arr.length - 1; i++) {
    const n = arr[i]
    const max = Math.max(...arr.slice(i + 1))
    if (n < max) {
      const index = arr.lastIndexOf(max)
      ;[arr[index], arr[i]] = [arr[i], arr[index]]
      break
    }
  }
  return +arr.join('')
}

maximumSwap(98368)
