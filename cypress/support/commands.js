// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('clickText', (label) => {
    cy.contains(label)
        .should('be.visible')
        .click({
            multiple: true,
            force: true
        })
})

Cypress.Commands.add('clickElement', (element) => {
    cy.get(element)
        .should('be.visible')
        .click({
            multiple: true,
            force: true
        })
})

Cypress.Commands.add('verifyPageUrl', (text) => {
    cy.url().should('include', text)
})

Cypress.Commands.add('insertValue', (element, value) => {
    cy.get(element)
        .should('be.visible')
        .type(value)
        .should('have.value', value)
})

Cypress.Commands.add('makeLogin', (elementUsername, elementPassword, elementSignIn) => {
    cy.insertValue(elementUsername, Cypress.env().json.login.USERNAME)
    cy.insertValue(elementPassword, Cypress.env().json.login.PASSWORD)
    cy.clickElement(elementSignIn)
})

Cypress.Commands.add('selectCheckbox', (element) => {
    cy.clickElement(element).should('be.checked')
})

Cypress.Commands.add('verifyText', (selector, value) => {
    cy.get(selector)
    .should('be.visible')
    .contains(value)
})