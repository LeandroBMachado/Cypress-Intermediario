/// <reference types="Cypress" />


const faker = require('faker')   //USO DA BLIBIOTECA FAKER


describe('Create Project',() => {

    it('successfully',() => {
        const project = {
            name: `project-${faker.random.uuid()}`,
            description: faker.random.words(5)
            
        }

        cy.api_createProject(project)
          .then(response => {  //enquanto  
              expect(response.status).to.equal(201)
              expect(response.body.name).to.equal(project.name)
              expect(response.body.description).to.equal(project.description)
          })
       
    })

})