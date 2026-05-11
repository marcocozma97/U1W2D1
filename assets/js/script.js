/*
REGOLE
- Le risposte vanno scritte in JavaScript sotto ogni commento.
- Puoi testare aprendo index.html nel browser e guardando la console (DevTools).
- In alternativa: nel terminale, `node script.js`.
- Cerca nei motori di ricerca solo cose non viste a lezione. Tutto il necessario è già stato spiegato stamattina.
*/

/* ESERCIZIO 1 — Saluto personalizzato
   Crea due const "nome" e "cognome".
   Stampa con un template literal: "Ciao, mi chiamo Mario Rossi."
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const nome = 'Marco';
const cognome = 'Cozma';

console.log(`Ciao, mi chiamo ${nome} ${cognome}.`);

/* ESERCIZIO 2 — Calcolatrice base
   Due numeri "a" e "b".
   Stampa le 6 operazioni nel formato "10 + 3 = 13":
   somma, differenza, prodotto, divisione, resto (%), elevamento (**).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let number1 = 10;
let number2 = 3;

console.log(number1 + number2);
console.log(number1 - number2);
console.log(number1 * number2);
console.log(number1 / number2);
console.log(number1 % number2);
console.log(number1 ** number2);

/* ESERCIZIO 3 — Età nel tempo
   const annoNascita (scegli un anno).
   const annoCorrente = 2026.
   Stampa: età oggi, età tra 10 anni, età 5 anni fa.
   Formato: "Tra 10 anni avrai 35 anni."
*/

/* SCRIVI QUI LA TUA RISPOSTA */


const annoNascita = 1997;
const annoCorrente = 2026;

console.log(`Oggi ho ${annoCorrente - annoNascita} anni.`);

const annoFuturo = 2036;

console.log(`Tra dieci anni avrò ${annoFuturo - annoNascita} anni.`);

const annoPassato = 2021;

console.log(`Cinque anni fa avevo ${annoPassato - annoNascita} anni.`);


/* ESERCIZIO 4 — Maggiorenne?
   Variabile "eta".
   Calcola "maggiorenne" come "eta >= 18".
   Stampa: "Età: 25 — Maggiorenne: true"
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let eta = 28;
const etaConferma = 18;

console.log(`Età: ${eta} - Maggiorenne: ${eta >= etaConferma}`);

/* ESERCIZIO 5 — Tipo del valore
   Cinque variabili: una string, una number, una boolean, una null, una undefined.
   Stampa per ognuna: "nome è di tipo: string" usando typeof.
   In commento sopra la variabile null: spiega cosa ritorna typeof null e perché.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let myString = 'Testo';
console.log(`${myString} è di tipo ${typeof myString}.`);

let myNumber = 29;
console.log(`${myNumber} è di tipo ${typeof myNumber}.`);

let myBoolean = true;
console.log(`${myBoolean} è di tipo ${typeof myBoolean}.`);

// ritorna Object, perchè null viene considerato, come un sistema di valori non univoco (appunto object)
let myNot = null;
console.log(`${myNot} è di tipo ${typeof myNot}.`);

let myDontKnow;
console.log(`${myDontKnow} è di tipo ${typeof myDontKnow}.`);

/* ESERCIZIO 6 — === vs ==
   numero = 5
   stringa = "5"
   Stampa il risultato di "numero == stringa" e "numero === stringa".
   In commento, una riga: spiega la differenza.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let mySecondNumber = 5;
let mySecondString = "5";

// Il primo == indica se sono uguale o di valore o di tipo, quindi vero. Il secondo === indica se sono uguali sia di valore che ti tipo e quindi è giusto sia falso.

console.log(mySecondNumber == mySecondString); //true
console.log(mySecondNumber === mySecondString);  //false


/* ESERCIZIO 7 — Conversioni implicite
   Senza eseguire il codice, prevedi in commento il risultato di queste 4 espressioni.
   Poi stampale per verificare.
   - "5" + 3
   - "5" - 3
   - true + 1
   - "10" * "2"
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// "5" + 3 avrà come risultato 53
// "5" - 3 avrà come risultato 2
// true + 1 avrà come risultato 2
// "10" * "2" avrà come risultato 20

console.log("5" + 3);
console.log("5" - 3);
console.log(true + 1);
console.log("10" * "2");

/* ESERCIZIO 8 — Classificazione numero
   Variabile "n".
   Usando % e operatori logici, stampa tre righe:
   "n è pari: true/false"
   "n è divisibile per 3: true/false"
   "n è pari E divisibile per 3: true/false"
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let numberNew = 10;
console.log(numberNew % 2 === 0)  //true  - è effettivamente pari
console.log(numberNew % 3 === 0) // false - non è divisibile per 3
console.log(numberNew % 2 === 0 && numberNew % 3 === 0) // false - perchè è pari, ma non è divisibile per 3


/* --EXTRA-- ESERCIZIO 9 — Triangolo
   Tre const "a", "b", "c" (lunghezze dei lati).
   Calcola perimetro.
   Determina il tipo: "equilatero", "isoscele", "scaleno".
   Stampa: "Triangolo isoscele, perimetro 15"
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const a = 13;
const b = 10;
const c = 13;

console.log(a + b + c)   //perimetro

function classificaTriangolo(a, b, c) {

  // Classificazione
  if (a === b && b === c) {
    return "Equilatero";
  } else if (a === b || b === c || a === c) {
    return "Isoscele";
  } else {
    return "Scaleno";
  }
}

// Chiamata funzione
console.log(classificaTriangolo(13, 10, 13))  //isoscele

//Stampa finale
console.log(`Triangolo ${classificaTriangolo(13, 10, 13)}, perimetro ${a + b + c}.`)