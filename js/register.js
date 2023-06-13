
async function init() {
    loadUsers();
  }
  
  async function loadUsers() {
    users = await getItem("users");
  }
  
  async function register() {
    registerBtn.disabled = true;
    users.push({
        color_id: 'rgb(25,207,48)',
        id:'',
        name: username.value,
        email: email.value,
        phone: '',
        password: password.value,
    });
    await setItem("users", JSON.stringify(users));
    resetForm();
  }
  
  function resetForm() {

    username.value = "";
    email.value = "";
    password.value = "";
    registerBtn.disabled = false;
  }
  
  