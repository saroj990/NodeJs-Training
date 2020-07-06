/*
  promises 
  ---> sequential
  ---> parallel (demo)
*/

function prom1() {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      return resolve("prom1");
    }, 1000);
  });
}

function prom2() {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      return resolve("prom2");
    }, 2000);
  });
}


function prom3() {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      return resolve("prom3");
    }, 1000);
  });
}

module.exports = {
  prom1,
  prom2,
  prom3
}