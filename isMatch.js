/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
// var isMatch = function(s, p) {
//     debugger
//     let sLen = s.length, pLen = p.length, first_match;

//     if (pLen === 0) {
//         return sLen === 0;
//     }

//     if (sLen === 0) {
//         return p.split('').every(str => {
//             return str === '*';
//         });
//     }

//     first_match = sLen !== 0 && (s[0] === p[0] || p[0] === '?');

//     if (p[0] === '*') {
//         return isMatch(s, p.slice(1)) || isMatch(s.slice(1), p) || isMatch(s.slice(1), p.slice(1));
//     } else {
//         return first_match && isMatch(s.slice(1), p.slice(1));
//     }
// };

// 动态规划
var isMatch = function(s, p) {
    let sLen = s.length, pLen = p.length, dp = [];

    for (i = 0; i <= sLen; i++) {
        dp[i] = [];
    }

    dp[0][0] = true;
    for (j = 1; j <= pLen; j++) {
        if (p[j - 1] === '*') {
            dp[0][j] = dp[0][j - 1]
        }
    }
    // dp[i][j]表示s到i位置, p到j位置是否匹配
    for (i = 1; i <= sLen; i++) {
        for (j = 1; j <= pLen; j++) {
            if (s[i - 1] === p[j - 1] || p[j - 1] === '?') {
                dp[i][j] = dp[i - 1][j - 1];
            } else if (p[j - 1] === '*') {
                dp[i][j] = dp[i - 1][j] || dp[i][j - 1];
            }
        }
    }

    return !!dp[sLen][pLen];
};

console.log(isMatch('aa', '*'))