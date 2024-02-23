/// <reference types="Cypress" />

import { LoginDoisAction } from "../../../../PageObjects/SC - LoginDois/Actions/LoginDoisAction"

const LoginDoisAct = new LoginDoisAction

describe('template spec', () => {
    it('passes', () => {
      cy.visit('https://agenda-lista-de-contatos.vercel.app/')

      LoginDoisAct.ExistCampoNome()
      LoginDoisAct.PreencheNome('Orivan')
      LoginDoisAct.PreencheFone('41991526177')
      LoginDoisAct.ClickBtnCadastrar()
      
    })
  })