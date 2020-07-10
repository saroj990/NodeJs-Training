
// - Red - green -> Refactor -> red green

const assert = require('assert');

function isInteger(number) {
  return number >=  0;
}

// let result = isInteger(-20);
// assert.ok(result, "failed because of falsy value");


// assert.strictEqual('2', 2, "not equal");
// console.log(2 === '2');

// let hero = { 
//   name: 'Glamour',
//   speed: 100
// }

// let honda = {
//   name: 'Glamour',
//   speed: 100,
//   color: 'black'
// }

// assert.deepEqual(hero, honda, "Not same")


let hero = { 
  name: 'Glamour',
  speed: '100'
}

let honda = {
  name: 'Glamour',
  speed: 100,
}

assert.deepStrictEqual(hero, honda, "Not same");