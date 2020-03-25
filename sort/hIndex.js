/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
  citations.sort((a, b) => a - b);
  let len = citations.length;
  for (let i = 0; i < len; i++) {
    let h = len - i;
    if (h <= citations[i]) {
      return h;
    }
  }
  return 0;
};