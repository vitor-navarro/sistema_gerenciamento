/// <reference types="Cypress" />

describe('Registration and Login', () => {
    it('should register user correctly', () => {
        cy.visit('/');
        cy.get('#user-input').type("testuser")
        cy.get('#emailInput').type("testuser@example.com")
        cy.get('#password').type("password123")
        cy.get('#confirm-password').type("password123")
        cy.get('#data-politic').click()
        cy.get('.styles_button__WEiBU').click()

        //login
        cy.url().should('include', '/login')


    });

});