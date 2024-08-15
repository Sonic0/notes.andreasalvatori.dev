---
title: "Fujitsu Futro S920 limitazioni PCIe"
date: 2024-07-31T23:30:00+02:00
categories: ["hardware"]
tags: ["homelab", "fujitsu", "futro-S920"]
author: ["Andrea Salvatori"]
showToc: true
TocOpen: false
draft: false
hidemeta: false
comments: false
canonicalURL: "https://notes.andreasalvatori.dev/blog/hardware/fujitsu-futro-s920-pcie/"
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
    image: "https://notes.andreasalvatori.dev/media/images/Fujitsu-Futro-S920.jpg"
    alt: "Fujitsu Futro S920"
    caption: "Fujitsu Futro S920"
    relative: false
    hidden: false
editPost:
    URL: "https://github.com/Sonic0/notes.andreasalvatori.dev/blob/main/content"
    Text: "Suggest Changes" # edit text
    appendFilePath: true # to append file path to Edit link
---

Si parte con la creazione del mio homelab!
Durante ricerca di un computer adatto a basso consumo energetico da utilizzare come router/firewall, mi sono imbattuto nel Fujitsu Futro S920, un thin client particolarmente popolare per progetti con pfSense per via di una porta PCIe x4, un basso consumo energetico e un prezzo basso.

Ho letto numerosi documenti ed articoli relativi a specifiche ed miglioramenti da applicare e ho trovato due post particolarmente interessanti sui limiti di velocità dello slot PCIe X4:
- https://forums.servethehome.com/index.php?threads/fujitsu-futro-s920-thin-client-as-opnsense-firewall.31087/page-9#post-369944
- https://www.parkytowers.me.uk/thin/Futro/s920/

Scavando piú a fondo in questo problema di performance, ho trovato questo articolo https://pietro.in/en/posts/futro-s920-proxmox/ che lo spiega bena e fornisce una guida per risolverlo.

Il risultato del comando `lspci -vvv` prima e dopo l'applicazione dell'aggiornmento del parametro nel BIOS:
- `LnkSta: Speed 2.5GT/s (downgraded), Width x1`
- `LnkSta: Speed 5GT/s, Width x1`

Documenti e guide guida per l'applicazione dell'aggiornamento del parametro del BIOS sono disponibili ai link precedentemente segnalati, ma voglio aggiungere alcune note e link aggiuntivi:
- Specifich della serie di schede madri [mini-itx-d3313 - pdf](/media/documents/v14-mini-itx-d3313-s4-s5-s6-12-2015.pdf). Questo documento contiene la guida per eseguire l'aggiornamento del BIOS (da fare prima dell'aggiornamento del parametro).
- La versione [freeDOS](https://www.freedos.org/download/) Lite é probabilmente sufficiente per il nostro scopo.
- Ultimo pacchetto per aggiornamento del BIOS [V4.6.5.4 - R1.18.0 (10/07/2018) - zip](/media/documents/DOS_BIOS_UPDATE_D3313A1x_V4654R1180.pdf), da applicare tramite FreeDOS. Questo zip contiene i file specifici per il mio modello di scheda madre D3313-A1x (verificare la versione nelle info della scheda madre entrando nelle configurazioni del BIOS).