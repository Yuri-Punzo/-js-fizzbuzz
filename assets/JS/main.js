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




for (let i = 1; i <= 100; i++) { /* scrivo i 100 numeri */
    console.log(i);
if ((i % 3) == 0) { /* check per divisibilità per 3 */
    
} else if ((i % 5) == 0) { /* check per divisibilità per 5 */
    
} else { /* se non é multiplo di 3 o di 5 rimane numero normale */

}
}