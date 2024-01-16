/* jshint esversion: 11 */
const qtyInputs = document.querySelectorAll('.qty-input__number');
const addBtns = document.querySelectorAll('.add');
const subBtns = document.querySelectorAll('.sub');

addBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        if (qtyInputs[idx].value <= 98) {
            qtyInputs[idx].value++;
        } 
    });
});

subBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        if (qtyInputs[idx].value > 1) {
            qtyInputs[idx].value--;
        } 
    });
});

