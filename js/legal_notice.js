/**
 * This function opens the legal information page by returning the HTML code.
 *
 */
function renderLegal() {
    let render = `
    <div class="container_help">
        <div class="arrow_right">
            <img onclick="summary()" class="arrow_help" src="img/black_arrow_back.svg">
        </div>
        <h2 class="h2_help">Legal Notice</h2>
        <span id="what_is_join" class="small_headlines_help">Subtitle</span>
        <span id="introduction_join" class="span_help" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque odio felis, iaculis ut massa eget, ornare lacinia urna. In dignissim justo eu velit sagittis, in scelerisque nulla convallis. Vestibulum eros lorem, sollicitudin eget eros non, varius aliquam mauris. Sed turpis ipsum, condimentum quis nulla at, lobortis facilisis ipsum. Nunc erat justo, hendrerit vel enim vitae, feugiat mattis dui. In auctor dignissim luctus. Mauris ornare ipsum at ultrices eleifend. Praesent tempus congue magna. Quisque libero erat, pharetra a neque et, imperdiet semper justo.
        </span>
        <span id="how_to_use_it" class="small_headlines_help">Subtitle</span
        <span id="introduction_join" class="span_help" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque odio felis, iaculis ut massa eget, ornare lacinia urna. In dignissim justo eu velit sagittis, in scelerisque nulla convallis. Vestibulum eros lorem, sollicitudin eget eros non, varius aliquam mauris. Sed turpis ipsum, condimentum quis nulla at, lobortis facilisis ipsum. Nunc erat justo, hendrerit vel enim vitae, feugiat mattis dui. In auctor dignissim luctus. Mauris ornare ipsum at ultrices eleifend. Praesent tempus congue magna. Quisque libero erat, pharetra a neque et, imperdiet semper justo.

        
    </div>
    `
    return render;
}