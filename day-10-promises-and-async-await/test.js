const { prom1 } = require('./promises/promises');
const makeRequest = () => {
  try {
      prom1()
      .then(result => {
        // this parse may fail
        const data = JSON.parse("{ a: }");
        console.log(data)
      })
      // // uncomment this block to handle asynchronous errors
      .catch((err) => {
        console.log("error handled :", err)
      })
  } catch (err) {
    console.log(err)
  }
}

makeRequest();