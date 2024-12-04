// Attraverso l’apposita API di Boolean

// https://flynn.boolean.careers/exercises/api/random/mail

// generare 10 indirizzi email e stamparli in pagina all’interno di una lista.

// **Bonus**
// - Abbellire con CSS o Bootstrap
// - Inserire un bottone che al click faccia il fetch altre 10 mail (sostituendo le altre)
// - mostrare le 10 email solo quando solo al termine delle 10 chiamate all’API


//. 1. Associo a costanti e variabili i dati estrapolati dlla consegna e gli elementi dell'index da richiamare
// 2. Faccio il reset della pagina attraverso una la funzione "reset()"
// 3. Scrivo la funzione "printList()" che mi stamperà le mail in pagina
// 4. Assegno un adEventListener al click del bottone per eseguire 10 chiamate all'API, che verrà effettuata dalla funzione getEmails() 

// - 1 -

const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail';
const maxEmails = 10;
let emailList =[];


const list = document.querySelector('ul');
const btn = document.querySelector('.btn');
const message = document.getElementById('message')

// - 2 -

reset();


// - 4 -

btn.addEventListener('click', getEmails)


function getEmails(){
  emailList = [];                     //serve a non concatenare le liste ad ogni clickdel bottone
  list.classList.remove('d-none')     //serve a mostrare la lista
  list.innerHTML = '';                //inizializza l'elemento che andremo a riempire

  //creiamo la funzione per eseguire la chiamata all'API 10 volte

  for( let i = 0; i < maxEmails; i++){
/*   if (emailList.length < maxEmails){
      axios.get(endpoint)
      .then(res => {
        emailList.push(res.data.response)})
      .catch(e =>{
        printError(e.message)})
    } else{
      printList()
    }
  }


}
*/

  axios.get(endpoint)
  .then(res => {
    emailList.push(res.data.response)
  if (emailList.lenght === maxEmails) printList()
  })
  .catch(e => {
    printError(e.message)})
  }

  console.log(emailList)
}


// - 3 -

function printList(){
  //list.classList.remove('d-none')
  emailList.forEach(el => list.innerHTML += `<li class="list-group-item">${el}</li>`)
}

function printError(errorMsg){
message.innerHTML = errorMsg;
message.classList.add ('text-danger')
}


function reset(){
 // list.classList.add('d-none');
}