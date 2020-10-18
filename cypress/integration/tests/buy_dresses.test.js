/// <reference types="cypress" />

describe('Buy dresses', () => {

  beforeEach(() => {
    cy.verifyPageUrl(Cypress.env().json.URL)
    cy.clickElement('a[class="login"]')
    cy.makeLogin('input[id="email"]', 'input[id="passwd"]', 'button[id="SubmitLogin"]')
    cy.clickElement('a[title="Dresses"]')
  })

  it('Navigate to the page and order SUMMER DRESSES', () => {
    cy.clickElement('a[title="' + Cypress.env().json.SUMMER_DRESSES + '"]')
  })

  it('Navigate to the page and order EVENING DRESSES', () => {
    cy.clickElement('a[title="' + Cypress.env().json.EVENING_DRESSES + '"]')
  })

  it('Navigate to the page and order CASUAL DRESSES', () => {
    cy.clickElement('a[title="' + Cypress.env().json.CASUAL_DRESSES + '"]')
  })
})