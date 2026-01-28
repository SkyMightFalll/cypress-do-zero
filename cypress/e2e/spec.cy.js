describe('Funcionalidade: Gestão de Produtos', () => {

  // O beforeEach roda AUTOMATICAMENTE antes de cada 'it' lá embaixo
  // Isso garante que o usuário sempre comece logado.
  beforeEach(() => {
    cy.visit('https://front.serverest.dev/login')
    cy.get('[data-testid="email"]').type('luishenrique@gmail.com')
    cy.get('[data-testid="senha"]').type('12345678')
    cy.get('[data-testid="entrar"]').click()
    
    // Boa prática: Validar que o login funcionou antes de tentar outra coisa
    cy.url().should('include', '/home')
  })

it('Deve cadastrar um produto com sucesso', () => {
    // 1. Criamos um nome dinâmico (Ex: "Mouse Gamer 170923485")
    const nomeProduto = `Mouse Gamer ${Date.now()}` 
    
    cy.get('[data-testid="cadastrar-produtos"]').click() 

    // 2. Usamos a variável no lugar do texto fixo
    cy.get('[data-testid="nome"]').type(nomeProduto)
    
    cy.get('[data-testid="preco"]').type('179')
    cy.get('[data-testid="descricao"]').type('Mouse leve e moderno')
    cy.get('[data-testid="quantity"]').type('10')
    
    cy.get('[data-testid="cadastarProdutos"]').click()

    // 3. Validação mais forte:
    // Em vez de só ver se a lista apareceu, verificamos se O NOSSO produto está na lista
    cy.contains(nomeProduto).should('be.visible')
  })

  // Agora fica fácil criar outro teste sem repetir código de login!
  it('Não deve cadastrar produto com preço vazio', () => {
    cy.get('[data-testid="cadastrar-produtos"]').click()
    
    cy.get('[data-testid="nome"]').type('Mouse Teste Erro')
    // Não preencho o preço propositalmente
    cy.get('[data-testid="descricao"]').type('Teste negativo')
    cy.get('[data-testid="quantity"]').type('10')
    
    cy.get('[data-testid="cadastarProdutos"]').click()
    
    // Valido se o sistema reclamou (exemplo hipotético)
    cy.contains('Preco é obrigatório').should('be.visible')
  })

  it('Não deve cadastrar produto com nome vazio', () => {
    cy.get('[data-testid="cadastrar-produtos"]').click()
    
    // Preenchimento do formulário
    cy.get('[data-testid="preco"]').type('179')
    cy.get('[data-testid="descricao"]').type('Mouse leve (62g) e moderno')
    cy.get('[data-testid="quantity"]').type('10')
    
    cy.get('[data-testid="cadastarProdutos"]').click()
    
    // Valido se o sistema reclamou (exemplo hipotético)
    cy.contains('Nome é obrigatório').should('be.visible')
  })

  it('Não deve cadastrar produto com descricao vazio', () => {
    cy.get('[data-testid="cadastrar-produtos"]').click()
    
    // Preenchimento do formulário
    cy.get('[data-testid="nome"]').type('Mouse Gamer incrivel')
    cy.get('[data-testid="preco"]').type('179')
    cy.get('[data-testid="quantity"]').type('10')
    
    cy.get('[data-testid="cadastarProdutos"]').click()
    
    // Valido se o sistema reclamou (exemplo hipotético)
    cy.contains('Descricao é obrigatório').should('be.visible')
  })

  it('Não deve cadastrar produto com quantidade vazio', () => {
    cy.get('[data-testid="cadastrar-produtos"]').click()
    
    // Preenchimento do formulário
    cy.get('[data-testid="nome"]').type('Mouse Gamer incrivel')
    cy.get('[data-testid="preco"]').type('179')
    cy.get('[data-testid="descricao"]').type('Mouse leve (62g) e moderno')
    
    cy.get('[data-testid="cadastarProdutos"]').click()
    
    // Valido se o sistema reclamou (exemplo hipotético)
    cy.contains('Quantidade é obrigatório').should('be.visible')
  })
})