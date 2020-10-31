/// <reference types="Cypress" />

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
const loginPage = require('../../pageObjects/general/loginPage.json')

Cypress.Commands.add('makeLogin', (username, password) => {
    cy.insertValue(loginPage.emailField, Cypress.env().json.login[username])
    cy.insertValue(loginPage.passwordField, Cypress.env().json.login[password])
    //cy.clickElement(loginPage.signInBtn)
    cy.get(loginPage.signInBtn).type('{enter}')
})