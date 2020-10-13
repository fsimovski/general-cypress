describe('My First Test', () => {

  // Values
  const VALUE_URL = '/commands/actions'
  const VALUE_EMAIL = 'fake@email.com'

  // Elements
  const ELEMENT_EMAIL_FIELD = '.action-email'

  it('Gets, types and asserts', () => {

    cy.contains('type').click()

    // Should be on a new URL which includes '/commands/actions'
    cy.url().should('include', VALUE_URL)

    // Get an input, type into it and verify that the value has been updated
    cy.get(ELEMENT_EMAIL_FIELD)
      .type(VALUE_EMAIL)
      .should('have.value', VALUE_EMAIL)
  })
})