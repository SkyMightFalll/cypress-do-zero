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
    cy.get(this.elementos.btnCadastrarUsu).click()

    if(nome) cy.get(this.elementos.campoNomeUsu).type(nome)
    if(email) cy.get(this.elementos.campoEmailUsu).type(email)
    if(senha) cy.get(this.elementos.campoSenhaUsu).type(senha)

    cy.get((this.elementos.btnsalvarUsu)).click()
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