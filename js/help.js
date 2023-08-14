/**
 * This function opens the help page by returning the HTML code.
 *
 */
function renderHelp() {
    let render = `
    <div class="container_help">
        <h2 class="h2_help">Help</h2>
        <span id="what_is_join" class="small_headlines_help">What is Join?</span>
        <span id="introduction_join" class="span_help" >Join is a demonstration project.
        </span>
        <span id="how_to_use_it" class="small_headlines_help">How to use it</span
    <ol>
        <li>Please not enter any real personal information</li>
    </ol>
    </div>
    `

    return render;
}