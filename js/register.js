async function register() {
  registerBtn.disabled = true;
  let name = document.getElementById('username').value;
  name = formatName(name);
  let email = document.getElementById('email').value;
  let phone = '';
  let password = document.getElementById('password').value;
  let color = getRandomColor();
  let id = getMaxId();
  activeUserId = id;
  let user = {
    'id': id,
    'name': name,
    'email': email,
    'phone': phone,
    'password': password,
    'color_id': color
  };
  users.push(user);
  await setItem('users', users);
  setTimeout(async function() { shiftMessage('Successfully registered'); }, 250);
  await setItemLocal('activeUserId', activeUserId);
  openSummary();
}

function resetForm() {
  username.value = "";
  email.value = "";
  password.value = "";
  registerBtn.disabled = false;
}

