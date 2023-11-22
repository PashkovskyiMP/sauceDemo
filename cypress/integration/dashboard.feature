Feature: Dashboard

  Background:
    When I Login with valid data

  Scenario: Check that user can make order with 1 item
    And I add to cart 'sauce-labs-backpack' item
    And I click on shopping bucket
    And I click on Checkout button
    And I type 'Test' in first name input field
    And I type 'Test' in last name input field
    And I type '12345' in postal code input field
    And I click on Continue button
    And I check that Total price includes Tax and Item total
    And I click on Finish button
    Then I should be presented with 'Your order has been dispatched, and will arrive just as fast as the pony can get there!'
    And I click on Back Home button
    And I click on menu button
    And I click on Logout button
    Then I should be presented with Login page

  Scenario: Check that user can make order with 2 item
    And I add to cart 'sauce-labs-backpack' item
    And I add to cart 'sauce-labs-bike-light' item
    And I click on shopping bucket
    And I click on Checkout button
    And I type 'Test' in first name input field
    And I type 'Test' in last name input field
    And I type '12345' in postal code input field
    And I click on Continue button
    And I check that Total price includes Tax and Item total
    And I click on Finish button
    Then I should be presented with 'Your order has been dispatched, and will arrive just as fast as the pony can get there!'
    And I click on Back Home button
    And I click on menu button
    And I click on Logout button
    Then I should be presented with Login page

  Scenario: Check that user can cancel order and select another item
    And I add to cart 'sauce-labs-backpack' item
    And I click on shopping bucket
    And I click on Checkout button
    And I type 'Test' in first name input field
    And I type 'Test' in last name input field
    And I type '12345' in postal code input field
    And I click on Continue button
    And I check that Total price includes Tax and Item total
    And I click on Cancel button
    And I remove 'sauce-labs-backpack' item
    And I add to cart 'sauce-labs-bolt-t-shirt' item
    And I click on shopping bucket
    And I click on Checkout button
    And I type 'Test' in first name input field
    And I type 'Test' in last name input field
    And I type '12345' in postal code input field
    And I click on Continue button
    And I check that Total price includes Tax and Item total
    And I click on Finish button
    Then I should be presented with 'Your order has been dispatched, and will arrive just as fast as the pony can get there!'
    And I click on Back Home button
    And I click on menu button
    And I click on Logout button
    Then I should be presented with Login page
