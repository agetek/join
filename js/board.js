async function openBoard() {
    todos = await getItem('todos');
    category = await getItem('category');
    let render = await renderBoard();
    document.getElementById('container').innerHTML = render;
    document.getElementById('open_board').classList.add('sidebar_point_active');
    await updateHTML();
}

function board() {
    let render = `
    <div class="board">
        <div class="board_header">
            <span class="summary_mobile_headline" style="display:none" >Kanban Project Management Tool</span>
            <h2 id="h2_headline">Board</h2>
            <div>
            <input type="text" onkeyup="search_container()" name="search" id="find_task" placeholder="Find Task"></input>
            <button id="add_task" onclick="addTaskPopup()"> <span class="hide_mobile_board">Add task </span> <img id="board_plus" src="img/plus.svg"</button>
            </div>
        </div>
        <div class="board-main-container">
            <div class="to_do_container">
                <div class="to_do_headline">
                    <span>To do </span>
                    <img onclick="addTaskPopup()" class="plus" src="img/plus.svg">
                </div>
                <div class="fixContainers">
                    <div id="window1" class="placeholder_drag_drop" ondrop="moveTo('window1')" ondragover="allowDrop(event)">
                    Website redesign</div>
                </div>
            </div>
            <div class="in_progress_container">
                <div class="in_progress_headline">
                    <span>In progress </span>
                    <img onclick="addTaskPopup()" class="plus" src="img/plus.svg">
                </div>
                <div class="fixContainers">
                    <div id="window2" class="placeholder_drag_drop" ondrop="moveTo('window2')" ondragover="allowDrop(event)">
                    Social media strategy</div>
                </div>
            </div>
            <div class="Awaiting_Feedback_container">
                <div class="Awaiting_Feedback_headline">
                    <span>Awaiting Feedback</span>
                    <img onclick="addTaskPopup()" class="plus" src="img/plus.svg">
                </div>
                <div class="fixContainers">
                    <div id="window3" class="placeholder_drag_drop" ondrop="moveTo('window3')" ondragover="allowDrop(event)">
                    Call potential clients</div>
                </div>
            </div>
            <div class="done_container">
                <div class="done_headline">
                    <span>Done</span>
                    <img onclick="addTaskPopup()" class="plus" src="img/plus.svg">
                </div>
                <div class="fixContainers">
                    <div id="window4" class="placeholder_drag_drop" ondrop="moveTo('window4')" ondragover="allowDrop(event)">
                    Accounting invoices</div>
            </div>
        </div>
    </div>
    `;
    return render;
};

async function updateHTML() {
    todos = await getItem('todos');
    let first = todos.filter(t => t['bucket'] == 'window1');

    document.getElementById('window1').innerHTML = ``;

    for (let index = 0; index < first.length; index++) {
        document.getElementById('window1').innerHTML += generateToDoHTML(first[index]);
    }

    let second = todos.filter(t => t['bucket'] == 'window2');

    document.getElementById('window2').innerHTML = '';

    for (let index = 0; index < second.length; index++) {
        document.getElementById('window2').innerHTML += generateToDoHTML(second[index]);
    }

    let third = todos.filter(t => t['bucket'] == 'window3');

    document.getElementById('window3').innerHTML = '';

    for (let index = 0; index < third.length; index++) {
        document.getElementById('window3').innerHTML += generateToDoHTML(third[index]);
    }

    let forth = todos.filter(t => t['bucket'] == 'window4');

    document.getElementById('window4').innerHTML = '';

    for (let index = 0; index < forth.length; index++) {
        document.getElementById('window4').innerHTML += generateToDoHTML(forth[index]);
    }
}

function generateToDoHTML(element) {
    let cat = getCategory(element['category_id']);
    let render = `
    <div id="moveable_container" draggable="true" ondragstart="startDragging(${element['id']})" class="todo" onclick="OpenShowTask(${element['id']})">
        <div class="hide_mobile_class">
            <div class="topic" style="background-color: ${cat[1]}">${cat[0]}</div>
            <div class="drag_drop_mobile" style="display:none">
            <img class="arrow_turn" src="img/black_arrow_back.svg">
            </div>
            </div>
        <div class="title">${element['title']}
        </div>
        <div class="description">${element['description']}
        </div>
        <div class="task_and_progress">`
    render += getTaskAndProgress(element['subtasks']);
    render += `</div>
        <div class="user_elements">
            <div class="user_icons_board" id="user_icons_board">`
    render += getUsersBoard(element['user_ids']);
    render += `</div>`
    render += getPrioBoard(element['prio']);
    render += `</div>`;
    return render
}

function getTaskAndProgress(subtasks) {
    let render = '';
    if (subtasks.length > 0) {
        let checked = filteredsubtasks = subtasks.filter(subtask => subtask.checked == true);
        let progress = Math.round((checked.length / subtasks.length) * 100);
        render += `<div class="progress_tasks"><div class="bd_progress" style="width: ${progress}%"></div></div>`
        render += `<span class="tasks_board">${checked.length}/${subtasks.length} Done</span>`;
    }
    return render
}

function getPrioBoard(prio) {
    let render = '';
    if (prio == 0) {
        render += `<img class="symbols_board" src="img/prio_low.svg" alt="Prio Low">`;
    }
    else if (prio == 1) {
        render += `<img class="symbols_board" src="img/prio_medium.svg" alt="Prio Medium">`;
    }
    else if (prio == 2) {
        render += `<img class="symbols_board" src="img/prio_urgent.svg" alt="Prio High">`;
    }
    return render;
}

function getCategory(id) {
    let filteredCategory = category.filter(cat => cat.id == id);
    let name = filteredCategory[0]['name'];
    let color = taskColors[filteredCategory[0]['color_id']];
    return [name, color];
}

function getUsersBoard(ids) {
    let render = '';
    if (ids.length < 4) {
        render += getUsersBoardBelow(ids);
    } else {
        render += getUsersBoardAbove(ids);
    }
    return render
}

function getUsersBoardBelow(ids) {
    let render = '';
    for (let i = 0; i < ids.length; i++) {
        let filteredUsers = users.filter(user => user.id == ids[i]);
        render += `<div class="bd_task_user">${renderInitials(filteredUsers[0])}</div>`;
    }
    return render
}

function getUsersBoardAbove(ids) {
    let render = '';
    for (let i = 0; i < 2; i++) {
        let filteredUsers = users.filter(user => user.id == ids[i]);
        render += `<div class="bd_task_user">${renderInitials(filteredUsers[0])}</div>`;
    }
    render += `<div class="bd_initials_overflow">+${ids.length - 2}</div>`;
    return render
}

function OpenShowTask(id) {
    oldContent = document.getElementById('container').innerHTML;
    let newContent = `<div class="popup" id="popup" onclick="closeTask()">`;
    newContent += renderEditTask(id);
    newContent += `</div>`;
    document.getElementById('container').innerHTML = oldContent + newContent;
    document.getElementById('popup').style.cssText = 'background-color: rgba(0, 0, 0, 0.5)';
}

function renderEditTask(id) {
    let filteredTodos = todos.filter(todo => todo.id == id);
    let cat = getCategory(filteredTodos[0]['category_id']);
    let render = `<div id="popup_content_task" onclick="event.stopPropagation()">`;
    render += `<div class="bd_topic" style="background-color: ${cat[1]}">${cat[0]}</div>`;
    render += `<div class="bd_arrow_up" onclick="moveTaskUp(${id})"></div><div class="bd_arrow_down" onclick="moveTaskDown(${id})"></div>`;
    render += `<div class="add_task_close" onclick="closeTask()"></div>`;
    render += `<div class="bd_title">${filteredTodos[0]['title']}</div>`;
    render += `<div class="bd_description">${filteredTodos[0]['description']}</div>`;
    render += `<div class="bd_date_outer">Due date:<div class="bd_date_inner">${filteredTodos[0]['due_date']}</div></div>`;
    render += `<div class="bd_priority_outer">Priority:`;
    render += getPrioBoardEditTask(filteredTodos[0]['prio']);
    render += `</div>`;
    render += getSubtasksEditTask(filteredTodos[0]['subtasks']);
    render += getAssignedEditTask(filteredTodos[0]['user_ids']);
    render += `<div class="bd_delete_edit"><div class="bd_delete" onclick="deleteTask(${id})"></div><div class="bd_edit"  onclick="openEditTask(${id})"></div>`;
    render += `</div>`;
    render += `</div>`;
    return render
}

function moveTaskDown(id) {
    let filteredTodos = todos.filter(todo => todo.id == id);
    let updateBucket = '';
    if (filteredTodos[0].bucket == 'window1') {
        updateBucket = 'window2';
    }
    else if (filteredTodos[0].bucket == 'window2') {
        updateBucket = 'window3';
    }
    else if (filteredTodos[0].bucket == 'window3') {
        updateBucket = 'window4';
    }
    else if (filteredTodos[0].bucket == 'window4') {
        updateBucket = 'window4';
    }
    todos[id]['bucket'] = updateBucket;
    setItem('todos', todos);
    openBoard();
}

function moveTaskUp(id) {
    let filteredTodos = todos.filter(todo => todo.id == id);
    let updateBucket = '';
    if (filteredTodos[0].bucket == 'window1') {
        updateBucket = 'window1';
    }
    else if (filteredTodos[0].bucket == 'window2') {
        updateBucket = 'window1';
    }
    else if (filteredTodos[0].bucket == 'window3') {
        updateBucket = 'window2';
    }
    else if (filteredTodos[0].bucket == 'window4') {
        updateBucket = 'window3';
    }
    todos[id]['bucket'] = updateBucket;
    setItem('todos', todos);
    openBoard();
}

async function openEditTask(id) {
    document.getElementById('container').innerHTML = oldContent;
    category = await getItem('category');
    let filteredTodos = todos.filter(todo => todo.id == id);
    categoryOpen = false;
    contactsOpen = true;
    addTaskContactsSelected = filteredTodos[0]['user_ids'];
    categorySelected = filteredTodos[0]['category_id'];
    activeSubtasks = filteredTodos[0]['subtasks'];
    let newContent = `<div class="popup_edit" id="popup" onclick="closeTask()">
                        <div class="add_task_popup" id="popup_content_edit_task" onclick="event.stopPropagation()">`;
    newContent += renderEditTaskSlideIn(id);
    newContent += `</div>
                </div>`;
    document.getElementById('container').innerHTML = oldContent + newContent;
    document.getElementById('input_title').value = filteredTodos[0]['title'];
    document.getElementById('input_description').value = filteredTodos[0]['description'];
    document.getElementById('input_date').value = filteredTodos[0]['due_date'];
    renderSubtasksListing();
    openTaskContactsDropdown();
    setPriority(filteredTodos[0]['prio']);
}

function renderEditTaskSlideIn(id) {
    let render = `
    <div class="add_task">
        <div class="add_task_close" onclick="closeTask()">
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
                        <button type="button" class="add_task_cancel" onclick="resetEditTask(${id})">Clear</button>
                        <button type="button" class="add_task_submit" onclick="processEditTask(${id})">Save Task</button>
            </div>
        </div>
        
        </form>
    </div>
    `;
    return render
}

async function resetEditTask(id) {
    categoryOpen = true;
    contactsOpen = true;
    addTaskContactsSelected = [];
    activeSubtasks = [];
    document.getElementById('input_title').value = '';
    document.getElementById('input_description').value = '';
    document.getElementById('input_date').value = '';
    renderSubtasksListing();
    openTaskContactsDropdown();
    setPriority(-1);
    exitNewCategory();
}

async function processEditTask(id) {
    document.getElementById("error_message_title").innerHTML = '';
    document.getElementById("error_message_description").innerHTML = '';
    document.getElementById("error_message_category").innerHTML = '';
    document.getElementById("error_message_assigned").innerHTML = '';
    document.getElementById("error_message_date").innerHTML = '';
    document.getElementById("error_message_prio").innerHTML = '';
    document.getElementById("error_message_subtasks").innerHTML = '';
    let check = validateAddTask();
    if (check) {
        await saveEditTask(id);
    }
}

async function saveEditTask(id) {
    let i = getTaskI(id);
    todos[i]['title'] = document.getElementById('input_title').value;
    todos[i]['description'] = document.getElementById('input_description').value;
    todos[i]['category_id'] = categorySelected;
    todos[i]['user_ids'] = addTaskContactsSelected;
    todos[i]['due_date'] = document.getElementById('input_date').value;
    todos[i]['prio'] = priority;
    todos[i]['subtasks'] = activeSubtasks;
    await setItem('todos', todos); 
    setTimeout(function() {
    shiftMessage('Task successfully updated');}, 250);
    openBoard();
}

async function deleteTask(id) {
    let d = getTaskI(id);
    todos.splice(d, 1);
    await setItem('todos', todos);
    closeTask();
    updateHTML();
}

function getTaskI(id) {
    let returni = -1;
    for (let i = 0; i < todos.length; i++) {
        if (todos[i]['id'] == id) {
            returni = i;
        }
    }
    return returni
}


function getAssignedEditTask(userIds) {
    let render = `<div class="bd_assigned_above">Assigned To:</div>`;
    render += `<div class="bd_assigned_below">`;

    for (let i = 0; i < userIds.length; i++) {
        let filteredUsers = users.filter(user => user.id == userIds[i]);
        render += `<div class="bd_assigned_item">`
        render += `<div class="bd_initials">`;
        render += renderInitials(filteredUsers[0]);
        render += `</div>`;
        render += `<div class="bd_assigned_name">`;
        render += filteredUsers[0]['name'];
        render += `</div>`;
        render += `</div>`;
    }
    render += `</div>`;
    return render
}

function getSubtasksEditTask(subtasks) {
    let render = '<div class="bd_subtask_title">Subtasks: </div><div class="bd_subtask">';
    for (let i = 0; i < subtasks.length; i++) {
        let check = '';
        if (subtasks[i]['checked'] == true) { check = 'checked' } else { check = '' };
        render += `<div class="bd_subtask_task"><input class="bd_task_checkbox" type="checkbox" disabled ${check}>${subtasks[i]['title']}</div>`;
    }
    render += `</div>`;
    return render
}

function getPrioBoardEditTask(prio) {
    let render = '';
    if (prio == 0) {
        render += `<div class="bd_priority_inner_low">Low <div class="add_task_prio_low_img_white"></div></div>`;
    }
    else if (prio == 1) {
        render += `<div class="bd_priority_inner_medium">Medium <div class="add_task_prio_medium_img_white"></div></div>`;
    }
    else if (prio == 2) {
        render += `<div class="bd_priority_inner_urgent">Urgent <div class="add_task_prio_urgent_img_white"></div></div>`;
    }
    return render;
}

function closeTask() {
    document.getElementById('container').innerHTML = oldContent;
}

// <div class="progress_tasks"></div>
// <span class="tasks_board">0/3 Done</span>

// <img src="img/red_arrows.svg" class="arrows_board">


// {/* <div class="board_users">${element['users']}
//                 </div>
//                 <div id="second_user" class="board_users">${element['users']}
//                 </div>
//                 <div id="third_user" class="board_users">${element['users']}
//                 </div> */}



// function updateHTML() {
//     let first = todos.filter(t => t['category'] == 'window1');

//     document.getElementById('window1').innerHTML = ``;

//     for (let index = 0; index < first.length; index++) {
//         const element = first[index];
//         document.getElementById('window1').innerHTML += generateToDoHTML(element);

//     }

//     let second = todos.filter(t => t['category'] == 'window2');

//     document.getElementById('window2').innerHTML = '';

//     for (let index = 0; index < second.length; index++) {
//         const element = second[index];
//         document.getElementById('window2').innerHTML += generateToDoHTML(element);

//     }

//     let third = todos.filter(t => t['category'] == 'window3');

//     document.getElementById('window3').innerHTML = '';

//     for (let index = 0; index < third.length; index++) {
//         const element = third[index];
//         document.getElementById('window3').innerHTML += generateToDoHTML(element);

//     }

//     let forth = todos.filter(t => t['category'] == 'window4');

//     document.getElementById('window4').innerHTML = '';

//     for (let index = 0; index < forth.length; index++) {
//         const element = forth[index];
//         document.getElementById('window4').innerHTML += generateToDoHTML(element);

//     }
// }

// function generateToDoHTML(element) {
//     return `
//     <div id="moveable_container" draggable="true" ondragstart="startDragging(${element['id']})" class="todo">
//         <div class="topic">${element['topic']}
//         </div>
//         <div class="title">${element['title']}
//         </div>
//         <div class="description">${element['description']}
//         </div>
//         <div class="board_users">${element['users']}
//         </div>
//     </div>`;
// }

function startDragging(id) {
    currentDraggedElement = id;
}

function allowDrop(ev) {
    ev.preventDefault();
}

async function moveTo(buck) {
    let k = getTaskI(currentDraggedElement);
    todos[k]['bucket'] = buck;
    await setItem('todos', todos);
    updateHTML();
}

// Suchfunktion auf der Board Seite
function search_container() {
    let input = document.getElementById('find_task').value;
    input = input.toLowerCase();
    let x = document.getElementsByClassName('todo');

    for (let i = 0; i < x.length; i++) {
        if (!x[i].textContent.toLowerCase().includes(input)) {
            x[i].style.display = "none";
        } else {
            x[i].style.display = "block";
        }
    }
}                                     