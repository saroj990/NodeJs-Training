// const sinon = require('sinon');
// const { expect } = require("chai");
// const user = require("../user.js")


// describe("stub test", function() {
//   var stub  = "";
  
//   before(function(done) {
//     stub = sinon.stub(user,"addUser").resolves("added");
//     done();
//   });

//   it("should create a user", async function() {
//     let result = await user.addUser({ fname: 'test', lname: 'test'});
//     expect(result).to.equal("okay done");
//   });

//   after(function(done) {
//     stub.restore();
//     done();
//   });
// });
// //  function Logger() {
// //     this.log = function(message) {
// //       console.log("message: ", message);
// //     }
// //  }