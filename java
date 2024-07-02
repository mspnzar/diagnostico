document.getElementById("startButton").addEventListener("click", function() {
    let content = document.getElementById("content");
    content.innerHTML = "<p>Acción 1...</p>";
    setTimeout(function() {
        content.innerHTML = "<p>Acción 2...</p>";
        setTimeout(function() {
            content.innerHTML = "<p>Acción 3...</p>";
            setTimeout(function() {
                content.innerHTML = '<p id="message">No hay caso, eres irremediablemente weon</p>';
                document.getElementById("message").style.display = "block";
            }, 2000);
        }, 2000);
    }, 2000);
});
