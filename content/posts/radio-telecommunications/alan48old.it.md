---
title: "Midland Alan 48 old - appunti"
date: 2024-06-08T20:00:00+02:00
categories: ["radio"]
tags: ["CB", "telecommunications", "radio"]
author: ["Andrea Salvatori"]
showToc: true
TocOpen: false
draft: false
hidemeta: false
comments: false
description: "Appunti su riparazioni e modifiche Alan 48 old"
disableHLJS: false # to disable highlightjs
disableShare: false
hideSummary: false
searchHidden: false
ShowReadingTime: true
ShowBreadCrumbs: true
ShowPostNavLinks: true
ShowWordCount: true
ShowRssButtonInSectionTermList: true
UseHugoToc: true
cover:
    image: "/media/images/firstalan48.jpg" # image path/url
    alt: "Modland Alan 48" # alt text
    caption: "Alan 48" # display caption under cover
    relative: false # when using page bundles set this to true
    hidden: false # only hide on current single page
editPost:
    URL: "https://github.com/Sonic0/notes.andreasalvatori.dev/blob/main/content"
    Text: "Suggest Changes"
    appendFilePath: true
---

Chi, anche solo di sfuggita, ha frequentato la banda degli 11 metri conosce L'Alan 48 old. <!--more--> Questa radio veicolare è stata per anni un punto di riferimento nel mondo delle comunicazioni CB. Nonostante l'avvento di nuove tecnologie e modelli più recenti, questa radio continua a essere apprezzata da molti appassionati e professionisti del settore.
Anche se non trovo piú di nessuna utilitá trasmettere in AM o FM sui canali della 27MHz, questa radio rappresenta per me l'icona di quegli anni senza "telefoni mobili" (che io non ho vissuto) e l'inizio di una passione.
In questo articolo andró nel tempo ad inserire tutte le info che ho collezzionato lavorando con questo apparato. Questo include qualsiasi tipo di materiali abbia reperito nel tempo. 
Ho voluto iniziare a scrivere questo articolo perché ho avuto nel tempo alcune difficoltá a reperire le informazioni; Per i meno esperti sappiate che ci sono persone che non voglio condividere anche la piú minimale... anche se parliamo di apparati quasi obsoleti.
Molte cose che scrivo potrebbero risultare banali, ma questa é solo una pagina di note per me stesso (ho gia scordato cosa ho mangiato ieri a pranzo).
Quello che leggete é stato in gran parte recuperato ed applicato insieme al mio caro amico Michele, che ringrazio e saluto.

> Non sono un tecnico. Le informazioni che seguono potrebbero essere errate e portare a danni nei vostri apparati ed a voi stessi. Verificate ogni singola informazione.

Se trovare qualche informazione errata fatemi sapere e la correggo (é facile trovare i miei contatti).
Probabilmente ci metteró parecchio tempo a riportare tutto in questo articolo, quindi stay tuned!

Partiamo con le foto dei 48 che ho avuto e dell'attuale in mio possesso (l'ultimo)

![¹48](/media/images/firstalan48.jpg "Primo Alan48")
![²48](/media/images/secondalan48.jpg "Secondo Alan48")
![³48](/media/images/thirdalan48.jpg "Terzo Alan48")

# Appunti generali

## Schema elettrico e service
Reperire uno schema elettrico ad alta risoluzione é sempre un'impresa per questi vecchi device. Sicuramente qualcuno lo ha ma lo custodisce gelosamente. Quindi io ho il solito che si trova ovunque.

![schema-elettrico-1](/media/images/schema-elettrico-alan48old.jpg "Schema elettrico 1")
[Schema elettrico 2 - pdf](/media/documents/schema-elettrico-alan48old.pdf)
[Manuale servizio - pdf](/media/documents/manuale-servizio-alan48old.pdf)

# Appunti modifiche

## Potenza

### 2SC1969
Ovviamente la modifica piú comune. Il problema é reperibilitá del finale di potenza 2SC1969, online di nuovo si trovato al 99% tutta non originale. Ci sono delle alternative di cui metteró fonti e link.

Per chi é riuscito a reperire un 2SC1969 originale allora potete seguire questa guida:
![potenza-2sc1969](/media/images/power-mod-1969-alan48old.jpg "Modifica potenza 1969")

In [questo video](https://www.youtube.com/watch?v=1YLwsbNN6hk) dal minito 3:50 Framich spiega come i condensatori, in prossimitá dello stadio TX, preceduti da un asterisco (*) possono essere variati per una migliore taratura dopo una modifica. Per esempio C318 ceramico da 220pF potremmo provare ad aumentare o diminuire la capacitá per migliorare le prestazioni. Lui dice di fare prove con valori in parallelo da 12pF o 33pF. Date una vista al video e lasciategli un like.

### Mosfet BUZ71
Non ho mai provato questa modifica, nel caso fatemi sapere
[potenza-buz71 - pdf](/media/documents/sostituzione_2sc1969_con_mosfet.pdf)

### Mosfet RD16HHF1
Fonte del materiale Framich IZ8QVW [Framich](https://modifiche-cb.info)
[potenza-RD16HHF1 - pdf](/media/documents/sostituzione_2sc1969_con_mosfet.pdf)
![potenza-RD16HHF1 - fig 1](/media/images/potenza-RD16HHF1-alan48old-fig1.jpg "Figura 1")
![potenza-RD16HHF1 - fig 2](/media/images/potenza-RD16HHF1-alan48old-fig2.jpg "Figura 2")
![potenza-RD16HHF1 - fig 3](/media/images/potenza-RD16HHF1-alan48old-fig3.jpg "Figura 3")
![potenza-RD16HHF1 - fig 4](/media/images/potenza-RD16HHF1-alan48old-fig4.jpg "Figura 4")

Ho provato questa modifica e posso dire che si ottengono ottimi risultati. Grazie Framich.

## Estetica

### Manopole
Nel primo apparato misi delle manopole differenti ma perfettamente compatibili e molto carine. Forse un poco scomode per il selettore canali dato che non ha le scanalature.
Ho provato a cercare nei vecchi ordine su TME o Mouser ma nulla. Nel caso ricercarle in questi siti anche se capisco essere un'operazione molto lunga.
