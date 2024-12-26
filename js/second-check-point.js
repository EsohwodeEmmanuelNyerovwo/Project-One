/*
String Manipulation Functions:

Reverse a String: Write a function that reverses a given string.
Count Characters: Create a function that counts the number of characters in a string.
Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence.

Array Functions:

Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.
Sum of Array: Create a function that calculates the sum of all elements in an array.
Filter Array: Implement a function that filters out elements from an array based on a given condition.

Mathematical Functions:

Factorial: Write a function to calculate the factorial of a given number.
Prime Number Check: Create a function to check if a number is prime or not.
Fibonacci Sequence: Implement a function to generate the Fibonacci sequence up to a given number of terms. (search on the net )
 */
//Capitalize Words: Implement a function that capitalizes 
// the first letter of each word in a sentence.
function capitalizeEachWord(str){
    const words = str.split(" ");
    for(let i = 0; i < words.length; i++){
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    // words.join(" ");
    return words;
}
let cap = capitalizeEachWord('i am going to school!');
for(let i of cap){
    console.log(i);
}
console.log(capitalizeEachWord('i am going to school!'));
function nthFibonacci(n){

    // Base case: if n is 0 or 1, return n
    if (n <= 1) {
        return n;
    }
    
    // Recursive case: sum of the two preceding Fibonacci
    // numbers
    return nthFibonacci(n - 1) + nthFibonacci(n - 2);
}

let n = 5;
let result = nthFibonacci(n);
// console.log('Fibo'+result);
const word = 'freecodecamp';
const firstLetter = word.charAt(0);
console.log(firstLetter);
//Factorial of a number
function fact(n){
    let factorial = 1;
    for(let i = 1; i <= n; i++){
        factorial *= i;
    }
    return factorial;
}
// console.log(fact(5));
//Count spaces
// function countSpaces(str) {
//     let count = 0;
//     for(let i = 0; i < str.length; i++){
//         if(str[i] == str[i].indexOf(' ')){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countSpaces('My name is Amaka and I am a girl.'));
//Reverse a String: Write a function that reverses a given string.
function reverseString(str){
    let strAccumulator = '';
    let newArr = [];
    for(let i = str.length - 1; i >= 0; i--){
        strAccumulator += str[i].toLowerCase();
    }
    return strAccumulator;
}
// console.log(reverseString('I am going to school'));
//Count Characters: Create a function 
// that counts the number of characters in a string.
function countCharacter(str){
    let count = 0;
    for(let i = 0; i < str.length; i++){
        count++;
    }
    return count;
}
// console.log(countCharacter('amam'));
//check spaces
//To capitalize the first letter and the letter after spaces use
// index of space plus one
function checkSpaces(str) {
    let count = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] === ' '){
            count++;
        }
    }
    return count;
}
console.log('Index:'+ checkSpaces('I am going to school and I'));
//Find Maximum and Minimum: Write functions to find the 
// maximum and minimum values in an array of numbers.
function minMax(arr){
    let min = arr[0];
    let max = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < min) min = arr[i];
        if(arr[i] > max) max = arr[i];
    }
    return [min,max];
}
console.log(minMax([32,1,65,3,8,9,30,54,-1,100,45]));
let ans = minMax([32,1,65,3,8,9,30,54,-1,100,45]);
for(let i of ans){
    console.log(i);
}
console.log(`The Minimum = ${ans[0]}`);
console.log(`The Maximum = ${ans[1]}`);
//Sum of Array: Create a function that calculates 
// the sum of all elements in an array.
function sumArr(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        if(typeof arr[i] === 'number'){
            sum += arr[i];
        }
    }
    return sum;
}
console.log(sumArr(['going',1,2,3,4,5,'am',5]));
//Filter Array: Implement a function that filters out 
// elements from an array based on a given condition.
function filterArray(arr,elem){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] != elem) newArr.push(arr[i]);
    }
    return newArr;
}
console.log(filterArray([1,2,3,4,'am',5,'going'],'am'));
//Prime Number Check: Create a function to check if a number is prime or not.
function checkPrimeNumber(num) {
    let isPrime = true;
    if(num === 1){
        return `${num} is not a prime number.`;
    }
    else if(num > 1){
        for(let i = 2; i <= num / 2; i++){
            if(num % i == 0){
                isPrime = false;
            }
        }
    }
    if(isPrime){
        return `${num} is a prime number.`;
    }
    else{
        return `${num} is not a prime number.`;
    }
}
console.log(checkPrimeNumber(29));