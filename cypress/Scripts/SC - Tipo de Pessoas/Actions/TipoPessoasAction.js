const TipoPessoaElement = require('../ElementsMap/TipoPessoasElementsMap.json')
const id = require('../../Commons/Temp.json'); // Use a variável CONTEXTO_ID correta

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
    cy.clickMenu('Home')
    
  }
  ValidaGrid() {
    cy.wait(1500);
    cy.get('app-voltar').find('button.btn.btn-voltar').click();
    cy.get('button[data-title="Filtrar"]').click();
    cy.wait(1500);
    if (id && id.variavelTemporaria && id.variavelTemporaria.length > 0) {
      const CONTEXTO_ID = id.variavelTemporaria.toString();
      cy.get('input[name="filtro-id"]').type(CONTEXTO_ID);
    } else {
      // Lida com o caso em que os dados do arquivo JSON não estão disponíveis ou são inválidos
      console.log("Os dados do contexto não foram encontrados ou são inválidos");
    }

  }
}