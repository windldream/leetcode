/**
 * Initialize your data structure here.
 */
const Logger = function() {
  this.log = new Map()
};

/**
 * Returns true if the message should be printed in the given timestamp, otherwise returns false.
 If this method returns false, the message will not be printed.
 The timestamp is in seconds granularity.
 * @param {number} timestamp
 * @param {string} message
 * @return {boolean}
 */
Logger.prototype.shouldPrintMessage = function(timestamp, message) {
  if (!this.log.has(message)) {
    this.log.set(message, timestamp)
    return true
  }
  const time = this.log.get(message)
  if (timestamp - time < 10) return false
  this.log.set(message, timestamp)
  return true
};

/**
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */