if (navigator.vibrate) {
    function vibrate(...duration) {
        window.navigator.vibrate(duration);
    }

    function stopVibrating() {
        window.navigator.vibrate(0);
    }
} else {
    let p = document.getElementById("warning");
    p.textContent = "Tu dispositivo no soporta esta API";
}
