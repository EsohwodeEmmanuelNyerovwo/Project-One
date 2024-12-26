let str = `As sly as a fox, as strong as an ox`.toLowerCase();
console.log(str.includes('as'));
for(let i = 0; i < str.length; i++){
    if(str.includes('as')){
        console.log(str.indexOf('as'));
    }
}
//https://www.techopedia.com/definition/945/document-object-model-dom
//https://www.programiz.com/javascript/examples/prime-number
//https://www.geeksforgeeks.org/program-to-print-first-n-fibonacci-numbers/
//https://www.geeksforgeeks.org/program-for-nth-fibonacci-number/
//https://www.quora.com/What-is-a-simple-algorithm-to-find-a-prime-number
//https://www.freecodecamp.org/news/javascript-capitalize-first-letter-of-word/
//https://www.freecodecamp.org/news/how-to-capitalize-words-in-javascript/
//https://www.geeksforgeeks.org/javascript-array-slice-method/
// let target = 'as';
// let pos = 0;
// // for (let pos = 0; pos < str.length; pos++) {
// //     let foundPos = str.indexOf(target,pos);
// //     console.log(foundPos);
// // }
// function tryString(str) {
//     let target = 'as';
//     let pos = 0;
//     let foundPos = 0;
//     for(pos = 0; pos < str.length; pos++){
//         foundPos = str.indexOf(target,pos);
//     }
//     return foundPos;
// }
// console.log(tryString(str));
// while (true) {
//     let foundPos = str.indexOf(target,pos);
//     console.log(foundPos);
//     if(foundPos === -1) break;
//     console.log(`Found at ${foundPos}`);
//     pos = foundPos + 1;
// }
// console.log(str.indexOf('id',2));
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str[0].toUpperCase());
// str = 'm' + str[1]+str[2]+str[3]+str[4];
// for(let char of str){
//     console.log(char);
// }
// console.log(str[0]);
// console.log(str.at(0));
// console.log("----------------");
// console.log(str[str.length -2]);
// console.log(str.at(-2));
//console.log("I'm".length);
// console.log("The \"backlask\": \\");
// console.log("I'm Emmy");
// let str1 = "Hello\nWorld";
// console.log(str1);
// let str2 = `Hello
// World`;
// console.log(str2);
// console.log(str1 == str2);
// let guestList = "Guests:\n * John\n * pete\n * Mary";
// console.log(guestList);