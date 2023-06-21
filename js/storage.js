function login() {
    let userEmail = document.getElementById('email').value;
    let userPassword = document.getElementById('password').value;
    let check = false;
    for (let i = 0; i < users.length; i++) {
        if (userEmail == users[i]['email'] && userPassword == users[i]['password']) {
            check = true;
            activeUserId = users[i]['id'];
            setItemLocal('activeUserId', activeUserId);
            openSummary();
        }   
    }
    if (!check) {
        document.getElementById('wrong_login').innerHTML = "incorrect login data";
    } 

    }


function guestLogin() {
    activeUserId = -2;
    setItemLocal('activeUserId', activeUserId);
    openSummary();
}
    
    