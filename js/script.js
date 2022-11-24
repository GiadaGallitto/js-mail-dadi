// GIOCO DEI DADI

// -Devo generare un numero randomico per il computer
// -Devo generare un numero randomico per il  giocatore tramite un "button"

// Queste generazioni di numeri randomici devono avvenire nel momento in cui l'utente giocatore preme il pulsante
// (quindi all'interno di un addEvenListener)

// Quando cliccherà il pulsante, mostrerò il numero random generato per il computer e quello random per il giocatore

// Sempre all'interno dell'evento, verranno inseriti due if, in cui:

// -se il valore del numero del computer è maggiore di quello del giocatore, apparirà un messaggio in cui dico che ho vinto io;

// -se il valore del numero del computer è minore di quello del giocatore, apparirà un messaggio in cui dico che ha vinto lui;



// GIOCO DEI DADI

const button = document.querySelector("div.buttons .btn");

button.addEventListener("click", function(){
    const computerRandomNumber = parseInt(Math.floor(Math.random() * 6));

    const userRandomNumber = parseInt(Math.floor(Math.random() * 6));

    if(computerRandomNumber > userRandomNumber){
        document.getElementById("output").innerHTML = `Il mio numero è ${computerRandomNumber}, il tuo invece è ${userRandomNumber} AHAHAH Ho vinto io!`
    } else if (userRandomNumber > computerRandomNumber){
        document.getElementById("output").innerHTML = `Il mio numero è ${computerRandomNumber}, il tuo invece è ${userRandomNumber}, hai vinto tu ma secondo me hai barato`
    } else if (computerRandomNumber === userRandomNumber){
        document.getElementById("output").innerHTML = `Il mio numero è ${computerRandomNumber}, il tuo invece è ${userRandomNumber}, a sto giro siamo pari`
    }

    console.log(computerRandomNumber, userRandomNumber);
})


MAIL

-Creo un array con una lista di circa 4 mail diverse
-Chiedo tramite un input email, l'indirizzo email dell'utente
-Creo un a come button e un pre come output dove apparirà il risultato
-Richiamo il valore dell'input come un elemento di una variabile
-Richiamo l'elemento a.btn

Quando l'utente clicca
-Creo un addEventListener dove:
    -Se l'email è presente nell'array, allora dichiaro che può accedere;
    -Se non è presente dichiaro che non può accedere;