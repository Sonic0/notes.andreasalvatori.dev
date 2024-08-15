---
title: "Access point Dell SonicPoint ACe (APL26-AE) OpenWrt"
date: 2024-07-31T23:30:00+02:00
categories: ["hardware"]
tags: ["homelab", "sonicpoint", "sonicwall"]
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

Le informazioni principali sono disponibili qui [qui](https://forum.openwrt.org/t/experiences-with-sonicpoint-ace-with-openwrt/61456).

Il cavo per collegarsi alla console ha una configurazione diversa dal cavo Cisco:
- Creare un adattatore, se caso avete giá un cavo console Cisco https://www.sonicwall.com/support/knowledge-base/cisco-to-sonicwall-console-cable-translation-cable/170823194044870
- creare un cavo RS232-rj45 https://www.sonicwall.com/support/knowledge-base/how-do-i-make-a-console-cable-for-sonicwall-firewall-appliances/170505608988182

Per installare Luci, successivamente al flash di OpenWRT:
- https://openwrt.org/docs/guide-quick-start/ssh_connect_to_the_internet_and_install_luci
- https://openwrt.org/docs/guide-user/luci/luci.essentials#basic_installation
