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
   
    event.preventDefault();

    const playerInput = document.getElementById("player");

    const cpuinput = document.getElementById("cpu");

    const finalResult = document.getElementById("result");

    const playerResult = document.getElementById("player-results");

    const cpuResult = document.getElementById("cpu-results");



    const iterationNumber = document.getElementById("iteration-number").value;



    finalResult.innerHTML = "";

    
    let cpuWins = 0;

    let playerWins = 0;

    let tie = 0;

    playerResult.innerHTML = "";

    cpuResult.innerHTML = "";


  

    for(let i=0; i < iterationNumber; i++){
        
        let player = Math.floor( Math.random()*6 ) + 1;

        let cpu =  Math.floor( Math.random()*6 ) + 1;
   
        if(iterationNumber > 0 && iterationNumber <=1){

            if(player > cpu){

                finalResult.append("Player Wins")
    
            }
    
            else if(player < cpu){
    
                finalResult.append("CPU Wins")
    
            }
    
            else{
    
                finalResult.append("IT'S A TIE")
    
            }
    
            playerInput.value = player;
            cpuinput.value = cpu;
        }

        else if( iterationNumber > 0 ){

            const newDivPR = document.createElement("div");
            newDivPR.append(player);
            playerResult.append(newDivPR);

            const newDivCR = document.createElement("div");
            newDivCR.append(cpu);
            cpuResult.append(newDivCR);



            
            if(player > cpu){

              playerWins++;
    
            }
    
            else if(player < cpu){
    
                cpuWins++;

            }
    
            else{
    
              tie++;
    
            }

            document.getElementById("player-wins").innerHTML = playerWins;
            document.getElementById("cpu-wins").innerHTML = cpuWins;
            document.getElementById("tie").innerHTML = tie;



            if(playerWins > cpuWins && i==iterationNumber-1){

                finalResult.append("Player Wins")

            }

            else if( cpuWins > playerWins && i==iterationNumber-1){

                finalResult.append("CPU Wins")

            }

            else if( cpuWins == playerWins && i==iterationNumber-1){
                finalResult.append("IT'S A TIE")
            }
        }
            
    }
}
)

