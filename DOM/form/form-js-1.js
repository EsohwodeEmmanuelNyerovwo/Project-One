function validateForm(event) {
    event.preventDefault();

    var name = document.loginForm.name.value;

    var pwd = document.loginForm.password.value;

    if(name.length === 0){
        return alert(`name is required`);
    }
    if(pwd.length < 5){
        return alert(`password length should be more than 5`);
    }
}