/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if (num1 == '0' || num2 == '0') {
        return '0';
    }

    if (num1 == '' || num2 == '') {
        return '';
    }

    let len1 = num1.length, len2 = num2.length, resultStr = '', mul = [];

    for (let i = 0; i < len1 + len2; i++) {
        mul[i] = 0;
    }

    for (let i = len1 - 1; i >= 0; i--) {
        for (let j = len2 - 1; j >= 0; j--) {
            let multi = parseInt(num1[i]) * parseInt(num2[j]);
            // 处理进位
            multi += mul[i + j + 1];
            mul[i + j] += Math.floor(multi / 10)
            mul[i + j + 1] = multi % 10;
        }
    }

    let k = 0;

    while (k < mul.length - 1 && mul[k] === 0) {
        k++;
    }

    for (; k < mul.length; k++) {
        resultStr += mul[k];
    }

    return resultStr;
};

console.log(multiply('123', '456'))