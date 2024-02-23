/// <reference types="Cypress" />

import { LoginAction } from "../../../../PageObjects/SC - Login/Actions/LoginAction"
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

const LoginAct = new LoginAction

Given(`que acessei a url padrão`, () => {
    cy.visit('https://agenda-lista-de-contatos.vercel.app/')
});

Given(`preenchi o Nome`, () => {
    LoginAct.ExistCampoNome()
    LoginAct.PreencheNome('Nune')
});

Given(`preenchi o Telefone`, () => {
    LoginAct.PreencheFone('41991526177')
});

When(`clico no botão Cadastrar`, () => {
    LoginAct.ClickBtnCadastrar()
});

Then(`atualizo os dados cadastrais`, () => {
    LoginAct.ValidaCadastroAtualizado()
});