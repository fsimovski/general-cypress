// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import './loginPageBot'
import addContext from 'mochawesome/addContext'
const json = require('../fixtures/json_data.json')

// Alternatively you can use CommonJS syntax:
// require('./commands')

//Attach screenshot into the generated report
Cypress.on('test:after:run', (test, runnable) => {
    if (test.state === 'failed') {
        const screenshot = `${Cypress.config('screenshotsFolder')}/${Cypress.spec.name
            }/${runnable.parent.title} -- ${test.title} (failed).png`;
        addContext({ test }, screenshot);
    }
});

before(() => {
    cy.log('Before')
    cy.viewport(1920, 1080)
    Cypress.env({
        json
    })
})

beforeEach(() => {
    // root-level hook
    // runs before every test
    cy.log('Before Each')
    cy.visit('/')
})

afterEach(() => {
    // runs after each test in the block
    cy.log('After Each')
})

after(() => {
    // runs once after all tests in the block
    cy.log('After')
})