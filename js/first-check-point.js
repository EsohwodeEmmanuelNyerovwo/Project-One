//Remember a program to count even, odd numbersin a program.
function countEvenOddZeroes(num) {
	let even = 0;
	let odd = 0;
	let zero = 0;

	for(let i = 0; i < num.length; i++){
		if(num[i] % 2 == 0) even++;
		if(num[i] % 2 == 1) odd++;
		if(num[i] == 0) zero++;
	}
	return [even,odd,zero];
}
// console.log(countEvenOddZeroes([1,2,3,4,5,0,4,2,7,0,0,0,15,21]));
//Printing even numbers b4 odd numbers in an array
function evenB4Odd(num) {
	let newArr = [];
	for(let i = 0; i < num.length; i++){
		// if(num[i] % 2 === 0){
			newArr.unshift(num[i]);
		// }
	}
	return newArr;
}
console.log(evenB4Odd([1,5,2,6,8,3,3,12,9]));
/*
Find the Smallest and Biggest Numbers
function minMax(arr) {
	let min = arr[0];
	let max = arr[0];
	for(let i = 0; i < arr.length; i++){
		if(arr[i] < min) min = arr[i];
		if(arr[i] > max) max = arr[i];
	}
	return [min,max];
}
//Sum of Cubes
function sumOfCubes(nums) {
	let sum = 0;
	for(let i = 0; i < nums.length; i++){
		if(nums[i] === []) return 0;
		sum += nums[i] ** 3;
	}
	return sum;
}
//Filter out Strings from an Array
function filterArray(arr) {
	let newArr = [];
	for(let i = 0; i < arr.length; i++){
		if(typeof arr[i] === 'number'){
			newArr.push(arr[i])
		}
	}
	return newArr;
}
//Is the Number Symmetrical?
function isSymmetrical(num) {
	let str = '';
	let numStr = num.toString();
	for(let i = numStr.length - 1; i >= 0; i--){
		str = str + numStr[i];
	}
	if(Number(str) === num){
		return true
	}
	else{
		return false
	}
}
//Special Arrays
An array is special if every even index contains an even number and 
every odd index contains an odd number.
Create a function that returns true if an array is special, and false otherwise.
function isSpecialArray(arr) {
	for(let i = 0; i < arr.length; i++){
		if(i % 2 == 0){
			if(arr[i] % 2 !== 0) return false;
		}
		else if(i % 2 == 1){
			if(arr[i] % 2 == 0) return false;
		}
	}
	return true;
}
//Convert Key, Values in an Object to Array
function objectToArray(obj) {
	let newArr = [];
	for(let key in obj){
		newArr.push([key,obj[key]]);
	}
	return newArr;
}
//How Much is True?
Create a function which returns the number of true values there are in an array.
function countTrue(arr) {
	let count = 0;
	for(let i = 0; i < arr.length; i++){
		if(arr[i] === true) count++;
	}
	return count;
}
//Array of Multiples
Create a function that takes two numbers as arguments (num, length) and 
returns an array of multiples of num until the array length reaches length.
function arrayOfMultiples (num, length) {
	let numArr = [];
	let multiple = 0;
	for(let i = 0; i < length; i++){
		multiple +=num;
		numArr.push(multiple);
	}
	return numArr;
}
//25-Mile Marathon
function marathonDistance(d) {
	let sum = 0;
	for(let i = 0; i <d.length; i++){
		sum += Math.abs(d[i]);
	}
	if(sum === 25){
			return true;
		}
		else{
			return false;
		}
}
//Square Every Digit
function squareDigits(n) {
	let str = n.toString();
	let sum = 0;
	let ans = '';
	for(let i = 0; i < str.length; i++){
		sum = Number(str[i]**2);
		ans += sum;
	}
	return Number(ans);
}
//
 */
// function reverseNum(n) {
//     let str = '';
//     for(let i = n.length - 1; i >= 0; i--){
//         str = str[i] + n;
//     }
//     return str;
// }
// console.log(reverseNum(12345));
// function reverseNumber(n) {
//     let str = '';
//     let numStr = n.toString();
//     for (let i = numStr.length - 1; i >= 0; i--) {
//         str = str + numStr[i];
//     }
//     return str;
// }
// console.log(reverseNumber(12345));
// let ans = reverseNumber(12345)
// console.log(typeof Number(ans));
//Find the smallest and biggest numbers
/*Create a function that takes an array of numbers 
and return both the minimum and maximum numbers, in that order.
Examples
minMax([1, 2, 3, 4, 5]) ➞ [1, 5]

minMax([2334454, 5]) ➞ [5, 2334454]

minMax([1]) ➞ [1, 1]
*/
// function minMax(arr) {
//     let min = arr[0];
//     let max = arr[0];
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] < min) min = arr[i];
//         if(arr[i] > max) max = arr[i];
//     }
//     return [min,max];
// }
// console.log(minMax([1, 2, 3, 4, 5]));
// console.log(minMax([2334454, 5]));
// console.log(minMax([1]));
// console.log(minMax([14, 35, 6, 1, 34, 54]));
// console.log(minMax([1.346, 1.6532, 1.8734, 1.8723]));
/*
 */
//https://www.geeksforgeeks.org/javascript-program-to-check-if-a-matrix-is-symmetric/
//https://www.geeksforgeeks.org/how-to-convert-an-object-to-an-array-of-key-value-pairs-in-javascript/
//https://www.shecodes.io/athena/299121-what-is-hasownproperty-in-javascript#:~:text=hasOwnProperty%20is%20a%20method%20in,inherited%20from%20its%20prototype%20chain.