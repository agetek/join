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
    
        <div class="sign_up" id="sign_up">
            <div class="sign_up_title">
                <img onclick="back_to_login" class="blue_arrow_back" src="./img/arrow_back_blue.svg">
                <div class="signup_head">
                    <img class="logo_signup" src="./img/signup.svg">
                    <img class="vector_5" src="./img/vector_5.svg">
                </div>
          </div>

            <form onsubmit="register()">
                    <input type="text" class="input_name" id="input_field" placeholder="Name" required>
                    <input type="email" class="input_email" id ="input_field" placeholder="Email" required>
                    <input type="number" class="input_phone" id ="input_field" placeholder="Phone" required>
                    <button class="input_button" id="input_field">Sign up</button>
            </form>
        </div>
  
    
      
        `;
  return render;
}

function renderSign() {
  let render = renderSignUpForm();
  document.getElementById("signup").innerHTML = render;
}
