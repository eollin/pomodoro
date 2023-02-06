import { startTimer } from "./timer.js";

const btnStart = document.querySelector('.control__btn_start');

export const initControl = () => {
    btnStart.addEventListener('click', () => {
        startTimer();
    });
}