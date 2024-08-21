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

Con solo 25 euro piú spedizione venni in possesso di un access point di fascia business Dell SonicWall SonicPoint ACe (APL26-AE). Questi AP sono quasi sempre inutilizzabili per scopi casalinghi perché hanno bisogno di una unitá centrale che funge da controllore. Come avere un AP Ubiquity, ma dovendo pagare centinaia di euro in licenze ed hardware. 
Il motivo che mi spinse all'acquisto é stata una speranza dovuta a questo tread nel [forum di OpenWrt](https://forum.openwrt.org/t/experiences-with-sonicpoint-ace-with-openwrt/61456). Come sappiamo l'OpenSource é fantastico ed anche in questo caso ci ha regalato la possibilitá di sbloccare un device che al tempo costava centinaia di euro.

![SonicPoint ACe ports](/media/images/dell-sonicpoint-ace-available-ports.jpg)
Come si puó evincere dalla guida il flash del nuovo firmware deve essere fatto tramite RS232, usando la porta _console_ del device. Dato che il cavo necessario ha una configurazione diversa da un qualsiasi cavo con standard Cisco, possiamo seguire questi 2 metodi:
- Creare un adattatore da Cisco a Dell https://www.sonicwall.com/support/knowledge-base/cisco-to-sonicwall-console-cable-translation-cable/170823194044870
- Creare un cavo RS232 -> rj45 https://www.sonicwall.com/support/knowledge-base/how-do-i-make-a-console-cable-for-sonicwall-firewall-appliances/170505608988182

L'installazione, almeno per ora, é stata portata a termine partendo da SonicOS 8.8.0.0-21o e 9.0.1.0.

Successivamente all'installazione di OpenWrt ho installato Luci seguendo questi steps:
- https://openwrt.org/docs/guide-quick-start/ssh_connect_to_the_internet_and_install_luci
- https://openwrt.org/docs/guide-user/luci/luci.essentials#basic_installation
