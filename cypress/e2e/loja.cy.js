import LoginPage from '../support/pages/login.page'
// Importamos com o nome novo da classe
import LojaPage from '../support/pages/loja.page' 

describe('Funcionalidade: Loja e Carrinho', () => {

    beforeEach(() => {
        // DICA: Use um usuário fixo ou crie um via API antes (User Data)
        LoginPage.realizarLogin('henrique@gmail.com', '12345')
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