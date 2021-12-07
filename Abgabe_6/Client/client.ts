const btn = document.getElementById('send') as HTMLButtonElement;
const dateInput = document.getElementById('date') as HTMLInputElement;
const result = document.getElementById('result') as HTMLDivElement;

btn.addEventListener('click', send);

async function send(evt: MouseEvent){
    evt.preventDefault();
    let dateVal = dateInput.value;
    let response = await fetch('http://localhost:3000/convertDate?date='+dateVal).then((res) => res.text());
    console.log(response);
    result.innerText = response;
}
