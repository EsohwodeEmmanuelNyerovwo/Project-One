const superhero = {
    name: 'Emmy',
    power:'Supernatural strength and speed',
    introduce(){
        console.log(`${this.name} is ${this.power}`);
    },
    usePower(){
        console.log(`I use ${this.power} to fight.`);
    }
}
superhero.introduce();
superhero.usePower();
// const person2 = {
//     name:"Emmy",
//     age:21,
//     city:"Abj",
//     introduce(){
//         console.log(this.name);
//     }
// }
// person2.introduce();
// console.log(person2.age);
// person2.age = 22;
// console.log(person2.age);