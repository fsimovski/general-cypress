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
const registrationPage = require('../../page_objects/general/registration-page.json')

Cypress.Commands.add('makeRegistration', () => {
    cy.generateRandomEmail(`${registrationPage.registrationEmailField}`, 10, Cypress.env().json.registration.DOMAIN)
    cy.clickElement(`${registrationPage.signInBtn}`)
    cy.verifyPageUrl('REGISTRATION_URL')
    cy.selectRadioButton('mr', `${registrationPage.mrGender}`)
    cy.insertValue(`${registrationPage.customerFirstName}`, Cypress.env().json.registration.FIRST_NAME)
    cy.insertValue(`${registrationPage.customerLastName}`, Cypress.env().json.registration.LAST_NAME)
    cy.insertValue(`${registrationPage.customerPassword}`, Cypress.env().json.registration.PASSWORD)
    cy.selectDropDownText(`${registrationPage.dateOfBirthDay}`, '20')
    cy.selectDropDownText(`${registrationPage.dateOfBirthMonth}`, 'May')
    cy.selectDropDownText(`${registrationPage.dateOfBirthYear}`, '1990')
    cy.insertValue(`${registrationPage.address}`, Cypress.env().json.registration.ADDRESS)
    cy.insertValue(`${registrationPage.city}`, Cypress.env().json.registration.CITY)
    cy.selectDropDownText(`${registrationPage.state}`, Cypress.env().json.registration.STATE)
    cy.insertValue(`${registrationPage.zipPostalCode}`, Cypress.env().json.registration.ZIP_POSTAL_CODE)
    cy.insertValue(`${registrationPage.mobilePhone}`, Cypress.env().json.registration.MOBILE_PHONE)
    cy.clickElement(`${registrationPage.registerBtn}`)
})