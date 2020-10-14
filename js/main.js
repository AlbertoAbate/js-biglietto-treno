/**
* Prezzo del viaggio in treno
*/
// var km = parseInt( prompt("Quanti km vuoi percorrere?") );
// var age = parseInt( prompt("Quanti anni hai?"));
// var prezzo = km * 0.21;
//
// // calculation
//
// if (age < 18) {
//   prezzo = prezzo - (prezzo / 100 * 20)
// }
// else if ( age > 65) {
//   prezzo = prezzo - (prezzo / 100 * 40)
// }
// // console.log("prezzo",prezzo.toFixed(2));
// document.getElementById('costo').innerHTML = ("il costo del tuo biglietto è di euro " + prezzo.toFixed(2));


// km da percorrere
var km = parseInt( prompt("Quanti km vuoi percorrere?"));

// età del passeggero
var age = parseInt( prompt("quanti anni hai?"));

// tariffa al km
var prezzo = km * 0.35;

// se sei minorenne
if (age < 18) {
  prezzo = prezzo - (prezzo / 100 * 30)
}
else if (age > 60) {
  prezzo = prezzo - (prezzo / 100 * 50)
}
// console.log("prezzo in euro ", prezzo.toFixed(2));
document.getElementById('costo').innerHTML = ("il costo del tuo biglietto è di euro " + prezzo.toFixed(2));
