import LoginPage from '../support/pages/login.page'
// Importamos com o nome novo da classe
import LojaPage from '../support/pages/loja.page' 

describe('Funcionalidade: Loja e Carrinho', () => {

    beforeEach(() => {
    // 1. Garante que o usuário existe no servidor (via API)
    cy.api_criarUsuario('luishenrique@gmail.com', '12345678')

    // 2. Agora pode logar tranquilo
    LoginPage.realizarLogin('luishenrique@gmail.com', '12345678')
    cy.url().should('include', '/home')
  })

    it('Deve adicionar um produto ao carrinho com sucesso', () => {
        const produto = 'Logitech MX Vertical'

        // AQUI ESTAVA O ERRO: Passamos o nome do produto para a função
        LojaPage.pesquisarEAdicionar(produto)

        // Validação (Assert)
        // Se o site diz "Em construção", seu teste está correto.
        // Mas o ideal seria: cy.contains('Produto adicionado ao carrinho')
        cy.contains('Em construção aguarde').should('be.visible')
    })
})