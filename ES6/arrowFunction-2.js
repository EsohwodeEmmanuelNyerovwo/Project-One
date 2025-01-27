const person = {
    name: 'Nathan',
    skills : ['HTML','css','javascript'],
    showKills: function(){
        this.skills.forEach(skill => console.log(`${this.name} is skilled in ${skill}`));
    },
};
person.showKills();