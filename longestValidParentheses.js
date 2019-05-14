/**
 * 1. 使用入栈和出栈解决括号匹配的问题
 * 2. 使用动态规划解决问题
 * @param {string} s
 * @return {number}
 */
// var longestValidParentheses = function(s) {
//     let stack = [], len = s.length, i, result = [], maxLen = 0, num = 0;

//     for (i = 0; i < len; i++) {
//         if (s[i] === ')') {
//             if (stack.length !== 0) {
//                 result.push(stack.pop())
//                 result.push(i);
//             }
//         } else {
//             stack.push(i)
//         }
//     }

//     result.sort((a, b) => a - b);

//     for (i = 0; i < result.length; i++) {
//         if (result[i] === result[i + 1] - 1) {
//             num++;
//         } else {
//             maxLen = Math.max(maxLen, num);
//             num = 0;
//         }
//     }

//     maxLen = maxLen % 2 === 0 ? maxLen : maxLen + 1;
    
//     return maxLen;
// };

var longestValidParentheses = function(s) {
    // 假设最长有效括号是以i结尾的, 那么dp[i]表示其最大长度
    let dp = [], len = s.length, i;

    if (len < 2) {
        return 0;
    }

    for (i = 0; i < len; i++) {
        dp[i] = 0;
    }

    for (i = 0; i < len; i++) {
        if (s[i] === '(') {
            dp[i] = 0;
        } else {
            if (s[i - 1] === '(') {
                dp[i] = (dp[i - 2] || 0) + 2;
            // 将i - dp[i - 1] - 1索引对应的值和i对应的相比较
            } else if (s[i - dp[i - 1] - 1] === '(') {
                dp[i] = dp[i - 1] + 2 + (dp[i - dp[i - 1] - 2] || 0);
            }
        }
    }

    return (Math.max.apply(Math, dp));
};

longestValidParentheses(")()())");