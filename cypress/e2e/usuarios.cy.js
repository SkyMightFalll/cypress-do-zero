// Arquivo: cypress/e2e/usuarios.cy.js
import LoginPage from '../support/pages/login.page'
import UsuarioPage from '../support/pages/usuario.page'

describe('Funcionalidade: Cadastro de Usuários (Admin)', () => {

  beforeEach(() => {
    // 1. Garante que o usuário existe no servidor (via API)
    cy.api_criarUsuario('luishenrique@gmail.com', '12345678')

    // 2. Agora pode logar tranquilo
    LoginPage.realizarLogin('luishenrique@gmail.com', '12345678')
    cy.url().should('include', '/home')
  })

  it('Deve cadastrar um usuário com sucesso', () => {
    const emailUsu = `luis.${Date.now()}@qa.com.br` // Melhor usar . para separar
    UsuarioPage.cadastrarUsuario('Luis Henrique', emailUsu, '123456')
    cy.contains('Usuário cadastrado com sucesso').should('be.visible')
  })

  it('Não deve cadastrar usuario com nome vazio', () => {
    const emailUsu = `luis.${Date.now()}@qa.com.br`
    UsuarioPage.cadastrarUsuario('', emailUsu, '12345')
    cy.contains('Nome é obrigatório').should('be.visible')
  })

  it('Não deve cadastrar usuario com email vazio', () => {
    UsuarioPage.cadastrarUsuario('Luis Henrique', '', '12345')
    cy.contains('Email é obrigatório').should('be.visible')
  })

  it('Não deve cadastrar usuario com senha vazia', () => {
    const emailUsu = `luis.${Date.now()}@qa.com.br`
    UsuarioPage.cadastrarUsuario('Luis Henrique', emailUsu, '')
    cy.contains('Password é obrigatório').should('be.visible')
  })
})