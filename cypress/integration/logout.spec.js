/// <reference types="Cypress" />

describe('logout',()=>{
    beforeEach(() => cy.login())
    it('successfully',()=>{
        cy.logout()


    cy.url().should('be.equal',`${Cypress.config('baseUrl')}users/sign_in`) //CONCATENACAO DE BASE URL COM SIGN IN 

    })
})