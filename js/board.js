function openBoard() {
    let render = renderBoard();
    document.getElementById('container').innerHTML = render;
    updateHTML();
}

function board() {
    let render = `
    <div class="board">
        <div class="board_header">
            <h2 id="h2_headline">Board</h2>
            <div>
            <input id="find_task" placeholder="Find Task"></input>
            <button id="add_task" onclick"searchTask()" <img src="img/plus.svg">Add task</button>
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
    let first = todos.filter(t => t['category'] == 'window1');

    document.getElementById('window1').innerHTML = ``;

    for (let index = 0; index < first.length; index++) {
        const element = first[index];
        document.getElementById('window1').innerHTML += generateToDoHTML(element);

    }

    let second = todos.filter(t => t['category'] == 'window2');

    document.getElementById('window2').innerHTML = '';

    for (let index = 0; index < second.length; index++) {
        const element = second[index];
        document.getElementById('window2').innerHTML += generateToDoHTML(element);

    }

    let third = todos.filter(t => t['category'] == 'window3');

    document.getElementById('window3').innerHTML = '';

    for (let index = 0; index < third.length; index++) {
        const element = third[index];
        document.getElementById('window3').innerHTML += generateToDoHTML(element);

    }

    let forth = todos.filter(t => t['category'] == 'window4');

    document.getElementById('window4').innerHTML = '';

    for (let index = 0; index < forth.length; index++) {
        const element = forth[index];
        document.getElementById('window4').innerHTML += generateToDoHTML(element);

    }
}

function generateToDoHTML(element) {
    return `
    <div id="moveable_container" draggable="true" ondragstart="startDragging(${element['id']})" class="todo">
        <div class="topic">${element['topic']}
        </div>
        <div class="title">${element['title']}
        </div>
        <div class="description">${element['description']}
        </div>
    </div>`;
}


function startDragging(id) {
    currentDraggedElement = id;
}

function allowDrop(ev) {
    ev.preventDefault();
}

function moveTo(category) {
    todos[currentDraggedElement]['category'] = category; 
    updateHTML();
}