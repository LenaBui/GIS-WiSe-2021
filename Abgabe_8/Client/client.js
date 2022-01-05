"use strict";
const btn = document.getElementById('send');
const dateInput = document.getElementById('date');
const result = document.getElementById('result');
btn.addEventListener('click', send);
async function send(evt) {
    evt.preventDefault();
    let dateVal = dateInput.value;
    let response = await fetch('http://localhost:3000/convertDate?date=' + dateVal).then((res) => res.text());
    console.log(response);
    result.innerText = response;
}
//# sourceMappingURL=client.js.map