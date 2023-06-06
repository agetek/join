function renderAddTask() {
    let render = `
    <div class="add_task">
        <div class="add_task_header">
            <div class="add_task_headline">Add Task</div>
        </div>
        <form class="add_task_form">
            <div class="add_task_left_column">
                <label class="add_task_label_title" for="input_title">Title</label>
                <input type="text" class="input_title" id="input_title" placeholder="Enter a title" required>
                <label class="add_task_label_description" for="input_description">Description</label>
                <textarea class="add_task_textarea_description" placeholder="Enter a description" id="input_description"></textarea>
                <div class="add_task_label_description">Category</div>
                <div id="update_category" class="update_category">`
    render += renderAddTaskCategory();
    render += `
                </div>
            </div>
        </form>
    </div>
    `;
    return render
}

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

async function openTaskCategoryDropdown() {
    if (categoryOpen) { categoryOpen = false } else { categoryOpen = true }
    let render = renderAddTaskCategory();
    document.getElementById('update_category').innerHTML = render;
}

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

async function loadOldCategories() {
    let category = categoryOld;
    await setItem('category', category);
    return category
}

function selectCategory(id) {
    categorySelected = id;
    categoryOpen = false;
    let render = renderAddTaskCategory();
    document.getElementById('update_category').innerHTML = render;
}

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

function addNewCategory() {
    let render = `<div class="add_task_category_outer">
                    <div class="add_task_category_inner">
                        <input type="text" class="add_task_category_input" id="add_task_category_input" minlength="2">
                        <div class="add_task_category_cross" onclick="exitNewCategory()"></div>
                        <div class="add_task_category_divider"></div>
                        <div class="add_task_category_hook" onclick="chooseCategoryColor()"></div>
                    </div>
                </div>
                <div class="error_message" id="error_message_category"></div>
                <div class="category_colors_outer" id="category_colors_outer"></div>`;
    document.getElementById('update_category').innerHTML = render;
}

function exitNewCategory() {
    categorySelected = -1;
    categoryOpen = false;
    let render = renderAddTaskCategory();
    document.getElementById('update_category').innerHTML = render;
}

function chooseCategoryColor() {
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

async function saveNewCategory(i) {
    let id = getMaxCategoryId();
    let name = document.getElementById('add_task_category_input').value;
    let color_id = i;
    category.push({ 'id': id, 'name': name, 'color_id': color_id });
    await setItem('category', category);
    categorySelected  = id;
    categoryOpen = false;
    let render = renderAddTaskCategory();
    document.getElementById('update_category').innerHTML = render;
}

function getMaxCategoryId() {
    let max = null;
    for (let i=0 ; i < category.length ; i++) {
        if (max == null || category[i]['id'] > max)
            max = category[i]['id'];
    }
    return max + 1;
}
