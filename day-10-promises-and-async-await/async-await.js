async function asyncTask() {
  let respone = await foo();
  console.log("response :", respone);
}

function foo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve("foo");
    }, 2000)
  });
}

// asyncTask();

async function mayBeAsync() {
  return "Hello";
}


const  { prom1, prom2, prom3 } = require('./promises/promises');


mayBeAsync().then(async (res) => {
  console.log("result from may be async : ", res);
  try {
    let [ prom1Res, prom2Res, prom3Res ] = await Promise.all([ prom1(), prom2(), prom3()]);
    console.log(prom1Res, prom2Res, prom3Res);

  } catch(err) {
    //handle error
  }
}).catch(err => console.log(err));


mayBeAsync().then(async (res) => {
  console.log("result from may be async : ", res);
  
    let [ prom1Res, prom2Res, prom3Res ] = 
    await Promise.all([ prom1(), prom2(), prom3()])
    .catch(err => 
    });
    console.log(prom1Res, prom2Res, prom3Res);

}).catch(err => console.log(err));

