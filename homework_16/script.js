const btns = document.querySelectorAll(`[data-btn="action"]`);

const firstFunc = (e) => {
    console.log(`First func for ${e.target.innerHTML}`);
    e.target.removeEventListener(`click`, firstFunc);
    e.target.addEventListener(`click`, secondFunc);
}

const secondFunc = (e) => {
    console.log(`Second func for ${e.target.innerHTML}`);
    e.target.removeEventListener(`click`, secondFunc);
    e.target.addEventListener(`click`, lastFunc);
}

const lastFunc = (e) => {
    console.log(`The last func for ${e.target.innerHTML}`);
}

btns.forEach((element) => {
    element.addEventListener(`click`, firstFunc); 
});
