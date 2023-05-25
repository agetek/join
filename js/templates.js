function renderAddContact() {
    let render = `<div class="add_contact">
        <div class="contact_design"><img class="logo" src="">Tasks are better with a team!<div class="design_line"></div></div>
        <div class="contact_input">
            <div class="close"></div>
            <img class="avatar" src="">
            <form onsubmit="addContact()">
                <input type="text" class="input_name" id="input_name" placeholder="Name" required>
                <input type="text" class="input_email" id ="input_email" placeholder="Email" required>
                <input type="text" class="input_phone" id ="input_phone" placeholder="Phone" required>
                <div class="form_buttons">
                    <button class="cancel">Cancel</button>
                    <button type="submit" class="submit">Create contact</button>
                </div>
            </form>
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
                    <button class="cancel">Delete</button>
                    <button type="submit" class="submit">Save</button>
                </div>
            </form>
        </div>
    </div>`;
    return render;
}