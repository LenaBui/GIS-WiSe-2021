// -- [Aufgabe 1] 

/**
 * @var {number} age: Bitte anstatt der 24 dein Alter eintragen
 */
let age: number = 22;

/**
 * @var {string} firstName: Bitte anstatt 'Max' deinen Vornamen eintragen
 */
/*let firstName: string = `Lena`;
/*
function func1(age: number): number {
  return 2021 - age;
}

let output: string = func2(firstName);

function func3(meal?: string): string {
  console.log(`Ich esse gerne ${meal || "Pizza"}.`);
  return func1(age) > 1995
    ? `Ich gehöre zur Generation Z`
    : `Ich gehöre zur Generation Y`;
}

console.log(output);

function func2(name: string): string {
  console.log(`Ich heiße ${name}.`);
  return func3();
}
*/
/* -- HIER BITTE IHRE LÖSUNG ZUR AUFGABE 1 EINTRAGEN
 * Ich heiße Lena.
 * Ich esse gerne Pizza.
 * Ich gehöre zur Generation Z.
*/

// -- [Aufgabe 2]

let events: any[][] = [
  ["Mark Knopfler", 10.1],
  ["Pink Floyd", 15.9],
  ["Metallica", 20.1],
  ["Michael Bublé", 11.1],
  ["Dire Straits", 12.2],
  ["Mariah Carey", 1.1],
  ["Cat Stevens", 12.99],
  ["Mark Forster", 2.1],
  ["Helene Fischer", 3.1],
  ["Bee Gees", 25.2]
];

// -- HIER BITTE IHRE LÖSUNG ZUR AUFGABE 2 EINTRAGEN

// Lösung a) 
/*
console.log(`Die Länge des Arrays beträgt ${events.length}.`);
*/
// Lösung b) 
/*
for(let i= 0; i< events.length; i++){
  console.log(events[i][0], events[i][1]);
}
*/
// Lösung c) 
/*
let any = [10.1, 15.9, 20.1, 11.1, 12.2, 1.1, 12.99, 2.1, 3.1, 25.2];
console.log(Math.max.apply(null, any));
*/
//oder
/*
function maxPrice(array: any[][]): number {
  let resultat= 0;
  for(let i=0; i< array.length; i++){
      if(array[i][1]> resultat) {
        resultat= array[i][1];
      }
  }
  return resultat;
}

let max= maxPrice(events);
console.log(max);
*/
// Lösung d) 
/*
function interpretSearch (array: any[][], interpret: string): boolean { 
  for(let i=0; i< array.length; i++) {
    if(array[i][0]== interpret) {
        return true;
    }
  }
  return false;
}

console.log(interpretSearch(events, "Michael Bublé"));
*/
// Lösung e) 
/*
let _n:number = 10; 
let factorial:number = 1; 

  while(_n >=1) { 
    factorial = factorial * _n; 
    _n--; 
 }
console.log(factorial);
*/
// Lösung f) 
/*
for(let i= 1; i<=100; i++){
  if(i % 3 == 0){
    console.log(i);
  }
}
*/
//oder
/*
let count: number= 0;
for(let i= 1; i<=100; i++){
  if(i % 3 == 0){
    count++;
    console.log(i);
  }
}
console.log("count: ", count);
*/
// Lösung g) 
/*
 class ConcertEvent {
  interpret: string;
  price: number;

  constructor(_interpret: string, _price: number) {
    this.interpret = _interpret;
    this.price = _price;
  }

  show(): void {
    console.log(`Interpret: ${this.interpret}, Price: ${this.price}`);
  }
}
let interpret1: ConcertEvent = new ConcertEvent("Helene Fischer", 3.1);
interpret1.show();
*/
// Lösung h)

class ConcertEvent {
  interpret: string;
  price: number;

  constructor(_interpret: string, _price: number) {
    this.interpret = _interpret;
    this.price = _price;
  }

  show(): void {
    console.log(`Interpret: ${this.interpret}, Price: ${this.price}`);
  }
}
let interpret1: ConcertEvent = new ConcertEvent("Mark Knopfler", 10.1);
let interpret2: ConcertEvent = new ConcertEvent("Pink Floyd", 15.9);
let interpret3: ConcertEvent = new ConcertEvent("Metallica", 20.1);
let interpret4: ConcertEvent = new ConcertEvent("Michael Bublé", 11.1);
let interpret5: ConcertEvent = new ConcertEvent("Dire Straits", 12.2);
let interpret6: ConcertEvent = new ConcertEvent("Mariah Carey", 1.1);
let interpret7: ConcertEvent = new ConcertEvent("Cat Stevens", 12.99);
let interpret8: ConcertEvent = new ConcertEvent("Mark Forster", 2.1);
let interpret9: ConcertEvent = new ConcertEvent("Helene Fischer", 3.1);
let interpret10: ConcertEvent = new ConcertEvent("Bee Gees", 25.2);

for(let i= 0; i< events.length; i++){
  console.log(events[i][0], events[i][1]);
}
