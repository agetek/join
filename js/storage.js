async function setItem(key, value) {
    const payload = { key, value, token: STORAGE_TOKEN };
    return fetch(STORAGE_URL, { method: 'POST', body: JSON.stringify(payload) })
        .then(res => res.json());
}

async function getItem(key) {
    const url = `${STORAGE_URL}?key=${key}&token=${STORAGE_TOKEN}`;
    return fetch(url).then(res => res.json()).then(res => {
        // Verbesserter code
        if (res.data) { 
            return res.data.value;
        } throw `Could not find data with key "${key}".`;
    });
}


userEmail = document.getElementById('email').value;
userPassword = document.getElementById('password').value;

for (let i = 0; i < users.length; i++) {
    if (userEmail == users[i]['email'] && userPassword == users[i]['password']){
        renderLogin();
    }
    else{
        element.innerHTML = "Die Daten sind nicht korrekt.";
    }
}
