async function openContacts() {
    users = await getItem('users');
    sortUsersByName();
    makeLetters();
    let render = renderContacts();
    document.getElementById('container').innerHTML = render;
}

function sortUsersByName() {
    users.sort((a, b) => { if (a.name < b.name) { return -1; }})
}

function makeLetters() {
    for (let i = 0; i < users.length; i++) {
        let firstLetter = users[i]['name'].charAt(0).toUpperCase();
        if (!firstLetters.includes(firstLetter)) {
            firstLetters.push(firstLetter);
        }
    }
}

function renderContactsOverview() {
    let render = `<div class="contacts_overview">`;
    for (let i = 0; i < firstLetters.length; i++) {
        render += `<div class="contact_overview_letter">${firstLetters[i]}</div>`;
        render += `<div class="contact_line"></div>`;
        render += renderLetter(i);
    }
    render += `</div>`;
    return render;
}

function renderUser(filteredUsers) {
    let render = '';
    for (let i = 0; i < filteredUsers.length; i++) {
        render += `<div class="single_contact">`;
        render += `<div class="initials_contact">`;
        render += renderInitials(filteredUsers[i]);
        render += `</div>`;
        render += `<div class="single_contact_name_email">`;
        render += `<div class="single_contact_name">${filteredUsers[i]['name']}</div>`;
        render += `<div class="single_contact_email">${filteredUsers[i]['email']}</div>`;
        render += `</div>`;
        render += `</div>`;
    }
    return render;
}

function renderInitials(user) {
    let nameSplit = user.name.split(' ');
    let firstLetter = nameSplit[0].charAt(0).toUpperCase();
    let secondLetter = nameSplit[1].charAt(0) .toUpperCase();
    let bgColor = user.color_id;
    let render = `<div class="initials" style="background-color: ${bgColor}">${firstLetter}${secondLetter}</div>`;
    return render;
}

function renderLetter(i) {
    let filteredUsers = users.filter(user => user.name.charAt(0) == firstLetters[i]);
    let render = renderUser(filteredUsers);
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
        'name': name,
        'email': email,
        'phone': phone,
        'password': '',
        'color_id': 'rgb(147,39,255)',
    };

    users.push(user);
    response = await setItem('users', users);
    console.log(response);
}

