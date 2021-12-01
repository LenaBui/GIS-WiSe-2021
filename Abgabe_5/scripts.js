"use strict";
var useLocalStorage;
(function (useLocalStorage) {
    const inputIntpret = document.getElementById("input-interpret");
    const inputPrice = document.getElementById("input-price");
    const inputDate = document.getElementById("input-eventtime");
    const display = document.querySelector("#display");
    const myButton = document.querySelector("#mache-etwas");
    const loadButton = document.getElementById("load-button");
    myButton.addEventListener("click", mybuttonHandler);
    loadButton.addEventListener("click", loadButtonHandler);
    console.log(inputIntpret);
    console.log(inputPrice);
    console.log(inputDate);
    function loadButtonHandler() {
        console.log("Load Button clicked");
        let valueFromLocalStorage = localStorage.getItem("interpret_input");
        console.log("aktuelle Wert im Local Storage: " + valueFromLocalStorage);
        display.textContent = valueFromLocalStorage;
    }
    function mybuttonHandler() {
        let interpretValue = inputIntpret.value;
        let priceValue = Number(inputPrice.value);
        let dateValue = new Date(inputDate.value);
        let array = [10.1, 15.9, 20.1, 11.1, 12.2, 1.1, 12.99, 2.1, 3.1, 25.2];
        let arrayIGotFromLocalStorage;
        let arrayString = JSON.stringify(array);
        let newElement = document.createElement("div");
        console.log("Enter Button clicked");
        console.log("aktuelle Input: " + inputIntpret.value);
        localStorage.setItem("interpret_input", inputIntpret.value);
        localStorage.setItem("price_input", arrayString);
        let stringFromLocalStorage = localStorage.getItem("price_input");
        arrayIGotFromLocalStorage = JSON.parse(stringFromLocalStorage);
        console.log("Das Array mit dem Key 'price_input' aus dem LocalStorage:", arrayIGotFromLocalStorage);
        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete Event";
        newElement.textContent = interpretValue + ";" + priceValue + ";" + dateValue;
        display.appendChild(newElement);
        newElement.appendChild(deleteButton);
        deleteButton.addEventListener("click", function () {
            deleteEvent(newElement);
        });
        function deleteEvent(parentElement) {
            console.log("deleteEvent wurde aufgerufen!");
            display.removeChild(parentElement);
        }
        let concertEvent = {
            interpret: "Mark Knopfler",
            price: 10.1
        };
        console.log(concertEvent.interpret + " " + concertEvent.price);
    }
})(useLocalStorage || (useLocalStorage = {}));
//# sourceMappingURL=scripts.js.map