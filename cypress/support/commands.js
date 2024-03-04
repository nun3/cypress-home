// ***********************************************
// This example commands.js shows you how to
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

import '@testing-library/cypress/add-commands'

Cypress.Commands.add('clickMenu', (menu) => {
  cy.get('.itens-menu-principal').contains(menu).trigger('mouseover');
  cy.wait(500); 
  cy.get('.background-sidenav > .menus-sidenav > ul').contains(menu)
  .trigger('mouseover')
  .click();
  cy.wait(1000);   
});

Cypress.Commands.add('clickSubMenu', (submenu) => {
  cy.get('li').contains(submenu)
  .click();
  cy.wait(500); 
});















Cypress.Commands.add('loginViaApi', (userType, options = {}) => {
    // this is an example of skipping your UI and logging in programmatically
  
    // setup some basic types
    // and user properties
    const types = {
      admin: {
        name: 'Jane Lane',
        admin: true,
      },
      user: {
        name: 'Jim Bob',
        admin: false,
      },
    }
  
    // grab the user
    const user = types[userType]
  
    // create the user first in the DB
    cy.request({
      url: '/seed/users', // assuming you've exposed a seeds route
      method: 'POST',
      body: user,
    })
      .its('body')
      .then((body) => {
        // assuming the server sends back the user details
        // including a randomly generated password
        //
        // we can now login as this newly created user
        cy.request({
          url: '/login',
          method: 'POST',
          body: {
            email: body.email,
            password: body.password,
          },
        })
      })
  })
   