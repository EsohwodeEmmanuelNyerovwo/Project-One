const num = [1,2,3,4];
//traditional for loop
// for (let i = 0; i < num.length; i++) {
//     console.log(num[i])
// }
//using forEach
// num.forEach(item =>console.log(item));
//using forEach with 2 parameters
num.forEach((n,i)=>{
    console.log(`Index: ${i+1} is at ${n} ${num}`);
});
// num.forEach((n,i)=>{
//     i+=1;
//     if(i % 2 == 0){
//         console.log(`Index: ${i} is at ${n}`);
//     }
// })