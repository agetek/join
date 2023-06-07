async function init() {
  loadUsers();
}

async function loadUsers() {
  users = await getItem("users");
}

async function register() {
  register.disabled = true;
  users.push({
    email: email.value,
    password: password.value,
  });
  await setItem("users", JSON.stringify(users));
  resetForm();
}

function resetForm() {
  email.value = "";
  password.value = "";
  registerBtn.disabled = false;
}

function renderStartPage() {
  let render = `<div class="sign_up_container">

<img class="start_page" id="start_page_img" src="./img/start_page.svg" alt="logo">


</div>`;

  return render;
}

function renderSignUpForm() {
  let render = ` 
    <div class="sign_up_container">
    
        <div class="sign_up_head">
        <img class="capa_sign_up" src="./img/capa.svg" alt="logo">
        
        </div>
    
        <div class="cont_sign_up" id="cont_sign_up">
        <img onclick="back_to_login()" class="blue_arrow_back" src="./img/arrow_back_blue.svg">
            <div class="sign_up_title">
               
                <div class="signup_head">
                    <img class="logo_signup" src="./img/signup.svg">
                    <img class="vector_5" src="./img/vector_5.svg">
                </div>
          </div>

            <form action="javascript:register()">
                    <input type="text" class="input_name" id="input_field" placeholder="Name" pattern="[A-Za-z]{2, 8}[\\s]{1}[A-Za-z]{2, 8}" required>
                    <input type="email" class="input_email" id ="input_field" placeholder="Email" required>
                    <input type="text" class="input_phone" id ="input_field" placeholder="Phone" pattern="[0-9]" required>
                    <button type="submit" class="signup_button" id="input_field">Sign up</button>
            </form>
        </div>
        `;
  return render;
}

function renderSign() {
  let render = renderSignUpForm();
  document.getElementById("signup").innerHTML = render;
}

function renderLogInForm() {
  let render = ` 
    <div class="sign_up_container">
        <div class="login_head">
        <img class="capa_sign_up" src="./img/capa.svg" alt="logo">
        <div class="login_header_right">
       
        <span class="not_user">Not a Join user?</span> 
        <button onclick="to_signup_form())" class="signup_button_short" id="input_field">Sign up</button>
        </div>
  

    </div>
        <div class="cont_log_in" id="cont_log_in">
            <div class="login_title">
                <div class="signup_head">
                    <img class="logo_signup" src="./img/login.svg">
                    <img class="vector_5" src="./img/vector_5.svg">
                </div>
          </div>

            <form action="javascript:login()">
           
                    <input type="text" class="input_name" id="input_field" placeholder="Name" pattern="[A-Za-z]{2, 8}[\\s]{1}[A-Za-z]{2, 8}" required>
                    <input type="email" class="input_email" id ="input_field" placeholder="Email" required>
            
            <div class="forgot">
            <div class="remember-passwort">
            <input type="checkbox" id="checkbox"></input>
            <label class="not-markable" for="checkbox">Remember Me</label>
        </div>
        <div onclick="openForgotPasswort()" class="forgot-passwort">Forgot my password</div>
          </div>
            
            <div class="login_buttons">
                    <button class="login_button" >Log in</button>
                    <button class="guest_login_button" >Guest Log in</button>
            </div>        
            </form>
        </div>
        `;
  return render;
}

function renderLogin() {
  let render = renderLogInForm();
  document.getElementById("login").innerHTML = render;
}


function renderForgotPassword() {
  let render = ` 
    <div class="sign_up_container">
        <div class="login_head">
        <img class="capa_sign_up" src="./img/capa.svg" alt="logo">
    </div>
        <div class="cont_forgot_pw" id="cont_forgot_pw">
        <img onclick="back_to_login" class="forgot_blue_arrow_back" src="./img/arrow_back_blue.svg">
            <div class="login_title">
            
                <div class="signup_head">
                    <img class="logo_signup forgot_password" src="./img/forgot_password.svg">
                    <img class="vector_5" src="./img/vector_5.svg">
                </div>
          <div class="text_forgot_pw">Don't worry! We will send you an email with the instructions to reset your password.</div>

          </div>
            <form action="javascript:login()">
          
          <input type="email" class="input_email" id ="input_field" placeholder="Email" required>
            <div class="login_buttons">
                    <button class="send_email_button" >Send me an email</button>
                   
            </div>        
            </form>
        </div>
        `;
  return render;
}

function renderForgot() {
  let render = renderForgotPassword();
  document.getElementById("forgot_pw").innerHTML = render;
}

function renderResetPassword() {
  let render = ` 
    <div class="sign_up_container">
        <div class="login_head">
        <img class="capa_sign_up" src="./img/capa.svg" alt="logo">
       
  

    </div>
        <div class="cont_reset_pw" id="cont_reset_pw">
        <img onclick="back_to_login()" class="reset_blue_arrow_back" src="./img/arrow_back_blue.svg">
            <div class="login_title">
            
                <div class="signup_head">
                    <img class="logo_signup forgot_password" src="./img/reset_password.svg">
                    <img class="vector_5" src="./img/vector_5.svg">
                </div>
          </div>

            <form class="form" action="javascript:login()">
           <div class="text_reset_pw">Change your account password</div>
                    
                    <input type="text" class="input_password" id ="input_field_sign" placeholder="New password" required>
                    <input type="text" class="input_password" id ="input_field_" placeholder="Confirm password" required>
            
            
            <div class="login_buttons">
                    <button class="continue_button" >Continue</button>
                   
            </div>        
            </form>
        </div>
        `;
  return render;
}

function renderReset() {
  let render = renderResetPassword();
  document.getElementById("reset_pw").innerHTML = render;
}



