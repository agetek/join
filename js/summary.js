function renderSummary() {
    let render = `
    <div class="summary">
        <div class="headline_summary">
            <h2>Summary</h2>
            <div class="seperator_summary"></div>
            <span class="small_headline_summary">Everthing in a nutshell!</span>
        </div>
        <div class="overview_summary">
            <div class="optic_overview">
                <span class="overview_numbers">5</span>
                <span class="overview_description">Tasks in <br> Board</span>
            </div>
            <div class="optic_overview">
                <span class="overview_numbers">2</span>
                <span class="overview_description">Tasks in <br> Progress</span>
            </div>
            <div class="optic_overview">
                <span class="overview_numbers">2</span>
                <span class="overview_description">Awaiting <br> Feedback</span>
            </div>
        </div>
        <div class="date_and_welcome">
            <div class="upcoming_tasks_summary">
                <img class="red_arrow_top" src="img/red_arrows_top.svg">
                <div class="urgent_container">
                    <span class="urgent_number">1</span>
                    <span class="urgent_font">Urgent</span>
                </div>
                <div class="grey_seperator_summary"></div>
                <div class="upcoming_deadline_summary">
                    <span class="date_summary">October 16, 2022</span>
                    <span class="date_description_summary">Upcoming Deadline</span>
                </div>
            
            </div>
            <div class="welcome_container">
                <span class="good_morning_container">Good morning,</span>
                <span class="name_container_summary">Sofia Müller</span>
            </div>
        </div>
        <div class="summary_done_container">
            <div class="summary_todo_done">
                <img class="img_todo_done" src="img/edit_pencil.svg">
                <div class="todo_done_part">
                    <span class="number_todo_done">1</span>
                    <span class="span_todo_done">To-do</span>
                </div>
            </div>
            <div class="summary_todo_done">
                <img class="img_todo_done" src="img/check_button.svg">
                <div class="todo_done_part">
                    <span class="number_todo_done">1</span>
                    <span class="span_todo_done">Done</span>
                </div>
            </div>
        </div>
    </div>
    
    
    `;
    return render
}