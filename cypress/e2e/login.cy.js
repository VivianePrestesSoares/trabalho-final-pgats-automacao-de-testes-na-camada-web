import Login from '../support/helpers/Login'
import LoginData from '../fixtures/login/LoginData.json'

describe('Login', () => {
    beforeEach(() => {
        cy.visit('/')
        Login.accessPageViaMenu()
    })

    it('Caso de teste 2: Login do Usuário com e-mail e senha corretos', () => {
        const user = LoginData.validUser

        Login.doLogin(user.email, user.password)

        cy.contains(`Logged in as ${user.name}`).should('be.visible')
        cy.contains('a', 'Logout').should('be.visible')
    })

    it('Caso de teste 3: Login do usuário com e-mail e senha incorretos', () => {
        const user = ({...LoginData.validUser, password: 'wrongpassword'})

        Login.doLogin(user.email, user.password)

        cy.contains('Your email or password is incorrect!').should('be.visible')
    })

    it('Caso de teste 4: Fazer logout do usuário', () => {
        const user = LoginData.validUser

        Login.doLogin(user.email, user.password)

        cy.contains(`Logged in as ${user.name}`).should('be.visible')
        cy.contains('a', 'Logout').click()
        cy.contains('a', 'Signup / Login').should('be.visible')
    })
})