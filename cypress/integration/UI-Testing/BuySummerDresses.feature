Feature: Navigate and buy

    I want to buy summer dress from Automationpractice

    @focus @smoke
    Scenario: SUMMER DRESSES
        Given I open Automationpractice page
        When I Make "login"
        And I order "EVENING DRESS"
        Then Verify that "Order confirmation" is successful
