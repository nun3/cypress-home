/// <reference types="Cypress" />

import { Given, When, Then, DataTable } from 'cypress-cucumber-preprocessor/steps';


// When('abro a tela do formulário de Tipo de Pessoa', () => {
//     cy.visit('/url', { timeout: 10000 }); // Timeout para a requisição GET
//   });

When('abro a tela do formulário de Tipo de Pessoa', () => {
    cy.request('GET', '/api/master/menu/primeiro-nivel-by-url?url=/fiscal/tipo-pessoa').then(() => {
cy.wait(5000);                          
        cy.url().should('eq', 'https://erp-homologacao.viasoft.com.br/pt/fiscal/tipo-pessoa');

    });  
});
  

When(`clico no botão {string}`, (btn) => {
        cy.get('button[type="button"]').contains(btn).click();
});
  