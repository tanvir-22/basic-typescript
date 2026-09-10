"use strict";
const input = document.getElementById('email');
const button = document.getElementById("subscribebtn");
button.addEventListener('click', () => {
    console.log(`thanks for subsribing ${input.value}`);
});
