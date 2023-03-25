// Consegna:
// Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Come faccio a sapere se un numero è divisibile per un altro? Abbiamo visto qualcosa di particolare che possiamo usare?
// Consigli del giorno:
// Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
// BONUS 1: Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.
// BONUS 2: Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz. Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.

// VALUTAZIONI:

// 1) Si crea un elemento vuoto (lista???) in index e in main.js lo si "punta" associandovi una variabile, mediante queryselector o simili.
// 2) Nel ciclo for avverranno le operazioni di creazione dei sotto-elementi (li!!!), la scrittura al loro interno del dato e l'aggiunta mediante append.


let     collection  = document.getElementById("item_collection");
console.log(collection);

const   n           = 100;
let     item        = "";

for (let i=1; i<=n; i++)
{
    let coll_item = document.createElement("li");
    item = "";
    if ((i % 3) == 0)
    {
        item = "Fizz";
    }
    if ((i % 5) == 0)
    {
        item += "Buzz";
    }
    if (item == "")
    {
        item = i;
    }
    console.log(i, " ", item);
    coll_item.innerText = item;
    collection.append(item);
}

console.log(collection.nodeName);

