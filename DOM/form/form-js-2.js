function validateForm(event) {
    event.preventDefault();

    let name = document.loginForm.name.value;
    let password = document.loginForm.name.value;

    let errName = document.getElementById('ShowErrorName');
    errName.style.color = 'brown';

    let errPass = document.getElementById('showErrorPassword');
    errPass.style.color = 'brown';

    if (name.length === 0) {
        errName.innerHTML = 'Name Required';
        // return alert('Name Required');
    }
    else if(password.length < 5){
        errPass.innerHTML = 'Password too short';
        // return alert('Password too short');
    }
}