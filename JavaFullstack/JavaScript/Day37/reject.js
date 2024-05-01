var promiseObject = new Promise(function (resolve,reject){
    reject({status:false, error : "Failed to connect with server"});
});
console.log(promiseObject);