function renderAddTask() {
    let render = `
    <div class="add_task">
        <div class="add_task_header">
            <div class="add_task_headline">Add Task</div>
        </div>
        <form class="add_task_form">
        <div class="add_task_body">
            <div class="add_task_left_column">
                <label class="add_task_label_title" for="input_title">Title</label>
                <input type="text" class="input_title" id="input_title" placeholder="Enter a title" required>
                <label class="add_task_label_description" for="input_description">Description</label>
                <textarea class="add_task_textarea_description" placeholder="Enter a description" id="input_description"></textarea>
                <div class="add_task_label_description">Category</div>
                <div id="update_category" class="update_category">`
    render += renderAddTaskCategory();
    render += `
                </div>
                <div class="add_task_label_description">Assigned to</div>
                <div class="update_assigned" id="update_assigned">`
    render += renderAddTaskContacts();
    render += `</div>
            </div>
            <div class="add_task_divider"></div>
            <div class="add_task_right_column">
            <label class="add_task_label_date" for="input_date">Due date</label>
            <input type="date" class="input_date" id="input_date" placeholder="dd/mm/yyyy" required>
            <label class="add_task_label_prio">Prio</label>
            <div class="add_task_prio">
                <div class="add_task_prio_outer" id="prio_urgent" onclick="setPriority(2)"><div class="add_task_prio_inner">Urgent <div class="add_task_prio_urgent_img"></div></div></div>
                <div class="add_task_prio_outer" id="prio_medium" onclick="setPriority(1)"><div class="add_task_prio_inner">Medium <div class="add_task_prio_medium_img"></div></div></div>
                <div class="add_task_prio_outer" id="prio_low" onclick="setPriority(0)"><div class="add_task_prio_inner">Low <div class="add_task_prio_low_img"></div></div></div>
            </div>
            <label class="add_task_label_subtasks">Subtasks</label>
            <div class="update_subtasks" id="update_subtasks">`
    render += renderAddTaskSubtasks();
            `</div>
            </div>
        </div>
        </form>
        
    </div>
    `;
    return render
}

function renderAddTaskCategory() {
    let render = `<div class="add_task_category_outer">
                    <div class="add_task_category_between" onclick="openTaskCategoryDropdown()">`
    render += renderActiveCategory();
    render += `<div class="add_task_drop_down"></div>
            </div>
            <div class="add_task_category_below">`;
    render += renderOpenTaskCategory();
    render += `</div>
                </div>`;
    return render
}

async function openTaskCategoryDropdown() {
    if (categoryOpen) { categoryOpen = false } else { categoryOpen = true }
    let render = renderAddTaskCategory();
    document.getElementById('update_category').innerHTML = render;
}

function renderOpenTaskCategory() {
    let render = '';
    if (categoryOpen) {
        render += `<div class="add_task_category_name" onclick="addNewCategory()">New category</div>`;
        for (let i = 0; i < category.length; i++) {
            render += `<div class="add_task_category_name" onclick="selectCategory(${category[i]['id']})">${category[i]['name']}`;
            render += `<div class="add_task_category_circle" style="background-color: ${taskColors[category[i]['color_id']]}"></div>`;
            render += `</div>`;
        }
    }
    return render
}

async function loadOldCategories() {
    let category = categoryOld;
    await setItem('category', category);
    return category
}

function selectCategory(id) {
    categorySelected = id;
    categoryOpen = false;
    let render = renderAddTaskCategory();
    document.getElementById('update_category').innerHTML = render;
}

function renderActiveCategory() {
    let render = '';
    if (categorySelected == -1) {
        render += `<div class="add_task_category_inner">Select task category</div>`;
    } else {
        let cat = category.filter(getCat);
        render += `<div class="add_task_category_inner">${cat[0]['name']}`;
        render += `<div class="add_task_category_circle" style="background-color: ${taskColors[cat[0]['color_id']]}"></div>`;
        render += `</div>`;
    }
    return render
}

function getCat(catId) {
    return catId['id'] == categorySelected;
}

function addNewCategory() {
    let render = `<div class="add_task_category_outer">
                    <div class="add_task_category_inner">
                        <input type="text" class="add_task_category_input" id="add_task_category_input" minlength="2">
                        <div class="add_task_category_cross" onclick="exitNewCategory()"></div>
                        <div class="add_task_category_divider"></div>
                        <div class="add_task_category_hook" onclick="chooseCategoryColor()"></div>
                    </div>
                </div>
                <div class="error_message" id="error_message_category"></div>
                <div class="category_colors_outer" id="category_colors_outer"></div>`;
    document.getElementById('update_category').innerHTML = render;
}

function exitNewCategory() {
    categorySelected = -1;
    categoryOpen = false;
    let render = renderAddTaskCategory();
    document.getElementById('update_category').innerHTML = render;
}

function chooseCategoryColor() {
    let check = document.getElementById('add_task_category_input').value;
    if (check.length < 2) {
        document.getElementById('error_message_category').innerHTML = 'Category name too short. Must be at least 2 characters long';
    } else {
        let render = '';
        for (let i = 0; i < taskColors.length; i++) {
            render += `<div class="category_colors_inner" style="background-color: ${taskColors[i]}" onclick="saveNewCategory(${i})"></div>`;
        }
        document.getElementById('category_colors_outer').innerHTML = render;
    }
}

async function saveNewCategory(i) {
    let id = getMaxCategoryId();
    let name = document.getElementById('add_task_category_input').value;
    let color_id = i;
    category.push({ 'id': id, 'name': name, 'color_id': color_id });
    await setItem('category', category);
    categorySelected = id;
    categoryOpen = false;
    let render = renderAddTaskCategory();
    document.getElementById('update_category').innerHTML = render;
}

function getMaxCategoryId() {
    let max = null;
    for (let i = 0; i < category.length; i++) {
        if (max == null || category[i]['id'] > max)
            max = category[i]['id'];
    }
    return max + 1;
}

async function addTaskPopup() {
    categoryOpen = false;
    categorySelected = -1;
    category = await getItem('category');
    oldContent = document.getElementById('container').innerHTML;
    let newContent = `<div class="popup" id="popup" onclick="closeEdit()">
                        <div class="add_task_popup" onclick="event.stopPropagation()" id="popup_content">`;
    newContent += renderAddTask();
    newContent += `</div>
                </div>`;
    document.getElementById('container').innerHTML = oldContent + newContent;
    setTimeout(() => { shiftPopupIn() }, 1);
}

function renderAddTaskContacts() {
    let render = `<div class="add_task_category_outer">
                    <div class="add_task_category_between" onclick="openTaskContactsDropdown()">
                        <div class="add_task_category_inner">Select contacts to assign</div>
                        <div class="add_task_drop_down"></div>
                    </div>
                    <div class="add_task_category_below" id="update_contacts">`;
    render += renderOpenTaskContacts();
    render += `     </div>
                </div>
                <div class="add_task_selected_contacts" id="add_task_selected_contacts"></div>`;
    return render
}

function renderOpenTaskContacts() {
    let render = '';
    if (contactsOpen) {
        let check = getCheck(userSelfId);
        render += `<div class="add_task_contact_outer" onclick="toggleContactId(${userSelfId})">
                    <div class="add_task_contact_text">You</div>
                    <input class="add_task_contacts_checkbox" type="checkbox" id="addtask_contact_${userSelfId}"${check}>
                </div>`;
        render += renderContactsLoop();
        render += `<div class="add_task_contact_outer">
        <div class="add_task_contact_text">Invite new contact</div>
        <div class="add_task_contact_invite" onclick="inviteContact()"></div>
    </div>`;
    }
    return render
}

function renderContactsLoop() {
    sortUsersByName();
    let render = '';
    for (let i = 0; i < users.length; i++) {
        if (!(users[i]['id'] == userSelfId)) {
            let check = getCheck(users[i]['id']);
            render += `
                    <div class="add_task_contact_outer">
                        <div class="add_task_contact_text">${users[i]['name']}</div>
                        <input class="add_task_contacts_checkbox" type="checkbox" id="addtask_contact_${users[i]['id']}" onclick="toggleContactId(${users[i]['id']})"${check}>
                    </div>`;
        }
    }
    return render
}

function getCheck(id) {
    let render = '';
    for (let i = 0; i < addTaskContactsSelected.length; i++) {
        if (addTaskContactsSelected[i] == id) {
            render = ' checked';
        }
    }
    return render;
}

async function openTaskContactsDropdown() {
    if (!contactsOpen) { contactsOpen = true } else { contactsOpen = false }
    let render = renderOpenTaskContacts();
    document.getElementById('update_contacts').innerHTML = render;
    if (!contactsOpen) {
        let render = renderSelectedContacts();
        document.getElementById('add_task_selected_contacts').innerHTML = render;
    } else {
        let render = '';
        document.getElementById('add_task_selected_contacts').innerHTML = render;
    }
}

function toggleContactId(id) {
    let contained = false;
    let index = -1;
    for (let i = 0; i < addTaskContactsSelected.length; i++) {
        if (addTaskContactsSelected[i] == id) {
            contained = true;
            index = i;
        }
    }
    if (!contained) {
        addTaskContactsSelected.push(id);
    } else {
        addTaskContactsSelected.splice(index, 1);
    }
}

function renderSelectedContacts() {
    let render = '';
    for (let i = 0; i < addTaskContactsSelected.length; i++) {
        let filteredUsers = users.filter(user => user.id == addTaskContactsSelected[i]);
        render += `<div class="add_task_selected_contact">`
        render += renderInitials(filteredUsers[0]);
        render += `</div>`
    }
    return render;
}

function inviteContact() {
    let render = `<div class="add_task_category_outer">
        <div class="add_task_category_inner">
            <input type="text" class="add_task_category_input" id="add_task_contact_email" minlength="2" maxlength="60">
            <div class="add_task_category_cross" onclick="exitInviteContact()"></div>
            <div class="add_task_category_divider"></div>
            <div class="add_task_category_hook" onclick="processInviteContact()"></div>
        </div>
    </div>
    <div class="error_message" id="error_message_category"></div>`;
    document.getElementById('update_assigned').innerHTML = render;
}

function exitInviteContact() {
    contactsOpen = false;
    let render = renderAddTaskContacts();
    document.getElementById('update_assigned').innerHTML = render;
    render = renderSelectedContacts();
    document.getElementById('add_task_selected_contacts').innerHTML = render;
}

async function processInviteContact() {
    document.getElementById('error_message_category').innerHTML = '';
    let email = document.getElementById('add_task_contact_email').value;
    if (validateEmail(email)) {
        let id = await addUser(email);
        addTaskContactsSelected.push(id);
        exitInviteContact();
    } else {
        document.getElementById('add_task_contact_email').value = '';
        document.getElementById('error_message_category').innerHTML = 'No valid email address';
    }
}

function validateEmail(email) {
    return /^.{2,}@\w+\.\w+$/.test(email);
}

async function addUser(email) {
    let firstLetter = email.charAt(0).toUpperCase();
    let secondLetter = email.charAt(1).toUpperCase();
    let name = firstLetter + ' ' + secondLetter;
    let phone = '';
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
    return id
}

function setPriority(prio) {
    priority = prio;
    document.getElementById('prio_urgent').innerHTML = `<div class="add_task_prio_inner">Urgent <div class="add_task_prio_urgent_img"></div></div>`;
    document.getElementById('prio_medium').innerHTML = `<div class="add_task_prio_inner">Medium <div class="add_task_prio_medium_img"></div></div>`;
    document.getElementById('prio_low').innerHTML = `<div class="add_task_prio_inner">Low <div class="add_task_prio_low_img"></div></div>`;
    document.getElementById('prio_urgent').style.backgroundColor = `#FFFFFF`;
    document.getElementById('prio_medium').style.backgroundColor = `#FFFFFF`;
    document.getElementById('prio_low').style.backgroundColor = `#FFFFFF`;
    if (prio == 0) {
        document.getElementById('prio_low').innerHTML = `<div class="add_task_prio_inner_active">Low <div class="add_task_prio_low_img_white"></div></div>`;
        document.getElementById('prio_low').style.backgroundColor = `#7AE229`;
    }
    else if (prio == 1) {
        document.getElementById('prio_medium').innerHTML = `<div class="add_task_prio_inner_active">Medium <div class="add_task_prio_medium_img_white"></div></div>`;
        document.getElementById('prio_medium').style.backgroundColor = `#FFA800`;
    }
    else if (prio == 2) {
        document.getElementById('prio_urgent').innerHTML = `<div class="add_task_prio_inner_active">Urgent <div class="add_task_prio_urgent_img_white"></div></div>`;
        document.getElementById('prio_urgent').style.backgroundColor = `#FF3D00`;
    }
}

function renderAddTaskSubtasks() {
    let render = `<div class="add_task_subtasks_outer" onclick="enterSubtask()">
                    <div class="add_task_subtasks_inner">Add new subtask</div>
                    <div class="add_task_subtasks_plus"></div>
                </div>`;
    return render
}

function enterSubtask() {
    let render = `<div class="add_task_subtasks_outer">
                    <input type="text" class="add_task_subtasks_input" id="add_task_subtasks_input" minlength="2">
                    <div class="add_task_category_cross" onclick="exitEnterSubtask()"></div>
                    <div class="add_task_category_divider"></div>
                    <div class="add_task_category_hook" onclick="processSubtask()"></div>
            </div>
            <div class="error_message" id="error_message_subtask"></div>
            <div class="add_task_subtask_listing" id="add_task_subtask_listing"></div>`;
    document.getElementById('update_subtasks').innerHTML = render;
}

function exitEnterSubtask() {
    let render = renderAddTaskSubtasks();
    document.getElementById('update_subtasks').innerHTML = render;
}