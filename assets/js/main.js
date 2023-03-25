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

// *************** Costanti e variabili ***************
// Il programma inizia con il prompt di inserimento dei dati: 
// Numero totale di elementi (default:100)
const   n_str           = prompt("Inserisci il numero di elementi desierati","100");
// Numero di elementi per rigo ovvero numero di colonne (default:7)
const   col_number_str  = prompt("Inserisci il numero di colonne desiderate","7");
const   n               = parseInt(n_str);
const   col_number      = parseInt(col_number_str);
// Gap (pixel) tra gli elementi
const   flex_gap        = 15; 
// Variabile associata alla "ul" presente nel index.html
let     collection      = document.getElementById("item_collection");
// Variabile associata al "body"
let     body_           = document.querySelector("body");

body_.className = "bg-dark";
// Posizionamento "fixed" di header e footer, con relativi headings
document.querySelector("header").classList.add("fixed-top", "bg-info");
document.querySelector("header").setAttribute("style", "height: 8vh");
document.querySelector("header").innerHTML = "<h1>FizzBuzzDOM</h1>";
document.querySelector("h1").className = "text-black-50 text-center";
document.querySelector("footer").classList.add("fixed-bottom");
document.querySelector("footer").innerHTML = "<h2>IT WAS REALLY AMAZING</h2>";
document.querySelector("h2").className = "text-white-50 text-center";

// Aggiungo classi Bootstrap alla lista con diversi metodi per testarli tutti
collection.className = "reset_list_style";
collection.className += " d-flex flex-wrap ";
collection.setAttribute("class",collection.getAttribute("class") + "justify-content-center align-items-start");
collection.classList.add("text-black-50", "fs-5", "fw-bold", "p-0", "pt-5", "mt-4"); 
collection.setAttribute("style","gap: 10px;");
console.log(collection);
console.log(n_str, n);
console.log(col_number_str, col_number);

// Variabile stringa che assumerà i valori durante l'esecuzione del ciclo for e li trasferirà ai singoli "li"
let     item        = "";
// Contatori delle occorrenze:
let     f_counter   = 0;
let     b_counter   = 0;
let     fb_counter  = 0;

for (let i=1; i<=n; i++)
{
    // Variabile creata ad ogni ciclo ed associata all'elemento "li" del momento
    let list_item   = document.createElement("li");
    // Variabile stringa che assumerà i valori delle classi Bootstrap di background, a seconda dei casi
    let bg_style    = "bg-primary";  
    // Reset della variabile ad ogni ciclo
    item = "";

    if ((i % 3) == 0)
    {
        // Numero divisibile per 3
        item = "Fizz";
        bg_style = "bg-success";
        f_counter++;
    }
    if ((i % 5) == 0)
    {
        // Numero divisibile (anche o solo) per 5
        item += "Buzz";
        bg_style = "bg-danger";
        b_counter++;
    }
    if (item == "")
    {
        // Se item coincide con stringa nulla significa che il numero non è divisibile per nessuno tra 3, 5 e 15
        item = i;
    }
    else if (item == "FizzBuzz")
    {
        // Item = "FizzBuzz" significa che il numero è divisibile per 15
        bg_style = "bg-warning";
        fb_counter++;
    }

    // Assegnazione del dato e delle classi Bootstrap / stili all'"li" di turno
    list_item.innerText = item;
    list_item.className = "d-flex";
    list_item.classList.add("justify-content-center", "align-items-center", bg_style);
    // La formula seguente stabilisce il valore di larghezza ed altezza (aspect-ratio=1) dei singoli elementi
    list_item.setAttribute("style",`flex-basis: calc((100% - ((${col_number}+1)*${flex_gap}px)) / ${col_number});`);
    list_item.setAttribute("style", list_item.getAttribute("style") + "aspect-ratio: 1;");
    // L'elemento "li" di turno viane "agganciato" alla lista
    collection.append(list_item);
}
// Ciclo finito

// Variabile fizzbuzz_data con contatori delle occorrenze, "agganciata" allo header
let     fizzbuzz_data   = document.createElement("h5");
fizzbuzz_data.innerText = `Fizz totali: ${f_counter - fb_counter} --- Buzz totali: ${b_counter - fb_counter} --- FizzBuzz totali: ${fb_counter}`;
fizzbuzz_data.classList.add("position-absolute", "bottom-0", "end-0", "me-5", "mb-3");
document.querySelector("header").append(fizzbuzz_data);

