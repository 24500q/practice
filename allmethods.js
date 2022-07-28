const arr1 = ['mohsin','hassan']
const arr2 =['ahsan','usman','luqman']
/*const children = arr1.concat(arr2);
concate function is being define
console.log(children);*/

const fruits = ["orange",'banana','grapes','Apples']
const result = fruits.constructor;
/*constructor is being deffined
console.log(result);


const fruit1 = ['orange','banna','lemon']
fruit1.fill("kiwi");
fill methods is being  used in the java script
console.log(fruit1)

function is being defined ussually arrow function
const a =(p1,p2)=> p1 * p2;
 const res=a(12,12);
console.log(res);

string ststements

const car1= "mehran";
const car2 = "rivo";
console.log(car1+ " "+car2);
 
const number1 = 345;
const number2 = 45;
console.log(number1 + number2);

changing the arry in to the string function
const arr = ["mohsin","rehan","burhan","zia"];
const res = arr.toString();
console.log(res);

sorting of the arry function
const arr = ["mohsin","rehan","burhan","zia"];
const res = arr.sort();
console.log(res);

hence here the map funcyion is beiing specified.
const arr = [23,53,53,23,145,54];
const res = arr.map(myfunction);
console.log(res);

function myfunction(value, index, array){
    return value * 3;
}
  

const arry1 = [30,54,43,23,67,434,43,21];
const res = arry1.filter(condition);
console.log(res);
function condition(value, index, array){
    return value >30;
}

hence here reduce function is being defined it bascially sum out the whole array

const num = [20,30,40,50];
const sum = num.reduce(value1);
console.log(sum);

function value1(total, value, index, array){
    return total + value;
}

hence here some method is being used to clarify out the arry its produce result in boolen
 const arr = [12,14,10,13,43,42];
 const somearr = arr.some(myfunction);
 console.log(somearr);
 function myfunction(value,  index, array){
     return value > 18;
 }

 const a = new Date(2022, 4, 10, 12, 54, 30,  0 );
 console.log(a);

 if(new Date().getHours() < 18){
     console.log("Good Day")
 } else {
     console.log("Evening Day");
 };

 const time = new Date().getHours();
 let greeting;
 if(time < 10){
     greeting = "Good Morning";
 } else if(time < 20 ){
     greeting = "Good Afternoon";
 } else {
     greeting = "Good Evening";

 }
 console.log(greeting);

 const res = new Map([
     ["table", 1000],
     ["chair", 400],
     ["computer", 10000]
 ]);
 const a =res.get("computer");
 console.log(a);
object declaration in the java script
 let name = {firstname : "Mohsin", age : 23, fathername: "Shoukat"};
 console.log(name.firstname+ " "+ name.fathername+ " "+name.age);

 const info = {
     firstname : "Hassan",
     lastname : "Ali",
     Age : "18",
     id : 11867,
     fullname : function(){
         return this.firstname+ " "+this.lastname;
    
     }

 }
 const res = info.fullname();
 console.log(res);

 function introduction(Fname, Lastname, age, occupation) {
     this.firstname = Fname;
     this.lastName = Lastname;
     this.Age = age;
     this.Occupation = occupation;
 }
 const res = new introduction("Shoukat", "Mehmood", 50, "BussinessMan");
 console.log("My father name age is"+" "+res.Age);*/

 function myfunction(x, y) {
     if (y == undefined) {
         y = 6;
     }
     return x+y;
 }
 const res = new myfunction(6);
 console.log(res);
 











