const _ = require("lodash");
let main = () => {
 let obj =  {};
 let obj1 = { 
   firstName: 'jon'
 };
 let isEmptyObj = _.isEmpty(obj)
 let isEmptyObj1 = _.isEmpty(obj1)
 console.log("obj =", isEmptyObj);
 console.log("obj1 =", isEmptyObj1);
};
main();