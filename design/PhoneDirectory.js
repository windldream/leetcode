/**
 * Initialize your data structure here
 @param maxNumbers - The maximum numbers that can be stored in the phone directory.
 * @param {number} maxNumbers
 */
const PhoneDirectory = function(maxNumbers) {
  this.phones = Array(maxNumbers).fill(0)
};

/**
 * Provide a number which is not assigned to anyone.
 @return - Return an available number. Return -1 if none is available.
 * @return {number}
 */
PhoneDirectory.prototype.get = function() {
  const index =  this.phones.indexOf(0)
  if (index !== -1){
    this.phones[index] = 1
    return index
  }
  return index
};

/**
 * Check if a number is available or not.
 * @param {number} number
 * @return {boolean}
 */
PhoneDirectory.prototype.check = function(number) {
  return this.phones[number] === 0
};

/**
 * Recycle or release a number.
 * @param {number} number
 * @return {void}
 */
PhoneDirectory.prototype.release = function(number) {
  this.phones[number] = 0
};

/**
 * Your PhoneDirectory object will be instantiated and called as such:
 * var obj = new PhoneDirectory(maxNumbers)
 * var param_1 = obj.get()
 * var param_2 = obj.check(number)
 * obj.release(number)
 */