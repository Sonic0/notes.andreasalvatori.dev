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
disableHLJS: false
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
    Text: "Suggest Changes"
    appendFilePath: true
---

Now that official support has ended for Dell SonicWall SonicPoint ACe (APL26-AE) business-grade access points, they can be found at reasonable prices. 
I managed to purchase one for 25 euros, including shipping. 
This AP can also be used in standalone mode, but its features are quite limited. For those unfamiliar, these devices need to be configured through a controller, usually a Sonic router/firewall (as far as I know).
In my case, I needed VLAN configuration, so installing OpenWrt was my only option.
The installation guide is available on the [forum di OpenWrt](https://forum.openwrt.org/t/experiences-with-sonicpoint-ace-with-openwrt/61456). I will try to explain the prerequisites and post-installation details here.

These are the ports available on the device:
![SonicPoint ACe ports](/media/images/dell-sonicpoint-ace-available-ports.jpg)

To flash the new firmware, you must connect to the device using the _console_ port. Since the necessary cable configuration differs from standard Cisco cables, there are two methods:

- Create a Cisco-to-Dell adapter: https://www.sonicwall.com/support/knowledge-base/cisco-to-sonicwall-console-cable-translation-cable/170823194044870
- Create an RS232 to RJ45 cable: https://www.sonicwall.com/support/knowledge-base/how-do-i-make-a-console-cable-for-sonicwall-firewall-appliances/170505608988182

I used this USB-RS232 converter, bought on Amazon https://amzn.eu/d/2t1AgW8, and created an RS232 to RJ45 cable using these connectors https://amzn.eu/d/eq7mpVm following the second method above.
![SonicPoint ACe RD232 adapter](/media/images/dell-sonicpoint-ace-rd232-adapter.jpg)

The original firmware version I started with was SonicOS 8.8.0.0-21o, and I encountered no differences from what’s written in the guide.
![SonicPoint ACe SafeMode](/media/images/dell-sonicpoint-ace-safe-mode.jpg)

After installing OpenWrt, I had to install Luci by following these steps:
- https://openwrt.org/docs/guide-quick-start/ssh_connect_to_the_internet_and_install_luci
- https://openwrt.org/docs/guide-user/luci/luci.essentials#basic_installation

### Update 10/25/2024
The device seems stable, but WiFi coverage is quite limited compared to what one might expect. 
Even at maximum transmission power, the signal struggles to pass through floors in the house, even directly above the AP.
I’ll conduct more research on transmission power when I have more time.
