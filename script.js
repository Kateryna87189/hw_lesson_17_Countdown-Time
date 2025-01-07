document.getElementById('startButton').addEventListener('click', () => {
    const input = document.getElementById('timeInput');
    const display = document.getElementById('countdownDisplay');
    let timeLeft = parseInt(input.value);

    display.classList.remove('finished-yellow'); 
    display.textContent = '';

    if (isNaN(timeLeft) || timeLeft <= 0) {
        display.textContent = 'Please enter a positive number...';
        display.classList.add('finished-yellow');

        input.value = '';
        return;
    }

    display.textContent = timeLeft;
    const countdown = setInterval(() => {
        timeLeft--;
        if (timeLeft > 0) {
            display.textContent = timeLeft;
        } else {
            clearInterval(countdown);
            display.textContent='';

            input.value = '';

            display.textContent = 'Game Over';
            display.classList.add('finished-yellow');
            
            
            const audio = new Audio('string-ending-14456.mp3'); 
            audio.play();
        }
    }, 1000);
});
