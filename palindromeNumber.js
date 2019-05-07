/**
 * @param {number} x
 * @return {boolean}
 */
// var isPalindrome = function(x) {
//     return (x + '').split('').reverse().join('') == x;
// };

var isPalindrome = function(x) {
    let i, j, len;

    x = x + '';
    len = x.length;
    if (len % 2 == 0) {
        i = len / 2 - 1;
        j = len / 2;
    } else {
        i = (len - 1) / 2;
        j = i;
    }

    while (i >= 0 && j < len) {
        debugger
        if (x[i] === x[j]) {
            i--;
            j++;
        } else {
            return false;
        }
    }

    return true;
};