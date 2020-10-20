/// <reference types="cypress" />

describe('Navigate and buy', () => {

  var loginBtn = 'a[class="login"]'
  var emailField = 'input[id="email"]'
  var passwordField = 'input[id="passwd"]'
  var signInBtn = 'button[id="SubmitLogin"]'
  var dressesBtn = 'a[title="Dresses"]'
  var summerDresesbtn = 'a[title="Summer Dresses"]'
  var eveningDresesbtn = 'a[title="Evening Dresses"]'
  var casualDresesbtn = 'a[title="Casual Dresses"]'
  var printedChiffonDressTitle = 'a[title="Printed Chiffon Dress"]'
  var printedDressTitle = 'a[title="Printed Dress"]'
  var addToCartBtn = 'button[class="exclusive"]'
  var proceedToCheckoutBtn1 = 'a[class="btn btn-default button button-medium"]'
  var proceedToCheckoutBtn2 = 'a[class="button btn btn-default standard-checkout button-medium"]'
  var proceedToCheckoutBtn3 = 'button[name="processAddress"]'
  var agreeTermsCheckbox = 'input[type="checkbox"]'
  var proceedToCheckoutBtn4 = 'button[name="processCarrier"]'
  var payByBankBtn = 'a[class="bankwire"]'
  var payByChequeBtn = 'a[class="cheque"]'
  var pageHeadingLabel = 'h1[class="page-heading"]'
  var confirmOrderBtn = 'button[class="button btn btn-default button-medium"]'


  beforeEach(() => {
    cy.verifyPageUrl(Cypress.env().json.URL)
    cy.clickElement(loginBtn)
    cy.makeLogin(emailField, passwordField, signInBtn)
    cy.clickElement(dressesBtn)
  })

  it('SUMMER DRESSES', () => {
    cy.clickElement(summerDresesbtn)
    cy.clickElement(printedChiffonDressTitle)
    cy.clickElement(addToCartBtn)
    cy.clickElement(proceedToCheckoutBtn1)
    cy.clickElement(proceedToCheckoutBtn2)
    cy.clickElement(proceedToCheckoutBtn3)
    cy.selectCheckbox(agreeTermsCheckbox)
    cy.clickElement(proceedToCheckoutBtn4)
    cy.clickElement(payByBankBtn)
    cy.verifyText(pageHeadingLabel, 'Order summary')
    cy.clickElement(confirmOrderBtn)
    cy.verifyText(pageHeadingLabel, 'Order confirmation')
  })

  it('EVENING DRESSES', () => {
    cy.clickElement(eveningDresesbtn)
    cy.clickElement(printedDressTitle)
    cy.clickElement(addToCartBtn)
    cy.clickElement(proceedToCheckoutBtn1)
    cy.clickElement(proceedToCheckoutBtn2)
    cy.clickElement(proceedToCheckoutBtn3)
    cy.selectCheckbox(agreeTermsCheckbox)
    cy.clickElement(proceedToCheckoutBtn4)
    cy.clickElement(payByChequeBtn)
    cy.verifyText(pageHeadingLabel, 'Order summary')
    cy.clickElement(confirmOrderBtn)
    cy.verifyText(pageHeadingLabel, 'Order confirmation')
  })

  it('CASUAL DRESSES', () => {
    cy.clickElement(casualDresesbtn)
    cy.clickElement(printedDressTitle)
    cy.clickElement(addToCartBtn)
    cy.clickElement(proceedToCheckoutBtn1)
    cy.clickElement(proceedToCheckoutBtn2)
    cy.clickElement(proceedToCheckoutBtn3)
    cy.selectCheckbox(agreeTermsCheckbox)
    cy.clickElement(proceedToCheckoutBtn4)
    cy.clickElement(payByChequeBtn)
    cy.verifyText(pageHeadingLabel, 'Order summary')
    cy.clickElement(confirmOrderBtn)
    cy.verifyText(pageHeadingLabel, 'Order confirmation')
  })
})