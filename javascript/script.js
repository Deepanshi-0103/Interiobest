document.addEventListener("DOMContentLoaded", function () {
    function animateCounter(element, start, end, duration) {
        let current = start;
        let increment = Math.ceil(end / (duration / 20)); // Adjust speed means evry 30ms mai element change hoga

        let timer = setInterval(function () {
            current += increment;
            if (current >= end) {
                current = end;
                clearInterval(timer);
            }
            element.innerText = current + "+"; // Adding "+" after the number
        }, 20);
    }

    // Get all counter elements (inside <h2>)
    let counters = document.querySelectorAll(".counter h2");

    counters.forEach((counter) => {
        let endValue = parseInt(counter.innerText); // Get number inside h2
        counter.innerText = "0"; // Start from 0
        animateCounter(counter, 0, endValue, 2000); // 2-second animation
    });
});

