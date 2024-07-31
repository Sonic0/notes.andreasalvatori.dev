---
title: "Fujitsu Futro S920 PCIe limitation"
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
searchHidden: true
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

I started my homelab journey! Looking for a suitable low power consumption computer to use as a router/firewall, I came across the Fujitsu Futro S920, a thin client that is especially popular for projects with pfSense because of its expandability (The x4 PCIe port), low power consumption and the low price.

I read numerous documents and articles on specifications and upgrades, and I found two particularly interesting posts about the speed limitations of PCIe X4 slot:
- https://forums.servethehome.com/index.php?threads/fujitsu-futro-s920-thin-client-as-opnsense-firewall.31087/page-9#post-369944
- https://www.parkytowers.me.uk/thin/Futro/s920/

Trying to go deeper in this performance issue, I found this article https://pietro.in/en/posts/futro-s920-proxmox/ that explain well the problem and provide a guide to solve the problem.

Result of using the `lspci -vvv` command before and after the BIOS update:
- `LnkSta: Speed 2.5GT/s (downgraded), Width x1`
- `LnkSta: Speed 5GT/s, Width x1`

Files to perform the modify are available in the links posted before.