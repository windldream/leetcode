/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    let stack = [], len = s.length, i, result = [], maxLen = 0, num = 0;

    for (i = 0; i < len; i++) {
        if (s[i] === ')') {
            if (stack.length !== 0) {
                result.push(stack.pop())
                result.push(i);
            }
        } else {
            stack.push(i)
        }
    }

    result.sort((a, b) => a - b);

    for (i = 0; i < result.length; i++) {
        if (result[i] === result[i + 1] - 1) {
            num++;
        } else {
            maxLen = Math.max(maxLen, num);
            num = 0;
        }
    }

    maxLen = maxLen % 2 === 0 ? maxLen : maxLen + 1;
    
    return maxLen;
};

longestValidParentheses('(()');