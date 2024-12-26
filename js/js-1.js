let guestList = `
	Guests:
		* John
		* Pete
		* Mary
`;
console.log(guestList);
//Addition of 2 numbers
// function sum(a,b) {
// 	return a + b;
// }
// let f = sum(3,0);
// let s = sum(0,5);
// let total = f + s;
// console.log(`${f}+ ${s} = ${total}`);
//for...in returns index for array/key for object and for...of returns values
// let output = document.querySelector('h3');
// let input = document.querySelector('input');
// function solve(operation) {
// 	switch (operation) {
// 		case 'add':
// 			output.textContent = +output.textContent + Number(input.value);
// 			break;
// 		case 'sub':
// 			output.textContent = +output.textContent - +input.value;
// 			break;
// 		case 'divide':
// 			output.textContent = +output.textContent / +input.value;
// 			break;
// 		case 'multiply':
// 			output.textContent = +output.textContent * +input.value;
// 			break;
// 		default:
// 			alert('Invalid Operation');
// 			break;
// 	}

	// if (operation === 'add') {
	// 	output.textContent = +output.textContent + Number(input.value);
	// }
	// else if (operation === 'sub') {
	// 	output.textContent = +output.textContent - +input.value;
	// } else if (operation === 'divide') {
	// 	output.textContent = +output.textContent / +input.value;
	// } else if (operation === 'multiply') {
	// 	output.textContent = +output.textContent * +input.value;	
	// }
//}
// let output = document.querySelector('h2');
// let input = document.querySelector('input');
// function name(params) {
	
// }
// function add() {
// 	output.textContent = +output.textContent + Number(input.value);
// }
// function sub(){
// 	output.textContent = +output.textContent - +input.value;
// }
// function divide() {
// 	output.textContent = +output.textContent / +input.value;
// }
// function multiply() {
// 	output.textContent = +output.textContent * +input.value;
// }
// const obj = {
// 	male: 4,
// 	female: 93,
// 	others: 10
//   };
// for(let val in obj){
// 	console.log([val,obj[val]]);
// }
// function sqrDig(n){
// 	let str = n.toString();
// 	let s;
// 	let answer=''
// 	for (let i = 0; i < str.length; i++) {
// 		s = Number(str[i]**2);
// 		answer+=s;
// 	}
// 	return Number(answer);
// }
// console.log(sqrDig(1234567));
// function turnOn() {
//     let light = document.querySelector('img')
//     // light.setAttribute('src','./light-on.jpg');
//     if(light){
//         light.setAttribute('src','./light-on.jpg');
//     }
//     else{
//         light.setAttribute('src','./light-off.jpg');
//     }
//     // console.log(light);
// }
// function turnOff() {
//     let light = document.querySelector('img')
//     // light.setAttribute('src','./light-on.jpg');
//     if(!light){
//         light.setAttribute('src','./light-on.jpg');
//     }
//     else{
//         light.setAttribute('src','./light-off.jpg');
//     }
//     // console.log(light);
// }
// function sqr(n){
//     let total = 0;
//     for(let i = 1; i <= n; i++){
//         // total
//         console.log(i**2);
//     }
//     // return total;
// }
// console.log(sqr(4));
// function specialArr(arr){
//     for(let i = 0; i < arr.length; i++){
//         if((i % 2 == 0 && arr[i] % 2 == 0) || (i % 2 == 1 && arr[i] % 2 == 1)){
//             return true;
//         }
//         else{
//             return false;
//         }
//     }
// }
// console.log(specialArr([12,1,32,5,54,5,78,7,80,1]));
//Reversed Number
// function reverse(num) {
//     let s = '';
//     for (let i = num.length -1; i >= 0; i--) {
//         s = s + num[i];
//     }
//     return s;
// }
/*
Convert Key, Values in an Object to Array
Write a function that converts an object into an array of keys and values.

Examples
objectToArray({
  D: 1,
  B: 2,
  C: 3
}) ➞ [["D", 1], ["B", 2], ["C", 3]]

objectToArray({
  likes: 2,
  dislikes: 3,
  followers: 10
}) ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]]
 function objectToArray(obj) {
	let answer=[]
	for(let val in obj){
		answer.push([`${val}`,obj[val]])
	}
	return answer
}
Create a function that takes a number as an argument and returns true or false 
depending on whether the number is symmetrical or not. 
A number is symmetrical when it is the same as its reverse.
isSymmetrical(7227) ➞ true

isSymmetrical(12567) ➞ false

isSymmetrical(44444444) ➞ true

isSymmetrical(9939) ➞ false

isSymmetrical(1112111) ➞ true
//solution
function isSymmetrical(num) {
	let str = '';
	let n = num.toString()
	for(let i = n.length - 1; i >= 0; i--){
		str = str + n[i];
	}
	if(str === n){
		return true;
	}
	else{
		return false;
	}
}
Find the Smallest and Biggest Numbers
Create a function that takes an array of numbers and return both the minimum and 
maximum numbers, in that order.

Examples
minMax([1, 2, 3, 4, 5]) ➞ [1, 5]

minMax([2334454, 5]) ➞ [5, 2334454]

minMax([1]) ➞ [1, 1]
Notes
All test arrays will have at least one element and are valid.
solution
function minMax(arr) {
	let min = arr[0];
	let max = arr[0];
	for(let i = 0; i < arr.length; i++){
		if(arr[i] < min){
			min = arr[i];
		}
		if(arr[i] > max){
			max = arr[i];
		}
	}
	return [min,max];
}
Sum of Cubes
Create a function that takes in an array of numbers and returns the sum of its cubes.

Examples
sumOfCubes([1, 5, 9]) ➞ 855
// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855

sumOfCubes([3, 4, 5]) ➞ 216

sumOfCubes([2]) ➞ 8

sumOfCubes([]) ➞ 0
Notes
If given an empty array, return 0.
solution
function sumOfCubes(nums) {
	let sum = 0;
	for(let i = 0; i < nums.length; i++){
		if(nums){
			sum += nums[i] ** 3;
		}
		else{
			sum = 0;
		}
	}
	return sum;
}
Filter out Strings from an Array
Create a function that takes an array of non-negative integers and strings and 
return a new array without the strings.

Examples
filterArray([1, 2, "a", "b"]) ➞ [1, 2]

filterArray([1, "a", "b", 0, 15]) ➞ [1, 0, 15]

filterArray([1, 2, "aasf", "1", "123", 123]) ➞ [1, 2, 123]
Notes
Zero is a non-negative integer.
The given array only has integers and strings.
Numbers in the array should not repeat.
The original order must be maintained.
solution
function filterArray(arr) {
	let newArr = [];
	for(let i = 0; i < arr.length; i++){
		if(arr[i] === Number(arr[i])){
			newArr.push(arr[i]);
		}
	}
	return newArr;
}
//
An array is special if every even index contains an even number
and every odd index contains an odd number.
Create a function that returns true if an array is special, and false otherwise.
isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3]) ➞ true
// Even indices: [2, 4, 6, 6]; Odd indices: [7, 9, 1, 3]

isSpecialArray([2, 7, 9, 1, 6, 1, 6, 3]) ➞ false
// Index 2 has an odd number 9.

isSpecialArray([2, 7, 8, 8, 6, 1, 6, 3]) ➞ false
// Index 3 has an even number 8.
//solution
function isSpecialArray(arr) {
	for(let i = 0; i < arr.length; i++){
		if(i%2===0){
			if(arr[i]%2!==0){
				return false
			}	
		}else{
			if(arr[i]%2===0){
				return false
			}
		}
	}			
	return true
}
//
Create a function which returns the number of true values there are in an array.

Examples
countTrue([true, false, false, true, false]) ➞ 2

countTrue([false, false, false, false]) ➞ 0

countTrue([]) ➞ 0
Notes
Return 0 if given an empty array.
All array items are of the type bool (true or false).
//solution
function countTrue(arr) {
	let count = 0;
	for(let i = 0; i < arr.length; i++){
		if (arr[i] === true){
			count++;
		}
	}
	return count;
}
//
Create a function that takes two numbers as arguments (num, length) 
and returns an array of multiples of num until the array length reaches length.

Examples
arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]

arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]

arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102]
solution
function arrayOfMultiples (num, length) {
	let sum = 0;
	let newArr = []; 
	for(let i = 1; i <= length;i++){
		sum += num;
		newArr.push(sum);
	}
	return newArr;
}
//
25-Mile Marathon
Mary wants to run a 25-mile marathon. When she attempts to sign up for the marathon,
she notices the sign-up sheet doesn't directly state the marathon's length.
Instead, the marathon's length is listed in small, different portions.
Help Mary find out how long the marathon actually is.

Return true if the marathon is 25 miles long, otherwise, return false.

Examples
marathonDistance([1, 2, 3, 4]) ➞ false

marathonDistance([1, 9, 5, 8, 2]) ➞ true

marathonDistance([-6, 15, 4]) ➞ true
Notes
Items in the array will always be integers.
Items in the array may be negative or positive,
but since negative distance isn't possible,
find a way to convert negative integers into positive integers.
Return false if the arguments are empty or not provided.
solution
function marathonDistance(d) {
	let sum =0;
	for(let i = 0; i < d.length; i++){
		sum += Math.abs(d[i]);
	}
	if(sum === 25){
		return true;
	}
	else{
		return false;
	}
}
//
Square Every Digit
Create a function that squares every digit of a number.
Examples
squareDigits(9119) ➞ 811181

squareDigits(2483) ➞ 416649

squareDigits(3212) ➞ 9414
Notes
The function receives an integer and must return an integer.
solution
function squareDigits(n) {
	let str = n.toString();
	let s;
	let answer=''
	for (let i = 0; i < str.length; i++) {
		s = Number(str[i]**2);
		answer+=s
	}
	return Number(answer)
}
*/
// function squareDigits(n) {
// 	let s = [];
// 	for(let i = 0; i < n; i++){
// 		s.push(n)
// 	}
// 	return s;
// }
// console.log(squareDigits(12345));
// function isSymmetrical(num) {
// 	let str = '';
// 	let n = num.toString()
//     console.log(typeof n);
// 	for(let i = n.length - 1; i >= 0; i--){
// 		str = str + n[i];
// 	}
// 	if(str == n){
// 		return true;
// 	}
// 	else{
// 		return false;
// 	}
// }
// console.log(isSymmetrical(7227));
// // mult(1,2,3,4,5,6,7);
// function even(arr) {
//     for(let i = 0; i < arr.length;i++){
//         if(arr[i] % 2 == 0){
//             console.log(i);
//         }
//     }
// }
// // even([1,2,3,4,5,6]);
// // console.log(reverse('12345'));
// //newStr = str[i] + newStr;
// function reverseNumber(n) {
//     let s = 0;
//     for (let i = 0; i < n; i++) {
//         s = n + s;
//     }
//     return s;
// }
// console.log(reverseNumber(12345));
// console.log((1&&2)??3);
// let login = prompt('Pls login');
// if(login === 'Admin'){
//     let ps = prompt('Enter password');
//     if (ps === 'TheMaster') {
//         alert('Welcome')
//     }
//     else if (ps === '' || ps === null) {
//         alert('Cancelled');
//     }
//     else{
//         alert('Wrong Password');
//     }
// }
// else if (login === '' || login === null) {
//     alert('cancelled');
// }
// else{
//     alert('U must be an admin to login');
// }
// alert(null || 2 && 3 || 4);
// let fn = "",ln = "",nm = "Supercode";
// console.log(fn||ln||nm||'anonymous');
// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);
// let message = (login == 'Employee')?'Hello':
//     (login == 'Director')?'Greetings':
//     (login == '')?'No login':'';
// let result = (a + b < 4)?'Below':'Over';
// let num = +prompt('Enter number:','');
// if(num > 0){
//     console.log(1)
// }
// else if(num < 0){
//     console.log(-1)
// }
// else{
//     console.log(0)
// }
// let nm = prompt('What is the official name js','');
// if(nm === 'ECMAScript'){
//     console.log('Right!')
// }
// else{
//     console.log('U don\'t know');
// }
// let value = (nm === 'ECMAScript')? console.log('Right!'):console.log('U don\'t know');
// if("0"){
//     alert('hello');
// }
// let age = prompt("Hw old are u?",'');
// let message = (age < 3)?'Hi baby':(age < 18)?'Hello!':(age < 100)?'Greetings':
//     'What an unusual age!';
// console.log(message);
// let accessAllowed;
// accessAllowed = age > 18?'Eligible':'not eligible';
// console.log(accessAllowed);
// if (age > 18) {
//     accessAllowed = true;
// }
// else{
//     accessAllowed = false;
// }
// console.log(`${age} has access`);
// let yr = prompt("Which yr");
// if(yr < 2015){
//     alert('correct');
// }
// else if(yr > 2015){
//     alert('Try again!');
// }
// else{
//     alert('Exactly');
// }
//https://www.geeksforgeeks.org/road-block/?to=https%3A%2F%2Fwww.geeksforgeeks.org%2Flinear-search%2F%3Fref%3Doutind
// console.log(5 > 4);//true
// console.log("apple" > "pineapple");//false
// console.log("2" > "12");//true
// console.log(undefined == null);//true
// console.log(undefined === null);//false
// console.log(null == null);//
// console.log(null == undefined);
// console.log(true == 1);
// console.log(false == 0);
// let a = +prompt("First Number?",1);
// let b = +prompt("Second number?",2);
// console.log(a+b);
// console.log(" " - 2);
// console.log(typeof "4px"-2);
// let s = ""-1+0;
// console.log(typeof s+2);
// console.log(""+1+0);
// console.log(""-1+0);
// console.log(true+false);
// console.log(6/"3");
// console.log(4+5+"px");
// console.log("$"+4+5);
// console.log("4"-2);
// console.log("4px"-2);
// console.log(" -9 " + 5);
// console.log(" -9 "- 5);
// console.log(null + 1);
// console.log(undefined+1);
// console.log(" \t \n" - 2);
// let a = 1,b=1;
// let c = ++a;//2
// // alert(c);
// let d = b++;//1
// alert(d);
// let value = true;
// alert(typeof value);
// value = String(value);
// alert(typeof value);
// let con = confirm('Have u done it?')
// if (con) {
//     alert('k')
// }
// else{
//     alert('y');
// }
// let name = prompt('What is ur name?','');
// if(name){
//     alert(`My name is ${name[0].toUpperCase()}${name.slice(1)}!`);
// }
// const arrayOfObject = [
//     {id:1,name:"Alice",age:25,city:"New York",occupation:"Engineer"},
//     {id:2,name:"Bob",age:30,city:"Los Angeles",occupation:"Designer"},
//     {id:3,name:"Charlie",age:35,city:"Chicago",occupation:"Developer"},
//     {id:4,name:"David",age:28,city:"Miami",occupation:"Doctor"},
//     {id:5,name:"Eva",age:22,city:"Seattle",occupation:"Teacher"},
//     {id:6,name:"Frank",age:40,city:"Houston",occupation:"Lawyer"},
//     {id:7,name:"Grace",age:32,city:"Austin",occupation:"Artist"},
//     {id:8,name:"Hannah",age:27,city:"Denver",occupation:"Writer"},
//     {id:9,name:"Isaac",age:29,city:"Phoenix",occupation:"Photographer"},
//     {id:10,name:"Jack",age:33,city:"San Francisco",occupation:"Musician"}
// ]
// const field = prompt("Who do u want to know about: ");
// let person = {};
// for(let ind of arrayOfObject){
//     if(ind.name.toLowerCase() === field.toLowerCase()){
//         person = ind;
//         break;
//     }
// }
// if(person.name){
//     const what = prompt(`what do u want to know about ${person.name}?`);
//     alert(`${what}: ${person[what]}`);
// }
// else{
//     alert('No such person');
// }
// function findName(obj,nm){
//     for (let i = 0; i < array.length; i++) {
//         if (obj[]) {
            
//         }
//     }
// }
// var a = 3;
// switch (a) {
//     case 4:
//         alert('Exactly')
//         break;

//     default:
//         alert('I don\'t know such values');
//         break;
//     case 3:
//         alert('Too small');
//         break;
//     case 5:
//         alert('Too large');
//         break;
// }
// function decodeColor(code) {
//     switch(code){
//         case 1:
//             return 'red';
//             // console.log('red');
//             // break;
//         case 2:
//             return 'yellow';
//             // console.log('Yellow');
//             // break;
//         case 3:
//             return 'blue';
//             // console.log('Blue');
//             // break;
//         default:
//             return 'unknown code';
//             // console.log('Unknown code');
//     }
// }
// console.log(decodeColor(4));
// function checkIfNum(x){
//     if (typeof x === 'number') {
//         console.log(x + ' is a number.');
//     }
//     else{
//         console.log(x + ' is not a number.')
//     }
// }
// checkIfNum('5');
// function greet(name) {
//     return `Hello ${name.toUpperCase()}`;
// }
// const greet =(name) =>`Hello ${name.toUpperCase()}`;
// let greet =name =>"Hello" + name.toUpperCase();
// console.log(greet('adam'));
// console.log(greet('emmy'));
// let num = 0;
// function myFunction(){
//     // num++;
//     document.getElementById('demo').innerHTML=num++;
//     // console.log(num++);
// }
// var cube = function (n) {
//     n*n*n;
// }
// console.log(cube());
// console.log(cube(10));
// var subtract =  a - b;
// console.log(subtract(5,6));
// function add(a,b){
//     return a+b;
// }
// console.log(add(5,2));
// var name = 'Lucky'
// console.log(`yo,${name}`);
// var num1 = prompt('Enter first num:')
// var num2 = prompt('Enter second num:')
// console.log(+num1+(+num2));
// var x = "google";
// x += "." + "com";
// console.log(x);
// var y = 1;
// y = y + '' + 2;
// console.log(y);
// console.log(false && true);
// console.log(6 >= !!Infinity);
// console.log(!!undefined);
// console.log(!!NaN);
// console.log(!!NaN == !!undefined && 6 >= !!Infinity);
// console.log(true || true);
// console.log(true || false);
// console.log(false || false);
// console.log(false || true);
// console.log(!!10);
// console.log(!true);
// console.log(!!0);
// console.log(!!-Infinity);
// console.log(!!null);
// let a = "lorem";
// let b = "rem";
// b = a+b;
// console.log(b);
//Capitalize the first word
// function capitalize(str){
//     let newStr = '';
//     for (let i = 0; i < str.length; i++) {
//         if (i === 0) {
//             newStr = str[0].toUpperCase();
//         }
//         else{
//             newStr += str[i];
//         }
//     }

//     return newStr
// }
// console.log(capitalize('emmy'));
//console.log(null == true);
// var x = 5;
// var y = "5";
// console.log(x != y);
// var x=1;
// console.log(Boolean(x));
// function palindrome(str) {
//     let newstr = '';
//     for (let i = 0; i < str.length; i++) {
//         newstr = str[i] + newstr;
//     }
//     if (newstr === str) {
//         return "It is a palindrone";
//     }
//     else{
//         return "It is not";
//     }
//     // console.log(newstr)
// }
// console.log(palindrome('bobo'));
// let details ={
//     createdAt:'5pm',
//     updatedAt:'7pm'
// }
// let details2 ={
//     createdAt:'5pm',
//     updatedAt:null
// }
// function latestDate(detail) {
//     if (detail.updatedAt) {
//         return detail.updatedAt
//     }
//     else{
//         return detail.createdAt;
//     }
// }
//finding a string in an array
// function finder(arr,str) {
//     for (let i = 0; i < arr.length; i++) {
//         if (str == arr[i]) {
//             return `${str} found at ${i+1}`;
//         }
//     }
//     return'String not found!';
// }
// console.log(finder(['emmy','andy','moses'],'andy'));
// //reversing a string method
// function reverse(str) {
//     let newStr = ''
//     for (let i = 0; i < str.length; i++) {
//         newStr = str[i] + newStr;
//     }
//     return newStr
// }
// console.log(reverse('ben'));
//reversing a string method
// function reverse(str) {
//     let newStr = '';
//     for (let i = str.length-1; i >= 0; i--) {
//         newStr = newStr + str[i];
//     }
//     return newStr;
// }
// console.log(reverse('ben'));
//finding an even number in an array
// function evenFinder(arr){
//     let evenNum = [];
//     let i = 0;
//     while (i < arr.length) {
//         if (arr[i] % 2 === 0) {
//             evenNum.push(arr[i]);
//         }
//         i++;
//     }
//     return evenNum;
// }
// let myArr = evenFinder([1,2,3,4,5,6]);
// console.log(myArr);
// let num = 0;
// console.log(num);
// let y = num++;
// console.log('num'+num+'y'+y);
// console.log(num++);
// console.log(num++);
// console.log(7/5);
// console.log(7%5);
// console.log(5**2);
// let name = "emmy";
// alert(`hello ${1}`);
// alert(`hello ${"name"}`);
// let eg =prompt("Enter ur name:","");
// // console.log(eg);
// if (eg) {
//     console.log(eg);
// }
// else{
//     console.log('can\'t be empty');
// }
// let age;
// console.log(age);
// let isGreater = 4 > 1;
// console.log(isGreater);
// if(isGreater){
//     console.log('continue');
// }
// let nameFieldChecked = true;
// if (nameFieldChecked) {
//     console.log('true');
// }
// let ageFieldChecked = false;
// if (!ageFieldChecked) {
//     console.log('false');
// }
// console.log("not a number"/2);
// console.log(NaN + 2);
// console.log(3*NaN);
// console.log('Not'/2-1);
// console.log(NaN**0);
// let ms = 'message';
// console.log(`My message ${ms}`);
// console.log(2/0);
// console.log(Infinity)
// let ms = 'hello';
// console.log(ms);
// ms = 12345;
// console.log(ms);
// ms += 'emmy';
// console.log(ms);
// function evenFinder(arr){
//     let ar = [];
//     for (let index = 0; index < arr.length; index++) {
//         // const element = array[index];
//         if (arr[index] % 2 == 0) {
//             ar.push(arr[index])
//         }
//     }
//     return ar;
// }
// let even = evenFinder([1,2,3,4,5,6,10,54,88]);
// console.log(even);
// function alphabetize(){
//     const oceans = ["Pacific","Atlantic","Indian","Antartic","Artic"];
//     console.log(oceans.sort())
// }
// alphabetize();
// function myFunction(){
//     let txt;
//     if(confirm('press a button')){
//         txt = "U pressed ok!"
//     }
//     else{
//         txt = "U canceled";
//     }
//     document.getElementById('demo').innerHTML = txt;
//     // confirm('press a button!\nEither Ok or cancel.')
// }
// function myFunction(){
//     alert("\nEmmy");
// }
// function myFunction() {
//     let person = prompt('Pls enter ur name','Harry Porter');
//     if(person){
//         document.getElementById('demo').innerHTML = "Hello "+person+"! How are u today?";
//     }
//     else{
//         alert("Can't be empty");
//         // document.getElementById('demo').innerHTML = "Pls enter ur name";
//     }
// }
// let isCoolWithIt = confirm("Are u ok with it?");
// if (isCoolWithIt) {
//     console.log('yes');
// }
// else{
//     console.log('No');
// }
// var info = prompt("What is ur name: ")
// console.log(info);
// if(!info){
//     console.log('Pls enter ur name')
// }
// else{
//     console.log(info);
// }
// alert(info);
// alert(2+2);
// let name = 'Emmy';
// console.log(name);
// console.log(name);
// var isCoolWithIt = confirm('Are u ok with it?');
// console.log(isCoolWithIt);
// if(isCoolWithIt === true){
//     console.log("Correct");
// }
// else{
//     console.log('Incorrect');
// }
// var visitorName = prompt('What\'s ur name: ')
// alert(visitorName);
// if (!visitorName) {
//     alert("Empty");
//     visitorName = prompt('What\'s ur name: ')
//     alert(visitorName);
// }
//Write a code to capitalize the first word
// console.log(visitorName)
// alert('This is an alert box!')