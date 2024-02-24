const LoginDoisElement = require('../ElementsMap/LoginDoisElementsMap.json')

export class LoginDoisAction { 

    //outra forma de declarar os elementos » name = "#nome"

    ExistCampoNome(){
        cy.get(LoginDoisElement.LoginPageLocators.name)
        .should('be.visible')
        return
    }
    PreencheNome(PreencheNome){
        cy.get(LoginDoisElement.LoginPageLocators.name)
        .type(PreencheNome)
        return
    }
    PreencheFone(PreencheFone){
        cy.get(LoginDoisElement.LoginPageLocators.telefone)
        .type(PreencheFone)
        return
    }
    ClickBtnCadastrar(){
        cy.get(LoginDoisElement.LoginPageLocators.BtnCadastrar)
        .click()
        return
    }
}