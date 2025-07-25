function startCountdown(targetDate, display) {
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            display.textContent = "00:00:00:00";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((distance / (1000 * 60)) % 60);
        const seconds = Math.floor((distance / 1000) % 60);

        display.textContent =
            (days < 10 ? "0" : "") + days + ":" +
            (hours < 10 ? "0" : "") + hours + ":" +
            (minutes < 10 ? "0" : "") + minutes + ":" +
            (seconds < 10 ? "0" : "") + seconds;
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
}

window.onload = function () {
    const target = new Date("2025-08-01T11:00:00Z").getTime();
    const display = document.querySelector('#time');
    startCountdown(target, display);
};