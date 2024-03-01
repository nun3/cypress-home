import { Given, When, Then} from 'cypress-cucumber-preprocessor/steps';
import { Menu } from './LetMenuAction';

const Actmenu = new Menu

When(`que cliquei no item de menu {string}`, (menu) => {
    // Actmenu.SetMenu(menu)
    // cy.get('.itens-menu-principal').should('be.visible')
    cy.get('.itens-menu-principal').contains('Cadastro').trigger('mouseover');
cy.wait(1000); 
    cy.get('.background-sidenav > .menus-sidenav > :nth-child(4) > a.ng-tns-c103-1').click()
cy.wait(1000); 
    cy.get('.background-sidenav > .menus-sidenav').find(':nth-child(4)').findByText('Pessoas').trigger('mouseover').click()
cy.wait(1000); 
    cy.get('.menus-sidenav').find('a').contains('Tipo de Pessoa').trigger('mouseover').click();
cy.wait(10000);
    cy.get('[style="float: left; margin-right: 20px;"] > .btn').click()
cy.wait(1000);
    cy.get('#descricao').type("Pessoa Fisica")

    cy.get('app-salvar > .btn').click()

    cy.get('.p-toast-message-content').contains('Salvo com sucesso',{timeout:2000})
    

    


  
});