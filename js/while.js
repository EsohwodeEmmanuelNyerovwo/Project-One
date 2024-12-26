var nameOfWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
console.log(nameOfWeek.indexOf(0));
console.log(nameOfWeek.indexOf(1));
// console.log(nameOfWeek);
// delete nameOfWeek[3];
// console.log(nameOfWeek);
// for(var i in nameOfWeek){
//     console.log(nameOfWeek[i]);
// }
// var num = [19,65,1,2,6,1,9,9,2,1];
// console.log(num[num.length-1]);//Accessing the last value in the array
// console.log(num.length - 1);//Accessing the last index in the array
// console.log(num.length);//Accessing the total number of elements in the array
// var sum = 0;
// for (var key in num) {
//     sum += num[key];
//     if (sum >= 100){
//         break;
//     }
// }
// console.log(sum);
/*
Why bother iterating an "i" variable if a loop can take care of it for us?



The for… in loop
The for… in loop enumerates all the available indices of the values present in the array in ascending order.



The for… of loop
Why bother using a variable for iteration at all, if we could enumerate the values of the array?
In ES6, there is a loop called the for…of loop, which does exactly that.
 */
// var sum = i = 0;
// var txt = "";
// for (; i < num.length;) {
//     txt += num[i] + "<br/>";
//     i++;
// }
// document.getElementById('demo').innerHTML=txt;
// do {
//     sum += num[i];
//     i++;
// } while (i < num.length);
// console.log(`sum = ${sum}`);
// console.log(`The loop was executed ${i} times.`);
// var sum = 0;
// var i = 0;
// while (i < num.length) {
//     // (i+1);//total number in the array
//     sum += i//sum of the index of the array
//     // sum += num[i];//sum of the array
//     i++;
// }
// // console.log(`The sum of the array is ${sum}`);
// console.log(`The sum of the index in the array is ${sum}`);
// console.log(`The loop executed ${i} numbers times.`);
//Getting even numbers in the array
// while (i < num.length) {
//     if (i % 2 == 0) {
//         console.log(i);//Getting the index of the even numbers
//         sum += num[i];//Summing the even index
//         i++;
//     }
//     i++;
// }
// console.log(`The sum of the even index is ${sum}.`);
