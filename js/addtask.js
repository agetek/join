function renderAddTask() {
    let render = `
    <div class="add_task">
        <div class="add_task_header">
            <h2 id="h2_headline">Add Task</h2>
        </div>
        <form class="add_task_form">
            <div class="add_task_left_column">
                <label class="add_task_label" for="input_title">Title</label>
                <input type="text" class="input_title" id="input_title" placeholder="Enter a title" required>
                <label class="add_task_label" for="input_description">Description</label>
                <textarea placeholder="Enter a description"></textarea>
            </div>
        </form>
    </div>
    `;
    return render
}