/// <reference types="cypress" />
const basePage = require('../../pageObjects/general/basePage.json')
const loginPage = require('../../pageObjects/general/loginPage.json')
const actionMenuPage = require('../../pageObjects/general/acitonMenuPage.json')
const dressesPage = require('../../pageObjects/general/dressesPage.json')
const paymentPage = require('../../pageObjects/general/paymentPage.json')

describe('Navigate and buy', () => {

  beforeEach(() => {
    cy.verifyPageUrl('URL')
    cy.clickElement(`${loginPage.loginBtn}`)
    cy.makeLogin('USERNAME', 'PASSWORD')
  })

  it('SUMMER DRESSES', () => {
    cy.clickElement(`${actionMenuPage.dressesBtn}`)
    cy.clickElement(`${dressesPage.summerDresesbtn}`)
    cy.clickElement(`${dressesPage.printedChiffonDressTitle}`)
    cy.clickElement(`${basePage.addToCartBtn}`)
    cy.clickElement(`${basePage.proceedToCheckoutBtn1}`)
    cy.clickElement(`${basePage.proceedToCheckoutBtn2}`)
    cy.clickElement(`${basePage.proceedToCheckoutBtn3}`)
    cy.selectCheckbox(`${basePage.agreeTermsCheckbox}`)
    cy.clickElement(`${basePage.proceedToCheckoutBtn4}`)
    cy.clickElement(`${paymentPage.payByBankBtn}`)
    cy.verifyText(`${paymentPage.pageHeadingLabel}`, 'Order summary')
    cy.clickElement(`${paymentPage.confirmOrderBtn}`)
    cy.verifyText(`${paymentPage.pageHeadingLabel}`, 'Order confirmation')
  })
})