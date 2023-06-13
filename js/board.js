async function openBoard() {
    todos = await getItem('todos');
    let render = renderBoard();
    document.getElementById('container').innerHTML = render;
    document.getElementById('open_board').classList.add('sidebar_point_active');
    updateHTML();
}

function board() {
    let render = `
    <div class="board">
        <div class="board_header">
            <h2 id="h2_headline">Board</h2>
            <div>
            <input type="text" onkeyup="search_container()" name="search" id="find_task" placeholder="Find Task"></input>
            <button id="add_task" onclick="addTaskPopup()">Add task <img id="board_plus" src="img/plus.svg"</button>
            </div>
        </div>
        <div class="board-main-container">
            <div class="to_do_container">
                <div class="to_do_headline">
                    <span>To do </span>
                    <img class="plus" src="img/plus.svg">
                </div>
                <div class="fixContainers">
                    <div id="window1" class="placeholder_drag_drop" ondrop="moveTo('window1')" ondragover="allowDrop(event)">
                    Website redesign</div>
                </div>
            </div>
            <div class="in_progress_container">
                <div class="in_progress_headline">
                    <span>In progress </span>
                    <img class="plus" src="img/plus.svg">
                </div>
                <div class="fixContainers">
                    <div id="window2" class="placeholder_drag_drop" ondrop="moveTo('window2')" ondragover="allowDrop(event)">
                    Social media strategy</div>
                </div>
            </div>
            <div class="Awaiting_Feedback_container">
                <div class="Awaiting_Feedback_headline">
                    <span>Awaiting Feedback</span>
                    <img class="plus" src="img/plus.svg">
                </div>
                <div class="fixContainers">
                    <div id="window3" class="placeholder_drag_drop" ondrop="moveTo('window3')" ondragover="allowDrop(event)">
                    Call potential clients</div>
                </div>
            </div>
            <div class="done_container">
                <div class="done_headline">
                    <span>Done</span>
                    <img class="plus" src="img/plus.svg">
                </div>
                <div class="fixContainers">
                    <div id="window4" class="placeholder_drag_drop" ondrop="moveTo('window4')" ondragover="allowDrop(event)">
                    Accounting invoices</div>
            </div>
        </div>
    <div>
    `;
    return render;

};

function updateHTML() {  
    let first = todos.filter(t => t['bucket'] == 'window1');

    document.getElementById('window1').innerHTML = ``;

    for (let index = 0; index < first.length; index++) {
        const element = first[index];
        document.getElementById('window1').innerHTML += generateToDoHTML(element);

    }

    let second = todos.filter(t => t['bucket'] == 'window2');

    document.getElementById('window2').innerHTML = '';

    for (let index = 0; index < second.length; index++) {
        const element = second[index];
        document.getElementById('window2').innerHTML += generateToDoHTML(element);

    }

    let third = todos.filter(t => t['bucket'] == 'window3');

    document.getElementById('window3').innerHTML = '';

    for (let index = 0; index < third.length; index++) {
        const element = third[index];
        document.getElementById('window3').innerHTML += generateToDoHTML(element);

    }

    let forth = todos.filter(t => t['bucket'] == 'window4');

    document.getElementById('window4').innerHTML = '';

    for (let index = 0; index < forth.length; index++) {
        const element = forth[index];
        document.getElementById('window4').innerHTML += generateToDoHTML(element);

    }
}

function generateToDoHTML(element) {
    let cat = getCategory(element['category_id']);
    let render = `
    <div id="moveable_container" draggable="true" ondragstart="startDragging(${element['id']})" class="todo" onclick="OpenShowTask(${element['id']})">
        <div class="topic" style="background-color: ${cat[1]}">${cat[0]}
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
    if(prio == 0) {
        render += `<img src="img/prio_low.svg" alt="Prio Low">`;
    }
    else if (prio == 1) {
        render += `<img src="img/prio_medium.svg" alt="Prio Medium">`;
    }
    else if (prio == 2) {
        render += `<img src="img/prio_urgent.svg" alt="Prio High">`;
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
    let render = `<div id="popup_content_task" onclick="event.stopPropagation()">`
    render += `<div class="bd_topic" style="background-color: ${cat[1]}">${cat[0]}</div>`;
    render += `<div class="bd_title">${filteredTodos[0]['title']}</div>`;
    render += `<div class="bd_description">${filteredTodos[0]['description']}</div>`;
    render += `<div class="bd_date_outer">Due date:<div class="bd_date_inner">${filteredTodos[0]['due_date']}</div></div>`;
    render += `</div>`;
    return render
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

async function moveTo(category) {
    todos[currentDraggedElement]['bucket'] = category; 
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