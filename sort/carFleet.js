/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
  if (position.length < 2) {
    return position.length;
  }
  const len = position.length;
  const car = [];
  for (let i = 0; i < len; i++) {
    car[i] = {
      pos: position[i],
      time: (target - position[i]) / speed[i]
    };
  }
  car.sort((a, b) => b.pos - a.pos);

  let num = 1;
  let sign = car[0].time;
  for (let i = 0; i < len; i++) {
    if (car[i].time > sign) {
      num++;
      sign = car[i].time;
    }
  }
  return num;
};

console.log(carFleet(20, [6, 2, 17], [3, 9, 2]));

// pos1 + speed[i1] * n = pos2 + speed[i] * n
// pos1 - pos2 / (speed[i2] - speed[i1]) = n;
