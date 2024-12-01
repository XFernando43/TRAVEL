const countdownDate = new Date("Dec 1, 2024 23:59:59").getTime();
const x = setInterval(() => {
    const now = new Date().getTime();
    const distance = countdownDate - now;
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "¡Oferta finalizada!";
    } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
}, 1000);
