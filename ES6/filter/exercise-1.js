let users = [
    { name: 'John', age: 25, occupation: 'gardener' },
    { name: 'Lenny', age: 51, occupation: 'programmer' },
    { name: 'Andrew', age: 43, occupation: 'teacher' },
    { name: 'Peter', age: 81, occupation: 'teacher' },
    { name: 'Anna', age: 47, occupation: 'programmer' },
    { name: 'Albert', age: 76, occupation: 'programmer' },
]
let filteredUsers = [];
//Filtering array values using loop
for (let i = 0; i< users.length; i++){
    if (users[i].age > 40 && users[i].occupation === 'programmer') {
        filteredUsers.push(users[i]);
    }
}
// console.log(filteredUsers);
//Filtering array values using loop
let filteredValues = users.filter(elem =>elem.age > 40 && elem.occupation === 'programmer')
.sort((a,b) => a.age - b.age).map(elem => elem.name);
// console.log(filteredValues);

const userDetails = {
    firstName: "Jane",
    lastName: "Daniels",
    userName: "jane.daniels",
    email: "jane.daniels@example.com",
    comapny: "Example Inc.",
    address: "1234 Example Street",
    age : 25,
    hobby: "Singing"
};

const userNames = Object.keys(userDetails)
    .filter((key) => key.includes("Name"))
    .reduce((object, key) => {
        return Object.assign(object, {
          [key]: userDetails[key]
        });
  }, {});

console.log(userNames);