# Progetto Lab-Air - Seconda Prova

## Funzionalità Dinamiche dell'Interfaccia Basate su Angular

In questa seconda prova dovrete rendere dinamico il lavoro che avete già realizzato in modalità statica nella **prima prova di progetto**, utilizzando il framework **Angular** per automatizzare tutte le funzionalità richieste dell’applicazione.

### Obiettivo
La finalità è quella di realizzare un sito web dedicato al settore della vendita online di articoli sportivi, ispirato a **nike.com** (ma potete prendere ispirazione da qualsiasi sito simile che preferite). In questa fase dovrete implementare tutte le funzionalità obbligatorie e opzionali come descritto qui sotto.

---

## Struttura dell'Applicazione

### Front-End
Il sito è costituito da una parte front-end, un back-end e dai dati relativi a un campione rappresentativo di scarpe Nike.

Per il **Front-End** si richiede l’utilizzo di:

- HTML, CSS, JavaScript/TypeScript
- **Angular**: l'applicazione dovrà essere una **Single Page Application**.
- Il layout dovrà essere totalmente **responsive**.

### Funzionalità richieste in Angular

1. **Binding** (interpolazione, property binding, event binding, two-way binding)
2. **Direttive strutturali**: `ngFor`, `ngIf`, `ngSwitch`, e di attributo: `ngStyle`, `ngClass`.
3. **Data sharing tra Components** con `@Input()` e `@Output()`.
4. **Routing** per la gestione delle rotte (voci di menu e funzionalità).
5. **Angular Services**: per la gestione di task condivisi.
6. **Chiamate HTTP Ajax**.

---

## I Dati

Nel file `scarpe.json` sono presenti 50 modelli di scarpe Nike. Dovrete inoltre aggiungere:

- **Immagini** delle scarpe (da cercare su Google tramite il nome della scarpa).
- Due proprietà aggiuntive:  
  - `nuovo_arrivo`: booleano (true/false)
  - `best_seller`: numero (1…5).

---

## Back-End

Il **Back-End** è costituito da un'applicazione lato server che simula una presentazione di dati "fake" (utilizzando **Json Server**). I dati si trovano direttamente sul server locale e sono relativi ai modelli di scarpe Nike.

Per maggiori dettagli su come configurare ed utilizzare **Json Server**, consulta il file PDF allegato o il video disponibile su [Installazione Json Server](https://labforweb-vod.b-cdn.net/video/InstallazioneJsonServer.mp4).

---

## Requisiti Funzionali

### 1. Home

La homepage del sito dovrà visualizzare i prodotti con eventuali banner, lista dei prodotti e slider.

#### Sezione Header (funzionalità dinamiche):
- **Tutti i nuovi arrivi**: mostrare i dati filtrati sulla proprietà `nuovo_arrivo`.
- **Best Seller**: mostrare i dati filtrati sulla proprietà `best_seller` (valore >= 4).
- **Categorie**: sotto "Scopri lo sport", elencare le categorie (es. Basket, Running, ecc.) e permettere il filtro per categoria.
- **Search Bar**: permettere la ricerca per nome della scarpa.

#### Link "A
