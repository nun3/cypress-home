# language: pt

Funcionalidade: Cadastro de Tipo de Pessoas

Contexto: Login Filt
    Dado que acessei a tela de login no Filt
    E que cliquei no menu "Cadastros"
    E que cliquei no sub-menu "Pessoas"
    E que cliquei no sub-menu "Tipo de Pessoa"

Cenário: Cadastro de Tipo de Pessoa Simples
    Dado que acessei o formulário de Tipo de Pessoa
    E clico no botão 'Novo'
    E preencho o campo Descrição com o valor 'Tipo Pessoa teste'
    E clico no botão 'Salvar'
    E aguardo o status 'Salvo com sucesso'
    Então o Cadastro de Tipo de Pessoa Simples deve ser salva com os seguintes dados:
     | Descricao         |
     | Tipo Pessoa teste |
  

  


