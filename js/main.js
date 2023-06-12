async function init() {
    document.getElementById('container').innerHTML = renderAddContact();
    users = await getItem('users');
    console.log(users);
}


async function setItem(key, value) {
    const payload = { key, value, token: STORAGE_TOKEN };
    return fetch(STORAGE_URL, { method: 'POST', body: JSON.stringify(payload)})
    .then(res => res.json());
}

async function getItem(key) {
    const url = `${STORAGE_URL}?key=${key}&token=${STORAGE_TOKEN}`;
    let result = await fetch(url).then(res => res.json());
    let resultReturn = result['data']['value'];
    resultReturn = resultReturn.replaceAll("'", '"');
    resultReturn = resultReturn.replaceAll('True', 'true');
    resultReturn = resultReturn.replaceAll('False', 'false');
    resultReturn = JSON.parse(resultReturn);
    return resultReturn;
}

async function setItemLocal(key, value) {
    try {
        await localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
        console.log(e);
    }
}

async function getItemLocal(key) {
    let data = await JSON.parse(localStorage.getItem(key));
    return data
}
