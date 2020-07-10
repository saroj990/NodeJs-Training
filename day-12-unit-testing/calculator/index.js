module.exports = {
  add: function(a, b) {
    return a + b;
  },
  subtract: function(a, b) {
    return a - b;
  },
  divide: function(a, b) {
    if(b == 0 ) {
      throw new Error('divide by zero')
    } else {
      return a / b;
    }
  }
}