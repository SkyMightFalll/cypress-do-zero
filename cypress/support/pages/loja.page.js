class LojaPage {
    
    // Nomes de atributos sugeridos para ficarem mais claros
    elementos = {
        inputPesquisar: '[data-testid="pesquisar"]', // "input" deixa claro que é campo de texto
        btnPesquisar: '[data-testid="botaoPesquisar"]',
        
        // No ServerRest, na Home, o botão geralmente é "Adicionar a lista"
        btnAdicionarNaLista: '[data-testid="adicionarNaLista"]', 
        
        // CUIDADO: O seletor abaixo estava igual ao de cima no seu código. 
        // Geralmente aumentar quantidade é algo como '+' ou 'product-increase-quantity'
        // btnAumentarQuantidade: '[data-testid="adicionarNaLista"]', // <--- ERRADO
        
        btnIrParaCarrinho: '[data-testid="adicionar carrinho"]' // Se esse botão leva ao carrinho
    }

    // NOME DO MÉTODO: Use verbos! "pesquisarEAdicionar" diz exatamente o que ele faz.
    pesquisarEAdicionar(nomeProduto) {
        
        // CORREÇÃO: Usamos 'nomeProduto' aqui, e não o texto fixo.
        // O .clear() é uma boa prática para garantir que o campo esteja vazio antes de digitar.
        cy.get(this.elementos.inputPesquisar).clear().type(nomeProduto)
        
        cy.get(this.elementos.btnPesquisar).click()
        
        // Adiciona o produto encontrado
        cy.get(this.elementos.btnAdicionarNaLista).first().click() 
        // O .first() é segurança caso a pesquisa traga mais de um item
        cy.get(this.elementos.btnIrParaCarrinho).first().click()
    }
}

export default new LojaPage();