import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { TipoPessoaAction } from '../Actions/TipoPessoasAction';

const TipoPessoaAct = new TipoPessoaAction

Given(`que acessei o formulário de Tipo de Pessoa`, () => {
    cy.get('#main').click()
    cy.request('GET', '/api/master/menu/primeiro-nivel-by-url?url=/fiscal/tipo-pessoa').then(() => {
        cy.wait(5000);                          
        cy.url().should('eq', 'https://erp-homologacao.viasoft.com.br/pt/fiscal/tipo-pessoa');
    });  
});

When(`clico no botão {string}`, (btn) => {
    TipoPessoaAct.ClickBtn(btn)
});

When(`preencho o campo Descrição com o valor {string}`, (value) => {
    TipoPessoaAct.InputText(value)
});

When(`aguardo o status {string}`, (status) => {
    TipoPessoaAct.ValidaStatus(status)
});

Then(`o Cadastro de Tipo de Pessoa Simples deve ser salva com os seguintes dados:`, (table) => {
    TipoPessoaAct.ValidaCadastroAtualizado(table)
});