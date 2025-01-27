let arr = [3,4,5,6];
arr.map((elem,i,array) =>{
    console.log(this);
},80);
//multiplying array elements using loop
// for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i] * 3;
// }
// console.log(arr);
//Finding Array Elements Length
let arrElemLength = arr.map(elem =>elem.length);
// console.log(arrElemLength);
//multiplying array elements using map
const modifiedArr = arr.map(elem =>{
    return elem * 3;
})
console.log(modifiedArr);
//Iterating and Joining array elements
let users = [
    {fn:"Susan",ln:"Steward"},
    {fn:"Jacob",ln:"Longbottom"},
    {fn:"Daniel",ln:"Black"},
]
let userFullNames = users.map(elem =>{
    return `${elem.fn} ${elem.ln}`;
})
// console.log(userFullNames);
//https://www.freecodecamp.org/news/filter-arrays-in-javascript/
//https://www.freecodecamp.org/news/how-to-use-javascript-array-reduce-method/
