const car = document.getElementById('car');
const gameContainer = document.querySelector('.game-container');
const containerWidth = gameContainer.clientWidth;
const carWidth = car.clientWidth;

document.addEventListener('keydown', (event) => {
    const carPosition = car.offsetLeft;

    if (event.key === 'ArrowLeft') {
        if (carPosition > 0) {
            car.style.left = `${carPosition - 10}px`;
        }
    } else if (event.key === 'ArrowRight') {
        if (carPosition < containerWidth - carWidth) {
            car.style.left = `${carPosition + 10}px`;
        }
    }
});