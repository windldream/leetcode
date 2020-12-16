/**
 * // This is the HtmlParser's API interface.
 * // You should not implement it, or speculate about its implementation
 * function HtmlParser() {
 *
 *		@param {string} url
 *     	@return {string[]}
 *     	this.getUrls = function(url) {
 *      	...
 *     	};
 * };
 */

/**
 * @param {string} startUrl
 * @param {HtmlParser} htmlParser
 * @return {string[]}
 */
const crawl = function(startUrl, htmlParser) {
  const queue = []
  queue.push(startUrl)
  const ans = new Set()
  const visited = new Set()
  const domain = getDomain(startUrl)
  while (queue.length) {
    const len = queue.length
    for (let i = 0; i < len; i++) {
      const url = queue.shift()
      visited.add(url)
      ans.add(url)
      const urls = htmlParser.getUrls(url)
      for (const u of urls) {
        if (visited.has(u) || domain !== getDomain(u)) continue
        queue.push(u)
      }
    }
  }
  return  [...ans]

  function getDomain(url) {
    const start = url.indexOf('//')
    const end = url.indexOf('/', start + 2)
    return url.substring(start + 2, end === -1 ? url.length : end)
  }
};