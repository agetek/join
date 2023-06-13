function renderAddContact() {
    let render = `
    <div class="add_contact" onclick="event.stopPropagation()" id="popup_content">
        <div class="contact_design"><div class="add_contact_img"></div></div>
        <div class="contact_input">
            <div class="avatar_add"></div>
                <form action="javascript:addContact()">
                    <div class="edit_form">
                        <input type="text" class="input_name" id="input_name" placeholder="Name" pattern="[a-zA-Z]{2,}[\\s]{1}[a-zA-Z]{2,}" required>
                        <input type="email" class="input_email" id ="input_email" placeholder="Email" required>
                        <input type="text" class="input_phone" id ="input_phone" placeholder="Phone" required>
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
                        <input type="text" class="input_phone" id ="input_phone" placeholder="Phone" required>
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
                <div onclick="openHelp()">
                <img src="img/question_mark.svg" class="header_help"> 
                </div>
                <img src="img/avatar_profile.png" class="header_profile_img">
            </div>
        </div>`;
    return render;
}

function renderFooter() {
    let render = `
    <div class="footer_mobile" style="display:none">
        <div id="footer_summary" class="footer_buttons">
            <img class="summary_footer_img"  src="img/summary_icon.svg">
            <div class="summary_footer">Summary
            </div>
        </div>
        <div id="footer_buttons" class="footer_buttons">
            <img class="summary_footer_img"  src="img/board_icon.svg"> 
            <div class="summary_footer">Board
            </div>
        </div>
        <div id="footer_add_task" class="footer_buttons">
            <img class="summary_footer_img"  src="img/add_task_icon.svg">
            <div class="summary_footer">Add Task
            </div>
        </div>
        <div id="footer_contacts" class="footer_buttons">
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
    render += renderFooter();
    return render;
}

function addTask() {
    let render = renderSidebar();
    activeSubtasks = [];
    render += `<div class="right">`;
    render += renderHeader();
    render += `<div class="middle_column" id="update_task">`;
    render += renderAddTask();
    render += `</div>`;
    render += `</div>`;
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

function openSummary() {
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