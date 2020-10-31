/// <reference types="Cypress" />
import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
const basePage = require('../../pageObjects/general/basePage.json')
const actionMenuPage = require('../../pageObjects/general/acitonMenuPage.json')
const dressesPage = require('../../pageObjects/general/dressesPage.json')
const paymentPage = require('../../pageObjects/general/paymentPage.json')

And(/^I order "(.*)"$/, (text) => {
    cy.clickElement(`${actionMenuPage.dressesBtn}`)
    switch ((text).toLowerCase().trim()) {
        case "summer dress":
            cy.clickElement(`${dressesPage.summerDresesbtn}`)
            cy.clickElement(`${dressesPage.printedChiffonDressTitle}`)
            break

        case "evening dress":
            cy.clickElement(`${dressesPage.eveningDresesbtn}`)
            cy.clickElement(`${dressesPage.printedDressTitle}`)
            break

        case "casual dress":
            cy.clickElement(`${dressesPage.casualDresesbtn}`)
            cy.clickElement(`${dressesPage.printedDressTitle}`)
            break
    }
    cy.clickElement(`${basePage.addToCartBtn}`)
    cy.clickElement(`${basePage.proceedToCheckoutBtn1}`)
    cy.clickElement(`${basePage.proceedToCheckoutBtn2}`)
    cy.clickElement(`${basePage.proceedToCheckoutBtn3}`)
    cy.selectCheckbox(`${basePage.agreeTermsCheckbox}`)
    cy.clickElement(`${basePage.proceedToCheckoutBtn4}`)
    cy.clickElement(`${paymentPage.payByChequeBtn}`)
});