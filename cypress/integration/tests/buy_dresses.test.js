/// <reference types="cypress" />

describe('Navigate and buy', () => {

  beforeEach(() => {
    cy.verifyPageUrl(Cypress.env().json.URL)
    cy.clickElement('a[class="login"]')
    cy.makeLogin('input[id="email"]', 'input[id="passwd"]', 'button[id="SubmitLogin"]')
    cy.clickElement('a[title="Dresses"]')
  })

  it('SUMMER DRESSES', () => {
    cy.clickElement('a[title="Summer Dresses"]')
    cy.clickElement('a[title="Printed Chiffon Dress"]')
    cy.clickElement('button[class="exclusive"]')
    cy.clickElement('a[class="btn btn-default button button-medium"]')
    cy.clickElement('a[class="button btn btn-default standard-checkout button-medium"]')
    cy.clickElement('button[name="processAddress"]')
    cy.selectCheckbox('input[type="checkbox"]')
    cy.clickElement('button[name="processCarrier"]')
    cy.clickElement('a[class="bankwire"]')
    cy.verifyText('h1[class="page-heading"]', 'Order summary')
    cy.clickElement('button[class="button btn btn-default button-medium"]')
    cy.verifyText('h1[class="page-heading"]', 'Order confirmation')
  })

  it('EVENING DRESSES', () => {
    cy.clickElement('a[title="Evening Dresses"]')
    cy.clickElement('a[title="Printed Dress"]')
    cy.clickElement('button[class="exclusive"]')
    cy.clickElement('a[class="btn btn-default button button-medium"]')
    cy.clickElement('a[class="button btn btn-default standard-checkout button-medium"]')
    cy.clickElement('button[name="processAddress"]')
    cy.selectCheckbox('input[type="checkbox"]')
    cy.clickElement('button[name="processCarrier"]')
    cy.clickElement('a[class="cheque"]')
    cy.verifyText('h1[class="page-heading"]', 'Order summary')
    cy.clickElement('button[class="button btn btn-default button-medium"]')
    cy.verifyText('h1[class="page-heading"]', 'Order confirmation')
  })

  it('CASUAL DRESSES', () => {
    cy.clickElement('a[title="Casual Dresses"]')
    cy.clickElement('a[title="Printed Dress"]')
    cy.clickElement('button[class="exclusive"]')
    cy.clickElement('a[class="btn btn-default button button-medium"]')
    cy.clickElement('a[class="button btn btn-default standard-checkout button-medium"]')
    cy.clickElement('button[name="processAddress"]')
    cy.selectCheckbox('input[type="checkbox"]')
    cy.clickElement('button[name="processCarrier"]')
    cy.clickElement('a[class="cheque"]')
    cy.verifyText('h1[class="page-heading"]', 'Order summary')
    cy.clickElement('button[class="button btn btn-default button-medium"]')
    cy.verifyText('h1[class="page-heading"]', 'Order confirmation')
  })
})