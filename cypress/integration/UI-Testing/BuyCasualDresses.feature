Feature: Navigate and buy

    I want to buy casual dress from Automationpractice

    @focus @regression
    Scenario: CASUAL DRESSES
        Given I open Automationpractice page
        When Insert "USERNAME" and "PASSWORD" credentials
        And I order "CASUAL DRESS"
        Then Verify that "Order confirmation" is successful
