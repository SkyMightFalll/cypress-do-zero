// Arquivo: cypress/e2e/produtos.cy.js
import LoginPage from '../support/pages/login.page'
import CadastroPage from '../support/pages/cadastro.page'

describe('Funcionalidade: Gestão de Produtos', () => {

  beforeEach(() => {
    // 1. Garante que o usuário existe no servidor (via API)
    cy.api_criarUsuario('luishenrique@gmail.com', '12345678')

    // 2. Agora pode logar tranquilo
    LoginPage.realizarLogin('luishenrique@gmail.com', '12345678')
    cy.url().should('include', '/home')
  })

  it('Deve cadastrar um produto com sucesso', () => {
    const nomeProduto = `Mouse Gamer PO ${Date.now()}`
    CadastroPage.cadastrarProduto(nomeProduto, '179', 'Mouse leve', '10')
    cy.contains(nomeProduto).should('be.visible')
  })

  it('Não deve cadastrar produto com preço vazio', () => {
    CadastroPage.cadastrarProduto('Mouse Teste', '', 'Teste desc', '10')
    cy.contains('Preco é obrigatório').should('be.visible')
  })

  it('Não deve cadastrar produto com nome vazio', () => {
    CadastroPage.cadastrarProduto('', '179', 'Mouse leve', '10')
    cy.contains('Nome é obrigatório').should('be.visible')
  })

  it('Não deve cadastrar produto com descricao vazio', () => {
    CadastroPage.cadastrarProduto('Mouse Top', '179', '', '10')
    cy.contains('Descricao é obrigatório').should('be.visible')
  })

  it('Não deve cadastrar produto com quantidade vazio', () => {
    CadastroPage.cadastrarProduto('Mouse Top', '179', 'Mouse leve', '')
    cy.contains('Quantidade é obrigatório').should('be.visible')
  })
})