/**
 * @param {number} num
 * @return {string}
 */
// var intToRoman = function(num) {
//     let map = {
//         "1" : "I", "2" : "II", "3" : "III", "4" : "IV", "5" : "V", "6" : "VI", "7" : "VII", "8" : "VIII", "9" : "IX",
//         "10" : "X", "20" : "XX", "30" : "XXX", "40" : "XL", "50" : "L", "60" : "LX", "70" : "LXX", "80" : "LXXX", "90" : "XC", 
//         "100" : "C", "200" : "CC", "300" : "CCC", "400" : "CD", "500" : "D", "600" : "DC", "700" : "DCC", "800" : "DCCC", "900" : "CM",
//         "1000" : "M", "2000" : "MM", "3000" : "MMM", "0" : ""
//     },
//     str = num + '', len = str.length, i, resultStr = '';

//     for (i = 0; i < len; i++) {
//         resultStr += map[str[i] * Math.pow(10, len - i - 1)];
//     }

//     return resultStr;
// };

var intToRoman = function(num) {
    let values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
        reps = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'],
        resultStr = '', i;

    for (i = 0; i < 13; i++) {
        while (num >= values[i]) {
            num -= values[i];
            resultStr += reps[i];
        }
    }

    return resultStr;
};
