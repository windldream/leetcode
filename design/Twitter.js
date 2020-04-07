/**
 * Initialize your data structure here.
 */
var Twitter = function () {
  this.tweetIds = {};
  this.time = 0;
};

/**
 * Compose a new tweet.
 * @param {number} userId
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function (userId, tweetId) {
  if (!this.tweetIds[userId]) {
    this.tweetIds[userId] = {};
    this.tweetIds[userId].followIds = new Set();
    this.tweetIds[userId].tweetIds = new Set();
  }
  this.tweetIds[userId].followIds.add(userId);
  this.tweetIds[userId].tweetIds.add({ tweetId, time: this.time++ });
};

/**
 * Retrieve the 10 most recent tweet ids in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user herself. Tweets must be ordered from most recent to least recent.
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function (userId) {
  let res = [];
  if (!this.tweetIds[userId]) {
    return [];
  } else {
    for (const id of this.tweetIds[userId].followIds) {
      let oTweetIds =
        (this.tweetIds[id] && this.tweetIds[id].tweetIds) || new Set();
      res = [...res, ...oTweetIds];
    }
  }
  res.sort((a, b) => b.time - a.time);
  if (res.length > 10) {
    res = res.slice(0, 10);
  }
  return res.map((item) => item.tweetId);
};

/**
 * Follower follows a followee. If the operation is invalid, it should be a no-op.
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function (followerId, followeeId) {
  if (!this.tweetIds[followerId]) {
    this.tweetIds[followerId] = {};
    this.tweetIds[followerId].followIds = new Set();
    this.tweetIds[followerId].tweetIds = new Set();
  }
  this.tweetIds[followerId].followIds.add(followeeId);
};

/**
 * Follower unfollows a followee. If the operation is invalid, it should be a no-op.
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function (followerId, followeeId) {
  if (!this.tweetIds[followerId] || followerId === followeeId) return;
  this.tweetIds[followerId].followIds.delete(followeeId);
};

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */
