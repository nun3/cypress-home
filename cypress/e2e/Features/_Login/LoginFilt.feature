# language: pt

@login
Funcionalidade: Tela de Login Filt

  Cenário: Login Filt
    Dado que acessei a página de login Filt
    E digito o CPF '06445988911'
    E digito a senha 'homepage'
    Quando eu clico no botão de submit
    Então eu devo ver a página principal

