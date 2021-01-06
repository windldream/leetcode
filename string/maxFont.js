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
const maxFont = function(text, w, h, fonts, fontInfo) {
  let lo = 0
  let hi = fonts.length - 1
  while (lo <= hi) {
    const mid = (lo + hi) >> 1
    const [width, height] = getWidthAndHeight(text, fontInfo, fonts[mid])
    if (width > w || height > h) {
      hi = mid - 1
    } else if (width < w || height < h) {
      lo = mid + 1
    } else {
      return fonts[mid]
    }
  }

  return hi >= 0 ? fonts[hi] : -1

  function getWidthAndHeight(text, fontInfo, fontSize) {
    let w = 0
    let h = fontInfo.getHeight(fontSize)
    for (const str of text) {
      w += fontInfo.getWidth(fontSize, str)
    }
    return [w, h]
  }
};