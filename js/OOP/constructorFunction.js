function Superhero(name,power) {
    this.name = name
    this.power = power
    this.introduce = function () {
        console.log(`${this.name} ${this.power}`);
    }
}
const batman = new Superhero('Batman','Money');
// console.log(batman);
batman.introduce();

function Book(title,author,yr) {
    this.author = author
    this.title = title
    this.yr = yr
    this.details = author + title
    this.titleLength = title.length;
    this.getSummary = function () {
        console.log(`${this.title} was written by ${this.author} in ${this.yr}`);
    }
}
const book1 = new Book('js book','Emmy',2010);
book1.getSummary();