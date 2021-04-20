var AnimalShelf = function () {
  this.catQueue = []
  this.dogQueue = []
  this.time = 0
}

/**
 * @param {number[]} animal
 * @return {void}
 */
AnimalShelf.prototype.enqueue = function (animal) {
  const [idx, type] = animal
  if (type === 0) {
    this.catQueue.push([idx, type, this.time])
  } else {
    this.dogQueue.push([idx, type, this.time])
  }
  this.time++
}

/**
 * @return {number[]}
 */
AnimalShelf.prototype.dequeueAny = function () {
  if (this.catQueue.length === 0 && this.dogQueue.length === 0) return [-1, -1]
  if (this.catQueue.length === 0) return this.dequeueDog()
  if (this.dogQueue.length === 0) return this.dequeueCat()
  if (this.catQueue[0][2] < this.dogQueue[0][2]) return this.dequeueCat()
  return this.dequeueDog()
}

/**
 * @return {number[]}
 */
AnimalShelf.prototype.dequeueDog = function () {
  if (this.dogQueue.length === 0) return [-1, -1]
  return this.dogQueue.shift().slice(0, 2)
}

/**
 * @return {number[]}
 */
AnimalShelf.prototype.dequeueCat = function () {
  if (this.catQueue.length === 0) return [-1, -1]
  return this.catQueue.shift().slice(0, 2)
}

/**
 * Your AnimalShelf object will be instantiated and called as such:
 * var obj = new AnimalShelf()
 * obj.enqueue(animal)
 * var param_2 = obj.dequeueAny()
 * var param_3 = obj.dequeueDog()
 * var param_4 = obj.dequeueCat()
 */
