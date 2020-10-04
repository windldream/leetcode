var TweetCounts = function () {
  this.counts = new Map()
}

/**
 * @param {string} tweetName
 * @param {number} time
 * @return {void}
 */
TweetCounts.prototype.recordTweet = function (tweetName, time) {
  if (!this.counts.has(tweetName)) {
    this.counts.set(tweetName, [])
  }
  this.counts.get(tweetName).push(time)
}

/**
 * @param {string} freq
 * @param {string} tweetName
 * @param {number} startTime
 * @param {number} endTime
 * @return {number[]}
 */
TweetCounts.prototype.getTweetCountsPerFrequency = function (freq, tweetName, startTime, endTime) {
  let interval = 1
  if (freq === 'minute') {
    interval *= 60
  } else if (freq === 'hour') {
    interval *= 60 * 60
  } else {
    interval *= 60 * 60 * 24
  }

  const ans = Array(Math.ceil((endTime - startTime + 1) / interval)).fill(0)
  if (this.counts.has(tweetName)) {
    for (const time of this.counts.get(tweetName)) {
      if (startTime <= time && time <= endTime) {
        ans[Math.floor((time - startTime + 1) / interval)] += 1
      }
    }
  }
  return ans
}

/**
 * Your TweetCounts object will be instantiated and called as such:
 * var obj = new TweetCounts()
 * obj.recordTweet(tweetName,time)
 * var param_2 = obj.getTweetCountsPerFrequency(freq,tweetName,startTime,endTime)
 */
