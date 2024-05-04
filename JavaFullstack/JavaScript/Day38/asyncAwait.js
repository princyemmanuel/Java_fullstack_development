function fnFetch(){
    return new Promise(function(resolve,reject){
        resolve({
            status:true,
            data:[
                {name:"n1",city : "C1"},
                {name: "n2",city:"C2"}
            ]
        })
    })
}


async function getPromise(){
    try{
        var data = await fnFetch();
        console.log(data)
    }catch(error){
        console.log("Error data",error)
    }
}
getPromise();
//using then and catch
// fnFetch().then(function(success){
//     console.log("Then fn",success)
// }).catch(function(error){
//     console.log("Catch fn",error)
// })