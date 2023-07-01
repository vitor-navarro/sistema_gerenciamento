/// <reference types="Cypress" />

describe('Registration', () => {
    it('should register correctly', () => {
        const testuser = "testuser"
        const testemail = "testuser@example.com"
        const password = "password123"

        cy.register(testuser, testemail, password)
    });

    it('should not register with an existing username', () => {
        const testuser = "testuser"
        const testemail = "testuser2@example.com"
        const password = "password123"

        cy.register(testuser, testemail, password)
        cy.get('.styles_div__h_GQP > div > .styles_span___Rn7N').should("be.visible");
    });


});
/*
describe('Login', () => {
    it('should login correctly', () => {
        const testuser = "testuser"
        const testemail = "testuser@example.com"
        const password = "password123"

        cy.url().should('include', '/login')
        cy.login(testuser, password)
    })
})*/