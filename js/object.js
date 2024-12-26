// var adam = {
//     name:'Adam',
//     age: 18,
//     wasExpelledFromHeaven:true,
//     greet:function(){return "Hi, my name is Adam";}
// }
// console.log(adam.greet());
// console.log(adam.name);
// console.log(adam["age"]);
const gimli = {
    name:'Gimli',
    race:'dwarf',
    weapon:'axe',
    greet:function() {
        return `Hi,my name is ${gimli.race}`;
    }
};
console.log(gimli);
// gimli.age = 13;
gimli['age'] = 14;
gimli.fight = function(){
    return `Gimli attack with an ${this.weapon}`;
}
console.log(gimli);
// console.log(gimli.name);
console.log(gimli.fight());
gimli.weapon = "epic battle axe";
console.log(gimli);