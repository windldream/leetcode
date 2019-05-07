/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let letterMap = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    };
    let len = digits.length, i, phoneArr = [];

    if (len === 0) {
        return []
    }

    if (len === 1) {
        return letterMap[digits].split('');
    }

    for (i = 0; i < len; i++) {
        phoneArr.push(letterMap[digits[i]]);
    }

    function mergeAllStr(arr) {
        if (arr.length === 1) {
            return arr[0].split(''); 
        }
        return mergeStr(arr.shift(), mergeAllStr(arr));
    }

    function mergeStr(a, b) {
        let aLen = a.length, bLen = b.length, mergeArr = [], i, j;
        for (i = 0; i < aLen; i++) {
            for (j = 0; j < bLen; j++) {
                mergeArr.push(a[i] + b[j]);
            }
        }

        return mergeArr;
    }

    return mergeAllStr(phoneArr);
};

console.log(letterCombinations('23'));