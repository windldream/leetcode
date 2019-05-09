/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    let flag = false, i, result = 0, num = 1, oldDivisior;
    if (dividend > 0 && divisor > 0 || dividend < 0 && divisor < 0) {
        flag = true;
    }

    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);
    oldDivisior = divisor
    i = divisor;

    while (i <= dividend) {
        result += num;
        divisor += divisor;
        i += divisor;
        num += num;
    }

    i = i - divisor
    while (i < dividend && dividend - i >= oldDivisior) {
        result++;
        i += oldDivisior;
    }

    result = flag ? result : -result;

    if (result > Math.pow(2, 31) - 1) {
        result = Math.pow(2, 31) - 1;
    }

    if (result < -Math.pow(2, 31)) {
        result = -Math.pow(2, 31);
    }

    return result;
};

console.log(divide(12, -3));
