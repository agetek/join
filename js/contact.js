function openContacts() {
    let render = renderContacts();
    document.getElementById('container').innerHTML = render;    
}

function renderContactsOverview() {
    let render = `<div class="contacts_overview"></div>`;
    return render;
}

function renderContactsDetails() {
    let render = `<div class="contacts_details"></div>`;
    return render;
}

async function addContact() {
    let name = document.getElementById('input_name').value;
    let email = document.getElementById('input_email').value;
    let phone = document.getElementById('input_phone').value;

    let user = {
        'id': 10,
        'input_name': name,
        'input_email': email,
        'input_phone': phone,
        'password': '',
        'color_id': 'rgb(147,39,255)',
    };

    users.push(user);
    response = await setItem('users', users);
    console.log(response);
}

