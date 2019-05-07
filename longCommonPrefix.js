/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) {
        return ''; 
    }

    let j = 0, str = '', firstLen = strs[0].length;

    for (j = 0; j < firstLen; j++) {
        if (isContain(strs, strs[0][j], j)) {
            str += strs[0][j]
        } else {
            break;
        }
    }

    return str;

    function isContain(strs, s, j) {
        let len = strs.length, i = 0;
        
        for (; i < len; i++) {
            if (strs[i][j] !== s) {
                return false
            }
        }
        return true;
    }
};

console.log(longestCommonPrefix(["flower","flow","flight"]))