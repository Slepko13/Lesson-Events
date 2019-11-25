let box = document.getElementById('box');
let push = document.getElementById('push');

push.onmousedown = function (event) {
    box.onmousemove = function (event) {
        box.style.width = event.clientX + "px";
        box.style.height = event.clientY + "px";
    }
}

push.onmouseup = function (event) {

    box.onmousemove = function (event) {
        event.stopPropagation();
    }
}
box.onmouseup = function (event) {

    box.onmousemove = function (event) {
        event.stopPropagation();
    }
}
document.onmouseup = function (event) {

    box.onmousemove = function (event) {
        event.stopPropagation();
    }
}