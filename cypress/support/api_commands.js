/// <reference types="Cypress" />

const acessToken = Cypress.env('gitlab_access_token')

Cypress.Commands.add('api_createProject', project => {

    cy.request({ //requisicoes HTTP
       method: 'POST',
       url: `api/v4/projects/?private_token=${acessToken}`,
       body: { //corpo do POST 
           name: project.name,
           description: project.description,
           initialize_with_readme: true
       }
    })
})

Cypress.Commands.add('api_createIssue', issue => {

    cy.api_createProject(issue.project) //chamando projeto para abrir nova issue 
      .then(response => {
          cy.request({
              method: 'POST',
              url: `api/v4/projects/${response.body.id}/issues?private_token=${acessToken}`, //identificando o projeto pelo ID e criando a issue
              body: {
                  title: issue.title,
                  description: issue.description
              }

          })
      })
        
})

Cypress.Commands.add('api_createLabel', (projectId, label) => {
    cy.request({
      method: 'POST',
      url: `/api/v4/projects/${projectId}/labels?private_token=${acessToken}`,
      body: {
        name: label.name,
        color: label.color
      }
    })
  })

  Cypress.Commands.add('api_createMilestone', (projectId, milestone) => {
    cy.request({
      method: 'POST',
      url: `/api/v4/projects/${projectId}/milestones?private_token=${acessToken}`,
      body: { title: milestone.title }
    })
  })
  