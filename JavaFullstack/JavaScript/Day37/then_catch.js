var promiseObject = new Promise(function (resolve,reject){
    //resolve fn
    // resolve({status:true, data : [{name: "name1"},{name: "name2"}] });

    //reject fn
    reject({status:false, error : "Failed to connect with server"});
});

promiseObject.then(function(successData){
    console.log("Then() fn executed");
    console.log(successData);
})
promiseObject.catch(function(errorData){
    console.log("catch() fn executed");
    console.log(errorData);
})

