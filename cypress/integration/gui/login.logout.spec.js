
/// <reference types="Cypress" />

describe ('Login',()=> {
    it('successfully',() => {
        cy.login()
        cy.get('.qa-user-avatar').should('exist')
        
        cy.logout()


        cy.url().should('be.equal',`${Cypress.config('baseUrl')}users/sign_in`) //CONCATENACAO DE BASE URL COM SIGN IN 
    

    })

})
