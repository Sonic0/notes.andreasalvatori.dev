---
title: "Access point Dell SonicPoint ACe (APL26-AE) OpenWrt"
date: 2024-07-31T23:30:00+02:00
categories: ["hardware"]
tags: ["homelab", "sonicpoint", "sonicwall", "access-point"]
author: ["Andrea Salvatori"]
showToc: true
TocOpen: false
draft: false
hidemeta: false
comments: false
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
    image: "https://notes.andreasalvatori.dev/media/images/sonicpointACe.jpg"
    alt: "Dell SonicPoint ACe (APL26-AE)"
    caption: "Dell SonicPoint ACe (APL26-AE)"
    relative: false
    hidden: false
editPost:
    URL: "https://github.com/Sonic0/notes.andreasalvatori.dev/blob/main/content"
    Text: "Suggest Changes" # edit text
    appendFilePath: true # to append file path to Edit link
---

Ora che il supporto ufficiale per gli access point di fascia business Dell SonicWall SonicPoint ACe (APL26-AE) é terminato, si possono trovare a prezzi accettabili. 
Nel mio caso sono riuscito ad acquistarlo per 25 euro, compresa spedizione. 
Questo AP permette di essere utilizzato anche in modalitá standalone, ma le funzionalitá messe a disposizione sono molto limitate. 
Per chi non lo sapesse, questi apparati debbono essere configurati tramite un'unitá di controllo che, se non erro, é spesso rappresentata da un router/firewall (sempre della serie Sonic).
Nel mio caso necessitavo della configurazione di VLANs, quindi l'installazione di OpenWrt é stata l'unica alternativa.

La guida all'installazione é consultabile in questo nel [forum di OpenWrt](https://forum.openwrt.org/t/experiences-with-sonicpoint-ace-with-openwrt/61456). Cercheró di spiegare i prerequisiti e dettagli post installazione.

Queste sono le porte messe disponibili nell'apparato:
![SonicPoint ACe ports](/media/images/dell-sonicpoint-ace-available-ports.jpg)

Per effettuare il flash del nuovo firmware ci si deve collegare all'apparato usando la porta _console_ del device. 
Dato che il cavo necessario ha una configurazione diversa da un qualsiasi cavo con standard Cisco, possiamo seguire questi 2 metodi:
- Creare un adattatore da Cisco a Dell https://www.sonicwall.com/support/knowledge-base/cisco-to-sonicwall-console-cable-translation-cable/170823194044870
- Creare un cavo RS232 -> rj45 https://www.sonicwall.com/support/knowledge-base/how-do-i-make-a-console-cable-for-sonicwall-firewall-appliances/170505608988182
Io ho utilizzato questo convertitore USB-RS232, acquistato su Amazon https://amzn.eu/d/2t1AgW8, ed ho creato un cavo da RS232 a RJ45 utilizzando questi connettori https://amzn.eu/d/eq7mpVm e seguendo il metodo 2 elencato precedentemente.

La versione del firmare originale da cui sono partito era SonicOS 8.8.0.0-21o e non ci sono state differenze con quanto scritto nella guida.
![SonicPoint ACe ports](/media/images/dell-sonicpoint-ace-safe-mode.jpg)

Terminata l'installazione di OpenWrt ho dovuto installare Luci seguendo questi steps:
- https://openwrt.org/docs/guide-quick-start/ssh_connect_to_the_internet_and_install_luci
- https://openwrt.org/docs/guide-user/luci/luci.essentials#basic_installation

### Update del 25/10/2024
L'apparato sembra stabile ma la copertura wifi é molto limitata, rispetto a quello che ci si aspetterebbe. 
Anche impostando la massima potenza di trasmissione, non riesce a passare da un piano della casa all'altro, anche posizionandosi proprio sopra di lui.
Quando avró piú tempo effettueró maggiori ricerce riguardo la potenza di trasmissione.