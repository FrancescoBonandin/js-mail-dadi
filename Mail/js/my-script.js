// 1.Prendi un input utente -> creo un form in HTML, con input email e button

// 2.Controllo la lista di chi può accedere-> creo un array, con le email consentite
//   , scorro le posizioni dell' array, confrontando l'input utente, e il valore all'interno 
//   dell array in posizione x

// 3.stampa un messaggio appropriato sull'esito del controllo.

//      -SE l'input corrisponde con uno dei valori dell' array
//       stampo utente riconosciuto, accesso consentito

//      -ALTRIMENTI l'input non corrisponde
//       utente non riconosciuto, prego riprovare

let form = document.getElementById("form");

let array = ["ciccio@gmail.com", "pippo@yahoo.com", "franco@libero.com"];

const yess = document.getElementById("yess");

const nooo = document.getElementById("nooo");


form.addEventListener("submit", function(event){

        event.preventDefault();

        let emailInput = document.getElementById("email-input");

        if( emailInput.value === null || emailInput.value === undefined){

        }

        else{

            console.log(yess.classList.contains("d-none"))
            console.log(nooo.classList.contains("d-none"))

            if(yess.classList.contains("d-none") === false){
                
                console.log("si ci entra");

                yess.className += "d-none";
           
            }

            if(nooo.classList.contains("d-none") === false){
                
                console.log("si ci entra");

                nooo.className += "d-none";
            }


        
            for(i=0;i<array.length;i++) {

                if(emailInput.value === array[i]){
            
                   yess.classList.remove("d-none");
                   emailInput.value = "";

                }
            
                else{
            
                   nooo.classList.remove("d-none");
            
            
                }

            } 


        }

    }

)
