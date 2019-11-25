let textarea;
document.addEventListener('keydown', function (event) {
    if (event.code == 'KeyE' && (event.ctrlKey || event.metaKey)) {
        event.preventDefault();
        document.getElementById('text').style.display = "none";
        textarea = this.getElementById("text").innerText;
        document.getElementById("textarea").style.display = "block";
        document.getElementById("textarea").innerText = textarea;

    }
});

document.addEventListener('keydown', function (event) {
    if (event.key == ',' && (event.ctrlKey || event.metaKey)) {
        event.preventDefault();
        document.getElementById("textarea").style.display = "none";
        document.getElementById('text').style.display = "block";
        textarea = this.getElementById("textarea").value;
        document.getElementById("text").innerText = textarea;

    }
})