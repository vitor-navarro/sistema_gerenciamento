/// <reference types="Cypress" />

describe('Registration', () => {
    it('should regiter user correctly', () => {
        cy.visit('registerUser');
        cy.get('#user-input').type("testuser")
        cy.get('#emailInput').type("testuser@example.com")
        cy.get('#password').type("password123")
        cy.get('#confirm-password').type("password123")
        cy.get('#data-politic').click()
        cy.get('.styles_button__WEiBU').click()

        cy.url().should('include', '/login')
    });
});