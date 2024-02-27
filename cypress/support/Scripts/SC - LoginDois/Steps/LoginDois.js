/// <reference types="Cypress" />

import { LoginDoisAction } from "../../../../support/Scripts/SC - LoginDois/Actions/LoginDoisAction"

const LoginDoisAct = new LoginDoisAction

Given(`que acessei a url padrão`, () => {
    cy.visit('https://agenda-lista-de-contatos.vercel.app/')
});

Given(`preenchi o Nome`, () => {
    LoginDoisAct.ExistCampoNome()
    LoginDoisAct.PreencheNome('Orivan')
});

Given(`preenchi o Telefone`, () => {
    LoginDoisAct.PreencheFone('41991526177')
});

When(`clico no botão Cadastrar`, () => {
    LoginDoisAct.ClickBtnCadastrar()
});

Then(`atualizo os dados cadastrais`, () => {
    LoginDoisAct.ValidaCadastroAtualizado()
});