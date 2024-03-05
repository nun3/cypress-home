const TipoPessoaElement = require('../ElementsMap/TipoPessoasElementsMap.json')

export class TipoPessoaAction {
  
  ClickBtn(btncontext){
    cy.get(TipoPessoaElement.TipoPessoaLocators.BtnObj)
    .contains(btncontext)
    .click();
  }

  InputText(txtcontext){
    cy.get(TipoPessoaElement.TipoPessoaLocators.Descricaofield)
    .type(txtcontext);
  }

  ValidaStatus(status){
    cy.get(TipoPessoaElement.TipoPessoaLocators.status)
    .contains(status,{timeout:3000})
  }

  ValidaCadastroAtualizado(table){

    table.hashes().forEach(row => {
    cy.get(TipoPessoaElement.TipoPessoaLocators.Descricaofield)
    .should('be.visible')
    .contains(row.Descricao)
  });
  }

}