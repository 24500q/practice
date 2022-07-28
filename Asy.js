/*function myfunction( ) {
    console.log("Hello i have been succrdrd in the life");
}
function myname(name){
    console.log(" MY name is"+ " "+name);
}
const b=setTimeout(myfunction, 2000);
console.log(b);
const a= myname("Mohsin");
console.log(a);

function display( ) {
    return result;

}
function number(num1, num2){
    let sum = num1+ num2;
    return sum;
}
const result = number(34, 16);
console.log(display(result));*/
 /*function display( ){
    

 }
 function number(num1, num2, myCallback){
     let sum = num1 + num2;
     myCallback(sum);
    

 }
 
 const res = number(50, 50, display);
console.log(res);*/

function displayer(some) {
    return  some;

}
const myPromise = new Promise(function(myResolve, myReject){
    let x = 0;  

    if (x==0) {
        myResolve("good");
    } else {
        myReject("bad");
    }

});
myPromise.then(
    function(value) {displayer(value);},
    function(error) {displayer(error);}



);
