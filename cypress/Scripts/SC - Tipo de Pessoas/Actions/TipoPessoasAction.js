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
 
  ValidaCadastroAtualizado(table) {
    let Id = 'Id', Descricao = 'Descricao';
    cy.ValidaId(table,TipoPessoaElement.TipoPessoaLocators.IdPessoa,Id)
    cy.ValidaFields(table,TipoPessoaElement.TipoPessoaLocators.Descricaofield,Descricao)
  }

}