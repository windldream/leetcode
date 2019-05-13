/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle.length === 0) {
        return 0;
    }
    if (haystack.length === 0) {
        return -1;
    }

    let len = haystack.length, len2 = needle.length, i;
    for (i = 0; i < len; i++) {
        if (haystack[i] === needle[0] && haystack.slice(i, i + len2) === needle) {
            return i;
        }
    }

    return -1;
};

console.log(strStr('hello', 'll'));