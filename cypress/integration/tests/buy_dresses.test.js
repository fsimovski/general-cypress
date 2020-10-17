/// <reference types="cypress" />

describe('Buy dresses', () => {

  beforeEach(() => {
    cy.verifyPageUrl(Cypress.env().json.URL)
    cy.clickText('Sign in')
    cy.makeLogin('#email', '#passwd', '#SubmitLogin')
    cy.clickElement('a[title="Dresses"]')
  })

  it('Navigate to the page and order SUMMER DRESSES', () => {
    cy.clickText(Cypress.env().json.SUMMER_DRESSES)
  })

  it('Navigate to the page and order EVENING DRESSES', () => {
    cy.clickText(Cypress.env().json.EVENING_DRESSES)
  })

  it('Navigate to the page and order CASUAL DRESSES', () => {
    cy.clickText(Cypress.env().json.CASUAL_DRESSES)
  })
})