/**
 * // This is the FontInfo's API interface.
 * // You should not implement it, or speculate about its implementation
 * function FontInfo() {
 *
 *		@param {number} fontSize
 *		@param {char} ch
 *     	@return {number}
 *     	this.getWidth = function(fontSize, ch) {
 *      	...
 *     	};
 *
 *		@param {number} fontSize
 *     	@return {number}
 *     	this.getHeight = function(fontSize) {
 *      	...
 *     	};
 * };
 */
/**
 * @param {string} text
 * @param {number} w
 * @param {number} h
 * @param {number[]} fonts
 * @param {FontInfo} fontInfo
 * @return {number}
 */
var maxFont = function (text, w, h, fonts, fontInfo) {
  let l = 0
  let r = fonts.length - 1
  let ans = -1

  while (l <= r) {
    const mid = (l + r) >> 1

    if (check(text, w, h, fonts[mid], fontInfo)) {
      ans = fonts[mid]
      l = mid + 1
    } else {
      r = mid - 1
    }
  }

  return ans

  function check(text, w, h, fontSize, fontInfo) {
    if (fontInfo.getHeight(fontSize) > h) return false

    let width = 0

    for (const ch of text) {
      width += fontInfo.getWidth(fontSize, ch)

      if (width > w) return false
    }

    return true
  }
}
