let currfbox = null;

window.onload = function() {
    document.body.style.zoom = "100%";
    var b = document.getElementById("b1");
    b.classList.add('active')
    b.click();
};

function changeColor(clickedButton) {
    var buttons = document.querySelectorAll('button');
    buttons.forEach(function(button) {
        button.classList.remove('active');
    });
    clickedButton.classList.add('active');
}
function togglebox(elementId) {
    const fbox = document.getElementById(elementId);
    if (currfbox === fbox) {
        return;
    }
    if (currfbox) {
        currfbox.style.display = "none";
    }
    fbox.style.display = "flex";

    currfbox = fbox;
}



