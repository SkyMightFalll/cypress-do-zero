// Arquivo: cypress/e2e/usuarios.cy.js
import LoginPage from '../support/pages/login.page'
import UsuarioPage from '../support/pages/usuario.page'

describe('Funcionalidade: Cadastro de Usuários (Admin)', () => {

  beforeEach(() => {
    // Aqui precisa ser Admin (true) para acessar o cadastro
    cy.api_criarUsuario('admin@gmail.com', '12345678', true)
    
    LoginPage.realizarLogin('admin@gmail.com', '12345678')
    cy.url().should('include', '/admin/home') // Admin cai nessa URL
  })

  it('Deve cadastrar um usuário com sucesso', () => {
    const emailUsu = `luis.${Date.now()}@qa.com.br`
    UsuarioPage.cadastrarUsuario('Luis Henrique', emailUsu, '123456')
    
    // MELHORIA: Em vez de buscar a mensagem, buscamos se o email apareceu na lista (tabela)
    // Isso é prova irrefutável de que cadastrou
    cy.contains('td', emailUsu).should('be.visible')
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