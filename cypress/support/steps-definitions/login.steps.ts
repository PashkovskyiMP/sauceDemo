import {Given, Then, When} from '@badeball/cypress-cucumber-preprocessor';
import login from '../page-object/login-po';
import {loginCreds} from "../../fixtures/test-data";


Given('I go to {string}', () => {
    cy.visit(Cypress.env('testUrl'));
});

Given('I Login with valid data', () => {
    cy.login(loginCreds.standard_user, loginCreds.password);
});

When('I click on menu button', () => {
    login.getMenuButton().click();
});

When('I click on Logout button', () => {
    login.getLogoutButton().click();
});

Then('I should be presented with Login page', () => {
    login.getLoginButtonContainer().should('be.visible');
});

When('I type {string} in username input field', (text: string) => {
    login.getUsernameInputField().type(text);
});

When('I type {string} in password input field', (text: string) => {
    login.getPasswordInputField().type(text);
});

When('I click on Login button', () => {
    login.getLoginButton().click();
});

Then('I should be presented with message: {string} after login with {string}', (text: string) => {
    login.getErrorMessage(text).should('contain.text', text).should('be.visible');
});
