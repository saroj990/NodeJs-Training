
function sum(x, y)  {
  x = x +1;
  return x + y;
}


let sum = (x, y) => { 
  x  = x+1;
  x + y 
};
//convert it to arrow function


function Person(fname, lname) {
  this.fname = fname;
  this.lname = lname;
  this.fullName = ""
  this.setName = function() {
    setTimeout(function() {
      console.log("fname: ", this.fname);
      console.log("lname: ", this.lname);
      this.fullName =   `${this.fname} ${this.lname}`;
    });
  }
}

// don't use arrow function
function Sequence() {
  this.currVal = 0;
}
Sequence.prototype.next = () => this.currVal += 1;
Sequence.prototype.curr = () => this.currVal;


// (function() {

// })();

// Object -> Person  -> Student.fullName()
function Foo () {
  this.name;
  this.print = function() {
    console.log("name: ", this.name);
  }
}

var foo = new Foo();
foo.print();

