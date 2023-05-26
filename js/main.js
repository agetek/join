async function init() {
    document.getElementById('container').innerHTML = renderAddContact();
    let resultSave = await setItem('users', users);
    let resultLoaded = await getItem('users');
    console.log(resultSave);
    console.log(resultLoaded);
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
    resultReturn = JSON.parse(resultReturn);
    return resultReturn;
}