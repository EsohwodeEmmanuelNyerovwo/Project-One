//Weather Clothing Adviser: Develop a program that asks the user for the current 
// temperature and whether it is raining or not.
// Based on this information, advise the user on what clothing to wear.
function getCurrentTemp(currentTemp) {
    let weather;
    switch (currentTemp) {
        case 'hot':
            weather = 'It is not raining';
            break;
        case 'cold':
            weather = 'It is raining';
            break;
        default:
            break;
    }
    return weather;
}
console.log(getCurrentTemp('cold'));
const temp = getCurrentTemp('cold');
if(temp === 'cold') alert('wear a rain suits')
else console.log('wear a linen');
//Ticket Pricing: Write a program that prompts the user to enter their age 
// and then determines the price of a movie ticket based on the following criteria:
// -Children (age <= 12): $10
// -Teenagers (age 13-17): $15
// -Adults (age >= 18): $20
// let movieTicketPrice;
// const age = prompt('Enter your age');
// if (age <= 12) movieTicketPrice = `Children ticket: $10`;
// else if (age >= 13 && age <= 17) movieTicketPrice = `Teenagers ticket: $15`;
// else if(age >= 18) movieTicketPrice = `Adults ticket: $20`;
// alert(movieTicketPrice);
//Implement a recursive function to generate the nth Fibonacci number. The Fibonacci sequence starts with 0 and 1, and each subsequent number is 
// the sum of the two preceding numbers (0, 1, 1, 2, 3, 5, 8, ...).
function nthFib(n){
    if (n <= 1) {
        return n;
    }
    return nthFib(n - 1) + nthFib(n - 2);
}
console.log(nthFib(5));
//Power Function: Write a recursive function to calculate the 
// result of raising a number to a given power.
function calculatePower(base,power) {
    if (power === 0) {
        return 1;
    }
    return base * calculatePower(base, power - 1);
}
console.log(calculatePower(3,3));