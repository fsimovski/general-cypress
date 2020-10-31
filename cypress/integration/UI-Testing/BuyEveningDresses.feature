Feature: Navigate and buy

    I want to buy evening dress from Automationpractice

    @focus
    Scenario: EVENING DRESSES
        Given I open Automationpractice page
        When Insert "USERNAME" and "PASSWORD" credentials
        And I order "SUMMER DRESS"
        Then Verify that "Order confirmation" is successful
