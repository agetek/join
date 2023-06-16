function renderSign() {
  document.getElementById("not_user").classList.toggle("display-none");
  document.getElementById("start_container").innerHTML = ``;
  document.getElementById("start_container").innerHTML = ` 
    <div class="sign_up_container" id="sign_up_container">
    <img class="capa_sign_up" src="./img/capa.svg" alt="logo">
        <div class="sign_up_head">
        </div>
        <div class="cont_sign_up" id="cont_sign_up">
        <img onclick="openLoginFromSignup()" class="blue_arrow_back" src="./img/arrow_back_blue.svg">
            <div class="sign_up_title">
               
                <div class="signup_head">
                    <img class="logo_signup" src="./img/signup.svg">
                    <img class="vector_5" src="./img/vector_5.svg">
                </div>
          </div>

            <form action="javascript:register()">
                    <input type="text" class="infield_name" id="username" placeholder="Name"  required>
                    <input type="email" class="infield_email" id ="email" placeholder="Email" required>
                    <input type="text" class="infield_password" id ="password" placeholder="Password" required>
                    <button type="submit" class="signup_button" id="registerBtn">Sign up</button>
            </form>
        </div>
        `;
}


function initAnimation() {

  let animationBg = document.getElementById('animation_background');
      setTimeout(function() {
     animationBg.style.display = 'none';
  }, 2222);
}

async function openLogin() {
  users = await getItem('users');
  try { activeUserId = await getItemLocal('activeUserId'); } catch (e) { activeUserId = -1; }
  if (activeUserId == null) {
    document.getElementById("container").innerHTML = renderLogin();
  } else if (activeUserId == -2 || activeUserId >= 0) {
    openSummary();
  } else {
  document.getElementById("container").innerHTML = renderLogin();
  // initAnimation();
  }
}

function openLoginFromSignup() {
  document.getElementById("container").innerHTML = renderLogin();
}


function renderLogin() {
  let render = `
    <div class="start_container" id="start_container">
    <img class="capa_sign_up" src="./img/capa.svg" alt="logo">
        <div class="login_head">
        
        <div class="login_header_right">
       
        <span class="not_user" id="not_user">Not a Join user?</span> 
        <button onclick="renderSign()" class="signup_button_short" id="not_user">Sign up</button>
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
  
                    <input type="email" class="infield_email" id="email" placeholder="Email" required>
                    <input type="password" class="infield_password" id="password" placeholder="Password" required>
           
                    <div class="forgot">
            <div class="remember-passwort">
            <input type="checkbox" id="checkbox"></input>
            <label class="not-markable" for="checkbox">Remember Me</label>
        </div>
        <div onclick="renderForgotPassword()" class="text-forgot-password">Forgot my password</div>
          </div>
            
            <div class="login_buttons">
                    <button onclick="login()" class="login_button">Log in</button>
                    <button onclick="guestLogin()" class="guest_login_button">Guest Log in</button>
            </div>        
            </form>
        </div>
        `;
        return render
}

{/* <div class="background animation_background" id="animation_background"></div>
    <img class="logo_animation move_logo" src="./img/join_logo.png"> */}


function renderForgotPassword() {
  document.getElementById("not_user").classList.toggle("display-none");
  document.getElementById("login").innerHTML = ``;
  document.getElementById("login").innerHTML = `    
    <div class="sign_up_container">
        <div class="login_head">
        <img class="capa_sign_up" src="./img/capa.svg" alt="logo">
    </div>
        <div class="cont_forgot_pw" id="cont_forgot_pw">
        <img onclick="renderResetPassword()" class="forgot_blue_arrow_back" src="./img/arrow_back_blue.svg">
            <div class="login_title">
            
                <div class="signup_head">
                    <img class="logo_signup img_forgot_password" src="./img/forgot_password.svg">
                    <img class="vector_5" src="./img/vector_5.svg">
                </div>
          <div class="text_forgot_pw">Don't worry! We will send you an email with the instructions to reset your password.</div>

          </div>
            <form action="javascript:login()">
          
          <input type="email" class="infield_email" id ="email" placeholder="Email" required>
            <div class="login_buttons">
                    <button class="send_email_button" >Send me an email</button>
                   
            </div>        
            </form>
        </div>
        `;
 
}


function renderResetPassword() {
  let render =` 
    <div class="sign_up_container">
        <div class="login_head">
        <img class="capa_sign_up" src="./img/capa.svg" alt="logo">
       
  

    </div>
        <div class="cont_reset_pw" id="cont_reset_pw">
        <img onclick="renderLogin()" class="reset_blue_arrow_back" src="./img/arrow_back_blue.svg">
            <div class="login_title">
            
                <div class="signup_head">
                    <img class="logo_signup forgot_password" src="./img/reset_password.svg">
                    <img class="vector_5" src="./img/vector_5.svg">
                </div>
          </div>

            <form class="form" action="javascript:login()">
           <div class="text_reset_pw">Change your account password</div>
                    
                    <input type="password" class="infield_password" id ="password" placeholder="New password" required>
                    <input type="password" class="infield_password" id ="password" placeholder="Confirm password" required>
            
            
            <div class="login_buttons">
                    <button class="continue_button" >Continue</button>
                   
            </div>        
            </form>
        </div>
        `;
  return render
}



