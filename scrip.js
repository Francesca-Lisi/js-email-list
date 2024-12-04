// Attraverso l’apposita API di Boolean

// https://flynn.boolean.careers/exercises/api/random/mail

// generare 10 indirizzi email e stamparli in pagina all’interno di una lista.

// **Bonus**
// - Abbellire con CSS o Bootstrap
// - Inserire un bottone che al click faccia il fetch altre 10 mail (sostituendo le altre)
// - mostrare le 10 email solo quando solo al termine delle 10 chiamate all’API


//. 1. Associo a costanti e variabili i dati estrapolati dlla consegna e gli elementi dell'index da richiamare

// - Dati -

const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail';
const maxMails = 10;
let emailList =[];

const list = document.querySelector('ul');
const btn = document.querySelector('.btn');


// 2. Faccio il reset della pagina attraverso una la funzione reset();

reset();


function reset(){
  list.classList.add('d-none');
}