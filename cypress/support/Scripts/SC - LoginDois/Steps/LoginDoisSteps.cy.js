/// <reference types="Cypress" />

import { LoginDoisAction } from "../../../../support/Scripts/SC - LoginDois/Actions/LoginDoisAction"

const LoginDoisAct = new LoginDoisAction

describe('Cadastra segundo usuário', () => {
    it('Cadastra Usuário', () => {
      cy.visit('https://agenda-lista-de-contatos.vercel.app/')

      LoginDoisAct.ExistCampoNome()
      LoginDoisAct.PreencheNome('Orivan')
      LoginDoisAct.PreencheFone('41991526177')
      LoginDoisAct.ClickBtnCadastrar()
      
    })
  })