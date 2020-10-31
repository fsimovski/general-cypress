/// <reference types="Cypress" />
import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
const paymentPage = require('../../pageObjects/general/paymentPage.json')

Then(/^Verify that "(.*)" is successful$/, (text) => {
    cy.verifyText(`${paymentPage.pageHeadingLabel}`, 'Order summary')
    cy.clickElement(`${paymentPage.confirmOrderBtn}`)
    cy.verifyText(`${paymentPage.pageHeadingLabel}`, text)
});