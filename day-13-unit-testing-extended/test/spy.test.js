const sinon = require('sinon');
const { expect } = require("chai");

var user = {
  setName: function(name){
    this.name = name;
  }
}

describe("testing a spy", function() {
  it("should call the setName() once", function() {
    let spy = sinon.spy(user, 'setName');
    user.setName("test"); //
    console.log(spy.callCount);
    expect(spy.callCount).to.equal(1);
    // expect(spy.calledWith('test')).
    // sinon.assert.calledWith(spy, "hello");
    // let result  = s('test')
    expect(result).to.be.true;

    // user.setName();
    // expect(spy.callCount).to.equal(2);
  });
});

function Logger() {
  this.logToFile = function() {};
  this.logToDB = function() {}; 
}