/**
 * @param {string} s
 * @return {string}
 */

// Time Limit Exceeded
// var longestPalindrome = function(s) {
//     function isPalindromic(str) {
//         return str.split('').reverse().join('') === str;
//     } 

//     let len = s.length, i, j, result = '', str = '';
//     if (len === 0 || len === 1) {
//         return s;
//     }

//     for (i = 0; i < len; i++) {
//         for (j = i + 1; j <= len; j++) {
//             str = s.slice(i, j);
//             if (isPalindromic(str) && str.length > result.length) {
//                 result = s.slice(i, j);
//             }
//         }
//     }

//     return result;
// };

var longestPalindrome = function(s) {
    let len = s.length, low = 0, maxLen = 0, i;

    if (len < 2) {
        return s;
    }

    for (i = 0; i < len; i++) {
        extendPlaindrome(s, i, i);
        extendPlaindrome(s, i, i + 1);
    }

    return s.substring(low, low + maxLen);

    function extendPlaindrome(s, i, j) {
        let len = s.length;
        while (s[i] === s[j] && i >= 0 && j < len) {
            i--;
            j++;
        }

        if (maxLen < j - i - 1) {
            maxLen = j - i - 1;
            low = i + 1;
        }
    }
};