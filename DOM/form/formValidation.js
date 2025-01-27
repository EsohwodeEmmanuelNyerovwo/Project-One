const display = document.getElementById('error');
const nm = document.getElementById('name');
const pass = document.getElementById('password');
// const fm = document.getElementById('form');

form.addEventListener('submit',(e)=>{
    let mes = [];
    if(nm.value === '' || nm.value === null){
        mes.push('Name is required');
        // return;
    }
    if(pass.value.length <= 6) mes.push('too short');
    if (mes.length > 0) {
        e.preventDefault();
        display.innerText = mes.join(', ');   
    }
})