class DashboardPo {
    checkoutButton = '[data-test=checkout]';
    firstNameInputField = '[data-test=firstName]';
    lastNameInputField = '[data-test=lastName]';
    postalCodeInputField = '[data-test=postalCode]';
    continueButton = '[data-test=continue]';
    finishButton = '[data-test=finish]';
    cancelButton = '[data-test=cancel]';
    backHomeButton = '[data-test=back-to-products]';
    summarySubtotalLabel = '.summary_subtotal_label';
    summaryTaxLabel = '.summary_tax_label';
    summaryTotalLabel = '.summary_total_label';
    shoppingCartContainer = '#shopping_cart_container';
    checkoutCompleteContainer = '#checkout_complete_container';


    getAddToCart(text: string) {
        return cy.get(`[data-test=add-to-cart-${text}]`);
    }

    getRemoveFromCart(text: string) {
        return cy.get(`[data-test=remove-${text}]`);
    }

    getCheckoutCompleteContainer() {
        return cy.get(this.checkoutCompleteContainer);
    }

    getFirstNameInputField() {
        return cy.get(this.firstNameInputField);
    }

    getLastNameInputField() {
        return cy.get(this.lastNameInputField);
    }

    getPostalCodeInputField() {
        return cy.get(this.postalCodeInputField);
    }

    getShoppingBucket() {
        return cy.get(this.shoppingCartContainer);
    }

    getCheckoutButton() {
        return cy.get(this.checkoutButton);
    }

    getBackHomeButton() {
        return cy.get(this.backHomeButton);
    }

    getCancelButton() {
        return cy.get(this.cancelButton);
    }

    getFinishButton() {
        return cy.get(this.finishButton);
    }

    getContinueButton() {
        return cy.get(this.continueButton);
    }

}

export default new DashboardPo();
