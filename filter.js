/*const arry1 = [34, 65, 32,25,30 ,12,13,17];
const arry2 = arry1.filter(checkage);
console.log(arry2);
function checkage(age) {
    return age >= 20;
}*/

/*const a = [23,43,53,34,53,65,42,86,354,35,-12,-45,-3];
const  b = a.filter(function(value) {
    return value >=0;
});
console.log(b);
*/
/*this function of filter is being used for the condition based and it hence creates a new array an do not change the origional arry.

/*const information = [
    {name: 'Mohsin', cast: 'Malik'},
    {name: "Hassan", cast: "Malik"},
    {name: 'kashi', cast: "Raja"},
    {name: 'usman', cast: 'Raja'}
];
const result = information.filter(function(description){
    return  description.cast == 'Malik';
});
console.log(result);*/
const ab = ["Mohsin", ' luqman ALi', "Usman Raza","Hassan","Rehan"];
const c = ab.filter(word => word.length > 6);
console.log(c);
