let users = [];

async function init(){

        loadUsers();
}

async function loadUsers(){
    users = await getItem('users');
}

async function register(){
    register.disabled = true;
    users.push({
        email: email.value,
        password: password.value,
    });
    await setItem('users', JSON.stringify(users));
    resetForm();
}

function resetForm(){
    email.value = '';
    password.value = '';
    registerBtn.disabled = false;
}