/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
const maximumUnits = function(boxTypes, truckSize) {
  boxTypes.sort((a, b) => b[1] - a[1])
  let ans = 0
  for (let i = 0; i < boxTypes.length; i++) {
    const [count, unit] = boxTypes[i]
    if (truckSize >= count) {
      ans += count * unit
      truckSize -= count
    } else {
      ans += truckSize * unit
      truckSize = 0
    }
  }
  return ans
};