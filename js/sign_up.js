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
    let render = ` <div class="sign_up_container">
    <img =class="start_page" src="./img/start_page.svg" alt="logo">
    <div class="sign_up" id="sign_up">
    <div class="sign_up_head">
    <div class="sign_up_title">
    <img onclick="back_to_login" class="arrow_back_blue" src="./img/blue_arrow_back.svg">
    <img class="logo_signup" src="./img/signup.svg">
    <img class="underline_blue" src="./img/underline_blue.svg">
    </div>
    </div>
    <form onsubmit="register(); return false;">
    <input type="name" class="sign_up_name input_sign_up" id="name" required> 
    <input type="email" class="sign_up_email input_sign_up" id="email" required> 
    <input type="password" class="sign_up_email input_sign_up" id="password" required> 
    <button id="registerBtn">Sign up</button></form>
    </div>
    </div>`;
    return render;
}