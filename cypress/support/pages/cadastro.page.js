class CadastroPage {
    // ATRIBUTOS (Onde guardamos os seletores)
    // Se o ID mudar amanhã, a gente só arruma AQUI, e todos os testes se consertam sozinhos!
    elementos = {
        btnCadastrar: '[data-testid="cadastrar-produtos"]',
        campoNome: '[data-testid="nome"]',
        campoPreco: '[data-testid="preco"]',
        campoDescricao: '[data-testid="descricao"]',
        campoQuantidade: '[data-testid="quantity"]',
        btnSalvar: '[data-testid="cadastarProdutos"]',
    }

    // AÇÕES (O que a página faz) campoSenhaUsu: '[data-testid="password"]'
    
    // Função mágica que faz o cadastro completo
    cadastrarProduto(nome, preco, descricao, quantidade) {
        // Clica para iniciar cadastro (se necessário navegar)
        cy.get(this.elementos.btnCadastrar).click()
        
        // Só preenche se o valor não for vazio
        if(nome) cy.get(this.elementos.campoNome).type(nome)
        if(preco) cy.get(this.elementos.campoPreco).type(preco)
        if(descricao) cy.get(this.elementos.campoDescricao).type(descricao)
        if(quantidade) cy.get(this.elementos.campoQuantidade).type(quantidade)
        
        // Clica em salvar
        cy.get(this.elementos.btnSalvar).click()
    }
}  

// Exportamos já "instanciado" (new) para usar direto
export default new CadastroPage();