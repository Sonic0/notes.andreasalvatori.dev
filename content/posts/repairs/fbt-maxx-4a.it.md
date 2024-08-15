---
title: "Storie di riparazioni - FBT Maxx 4a"
date: 2024-06-12T00:03:48+02:00
categories: ["repairs"]
tags: ["repairs", "audio", "FBT"]
author: ["Andrea Salvatori"]
showToc: true
TocOpen: false
draft: false
hidemeta: false
comments: false
description: "Riparazione FBT Maxx 4a"
canonicalURL: "https://notes.andreasalvatori.dev/blog/repairs/fbt-maxx-4a/"
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
    image: "/media/images/fbt_maxx_4a_modulo_amp_multir-0.jpg"
    alt: "FBT Maxx 4a" # alt text
    caption: "Modulo FBT Maxx 4a" # display caption under cover
    relative: false # when using page bundles set this to true
    hidden: false # only hide on current single page
editPost:
    URL: "https://github.com/Sonic0/notes.andreasalvatori.dev/blob/main/content"
    Text: "Suggest Changes" # edit text
    appendFilePath: true # to append file path to Edit link
---

Le FBT Maxx 4a sono dei monitor molto famosi di casa FBT. Sono leggeri e potenti, anche grazie al woofer B&C al neodimio.<!--more--> Secondo i miei gusti personali non hanno un suono perfetto, ma resta sempre di ottima qualitá. Anche se oramai fuori produzione, questi modelli sono ancora molto diffusi specialmente nelle province limitrofe all'azienda.

# Il problema

Hanno dato a Michele una coppia di queste casse attive di cui una da riparare. Il problema era il woofer che non emetteva nulla. Si pensa che un forte urto al modulo amplificato abbia portato al problema.

![FBT Maxx 4a esterno](/media/images/fbt_maxx_4a_modulo_amp_multir-0.jpeg "Esterno del modulo amplificato")
![FBT Maxx 4a esterno](/media/images/fbt_maxx_4a_modulo_amp_multir-1.jpg "Interno del modulo amplificato")

Il problema era abbastanza semplice, con l'urto 2 terminali di una bobina si sono spezzati. Il mancato contatto di questo componente escludeva completamente il woofer. Provando con un paio di saldature di fortuna ci siano resi conto di come il componente avesse altri problemi. Misurando gli avvolgimenti e mettendolo a confronto i risultati con quelli ottenuti dallo stesso componente a fianco, abbiamo convenuto come il primo fosse danneggiato. 
Nelle foto del modulo si puó vedere lo spazion vuoto dove era alloggiato il componente.

Provando con un componente donato dal modulo funzionante (l'altro modulo della coppia) abbiamo appurato come effettivamente il problema fosse quello. Test ci hanno confermato la causa del problema. 

# Il componente rotto

Il componente rotto é questo in foto
![FBT Maxx 4a componente rotto](/media/images/fbt_maxx_4a_modulo_amp_induttanza_rotta_multir.jpg "Componente rotto")

Fortunatamente lo schema elettrico é facilmente reperibile e lascio qui una copia
[FBT Maxx 4a schema elettrico - pdf](/media/documents/fbt-prod-maxx-4a-schema-elettrico.pdf)
Nello specifico possiamo notare come il componente (L10 ed L11) abbia un valore di 10mH e sia installato con ogni coppia di piedini (sui 2 lati fisici della bobina) collegati tra loro, probabilmente per avere piú portata in corrente.

# La risoluzione

Il problema é l'erreperibilitá di questo specifico modello di componente. L'azienda Semar (CastelFidardo AN) progetta e produce componenti su specifiche richieste del cliente, quindi é impossibile averne uno uguale, anche perché parliamo di una produzione di diversi anni fa 2008. Ho contattato la Semar personalmente e mi hanno detto di rivolgermi alla FBT.

Ero stato avvertito che la FBT di Recanati(MC) non fornisce pezzi di ricambio, se non tutta la scheda per intero. Infatti cosí é stato ed hanno espressamente detto che la rottura dovrá essere esaminata dal loro tecnico interno. Anche se avremmo potuto trovare un componente simile autonomamente, abbiamo preferito (per vari motivi non importanti in questo articolo) far continuare la riparazione direttamente alla FBT.

Dopo 2 settimane di attesa mi confermano che la riparazione é completata. Mi é stato confermato che non c'erano altri problemi oltre al componente giá segnalato. Questo é il risultato:

![FBT Maxx 4a riparata](/media/images/fbt_maxx_4a_modulo_amp_riparato.jpg "Componente sostituito")

# Materiale aggiuntivo

Manuale utente e schemi delle varie versioni del modulo amplificato che abbiamo trovato online
- [MAXX4_User - pdf](/media/documents/MAXX4_User.pdf)
- [MAxX4A-1prod-2V - pdf](/media/documents/MAxX4A-1prod-2V.pdf)
- [FBT-ELETTRONICA_MAX9SA_amplifier - pdf](/media/documents/FBT-ELETTRONICA_MAX9SA_amplifier.pdf)
- [MAX4A_R2 - pdf](/media/documents/MAX4A_R2.pdf)
- [MAX4A_R1 - pdf](/media/documents/MAX4A_R1.pdf)