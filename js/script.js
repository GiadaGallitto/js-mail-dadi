
// GIOCO DEI DADI

const buttonGame = document.querySelector("div.buttons-game .btn");

buttonGame.addEventListener("click", function(){
    const computerRandomNumber = parseInt(Math.floor(Math.random() * 6) + 1);

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


// MAIL

let emailList = [
    "Pippo.thePidgeon@gmail.com", "Loki.GodofAsgard@hotmail.it", "Vold.è.Mort@libero.it", "Chisei.Gokunonlosai@sayan.com"
];

const buttonValidator = document.getElementById("pulsante");

buttonValidator.addEventListener(`click`, function(){

    const email = document.getElementById("email").value;

    let founded;

    for(let i=0; i < emailList.length; i++) {

        if (email == emailList[i]){
            founded = true;
        }
    }

    if (founded){
        console.log (`email trovata`);
        document.getElementById("output-mail").innerHTML = "Il tuo indirizzo email è corretto!";
    } else {
        console.log (`email non trovata`);
        document.getElementById("output-mail").innerHTML = "Il tuo indirizzo email non è presente nella nostra lista";
    }

})