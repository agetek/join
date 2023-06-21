/**
 * This function opens the info page by returning the HTML code.
 *
 */

function openInfo() {
    var infoContainer = document.getElementById('info-container');
  
    if (infoContainer.style.display === 'flex') {
      infoContainer.style.display = 'none';
    } else {
      infoContainer.style.display = 'flex';
    }
}