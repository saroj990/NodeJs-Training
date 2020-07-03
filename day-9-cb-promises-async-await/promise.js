let prom = new Promise(function(resolve, reject) {
  setTimeout(function() {
    let outcome = Math.round(Math.random());
    if(outcome) {
      return resolve('got data');
    } else {
      return reject("got some error");
    }
  }, 1000);
});

prom.then(function(value) {
 console.log("got my value :", value);
}).catch(function(err) {
  console.log("oops! there is an error");
});