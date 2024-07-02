document.getElementById("startButton").addEventListener("click", function() {
    let content = document.getElementById("content");
    content.innerHTML = "<p>Aplicando IA...</p>";
    setTimeout(function() {
        content.innerHTML = "<p>Un momento...</p>";
        setTimeout(function() {
            content.innerHTML = "<p>Ya tengo el detalle...</p>";
            setTimeout(function() {
                content.innerHTML = '<p id="message">No hay caso, eres irremediablemente weon</p>';
                document.getElementById("message").style.display = "block";
            }, 2000);
        }, 2000);
    }, 2000);
});
