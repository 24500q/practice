const a = [1,2,3,4,5,6]
function maps(a, Func) {
    const array = [];
    for (let i=0; i<a.length; i++) {
        const result = Func(a[i], i, a);
        array.push(result);
    }
    return array;
}
const square = maps(a, num => num ** 2)
console.log(square);