"use strict";
var testNamespace;
(function (testNamespace) {
    const inputIntpret = document.getElementById("input-interpret");
    const inputPrice = document.getElementById("input-price");
    const inputDate = document.getElementById("input-eventtime");
    const display = document.querySelector("#display");
    const myButton = document.querySelector("#mache-etwas");
    let events = [];
    myButton.addEventListener("click", mybuttonHandler);
    document.addEventListener('DOMContentLoaded', load);
    console.log(inputIntpret);
    console.log(inputPrice);
    console.log(inputDate);
    function load() {
        let val = localStorage.getItem('events');
        if (!val) {
            return;
        }
        let eventsArr = JSON.parse(val);
        events = events.concat(eventsArr);
        console.log(events);
        renderList();
    }
    function renderList() {
        display.innerHTML = '';
        for (let event of events) {
            let newElement = document.createElement("div");
            let deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete Event";
            newElement.textContent = event.interpret + ";" + event.price + ";" + new Date(event.date).toLocaleString();
            display.appendChild(newElement);
            newElement.appendChild(deleteButton);
            deleteButton.addEventListener("click", function () {
                deleteEvent(event.interpret, event.price, event.date);
            });
        }
    }
    function mybuttonHandler() {
        let interpretValue = inputIntpret.value;
        let priceValue = Number(inputPrice.value);
        let dateValue = new Date(inputDate.value);
        if (!interpretValue || !priceValue) {
            return;
        }
        update(interpretValue, priceValue, dateValue);
    }
    function update(interpret, price, date) {
        events.push({ interpret: interpret, price: price, date: date.toISOString() });
        localStorage.setItem('events', JSON.stringify(events));
        renderList();
    }
    function deleteEvent(interpret, price, date) {
        console.log("deleteEvent wurde aufgerufen!");
        let found = null;
        for (let key in events) {
            let event = events[key];
            if (event.interpret === interpret && event.price === price && event.date === date) {
                found = Number(key);
                break;
            }
        }
        if (found !== null) {
            events.splice(found, 1);
            localStorage.setItem('events', JSON.stringify(events));
        }
        renderList();
    }
})(testNamespace || (testNamespace = {}));
//# sourceMappingURL=scripts.js.map