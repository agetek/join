function renderAddContact() {
    let render = `
    <div class="add_contact">
        <div class="contact_design">
             <img class="small_logo" src="img/small_logo_add_contact.svg"> 
             <span class="slogan_add_contact">Add contact</span> 
             <span class="description_contact">Tasks are better with a team!</span>
             <div class="design_line">
             </div>
        </div>
        <div class="contact_input">
            <img class="avatar" src="img/icon_profile.svg">
            <div class="contact_second_side">
                <div class="close"></div>
                <form class="form_contact" onsubmit="addContact()" action="">
                    <input type="text" class="input_name" id="input_name" placeholder="Name" required>
                    <input type="email" class="input_email" id ="input_email" placeholder="Email" required>
                    <input type="text" class="input_phone" id ="input_phone" placeholder="Phone" required>
                
                <div class="form_buttons">
                    <button type="reset" class="cancel">Cancel</button>
                    <button type="submit" class="submit">Create Contact</button>
                </div>  
                </form>   
            <div>
        </div>
    </div>`;
    return render;
}

function renderEditContact() {
    let render = `<div class="edit_contact">
        <div class="contact_design"><img class="logo" src=""><div class="design_line"></div></div>
        <div class="contact_input">
            <div class="close"></div>
            <img class="avatar" src="">
            <form onsubmit="editContact()">
                <input type="text" class="input_name" id="input_name" placeholder="Name" required>
                <input type="text" class="input_email" id ="input_email" placeholder="Email" required>
                <input type="text" class="input_phone" id ="input_phone" placeholder="Phone" required>
                <div class="form_buttons">
                    <button class="cancel" onclick="deleteContact()">Delete</button>
                    <button type="submit" class="submit">Save</button>
                </div>
            </form>
        </div>
    </div>`;
    return render;
}


function renderRegisterForm(){
    let render = `<form onsubmit="register(); return false;">
    <input required type="email" id="email"> 
    <input required type="password" id="password"> 
    <button id="registerBtn">Registrieren</button></form>`;
    return render;
}

function renderSidebar() {
    let render = `<div class="sidebar">
                    <div class="sidebar_menu_logo_img">
                        <img class="sidebar_logo_img" src="img/logo.svg" alt=""> 
                        <div class="sidebar_menu">      
                            <div class="sidebar_point" onclick="openSummary()"><div class="sidebar_img sidebar_summary"></div><div class="sidebar_text">Summary</div></div>
                            <div class="sidebar_point" onclick="openBoard()"><div class="sidebar_img sidebar_board"></div><div class="sidebar_text">Board</div></div>
                            <div class="sidebar_point" onclick="addTask()"><div class="sidebar_img sidebar_add_task"></div><div class="sidebar_text">Add Task</div></div>
                            <div class="sidebar_point_active" onclick="openContacts()"><div class="sidebar_img sidebar_contacts_active"></div><div class="sidebar_text">Contacts</div></div>
                        </div>
                    </div>
                    <div class="sidebar_legal_notice" onclick="openLegalNotice()"><div class="sidebar_legal_notice_img"></div><div class="sidebar_text">Legal notice</div></div>
                </div>`;
    return render;
}

function renderHeader() {
    let render = `<div class="header">
            <div class="header_text">Kanban Project Management Tool</div>
            <div class="header_help"></div>
            <div class="header_profile_img"></div>
        </div>`;
    return render;
}

function renderContacts() {
    let render = renderSidebar();
    render += `<div class="middle_column">`;
    render += renderHeader();
    render += renderContactsOverview();
    render += `</div>`;
    render += renderContactsDetails();
    return render;
}