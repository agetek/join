async function openContacts() {
    users = await getItemLocal('users');
    sortUsersByName();
    makeLetters();
    let render = renderContacts();
    document.getElementById('container').innerHTML = render;
    if (active_user_id >= 0 ) {
        document.getElementById('single_contact_' + active_user_id).classList.add('single_contact_active'); 
    }
}

function renderContacts() {
    let render = renderSidebar();
    render += `<div class="right">`;
    render += renderHeader();
    render += `<div class="middle_column">`;
    render += renderContactsOverview();    
    render += renderContactsDetails();
    render += `</div>`;
    render += `</div>`;
    return render;
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
        render += `<div class="single_contact" id="single_contact_${filteredUsers[i]['id']}" onclick="selectContact(${filteredUsers[i]['id']})">`;
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
    let render = `<div class="contacts_details_outer">`;
    render += `<div class="contacts_details">
                    <div class="contacts_details_contacts">Contacts</div>
                    <div class="contacts_details_line"></div>
                    <div class="contacts_details_better">Better with a team</div>
                </div>
                <div class="contacts_details_details">`;
    if (active_user_id >= 0) { render += renderActiveContact(); }
    render += `</div>
            </div>`;
    return render;
}
function renderActiveContact() {
    let filteredUsers = users.filter(user => user.id == active_user_id);
    let render = `<div class="contacts_details_active">`;
    render += `<div class="contact_details_heading">`;
    render += `<div class="contact_details_initials">`;
    render += renderInitials(filteredUsers[0]);
    render += `</div>`;
    render += `<div class="contact_details_name_add_task">`;
    render += `<div class="contact_details_name">${filteredUsers[0]['name']}</div>`;
    render += `<div class="contact_details_add_task" onclick="addTask(${filteredUsers[0]['id']})"><div class="contact_details_add_task_icon"></div><div class="contact_details_add_task_name">Add Task</div></div>`;
    render += `</div>`;
    render += `</div>`;
    render += `<div class="contact_details_contact_information_outer"><div class="contact_details_contact_information_inner">Contact Information</div>`;
    render += `<div class="contact_details_edit" onclick="editContact(${filteredUsers[0]['id']})"><div class="contact_details_edit_icon"></div><div class="contact_details_edit_contact">Edit Contact</div></div>`;
    render += `</div>`;
    render += `<div class="contact_details_email_text">Email</div>`;
    render += `<div class="contact_details_email">${filteredUsers[0]['email']}</div>`;
    render += `<div class="contact_details_phone_text">Phone</div>`;
    render += `<div class="contact_details_phone">${filteredUsers[0]['phone']}</div>`;
    render += `<div class="contact_details_new_contact"><div class="contact_details_new_contact_icon" onclick="addContact"></div></div>`;
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
    response = await setItemLocal('users', users);
}

function selectContact(id) {
    active_user_id = id;
    openContacts();
}

