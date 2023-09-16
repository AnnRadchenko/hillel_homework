const MOVING_BLOCK = document.querySelector(`.block`);
const MIN_VALUE = 0;
MOVING_BLOCK.style.top = 0;
MOVING_BLOCK.style.left = 0;

const getRandomValue = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomColor = () => {
    const first = getRandomValue(0, 255);
    const second = getRandomValue(0, 255);
    const third = getRandomValue(0, 255);

    return `rgb(${first}, ${second}, ${third})`
}

const getMaxBlockTop = () => document.body.clientHeight - MOVING_BLOCK.clientHeight;
const getMaxBlockLeft = () => document.body.clientWidth - MOVING_BLOCK.clientWidth;

setInterval(() => {
    const nextTopPosition = getRandomValue(MIN_VALUE, getMaxBlockTop());
    const nextLeftPosition = getRandomValue(MIN_VALUE, getMaxBlockLeft());
    MOVING_BLOCK.style.top = nextTopPosition + `px`;
    MOVING_BLOCK.style.left = nextLeftPosition + `px`;
}, 1000);

setInterval(() => {
    MOVING_BLOCK.style.background = getRandomColor();
}, 500)
