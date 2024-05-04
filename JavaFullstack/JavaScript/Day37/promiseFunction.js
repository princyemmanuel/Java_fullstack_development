function createPromise() {
 return new Promise(function (resolve, reject) {
    reject({ name: "Princy" });
  })
};

var promiseObject = createPromise();

promiseObject
  .then(function(data){
    console.log("then() fn executed");
    console.log(data);
  })
.catch(function(error){
    console.log("catch() fn executed");
    console.log(error);
  });

// or
// createPromise().then(function(data){
//     console.log("then() fn executed");
//     console.log(data);
// })
// .catch(function(error){
//     console.log("catch() fn executed");
//     console.log(error);
// })
