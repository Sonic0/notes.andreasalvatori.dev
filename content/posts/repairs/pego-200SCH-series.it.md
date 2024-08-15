---
title: "Storie di riparazioni - Pego 202 base ed expert"
date: 2024-07-20T00:03:48+02:00
categories: ["repairs"]
tags: ["repairs", "Pego", "refrigerator"]
author: ["Andrea Salvatori"]
showToc: true
TocOpen: false
draft: false
hidemeta: false
comments: false
description: "Riparazione Pego 202 base & expert"
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
    image: "https://notes.andreasalvatori.dev/media/images/pego_202_series.jpg" # image path/url
    alt: "Pego 202 series" # alt text
    caption: "Pego 202 series" # display caption under cover
    relative: false # when using page bundles set this to true
    hidden: false # only hide on current single page
editPost:
    URL: "https://github.com/Sonic0/notes.andreasalvatori.dev/blob/main/content"
    Text: "Suggest Changes" # edit text
    appendFilePath: true # to append file path to Edit link
---

Il periodo peggiore in cui si puó rompere una cella figorifera é durante l'estate, ma per ovvie motivazioni succede sempre in questi periodi.
Durante lo scorso anno un frigorista della zona ha sostituito alcune schede di controllo Pego per celle frigorifere ed ho avuto modo di averne alcune, che altrimenti sarebbero state buttate. Nello specifico sono venuto in possesso delle Pego 200SCHBASE4 e 200SCHEXP202.

# Analisi e risoluzione del problema

Per ora ho analizzato solo 2 board.
Il relé compressore rimaneva costantemente eccitato (o l'esatto opposto, scrivo questa nota con mesi di ritardo e non ricordo con precisione).
Dopo aver controllato il relé ed averne accertato il suo funzionamento, ho notato la continua fornitura di tenzione ai capi della bobina del reé anche se il compressore non sarebbe dovuto essere acceso. 
Risalendo il circuito ho individuato il problema nell'integrato ULN2003, infatti il pin dedicato ad eccitare il relé era costantemente in un singolo stato.

![200 expoert front](/media/images/pego_200SCH_202_board_front.jpg "200 expert front")
![200 expert back](/media/images/pego_200SCH_202_board_bottom.jpg "200 expert back")

Il componente é facilmente reperibile online. La sostituzione é semplice, ma consiglio di rimuovere il buzzer e reinserirlo al termine.

# Materiale aggiuntivo

Questa serie di schede sono gestibili tramite apparati terzi (Arduino o similari) tramite RS485. Questa tutta la documentazione che ho trovato al riguardo, dove é possibile identificare i registri di memoria da leggere e scrivere. 

- [MODBUS-RTU per ECP 200 EEV - pdf](/media/documents/MODBUS-RTU_ECP200_EEV_IT.pdf)
- [MODBUS-RTU per ECP BASE ECP EXPERT - pdf](/media/documents/MODBUS-RTU_ECP200T1_IT.pdf)
- [Modbus Application Protocol V1-1b3 - pdf](/media/documents/Modbus_Application_Protocol_V1_1b3.pdf)