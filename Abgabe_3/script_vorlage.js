"use strict";
// -- [Aufgabe 1]
/**
 * @var {number} age: Bitte anstatt der 24 dein Alter eintragen
 */
let age = 22;
/**
 * @var {string} firstName: Bitte anstatt 'Max' deinen Vornamen eintragen
 */
let firstName = `Lena`;
function func1(age) {
    return 2021 - age;
}
let output = func2(firstName);
function func3(meal) {
    console.log(`Ich esse gerne ${meal || "Pizza"}.`);
    return func1(age) > 1995
        ? `Ich gehöre zur Generation Z`
        : `Ich gehöre zur Generation Y`;
}
console.log(output);
function func2(name) {
    console.log(`Ich heiße ${name}.`);
    return func3();
}
/* -- HIER BITTE IHRE LÖSUNG ZUR AUFGABE 1 EINTRAGEN
 * Ich heiße Lena.
 * Ich esse gerne Pizza.
 * Ich gehöre zur Generation Z.
*/
// -- [Aufgabe 2]
let events = [
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
console.log(`Die Länge des Arrays beträgt ${events.length}.`);
// Lösung b)
console.log(`Mein Name ist ${events[0][0]} und der Ticketpreis beträgt ${events[0][1]}€.`);
console.log(`Mein Name ist ${events[1][0]} und der Ticketpreis beträgt ${events[1][1]}€.`);
console.log(`Mein Name ist ${events[2][0]} und der Ticketpreis beträgt ${events[2][1]}€.`);
console.log(`Mein Name ist ${events[3][0]} und der Ticketpreis beträgt ${events[3][1]}€.`);
console.log(`Mein Name ist ${events[4][0]} und der Ticketpreis beträgt ${events[4][1]}€.`);
console.log(`Mein Name ist ${events[5][0]} und der Ticketpreis beträgt ${events[5][1]}€.`);
console.log(`Mein Name ist ${events[6][0]} und der Ticketpreis beträgt ${events[6][1]}€.`);
console.log(`Mein Name ist ${events[7][0]} und der Ticketpreis beträgt ${events[7][1]}€.`);
console.log(`Mein Name ist ${events[8][0]} und der Ticketpreis beträgt ${events[8][1]}€.`);
console.log(`Mein Name ist ${events[9][0]} und der Ticketpreis beträgt ${events[9][1]}€.`);
// Lösung c) 
let any = [10.1, 15.9, 20.1, 11.1, 12.2, 1.1, 12.99, 2.1, 3.1, 25.2];
console.log(Math.max.apply(null, any));
// Lösung d) ...
// Lösung e)
let _n = 10;
let factorial = 1;
while (_n >= 1) {
    factorial = factorial * _n;
    _n--;
}
console.log(factorial);
// Lösung f) 
console.log(Array.from(Array(101).keys()));
// Lösung g)
class ConcertEvent {
    interpret;
    price;
    constructor(_interpret, _price) {
        this.interpret = _interpret;
        this.price = _price;
    }
    show() {
        console.log(`Interpret: ${this.interpret}, Price: ${this.price}`);
    }
}
let interpret1 = new ConcertEvent("Helene Fischer", 3.1);
interpret1.show();
// Lösung h)
class ConcertEvent {
    interpret;
    price;
    constructor(_interpret, _price) {
        this.interpret = _interpret;
        this.price = _price;
    }
    show() {
        console.log(`Interpret: ${this.interpret}, Price: ${this.price}`);
    }
}
let interpret1 = new ConcertEvent("Mark Knopfler", 10.1);
let interpret2 = new ConcertEvent("Pink Floyd", 15.9);
let interpret3 = new ConcertEvent("Metallica", 20.1);
let concertEventArray = [interpret1, interpret2];
concertEventArray.push(interpret3);
concertEventArray.push(new ConcertEvent("Michael Bublé", 11.1));
for (let interpret of concertEventArray) {
    interpret.show();
}
//# sourceMappingURL=script_vorlage.js.map