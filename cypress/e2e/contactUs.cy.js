import ContactUs from '../support/helpers/ContactUs'
import ContactUsData from '../fixtures/contactUs/ContactUsData.json'

describe('Contact Us', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.contains('AutomationExercise').should('be.visible')
        ContactUs.accessPageViaMenu()
    })

    it('Caso de teste 6: Formulário de contato ', () => {
        const form = ContactUsData.form
        cy.contains('Get In Touch').should('be.visible')

        ContactUs.sendForm(form)
        cy.contains('Success! Your details have been submitted successfully.').should('be.visible')
        cy.contains('a', 'Home').click()
        cy.url().should('eq', Cypress.config('baseUrl') + '/')
        cy.contains('AutomationExercise').should('be.visible')
    })
})