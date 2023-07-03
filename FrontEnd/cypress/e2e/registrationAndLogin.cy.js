/// <reference types="Cypress" />
let testuser = "testuser"
let testemail = "testuser@example.com"
let password = "password123"
describe('Registration', () => {
    it('should register correctly', () => {


        cy.register(testuser, testemail, password)

        cy.url().should('include', '/login')
    });

    it('should not register with an existing username, email and password', () => {

        cy.register(testuser, testemail, password)
        cy.get('.styles_div__h_GQP > div > .styles_span___Rn7N').should("be.visible");
        cy.get('.styles_div__xVgy_ > div > .styles_span___Rn7N').should("be.visible");

        cy.get('#confirm-password').type("asd")

        cy.get(':nth-child(3) > :nth-child(1) > .styles_span___Rn7N').should("be.visible");
    });

    it("must not register with name of 3 characters, invalid email and password with less than 7 characters", () => {
        const testuser = "te"
        const testemail = "testu"
        const password = "passw"

        cy.register(testuser, testemail, password)

        cy.get('.styles_spanDiv__zW0Q_ > span').should("be.visible");
        cy.get('.styles_div__xVgy_ > div > .styles_span___Rn7N').should("be.visible");
        cy.get('.styles_div__xVgy_ > div > .styles_span___Rn7N').should("be.visible");
    })



});

describe('Login', () => {
    it('should login correctly', () => {

        cy.login(testuser, password)
    })
})