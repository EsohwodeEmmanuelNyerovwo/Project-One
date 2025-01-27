const fn = document.getElementById('fn');
const ln = document.getElementById('ln');
const pass = document.getElementById('pwd');
const fnError = document.getElementById('fnError');
const lnError = document.getElementById('lnError');
const passwordError = document.getElementById('passwordError');
const formValues = [];
const add = () =>{
    const fnVal = fn.value;
    if(!fnVal){
        
        fnError.innerHTML = 'Enter a firstname';
        return;
    }
    const lnVal = ln.value;
    if(!lnVal){
        lnError.innerHTML = 'Enter a lastname';
        return;
    }
    const passVal = pass.value;
    if (!passVal){
        passwordError.innerHTML = 'Fill in password';
        return;
    }
    else if(passVal.length < 7){
        passwordError.innerHTML = 'password too short';
        return;
    }
    formValues.push({Firstname:fnVal,Lastname:lnVal,Password:passVal});
    console.log(formValues);
    fn.value = '';
    ln.value = '';
    pass.value = '';
    render();
}
const show = document.querySelector('.show');
const render = () =>{
    let html = ''
    for (let i = 0; i < formValues.length; i++) {
        html += `${formValues[i].Firstname} --- ${formValues[i].Lastname}`;
    }
    show.innerHTML = html;
}