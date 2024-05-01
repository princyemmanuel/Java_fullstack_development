var promiseObject = new Promise(function (resolve,reject){
    resolve({status:true, data : [{name: "name1"},{name: "name2"}] });

   
});
console.log(promiseObject);