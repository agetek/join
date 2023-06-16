function renderSummary() {
    let countTasks = todos.length;
    let countTasksProgress = getTasksCount('window2');
    let countTasksFeedback = getTasksCount('window3');
    let countTasksTodo = getTasksCount('window1');
    let countTasksDone = getTasksCount('window4');
    let countUrgent = getTasksUrgent();
    let deadline = getRenderDeadline();
    let greeting = getGreeting();
    let person = getPerson();
    let render = `
    <div class="summary">
        <div class="headline_summary">
            <span class="summary_mobile_headline" style="display:none" >Kanban Project Management Tool</span>
            <h2>Summary</h2>
            <div class="seperator_summary"></div>
            <span class="small_headline_summary">Everthing in a nutshell!</span>
            <div style="display:hide" class="divider_summary_mobile"></div>
        </div>
        <div class="overview_summary">
            <div class="optic_overview" onclick="openBoard()">
                <span class="overview_numbers">${countTasks}</span>
                <span class="overview_description">Tasks in <br> Board</span>
            </div>
            <div class="optic_overview" onclick="openBoard()">
                <span class="overview_numbers">${countTasksProgress}</span>
                <span class="overview_description">Tasks in <br> Progress</span>
            </div>
            <div class="optic_overview" onclick="openBoard()">
                <span class="overview_numbers">${countTasksFeedback}</span>
                <span class="overview_description">Awaiting <br> Feedback</span>
            </div>
        </div>
        <div class="date_and_welcome">
            <div class="upcoming_tasks_summary" onclick="openBoard()">
                <img class="red_arrow_top" src="img/red_arrows_top.svg">
                <div class="urgent_container">
                    <span class="urgent_number">${countUrgent}</span>
                    <span class="urgent_font">Urgent</span>
                </div>
                <div class="grey_seperator_summary"></div>
                <div class="upcoming_deadline_summary">
                    ${deadline}
                </div>
            
            </div>
            <div class="welcome_container">
                <span class="good_morning_container">${greeting}</span>
                <span class="name_container_summary">${person}</span>
            </div>
        </div>
        <div class="summary_done_container">
            <div class="summary_todo_done" onclick="openBoard()">
                <div id="todo_done_part_left" class="todo_done_part">
                    <span class="number_todo_done">${countTasksTodo}</span>
                    <span class="span_todo_done">To-do</span>
                </div>
            </div>
            <div class="summary_todo_done" onclick="openBoard()">
                <div id="todo_done_part_right" class="todo_done_part">
                    <span class="number_todo_done">${countTasksDone}</span>
                    <span class="span_todo_done">Done</span>
                </div>
            </div>
        </div>
    </div>
    
    
    `;
    return render
}

function getGreeting() {
    let d = new Date();
    let time = d.getHours();
    let render = '';
    if (time < 12) {
        render = 'Good morning, ';
    }
    else if (time >= 12 && time < 18) {
        render = 'Good afternoon, ';
    }
    else if (time >= 18 && time < 23) {
        render = 'Good evening, ';
    }
    return render
}

function getPerson() {
    let render = '';
    if (activeUserId < 0) {
        render += 'Guest';
    }
    if (activeUserId >= 0) {
        filteredUsers = users.filter(user => user.id == activeUserId);
        render += filteredUsers[0].name;
    }
    return render;
}

function getTasksCount(window) {
    filteredTodos = todos.filter(todo => todo.bucket == window);
    return filteredTodos.length
}

function getTasksUrgent() {
    filteredTodos = todos.filter(todo => todo.prio == 2);
    return filteredTodos.length
}

function getRenderDeadline() {
    let deadline = getDeadline();
    let render = "";
    if (deadline == '') {
        render += `<div class="date_summary"></div>
        <div class="date_description_summary">No upcoming Deadline</div>`;
    }
    else {
        render += `<div class="date_summary">${deadline}</div>
        <div class="date_description_summary">Upcoming Deadline</div>`;
    }
    return render;
}


function getDeadline() {
    let timestamps = [];
    renderdate = '';
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let filteredTodos = todos.filter(todo => todo.prio == 2);
    if (filteredTodos.length > 0) {
        for (let i = 0; i < filteredTodos.length; i++) {
            let date = filteredTodos[i].due_date;
            let newDate = new Date(date);
            timestamps.push(newDate.getTime());
        }
        timestamps.sort();
        let newDate = new Date(timestamps[0]);
        renderdate = month[newDate.getMonth()];
        renderdate += ' ' + newDate.getDate() + ', ' + newDate.getFullYear();
    }
    return renderdate
}