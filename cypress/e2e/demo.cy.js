let expectedUrl = 'https://www.saucedemo.com/inventory.html'

describe('Login page', () => {
    // beforeEach(()=>{
    //     cy.visit('https://www.saucedemo.com/')
    // })

    it('Sucess Login without custom command', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()

        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
    });

});