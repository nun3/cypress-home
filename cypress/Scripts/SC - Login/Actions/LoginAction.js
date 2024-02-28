const loginElement = require('../ElementsMap/LoginElementsMap.json')
export class LoginAction { 

    //outra forma de declarar os elementos » name = "#nome"

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
}