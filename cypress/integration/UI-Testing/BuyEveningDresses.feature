Feature: Navigate and buy

    I want to buy evening dress from Automationpractice

@regression
    Scenario: EVENING DRESSES
        Given I open Automationpractice page
        When I Make "login"
        And I order "SUMMER DRESS"
        Then Verify that "Order confirmation" is successful
