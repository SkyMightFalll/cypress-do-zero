import LoginPage from '../support/pages/login.page'
import CadastroPage from '../support/pages/cadastro.page'

describe('Funcionalidade: Gestão de Produtos (Refatorado)', () => {

  beforeEach(() => {
    // Uma linha resolve todo o login!
    LoginPage.realizarLogin('luishenrique@gmail.com', '12345678')
    cy.url().should('include', '/home')
  })

  it('Deve cadastrar um produto com sucesso', () => {
    const nomeProduto = `Mouse Gamer PO ${Date.now()}`
    
    // Passamos todos os dados
    CadastroPage.cadastrarProduto(nomeProduto, '179', 'Mouse leve', '10')

    cy.contains(nomeProduto).should('be.visible')
  })

  it('Não deve cadastrar produto com preço vazio', () => {
    // Passamos o preço como '' (vazio)
    CadastroPage.cadastrarProduto('Mouse Teste', '', 'Teste desc', '10')
    
    // Validação de erro
    cy.contains('Preco é obrigatório').should('be.visible')
  })

  it('Não deve cadastrar produto com nome vazio', () => {
    // Passamos o nome como ''
    CadastroPage.cadastrarProduto('', '179', 'Mouse leve', '10')
    
    cy.contains('Nome é obrigatório').should('be.visible')
  })

  it('Não deve cadastrar produto com descricao vazio', () => {
    // Passamos a descrição como ''
    CadastroPage.cadastrarProduto('Mouse Top', '179', '', '10')
    
    cy.contains('Descricao é obrigatório').should('be.visible')
  })

  it('Não deve cadastrar produto com quantidade vazio', () => {
    // Passamos a quantidade como ''
    CadastroPage.cadastrarProduto('Mouse Top', '179', 'Mouse leve', '')
    
    cy.contains('Quantidade é obrigatório').should('be.visible')
  })
})