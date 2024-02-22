/// <reference types="Cypress" />

import { LoginAction } from "../../../../PageObjects/SC - Login/Actions/LoginAction"

const LoginAct = new LoginAction

describe('template spec', () => {
    it('passes', () => {
      cy.visit('https://agenda-lista-de-contatos.vercel.app/')

      LoginAct.ExistCampoNome()
      LoginAct.PreencheNome('Nune')
      LoginAct.PreencheFone('41991526177')
      LoginAct.ClickBtnCadastrar()
      
    })
  })