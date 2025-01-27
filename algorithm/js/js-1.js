const prompt = require("prompt-syn")();
//Installing npm prompt-syn- https://www.youtube.com/watch?v=4wYkIGhCkzU
//Using prompt-sync - https://www.codecademy.com/article/getting-user-input-in-node-js
const deposit = () =>{
    const depositAmount = prompt("Enter a deposit Amount: ");
    const numDepositAmount = parseFloat(depositAmount);

    if(isNaN(numDepositAmount) || numDepositAmount <= 0){
        console.log("Invalid deposit amount, try again");
    }
}