function divide(x, y=1) {
 let result  = x/y;
 console.log("result :", result);
}


// divide(6, 2);
// divide(6);
// divide(6, 0)

function newArray(element, arr=[]) {
  arr.push(element);
  return arr;
};

let myArr = [2, 3, 5];
// console.log(newArray(1, myArr));
console.log(newArray(10));
