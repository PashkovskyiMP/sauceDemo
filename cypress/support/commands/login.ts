import login from '../page-object/login-po';


Cypress.Commands.add('login', (username: any, password: any) => {
        cy.visit(Cypress.env('testUrl'));
        login.getUsernameInputField().type(username)
        login.getPasswordInputField().type(password)
        login.getLoginButton().click()
        cy.url().should('include', '/inventory');
    }
);
