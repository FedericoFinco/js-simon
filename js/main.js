// genera i 5 numeri
const randomNumbers= []

while(randomNumbers.length < 5){
    const numero =getRandomNumber(1, 100)
    console.log("nuovo numero", numero)

    if( randomNumbers.includes(numero) == false) {
        randomNumbers.push(numero)
    }
}



function getRandomNumber(min, max) {
    return Math.floor( Math.random() * (max - min +1) + min )
}

//scrivere in document

document.getElementById("numeri").innerHTML = randomNumbers

//timing 
setTimeout(nascondiNumeri, 3*1000)

function nascondiNumeri() {
    setInnerText("numeri", "")
    document.getElementById("messaggio").innerHTML = "inserisci i numeri che hai visto"

    // x = prompt("inserisci dati")
}

//piu generico

//cambia l'innertext di un elemento tramite id "elemID" con il valore "contenuto"
function setInnerText(elemID, contenuto) {
    document.getElementById(elemID).innerText = contenuto
}

// da qui posso dividere le funzioni e le operazioni per ordine

//prompt e alert sono funzioni bloccanti e bloccano la pagina quindi se inserisco il prompt nella timing function lui prende priorità, in 
//questo caso mi apre il prompt e non mi fa scomparire i numeri e non cambia il messaggio risolvo facendo due timer separati

// setTimeout (chiediNumeri, 4*1000)

setTimeout(function(){
    const numeriUtente = chiediNumeri()
    console.log("numeri utente stamati", numeriUtente)
    const numeriIndovinati = confrontaNumeri(randomNumbers, numeriUtente)
    console.log("numeri indovinati:", numeriIndovinati.length)
    setInnerText("numeri", numeriIndovinati)
    setInnerText("messaggio", "Hai indovinato i seguenti numeri")

}, 4*1000)

function chiediNumeri() {
    const numeriUtente = []
    while(numeriUtente.length < 5){
        let counter=numeriUtente.length+1
        const numero = Number(prompt(`inserisci il ${counter}° numero` ))
        
        if (numeriUtente.includes(numero)==false && numero>0){
            numeriUtente.push(numero)
        }
        
    }
    return numeriUtente
}

//ora confronto gli array
//confronta due arry e restituisce quanti numeri sono uguali
function confrontaNumeri(arrayOrigine,arrayConfronto) {
    const uguali = []
    for (let i = 0; i < arrayOrigine.length; i++) {
        const currentNumber = arrayOrigine[i]
        //numeri nella stessa posizione if (arrayorigine[i]==arrayConfronto[i])
        if(arrayConfronto.includes(currentNumber)){
            uguali.push(currentNumber)
        }
    }

    return uguali
}