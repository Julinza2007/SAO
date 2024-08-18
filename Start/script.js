function handleClick(event) {
    event.preventDefault();
    // Reproduce el audio
    let audio = document.getElementById('audio');
    audio.play();

    // Muestra el overlay al hacer clic en link_start y aplica la clase para la animación
    let overlay = document.getElementById('overlay');
    overlay.style.backgroundImage = 'url(Start/linkstart.gif)';
    overlay.style.display = 'block';
    
    // Agrega la clase para iniciar la animación
    document.getElementById('link_start').classList.add('link_clicked');

    // Agrega un tiempo de espera de 4.5 segundos antes de redirigir a la otra página
    setTimeout(function () {
        window.location.href = event.target.href;
    }, 5250);
}

