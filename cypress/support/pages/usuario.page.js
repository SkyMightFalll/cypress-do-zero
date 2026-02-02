class UsuarioPage {
    elementos = {
        btnCadastrarUsu: '[data-testid="cadastrar-usuarios"]',
        campoNomeUsu: '[data-testid="nome"]',
        campoEmailUsu: '[data-testid="email"]',
        campoSenhaUsu: '[data-testid="password"]',
        btnAdm: '[data-testid="checkbox"]',
        btnsalvarUsu: '[data-testid="cadastrarUsuario"]'
    }

    cadastrarUsuario(nome, email, senha) {
        // 1. Clica para entrar na tela de cadastro
        cy.get(this.elementos.btnCadastrarUsu).click()

        // 2. TRUQUE PRO CI: Espera o campo Nome aparecer antes de tentar digitar
        // Isso evita que o teste falhe se a tela demorar 1 segundo pra carregar
        cy.get(this.elementos.campoNomeUsu).should('be.visible')

        if(nome) cy.get(this.elementos.campoNomeUsu).type(nome)
        if(email) cy.get(this.elementos.campoEmailUsu).type(email)
        if(senha) cy.get(this.elementos.campoSenhaUsu).type(senha)

        // 3. Corrigi os parênteses duplos ((...)) que estavam aqui
        cy.get(this.elementos.btnsalvarUsu).click()
    }

    cadastrarAdm(nome, email, senha) {
    cy.get(this.elementos.btnCadastrarUsu).click()

    if(nome) cy.get(this.elementos.campoNomeUsu).type(nome)
    if(email) cy.get(this.elementos.campoEmailUsu).type(email)
    if(senha) cy.get(this.elementos.campoSenhaUsu).type(senha)
        
    cy.get(this.elementos.btnAdm).click()

    cy.get(this.elementos.btnsalvarUsu).click()
    }
}

export default new UsuarioPage();