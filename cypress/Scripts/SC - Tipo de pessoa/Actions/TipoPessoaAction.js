export class TipoPessoaAction {
  
    ClickBtn(btncontext){
        cy.get('button[type="button"]').contains(btncontext).click();
  }

}