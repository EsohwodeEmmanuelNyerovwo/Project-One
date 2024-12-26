function calculate() {
    let scoreArr = [];
    let score = 0;
    let count = 0;
    if(document.getElementById('correct1').checked){
        score+=10;
        scoreArr.push(score);
        // scoreArr.push(count++);
    }
    if(document.getElementById('correct2').checked){
        score+=10;
        scoreArr.push(score);
        // scoreArr.push(count++);
    }
    if(document.getElementById('correct3').checked){
        score+=10;
        scoreArr.push(score);
        // scoreArr.push(count++);
    }
    if(document.getElementById('correct4').checked){
        score+=10;
        scoreArr.push(score);
        // scoreArr.push(count++);
    }
    if(score == 0){
        alert("Do u want to submit")
        scoreArr = [];
    }
    else{
        alert(`You scored ${score} out of ${(scoreArr.length)}`);
    }
    // alert((scoreArr.length)+1);
    // alert(score);
}
// const inputs = document.querySelectorAll('.ques');
// console.log(inputs[0].value);
// function calculate() {
//     const newArr = [];
//     if(inputs[1].value){
//         newArr.push(inputs[1].value);
//     }
//     return newArr;
//     // for (let i = 0; i < inputs.length; i++) {
//     //     // console.log(inputs[i].value);
//     //     if(inputs[i].value == 4){
//     //         return 'correct';
//     //     }
//     // }
//     // return 'Incorrect';
// }
// console.log(calculate());
// for (let i = 0; i < inputs.length; i++) {
//     // console.log(inputs[i].value);
//     if(inputs[i].value == 4){
//         console.log('correct');
//     }
//     else{
//         console.log('Incorrect');
//     }
    
// }
// const inputs = document.querySelectorAll('input[type="radio"]');
// const selectedGender = document.querySelector('#selectedGender');
// console.log(inputs[0].checked);
// function onGenderChange(event) {
//     let count = 0;
//     let v = event.target.value;
//     // selectedGender.innerHTML = event.target.value=='Male'?'Female'
//     if(event.target.value === 'Male'){
//         for(let i = 0; i < v.length; i++){
//             count++;
//         }
//         selectedGender.innerHTML = `${event.target.value} ${count}`;
//     }
//     else{
//         selectedGender.innerHTML = 'Female';
//     }
//     return count;
// }
// function calculate() {
//     let newArr;
//     let elem = document.getElementsByName('question');
//     for(let i = 0; i < elem.length; i++){
//         if(elem[i].checked){
//             // alert(elem[i].value);
//             if(elem[i].value == 4)
//             newArr = elem[i].value;
//             // return newArr
//         }
//     }
//     return newArr;
// }
// calculate();
// console.log(calculate());