/**
 * @param {string} s
 * @return {boolean}
 */
// var isValid = function(s) {
//     let len = s.length, i, str, stack = [], openBrackets = ['{', '[', '('],
//         map = {
//             '(': ')',
//             '[': ']',
//             '{': '}'
//         };

//     if (len === 0) {
//         return true;
//     }

//     for (i = 0; i < len; i++) {
//         // 添加左括号到栈中
//         if (openBrackets.includes(s[i])) {
//             stack.push(s[i]);
//         } else {
//             if (stack.length > 0) {
//                 str = stack.pop();
                
//                 if (map[str] !== s[i]) {
//                     return false;
//                 }
//             } else {
//                 return false;
//             }
//         } 
//     }

//     return stack.length === 0;
// };

var isValid = function(s) {
    while (s.indexOf('()') > -1 || s.indexOf('[]') > -1 ||s.indexOf('{}') > -1) {
        s = s.replace('{}', '');
        s = s.replace('[]', '');
        s = s.replace('()', '');
    }

    return s.length === 0;
};

console.log(isValid('()'))