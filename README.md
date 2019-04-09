# CS4470 Library Capacity Capstone Project
A mobile application for students to check the capacity levels of different libraries at Western University. Built using [react native](https://facebook.github.io/react-native/) & [expo](https://expo.io). 📖📚🎉

[![Build Status](https://travis-ci.com/rzgry/Library-Capacity-App.svg?branch=master)](https://travis-ci.com/rzgry/Library-Capacity-App)

[Main Screen](docs/main_screen.png "Main Page")
[Library Screen](docs/library_screen.png "Library Page")

## Setting up VS Code Development Environment

Install [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) vscode extensions

Add the following to your vscode settings

```json
"editor.formatOnSave": true, // run pritter and eslint on save
"javascript.format.enable": false, // disable default vscode javascript formatter
"prettier.eslintIntegration": true, // use eslint with prettier
```

## Getting Started

1. Install dependencies

```
npm install
```

2. Copy and rename config/config.template.json to config/config.json and fill out missing configuration variables.

3. Running application

```
npm start
```

4. Running tests / linting

```
npm test

npm run lint
```