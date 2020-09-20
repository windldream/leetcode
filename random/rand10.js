/**
 * The rand7() API is already defined for you.
 * var rand7 = function() {}
 * @return {number} a random integer in the range 1 to 7
 */
var rand10 = function () {
  while (true) {
    let a = rand7()
    let b = rand7()
    let num = (a - 1) * 7 + b
    if (num <= 40) return (num % 10) + 1

    a = num - 40
    b = rand7()
    num = (a - 1) * 7 + b
    if (num <= 60) return (num % 10) + 1

    a = num - 60
    b = rand7()
    num = (a - 1) * 7 + b
    if (num <= 20) return (num % 10) + 1
  }
}
