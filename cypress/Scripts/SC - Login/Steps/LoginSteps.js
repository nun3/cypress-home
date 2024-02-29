/// <reference types="Cypress" />

import { LoginAction } from "../Actions/LoginAction"
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

const LoginAct = new LoginAction
const url = Cypress.config("baseUrl")

Given(`que realizei o login no Filt`, () => {
    const valueCPF = '06445988911'
    const valuepass = 'homepage'

    cy.visit(url)
    LoginAct.PreencheCPF(valueCPF)
    LoginAct.PreenchePass(valuepass)
    LoginAct.Submit()
    LoginAct.ValidaPagelogin()
});