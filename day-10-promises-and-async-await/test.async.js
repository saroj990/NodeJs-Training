const { prom1 } = require('./promises/promises');

(async function() {
  try {
  let result = await prom1();
  console.log("result of prom1", result);
  const data = JSON.parse("{a:}");
  console.log(data);
  } catch(err) {
    console.log("err", err);
  }
})();