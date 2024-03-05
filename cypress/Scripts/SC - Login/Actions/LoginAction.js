const loginElement = require('../ElementsMap/LoginElementsMap.json')
export class LoginAction { 

    ExistCampoNome(){
        cy.get(loginElement.LoginPageLocators.name)
        .should('be.visible')
    }
    PreencheNome(namecontext){
        cy.get(loginElement.LoginPageLocators.name)
        .type(namecontext)
    }
    PreencheFone(fonecontext){
        cy.get(loginElement.LoginPageLocators.telefone)
        .type(fonecontext)
    }
    ClickBtnCadastrar(){
        cy.get(loginElement.LoginPageLocators.BtnCadastrar)
        .click()
    }
    ValidaCadastroAtualizado(contextname, contextfone){
        cy.get(loginElement.LoginPageLocators.valueName)
        .should('be.visible')
        .contains(contextname)

        cy.get(loginElement.LoginPageLocators.valueFone)
        .should('be.visible')
        .contains(contextfone)
    }
    PreencheDadosCompletos(table){
        table.hashes().forEach(row => {
        
            cy.get(loginElement.LoginPageLocators.name)
            .type(row.nome)

            cy.get(loginElement.LoginPageLocators.telefone)
            .type(row.fone)

            cy.get(loginElement.LoginPageLocators.BtnCadastrar)
            .click()
    
        });

    }
}