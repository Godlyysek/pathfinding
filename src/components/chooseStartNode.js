let btn = document.getElementById('start');
btn.innerHTML = ' HELO '
btn.onclick = function() {
    clicked = true;
    btn.remove();
}

clicked = false;

var intervalId = window.setInterval(function() {
    if (clicked) {
        continue;
    }
}, 5000);