const loginElement = require('../ElementsMap/LoginElementsMap.json')
export class LoginAction { 

    //outra forma de declarar os elementos » name = "#nome"

    ExistCampoNome(){
        cy.get(loginElement.LoginPageLocators.name)
        .should('be.visible')
        return
    }
    PreencheNome(PreencheNome){
        cy.get(loginElement.LoginPageLocators.name)
        .type(PreencheNome)
        return
    }
    PreencheFone(PreencheFone){
        cy.get(loginElement.LoginPageLocators.telefone)
        .type(PreencheFone)
        return
    }
    ClickBtnCadastrar(){
        cy.get(loginElement.LoginPageLocators.BtnCadastrar)
        .click()
        return
    }
    ValidaCadastroAtualizado(){
        cy.get(loginElement.LoginPageLocators.valueName)
        .should('be.visible')
        .contains('Nune')
        return
    }
}