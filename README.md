# Welcome to nostr-key-generator

## Description
A simple and extensible Nostr key generator

## Features
- A command line interface for generating Nostr keys

## Installation & usage

### Local

```bash
npm i
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

By default the keys will be printed to the console, if you want the command to print the keys as JSON try the command below.

```bash
nostr-key-generator --output json
```
