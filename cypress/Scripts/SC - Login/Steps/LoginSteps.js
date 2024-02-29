/// <reference types="Cypress" />

import { LoginAction } from "../Actions/LoginAction"
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

const LoginAct = new LoginAction
const url = Cypress.config("baseUrl")

Given(`que acessei a página de login Filt`, () => {
    cy.visit(url)
});

Given(`digito o CPF {string}`, (valueCPF) => {
    LoginAct.PreencheCPF(valueCPF)
});

Given(`digito a senha {string}`, (valuepass) => {
    LoginAct.PreenchePass(valuepass)
});

When(`eu clico no botão de submit`, () => {
    LoginAct.Submit()
});

Then(`eu devo ver a página principal`, () => {
    LoginAct.ValidaPagelogin()
});