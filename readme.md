# ESERCIZIO "JAVASCRIPT FIZZBUZZ" #

---

### Manipolazione del DOM ed utilizzo del ciclo *for* ###

---

**Esercizio mirato a generare una lista di 100 elementi, da allineare a video, tali che ciascun elemento sia identificato da un numero progressivo, salvo i casi in cui il numero stesso sia divisibile per 3, 5 o 15; in tali casi, l'elemento consisterà nel testo Fizz (divisibile per 3), Buzz (divisibile per 5) o FizzBuzz (divisibile per 15)**

---

**Tutto il programma e' realizzato in Javascript (tranne pochissime righe in *index.html*) e poggia, per gli aspetti stilistici, sulle classi di *Bootstrap 5*.**

**Per la manipolazione del DOM si sono utilizzati metodi quali:**
-   *querySelector*
-   *className / classList*
-   *getAttribute / setAttribute*
-   *createElement*
-   *append*
-   *........*

**Il fulcro del programma è rappresentato dal ciclo *for*, dentro cui vengono effettuati tutti i controlli condizionali e la creazione degli elementi della lista.**

---

## *Aggiunte arbitrarie:* ##

-   *tanto il numero di elementi (default 100), quanto il numero di colonne in pagina (default 7) vengono richiesti direttamente in input tramite `prompt`*
-   *nello header, oltre al titolo, trovano posto anche dei contatori riportanti le occorrenze di ciascuna casistica tra Fizz, Buzz e FizzBuzz*

**Note:** 
    *non vengono effettuati controlli di conformità sui dati in input.*
    *l'impaginazione è fluida e regolare fino ad un massimo di 16 elementi per rigo (16 colonne), dopodichè il layout degli elementi inizia a presentare dei difetti.*