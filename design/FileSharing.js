/**
 * @param {number} m
 */
const FileSharing = function(m) {
  this.idToChunkMap = new Map()
  this.chunkToIdMap = new Map()
};

/**
 * @param {number[]} ownedChunks
 * @return {number}
 */
FileSharing.prototype.join = function(ownedChunks) {
  let id = 1
  while (this.idToChunkMap.has(id)) id++
  this.idToChunkMap.set(id, new Set(ownedChunks))
  for (const chunk of ownedChunks) {
    if (!this.chunkToIdMap.has(chunk)) {
      this.chunkToIdMap.set(chunk, new Set())
    }
    this.chunkToIdMap.get(chunk).add(id)
  }
  return id
};

/**
 * @param {number} userID
 * @return {void}
 */
FileSharing.prototype.leave = function(userID) {
  const chunks = this.idToChunkMap.get(userID)
  this.idToChunkMap.delete(userID)
  for (const chunk of chunks) {
    this.chunkToIdMap.get(chunk).delete(userID)
    if (this.chunkToIdMap.get(chunk).size === 0) this.chunkToIdMap.delete(chunk)
  }
};

/**
 * @param {number} userID
 * @param {number} chunkID
 * @return {number[]}
 */
FileSharing.prototype.request = function(userID, chunkID) {
  if (!this.chunkToIdMap.has(chunkID)) return []
  const ans = [...this.chunkToIdMap.get(chunkID)]
  if (!this.idToChunkMap.get(userID).has(chunkID)) {
    this.idToChunkMap.get(userID).add(chunkID)
    this.chunkToIdMap.get(chunkID).add(userID)
  }
  return ans.sort((a, b) => a - b)
};

/**
 * Your FileSharing object will be instantiated and called as such:
 * var obj = new FileSharing(m)
 * var param_1 = obj.join(ownedChunks)
 * obj.leave(userID)
 * var param_3 = obj.request(userID,chunkID)
 */