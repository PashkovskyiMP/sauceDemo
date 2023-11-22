import {Then, When} from '@badeball/cypress-cucumber-preprocessor';
import dashboard from '../page-object/dashboard-po';


When('I add to cart {string} item', (text: string) => {
    dashboard.getAddToCart(text).click();
});

When('I remove {string} item', (text: string) => {
    dashboard.getRemoveFromCart(text).click();
});

When('I click on shopping bucket', () => {
    dashboard.getShoppingBucket().click();
});

When('I click on Checkout button', () => {
    dashboard.getCheckoutButton().click();
});

When('I click on Continue button', () => {
    dashboard.getContinueButton().click();
});

When('I click on Back Home button', () => {
    dashboard.getBackHomeButton().click();
});

When('I click on Finish button', () => {
    dashboard.getFinishButton().click();
});

When('I type {string} in first name input field', (text: string) => {
    dashboard.getFirstNameInputField().type(text);
});

When('I type {string} in last name input field', (text: string) => {
    dashboard.getLastNameInputField().type(text);
});

When('I type {string} in postal code input field', (text: string) => {
    dashboard.getPostalCodeInputField().type(text);
});

When('I check that Total price includes Tax and Item total', () => {
    cy.get(dashboard.summarySubtotalLabel).invoke('text').then(itemTotalText => {
        const itemTotal = parseFloat(itemTotalText.replace('Item total: $', ''));
        cy.get(dashboard.summaryTaxLabel).invoke('text').then(taxText => {
            const tax = parseFloat(taxText.replace('Tax: $', ''));
            const expectedTotal = itemTotal + tax;
            cy.get(dashboard.summaryTotalLabel).should('have.text', `Total: $${expectedTotal.toFixed(2)}`);
        });
    });
});

Then('I should be presented with {string}', (text: string) => {
    dashboard.getCheckoutCompleteContainer().should('contain.text', text);
});

When('I click on Cancel button', () => {
    dashboard.getCancelButton().click();
});
