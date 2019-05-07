/**
 * @param {number} n
 * @return {string[]}
 * 针对一个长度为2n的合法排列, 第1到2n个位置都满足如下规则: 左括号的个数大于等于右括号的个数
 */
var generateParenthesis = function(n) {
    let result = [];
    
    generate(n, n, '', result);

    return result;

    function generate(leftNum, rightNum, str, result) {  
        if (leftNum === 0 && rightNum === 0) {
            result.push(str);
        }

        if (leftNum > 0) {
            generate(leftNum - 1, rightNum, str + '(', result);
        }

        if (leftNum < rightNum) {
            generate(leftNum, rightNum - 1, str + ')', result);
        }
    }
};
