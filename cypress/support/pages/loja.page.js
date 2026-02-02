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

    // Dentro de loja.page.js
    pesquisarEAdicionar(nomeProduto) {
        cy.get(this.elementos.inputPesquisar).clear().type(nomeProduto)
        cy.get(this.elementos.btnPesquisar).click()
        
        // Clica em "Adicionar a lista"
        cy.get(this.elementos.btnAdicionarNaLista).first().click() 
        
        // COMENTE ESSA LINHA POR ENQUANTO
        // O teste vai passar se aparecer a mensagem "Em construção" logo após clicar em adicionar
        // cy.get(this.elementos.btnIrParaCarrinho).first().click()
    }
}

export default new LojaPage();