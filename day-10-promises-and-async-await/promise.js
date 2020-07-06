function myProm() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve("myProm returned some data");
    }, 1000);
  });
}

myProm()
.then(res => {
  return AnotherProm(res);
})
.then(anotherResult => {
  return yetAnotherProm(anotherResult);
}).then(result => {
  console.log(result);
}).catch(err => console.log(err));


