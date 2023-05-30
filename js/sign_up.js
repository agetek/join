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


function renderSignUpForm(){
    let render = ` <div class="sign_up" id="sign_up">
    <div class="sign_up_head">
    <div class="sign_up_title">
    <img onclick="back_to_login" class="arrow_back_blue" src="./img/blue_arrow_back.svg">
    <img class="logo_signup" src="./img/signup.svg">
    <img class="underline_blue" src="./img/underline_blue.svg">
    </div>
    </div>
    <form onsubmit="register(); return false;">
    <input type="email" id="email" required> 
    <input type="password" id="password" required> 
    <button id="registerBtn">Registrieren</button></form>
    </div>`;
    return render;
}