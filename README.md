# Block Disinformation Extension

A browser extension to block disinformation.

Tested in Chrome, Edge, and Firefox.

Status:

- Chrome: in review ⏳
- Firefox: in review ⏳
- Edge: in review ⏳

## Manual Installation

### Install on Chrome or Edge

1. Download the `*.crx.zip` file from [latest releases](https://github.com/mreichelt/block-disinformation-extension/releases/latest)
2. Unpack the ZIP
3. Install the `*.crx` file as extension

### Install on Firefox

1. Download the regular (not crx) `*.zip` file from [latest releases](https://github.com/mreichelt/block-disinformation-extension/releases/latest)
2. Install it as extension

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
