---
title: "Antenna CB EH Star"
date: 2024-06-12T00:03:48+02:00
categories: ["antenna"]
tags: ["CB", "telecommunications", "radio", "antenna", "EH"]
author: ["Andrea Salvatori"]
showToc: true
TocOpen: false
draft: false
hidemeta: false
comments: false
description: "Antenna 11 metri di semplice realizzazione e dagli infobri molto contenuti"
disableHLJS: true # to disable highlightjs
disableShare: false
hideSummary: false
searchHidden: true
ShowReadingTime: true
ShowBreadCrumbs: true
ShowPostNavLinks: true
ShowWordCount: true
ShowRssButtonInSectionTermList: true
UseHugoToc: true
editPost:
    URL: "https://github.com/Sonic0/notes.andreasalvatori.dev/blob/main/content"
    Text: "Suggest Changes"
    appendFilePath: true
---

# Mia realizzazione

La banda é effettivamente abbastanza stretta ma sono riuscito a coprire tutti i 40 canali restando con ROS massimo di 1:1.4. <!--more--> Ho piú o meno impostato il centrobanda sul canale 18 (27.175MHz) raggiungendo un ROS di 1:1.2 alla 23ma spira. Sono sicuro di poter migliore l'accordo usando il NanoVNA e perdendoci un pó di tempo.

Come da suggerimenti delle fonti ho usato tubo da impianti elettrici da 2,5cm di diametro ed un manicottio in ottone cromato per lavandini da 1 pollice. Per i cavi interni al rubi ho usato vecchi cavi rigidi in rame recuperati da vecchi impianti alettrici, sezione 1mm.

![EH Antenna 0](/media/images/miaEHAntenna0.jpg)
![EH Antenna 1](/media/images/miaEHAntenna1.jpg)
![EH Antenna 2](/media/images/miaEHAntenna2.jpg)

# Immagini progetto originale

Fonte [Emanuele Brambilla](https://digilander.libero.it/lelepano/)

![Antenna completa](/media/images/antenna-completa.jpg "Antenna completa Emanuele")
![Antenna completa aperta](/media/images/antenna-aperta.jpg "Antenna completa aperta Emanuele")
![Schema A](/media/images/Antenna-EH-file-A.jpg "Antenna EH A")
![Schema B](/media/images/Antenna-EH-file-B.jpg "Antenna EH B")
![Schema C](/media/images/Antenna-EH-file-C.jpg "Antenna EH C")

# Immagini e note trovate da IZ0UPS

Fonte [IZ0UPS](https://officinahf.jimdofree.com/antenne-cb-11m/cb-eh-star/)

![Antenna IZ0UPS](/media/images/realizzazione-iz0ups.jpg "Antenna IZ0UPS")

Rispetto al progetto di cui sopra ho riscontrato due inesattezze:
1) il collegamento tra la calza del cavo e il cilindro inferiore va effettuato dalla parte alta del cilindro,
2) la distanza tra il cilindro inferiore e la bobina deve essere uguale a quella presente tra i due cilindri.
Ho tentato di contattare l'autore del progetto per informarlo ma senza alcuna risposta.
I miei calcoli hanno dato come risultato 26 spire per la bobina, ho raggiunto l'accordo alla 25ma spira (da notare lo spillo nella foto sotto).

Ogni spira sposta l'accordo di circa 350-400KHz, il resto è come nel progetto originale, anche i materiali utilizzati sono gli stessi.
Per la taratura ho usato un rosmetro a ponte e un dip-meter, ma in mancanza di meglio un rosmetro hf dovrebbe andare abbastanza bene, da evitare i rosmetri per la cb (vedi ZG et similia) dove se non specificamente indicato sono da ritenersi 26-28/26-30MHz.
Teoricamente le prestazioni di questa antenna dovrebbero essere simili al dipolo verticale, ma non contateci troppo! I risultati ottenuti da me sono i seguenti:
Il ros e 1:1.15 a centrobanda, la banda passante è di circa 1,5MHz con ros 2:1.

I rapporti variano da un +3 a un -5 punti S rispetto al doppio dipolo 5 bande della ECO, ma in tutti i casi ho riscontrato un netto miglioramento nella modulazione dei segnali ricevuti, ad esempio: segnali AM a S7 dal dipolo con modulazione incomprensibile o parzialmente comprensibile diventavano R5 con la EH anche se scendevano ad S5 o S3. In trasmissione sono arrivato a circa 12-13Km con un più che dignitoso S9 R5 e 4W in antenna.

Non ho potuto fare di meglio a causa della cronica mancanza di interlocutori, di cui purtroppo da tempo soffre la 27MHz... 
Ritengo che i risultati ottenuti fin'ora siano abbastanza buoni considerando il fatto che la parte attiva dell'antenna è alta meno di 35cm, di sicuro meglio delle antenne caricate di altezza analoga e forse anche meglio di alcune ben più lunghe.
Da notare che durante le prove la EH era sul terrazzo ancorata ad un paletto da 1,5mt con 15mt di RG58, mentre il dipolo è posizionato ben più in alto sul tetto con 20 mT di RG213. 