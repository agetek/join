function renderAddContact() {
    let render = `
    <div class="add_contact" onclick="event.stopPropagation()" id="popup_content">
        <div class="contact_design">
            <img src="img/cross_add_contact.svg" onclick="closeEdit()" style="display:none" class="close_add_contact">
            <span style="display:none" class="add_contact_span">Add Contact</span>
            <span style="display:none" class="add_contact_description">Tasks are better with a team!</span>
            <div style="display:none" class="divider_add_contact"></div>
        <div class="add_contact_img"></div></div>
        <div class="contact_input">
            <div class="avatar_add"></div>
                <form action="javascript:addContact()">
                    <div class="edit_form">
                        <input type="text" class="input_name" id="input_name" placeholder="Name" pattern="[a-zA-Z]{2,}[\\s]{1}[a-zA-Z]{2,}" required>
                        <input type="email" class="input_email" id ="input_email" placeholder="Email" required>
                        <input type="number" class="input_phone" id ="input_phone" placeholder="Phone" required>
                    </div>
                    <div class="form_buttons">
                        <button type="reset" class="cancel">Cancel</button>
                        <button type="submit" class="submit">Create contact</button>
                    </div>
                </form>
            </div>
            <div class="close" onclick="closeEdit()"></div>
        </div>
    </div>`;
    return render;
}

function renderEditContact() {
    let render = `
    <div class="edit_contact" onclick="event.stopPropagation()" id="popup_content">  
        <div class="contact_design"><div class="edit_contact_img"></div></div>
        <div class="contact_input">
            <div class="avatar" id="avatar"></div>
                <form>
                    <div class="edit_form">
                        <input type="text" class="input_name" id="input_name" placeholder="Name" required>
                        <input type="email" class="input_email" id ="input_email" placeholder="Email" required>
                        <input type="number" class="input_phone" id ="input_phone" placeholder="Phone" required>
                    </div>
                    <div class="form_buttons">
                        <button type="submit" class="delete" formaction="javascript:deleteContact()">Delete</button>
                        <button type="submit" class="save"  formaction="javascript:updateContact()">Save</button>
                    </div>
                </form>
            </div>
            <div class="close" onclick="closeEdit()"></div>
        </div>
    </div>`;
    return render;
}

function renderEditContactMobile() {
    let render = `
    <div class="edit_contact_mobile" onclick="event.stopPropagation()" id="popup_content_mobile">  
        <div class="contact_design_mobile"><div class="close_mobile" onclick="closeEditMobile()"></div>
        <div class="contact_design_logo_mobile">
        <div class="contact_design_edit_mobile">Edit contact</div><div class="contact_design_line_mobile"></div></div></div>
        <div class="contact_input_mobile">
            <div class="avatar_mobile" id="avatar"></div>
                <form class="form_mobile">
                    <div class="edit_form_mobile">
                        <input type="text" class="input_name" id="input_name" placeholder="Name" required>
                        <input type="email" class="input_email" id ="input_email" placeholder="Email" required>
                        <input type="number" class="input_phone" id ="input_phone" placeholder="Phone" required>
                    </div>
                    <div class="form_buttons_mobile">
                        <button type="submit" class="delete" formaction="javascript:deleteContact()">Delete</button>
                        <button type="submit" class="save"  formaction="javascript:updateContactMobile()">Save</button>
                    </div>
                </form>
            </div>
        </div>
    </div>`;
    return render;
}

function renderAddContactMobile() {
    let render = `
    <div class="edit_contact_mobile" onclick="event.stopPropagation()" id="popup_content_mobile">  
        <div class="contact_design_mobile"><div class="close_mobile" onclick="closeEditMobile()"></div>
        <div class="contact_design_logo_mobile">
        <div class="contact_design_edit_mobile">Add contact</div>
        <div class="contact_design_subtext_mobile">Tasks are better with a team!</div>
        <div class="contact_design_line_mobile"></div>
        </div></div>
        <div class="contact_input_mobile">
            <div class="avatar_add_mobile" id="avatar"></div>
                <form class="form_mobile" action="javascript:addContactMobile()">
                    <div class="edit_form_mobile">
                        <input type="text" class="input_name" id="input_name" placeholder="Name" required>
                        <input type="email" class="input_email" id ="input_email" placeholder="Email" required>
                        <input type="number" class="input_phone" id ="input_phone" placeholder="Phone" required>
                    </div>
                    <div class="form_buttons_mobile">
                        <button type="submit" class="add_task_submit_mobile">Create contact</button>
                    </div>
                </form>
            </div>
        </div>
    </div>`;
    return render;
}

function renderSidebar() {
    let render = `<div class="sidebar">
                    <div class="sidebar_menu_logo_img">
                        <img class="sidebar_logo_img" src="img/logo.svg" alt=""> 
                        <div class="sidebar_menu">      
                            <div class="sidebar_point" onclick="openSummary()" id="open_summary"><div class="sidebar_img sidebar_summary"></div><div class="sidebar_text">Summary</div></div>
                            <div class="sidebar_point" onclick="openBoard()" id="open_board"><div class="sidebar_img sidebar_board"></div><div class="sidebar_text">Board</div></div>
                            <div class="sidebar_point" onclick="openAddTask()" id="open_add_task"><div class="sidebar_img sidebar_add_task"></div><div class="sidebar_text">Add Task</div></div>
                            <div class="sidebar_point" onclick="openContacts()" id="open_contacts"><div class="sidebar_img sidebar_contacts_active"></div><div class="sidebar_text">Contacts</div></div>
                        </div>
                    </div>
                    <div class="sidebar_legal_notice" onclick="openLegalNotice()"><div class="sidebar_legal_notice_img"></div><div class="sidebar_text">Legal notice</div></div>
                </div>`;
    return render;
}

function renderHeader() {
    let render = `<div class="header">
            <img class="logo_header" style="display:none" src="img/header_logo.svg">
            <div class="header_text">Kanban Project Management Tool</div>
            <div class="question_and_avatar">
            <div id="info-container" style="display: none;">
            <div id="info-content">
            <span class="log_out_menu" onclick="logOut()">Log Out</span>
            <span class="hide_mobile_info" onclick="openLegalNotice()">Legal notice</span>
            <span class="open_help_menu" onclick="openHelp()">Open Help</span>
            </div>
            </div>
            <div onclick="openHelp()">
            <img class="header_question" src="img/question_mark.svg" class="header_help"> 
            </div>
            <img onclick="openInfo()" src="img/avatar_profile.png" id="add_task_edits" class="header_profile_img">
            </div>
        </div>`;
    return render;
}

// 

function renderHeaderAdd_Task() {
    let render = `<div class="header">
            <img class="logo_header" style="display:none" src="img/header_logo.svg">
            <div class="header_text">Kanban Project Management Tool</div>
            <div class="question_and_avatar">
            <div class="form_buttons">
            <button id="show_button_mobile" style="display:none;" type="button" class="add_task_submit" onclick="processAddTask()">Create Task</button>
            </div>
                <div class="hide_mobile" onclick="openHelp()">
                <img src="img/question_mark.svg" class="header_help"> 
                </div>
                <img src="img/avatar_profile.png" id="add_task_edits" class="mobile_header_profile_img">
            </div>
        </div>`;
    return render;
}

function renderFooter() {
    let render = `
    <div class="footer_mobile" style="display:none">
        <div onclick="openSummary()" id="footer_summary" class="footer_buttons">
            <img class="summary_footer_img"  src="img/summary_icon.svg">
            <div class="summary_footer">Summary
            </div>
        </div>
        <div onclick="openBoard()" id="footer_buttons" class="footer_buttons">
            <img class="summary_footer_img"  src="img/board_icon.svg"> 
            <div class="summary_footer">Board
            </div>
        </div>
        <div onclick="openAddTask()" id="footer_add_task" class="footer_buttons">
            <img class="summary_footer_img"  src="img/add_task_icon.svg">
            <div class="summary_footer">Add Task
            </div>
        </div>
        <div onclick="openContacts()" id="footer_contacts" class="footer_buttons">
            <img class="summary_footer_img" src="img/contacts_icon.svg">
            <div class="summary_footer">Contacts
            </div>
        </div>
    </div>
    
    `
    return render;
}

function renderBoard() {
    let render = renderSidebar();
    render += `<div class="right">`;
    render += renderHeader();
    render += `<div class="middle_column">`;
    render += board();
    render += `</div>`;
    render += `</div>`;
    render += `<div class="footer">`;
    render += renderFooter();
    render += `</div>`;
    return render;
}

function addTask() {
    let render = renderSidebar();
    activeSubtasks = [];
    render += `<div class="right">`;
    render += renderHeaderAdd_Task();
    render += `<div class="middle_column" id="update_task">`;
    render += renderAddTask();
    render += `</div>`;
    render += `</div>`;
    render += renderFooter();
    return render;
}

function summary() {
    let render = renderSidebar();
    render += `<div class="right">`;
    render += renderHeader();
    render += `<div class="middle_column">`;
    render += renderSummary();
    render += `</div>`;
    render += renderFooter();
    render += `</div>`;
    return render;
}

async function openAddTask() {
    categoryOpen = false;
    contactsOpen = false;
    categorySelected = -1;
    userSelfId = 0;
    addTaskContactsSelected = [];
    priority = -1;
    activeSubtasks = [];
    category = await getItem('category');
    let render = addTask();
    document.getElementById('container').innerHTML = render;
    document.getElementById('open_add_task').classList.add('sidebar_point_active');
}

async function openSummary() {
    todos = await getItem('todos');
    activeUserId = await getItemLocal('activeUserId');
    let render = summary();
    document.getElementById('container').innerHTML = render;
    document.getElementById('open_summary').classList.add('sidebar_point_active');
}

function openHelp() {
    let render = renderSidebar();
    render += `<div class="right">`;
    render += renderHeader();
    render += `<div class="middle_column">`;
    render += renderHelp();
    render += `</div>`;
    render += renderFooter();
    render += `</div>`;
    document.getElementById('container').innerHTML = render;
}

function openLegalNotice() {
    let render = renderSidebar();
    render += `<div class="right">`;
    render += renderHeader();
    render += `<div class="middle_column">`;
    render += renderLegal();
    render += `</div>`;
    render += renderFooter();
    render += `</div>`;
    document.getElementById('container').innerHTML = render;
}

function logOut() {
    activeUserId = -1;
    localStorage.setItem('activeUserId', activeUserId)

    render = openLogin();
}