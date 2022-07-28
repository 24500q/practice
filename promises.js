let complete = true;
let prom = new promise(function(resolve, reject){
    if(complete){
        resolve("i am sucessful");

    }else{
        reject("i  have been failed");

    }
})
console.log(prom);
