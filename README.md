
This repository contains the source code for the interactive tutorial for Strype.

Building and running
---

Strype is a <a href="https://v2.vuejs.org/" target="_blank">Vue 2</a> project (upgrading to Vue 3 is planned for 2025) that uses NPM as its core tool.  To build you will first need to install <a href="https://nodejs.org/en" target="_blank">Node.js</a> (or <a href="https://docs.npmjs.com/downloading-and-installing-node-js-and-npm" target="_blank">another method</a>) to get NPM.

Then, to run a local  version you can run the following commands in the top level of the checked out repository:

```
npm install
npm run serve:python
```


Testing
---
To run the full test suite (which takes around 50 minutes), you can run:

```
npm run test:cypress
```

To run tutorial-specific tests, ensure the local server is running, then run:

```
"cy:run:python": "cypress run --env mode=python --spec tests/cypress/e2e/tutoriale.cy.ts",
```


 - Add a graphics and sound API: Q1 2025
 - Add support for third-party library import: Q2 2025
 - Add support for data processing and/or charting: Q3 2025

The dates and choices may change as we receive more user feedback.
