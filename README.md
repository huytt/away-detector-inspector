# Using Puppeteer
I'm using Puppeteer as User Interface (UI) testing is a technique used to identify issues with Graphical User Interfaces (GUIs). The technique is commonly used to test web application interfaces.

Puppeteer is an open source library that can be used to automate UI tests. Puppeteer provides a headless Chromium instance that can be programmatically interacted with.
In the recipe, we will use Puppeteer to UI test the website http://example.com/.

# Solution
My solution only use Puppeteer as Chromium instance to load webpage and snapshot selector element.

# How to run source:
* yarn install
* yarn start

The result will snapshot in out folder

# Run unit test:
yarn test