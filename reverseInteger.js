/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if (x === 0) {
        return 0;
    } else if (x > 0) {
        x = Number((x + '').split('').reverse().join(''));
        if (x > Math.pow(2, 31) - 1) {
            return 0;
        }

        return x
    } else {
        x = Number((x + '').slice(1).split('').reverse().join(''))
        if (-x < -Math.pow(2, 31) - 1) {
            return 0;
        }

        return -x;
    }
};