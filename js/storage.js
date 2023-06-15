// async function setItem(key, value) {
//     const payload = { key, value, token: STORAGE_TOKEN };
//     return fetch(STORAGE_URL, { method: 'POST', body: JSON.stringify(payload) })
//         .then(res => res.json());
// }

// async function getItem(key) {
//     const url = `${STORAGE_URL}?key=${key}&token=${STORAGE_TOKEN}`;
//     return fetch(url).then(res => res.json()).then(res => {
//         // Verbesserter code
//         if (res.data) { 
//             return res.data.value;
//         } throw `Could not find data with key "${key}".`;
//     });
// }


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
        document.getElementById('wrong_login').innerHTML = "Wrong password";
    }
}

function guestLogin() {
    activeUserId = -2;
    setItemLocal('activeUserId', activeUserId);
    openSummary();
}
    
    