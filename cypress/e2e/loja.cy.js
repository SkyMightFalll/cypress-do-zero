import LoginPage from '../support/pages/login.page'
// Importamos com o nome novo da classe
import LojaPage from '../support/pages/loja.page' 

describe('Funcionalidade: Loja e Carrinho', () => {

  beforeEach(() => {
    // Passamos 'false' para criar um usuário que vê a LOJA e não o Dashboard
    cy.api_criarUsuario('cliente@gmail.com', '12345678', false) 
    
    LoginPage.realizarLogin('cliente@gmail.com', '12345678')
    cy.url().should('include', '/home')
  })

    it('Deve adicionar um produto ao carrinho com sucesso', () => {
        const produto = 'Logitech MX Vertical'

        // AQUI ESTAVA O ERRO: Passamos o nome do produto para a função
        // ...
        LojaPage.pesquisarEAdicionar(produto)

        // Validação Inteligente:
        // Verificamos se o produto que pesquisamos ('Logitech MX Vertical') está visível na tela.
        cy.contains(produto).should('be.visible')
    })
})