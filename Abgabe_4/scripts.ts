namespace testNamespace {

    const inputIntpret: HTMLInputElement = <HTMLInputElement>document.getElementById("input-interpret"); 
    const inputPrice: HTMLInputElement = <HTMLInputElement>document.getElementById("input-price");
    const inputDate: HTMLInputElement = <HTMLInputElement>document.getElementById("input-eventtime");
    const display: HTMLElement = <HTMLElement>document.querySelector("#display");
    const myButton: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#mache-etwas"); 


    myButton.addEventListener("click", mybuttonHandler); 


    console.log(inputIntpret);
    console.log(inputPrice);
    console.log(inputDate);


    function mybuttonHandler(): void {
         
        let interpretValue: string = inputIntpret.value; 
        let priceValue: number = Number(inputPrice.value); 
        let dateValue: Date = new Date(inputDate.value);

        let newElement: HTMLDivElement = document.createElement("div"); 
        let deleteButton: HTMLButtonElement = document.createElement ("button");
        deleteButton.textContent = "Delete Event";

        newElement.textContent = interpretValue + ";" + priceValue + ";" + dateValue;   
        display.appendChild(newElement); 

        newElement.appendChild(deleteButton); 
    
        deleteButton.addEventListener("click", function () { 
            deleteEvent(newElement);
        });

    }

    function deleteEvent(parentElement: HTMLDivElement): void {
        console.log("deleteEvent wurde aufgerufen!");
        display.removeChild(parentElement);
    }
}