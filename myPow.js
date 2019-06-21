/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (n === 0) {
        return 1;
    }
    if (n < 0) {
        x = 1 / x;
        n = Math.abs(n);
    }
    let res = 1;
    do {
        if (n % 2) {
            res *= x;
        }
        n = Math.floor(n / 2);
        if (n) {
            x *= x;
        }
    } while (n);

    return res;
};

console.log(myPow(2, 10));