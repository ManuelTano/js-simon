// Visualizzare in pagina 5 numeri casuali diversi tra loro. Da lì parte 
// un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha
// visto precedentemente, tramite i prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali
// dei numeri da indovinare sono stati individuati.


// Creo un array per contenere i 5 numeri casuali

const listanumeri = [];
let num;

// Creo 5 numeri causali

for (let i = 0; i < 5; i++) {
    num = Math.floor(Math.random() * 100);
    listanumeri.push(num);
    console.log(listanumeri);
}

// Stampo in pagina i 5 numeri casuali

const number = document.getElementById('number');
number.innerHTML = listanumeri;

// Creo un timer di 30 secondi, il quale dopo essi, l'utente inserisci i numeri 
// che ricorda tramite i prompt.

const timer = document.getElementById('timer');

setTimeout (function () {
    number.innerHTML = '';
    for (let i = 0; i < 5; i++) {
        const chiedinum = parseInt(prompt("Inserisci i numeri che ricordi"))
     if (chiedinum === listanumeri) {

     }

    }

}, 3000)