/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    let resultStr = str.trim();
    resultStr = parseInt(str);

    if (resultStr !== resultStr) {
        return 0;
    } else if (resultStr > Math.pow(2, 31) - 1) {
        return Math.pow(2, 31) - 1;
    } else if (resultStr < -Math.pow(2, 31)) {
        return -Math.pow(2, 31);
    } else {
        return resultStr;
    }
};