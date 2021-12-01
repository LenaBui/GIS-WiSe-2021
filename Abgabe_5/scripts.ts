namespace useLocalStorage {

    const inputIntpret: HTMLInputElement = <HTMLInputElement>document.getElementById("input-interpret");
    const inputPrice: HTMLInputElement = <HTMLInputElement>document.getElementById("input-price");
    const inputDate: HTMLInputElement = <HTMLInputElement>document.getElementById("input-eventtime");
    const display: HTMLElement = <HTMLElement>document.querySelector("#display");
    const myButton: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#mache-etwas");
    const loadButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("load-button");


    myButton.addEventListener("click", mybuttonHandler);
    loadButton.addEventListener("click", loadButtonHandler);


    console.log(inputIntpret);
    console.log(inputPrice);
    console.log(inputDate);

    function loadButtonHandler(): void {
        console.log("Load Button clicked");
        let valueFromLocalStorage: string = localStorage.getItem("interpret_input");
        console.log("aktuelle Wert im Local Storage: " + valueFromLocalStorage);
        display.textContent = valueFromLocalStorage;
    }

    function mybuttonHandler(): void {

        let interpretValue: string = inputIntpret.value;
        let priceValue: number = Number(inputPrice.value);
        let dateValue: Date = new Date(inputDate.value);

        let array: number[] = [10.1, 15.9, 20.1, 11.1, 12.2, 1.1, 12.99, 2.1, 3.1, 25.2];

        let arrayIGotFromLocalStorage: number[];

        let arrayString: string = JSON.stringify(array);

        let newElement: HTMLDivElement = document.createElement("div");
        console.log("Enter Button clicked");
        console.log("aktuelle Input: " + inputIntpret.value);
        localStorage.setItem("interpret_input", inputIntpret.value);

        localStorage.setItem("price_input", arrayString);
        let stringFromLocalStorage: string = localStorage.getItem("price_input");

        arrayIGotFromLocalStorage = JSON.parse(stringFromLocalStorage);

        console.log("Das Array mit dem Key 'price_input' aus dem LocalStorage:", arrayIGotFromLocalStorage);

        let deleteButton: HTMLButtonElement = document.createElement("button");
        deleteButton.textContent = "Delete Event";

        newElement.textContent = interpretValue + ";" + priceValue + ";" + dateValue;
        display.appendChild(newElement);

        newElement.appendChild(deleteButton);

        deleteButton.addEventListener("click", function () {
            deleteEvent(newElement);

        });

        function deleteEvent(parentElement: HTMLDivElement): void {
            console.log("deleteEvent wurde aufgerufen!");
            display.removeChild(parentElement);
        }

        interface ConcertEvent {
            interpret: string;
            price: number;
        }

        let concertEvent: ConcertEvent = {
            interpret: "Mark Knopfler",
            price: 10.1
        };

        console.log(concertEvent.interpret + " " + concertEvent.price);

    }
}
