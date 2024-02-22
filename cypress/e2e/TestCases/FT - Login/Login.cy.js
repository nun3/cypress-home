/// <reference types="Cypress" />

import { LoginElementsMap } from "../../../../PageObjects/SC - Login/ElementsMap/LoginElementsMap"

const LoginMap = new LoginElementsMap

describe('template spec', () => {
    it('passes', () => {
      cy.visit('https://agenda-lista-de-contatos.vercel.app/')
      LoginMap.ExistCampoNome()
      LoginMap.PreencheNome()
    })
  })