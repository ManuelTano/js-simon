// Visualizzare in pagina 5 numeri casuali diversi tra loro. Da lì parte 
// un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha
// visto precedentemente, tramite i prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali
// dei numeri da indovinare sono stati individuati.


// Creo un array per contenere i 5 numeri casuali

let listanumeri = [];
let num;

// Creo un array per contenere i 5 numeri che ho scelto

const listaindovina = [];
let ind;

let score = [];

// Creo 5 numeri causali

for (let i = 0; i < 5; i++) {
    num = Math.floor(Math.random() * 100);
    if (listanumeri.includes(num)) {
        i--
    } else {listanumeri.push(num)};
}

// Stampo in pagina i 5 numeri casuali

const number = document.getElementById('number');
number.innerText = listanumeri;

// Creo un timer di 30 secondi

const timer = document.getElementById('display');
let seconds = 0;
timer.innerText = seconds;

const countdown = setInterval (function () {
    timer.innerText = ++seconds;

    if(seconds === 30) {
        clearInterval(countdown);
    }

}, 1000)

// L'utente inserisci i numeri che ricorda tramite i prompt.

setTimeout (function () {
   
    number.innerHTML = '';
    for (let i = 0; i < 5; i++) {
        let chiedinum = parseInt(prompt("Inserisci i numeri che ricordi"))
        listaindovina.push(chiedinum);
    }

    for (let j = 0; j < listaindovina.length; j++) {
        if (listanumeri.includes(listaindovina[j])) {
            score.push(listaindovina[j]);
        }
    }

    alert (`Hai totalizzato ${score.length} punti. I numeri indovinati sono: ${score}`)
  
    
}, 29500)
