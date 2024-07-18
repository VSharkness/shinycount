document.addEventListener('DOMContentLoaded', (event) => {
    const counterElement = document.getElementById('counter');
    const increaseBtn = document.getElementById('increase');
    const resetBtn = document.getElementById('reset');
    const setCounterInput = document.getElementById('setCounterInput');
    const setCounterBtn = document.getElementById('setCounter');

    let counter = localStorage.getItem('counter') ? parseInt(localStorage.getItem('counter')) : 0;
    counterElement.textContent = counter;

    increaseBtn.addEventListener('click', () => {
        counter++;
        counterElement.textContent = counter;
        localStorage.setItem('counter', counter);
    });

    resetBtn.addEventListener('click', () => {
        counter = 0;
        counterElement.textContent = counter;
        localStorage.setItem('counter', counter);
    });

    setCounterBtn.addEventListener('click', () => {
        let newCounterValue = parseInt(setCounterInput.value);
        if (!isNaN(newCounterValue)) {
            counter = newCounterValue;
            counterElement.textContent = counter;
            localStorage.setItem('counter', counter);
            setCounterInput.value = '';
        }
    });
});
