/*Consegna:

Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero
e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

Consigli del giorno:

Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
La condizione non funziona? controlliamo il loro ordine.
BONUS 1:
Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.
BONUS 2:
Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz. Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna. */


const ul = document.querySelector('ul.list');

for (let i = 1; i <= 100; i++) {   /* scrivo i 100 numeri */
    const li = document.createElement('li');
    if (((i % 3) == 0) && ((i % 5) == 0)) {           /* MINIMO COMUNE MULTIPLO 3 e 5 va messo in cima o poi non viene considerato perché avrebbe già assegnato i Fizz o i Buzz sopra ai numeri FizzBuzz*/
        ul.append(li);
        li.append("FizzBuzz");
        console.log("FizzBuzz");
    } else if ((i % 3) == 0) {     /* check per divisibilità per 3 */
        ul.append(li);
        li.append("Fizz");
        console.log("Fizz");
    } else if ((i % 5) == 0) {     /* check per divisibilità per 5 */
        ul.append(li);
        li.append("Buzz");
        console.log("Buzz");
    } else {                       /* se non é multiplo di 3 o di 5 rimane numero normale */
        ul.append(li);
        li.append(i);
        console.log(i);
    }

}

let x = document.querySelector(".container_2")

for (let i = 1; i <= 100; i++) {
    let y = document.createElement("div")
    
    if (((i % 3) == 0) && ((i % 5) == 0)) {
        y.className = "square bg-danger d-flex align-items-center justify-content-center m-2"
        x.append(y)
        y.append("FizzBuzz")
    } else if ((i % 3) == 0) {
        y.className = "square bg-success d-flex align-items-center justify-content-center m-2"
        x.append(y)
        y.append("Fizz")
    } else if ((i % 5) == 0) {
        y.className = "square bg-secondary d-flex align-items-center justify-content-center m-2"
        x.append(y)
        y.append("Buzz")
    } else {
        y.className = "square bg-primary d-flex align-items-center justify-content-center m-2"
        x.append(y)
        y.append(i)
    }


}
