export class LoginElementsMap { 

    visible = '#nome'

    ExistCampoNome(){
        cy.get(this.visible)
            .should('be.visible')
    }
    PreencheNome(){
        cy.get(this.visible)
        .type('teste')
    }
}