// Dichiaro la variabile relativa al button per il calcolo
var createSum = document.getElementById('button');

// Dichiaro la variabile per la stampa del prezzo finale
var resultSumElement = document.getElementById('price-number');

// Dichiaro la variabile per lo sconto
var input = document.getElementById('discount');

// Funzione al click del button
createSum.addEventListener('click', function () {

    // Inizializzo il costo del burger
    var resultSumInt = 4.50;

    // Prendo in considerazione gli ingredienti
    var checkNum = document.getElementsByClassName('sum-check');

    // Verifico gli ingredienti che ho selezionato
    for (var i = 0; i < checkNum.length; i++) {


        if (checkNum[i].checked) {
            // Aggiungo il costo alla cifra iniziale del burger
            resultSumInt += parseInt(checkNum[i].value)
        }

        
    }

    // Verifico se il codice sconto è applicato
    if (input.value === "HERMANOS10") {
        // Applico lo sconto del 10%
        resultSumInt = resultSumInt - (resultSumInt * 10 / 100);
    }

    // Stampo il risultato
    resultSumElement.innerHTML = resultSumInt.toFixed(2) + '€';

})
