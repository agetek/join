async function openContacts() {
    firstLetters = [];
    users = await getItem('users');
    sortUsersByName();
    makeLetters();
    let render = renderContacts();
    document.getElementById('container').innerHTML = render;
    document.getElementById('open_contacts').classList.add('sidebar_point_active');
}

function renderContacts() {
    let render = renderSidebar();
    render += `<div class="right">`;
    render += renderHeader();
    render += `<div class="middle_column" id="middle_column">`;
    render += renderContactsOverview();
    render += renderContactsDetails();
    render += `</div>`;
    render += `</div>`;
    render += renderFooter();
    return render;
}

function sortUsersByName() {
    users.sort((a, b) => { if (a.name < b.name) { return -1; } })
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
    let render = `<div id="newContact_footer" style="display:none" class="contact_details_new_contact"><div class="contact_details_new_contact_icon" onclick="openAddContactMobile()"></div></div>`;
    render += `<div class="contacts_overview">`;
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
    let secondLetter = nameSplit[1].charAt(0).toUpperCase();
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
                <div class="contacts_details_details" id="render_active_contact">`;
    if (selectedUserId >= 0) { render += renderActiveContact(); }
    render += `</div>
            </div>`;
    return render;
}

function renderActiveContact() {
    let filteredUsers = users.filter(user => user.id == selectedUserId);
    let render = `<div class="contacts_details_active" id="render_contact_shift">`;
    render += `<div class="contact_details_heading">`;
    render += `<div class="contact_details_initials">`;
    render += renderInitials(filteredUsers[0]);
    render += `</div>`;
    render += `<div class="contact_details_name_add_task">`;
    render += `<div class="contact_details_name">${filteredUsers[0]['name']}</div>`;
    render += `<div class="contact_details_add_task" onclick="addTask(${filteredUsers[0]['id']})"><div class="contact_details_add_task_icon"></div><div class="contact_details_add_task_name" onclick="addTaskPopup()">Add Task</div></div>`;
    render += `</div>`;
    render += `</div>`;
    render += `<div class="contact_details_contact_information_outer"><div class="contact_details_contact_information_inner">Contact Information</div>`;
    render += `<div class="contact_details_edit" onclick="editContact(${filteredUsers[0]['id']})"><div class="contact_details_edit_icon"></div><div class="contact_details_edit_contact">Edit Contact</div></div>`;
    render += `</div>`;
    render += `<div class="contact_details_email_text">Email</div>`;
    render += `<div class="contact_details_email">${filteredUsers[0]['email']}</div>`;
    render += `<div class="contact_details_phone_text">Phone</div>`;
    render += `<div class="contact_details_phone">${filteredUsers[0]['phone']}</div>`;
    render += `<div class="contact_details_new_contact"><div class="contact_details_new_contact_icon" onclick="openAddContact()"></div></div>`;
    return render;
}

function renderActiveContactMobile() {
    let filteredUsers = users.filter(user => user.id == selectedUserId);
    let render = `<div class="contacts_details_mobile_active_outer">`;
    render += `<div class="contacts_details_mobile_active_inner">`;
    render += `<div class="contacts_details_mobile_kanban">Kanban Project Management Tool</div>`;
    render += `<div class="contacts_details_mobile_contacts">Contacts</div>`;
    render += `<div class="contacts_details_mobile_better">Better with a team</div>`;
    render += `<div class="contacts_details_mobile_line"></div>`;
    render += `<div class="contact_details_mobile_heading">`;
    render += `<div class="contact_details_mobile_initials">`;
    render += renderInitials(filteredUsers[0]);
    render += `</div>`;
    render += `<div class="contact_details_mobile_name_add_task">`;
    render += `<div class="contact_details_mobile_name">${filteredUsers[0]['name']}</div>`;
    render += `<div class="contact_details_mobile_add_task" onclick="addTask(${filteredUsers[0]['id']})"><div class="contact_details_add_task_icon"></div><div class="contact_details_add_task_name" onclick="addTaskPopup()">Add Task</div></div>`;
    render += `</div>`;
    render += `</div>`;
    render += `<div class="contact_details_mobile_contact_information">Contact Information</div>`;
    render += `<div class="contact_details_email_text">Email</div>`;
    render += `<div class="contact_details_email">${filteredUsers[0]['email']}</div>`;
    render += `<div class="contact_details_phone_text">Phone</div>`;
    render += `<div class="contact_details_phone">${filteredUsers[0]['phone']}</div>`;
    render += `</div>`;
    render += `</div>`;
    render += `<div class="contact_details_back" onclick="closeContactMobile()"></div>`;
    render += `<div class="contact_details_trash" onclick="deleteContact()"></div>`;
    render += `<div class="contact_details_edit_mobile" onclick="editContactMobile(${selectedUserId})"></div>`;
    return render;
}

async function addContact() {
    shiftPopupOut();
    setTimeout(async function () {
        let name = document.getElementById('input_name').value;
        name = formatName(name);
        let email = document.getElementById('input_email').value;
        let phone = document.getElementById('input_phone').value;
        let color = getRandomColor();
        let id = getMaxId();
        let user = {
            'id': id,
            'name': name,
            'email': email,
            'phone': phone,
            'password': '',
            'color_id': color
        };
        users.push(user);
        await setItem('users', users);
        await openContacts();
        shiftMessage('Contact successfully created');
    }, 250);
}

async function addContactMobile() {
    shiftPopupOutMobile();
    setTimeout(async function () {
        let name = document.getElementById('input_name').value;
        name = formatName(name);
        let email = document.getElementById('input_email').value;
        let phone = document.getElementById('input_phone').value;
        let color = getRandomColor();
        let id = getMaxId();
        let user = {
            'id': id,
            'name': name,
            'email': email,
            'phone': phone,
            'password': '',
            'color_id': color
        };
        users.push(user);
        await setItem('users', users);
        await openContacts();
        shiftMessage('Contact successfully created');
    }, 250);
}

function formatName(name) {
    let nameSplit = name.split(' ');
    let firstLetter = nameSplit[0].charAt(0).toUpperCase();
    let secondLetter = nameSplit[1].charAt(0).toUpperCase();
    let firstRest = nameSplit[0].substring(1).toLowerCase();
    let secondRest = nameSplit[1].substring(1).toLowerCase();
    let output = firstLetter + firstRest + " " + secondLetter + secondRest;
    return output;
}

function getRandomColor() {
    let color = colors[Math.round(Math.random() * colors.length)];
    return color
}

function getMaxId() {
    let max = null;
    for (let i = 0; i < users.length; i++) {
        if (max == null || users[i]['id'] > max)
            max = users[i]['id'];
    }
    return max + 1;
}

function selectContact(id) {
    let mobile = checkMobile();
    if (!mobile) {
        if (selectedUserId >= 0) { document.getElementById('single_contact_' + selectedUserId).classList.remove('single_contact_active'); }
        selectedUserId = id;
        let render = renderActiveContact();
        document.getElementById('render_active_contact').innerHTML = render;
        document.getElementById('single_contact_' + selectedUserId).classList.add('single_contact_active');
        document.getElementById('render_contact_shift').style.cssText = 'margin-left: 1000px';
        setTimeout(() => { document.getElementById('render_contact_shift').style.cssText = 'transition: all 250ms ease-out; margin-left: 65px'; }, 1);
    }
    else {
        selectedUserId = id;
        oldContentContactOverview = document.getElementById('middle_column').innerHTML;
        let render = renderActiveContactMobile();
        document.getElementById('middle_column').innerHTML = render;
    }
}

function closeContactMobile() {
    selectedUserId = -1;
    document.getElementById('middle_column').innerHTML = oldContentContactOverview;
}

function editContact(id) {
    let filteredUsers = users.filter(user => user.id == id);
    oldContent = document.getElementById('container').innerHTML;
    let newContent = `<div class="popup" id="popup" onclick="closeEdit()">`;
    newContent += renderEditContact(id);
    newContent += `</div>`;
    document.getElementById('container').innerHTML = oldContent + newContent;
    document.getElementById('input_name').value = filteredUsers[0]['name'];
    document.getElementById('input_email').value = filteredUsers[0]['email'];
    document.getElementById('input_phone').value = filteredUsers[0]['phone'];
    let avatar = renderInitials(filteredUsers[0]);
    document.getElementById('avatar').innerHTML = avatar;
    setTimeout(() => { shiftPopupIn() }, 1);
}

function editContactMobile(id) {
    let filteredUsers = users.filter(user => user.id == id);
    oldContent = document.getElementById('container').innerHTML;
    let newContent = `<div class="popup_mobile" id="popup_mobile" onclick="closeEditMobile()">`;
    newContent += renderEditContactMobile(id);
    newContent += `</div>`;
    document.getElementById('container').innerHTML = oldContent + newContent;
    document.getElementById('input_name').value = filteredUsers[0]['name'];
    document.getElementById('input_email').value = filteredUsers[0]['email'];
    document.getElementById('input_phone').value = filteredUsers[0]['phone'];
    let avatar = renderInitials(filteredUsers[0]);
    document.getElementById('avatar').innerHTML = avatar;
    setTimeout(() => { shiftPopupInMobile() }, 1);
}

function openAddContact() {
    oldContent = document.getElementById('container').innerHTML;
    let newContent = `<div class="popup" id="popup" onclick="closeEdit()">`;
    newContent += renderAddContact();
    newContent += `</div>`;
    document.getElementById('container').innerHTML = oldContent + newContent;
    setTimeout(() => { shiftPopupIn() }, 1);
}

function openAddContactMobile() {
    oldContent = document.getElementById('container').innerHTML;
    let newContent = `<div class="popup_mobile" id="popup_mobile" onclick="closeEditMobile()">`;
    newContent += renderAddContactMobile();
    newContent += `</div>`;
    document.getElementById('container').innerHTML = oldContent + newContent;
    setTimeout(() => { shiftPopupInMobile() }, 1);
}

function closeEdit() {
    shiftPopupOut();
    setTimeout(() => { document.getElementById('container').innerHTML = oldContent; }, 250);
}

function closeEditMobile() {
    shiftPopupOutMobile();
    setTimeout(() => { document.getElementById('container').innerHTML = oldContent; }, 250);
}

function getPosition() {
    let position = -1;
    for (let i = 0; i < users.length; i++) {
        if (users[i]['id'] == selectedUserId) {
            position = i;
        }
    }
    return position;
}

async function updateContact() {
    shiftPopupOut();
    setTimeout(async function () {
        let position = getPosition();
        users[position]['name'] = document.getElementById('input_name').value;
        users[position]['email'] = document.getElementById('input_email').value;
        users[position]['phone'] = document.getElementById('input_phone').value;
        await setItem('users', users);
        await openContacts();
        shiftMessage('Contact successfully updated');
    }, 250);
}

async function updateContactMobile() {
    shiftPopupOutMobile();
    setTimeout(async function () {
        let position = getPosition();
        users[position]['name'] = document.getElementById('input_name').value;
        users[position]['email'] = document.getElementById('input_email').value;
        users[position]['phone'] = document.getElementById('input_phone').value;
        await setItem('users', users);
        await openContacts();
        shiftMessage('Contact successfully updated');
    }, 250);
}

async function deleteContact() {
    shiftPopupOut();
    setTimeout(async function () {
        let position = getPosition();
        users.splice(position, 1);
        await setItem('users', users);
        selectedUserId = -1;
        firstLetters = [];
        await openContacts();
        shiftMessage('Contact deleted');
    }, 250);
}

async function loadOldContacts() {
    let users = usersOld;
    await setItem('users', users);
    return users
}

async function shiftPopupIn() {
    document.getElementById('popup_content').style.cssText = 'right: 0';
    document.getElementById('popup').style.cssText = 'background-color: rgba(0, 0, 0, 0.5)';
}

async function shiftPopupOut() {
    document.getElementById('popup_content').style.cssText = 'right: -100%';
    document.getElementById('popup').style.cssText = 'background-color: rgba(0, 0, 0, 0)';
}

async function shiftPopupInMobile() {
    document.getElementById('popup_content_mobile').style.cssText = 'bottom: 0';
    document.getElementById('popup_mobile').style.cssText = 'background-color: rgba(0, 0, 0, 0.5)';
}

async function shiftPopupOutMobile() {
    document.getElementById('popup_content_mobile').style.cssText = 'bottom: -100%';
    document.getElementById('popup_mobile').style.cssText = 'background-color: rgba(0, 0, 0, 0)';
}

function shiftMessage(message) {
    oldContent = document.getElementById('container').innerHTML;
    let newContent = `<div class="shift_message_outer"><div id="shift_message">${message}</div></div>`;
    document.getElementById('container').innerHTML = oldContent + newContent;
    setTimeout(() => { shiftMessageHold() }, 250);
}

function shiftMessageHold() {
    document.getElementById('shift_message').style.cssText = 'bottom: 200px;';
    setTimeout(() => { shiftMessageDown() }, 1000);
}

function shiftMessageDown() {
    document.getElementById('shift_message').style.cssText = 'bottom: -50px;';
    setTimeout(() => { document.getElementById('container').innerHTML = oldContent; }, 250);
}

function checkMobile() {
    if (window.innerWidth < 1275) { return true } else { return false }
}