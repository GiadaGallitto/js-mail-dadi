// GIOCO DEI DADI

// -Devo generare un numero randomico per il computer
// -Devo generare un numero randomico per il  giocatore tramite un "button"

// Queste generazioni di numeri randomici devono avvenire nel momento in cui l'utente giocatore preme il pulsante
// (quindi all'interno di un addEvenListener)

// Quando cliccherà il pulsante, mostrerò il numero random generato per il computer e quello random per il giocatore

// Sempre all'interno dell'evento, verranno inseriti due if, in cui:

// -se il valore del numero del computer è maggiore di quello del giocatore, apparirà un messaggio in cui dico che ho vinto io;

// -se il valore del numero del computer è minore di quello del giocatore, apparirà un messaggio in cui dico che ha vinto lui;

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