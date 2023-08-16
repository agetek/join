// The renderAddTask function generates and returns a HTML structure for rendering an "Add Task" form in a Kanban
// project management tool. It includes fields for entering task details such as title, description, category, 
// assigned contacts, due date, priority, and subtasks.

function renderAddTask() {
    let render = `
    <div class="add_task">
        <span style="display:none;" class="summary_mobile_headline">Kanban Project Management Tool</span>
        <div class="add_task_header">
            <div class="add_task_headline">Add Task</div>
        </div>
        <form class="add_task_form">
        <div class="add_task_body">
            <div class="add_task_left_column">
                <label class="add_task_label_title" for="input_title">Title</label>
                <input type="text" class="input_title" id="input_title" placeholder="Enter a title">
                <div class="error_message" id="error_message_title"></div>
                <label class="add_task_label_description" for="input_description">Description</label>
                <textarea class="add_task_textarea_description" placeholder="Enter a description" id="input_description"></textarea>
                <div class="error_message" id="error_message_description"></div>
                <div class="add_task_label_description">Category</div>
                <div id="update_category" class="update_category">`
    render += renderAddTaskCategory();
    render += `</div>
                <div class="error_message" id="error_message_category"></div>
                <div class="add_task_label_description">Assigned to</div>
                <div class="update_assigned" id="update_assigned">`
    render += renderAddTaskContacts();
    render += `</div>
            <div class="error_message" id="error_message_assigned"></div>
            </div>
            <div class="add_task_divider"></div>
            <div class="add_task_right_column">
            <label class="add_task_label_date" for="input_date">Due date</label>
            <input type="date" class="input_date" id="input_date" placeholder="dd/mm/yyyy">
            <div class="error_message" id="error_message_date"></div>
            <label class="add_task_label_prio">Prio</label>
            <div class="add_task_prio">
                <div class="add_task_prio_outer" id="prio_urgent" onclick="setPriority(2)"><div class="add_task_prio_inner">Urgent <div class="add_task_prio_urgent_img"></div></div></div>
                <div class="add_task_prio_outer" id="prio_medium" onclick="setPriority(1)"><div class="add_task_prio_inner">Medium <div class="add_task_prio_medium_img"></div></div></div>
                <div class="add_task_prio_outer" id="prio_low" onclick="setPriority(0)"><div class="add_task_prio_inner">Low <div class="add_task_prio_low_img"></div></div></div>
            </div>
            <div class="error_message" id="error_message_prio"></div>
            <label class="add_task_label_subtasks">Subtasks</label>
            <div class="update_subtasks" id="update_subtasks">`
    render += renderAddTaskSubtasks();
    render += `</div>
        <div class="error_message" id="error_message_subtasks"></div>
        <div class="add_task_submit_outer">
            <div class="form_buttons">
                        <button type="reset" class="add_task_cancel" onclick="resetAddTask()">Clear</button>
                        <button type="button" class="add_task_submit" onclick="processAddTask()">Create Task</button>
            </div>
        </div> 
        </div>
        </div>
        </form>
    </div>
    `;
    return render
}

// The renderAddTaskSlideIn function is similar to renderAddTask, but it's designed to be used for a 
// slide-in version of the "Add Task" form. It provides the same structure as renderAddTask but with a different
// layout for animation purposes.

function renderAddTaskSlideIn() {
    let render = `
    <div class="add_task">
        <span style="display:none;" class="summary_mobile_headline">Kanban Project Management Tool</span>
        <div class="add_task_close" onclick="closeEdit()">
        </div>
        <form class="add_task_form">
        <div class="add_task_body">
            <div class="add_task_left_column">
                <label class="add_task_label_title" for="input_title">Title</label>
                <input type="text" class="input_title" id="input_title" placeholder="Enter a title">
                <div class="error_message" id="error_message_title"></div>
                <label class="add_task_label_description" for="input_description">Description</label>
                <textarea class="add_task_textarea_description" placeholder="Enter a description" id="input_description"></textarea>
                <div class="error_message" id="error_message_description"></div>
                <div class="add_task_label_description">Category</div>
                <div id="update_category" class="update_category">`
    render += renderAddTaskCategory();
    render += `</div>
                <div class="error_message" id="error_message_category"></div>
                <div class="add_task_label_description">Assigned to</div>
                <div class="update_assigned" id="update_assigned">`
    render += renderAddTaskContacts();
    render += `</div>
            <div class="error_message" id="error_message_assigned"></div>
            </div>
            <div class="add_task_divider"></div>
            <div class="add_task_right_column">
            <label class="add_task_label_date" for="input_date">Due date</label>
            <input type="date" class="input_date" id="input_date" placeholder="dd/mm/yyyy">
            <div class="error_message" id="error_message_date"></div>
            <label class="add_task_label_prio">Prio</label>
            <div class="add_task_prio">
                <div class="add_task_prio_outer" id="prio_urgent" onclick="setPriority(2)"><div class="add_task_prio_inner">Urgent <div class="add_task_prio_urgent_img"></div></div></div>
                <div class="add_task_prio_outer" id="prio_medium" onclick="setPriority(1)"><div class="add_task_prio_inner">Medium <div class="add_task_prio_medium_img"></div></div></div>
                <div class="add_task_prio_outer" id="prio_low" onclick="setPriority(0)"><div class="add_task_prio_inner">Low <div class="add_task_prio_low_img"></div></div></div>
            </div>
            <div class="error_message" id="error_message_prio"></div>
            <label class="add_task_label_subtasks">Subtasks</label>
            <div class="update_subtasks" id="update_subtasks">`
    render += renderAddTaskSubtasks();
    render += `</div>
        <div class="error_message" id="error_message_subtasks"></div> 
        </div>
        </div>
        <div class="add_task_submit_outer_slide_in">
            <div class="form_buttons_add_task">
                        <button type="reset" class="add_task_cancel" onclick="resetAddTask()">Clear</button>
                        <button type="button" class="add_task_submit" onclick="processAddTask()">Create Task</button>
            </div>
        </div>
        
        </form>
    </div>
    `;
    return render
}

// The renderAddTaskCategory function generates and returns a HTML structure for rendering a dropdown menu with category
// options for the task. It displays the active category and a list of available categories, allowing users to select or 
// create a new category.

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

// The openTaskCategoryDropdown function toggles the display of the category dropdown menu by updating 
// its content based on whether the categoryOpen variable is true or false.

async function openTaskCategoryDropdown() {
    if (categoryOpen) { categoryOpen = false } else { categoryOpen = true }
    let render = renderAddTaskCategory();
    document.getElementById('update_category').innerHTML = render;
}

// The renderOpenTaskCategory function generates and returns the HTML structure for displaying available 
// categories when the category dropdown menu is open. It iterates through the categories and displays 
// their names and associated color indicators.

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

// The loadOldCategories and loadOldTodos functions load and update old categories and tasks,
// respectively, by replacing them with the stored values from previous sessions.

async function loadOldCategories() {
    category = categoryOld;
    await setItem('category', category);
    return category
}

async function loadOldTodos() {
    todos = oldTodos;
    await setItem('todos', todos);
    return todos
}

// The selectCategory function updates the selected category and updates the rendering
// of the category dropdown menu accordingly.



function selectCategory(id) {
    document.getElementById("error_message_category").innerHTML = '';
    categorySelected = id;
    categoryOpen = false;
    let render = renderAddTaskCategory();
    document.getElementById('update_category').innerHTML = render;
}

// The renderActiveCategory function generates and returns the HTML structure for displaying
// the currently selected category with its associated color indicator.

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

// The addNewCategory function presents an input field for creating a new category 
// along with options for setting its name and color.

function addNewCategory() {
    document.getElementById("error_message_category").innerHTML = '';
    let render = `<div class="add_task_category_outer">
                    <div class="add_task_category_inner">
                        <input type="text" class="add_task_category_input" id="add_task_category_input" minlength="2">
                        <div class="add_task_category_cross" onclick="exitNewCategory()"></div>
                        <div class="add_task_category_divider"></div>
                        <div class="add_task_category_hook" onclick="chooseCategoryColor()"></div>
                    </div>
                </div>
                <div class="category_colors_outer" id="category_colors_outer"></div>`;
    document.getElementById('update_category').innerHTML = render;
}
// The exitNewCategory function cancels the process of creating a new category and reverts the rendering to the previous state.

function exitNewCategory() {
    categorySelected = -1;
    categoryOpen = false;
    let render = renderAddTaskCategory();
    document.getElementById('update_category').innerHTML = render;
    document.getElementById('error_message_category').innerHTML = '';
}
// The chooseCategoryColor function displays color options for the user to choose when creating a new category.

function chooseCategoryColor() {
    document.getElementById('error_message_category').innerHTML = '';
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

// The saveNewCategory function saves the newly created category and updates the rendering to reflect the changes.

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

// The getMaxCategoryId function calculates and returns a new unique category ID by finding the maximum category ID within the provided category list and incrementing it by one. 
// This ensures the generation of a higher ID that can be used for adding a new category while avoiding ID collisions.

function getMaxCategoryId() {
    let max = null;
    for (let i = 0; i < category.length; i++) {
        if (max == null || category[i]['id'] > max)
            max = category[i]['id'];
    }
    return max + 1;
}

// The addTaskPopup function initiates the process of adding a new task by resetting various states and loading category data.
// It creates a popup interface within the container element and renders the task creation form (renderAddTaskSlideIn)
// within the popup. This function is triggered when the user wants to add a new task, setting up the necessary components 
// for task creation with a slide-in animation effect.

async function addTaskPopup() {
    categoryOpen = false;
    categorySelected = -1;
    activeSubtasks = [];
    category = await getItem('category');
    oldContent = document.getElementById('container').innerHTML;
    let newContent = `<div class="popup" id="popup" onclick="closeEdit()">
                        <div class="add_task_popup" onclick="event.stopPropagation()" id="popup_content">`;
    newContent += renderAddTaskSlideIn();
    newContent += `</div>
                </div>`;
    document.getElementById('container').innerHTML = oldContent + newContent;
    setTimeout(() => { shiftPopupIn() }, 1);
}

// The renderAddTaskContacts function generates the UI components for selecting contacts to assign to a task.
// It sets up a section where users can choose contacts from a dropdown, and a separate section to display 
// the currently selected contacts. The function triggers the renderOpenTaskContacts subfunction to render the 
// list of contacts available for selection and subsequently returns the generated HTML structure representing
// the contacts section for task assignment.

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
// The renderOpenTaskContacts function generates the UI representation for a list of contacts available for task assignment. 
// It creates checkboxes for each contact, including a special checkbox for the active user and an option to invite new contacts.

function renderOpenTaskContacts() {
    let render = '';
    if (contactsOpen) {
        let check = getCheck(activeUserId);
        render += `<div class="add_task_contact_outer" onclick="toggleContactId(${activeUserId})">
                    <div class="add_task_contact_text">You</div>
                    <input class="add_task_contacts_checkbox" type="checkbox" id="addtask_contact_${activeUserId}"${check}>
                </div>`;
        render += renderContactsLoop();
        render += `<div class="add_task_contact_outer" onclick="inviteContact()">
        <div class="add_task_contact_text">Invite new contact</div>
        <div class="add_task_contact_invite" onclick="inviteContact()"></div>
    </div>`;
    }
    return render
}

// The renderContactsLoop function generates a series of UI elements displaying the names of available contacts
// for task assignment. It iterates through the list of users, excluding the active user, and creates checkboxes
// associated with each contact's name, allowing selection for task assignment.

function renderContactsLoop() {
    sortUsersByName();
    let render = '';
    for (let i = 0; i < users.length; i++) {
        if (!(users[i]['id'] == activeUserId)) {
            let check = getCheck(users[i]['id']);
            render += `
                    <div class="add_task_contact_outer" onclick="toggleContactId(${users[i]['id']})">
                        <div class="add_task_contact_text">${users[i]['name']}</div>
                        <input class="add_task_contacts_checkbox" type="checkbox" id="addtask_contact_${users[i]['id']}" ${check}>
                    </div>`;
        }
    }
    return render
}

// The getCheck function checks whether a given contact's ID is present in the addTaskContactsSelected array,
// which stores the IDs of contacts selected for task assignment. If the contact's ID is found in the array,
// the function returns the string " checked", indicating that the checkbox associated with that contact should be
// in a checked state.

function getCheck(id) {
    let render = '';
    for (let i = 0; i < addTaskContactsSelected.length; i++) {
        if (addTaskContactsSelected[i] == id) {
            render = ' checked';
        }
    }
    return render;
}

// The openTaskContactsDropdown function toggles the visibility of the contacts dropdown in the "Add Task" popup
// and dynamically updates the displayed contacts based on the toggled state. It also manages the rendering of
// selected contacts when closing the dropdown and clearing the selected contacts area when opening the dropdown.

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

// The toggleContactId function is responsible for adding or removing contact IDs from the addTaskContactsSelected
// array based on user interactions. It also clears any displayed error message related to assigned contacts.
// The function searches for the specified contact ID within the array and either adds it if not present, or removes
// it if already contained.

function toggleContactId(id) {
    document.getElementById("error_message_assigned").innerHTML = '';
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
    document.getElementById("update_contacts").innerHTML = renderOpenTaskContacts();
}

// The renderSelectedContacts function generates the visual representation of the selected contacts
// in the add task popup. It iterates through the addTaskContactsSelected array, which contains the IDs 
// of the selected contacts. For each selected contact ID, the function filters the users array to 
// find the corresponding user object. It then renders the initials of the user within a designated 
// container for each selected contact.

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

// The inviteContact function is responsible for displaying the user interface elements 
// that allow the user to input an email address in order to invite a new contact. 
// It generates HTML elements, including an input field for the email address, a cross icon 
// to exit the invitation interface, a divider, and a hook icon to initiate the process of 
// inviting the contact. The generated HTML content is then inserted into the element with the
//  ID update_assigned, replacing its previous content.

function inviteContact() {
    document.getElementById("error_message_assigned").innerHTML = '';
    let render = `<div class="add_task_category_outer">
        <div class="add_task_category_inner">
            <input type="text" class="add_task_category_input" id="add_task_contact_email" minlength="2" maxlength="60">
            <div class="add_task_category_cross" onclick="exitInviteContact()"></div>
            <div class="add_task_category_divider"></div>
            <div class="add_task_category_hook" onclick="processInviteContact()"></div>
        </div>
    </div>`;
    document.getElementById('update_assigned').innerHTML = render;
}
// The exitInviteContact function handles the action when the user decides to exit the contact invitation
// interface. It first clears any error message displayed on the page. Then, it sets the contactsOpen flag 
// to false to indicate that the contact dropdown should be closed. Next, it generates the HTML content for 
// rendering the contacts dropdown interface and replaces the content of the element with the ID update_assigned
// with this new content. Lastly, it generates and renders the selected contacts in the designated element 
// with the ID add_task_selected_contacts.

function exitInviteContact() {
    document.getElementById('error_message_assigned').innerHTML = '';
    contactsOpen = false;
    let render = renderAddTaskContacts();
    document.getElementById('update_assigned').innerHTML = render;
    render = renderSelectedContacts();
    document.getElementById('add_task_selected_contacts').innerHTML = render;
}

// The processInviteContact function manages the process of inviting a new contact to the task. It retrieves
//  the email input, validates it, and if the email is valid, it adds the new user using the addUser function, 
// includes the user's ID in the selected contacts list, and exits the contact invitation interface. If the 
// email is not valid, it clears the input and displays an error message indicating the absence of a valid 
// email address.

async function processInviteContact() {
    document.getElementById('error_message_assigned').innerHTML = '';
    let email = document.getElementById('add_task_contact_email').value;
    if (validateEmail(email)) {
        let id = await addUser(email);
        addTaskContactsSelected.push(id);
        exitInviteContact();
    } else {
        document.getElementById('add_task_contact_email').value = '';
        document.getElementById('error_message_assigned').innerHTML = 'No valid email address';
    }
}

// The validateEmail function checks whether a given email address is valid by testing if it follows
// the pattern of having at least two characters before the "@" symbol, followed by a word 
// (alphanumeric characters and underscores), a dot, and another word. If the pattern matches, the 
// function returns true; otherwise, it returns false.


function validateEmail(email) {
    return /^.{2,}@\w+\.\w+$/.test(email);
}

// The addUser function takes an email address as input and adds a new user to the list of users.
// It generates a name from the first two letters of the email, sets other user attributes such as phone number,
// 'color, and ID using helper functions, adds the new user to the users array, and then stores the updated
// user list using the setItem function. Finally, the function returns the newly assigned user ID.

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

// The setPriority function is responsible for updating the task priority display based on the
// selected priority level. It takes a priority value as input and modifies the appearance of the priority
// options accordingly. The function sets the priority variable, updates the inner HTML and background color 
// of the priority options based on the given priority value, indicating the active priority level with 
// appropriate styling.


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

// The renderAddTaskSubtasks function generates the HTML content for displaying a section of subtasks
// within the add task popup. It creates an "Add new subtask" button and an empty container for 
// listing subtasks. The button is designed to trigger the enterSubtask() function upon clicking, which 
// likely allows users to input new subtasks. The generated HTML is returned as a string for rendering.

function renderAddTaskSubtasks() {
    let render = `<div class="add_task_subtasks_outer" onclick="enterSubtask()">
                    <div class="add_task_subtasks_inner">Add new subtask</div>
                    <div class="add_task_subtasks_plus"></div>
                </div>
                <div class="add_task_subtask_listing" id="add_task_subtask_listing"></div>`;
    return render
}

// The enterSubtask function dynamically updates the content within the add task popup to allow users to 
// input new subtasks. It replaces the "Add new subtask" button with an input field and buttons to confirm 
// or cancel the subtask addition. After updating the content, the function calls renderSubtasksListing() 
// to refresh the listing of subtasks displayed in the popup.

function enterSubtask() {
    let render = `<div class="add_task_subtasks_outer">
                    <input type="text" class="add_task_subtasks_input" id="add_task_subtasks_input" minlength="2">
                    <div class="add_task_category_cross" onclick="exitEnterSubtask()"></div>
                    <div class="add_task_category_divider"></div>
                    <div class="add_task_category_hook" onclick="processSubtask()"></div>
            </div>
            <div class="add_task_subtask_listing" id="add_task_subtask_listing"></div>`;
    document.getElementById('update_subtasks').innerHTML = render;
    renderSubtasksListing();
}

// The exitEnterSubtask function reverts the content within the add task popup back to the initial state
// for adding new subtasks. It replaces any input fields and buttons related to adding a subtask with
// the "Add new subtask" button. After updating the content, the function calls renderSubtasksListing() to 
// refresh the listing of subtasks displayed in the popup.

function exitEnterSubtask() {
    let render = renderAddTaskSubtasks();
    document.getElementById('update_subtasks').innerHTML = render;
    renderSubtasksListing();
}

// The processSubtask function validates the input for a new subtask and, if the input is valid, adds the subtask
// to the list of active subtasks. It then updates the content of the subtask listing and resets the input 
// field. If the input is not valid, it clears the input field without adding the subtask.

function processSubtask() {
    let check = validateSubtask();
    if (check) {
        addTasksubtasks();
        let render = renderAddTaskSubtasks();
        document.getElementById('update_subtasks').innerHTML = render;
        renderSubtasksListing();
    } else {
        document.get('add_task_subtasks_input').value = '';
    }
}

// The validateSubtask function checks if the input for a new subtask is valid. It searches for 
// invalid characters such as double quotes, single quotes, and backticks. It also checks the length of 
// the input and displays appropriate error messages if the input is too short or too long. If all 
// checks pass, the function returns true, indicating that the subtask input is valid; otherwise, it returns false.

function validateSubtask() {
    let check = document.getElementById('add_task_subtasks_input').value;
    let check_1 = check.search('"');
    let check_2 = check.search("'");
    let check_3 = check.search('`');
    let check_4 = check.length;
    let reply = true;
    if (check_1 >= 0 || check_2 >= 0 || check_3 >= 0) {
        reply = false;
        document.getElementById('error_message_subtasks').innerHTML = 'The subtask contains invalid characters';
    }
    if (check_4 < 3) {
        reply = false;
        document.getElementById('error_message_subtasks').innerHTML = 'The subtask is too short';
    }
    if (check_4 > 60) {
        reply = false;
        document.getElementById('error_message_subtasks').innerHTML = 'The subtask is too long';
    }
    return reply
}

function addTasksubtasks() {
    let id = getMaxSubtaskId();
    let title = document.getElementById('add_task_subtasks_input').value;
    let checked = false;
    let subtask = {
        'id': id,
        'title': title,
        'checked': false
    }
    activeSubtasks.push(subtask);
}

// The addTasksubtasks function is responsible for adding a new subtask to the list of active subtasks.
// It retrieves the subtask title from the input field, assigns an ID to the subtask using the getMaxSubtaskId
// function, and initializes the checked property to false. The new subtask object is then added to 
// the activeSubtasks array.

function getMaxSubtaskId() {
    let max = null;
    for (let i = 0; i < activeSubtasks.length; i++) {
        if (max == null || activeSubtasks[i]['id'] > max)
            max = activeSubtasks[i]['id'];
    }
    return max + 1;
}

// The renderSubtasksListing function is responsible for displaying the list of active subtasks in the UI.
// It iterates through the activeSubtasks array and generates HTML markup for each subtask, including
// a checkbox that represents the subtask's completion status, the subtask title, and a trash icon to delete
// the subtask. The function then updates the HTML content of the element with the ID 
// add_task_subtask_listing to display the rendered subtask list. If a subtask is checked, the corresponding
// checkbox is marked as checked.

function renderSubtasksListing() {
    document.getElementById('error_message_subtasks').innerHTML = '';
    let render = '';
    for (let i = 0; i < activeSubtasks.length; i++) {
        let id = activeSubtasks[i]['id'];
        let check = '';
        if (activeSubtasks[i]['checked']) { check = 'checked'; }
        render += `<div class="subtasks_listing_outer">
                    <input class="add_task_contacts_checkbox" type="checkbox" onclick="toggleSubtaskCheck(${i})" id="subtask_listing_${id}"${check}>
                    <div class="subtasks_listing_inner">${activeSubtasks[i]['title']}</div>
                    <div class="subtask_listing_trash" onclick="deleteSubtask(${i})"></div>
                </div>`;
    }
    document.getElementById('add_task_subtask_listing').innerHTML = render;
}

// The deleteSubtask function is responsible for removing a subtask from the activeSubtasks array based on its index. 
// It uses the splice method to remove the subtask at the specified index (id). After removing the subtask,
// the renderSubtasksListing function is called to update the UI and display the updated list of active subtasks.

function deleteSubtask(id) {
    activeSubtasks.splice(id, 1);
    renderSubtasksListing();
}

//The toggleSubtaskCheck function toggles the checked status of a subtask at the given index i within the 
// activeSubtasks array. If the subtask's checked status is currently false, it changes it to true, and vice versa.
// This function is used to update the completion status of a subtask when the associated checkbox is clicked in the UI.

function toggleSubtaskCheck(i) {
    if (activeSubtasks[i]['checked'] == false) { activeSubtasks[i]['checked'] = true }
    else { activeSubtasks[i]['checked'] = false }
}

// The resetAddTask function simply calls the openAddTask function

function resetAddTask() {
    openAddTask();
}

// The processAddTask function starts by clearing various error message elements on the UI.
// It then validates the input fields for adding a task using the validateAddTask function. If the 
// validation passes, it proceeds to save the task using the saveAddTask function, which might
// involve database or storage operations.

async function processAddTask() {
    document.getElementById("error_message_title").innerHTML = '';
    document.getElementById("error_message_description").innerHTML = '';
    document.getElementById("error_message_category").innerHTML = '';
    document.getElementById("error_message_assigned").innerHTML = '';
    document.getElementById("error_message_date").innerHTML = '';
    document.getElementById("error_message_prio").innerHTML = '';
    document.getElementById("error_message_subtasks").innerHTML = '';
    let check = validateAddTask();
    if (check) {
        await saveAddTask();
    }
}

// The saveAddTask function extracts input values like title, description, category, assigned contacts, 
// date, priority, and subtasks. It creates a new task object with these values and adds it to the todos array. 
// The function then stores this updated array using the setItem function. A success message is displayed
// using the shiftMessage function, and after a short delay, the openBoard function is called to navigate back to
// the task board view.

async function saveAddTask() {
    let title = document.getElementById('input_title').value;
    let description = document.getElementById('input_description').value;
    let category = categorySelected;
    let assigned = addTaskContactsSelected;
    let date = document.getElementById('input_date').value;
    let prio = priority;
    let subtasks = activeSubtasks;
    let id = getMaxTodoId();
    let todo = {
        'id': id,
        'bucket': 'window1',
        'title': title,
        'description': description,
        'category_id': category,
        'user_ids': assigned,
        'due_date': date,
        'prio': prio,
        'subtasks': subtasks
    };
    todos.push(todo);
    
    await setItem('todos', todos); 
    setTimeout(function() {
    shiftMessage('Task successfully added');}, 250);
    openBoard();
}

// The getMaxTodoId function iterates through the existing todos array to find the maximum task ID. 
// It then returns the maximum ID value incremented by 1, which can be used to assign a new 
// unique ID to a newly created task.

function getMaxTodoId() {
    let max = null;
    for (let i = 0; i < todos.length; i++) {
        if (max == null || todos[i]['id'] > max)
            max = todos[i]['id'];
    }
    return max + 1;
}

// The validateAddTask function checks various input fields for a new task creation, 
// such as title, description, category, assigned contacts, due date, and priority. 
// It returns a boolean value indicating whether all the validations are successful, which
// determines whether the task creation process should proceed or not.

function validateAddTask() {
    let reply = false;
    let title = document.getElementById('input_title').value;
    let description = document.getElementById('input_description').value;
    let category = categorySelected;
    let assigned = addTaskContactsSelected;
    let date = document.getElementById('input_date').value;
    let prio = priority;
    let subtasks = activeSubtasks;
    let check_title = validateTitle(title);
    let check_description = validateDescription(description);
    let check_category = validateCategory(category);
    let check_assigned = validateAssigned(assigned);
    let check_date = validateDate(date);
    let check_prio = validatePrio(prio);
    if (check_title && check_description && check_category && check_assigned && check_date && check_prio) {
        reply = true;
    }
    return reply
}

// The validatePrio function checks whether a priority level has been selected for the task. 
// If no priority level has been selected (indicated by prio being -1), it displays an error message 
// and returns false, indicating that the validation has failed. Otherwise, it returns true, 
// indicating that the validation is successful.

function validatePrio(prio) {
    let reply = true;
    if (prio == -1) {
        document.getElementById("error_message_prio").innerHTML = "Please select a Priority";
        reply = false;
    }
    return reply
}

// The validateDate function checks whether the selected date for the task is valid.
// It calculates the current date and time, compares it with the selected date, and ensures 
// that the selected date is in the future. If no date is selected, it displays an error 
// message and returns false, indicating that the validation has failed. If the selected date 
// is in the past, it displays an error message as well and returns false. Otherwise, it 
// returns true, indicating that the validation is successful.


function validateDate(date) {
    let now = Date.now();
    let days = Math.floor(now / 86400000);
    let newNow = days * 24 * 60 * 60 * 1000;
    let givenDate = new Date(date).getTime();
    let reply = true;
    if (!date) {
        document.getElementById("error_message_date").innerHTML = "Please select a date";
        reply = false;
    } else {
        if (givenDate - newNow < 0) {
            document.getElementById("error_message_date").innerHTML = "The date has to be in the future";
            reply = false;
        }
    }
    return reply
}

// The validateAssigned function checks if at least one contact is assigned to the task. If no contact 
// is selected, it displays an error message and returns false, indicating that the validation has failed.
// Otherwise, it returns true, indicating that the validation is successful.

function validateAssigned(assigned) {
    let reply = true;
    if (assigned[0] == undefined) {
        document.getElementById("error_message_assigned").innerHTML = "Please select a contact";
        reply = false;
    }
    return reply
}

// The validateCategory function validates whether a category is selected for the task. If no category 
// is selected (when category is equal to -1), it displays an error message and returns false to indicate the 
// validation failure. Otherwise, it returns true to indicate that the validation is successful.

function validateCategory(category) {
    let reply = true;
    if (category == -1) {
        document.getElementById("error_message_category").innerHTML = "Please select a category";
        reply = false;
    }
    return reply
}

// The validateTitle function checks the validity of the task title. It searches for 
// invalid characters (", ', and `) and ensures that the title is neither too short (less than 3 characters) 
// nor too long (more than 60 characters). If any of these conditions are met, it displays corresponding 
// error messages and returns false to indicate validation failure. Otherwise, it returns true to indicate 
// that the title is valid.

function validateTitle(title) {
    let check = title;
    let check_1 = check.search('"');
    let check_2 = check.search("'");
    let check_3 = check.search('`');
    let check_4 = check.length;
    let reply = true;
    if (check_1 >= 0 || check_2 >= 0 || check_3 >= 0) {
        reply = false;
        document.getElementById('error_message_title').innerHTML = 'The title contains invalid characters';
    }
    if (check_4 < 3) {
        reply = false;
        document.getElementById('error_message_title').innerHTML = 'The title is too short';
    }
    if (check_4 > 60) {
        reply = false;
        document.getElementById('error_message_title').innerHTML = 'The title is too long';
    }
    return reply
}

// The validateDescription function performs a similar task to the previous validation functions, 
// but it's specific to validating the description of the task. It checks for the presence of 
// invalid characters (", ', and `) and also ensures that the description is not too short 
// (less than 3 characters) or too long (more than 400 characters). If any of these conditions 
// are met, it displays corresponding error messages and returns false to indicate validation failure. 
// Otherwise, it returns true to indicate that the description is valid.

function validateDescription(description) {
    let check = description;
    let check_1 = check.search('"');
    let check_2 = check.search("'");
    let check_3 = check.search('`');
    let check_4 = check.length;
    let reply = true;
    if (check_1 >= 0 || check_2 >= 0 || check_3 >= 0) {
        reply = false;
        document.getElementById('error_message_description').innerHTML = 'The description contains invalid characters';
    }
    if (check_4 < 3) {
        reply = false;
        document.getElementById('error_message_description').innerHTML = 'The description is too short';
    }
    if (check_4 > 400) {
        reply = false;
        document.getElementById('error_message_description').innerHTML = 'The description is too long';
    }
    return reply
}