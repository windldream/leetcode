/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
  const res = [];
  helper(s, res, []);
  return res;

  function helper(s, res, temp) {
    if (s.length === 0) {
      return res.push(temp.slice(0));
    }

    for (let i = 1; i <= s.length; i++) {
      if (isPalindrome(s.substring(0, i))) {
        temp.push(s.substring(0, i));
        helper(s.substring(i), res, temp);
        temp.pop()
      }
    }

    function isPalindrome(str) {
      return str.split('').reverse('').join('') === str;
    }
  }
};

console.log(partition('aab'))