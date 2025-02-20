# Block Disinformation Extension

A browser extension to block disinformation.

Tested in Chrome, Edge, and Firefox.

Status:

- Chrome: [install here](https://chromewebstore.google.com/detail/block-disinformation/gfiedhngeghhnhodbajgiafgofdjoghj)
- Firefox: [install here](https://addons.mozilla.org/firefox/addon/block-disinformation/)
- Edge: [install here](https://microsoftedge.microsoft.com/addons/detail/block-disinformation/aoicdlccokphjihlflfndlkcmfiaodic)

## Manual Installation

### Install on Chrome or Edge

1. Download the `.zip` file from [latest releases](https://github.com/mreichelt/block-disinformation-extension/releases/latest)
2. Unpack the ZIP
3. In Chrome, open `chrome://extensions`
4. Open the folder with 'Load unpacked'

### Install on Firefox

1. Download the `.xpi` file from [latest releases](https://github.com/mreichelt/block-disinformation-extension/releases/latest)
2. Open `about:addons` in Firefox
3. On the settings icon, select 'Install add-on from file', and open the xpi file

## Current block rules

- All URLs investigated by CORRECTIV (see [article](https://correctiv.org/en/fact-checking-en/2025/01/24/disinformation-operation-russian-meddling-in-german-election-campaign-exposed/), [domain list](https://correctiv.org/wp-content/uploads/2025/01/storm1516_domains-CORRECTIV-%E2%80%93-Einflussoperation-enttarnt-Russland-greift-in-deutschen-Wahlkampf-ein.pdf)) - see [storm1516_correctiv.txt](storm1516_correctiv.txt)
- New URLs, see [storm1516_extended.txt](storm1516_extended.txt)

## Help needed

Spread the word! And please report bugs and new URLs via the [issue tracker](https://github.com/mreichelt/block-disinformation-extension/issues).

## Technical info

To regenerate the `rules_*` files, run:

```bash
node generate_rules.js storm1516_correctiv.txt
node generate_rules.js storm1516_extended.txt
```

Work in progress. 🚧
