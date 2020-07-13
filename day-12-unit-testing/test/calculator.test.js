
const { expect }  = require("chai");
const { add, subtract, divide } = require("../calculator/index");

describe("calculator", function() {
  // assertion block
  describe("add()", function() {
    it("will test it later");
    
    it("add two numbers", function() {
      let result = add(1, 2);
      expect(result).to.be.equal(3);
    });
  
    it("add two -ve numbers", function() {
      let result = add(-1, -2);
      expect(result).to.be.equal(-3);
    });
  })

  describe("subtract()", function() {
    // 
    it("subtract 2 numbers", function() {
      let result = subtract(1, 2);
      expect(result).to.be.equal(-1);
    });
  })


  describe("divide()", function() {
    // 
    it("divide 2 numbers", function() {
      let result = divide(2, 2);
      expect(result).to.be.equal(1);
    });
    it("divide by zero", function() {
      expect(function() { 
        divide(2, 0) 
      }).to.throw();
    });
  })
});