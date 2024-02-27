const LoginDoisElement = require('../ElementsMap/LoginDoisElementsMap.json')

export class LoginDoisAction { 

    //outra forma de declarar os elementos » name = "#nome"

    ExistCampoNome(){
        cy.get(LoginDoisElement.LoginPageLocators.name)
        .should('be.visible')

    }
    PreencheNome(PreencheNome){
        cy.get(LoginDoisElement.LoginPageLocators.name)
        .type(PreencheNome)

    }
    PreencheFone(PreencheFone){
        cy.get(LoginDoisElement.LoginPageLocators.telefone)
        .type(PreencheFone)

    }
    ClickBtnCadastrar(){
        cy.get(LoginDoisElement.LoginPageLocators.BtnCadastrar)
        .click()
    }

    ValidaCadastroAtualizado(){
        cy.get(loginElement.LoginPageLocators.valueName)
        .should('be.visible')
        .contains('Nune')

        cy.get(loginElement.LoginPageLocators.valueFone)
        .should('be.visible')
        .contains('41991526177')
        return
    }
}