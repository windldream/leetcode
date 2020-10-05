var AnimalShelf = function () {
  this.cats = []
  this.dogs = []
  this.index = 0
}

/**
 * @param {number[]} animal
 * @return {void}
 */
AnimalShelf.prototype.enqueue = function (animal) {
  const [id, type] = animal
  if (type === 0) {
    this.cats.push([id, this.index++])
  } else {
    this.dogs.push([id, this.index++])
  }
}

/**
 * @return {number[]}
 */
AnimalShelf.prototype.dequeueAny = function () {
  if (this.cats.length === 0) return this.dequeueDog()
  if (this.dogs.length === 0) return this.dequeueCat()
  const dog = this.dogs[0]
  const cat = this.cats[0]
  if (dog[1] > cat[1]) {
    this.cats.shift()
    return [cat[0], 0]
  }
  this.dogs.shift()
  return [dog[0], 1]
}

/**
 * @return {number[]}
 */
AnimalShelf.prototype.dequeueDog = function () {
  if (this.dogs.length === 0) return [-1, -1]
  const dog = this.dogs.shift()
  return [dog[0], 1]
}

/**
 * @return {number[]}
 */
AnimalShelf.prototype.dequeueCat = function () {
  if (this.cats.length === 0) return [-1, -1]
  const cat = this.cats.shift()
  return [cat[0], 0]
}

/**
 * Your AnimalShelf object will be instantiated and called as such:
 * var obj = new AnimalShelf()
 * obj.enqueue(animal)
 * var param_2 = obj.dequeueAny()
 * var param_3 = obj.dequeueDog()
 * var param_4 = obj.dequeueCat()
 */
