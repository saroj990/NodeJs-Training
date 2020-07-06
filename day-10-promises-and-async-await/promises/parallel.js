const { prom1, prom2, prom3 } = require("./promises");

Promise
.all([ prom1(), prom2(), prom3() ])
.then(arr => {
  console.log("promise resolved: ", arr);
}).catch(err => {
  console.log(err);
}).finally(function () {
  
});