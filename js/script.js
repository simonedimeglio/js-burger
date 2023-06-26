// Dichiaro il codice sconto come costante
const discountCode = "HERMANOS10";

// Alert di benvenuto con il codice sconto
alert("Codice sconto: " + discountCode);

// Ottengo il nome del burger dal prompt
var burgerName = prompt("Inserisci il nome del tuo burger");

// Stampo il nome del burger nell'elemento HTML
document.getElementById("burger-name").textContent =
	"The " + burgerName + " Burger";

// Ottengo il riferimento al pulsante per il calcolo del prezzo
var createSum = document.getElementById("button");

// Ottengo il riferimento all'elemento per la stampa del prezzo finale
var resultSumElement = document.getElementById("price-number");

// Ottengo il riferimento all'input del codice sconto
var input = document.getElementById("discount");

// Funzione al click del pulsante
createSum.addEventListener("click", function () {
	// Inizializzo il costo del burger
	var resultSumInt = 4.5;

	// Prendo in considerazione gli ingredienti
	var checkNum = document.getElementsByClassName("sum-check");

	// Calcolo il costo totale del burger in base agli ingredienti selezionati
	for (var i = 0; i < checkNum.length; i++) {
		if (checkNum[i].checked) {
			resultSumInt += parseFloat(checkNum[i].value);
		}
	}

	// Verifico se il codice sconto è applicato
	if (input.value === discountCode) {
		// Applico lo sconto del 10%
		resultSumInt *= 0.9;
	}

	// Stampo il risultato formattato come prezzo
	resultSumElement.textContent = resultSumInt.toFixed(2) + "€";
});
