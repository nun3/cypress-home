/// <reference types="Cypress" />

import { LoginAction } from "../Actions/LoginAction"
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';


const LoginAct = new LoginAction
const url = Cypress.config("baseUrl")

Given(`que acessei a url padrão`, () => {
    cy.visit(url)
});

Given(`preenchi todos os campos do formulário`, (table) => {

    LoginAct.PreencheDadosCompletos(table)

});

Given(`preenchi o Nome {string}`, (valueName) => {
    LoginAct.ExistCampoNome()
    LoginAct.PreencheNome(valueName)
});

Given(`preenchi o Telefone {string}`, (valuefone) => {
    LoginAct.PreencheFone(valuefone)
});

When(`clico no botão Cadastrar`, () => {
    LoginAct.ClickBtnCadastrar()
});

Then(`atualizo os dados cadastrais com o nome {string} e telefone {string}`, (valueName, valueFone) => {
    LoginAct.ValidaCadastroAtualizado(valueName, valueFone)
});
