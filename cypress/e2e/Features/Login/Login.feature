# language: pt

Funcionalidade: Tela de Cadastro dois

  Cenário: Cadastrar 1 usuário
    Dado que acessei a url padrão
    E preenchi o Nome 'Orivan'
    E preenchi o Telefone '41991526177'
    Quando clico no botão Cadastrar
    Então atualizo os dados cadastrais com o nome 'Orivan' e telefone '41991526177'

  Cenário: Cadastrar 2 usuários
    Dado que acessei a url padrão
    E preenchi o Nome 'Orivan'
    E preenchi o Telefone '41991526177'
    Quando clico no botão Cadastrar
    E preenchi o Nome 'Orivan'
    E preenchi o Telefone '41991526177'
    Quando clico no botão Cadastrar
    Então atualizo os dados cadastrais com o nome 'Orivan' e telefone '41991526177'

  Cenário: Cadastrar 3 usuarios
    Dado que acessei a url padrão
    E preenchi o Nome 'Orivan'
    E preenchi o Telefone '41991526177'
    Quando clico no botão Cadastrar
    E preenchi o Nome 'Orivan'
    E preenchi o Telefone '41991526177'
    Quando clico no botão Cadastrar
    E preenchi o Nome 'Orivan'
    E preenchi o Telefone '41991526177'
    Quando clico no botão Cadastrar
    Então atualizo os dados cadastrais com o nome 'Orivan' e telefone '41991526177'

