import 'login';

declare global {
    namespace Cypress {
        interface Chainable {

            login(username: any, password: any): Cypress.Chainable<void>;

        }
    }
}
