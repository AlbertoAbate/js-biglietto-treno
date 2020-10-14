/**
* Prezzo del viaggio in treno
*/
var km = parseInt( prompt("Quanti km vuoi percorrere?") );
var age = parseInt( prompt("Quanti anni hai?"));
var prezzo = km * 0.21;

// calculation

if (age < 18) {
  prezzo = prezzo - (prezzo / 100 * 20)
}
else if ( age > 65) {
  prezzo = prezzo - (prezzo / 100 * 40)
}
// console.log("prezzo",prezzo.toFixed(2));
document.getElementById('costo').innerHTML = ("il costo del tuo biglietto è di euro " + prezzo.toFixed(2));
