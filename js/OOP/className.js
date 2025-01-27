class Animal {
    constructor(name,color) {
        this.name = name,
        this.color = color
    }
    getColor(){
        console.log(`${this.name} is ${this.color}`);
    }
}
const dog = new Animal('dog','brown');
console.log(dog);
class Cat extends Animal{
    constructor(name,color,sound){
        super(name,color)
        this.sound = sound;
    }
    makeSound(){
        console.log(`${this.name} makes ${this.sound}`);
    }
}
const cat1 = new Cat('pet','white','meows');
console.log(cat1);
// const arr = [];
//         const rand = () =>{
//         for (let i = 0; i < 3; i++) {
//             arr.push(Math.floor(Math.random()*255));
//             }
//             return arr;
//         }
// console.log(rand());
// const randIndex = rand();
// console.log(randIndex[0]);
// class Book{
//     #titleLength;
//     constructor(author,title,yr){
//         this.author = author,
//         this.title = title
//         this.yr = yr
//         // this.titleLength = title.length
//         this.#titleLength = title.length
//     }
    // getSummary(){
    //     console.log(`The ${this.title} was written by ${this.author} in ${this.yr}`);
    // }
    // getSummary(){
    //     console.log(`The ${this.title} was written by ${this.author} in ${this.yr} has ${this.#titleLength}`);
    // }
// //     get getSummary(){
// //         return `The ${this.title} was written by ${this.author} in ${this.yr} has ${this.#titleLength}`;
// //     }
// //     set updateYr(newYr){
// //         this.yr = newYr;
// //     }
// // }
// // let book2 = new Book('Emmy','Js book',2010);
// // book2.getSummary;
// book2.updateYr = 2000;
// console.log(book2.yr);