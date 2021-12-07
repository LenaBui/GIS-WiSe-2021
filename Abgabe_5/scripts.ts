namespace testNamespace {

    interface ConcertEvent {
        interpret: string;
        price: number;
        date: string;
    }

    const inputIntpret: HTMLInputElement = <HTMLInputElement>document.getElementById("input-interpret");
    const inputPrice: HTMLInputElement = <HTMLInputElement>document.getElementById("input-price");
    const inputDate: HTMLInputElement = <HTMLInputElement>document.getElementById("input-eventtime");
    const display: HTMLElement = <HTMLElement>document.querySelector("#display");
    const myButton: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#mache-etwas");

    let events: ConcertEvent[] = [];

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
            let newElement: HTMLDivElement = document.createElement("div");
            let deleteButton: HTMLButtonElement = document.createElement ("button");
            deleteButton.textContent = "Delete Event";

            newElement.textContent = event.interpret + ";" + event.price + ";" + new Date(event.date).toLocaleString();
            display.appendChild(newElement);

            newElement.appendChild(deleteButton);

            deleteButton.addEventListener("click", function () {
                deleteEvent( event.interpret, event.price, event.date);
            });
        }
    }


    function mybuttonHandler(): void {
        let interpretValue: string = inputIntpret.value;
        let priceValue: number = Number(inputPrice.value);
        let dateValue: Date = new Date(inputDate.value);

        if (!interpretValue || !priceValue) {
            return;
        }

        update(interpretValue, priceValue, dateValue);
    }

    function update (interpret: string, price: number, date: Date) {
        events.push({interpret: interpret, price: price, date: date.toISOString()});
        localStorage.setItem('events', JSON.stringify(events));
        renderList();
    }

    function deleteEvent( interpret: string, price: number, date: string): void {
        console.log("deleteEvent wurde aufgerufen!");
        let found: number = null;
        for (let key in events) {
            let event = events[key];
            if (event.interpret === interpret && event.price === price && event.date === date) {
                found = Number(key);
                break;
            }
        }
        if (found !== null) {
            events.splice(found, 1);
            localStorage.setItem ('events', JSON.stringify(events));
        }
        renderList();
    }
}
