# Welcome to nostr-key-generator

## Description
A simple and extensible Nostr key generator

## Features
- A command line interface for generating Nostr keys

## Installation & usage

### Local

```bash
npm i
npm run test
npm run generate-nostr-keys
```

By default the keys will be printed to the console, if you want them as JSON try the command below:

```bash
npm run generate-nostr-keys -- --output json
```

### Global

```bash
npm i -g
nostr-key-generator
```

If you install directly from this repository source, build first:

```bash
npm run build
```

By default the keys are printed to the console. To print JSON output:

```bash
nostr-key-generator --output json
```
