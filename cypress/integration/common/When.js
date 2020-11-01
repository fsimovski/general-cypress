/// <reference types="Cypress" />
import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
const loginPage = require('../../page_objects/general/login-page.json')

When(/^I Make "(.*)"$/, (process) => {
    cy.clickElement(`${loginPage.loginBtn}`)
    if ((process).toLowerCase().trim() === 'login') {
        cy.makeLogin("USERNAME", "PASSWORD")
    }
    else if ((process).toLowerCase().trim() === 'registration') {
        cy.makeRegistration()
    }
});