import { state } from "./state.js"

export const startTimer = () => {
    state.timeLeft -= 1;
    console.log('state.timeLeft: ', state.timeLeft);

    // отобразить на странице

    if (state.timeLeft > 0) {
        setTimeout(startTimer, 1000);
    }

    if (state.timeLeft <= 0) {
        // сигнализировать, что время вышло
    }
}