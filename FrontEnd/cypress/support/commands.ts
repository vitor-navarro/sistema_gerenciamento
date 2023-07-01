/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

declare namespace Cypress {
    interface Chainable<Subject> {
      register(testuser: string, testemail: string, password: string): Chainable<any>;
      login(testuser: string, password: string): Chainable<any>;
    }
  }

Cypress.Commands.add("register", (testuser: string, testemail: string, password: string) => {
    cy.visit('/');
    cy.get('#user-input').type(testuser);
    cy.get('#emailInput').type(testemail);
    cy.get('#password').type(password);
    cy.get('#confirm-password').type(password);
    cy.get('#data-politic').click();
    cy.get('.styles_button__WEiBU').click();
});

Cypress.Commands.add("login", (testuser: string, password: string) => {
    cy.visit('/login');
    cy.get('#login-input').type(testuser);
    cy.get('#password').type(password);
    cy.get('#remember-me').click();
    cy.get('.styles_button__WEiBU').click();
});