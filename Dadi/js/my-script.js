// 1.Generare un numero random da 1 a 6,
//   sia per il giocatore sia per il computer.-> creo due variabili e 
//   assegno il valore tramite Math.random() |[potrei usare anche un array in qualche modo?
//   selezionando casualmente la posizione dei valori?]|

// 2.Stabilire il vincitore, in base a chi fa il punteggio più alto.-> controllo i due valori
//      -SE A > B vince a -> stampo the winner is a
//      -ALTRIMENTI SE a A < B stampo the winner is b
//      -ALTRIMENTI a = b stampo TIE

const form = document.getElementById("form")

form.addEventListener("submit", function(event){
   
    event.preventDefault;

    const playerInput = document.getElementById("player");

    const cpuinput = document.getElementById("cpu");

    const result = document.getElementById("result");

    result.innerHTML = "";

    let i;

    for( i=0; i < 1; i++){
        
        
        let player = Math.floor( Math.random()*6 ) + 1;
        console.log(player)
        
        let cpu =  Math.floor( Math.random()*6 ) + 1;
           console.log(cpu)
 

            if(player > cpu){

                result.append("Player Wins")

            }

            else if(player < cpu){

                result.append("CPU Wins")

            }

            else{

                result.append("IT'S A TIE")

            }

            playerInput.value = player;
            cpuinput.value = cpu;
            
    }
}
)

