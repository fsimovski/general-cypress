import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

Given('I open Automationpractice page', () => {
    cy.verifyPageUrl('URL')
});