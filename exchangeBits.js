/**
 * @param {number} num
 * @return {number}
 */
var exchangeBits = function (num) {
  return ((num & 0xaaaaaaaa) >>> 1) | ((num & 0x55555555) << 1)
}
