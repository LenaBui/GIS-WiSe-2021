"use strict";
var testNamespace;
(function (testNamespace) {
    const inputIntpret = document.getElementById("input-interpret");
    const inputPrice = document.getElementById("input-price");
    const inputDate = document.getElementById("input-eventtime");
    const display = document.querySelector("#display");
    const myButton = document.querySelector("#mache-etwas");
    myButton.addEventListener("click", mybuttonHandler);
    console.log(inputIntpret);
    console.log(inputPrice);
    console.log(inputDate);
    function mybuttonHandler() {
        let interpretValue = inputIntpret.value;
        let priceValue = Number(inputPrice.value);
        let dateValue = new Date();
        let newElement = document.createElement("div");
        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete Event";
        newElement.textContent = interpretValue + ";" + priceValue + ";" + dateValue;
        display.appendChild(newElement);
        newElement.appendChild(deleteButton);
        deleteButton.addEventListener("click", function () {
            deleteEvent(newElement);
        });
    }
    function deleteEvent(parentElement) {
        console.log("deleteEvent wurde aufgerufen!");
        display.removeChild(parentElement);
    }
})(testNamespace || (testNamespace = {}));
//# sourceMappingURL=scripts.js.map