/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
const encode = function(strs) {
  if (strs.length === 0) return ''
  return strs.join(String.fromCharCode(256))
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
const decode = function(s) {
  if (s.length === 0) return []
  return s.split(String.fromCharCode(256))
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */