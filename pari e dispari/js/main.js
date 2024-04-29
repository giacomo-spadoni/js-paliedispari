// inizio con il selezionare il bottone
const button = document.getElementById('control')
console.log(button)

// creo la variabile dove andrà scritto il risultato
const result = document.getElementById('risultato')
let condizione = ''

// creo l'evento al click del bottone
button.addEventListener('click', oddOrEven)

// creo la funzione
function oddOrEven() {
    // seleziono gli input
    const scommessaUtente = document.getElementById('pari-dispari').value
    const numeroUtente = document.getElementById('numero').value

    // creo la condizione per far si che non si possano inserire dati sbagliati
    if (scommessaUtente === 'pari' || scommessaUtente === 'dispari' && numeroUtente > 0 && numeroUtente < 6) {

        // creo il numero randomico del pc e lo sommo a quello dell'utente
        const numeroPc = randomized()
        const somma = parseInt(numeroUtente) + numeroPc

        // scrivo nel risultato l'operazione
        result.innerHTML = 'il numero utente: ' + numeroUtente + ' + il numero del pc: ' + numeroPc + ' = ' + somma

        // creo la condizione di pari o dispari
        if (somma % 2 == 0) {
            condizione = 'pari'
        } else {
            condizione = 'dispari'
        }

        // confronto la condizione pari o dispari con l'input del giocatore
        if (condizione == scommessaUtente) {
            result.innerHTML += ' HAI VINTO'
        } else {
            result.innerHTML += ' HAI PERSO'
        }

    } else {
        alert('ricontrolla i dati!')
    }

    // pulisco l'input del numero
    document.getElementById('numero').value = ''
}

// creo la funzione del numero randomico
function randomized() {
    return Math.floor(Math.random() * 5) + 1;
}