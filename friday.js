/*const a = [3,
    ['mohsin',['malik','mohsin1',['rehan-saboor',[3,'malik-',5],6],'malik1'],3,['rehan',['zohoib',43]],34,34]];
console.log(a[1][1][2][1][1][4])*/
var table = new Array(3);
table[0] = [1,2,43,56,32,23];
table[1] = [23,43,3,543];
table[2] = [23,43,53,42];
let totalValue = [];
for (let i=0; i<table[1].length; i++) {
    totalValue.push(table[1][i] + table[2][i]);
 

     
}console.log(totalValue);


