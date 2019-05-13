/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    let len = s.length, wordsLen = words.length, result = [], sum, i = 0;

    if (words.length === 0) {
        return [];
    }
    
    sum = wordsLen * words[0].length;

    while (i + sum <= len) {
        let str = s.slice(i, i + sum);
        if (isExistWords(str, words)) {
            result.push(i);
        }
        i += 1;
    }

    return result;

    function isExistWords(str, words) {
        let len = words[0].length, wordsLen = words.length, i, strArr = [];
        for (i = 0; i < str.length; i += len) {
            strArr.push(str.slice(i, i + len));
        }

        strArr.sort();
        words.sort();

        for (i = 0; i < wordsLen; i++) {
            if (strArr[i] !== words[i]) {
                return false;
            }
        }
        return true;
    }
};