class LoginPage {
    elementos = {
        email: '[data-testid="email"]',
        senha: '[data-testid="senha"]',
        btnEntrar: '[data-testid="entrar"]'
    }

    realizarLogin(email, senha) {
        cy.visit('https://front.serverest.dev/login')
        cy.get(this.elementos.email).type(email)
        cy.get(this.elementos.senha).type(senha)
        cy.get(this.elementos.btnEntrar).click()
    }
}

export default new LoginPage();