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



function renderStartPage() {
let render = `<div class="sign_up_container">

<img class="start_page" id="start_page_img" src="./img/start_page.svg" alt="logo">


</div>`

render;
} 



function renderSignUpForm(){
    let render = ` 
    <div class="sign_up_container">
        <div class="sign_up_head">
        <img class="capa_sign_up" src="./img/capa.svg" alt="logo">
        
        </div>
    
        <div class="sign_up" id="sign_up">
            <div class="sign_up_title">
                <img onclick="back_to_login" class="blue_arrow_back" src="./img/arrow_back_blue.svg">
                <div class="sign_up_head">
                    <img class="logo_signup" src="./img/signup.svg">
                    <img class="vector_5" src="./img/vector_5.svg">
                    
                </div>
            </div>
            <div class="form">
                <input type="name" class="sign_up_name input_sign_up" id="name" required> 
                <input type="email" class="sign_up_email input_sign_up" id="email" required> 
                <input type="password" class="sign_up_email input_sign_up" id="password" required> 
                </div>
                <button id="registerBtn">Sign up</button>
        </div>
      
        </div>
        </div>`;
    return render;
}