Feature: Login

  Scenario: Check that user can login with valid data
    When I Login with valid data

  Scenario Outline: Check that user can't login with <case>
    Given I go to 'Login page'
    And I type <username> in username input field
    And I type <password> in password input field
    And I click on Login button
    Then I should be presented with message: <result> after login with <case>
    Examples:
      | case               | username        | password       | result                                                                      |
      | 'invalid data'     | 'standard'      | 'secret'       | 'Epic sadface: Username and password do not match any user in this service' |
      | 'invalid username' | 'standard'      | 'secret_sauce' | 'Epic sadface: Username and password do not match any user in this service' |
      | 'invalid password' | 'standard_user' | 'secret'       | 'Epic sadface: Username and password do not match any user in this service' |

  Scenario Outline: Check that user can't login with <case>
    Given I go to 'Login page'
    And I type <username> in username input field
    And I type <password> in password input field
    And I click on Login button
    Then I should be presented with message: <result> after login with <case>
    Examples:
      | case                          | username        | password       | result                               |
      | 'empty username'              | '{backspace}'   | 'secret_sauce' | 'Epic sadface: Username is required' |
      | 'empty password'              | 'standard_user' | '{backspace}'  | 'Epic sadface: Password is required' |
      | 'empty username and password' | '{backspace}'   | '{backspace}'  | 'Epic sadface: Username is required' |

  Scenario: Check that user can logout from app
    When I Login with valid data
    And I click on menu button
    And I click on Logout button
    Then I should be presented with Login page
