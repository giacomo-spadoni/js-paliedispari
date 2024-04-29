// inizio con il selezionare il bottone
const button = document.getElementById('control')
console.log(button)

// creo la variabile dove andrà scritto il risultato
const result = document.getElementById('risultato')

// creo l'evento al click del bottone
button.addEventListener('click', isPalindrome)

// creo la funzione
function isPalindrome() {
    const inputUtente = document.getElementById('palindromo').value
    let inputReverse = ''

    // con il ciclo for rigiro la parola
    for (let i = inputUtente.length - 1; i >= 0; i--) {
        const element = inputUtente[i];
        inputReverse += element
    }

    if (inputUtente == inputReverse) {
        result.innerHTML = inputUtente + ' è una parola palindroma!'
    } else {
        result.innerHTML = inputUtente + ' non è una parola palindroma...'
    }

    document.getElementById('palindromo').value = ''
}