class LoginPo {
    usernameInputField = '[data-test=username]';
    passwordInputField = '[data-test=password]';
    loginButton = '[data-test=login-button]';
    errorMessage = '[data-test=error]';
    menuButton = '#react-burger-menu-btn';
    logoutButton = '#logout_sidebar_link';
    loginButtonContainer = '#login_button_container';


    getUsernameInputField() {
        return cy.get(this.usernameInputField);
    }

    getPasswordInputField() {
        return cy.get(this.passwordInputField);
    }

    getLoginButton() {
        return cy.get(this.loginButton);
    }

    getMenuButton() {
        return cy.get(this.menuButton);
    }

    getLogoutButton() {
        return cy.get(this.logoutButton);
    }

    getLoginButtonContainer() {
        return cy.get(this.loginButtonContainer);
    }

    getErrorMessage(text: string) {
        return cy.get(this.errorMessage).contains(text);
    }

}

export default new LoginPo();
