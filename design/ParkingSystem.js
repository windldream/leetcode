/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function (big, medium, small) {
  this.systemMap = {
    1: [],
    2: [],
    3: []
  }
  this.sizeList = [0, big, medium, small]
}

/**
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function (carType) {
  if (this.systemMap[carType].length >= this.sizeList[carType]) {
    return false
  }
  this.systemMap[carType].push(carType)
  return true
}

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */
