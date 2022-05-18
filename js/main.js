/* 
Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
Formula per il calcolo: km * 0.21 = prezzoBiglietto
Stampare in HTML una lista con eta inserità, km inseriti ed il prezzo finale
eta: 50
km: 120
prezzzo: 24,50
BONUS:
validare/ controllare i dati inseriti
età è un numero?
età è stata inserita
km è un numero valido?
posso inserire un minimo / massimo di km possibili?
*/


// variabili
const etaUtente = prompt("Qual è la tua età?");
const kmUtente = prompt("Quanti km percorrerai?");
const prezzoAlKm = 0.21;
let prezzoScontatoUnder18 = prezzoAlKm / 100 * 80;
let prezzoScontatoOver65 = prezzoAlKm / 100 * 60;
let prezzoFinale = kmUtente * prezzoAlKm;


// condizioni sconto sull'età
if (etaUtente < 18) {
    console.log(prezzoFinale = kmUtente * prezzoScontatoUnder18);
} if (etaUtente > 64) {
    console.log(prezzoFinale = kmUtente * prezzoScontatoOver65);
} else console.log(prezzoFinale);


const prezzoBiglietto = document.getElementById("prezzo-biglietto");

prezzoBiglietto.innerHTML = `
<ul>
    <li>Km: ${etaUtente}</li>
    <li>Età: ${kmUtente}</li>
    <li>Prezzo finale: ${prezzoFinale.toFixed(2)} €</li>
</ul>`;