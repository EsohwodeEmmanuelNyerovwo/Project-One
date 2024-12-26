const hexCharacters = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const box = document.getElementById('color-box');
const btn = document.getElementById('change-color-btn');
function getCharacter(index) {
    return hexCharacters[index];
}
function generateJustOneColor() {
    let hexColorRep = '#';
    for (let position = 0; position < 6; position++) {
        const randomPos = Math.floor(Math.random()*hexCharacters.length);
        hexColorRep += getCharacter(randomPos);
    }
    return hexColorRep;
}
console.log(generateJustOneColor());
btn.addEventListener('click',(event)=>{
    box.style.backgroundColor = generateJustOneColor();
})
// function getRandomColor() {
//     let hashSymbol = '#';
//     for (let i = 0; i < 6; i++) {
//         hashSymbol += Math.floor((Math.random()*6)+1);
//     }
//     return hashSymbol;
// }
// function generateRandon() {
//     const newArr = [];
//     let hashSymbol = '#';
//     for (let i = 0; i < 6; i++) {
//         hashSymbol += Math.floor(Math.floor(Math.random()*6)+1);
//         // d.innerHTML += Math.floor(Math.floor(Math.random()*6)+1);
//         // newArr.push(Math.floor(Math.floor(Math.random()*6)+1));
//         // console.log(Math.floor(Math.floor(Math.random()*6)+1));
//     }
//     return hashSymbol;
//     // return newArr;
// }
// d.style.backgroundColor = getRandomColor();
// const r = generateRandon();

// for (const element of r) {
//     console.log(element);
//     d.innerHTML += `${element}`;
// }