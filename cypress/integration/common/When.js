/// <reference types="Cypress" />
import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
const loginPage = require('../../pageObjects/general/loginPage.json')

When(/^Insert "(.*)" and "(.*)" credentials$/, (username, password) => {
    cy.clickElement(`${loginPage.loginBtn}`)
    cy.makeLogin(username, password)
});